"use client";

import dynamic from "next/dynamic";
const SimpleCharts = dynamic(() => import("@/components/dashboard/chart"), {
  ssr: false,
  loading: () => <div style={{ width: "100%", height: 450 }} />,
});
import SimpleCard from "@/components/dashboard/card";
import ListGroup from "@/components/dashboard/list";

import { dummyCard, dummyList } from "@/constants/dummy-dashboard";

export default function DashboardPage() {
  return (
    <div className="h-auto w-full flex flex-col gap-4 shadow-md rounded-xl p-4 sm:p-6 bg-app-light dark:bg-app-dark text-text-main-light dark:text-text-main-dark transition-colors duration-200">
      {/* Header Dashboard */}
      <header>
        <h1 className="font-bold pt-2 text-xl sm:text-2xl text-text-main-light dark:text-text-main-dark">
          Dashboard
        </h1>
        <p className="font-light text-xs sm:text-sm text-text-sub-light dark:text-text-sub-dark">
          Selamat Pagi. Berikut kondisi persediaan gudang hari ini.
        </p>
      </header>

      {/* Stat Cards - Grid Mobile-First */}
      <section className="mt-2">
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 justify-items-center sm:justify-items-stretch">
          {dummyCard.map((dataCard) => (
            <SimpleCard key={dataCard.id} item={dataCard} />
          ))}
        </div>
      </section>

      {/* Section Chart & Low Stocks */}
      <section className="w-full flex flex-col lg:flex-row mt-6 sm:mt-10 pt-2 gap-6">
        {/* Grafik Pergerakan Stok */}
        <section className="w-full lg:w-2/3">
          <h2
            id="stock-chart-title"
            className="font-bold text-lg sm:text-xl text-text-main-light dark:text-text-main-dark mb-4"
          >
            Grafik pergerakan stok
          </h2>
          <SimpleCharts />
        </section>

        {/* Low Stocks Items */}
        <section className="w-full lg:w-1/3">
          <header className="p-2 text-sm font-light">
            <h2 className="font-medium text-text-main-light dark:text-text-main-dark">
              Low Stocks Items
            </h2>
          </header>
          <div className="flex flex-col gap-2">
            {dummyList.map((dataList) => (
              <ListGroup key={dataList.id} item={dataList} />
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
