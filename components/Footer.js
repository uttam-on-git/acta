import Link from "next/link";

export function Footer() {
  return (
      <footer className="border-t border-border bg-surface mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* 1 */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">A</span>
                </div>
                <span className="font-bold text-lg">Acta</span>
              </div>
              <p className="text-muted text-sm">
                Privacy-first finance visualization for everyone
              </p>
            </div>

            {/* 2 */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/#features"
                    className="text-muted hover:text-foreground transition"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-muted hover:text-foreground transition"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard"
                    className="text-muted hover:text-foreground transition"
                  >
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/faq"
                    className="text-muted hover:text-foreground transition"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted hover:text-foreground transition"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted hover:text-foreground transition"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted hover:text-foreground transition"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted hover:text-foreground transition"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted text-sm">
              © 2025 Acta. Built with Next.js & Tailwind v4.
            </p>
          </div>
        </div>
      </footer>
  );
}