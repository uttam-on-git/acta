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
import { exportToPdf } from "@/utils/exportPdf";
import { EmptyState } from "@/components/dashboard/Empty";
import { ActionBar } from "@/components/dashboard/ActionBar";
import { FilterSection } from "@/components/dashboard/FilterSection";
import { Card } from "@/components/dashboard/Card";

import Papa from "papaparse";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState(null);
  const [spendingOverTime, setSpendingOverTime] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isExporting, setIsExporting] = useState(false);

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

  const handleStartDate = (value) => {
    console.log("mf parent recieve start date", value);
    setStartDate(value);
  };

  const handleEndDate = (value) => {
    console.log("mf parent recieve end date", value);
    setEndDate(value);
  };

  const filteredTransaction = useMemo(() => {
    //refactor this...so that we can use both...searchterm and selectedcategory

    return transactions.filter((transaction) => {
      const matchedSearch =
        searchTerm === "" ||
        transaction.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase().trim());

      const matchedCategory =
        selectedCategory === "" ||
        transaction.category.toLowerCase() === selectedCategory.toLowerCase();

      //date filter

      const transactionDate = new Date(transaction.date);

      const start = startDate ? new Date(startDate) : null;

      const end = endDate ? new Date(endDate) : null;

      const matchedDate =
        (!start && !end) ||
        ((!start || transactionDate >= start) &&
          (!end || transactionDate <= end));

      return matchedSearch && matchedCategory && matchedDate;
    });
  }, [transactions, searchTerm, selectedCategory, startDate, endDate]);

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(transactions.map((t) => t.category))];

    console.log("what unique category do you have bro... ", uniqueCategories);

    return uniqueCategories.sort();
  }, [transactions]);

  const handlePdfExport = () => {
    if (!summary || filteredTransaction.length === 0) {
      console.warn(
        "hello mr. first upload csv data then only i am gonna work: no data available"
      );
      return;
    }

    setIsExporting(true);

    setTimeout(() => {
      console.log("Exporting....................");

      exportToPdf(filteredTransaction, summary);
      console.log("yo done exporting");
      setIsExporting(false);
    }, 500);
  };

  const handleTrySample = async () => {
    try {
      const response = await fetch("/sample.csv");
      const csvText = await response.text();

      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          console.log("Sample data loaded:", results.data);
          handleDataParsed(results.data);
        },
        error: (error) => {
          console.error("Error loading sample:", error);
        },
      });
    } catch (error) {
      console.error("Failed to load sample:", error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Acta Dashboard
        </h1>
        <p className="text-foreground-secondary">
          Upload your bank statement to visualize spending patterns
        </p>
      </section>

      <section className="mb-10">
        <div className="relative rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row items-stretch gap-6">
            {/* Upload */}
            <div className="flex-1">
              <FileUpload onDataParsed={handleDataParsed} />
            </div>

            {/* Divider */}
            <div className="relative flex lg:flex-col items-center justify-center">
              <div className="hidden lg:block h-full w-px bg-border opacity-60" />
              <div className="lg:hidden w-full h-px bg-border opacity-60" />
              <span className="absolute bg-surface px-3 text-sm text-muted">
                or
              </span>
            </div>

            {/* Sample (soft action) */}
            <button
              onClick={handleTrySample}
              className="self-center text-sm font-medium text-muted hover:text-foreground transition underline-offset-4 hover:underline"
            >
              Try sample data
            </button>
          </div>
        </div>
      </section>

      {transactions.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <ActionBar
            onExport={handlePdfExport}
            isExporting={isExporting}
            transactionCount={transactions.length}
          />

          {summary && (
            <>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">
                  Insights
                </h2>
                <section className="mb-8">
                  <SummaryCards summary={summary} />
                </section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card title="Spending by Category">
                    <CategoryChart data={summary.byCategory} />
                  </Card>
                  <Card title="Top Spending Categories">
                    <CategoryBarChart data={summary.byCategory} />
                  </Card>
                </div>
                <div className="mt-6">
                  <Card title="Spending Over Time">
                    <SpendingLineChart data={spendingOverTime} />
                  </Card>
                </div>
              </section>
            </>
          )}

          <FilterSection
            onSearchChange={handleSearchChange}
            onCategoryChange={handleCategoryChange}
            selectedCategory={selectedCategory}
            categories={categories}
            onStartDateChange={handleStartDate}
            onEndDateChange={handleEndDate}
            startDate={startDate}
            endDate={endDate}
            filteredCount={filteredTransaction.length}
            totalCount={transactions.length}
          />

          <section>
            <TransactionTable transactions={filteredTransaction} />
            {filteredTransaction.length === 0 && searchTerm !== "" && (
              <p className="text-center text-muted py-8">
                No transactions found for {searchTerm}
              </p>
            )}
          </section>
        </>
      )}
    </div>
  );
}
