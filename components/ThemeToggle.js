"use client";
import { MonitorIcon, MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-surface-muted animate-pulse" />
    );
  }

  const resolvedTheme = theme === "system" ? systemTheme : theme;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        relative flex h-9 w-9 items-center justify-center
        rounded-lg border border-border
        bg-surface hover:bg-surface-hover
        transition-all duration-300
        hover:scale-105
      "
      aria-label="Toggle theme"
    >
      {isDark ? (
        <SunIcon className="h-4 w-4 text-foreground transition-transform rotate-0 scale-100" />
      ) : (
        <MoonIcon className="h-4 w-4 text-foreground transition-transform rotate-0 scale-100" />
      )}
    </button>
  );
}
