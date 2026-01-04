export function DateRangePicker({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) {
  const handleStartChange = (e) => {
    onStartDateChange(e.target.value);
  };

  const handleEndDate = (e) => {
    onEndDateChange(e.target.value);
  };

  return (
    <div className="bg-surface border border-border rounded-xl px-4 py-6 mb-6">
      <h3 className="text-sm font-medium text-muted mb-4">Date Range</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-muted mb-2">
            Start Date
          </label>
          <input
            type="date"
            value={startDate}
            onChange={handleStartChange}
            className="w-full px-4 py-2 rounded-lg border border-border bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-muted mb-2">
            End Date
          </label>
          <input
            type="date"
            value={endDate}
            onChange={handleEndDate}
            className="w-full px-4 py-2 rounded-lg border border-border bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition"
          />
        </div>
      </div>
    </div>
  );
}
