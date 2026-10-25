"use client";

import { useState, useEffect } from "react";

export default function LiveDateTime() {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const formatDateTime = () => {
      const now = new Date();
      const dayName = now.toLocaleDateString("id-ID", { weekday: "long" });
      const fullDate = now.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      const time = now.toLocaleTimeString("id-ID");

      setDateTime(`${dayName}, ${fullDate} — ${time}`);
    };

    // Jalankan sekali saat mount
    formatDateTime();

    // Jalankan interval tiap 1 detik
    const timer = setInterval(formatDateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!dateTime) {
    return <div className="text-sm font-medium text-gray-400">Loading...</div>;
  }

  return <div className="text-sm font-medium text-gray-400">{dateTime}</div>;
}
