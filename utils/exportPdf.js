import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

export function exportToPdf(transactions, summary) {
  const doc = new jsPDF();

  const dateStr = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // --- BRAND COLORS (RGB-safe) ---
  const BRAND_PRIMARY = [20, 184, 166];      // dark-cyan
  const BRAND_PRIMARY_DARK = [13, 148, 136];
  const INCOME_GREEN = [22, 163, 74];         // honeydew
  const EXPENSE_RED = [220, 38, 38];
  const TEXT_DARK = [30, 41, 59];
  const TEXT_MUTED = [100, 116, 139];
  const BORDER_SOFT = [226, 232, 240];
  const SURFACE_MUTED = [248, 250, 252];

  // --- HEADER ---
  doc.setFillColor(...BRAND_PRIMARY);
  doc.rect(0, 0, 210, 42, "F");

  doc.setFontSize(24);
  doc.setTextColor(255, 255, 255);
  doc.setFont(undefined, "bold");
  doc.text("ACTA FINANCIAL REPORT", 14, 22);

  doc.setFontSize(10);
  doc.setFont(undefined, "normal");
  doc.setTextColor(236, 254, 255);
  doc.text(`Generated on ${dateStr}`, 14, 32);
  doc.text("Privacy-first • Local-only processing", 140, 32);

  // --- SUMMARY TITLE ---
  doc.setFontSize(14);
  doc.setFont(undefined, "bold");
  doc.setTextColor(...TEXT_DARK);
  doc.text("Financial Summary", 14, 58);

  // --- SUMMARY CARD ---
  doc.setDrawColor(...BORDER_SOFT);
  doc.setFillColor(...SURFACE_MUTED);
  doc.roundedRect(14, 62, 182, 42, 4, 4, "FD");

  doc.setFontSize(10);
  doc.setFont(undefined, "normal");
  doc.setTextColor(...TEXT_MUTED);

  doc.text("TOTAL INCOME", 26, 75);
  doc.text("TOTAL EXPENSES", 86, 75);
  doc.text("NET SAVINGS", 146, 75);

  doc.setFontSize(13);
  doc.setFont(undefined, "bold");

  doc.setTextColor(...INCOME_GREEN);
  doc.text(`$${summary.totalIncome.toLocaleString()}`, 26, 84);

  doc.setTextColor(...EXPENSE_RED);
  doc.text(`$${summary.totalExpense.toLocaleString()}`, 86, 84);

  doc.setTextColor(...BRAND_PRIMARY_DARK);
  doc.text(`$${summary.netSavings.toLocaleString()}`, 146, 84);

  doc.setFontSize(9);
  doc.setFont(undefined, "normal");
  doc.setTextColor(...TEXT_MUTED);
  doc.text(
    `Based on ${summary.transactionCount} transactions`,
    26,
    96
  );

  // --- CATEGORY BREAKDOWN ---
  doc.setFontSize(14);
  doc.setFont(undefined, "bold");
  doc.setTextColor(...TEXT_DARK);
  doc.text("Spending by Category", 14, 118);

  const categoryRows = summary.byCategory
    .filter((c) => c.category !== "Income")
    .sort((a, b) => b.total - a.total)
    .map((c) => [
      c.category,
      `$${c.total.toLocaleString()}`,
      c.count,
      `${c.percentage}%`,
    ]);

  autoTable(doc, {
    startY: 122,
    head: [["Category", "Total", "Count", "Share"]],
    body: categoryRows,
    theme: "grid",
    headStyles: {
      fillColor: BRAND_PRIMARY,
      textColor: [255, 255, 255],
      fontStyle: "bold",
    },
    styles: {
      fontSize: 9,
      cellPadding: 5,
      textColor: TEXT_DARK,
      lineColor: BORDER_SOFT,
    },
    columnStyles: {
      1: { halign: "right" },
      2: { halign: "center" },
      3: { halign: "right" },
    },
  });

  const lastY = doc.lastAutoTable.finalY || 170;

  // --- TRANSACTIONS ---
  let startY = lastY + 20;
  if (startY > 260) {
    doc.addPage();
    startY = 20;
  }

  doc.setFontSize(14);
  doc.setFont(undefined, "bold");
  doc.setTextColor(...TEXT_DARK);
  doc.text("Transaction History", 14, startY);

  const transactionRows = transactions.map((t) => [
    t.date,
    t.description,
    t.category,
    {
      content:
        t.type === "credit"
          ? `+$${t.amount.toLocaleString()}`
          : `-$${Math.abs(t.amount).toLocaleString()}`,
      styles: {
        textColor:
          t.type === "credit" ? INCOME_GREEN : EXPENSE_RED,
        fontStyle: "bold",
      },
    },
  ]);

  autoTable(doc, {
    startY: startY + 6,
    head: [["Date", "Description", "Category", "Amount"]],
    body: transactionRows,
    theme: "striped",
    headStyles: {
      fillColor: [15, 118, 110],
      textColor: [255, 255, 255],
    },
    styles: {
      fontSize: 8,
      cellPadding: 4,
      lineColor: BORDER_SOFT,
    },
    columnStyles: {
      3: { halign: "right" },
    },
  });

  // --- FOOTER ---
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(...TEXT_MUTED);
    doc.text(
      `Acta • Privacy-first finance • Page ${i} of ${pageCount}`,
      doc.internal.pageSize.getWidth() / 2,
      doc.internal.pageSize.getHeight() - 10,
      { align: "center" }
    );
  }

  doc.save(`Acta_Report_${dateStr.replace(/ /g, "_")}.pdf`);
}