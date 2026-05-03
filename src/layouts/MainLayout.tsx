import Footer from "@/components/Footer";
import AppBreadcrumb from "@/components/AppBreadcrumb";

interface Props {
  children: React.ReactNode;
  hideBreadcrumb?: boolean;
}

export default function MainLayout({ children, hideBreadcrumb = false }: Props) {
  return (
    <div className="bg-bg min-h-screen flex flex-col pt-14">
      {!hideBreadcrumb && (
        <div className="border-b border-white/5 bg-bg/20 backdrop-blur-sm">
          <div className="mx-auto w-full max-w-[1600px] px-10 pt-5 pb-3">
             <AppBreadcrumb />
          </div>
        </div>
      )}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
