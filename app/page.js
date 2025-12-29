"use client";
import { CategoryBarChart } from "@/components/CategoryBarChart";
import { CategoryChart } from "@/components/CategoryChart";
import FileUpload from "@/components/FileUpload";
import { SpendingLineChart } from "@/components/SpendingLineChart";
import SummaryCards from "@/components/summaryCard";
import TransactionTable from "@/components/TransactionTable";
import { calculateSummary, getSpendingOvertime } from "@/utils/calculations";
import { processTransactions } from "@/utils/categorize";
import { useMemo, useState } from "react";
import SearchBar from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";

export default function Home() {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState(null);
  const [spendingOverTime, setSpendingOverTime] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

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

  const handleSearchChange = (value) => {
    console.log("parent recieves the search term", value);
    setSearchTerm(value);
  };

  const handleCategoryChange = (value) => {
    console.log("parents recieves the category selected", value);
    setSelectedCategory(value);
  };

  const filteredTransaction = useMemo(() => {
    //refactor this...so that we can use both...searchterm and selectedcategory

    return transactions.filter((transaction) => {
      const matchedSearch =
        searchTerm == "" ||
        transaction.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase().trim());

      const matchedCategory =
        selectedCategory == "" ||
        transaction.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchedSearch && matchedCategory;
    });
  }, [transactions, searchTerm, selectedCategory]);

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

            <div className="my-10">
              <CategoryFilter onCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} />
            </div>

            <SearchBar onSearchChange={handleSearchChange} />
            {transactions.length > 0 && (
              <p className="text-sm text-gray-600 mb-4">
                Showing {filteredTransaction.length} of {transactions.length}{" "}
                transactions
              </p>
            )}

            {/* Transactions Table */}
            <TransactionTable transactions={filteredTransaction} />
            <div className="mt-10">
              {filteredTransaction.length === 0 && searchTerm !== "" && (
                <p className="text-center text-gray-500 py-8">
                  No transactions found for {searchTerm}
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
