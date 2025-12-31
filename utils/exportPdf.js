
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

export function exportToPdf(transactions, summary) {
  console.log("Acta report is ready yo ...", {
    transactions,
    summary,
  });

  const doc = new jsPDF();
  const dateStr = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  //header
  doc.setFillColor(79, 70, 229); // Indigo-600
  doc.rect(0, 0, 210, 40, 'F');
  
  doc.setFontSize(26);
  doc.setTextColor(255, 255, 255);
  doc.setFont(undefined, "bold");
  doc.text("FINANCE REPORT", 14, 22);

  doc.setFontSize(10);
  doc.setFont(undefined, "normal");
  doc.setTextColor(224, 231, 255); // Indigo-100
  doc.text(`STATEMENT PERIOD: ${dateStr.toUpperCase()}`, 14, 32);
  doc.text("CONFIDENTIAL FINANCIAL DOCUMENT", 130, 32);

  // summary
  doc.setTextColor(30, 41, 59); // Slate-800
  doc.setFontSize(14);
  doc.setFont(undefined, "bold");
  doc.text("Financial Summary", 14, 55);

  //summary box
  doc.setDrawColor(226, 232, 240); // Slate-200
  doc.setFillColor(248, 250, 252); // Slate-50
  doc.roundedRect(14, 60, 182, 40, 3, 3, 'FD');


  doc.setFontSize(10);
  doc.setFont(undefined, "normal");
  doc.setTextColor(100, 116, 139); // Slate-500
  
  doc.text("TOTAL INCOME", 24, 72);
  doc.text("TOTAL EXPENSES", 84, 72);
  doc.text("NET SAVINGS", 144, 72);

  doc.setFontSize(12);
  doc.setFont(undefined, "bold");
  doc.setTextColor(30, 41, 59);
  doc.text(`$${summary.totalIncome.toLocaleString()}`, 24, 80);
  
  doc.setTextColor(220, 38, 38); // Red-600
  doc.text(`$${summary.totalExpense.toLocaleString()}`, 84, 80);
  
  doc.setTextColor(22, 163, 74); // Green-600
  doc.text(`$${summary.netSavings.toLocaleString()}`, 144, 80);


  doc.setFontSize(10);
  doc.setFont(undefined, "normal");
  doc.setTextColor(100, 116, 139);
  doc.text(`Based on ${summary.transactionCount} total transactions processed this month.`, 24, 92);

//category table
  doc.setTextColor(30, 41, 59);
  doc.setFontSize(14);
  doc.setFont(undefined, "bold");
  doc.text("Spending by Category", 14, 115);

  const categoryRows = summary.byCategory
    .filter(cat => cat.category !== 'Income')
    .sort((a, b) => b.total - a.total)
    .map(cat => [
      cat.category,
      `$${cat.total}`,
      cat.count,
      `${cat.percentage}%`
    ]);

  autoTable(doc, {
    startY: 120,
    head: [['Category', 'Total Amount', 'Count', 'Share']],
    body: categoryRows,
    theme: 'grid',
    headStyles: { fillColor: [79, 70, 229], textColor: [255, 255, 255], fontStyle: 'bold' },
    styles: { fontSize: 9, cellPadding: 4 },
    columnStyles: {
      1: { halign: 'right' },
      2: { halign: 'center' },
      3: { halign: 'right' }
    }
  });

  const lastY = (doc).lastAutoTable.finalY || 180;
  
  // check if we need a new page for the transaction header
  let startTransactionsY = lastY + 20;
  if (startTransactionsY > 260) {
    doc.addPage();
    startTransactionsY = 20;
  }

  doc.setTextColor(30, 41, 59);
  doc.setFontSize(14);
  doc.setFont(undefined, "bold");
  doc.text("Transaction History", 14, startTransactionsY);

  const transactionRows = transactions.map(t => [
    t.date,
    t.description,
    t.category,
    { 
      content: t.type === 'credit' ? `+$${t.amount.toLocaleString()}` : `-$${Math.abs(t.amount).toLocaleString()}`,
      styles: { 
        textColor: t.type === 'credit' ? [22, 163, 74] : [30, 41, 59],
        fontStyle: 'bold'
      }
    }
  ]);

  autoTable(doc, {
    startY: startTransactionsY + 5,
    head: [['Date', 'Description', 'Category', 'Amount']],
    body: transactionRows,
    theme: 'striped',
    headStyles: { fillColor: [51, 65, 85], textColor: [255, 255, 255] },
    styles: { fontSize: 8 },
    columnStyles: {
      3: { halign: 'right' }
    }
  });

  // footer
  const pageCount = (doc).internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text(
      `Acta Report - Page ${i} of ${pageCount}`,
      doc.internal.pageSize.getWidth() / 2,
      doc.internal.pageSize.getHeight() - 10,
      { align: 'center' }
    );
  }

  doc.save(`FinanceReport_${dateStr.replace(/ /g, '_')}.pdf`);
  console.log("Acta: Report generated successfully.");
}
