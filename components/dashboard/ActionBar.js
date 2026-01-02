export function ActionBar({ onExport, isExporting, transactionCount }) {
  return (
    <div className="flex items-center justify-between mb-8 p-4 bg-surface rounded-lg border border-border">
      <div className="text-sm">
        <span className="font-medium text-foreground">{transactionCount}</span>
        <span className="text-muted"> transactions loaded</span>
      </div>
      
      <button
        onClick={onExport}
        disabled={isExporting}
        className={`
          px-4 py-2 rounded-lg font-medium transition
          ${isExporting
            ? 'bg-surface-muted text-muted cursor-not-allowed'
            : 'bg-primary hover:bg-primary-hover text-primary-foreground shadow-sm'
          }
        `}
      >
        {isExporting ? '⏳ Generating...' : '📄 Export PDF'}
      </button>
    </div>
  );
}