"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export function SpendingLineChart({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="bg-surface border border-border rounded-xl p-6 h-90 mt-8">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12 }}
            angle={-45}
            textAnchor="end"
            height={80}
          ></XAxis>
          <YAxis
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip
            formatter={(value) => [`$${value.toFixed(2)}`, "Spent"]}
            labelFormatter={(label) => `Date: ${label}`}
          />
          <Line
            type="monotone"
            dataKey="amount"
            strokeWidth={2}
            stroke="var(--color-expense)"
            dot={{ fill: "var(--color-expense)", r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
