import { FilePdfIcon, SpinnerGapIcon } from "@phosphor-icons/react";
import ArrowLine from "../ArrowLine";

export function ActionBar({ onExport, isExporting, transactionCount }) {
  return (
    <div
      className="
      flex flex-col gap-4
      sm:flex-row sm:items-center sm:justify-between
      mb-8 p-4
      bg-surface rounded-lg
      border border-border
    "
    >
      {/* Left: Transaction Count */}
      <div className="text-sm text-center sm:text-left">
        <span className="font-medium text-foreground">{transactionCount}</span>
        <span className="text-muted"> transactions loaded</span>
      </div>

      {/* Right: Actions */}
      <div
        className="
        flex flex-col gap-3
        sm:flex-row sm:gap-4
        w-full sm:w-auto
      "
      >
        {/* Export Excel (Disabled) */}
        <div className="relative hidden sm:flex justify-center w-full sm:w-auto">
          <button
            disabled
            className="
              w-full sm:w-auto
              px-4 py-2 rounded-lg font-medium
              bg-surface-muted text-muted
              cursor-not-allowed
            "
          >
            Export to Excel
          </button>

          {/* Arrow + Label (desktop only) */}
          <div
            className="
              pointer-events-none
              absolute
              -top-20
              left-1/2
              -translate-x-1/2
              hidden sm:flex
              flex-col
              items-center
              gap-1
            "
          >
            <span
              className="
              text-[10px]
              font-mono
              text-primary
              whitespace-nowrap
            "
            >
              On the way
            </span>

            <ArrowLine />
          </div>
        </div>

        {/* Export PDF */}
        <button
          onClick={onExport}
          disabled={isExporting}
          className={`
    w-full sm:w-auto cursor-pointer
    inline-flex items-center justify-center gap-2
    px-4 py-2 rounded-lg font-medium transition
    ${
      isExporting
        ? "bg-surface-muted text-muted cursor-not-allowed"
        : "bg-primary hover:bg-primary-hover text-primary-foreground shadow-sm"
    }
  `}
        >
          {isExporting ? (
            <>
              <SpinnerGapIcon
                size={18}
                weight="bold"
                className="animate-spin"
              />
              Generating…
            </>
          ) : (
            <>
              <FilePdfIcon size={18} weight="bold" />
              Export PDF
            </>
          )}
        </button>
      </div>
    </div>
  );
}
