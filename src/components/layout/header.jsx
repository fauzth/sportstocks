"use client";

import { usePathname } from "next/navigation";
import { navigation } from "@/components/layout/breadcrumb";
import { Bell } from "lucide-react";
import LiveDateTime from "@/components/layout/livedatetime";
import ThemeToggle from "@/components/layout/toggle";

export default function Header() {
  const pathname = usePathname();
  const currentPage = navigation
    .flatMap((group) =>
      group.items.map((item) => ({
        ...item,
        group: group.group,
      })),
    )
    .find((item) => item.href === pathname);

  return (
    <header className="relative rounded-xl p-3 sm:p-4 flex items-center justify-between shadow-md w-full bg-app-light dark:bg-app-dark transition-colors duration-200 gap-2">
      {/* Left: Breadcrumb / Title */}
      <div className="flex-1 min-w-0 text-sm font-medium">
        {currentPage ? (
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm truncate">
            <span className="text-text-sub-light dark:text-text-sub-dark shrink-0">
              {currentPage.group}
            </span>
            <span className="text-text-sub-light dark:text-text-sub-dark shrink-0">
              /
            </span>
            <span className="font-medium text-text-main-light dark:text-text-main-dark truncate">
              {currentPage.title}
            </span>
          </div>
        ) : (
          <span className="text-text-main-light dark:text-text-main-dark">
            Halaman
          </span>
        )}
      </div>

      {/* Center: Badge DEMO (Sembunyi di Mobile Sangat Sempit / Muncul di Tablet) */}
      <span className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 px-3 py-1 text-[10px] sm:text-xs font-bold tracking-widest text-white bg-slate-900/80 backdrop-blur-md border border-slate-500/30 rounded-full shadow-md">
        DEMO
      </span>

      {/* Right: Date Time & Controls */}
      <div className="flex items-center gap-2 sm:gap-4 shrink-0">
        {/* Jam HANYA MUNCUL di layar medium (md:) ke atas */}
        <span className="hidden md:inline-block text-xs sm:text-sm text-text-main-light dark:text-text-main-dark whitespace-nowrap">
          <LiveDateTime />
        </span>

        <div className="flex items-center gap-1 sm:gap-2">
          <button
            className="group p-2 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors duration-200"
            aria-label="Notifikasi"
          >
            <Bell className="text-text-main-light dark:text-text-main-dark w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-200" />
          </button>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
