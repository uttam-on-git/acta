"use client";

export function CategoryFilter({
  onCategoryChange,
  selectedCategory,
  categories,
}) {
  const handleChange = (e) => {
    const value = e.target.value;
    console.log("hellllllllooo mf i got the value", value);
    onCategoryChange(value);
  };
  return (
    <div className="bg-surface border border-border rounded-xl px-4 py-6 mb-6">
      <label
        className="block text-sm font-medium text-muted mb-2"
        id="category-select"
      >
        Select category
      </label>
      <select
        name="category"
        onChange={handleChange}
        value={selectedCategory}
        id="category-select"
        className="w-full px-4 py-2 border border-border bg-surface  text-foreground  focus:ring-ring focus:border-ring rounded-lg"
      >
        <option value="">All Categories</option>
        {categories.map((cat) => {
          return (
            <option key={cat} value={cat}>
              {" "}
              {cat}
            </option>
          );
        })}
      </select>
    </div>
  );
}
