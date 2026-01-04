export default function SummaryCards({ summary }) {
  const cards = [
    {
      label: "Total Expenses",
      value: summary.totalExpense,
      colorClass: "text-expense",
      prefix: "-$",
    },
    {
      label: "Total Income",
      value: summary.totalIncome,
      colorClass: "text-income",
      prefix: "+$",
    },
    {
      label: "Net Savings",
      value: summary.netSavings,
      colorClass:
        summary.netSavings >= 0 ? "text-income" : "text-expense",
      prefix: summary.netSavings >= 0 ? "+$" : "-$",
    },
    {
      label: "Transactions",
      value: summary.transactionCount,
      colorClass: "text-primary",
      prefix: "",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      {cards.map((card) => (
        <div
          key={card.label}
          className="
            rounded-xl border border-border
            bg-card p-6 shadow-sm
            transition hover:shadow-md
          "
        >
          <p className="text-sm text-muted mb-2">
            {card.label}
          </p>

          <p className={`text-2xl font-semibold ${card.colorClass}`}>
            {card.prefix}
            {typeof card.value === "number"
              ? Math.abs(card.value).toFixed(2)
              : card.value}
          </p>
        </div>
      ))}
    </div>
  );
}