export default function TransactionTable({ transactions }) {
  return (
    <div className="mt-8 bg-surface rounded-xl border border-border shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-border bg-surface-muted">
        <h2 className="text-lg font-semibold text-foreground">
          Transactions
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-surface-muted sticky top-0 z-10 shadow-sm">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-muted uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                Category
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border">
            {transactions.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="py-12 text-center text-sm text-muted"
                >
                  No transactions found
                </td>
              </tr>
            )}

            {transactions.map((transaction, index) => (
              <tr
                key={index}
                className={`
                  transition-colors duration-150
                  hover:bg-accent/40
                  focus-within:bg-accent/40
                  ${index % 2 === 0 ? "bg-surface" : "bg-surface-muted"}
                `}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
                  {transaction.date}
                </td>

                <td className="px-6 py-4 text-sm text-foreground">
                  {transaction.description}
                </td>

                <td
                  className={`px-6 py-4 whitespace-nowrap text-sm text-right font-medium tabular-nums ${
                    parseFloat(transaction.amount) < 0
                      ? "text-expense"
                      : "text-income"
                  }`}
                >
                  ${Math.abs(parseFloat(transaction.amount)).toFixed(2)}
                </td>

                <td className="px-6 py-4 text-sm">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground">
                    {transaction.category}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}