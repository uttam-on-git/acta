"use client";

import { useState } from "react";

export default function SearchBar({ onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    console.log("User search term:", value);
    onSearchChange(value);
  };

  return (
    <div className="bg-surface border border-border rounded-xl p-4 my-6">
      <label className="block text-sm font-medium text-muted mb-2">
        Search Transactions
      </label>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Type to search..."
        className="w-full px-4 py-2 border border-border bg-surface  text-foreground  focus:ring-ring focus:border-ring rounded-lg"
      />
    </div>
  );
}
