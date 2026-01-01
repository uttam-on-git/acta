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

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="block">
    <div className="flex items-center gap-1 p-1 bg-surface-muted rounded-lg">
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded transition ${
          theme === "light"
            ? "bg-surface text-foreground"
            : "text-muted hover:text-foreground"
        }`}
        aria-label="Light mode"
      >
        <SunIcon className="w-4 h-4" />
      </button>

      <button
        onClick={() => setTheme("system")}
        className={`p-2 rounded transition ${
          theme === "system"
            ? "bg-surface text-foreground"
            : "text-muted hover:text-foreground"
        }`}
        aria-label="System mode"
      >
        <MonitorIcon className="w-4 h-4" />
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded transition ${
          theme === "dark"
            ? "bg-surface text-foreground"
            : "text-muted hover:text-foreground"
        }`}
        aria-label="Dark mode"
      >
        <MoonIcon className="w-4 h-4" />
      </button>
    </div>
    </div>
  );
}
