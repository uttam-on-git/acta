"use client";
import { CategoryBarChart } from "@/components/CategoryBarChart";
import { CategoryChart } from "@/components/CategoryChart";
import FileUpload from "@/components/FileUpload";
import { SpendingLineChart } from "@/components/SpendingLineChart";
import SummaryCards from "@/components/summaryCard";
import TransactionTable from "@/components/TransactionTable";
import { calculateSummary, getSpendingOvertime } from "@/utils/calculations";
import { processTransactions } from "@/utils/categorize";
import { useState } from "react";

export default function Home() {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState(null);
  const [spendingOverTime, setSpendingOverTime] = useState([]);

  const handleDataParsed = (data) => {
    console.log("state lift:", data[0].amount);
    const processed = processTransactions(data);
    console.log("Processed:", processed);
    setTransactions(processed);
    console.log(calculateSummary(processed));
    setSummary(calculateSummary(processed));
    setSpendingOverTime(getSpendingOvertime(processed));
    console.log(
      "data for line chart to draw spending over time",
      getSpendingOvertime(processed)
    );
  };

  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-8">Finance Tracker</h1>
          <p className="text-gray-600">
            Upload your bank statement to visualize your spending
          </p>
        </div>
        <a
          href="/sample.csv"
          download
          className="text-blue-600 hover:underline"
        >
          Download sample csv data
        </a>
        <div className="mb-6">
          <FileUpload onDataParsed={handleDataParsed} />
        </div>

        {transactions.length > 0 && (
          <div className="">
            <p className="text-lg font-semibold">
              Loaded {transactions.length} transactions
            </p>
          </div>
        )}

        {summary && (
        <>
          {/* Summary Cards */}
          <SummaryCards summary={summary} />

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <CategoryChart data={summary.byCategory} />
            <CategoryBarChart data={summary.byCategory} />
          </div>

          {/* Full Width Chart */}
          <SpendingLineChart data={spendingOverTime} />

          {/* Transactions Table */}
          <TransactionTable transactions={transactions} />
        </>
      )}
      </div>
    </main>
  );
}
