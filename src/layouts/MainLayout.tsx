import { Suspense } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AppBreadcrumb from "@/components/AppBreadcrumb";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  hideBreadcrumb?: boolean;
  transparentBreadcrumb?: boolean;
}

export default function MainLayout({
  children,
  hideBreadcrumb = false,
  transparentBreadcrumb = false
}: Props) {
  return (
    <div className={cn(
      "bg-bg min-h-screen flex flex-col",
      !transparentBreadcrumb && "pt-14"
    )}>
      <Navbar transparent={transparentBreadcrumb} />
      {!hideBreadcrumb && (
        <div className={cn(
          "relative z-40 transition-all",
          transparentBreadcrumb
            ? "bg-transparent border-none mt-14"
            : "border-b border-white/5 bg-bg/20 backdrop-blur-sm"
        )}>
          <div className="mx-auto w-full max-w-[1600px] px-4 md:px-10 pt-5 pb-3">
            <Suspense fallback={<div className="h-5" />}>
               <AppBreadcrumb />
            </Suspense>
          </div>
        </div>
      )}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
