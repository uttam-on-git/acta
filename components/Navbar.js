import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-lg">Acta</Link>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/pricing" className="hover:underline">Pricing</Link>
            <Link href="/faq" className="hover:underline">FAQ</Link>
          </div>
          <div>
            <ThemeToggle/>
            <Link href="/dashboard">Try Now</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
