"use client";
import { Link } from "@/i18n/routing";
import { slugify } from "@/data/movies";
import MainLayout from "@/layouts/MainLayout";
import Navbar from "@/components/Navbar";
import { ChevronRight } from "lucide-react";

interface Props {
  title: string;
  items: string[];
  type: "genre" | "country" | "year";
}

export default function CategoryListPage({ title, items, type }: Props) {
  const getPath = (item: string) => {
    return `/${type}/${slugify(item)}`;
  };

  return (
    <MainLayout>
      <Navbar />
      <div className="pt-14 px-10 pb-20">
        <div className="max-w-[1200px] mx-auto mt-12">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1.5 h-8 bg-accent rounded-full" />
            <h1 className="text-3xl font-black tracking-tight text-text uppercase">
              Danh mục: {title}
            </h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.filter(i => i !== "Tất cả").map((item) => (
              <Link
                key={item}
                href={getPath(item) as any}
                className="group relative bg-bg-2 border border-border rounded-2xl p-6 transition-all hover:bg-bg-3 hover:border-accent/50 hover:shadow-glow active:scale-95 flex items-center justify-between"
              >
                <span className="text-lg font-bold text-text group-hover:text-accent transition-colors">
                  {item}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                  <ChevronRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
