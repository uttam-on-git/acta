"use client";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 100);
  });

  return (
    <>
      <motion.nav
        className="fixed inset-x-0 top-4 z-50 mx-auto hidden md:flex max-w-6xl items-center justify-between bg-surface/80 backdrop-blur-lg px-6 py-3 rounded-2xl border border-border shadow-lg"
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isScrolled ? 0 : -100,
          opacity: isScrolled ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center"
          >
            <span className="text-primary-foreground font-bold text-lg">
              A
            </span>
          </motion.div>
          <span className="font-bold text-xl text-foreground">Acta</span>
        </Link>

        <div className="flex items-center gap-8">
          <Link href="/#features" className="text-muted hover:text-foreground transition">
            Features
          </Link>
          <Link href="/pricing" className="text-muted hover:text-foreground transition">
            Pricing
          </Link>
          <Link href="/faq" className="text-muted hover:text-foreground transition">
            FAQ
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/dashboard"
            className="px-6 py-2 bg-primary hover:bg-primary-hover text-primary-foreground rounded-xl font-medium transition"
          >
            Try Now
          </Link>
        </div>
      </motion.nav>

      <motion.div
        initial={false}
        animate={{
          opacity: isScrolled ? 0 : 1,
          y: isScrolled ? -20 : 0,
          pointerEvents: isScrolled ? "none" : "auto",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative z-40"
      >
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">
                A
              </span>
            </div>
            <span className="font-bold text-xl text-foreground">Acta</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/#features" className="text-muted hover:text-foreground transition">
              Features
            </Link>
            <Link href="/pricing" className="text-muted hover:text-foreground transition">
              Pricing
            </Link>
            <Link href="/faq" className="text-muted hover:text-foreground transition">
              FAQ
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/dashboard"
              className="px-6 py-2 bg-primary hover:bg-primary-hover text-primary-foreground rounded-xl font-medium transition"
            >
              Try Now
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}
