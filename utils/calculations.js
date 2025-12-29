export function calculateSummary(transactions) {
  const expenses = transactions.filter((t) => t.amount < 0);
  const incomes = transactions.filter((t) => t.amount > 0);

  const totalExpense = expenses.reduce((sum, t) => sum + Math.abs(t.amount), 0);
  console.log(totalExpense);

  const totalIncome = incomes.reduce((sum, t) => sum + t.amount, 0);

  console.log(totalIncome);

  // group them by category

  const categoryMap = transactions.reduce((result, t) => {
    if (t.amount >= 0) return result;

    if (!result[t.category]) {
      result[t.category] = { total: 0, count: 0 };
      result[t.category].total += Math.abs(t.amount);
      result[t.category].count += 1;
    }

    return result;
  }, {});

  return {
    totalExpense,
    totalIncome,
    netSavings: totalIncome - totalExpense,
    transactionCount: transactions.length,
    byCategory: Object.entries(categoryMap)
      .map(([category, data]) => ({
        category,
        total: data.total,
        count: data.count,
        percentage: (data.total / totalExpense) * 100,
      }))
      .sort((a, b) => b.total - a.total),
  };
}

export function getSpendingOvertime(transactions) {
  const byDate = transactions.reduce((result, t) => {
    //skip income we care about expenses only on each date
    if (t.amount >= 0) return result;

    const date = t.date;

    if (!result[date]) {
      result[date] = 0;
    }

    result[date] += Math.abs(t.amount);

    return result;
  }, {});

  //convert object to array...then sort it by date...

  return Object.entries(byDate)
    .map(([date, total]) => ({
      date,
      amount: total,
    }))
    .sort((a, b) => new Date(a.date) - new Date(b.date));
}
