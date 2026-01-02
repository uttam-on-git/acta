"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

import {
  ChartBarIcon,
  FilePdfIcon,
  GithubLogoIcon,
  LightningIcon,
  LockIcon,
  MagnifyingGlassIcon,
  MoonIcon,
} from "@phosphor-icons/react";

export default function Homepage() {
  return (
    <div>
      <section className="relative overflow-hidden pt-10 pb-10">
        <div className="absoluet inset-0 bg-linear-to-br from-blue-50 via-background to-background dark:from-slate-900 dark:via-background dark:to-background -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-22">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />

              <p
                className="
      relative inline-block
      bg-size-[250%_100%,auto]
      bg-clip-text text-transparent
      [background-repeat:no-repeat,padding-box]
      [--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]
      dark:[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]
      text-sm font-normal
      [--base-color:var(--color-primary)]
      [--base-gradient-color:var(--color-foreground)]
    "
                style={{
                  "--spread": "68px",
                  backgroundImage:
                    "var(--bg), linear-gradient(var(--base-color), var(--base-color))",
                  backgroundPosition: "0% center",
                }}
              >
                No signup required • 100% free
              </p>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-3xl font-medium tracking-tight md:text-4xl lg:text-6xl mb-6"
            >
              Transform Your
              <span className="block text-primary"> Bank Statements </span>
              Into Beautiful Insights
            </motion.h1>

            <p className="text-sm text-foreground-secondary mb-10 max-w-2xl mx-auto">
              Privacy-first finance visualization. Upload your CSV, see stunning
              charts instantly. All processing happens in your browser-your data
              never leaves your device.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dashboard"
                className="px-8 py-4 bg-primary hover:bg-primary-hover text-primary-foreground rounded-lg font-semibold text-lg transition shadow-lg shadow-primary/20"
              >
                Try It Free →
              </Link>
              <button className="px-8 py-4 bg-surface-muted cursor-pointer hover:bg-surface-hover text-foreground rounded-lg font-semibold text-lg transition border border-border">
                Open Source
              </button>
            </div>

            <p className="mt-8 text-sm text-muted">
              Trusted by freelancers, small businesses, and families worldwide
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-24">
        <div className="border-x border-border relative bg-surface-muted p-2 md:p-4 lg:p-8 rounded-2xl">
          <div className="absolute z-10 w-2 h-2 -top-1 -left-1 bg-primary rounded-full" />
          <div className="absolute z-10 w-2 h-2 -top-1 -right-1 bg-primary rounded-full" />
          <div className="absolute z-10 w-2 h-2 -bottom-1 -left-1 bg-primary rounded-full" />

          <motion.div
            className="absolute z-10 w-2 h-2 -bottom-1 -right-1 bg-primary rounded-full"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              boxShadow:
                "0 0 20px var(--color-primary), 0 0 40px var(--color-primary)",
            }}
          />

          <div className="relative w-full">
            <motion.div
              className="relative z-10 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/dashboard-ss.png"
                alt="Dashboard Preview"
                width={2000}
                height={1200}
                className="w-full rounded-lg border border-border shadow-2xl"
                priority
              />
            </motion.div>

            <div
              className="absolute inset-0 z-0 m-auto h-[90%] w-[95%] rounded-lg border border-border opacity-50"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(315deg, var(--color-border) 0, var(--color-border) 1px, transparent 0, transparent 50%)",
                backgroundSize: "10px 10px",
              }}
            />
          </div>
        </div>
      </section>
      <section
        id="features"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Everything You Need</h2>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            Powerful features designed to give you complete control over your
            financial data
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Feature Card 1 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-3xl">
                <ChartBarIcon></ChartBarIcon>
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Interactive Charts</h3>
            <p className="text-muted">
              Pie charts, bar graphs, and line charts that update in real-time
              as you filter your data
            </p>
          </motion.div>

          {/* Feature Card 2 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition"
          >
            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
              <span className="text-3xl">
                <LockIcon></LockIcon>
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
            <p className="text-muted">
              Your data never leaves your browser. No servers, no tracking,
              completely private
            </p>
          </motion.div>

          {/* Feature Card 3 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition"
          >
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
              <span className="text-3xl">
                <LightningIcon></LightningIcon>
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Analysis</h3>
            <p className="text-muted">
              Upload your CSV and see insights in seconds. Smart
              auto-categorization included
            </p>
          </motion.div>

          {/* Add 3 more features */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition"
          >
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
              <span className="text-3xl">
                <MagnifyingGlassIcon></MagnifyingGlassIcon>
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Powerful Filters</h3>
            <p className="text-muted">
              Search transactions, filter by category and date range to find
              exactly what you need
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition"
          >
            <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
              <span className="text-3xl">
                <FilePdfIcon></FilePdfIcon>
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">PDF Export</h3>
            <p className="text-muted">
              Generate professional reports with one click. Perfect for taxes
              and record-keeping
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition"
          >
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
              <span className="text-3xl">
                <MoonIcon></MoonIcon>
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Dark Mode</h3>
            <p className="text-muted">
              Beautiful design in both light and dark modes. Follows your system
              preferences
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section className="border-y border-border bg-surface-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-muted mb-8 font-medium">Perfect for</p>
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <span className="px-4 py-2 bg-surface rounded-lg">Freelancers</span>
            <span className="px-4 py-2 bg-surface rounded-lg">
              Small Businesses
            </span>
            <span className="px-4 py-2 bg-surface rounded-lg">
              Financial Advisors
            </span>
            <span className="px-4 py-2 bg-surface rounded-lg">Homeowners</span>
            <span className="px-4 py-2 bg-surface rounded-lg">Students</span>
            <span className="px-4 py-2 bg-surface rounded-lg">Families</span>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Ready to Understand Your Finances?
        </h2>
        <p className="text-xl text-foreground-secondary mb-8">
          No credit card required. Start visualizing in 30 seconds.
        </p>
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-hover text-primary-foreground rounded-lg font-semibold text-lg transition shadow-lg shadow-primary/20"
        >
          Get Started Free →
        </Link>
      </section>
    </div>
  );
}
