"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

const emptySubscribe = () => () => {};
function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useIsMounted();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group p-2 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors duration-200"
      aria-label="Toggle Theme"
    >
      {mounted && theme === "dark" ? (
        <Sun className="text-slate-200 w-5 h-5 transition-colors duration-200" />
      ) : (
        <Moon className="text-slate-900 dark:text-white w-5 h-5 transition-colors duration-200" />
      )}
    </button>
  );
}
