"use client";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
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

export function CategoryChart({ data }) {
  if (!data || data.length === 0) return null;

  //to use recharts we have to transform data...as object
  // {
  //   name: "...",
  //   value: "..."
  // }

  const chartData = data.map((item) => {
    return {
      name: item.category,
      value: item.total,
    };
  });

  return (
    <div className="bg-surface border border-border rounded-xl p-6 h-90">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
            outerRadius="70%"
            innerRadius="40%"
            fill="#8884d8"
            dataKey="value"
            className=""
          >
            {chartData.map((entry, index) => {
              return (
                <Cell
                  key={`cell-${entry.name}`}
                  fill={COLORS[index % COLORS.length]}
                ></Cell>
              );
            })}
          </Pie>
          <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
