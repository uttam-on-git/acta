export function DateRangePicker({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) {
  const handleStartChange = (e) => {
    const value = e.target.value;
    onStartDateChange(value);
  };

  const handleEndDate = (e) => {
    const value = e.target.value;
    onEndDateChange(value);
  };

  return (
    <div className="bg-white shadow rounded-lg px-4 py-6 mb-6">
      <h3 className="text-sm font-medium text-gray-700 mb-4">Date Range</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Start Date
          </label>
          <input 
            type="date" 
            value={startDate} 
            onChange={handleStartChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            End Date
          </label>
          <input 
            type="date" 
            value={endDate} 
            onChange={handleEndDate}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
}