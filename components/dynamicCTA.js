"use client";

import { ArrowCircleUpRightIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative isolate max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 text-center overflow-hidden rounded-2xl sm:rounded-3xl bg-surface">
      
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <motion.div
          className="absolute -top-24 -left-24 sm:-top-32 sm:-left-32 
                     h-56 w-56 sm:h-72 sm:w-72 lg:h-80 lg:w-80 
                     rounded-full bg-primary/20 blur-3xl"
          animate={{
            x: [0, 14, -8, 0],
            y: [0, -14, 8, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-24 -right-24 sm:-bottom-32 sm:-right-32 
                     h-56 w-56 sm:h-72 sm:w-72 lg:h-80 lg:w-80 
                     rounded-full bg-honeydew-500/20 blur-3xl"
          animate={{
            x: [0, -14, 8, 0],
            y: [0, 14, -8, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,var(--color-primary)/0.15,transparent_70%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative"
      >
        <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
          Ready to Understand Your Finances?
        </h2>

        <p className="mb-8 sm:mb-10 mt-3 sm:mt-4 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base text-foreground-secondary italic">
          “The best way to predict the future is to track it.”
        </p>

        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          className="flex justify-center"
        >
          <Link
            href="/dashboard"
            className="relative inline-flex w-full sm:w-auto items-center justify-center gap-2 
                       px-6 sm:px-8 py-3.5 sm:py-4 
                       rounded-xl bg-primary text-primary-foreground 
                       font-semibold text-base sm:text-lg 
                       shadow-xl shadow-primary/25"
          >
            <span className="absolute inset-0 rounded-xl bg-primary blur-xl opacity-0 transition-opacity hover:opacity-40" />
            <span className="relative">Get Started Free</span>
            <ArrowCircleUpRightIcon size={24} weight="bold" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}