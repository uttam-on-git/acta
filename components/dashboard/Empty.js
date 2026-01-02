import { ChartBarIcon } from "@phosphor-icons/react";
import Link from "next/link";

export function EmptyState() {
  return (
    <div className="text-center py-16 px-4">
      <div className="max-w-md mx-auto">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-surface-muted flex items-center justify-center">
          <span className="text-3xl"><ChartBarIcon></ChartBarIcon></span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-foreground">
          No Data Yet
        </h3>
        <p className="text-muted mb-6">
          Upload a CSV file to see your financial insights
        </p>
        <Link 
          href="/sample.csv"
          download
          className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition"
        >
           Download Sample CSV
        </Link>
      </div>
    </div>
  );
}