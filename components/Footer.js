'use client'

import { PaperPlaneRightIcon } from "@phosphor-icons/react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
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
                <Link href="/#features" className="text-muted hover:text-foreground transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted hover:text-foreground transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-muted hover:text-foreground transition">
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
                <Link href="/faq" className="text-muted hover:text-foreground transition">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-foreground transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-foreground transition">
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
                <a href="#" className="text-muted hover:text-foreground transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-foreground transition">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          {/* 5 */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>

            <div className="flex items-center gap-2 mb-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-lg border border-border bg-surface-muted px-3 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              <button
                aria-label="Subscribe"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface hover:bg-surface-muted transition"
              >
                <PaperPlaneRightIcon></PaperPlaneRightIcon>
              </button>
            </div>

            <p className="text-xs text-muted leading-relaxed">
              Get the latest product news and behind the scenes updates.
            </p>
          </div>
        </div>

        {/* bottom */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted text-sm">
            © 2025 Acta. Built with Next.js & Tailwind v4.
          </p>
        </div>
      </div>
    </footer>
  );
}
