"use client";
import FileUpload from "@/components/FileUpload";
import SummaryCards from "@/components/summaryCard";
import TransactionTable from "@/components/TransactionTable";
import { calculateSummary } from "@/utils/calculations";
import { processTransactions } from "@/utils/categorize";
import { useState } from "react";

export default function Home() {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState(null);

  const handleDataParsed = (data) => {
    console.log("state lift:", data[0].amount);
    const processed = processTransactions(data);
    console.log("Processed:", processed);
    setTransactions(processed);
    console.log(calculateSummary(processed))
    setSummary(calculateSummary(processed));
  };

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Finance Tracker</h1>
        <a
          href="/sample.csv"
          download
          className="text-blue-600 hover:underline"
        >
          Download sample csv data
        </a>
        <FileUpload onDataParsed={handleDataParsed} />

        {transactions.length > 0 && (
          <div className="">
            <p className="text-lg font-semibold">
              Loaded {transactions.length} transactions
            </p>
          </div>
        )}

        {summary && <SummaryCards summary={summary} />}

        <div>
          <TransactionTable transactions={transactions} />
        </div>
      </div>
    </main>
  );
}
