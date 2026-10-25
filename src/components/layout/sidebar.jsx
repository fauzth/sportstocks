import { LayoutDashboard } from "lucide-react";
import { List } from "lucide-react";
import { ArrowLeftRight } from "lucide-react";
import { RotateCcwClock } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="rounded-xl p-3 sm:p-4 shadow-md w-full md:w-52 shrink-0 bg-sidebar-light dark:bg-sidebar-dark text-white transition-colors duration-200 flex flex-col justify-between">
      {/* Top / Brand Header */}
      <div>
        <div className="flex md:flex-col items-center justify-between md:justify-center pb-3 md:pb-4 border-b border-slate-700/60 dark:border-border-dark gap-3">
          <div className="flex items-center gap-3 md:flex-col md:gap-2">
            <Image
              src="/sportstocks.svg"
              alt="icon"
              width={40}
              height={40}
              loading="eager"
              className="rounded-xl md:w-20 md:h-20"
            />
            <div className="text-left md:text-center">
              <h1 className="text-xs sm:text-sm font-bold tracking-wide">
                SPORTSTOCKS
              </h1>
              <h3 className="text-[10px] sm:text-xs font-extralight text-slate-300">
                Inventory Management
              </h3>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="pt-3 md:pt-4">
          <h2 className="hidden md:block text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider mb-2">
            Operasional
          </h2>

          {/* Grid di mobile (2 kolom), Flex Column di desktop (md:) */}
          <div className="grid grid-cols-2 md:flex md:flex-col gap-1 font-medium text-xs">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 rounded-lg p-2 hover:bg-slate-700/60 dark:hover:bg-slate-800 transition-colors"
            >
              <LayoutDashboard size={16} className="shrink-0 sm:w-4 sm:h-4" />
              <span className="truncate">Dashboard</span>
            </Link>

            <Link
              href="/produk"
              className="flex items-center gap-2 rounded-lg p-2 hover:bg-slate-700/60 dark:hover:bg-slate-800 transition-colors"
            >
              <List size={16} className="shrink-0 sm:w-4 sm:h-4" />
              <span className="truncate">Produk</span>
            </Link>

            <Link
              href="/barang-masuk-keluar"
              className="flex items-center gap-2 rounded-lg p-2 hover:bg-slate-700/60 dark:hover:bg-slate-800 transition-colors"
            >
              <ArrowLeftRight size={16} className="shrink-0 sm:w-4 sm:h-4" />
              <span className="truncate">Masuk & Keluar</span>
            </Link>

            <Link
              href="/riwayat"
              className="flex items-center gap-2 rounded-lg p-2 hover:bg-slate-700/60 dark:hover:bg-slate-800 transition-colors"
            >
              <RotateCcwClock size={16} className="shrink-0 sm:w-4 sm:h-4" />
              <span className="truncate">Riwayat Stok</span>
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  );
}
