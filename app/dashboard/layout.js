import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">A</span>
                </div>
                <span className="font-bold text-lg text-foreground">Acta</span>
              </Link>
              
              <Link 
                href="/"
                className="text-sm text-muted hover:text-foreground transition"
              >
                ← Back to Home
              </Link>
            </div>

            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* dashboard content */}
      <main className="py-8">
        {children}
      </main>
    </div>
  );
}