export default function SummaryCards({ summary }) {
  const colorClasses = {
    red: 'text-red-600',
    green: 'text-green-600',
    blue: 'text-blue-600',
  };

  const cards = [
    {
      label: 'Total Expenses',
      value: summary.totalExpense,
      color: 'red',
      prefix: '-$',
    },
    {
      label: 'Total Income',
      value: summary.totalIncome,
      color: 'green',
      prefix: '+$',
    },
    {
      label: 'Net Savings',
      value: summary.netSavings,
      color: summary.netSavings >= 0 ? 'green' : 'red',
      prefix: summary.netSavings >= 0 ? '+$' : '-$',
    },
    {
      label: 'Transactions',
      value: summary.transactionCount,
      color: 'blue',
      prefix: '',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      {cards.map((card) => (
        <div key={card.label} className="bg-white rounded-lg shadow p-6">
          <p className="text-sm text-gray-600 mb-2">{card.label}</p>
          <p className={`text-2xl font-bold ${colorClasses[card.color]}`}>
            {card.prefix}
            {typeof card.value === 'number'
              ? Math.abs(card.value).toFixed(2)
              : card.value}
          </p>
        </div>
      ))}
    </div>
  );
}
