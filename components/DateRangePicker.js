"use client";
import { useState } from "react";

export function DateRangePicker({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) {
  const handleStartChange = (e) => {
    const startDate = e.target.value;
    console.log(
      "i didn't knew i can get date directly i thought i have to handle in more ways...",
      startDate
    );
    onStartDateChange(startDate);
  };

  const handleEndDate = (e) => {
    const endDate = e.target.value;
    onEndDateChange(endDate);
  };

  return (
    <div className="gap-15 bg-white shadow rounded-lg px-4 py-6 mb-6 flex">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2" id="startDate">Start Date</label>
        <input type="date" value={startDate} onChange={handleStartChange} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2" id="endDate">End Date</label>
        <input type="date" value={endDate} onChange={handleEndDate} />
      </div>
    </div>
  );
}
