import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen p-2 md:p-4 bg-app-light dark:bg-app-dark flex flex-col md:flex-row gap-2 md:gap-4 overflow-x-hidden transition-colors duration-200">
      <Sidebar />
      <div className="flex-1 min-w-0 flex flex-col gap-2 md:gap-4">
        <Header />
        <main className="flex-1 flex flex-col overflow-y-auto rounded-xl">
          {children}
        </main>
      </div>
    </div>
  );
}
