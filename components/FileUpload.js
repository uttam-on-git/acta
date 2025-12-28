"use client";
import { useState } from "react";
import Papa from "papaparse";

export default function FileUpload({ onDataParsed }) {
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    console.log("file selected: ", file);

    setLoading(true);
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        console.log(results.data);
        onDataParsed(results.data);
        setLoading(false);
      },
      error: (error) => {
        console.log("Parse error ", error);
        setLoading(false);
      },
    });
  };
  return (
    <div className="border-2 border-gray-500 border-dotted rounded-lg p-6 text-center">
      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        id="file-upload"
        className="hidden"
      />
      <label
        htmlFor="file-upload"
        className={`cursor-pointer ${loading ? "text-gray-600" : "text-blue-500 hover:text-blue-700"}`}
      >
        { loading ? "parsing..." : "Upload CSV File"}
      </label>
    </div>
  );
}
