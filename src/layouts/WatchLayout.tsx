import Navbar from "@/components/Navbar";
import AppBreadcrumb from "@/components/AppBreadcrumb";

export default function WatchLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-bg min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-14">
        <AppBreadcrumb />
        {children}
      </main>
    </div>
  );
}
