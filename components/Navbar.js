"use client";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && !scrolled) {
      setScrolled(true);
    } else if (latest <= 50 && scrolled) {
      setScrolled(false);
    }
  });
  return (
    <motion.nav
      className={`sticky left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.1, rotate: -90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center"
            >
              <span className="text-primary-foreground font-bold text-lg">
                A
              </span>
            </motion.div>
            <span className="font-bold text-xl text-foreground">Acta</span>
          </Link>
          {/*nav links*/}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#features"
              className="text-foreground-secondary hover:text-foreground transition"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-foreground-secondary hover:text-foreground transition"
            >
              Pricing
            </Link>
            <Link
              href="/faq"
              className="text-foreground-secondary hover:text-foreground transition"
            >
              FAQ
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link
                href="/dashboard"
                className="px-4 py-2 bg-primary hover:bg-primary-hover text-primary-foreground rounded-lg font-medium transition"
              >
                Try Now
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
