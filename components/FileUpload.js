"use client";
import { useState } from "react";
import Papa from "papaparse";
import { CheckCircleIcon, CircleNotchIcon, UploadIcon, WarningCircleIcon } from "@phosphor-icons/react";

export default function FileUpload({ onDataParsed }) {
  const [loading, setLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const parseFile = (file) => {
    if (!file) return;
    console.log("file selected: ", file);

    setLoading(true);
    setError(null);
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        console.log(results.data);
        onDataParsed(results.data);
        setLoading(false);
        setSuccess(true);
        //hide after 2 sec
        setTimeout(() => setSuccess(false), 2000);
      },
      error: (error) => {
        console.log("Parse error ", error);
        setError("Failed to parse CSV. Please check the file format.");
        setLoading(false);
      },
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    parseFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (!file) return;

    if (!file.name.endsWith(".csv")) {
      setError("Please upload a CSV file");
      return;
    }

    console.log("file dropped: ", file);
    parseFile(file);
  };

  return (
  <div 
    className={`
      border-2 border-dotted rounded-lg p-12 text-center
      transition-all duration-200
      ${isDragging ? 'border-primary bg-accent scale-105' : 'border-border bg-surface'}
      ${error ? 'border-danger' : ''}
    `}
    onDragOver={handleDragOver}
    onDragLeave={handleDragLeave}
    onDrop={handleDrop}
  >
    <input
      type="file"
      accept=".csv"
      onChange={handleFileChange}
      id="file-upload"
      className="hidden"
      disabled={loading}
    />
    
    <label
      htmlFor="file-upload"
      className="cursor-pointer"
    >
      <div className="flex flex-col items-center gap-3">
        {loading && <CircleNotchIcon className="w-12 h-12 text-primary animate-spin" />}
        {success && <CheckCircleIcon className="w-12 h-12 text-success" />}
        {error && <WarningCircleIcon className="w-12 h-12 text-danger" />}
        {!loading && !success && !error && <UploadIcon className="w-12 h-12 text-muted" />}
        
        <div>
          <p className="text-lg font-medium text-foreground">
            {loading && "Parsing your file..."}
            {success && "Upload successful!"}
            {error && "Upload failed"}
            {!loading && !success && !error && "Drop CSV here or click to browse"}
          </p>
          
          {!loading && !success && !error && (
            <p className="text-sm text-muted mt-2">
              Supports .csv files
            </p>
          )}
          
          {error && (
            <p className="text-sm text-danger mt-2">
              {error}
            </p>
          )}
        </div>
      </div>
    </label>
  </div>
);
}
