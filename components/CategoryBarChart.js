"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const COLORS = [
  "#3b82f6",
  "#ef4444",
  "#10b981",
  "#f59e0b",
  "#8b5cf6",
  "#ec4899",
  "#06b6d4",
  "#84cc16",
];

export function CategoryBarChart({ data }) {
  if (!data || data.length === 0) return null;

  const topCategories = data.slice(0, 6);

  return (
    <div className="bg-white rounded-lg shadow p-6 my-8">
      <h2 className="text-xl font-semibold mb-4">
        Top Spending Categories
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        {/* ✅ FIX 1: pass data */}
        <BarChart
          data={topCategories}
          layout="vertical"
          margin={{ left: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          {/* Amount on X-axis */}
          <XAxis
            type="number"
            tickFormatter={(value) => `$${value}`}
          />

          {/* Category names on Y-axis */}
          <YAxis
            type="category"
            dataKey="category"
            width={120}
          />

          <Tooltip
            formatter={(value) => `$${value.toFixed(2)}`}
          />

          <Bar dataKey="total" radius={[0, 8, 8, 0]}>
            {topCategories.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}