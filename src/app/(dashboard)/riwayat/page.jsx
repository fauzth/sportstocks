"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function RiwayatPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-6 text-center rounded-xl bg-app-light dark:bg-app-dark transition-colors duration-200">
      <div className="w-64 h-64 sm:w-80 sm:h-80">
        <DotLottieReact
          src="/Programming.lottie" // Path file di folder public
          autoplay
          loop
        />
      </div>

      <h1 className="mt-4 text-2xl font-bold text-text-main-light dark:text-text-main-dark">
        Fitur Sedang Dalam Pengembangan
      </h1>

      <p className="mt-2 text-sm text-text-sub-light dark:text-text-sub-dark max-w-md">
        Halaman{" "}
        <span className="font-semibold text-text-main-light dark:text-text-main-dark">
          Riwayat Stok
        </span>{" "}
        sedang kami rancang agar kamu bisa memantau riwayat keluar-masuk barang
        secara real-time.
      </p>

      <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-amber-500 bg-amber-500/10 border border-amber-500/30 rounded-full">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
        </span>
        Under Construction
      </div>
    </div>
  );
}
