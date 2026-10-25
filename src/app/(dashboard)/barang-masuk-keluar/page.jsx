"use client";
import {
  Plus,
  Funnel,
  SquareArrowRightEnter,
  SquareArrowRightExit,
  ArrowDownToLine,
  ArrowUpToLine,
} from "lucide-react";

import dynamic from "next/dynamic";

const TableTransaksi = dynamic(() => import("@/components/inventory/table"), {
  ssr: false,
  loading: () => <p className="font-medium text-gray-900">Memuat tabel...</p>,
});

export default function BarangMasukKeluarPage() {
  return (
    <div className="h-auto w-full flex flex-col gap-4 shadow-md rounded-xl p-4 sm:p-6 bg-app-light dark:bg-app-dark text-text-main-light dark:text-text-main-dark transition-colors duration-200">
      {/* Header & Tombol Tambah Transaksi */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-bold text-xl sm:text-2xl text-text-main-light dark:text-text-main-dark">
            Barang Masuk & Keluar
          </h1>
          <p className="font-light text-xs sm:text-sm text-text-sub-light dark:text-text-sub-dark mt-1">
            Catat penerimaan barang dan pengeluaran stok gudang.
          </p>
        </div>

        <button className="w-full sm:w-auto self-start sm:self-auto cursor-pointer flex items-center justify-center gap-2 p-2.5 px-4 rounded-full transition-colors duration-200 bg-sidebar-light hover:bg-slate-700 dark:bg-card-dark dark:hover:bg-slate-800 text-white border border-border-dark shrink-0">
          <Plus className="w-5 h-5 text-white" />
          <span className="font-medium text-sm text-white">
            Tambah Transaksi
          </span>
        </button>
      </header>

      {/* Ringkasan Statistik 4 Kartu */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 py-2">
        <div className="p-3 sm:p-0 rounded-lg bg-card-light dark:bg-card-dark sm:bg-transparent sm:dark:bg-transparent border border-border-light dark:border-border-dark sm:border-none">
          <SquareArrowRightEnter className="text-emerald-600 dark:text-emerald-400 text-lg mb-1" />
          <h2 className="font-light text-xs sm:text-sm text-text-sub-light dark:text-text-sub-dark">
            Barang Masuk Hari Ini
          </h2>
          <h1 className="font-bold text-xl sm:text-2xl text-text-main-light dark:text-text-main-dark mt-0.5 sm:mt-1">
            30 Unit
          </h1>
        </div>

        <div className="p-3 sm:p-0 rounded-lg bg-card-light dark:bg-card-dark sm:bg-transparent sm:dark:bg-transparent border border-border-light dark:border-border-dark sm:border-none">
          <SquareArrowRightExit className="text-rose-600 dark:text-rose-400 text-lg mb-1" />
          <h2 className="font-light text-xs sm:text-sm text-text-sub-light dark:text-text-sub-dark">
            Barang Keluar Hari Ini
          </h2>
          <h1 className="font-bold text-xl sm:text-2xl text-text-main-light dark:text-text-main-dark mt-0.5 sm:mt-1">
            5 Unit
          </h1>
        </div>

        <div className="p-3 sm:p-0 rounded-lg bg-card-light dark:bg-card-dark sm:bg-transparent sm:dark:bg-transparent border border-border-light dark:border-border-dark sm:border-none">
          <ArrowDownToLine className="text-text-main-light dark:text-text-main-dark text-lg mb-1" />
          <h2 className="font-light text-xs sm:text-sm text-text-sub-light dark:text-text-sub-dark">
            Total Transaksi Masuk
          </h2>
          <h1 className="font-bold text-xl sm:text-2xl text-text-main-light dark:text-text-main-dark mt-0.5 sm:mt-1">
            6
          </h1>
          <h4 className="font-light text-[10px] sm:text-xs text-text-sub-light dark:text-text-sub-dark mt-0.5">
            Hari ini
          </h4>
        </div>

        <div className="p-3 sm:p-0 rounded-lg bg-card-light dark:bg-card-dark sm:bg-transparent sm:dark:bg-transparent border border-border-light dark:border-border-dark sm:border-none">
          <ArrowUpToLine className="text-text-main-light dark:text-text-main-dark text-lg mb-1" />
          <h2 className="font-light text-xs sm:text-sm text-text-sub-light dark:text-text-sub-dark">
            Total Transaksi Keluar
          </h2>
          <h1 className="font-bold text-xl sm:text-2xl text-text-main-light dark:text-text-main-dark mt-0.5 sm:mt-1">
            2
          </h1>
          <h4 className="font-light text-[10px] sm:text-xs text-text-sub-light dark:text-text-sub-dark mt-0.5">
            Hari ini
          </h4>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="flex flex-col sm:flex-row items-stretch py-2 pb-4 sm:pb-6 border-b border-border-light dark:border-border-dark gap-3 w-full">
        <div className="relative flex-1 min-w-0">
          <label htmlFor="tailwind-search" className="sr-only">
            Search
          </label>
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-text-sub-light dark:text-text-sub-dark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            id="tailwind-search"
            name="search"
            type="search"
            placeholder="Search..."
            className="block w-full rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark py-2 pr-3 pl-10 text-text-main-light dark:text-text-main-dark placeholder:text-text-sub-light dark:placeholder:text-text-sub-dark focus:ring-2 focus:ring-slate-400 outline-none text-sm shadow-sm transition-colors duration-200"
          />
        </div>

        <button className="group px-4 py-2 flex items-center justify-center gap-2 cursor-pointer rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark hover:bg-slate-200 dark:hover:bg-slate-800 text-text-main-light dark:text-text-main-dark transition-all duration-200 shadow-sm text-sm font-medium whitespace-nowrap">
          <Funnel className="h-4 w-4 text-text-sub-light dark:text-text-sub-dark group-hover:text-text-main-light dark:group-hover:text-text-main-dark transition-colors duration-200" />
          <span>Filter</span>
        </button>
      </section>

      {/* Section Tabel Transaksi */}
      <section className="flex flex-col gap-4 mt-2">
        <h1 className="font-bold text-sm text-text-main-light dark:text-text-main-dark">
          Riwayat Transaksi Stok
        </h1>
        <TableTransaksi />
      </section>
    </div>
  );
}
