import { CategoryFilter } from "../CategoryFilter";
import { DateRangePicker } from "../DateRangePicker";
import SearchBar from "../SearchBar";

export function FilterSection({
  onSearchChange,
  onCategoryChange,
  selectedCategory,
  categories,
  onStartDateChange,
  onEndDateChange,
  startDate,
  endDate,
  filteredCount,
  totalCount,
}) {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl mb-4 font-semibold text-foreground">
          Transactions
        </h2>
      </div>

      {/* Filters Container */}
      <div className="space-y-4 p-4 bg-surface rounded-lg border border-border">
        <SearchBar onSearchChange={onSearchChange} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CategoryFilter
            onCategoryChange={onCategoryChange}
            selectedCategory={selectedCategory}
            categories={categories}
          />
          <DateRangePicker
            startDate={startDate}
            endDate={endDate}
            onStartDateChange={onStartDateChange}
            onEndDateChange={onEndDateChange}
          />
          <p className="text-sm text-muted">
            Showing{" "}
            <span className="font-medium text-foreground">{filteredCount}</span>{" "}
            of {totalCount}
          </p>
        </div>
      </div>
    </section>
  );
}
