"use client";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowCircleUpRightIcon,
  BriefcaseIcon,
  ChartBarIcon,
  FilePdfIcon,
  GithubLogoIcon,
  GraduationCapIcon,
  HouseIcon,
  LightningIcon,
  LockIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  StorefrontIcon,
  TrendUpIcon,
  UsersIcon,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export default function Homepage() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const resolvedTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      <section className="relative overflow-hidden pt-0 -mt-px pb-10">
        <div className="absoluet bg-linear-to-br from-blue-50 via-background to-background dark:from-slate-900 dark:via-background dark:to-background -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-22 relative -mt-px">
          <div className="absolute left-4 hidden md:block sm:left-6 lg:left-8 bg-border w-px inset-y-0" />
          {/* <div className="absolute left-4 sm:left-6 lg:left-8 bg-border w-px inset-y-0" /> */}

          <div className="absolute hidden md:block right-4 sm:right-6 lg:right-8 bg-border w-px inset-y-0" />
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

            <p className="mt-4 hidden sm:block text-muted mb-10 max-w-2xl mx-auto">
              A privacy-first way to visualize your finances. Upload a CSV and
              explore stunning charts in seconds, with your data staying on your
              device.
            </p>
            <p className="mt-4 block sm:hidden text-muted mb-10 max-w-2xl mx-auto">Upload a CSV. Get instant insights. Your data never leaves your device.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 min-w-55 bg-primary hover:bg-primary-hover text-primary-foreground rounded-lg font-semibold text-lg transition shadow-lg shadow-primary/20 w-full sm:w-auto"
              >
                <span>Try It Free</span>
                <ArrowCircleUpRightIcon size={24} weight="bold" />
              </Link>

              <Link
                href="https://github.com/uttam-on-git/acta"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 min-w-55 bg-surface-muted cursor-pointer hover:bg-surface-hover text-foreground rounded-lg font-semibold text-lg transition border border-border w-full sm:w-auto"
              >
                <span>Open Source</span>
                <GithubLogoIcon size={24} weight="bold" />
              </Link>
            </div>

            <p className="mt-8 text-sm text-muted">
              Trusted by freelancers, small businesses, and families worldwide
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl relative mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-24">
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
              {!mounted ? (
                <div className="w-full aspect-2000/1200 rounded-lg border border-border bg-surface-muted animate-pulse" />
              ) : (
                <motion.div
                  key={resolvedTheme}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={
                      resolvedTheme === "dark"
                        ? "/dashboard-dark.png"
                        : "/dashboard-light.png"
                    }
                    alt="Dashboard Preview"
                    width={2000}
                    height={1200}
                    className="w-full rounded-lg border border-border shadow-2xl"
                    priority
                  />
                </motion.div>
              )}
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
        className="max-w-7xl mx-auto overflow-hidden px-4 sm:px-6 lg:px-8 py-24"
      >
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Everything You Need</h2>
          <p className="text-xl mt-4 text-muted max-w-2xl mx-auto">
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
              <ChartBarIcon size={20} className="text-primary" />
            </div>

            <h3 className="text-xl font-semibold mb-2">Interactive Charts</h3>
            <p className="text-muted text-sm">
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
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <LockIcon size={20} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
            <p className="text-muted text-sm">
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
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <LightningIcon size={20} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Analysis</h3>
            <p className="text-muted text-sm">
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
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <MagnifyingGlassIcon size={20} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Powerful Filters</h3>
            <p className="text-muted text-sm">
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
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <FilePdfIcon size={20} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">PDF Export</h3>
            <p className="text-muted text-sm">
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
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <MoonIcon size={20} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Dark Mode</h3>
            <p className="text-muted text-sm">
              Beautiful design in both light and dark modes. Follows your system
              preferences
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section className="relative py-28 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Designed for every financial journey
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted">
              One private system that adapts as your finances evolve.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="space-y-6">
              {[
                {
                  title: "Launch Faster",
                  desc: "Upload a CSV and instantly see clean summaries, charts, and insights-no setup required.",
                  Icon: BriefcaseIcon,
                },
                {
                  title: "Iterate Rapidly",
                  desc: "Refine filters, explore categories, and adjust views as your financial questions change.",
                  Icon: UsersIcon,
                },
                {
                  title: "Scale Smarter",
                  desc: "Analyze months or years of transactions smoothly as your financial data grows.",
                  Icon: TrendUpIcon,
                },
              ].map(({ title, desc, Icon }) => (
                <motion.div
                  key={title}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="rounded-2xl bg-card border border-border p-6 shadow-sm"
                >
                  <Icon size={20} className="text-primary mb-3" />
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-muted">{desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex justify-center"
            >
              <div className="relative w-85 h-105 rounded-3xl bg-card border border-border-strong shadow-lg overflow-hidden">
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "radial-gradient(var(--color-border) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-6 right-6 text-xs px-3 py-1 rounded-full bg-success/15 text-success"
                >
                  Live
                </motion.div>

                <div className="relative z-10 h-full flex flex-col items-center justify-center gap-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-14 h-14 rounded-xl bg-surface border border-border flex items-center justify-center font-semibold text-primary"
                  >
                    CSV
                  </motion.div>

                  <div className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                    Processed locally
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="w-64 rounded-xl bg-surface border border-border p-4"
                  >
                    <p className="text-sm font-medium mb-3">Dashboard</p>
                    <div className="space-y-2">
                      <div className="h-2 bg-border rounded" />
                      <div className="h-2 bg-border rounded w-4/5" />
                      <div className="h-2 bg-border rounded w-3/5" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  title: "Reuse Intelligence",
                  desc: "Recognize recurring spending patterns and categories you can rely on every month.",
                  Icon: StorefrontIcon,
                },
                {
                  title: "Prevent Surprises",
                  desc: "Catch unusual expenses and hidden trends early before they impact your budget.",
                  Icon: HouseIcon,
                },
                {
                  title: "Automate More",
                  desc: "Let calculations, breakdowns, and insights update automatically as data changes.",
                  Icon: GraduationCapIcon,
                },
              ].map(({ title, desc, Icon }) => (
                <motion.div
                  key={title}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="rounded-2xl bg-card border border-border p-6 shadow-sm"
                >
                  <Icon size={20} className="text-primary mb-3" />
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-muted">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="mb-6 text-3xl md:text-4xl font-semibold tracking-tight">
          Ready to Understand Your Finances?
        </h2>
        <p className="mb-8 mt-4 max-w-2xl mx-auto text-muted">
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
