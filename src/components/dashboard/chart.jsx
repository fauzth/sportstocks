"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const emptySubscribe = () => () => {};
function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

export default function SimpleCharts() {
  const { theme } = useTheme();
  const mounted = useIsMounted();

  const isDark = mounted && theme === "dark";

  // Warna teks dinamis sesuai mode
  const labelColor = isDark ? "#94a3b8" : "#64748b"; // text-sub

  return (
    <div style={{ width: "100%" }}>
      <BarChart
        height={450}
        borderRadius={12}
        margin={{
          left: -10,
          right: 40,
          top: 40,
        }}
        // GUNAKAN SX DI DALAM SLOTPROPS.LEGEND
        slotProps={{
          legend: {
            sx: {
              "& .MuiChartsLegend-label": {
                fill: `${labelColor} !important`,
                color: `${labelColor} !important`,
                fontSize: "14px",
                fontFamily: "inter",
              },
            },
          },
        }}
        xAxis={[
          {
            data: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"],
            scaleType: "band",
            height: 50,
            tickLabelStyle: {
              fontSize: 13,
              fontFamily: "inter",
              fill: labelColor,
              angle: -25,
              textAnchor: "end",
            },
          },
        ]}
        yAxis={[
          {
            width: 40,
            tickLabelStyle: {
              fontSize: 13,
              fontFamily: "inter",
              fill: labelColor,
            },
          },
        ]}
        series={[
          {
            data: [1, 2, 4, 5, 11, 10, 2],
            color: isDark ? "#334155" : "#1e293b",
            label: "Barang Masuk",
          },
          {
            data: [5, 8, 4, 4, 11, 2, 11],
            color: "#0d9488",
            label: "Barang Keluar",
          },
        ]}
      />
    </div>
  );
}
