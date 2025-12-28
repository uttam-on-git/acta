export default function TransactionTable({ transactions }) {
  return (
    <div className="mt-8 bg-white rounded-lg shadow overflow-hidden">
      <div className="px-6 py-4 border-b">
        <h2 className="text-xl font-semibold text-gray-950">Transactions</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {transactions.map((transaction, index) => {
              return (
                <tr key={index} className="hover:bg-gray-200">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {" "}
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.description}
                  </td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap text-sm text-right font-medium ${
                      parseFloat(transaction.amount) < 0
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    ${Math.abs(parseFloat(transaction.amount)).toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
