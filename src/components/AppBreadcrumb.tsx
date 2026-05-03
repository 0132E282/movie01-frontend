"use client";
import * as React from "react";
import { usePathname, useParams, useSearchParams } from "next/navigation";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import { Link } from "@/i18n/routing";
import { Home } from "lucide-react";
import { MOVIES, GENRES, COUNTRIES, YEARS, slugify } from "@/data/movies";

export default function AppBreadcrumb() {
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();
  
  // Robust locale detection: standard Next.js i18n locales are usually at the start
  const rawPaths = pathname.split("/").filter(Boolean);
  const possibleLocales = ["vi", "en", "zh", "ja"]; // Common locales
  const hasLocale = possibleLocales.includes(rawPaths[0]);
  const paths = hasLocale ? rawPaths.slice(1) : rawPaths;
  
  const slug = params?.slug as string;
  const ep = searchParams.get("ep");

  // Don't show on homepage
  if (paths.length === 0) return null;

  const titleMap: Record<string, string> = {
    "catalog": "Danh mục",
    "genre": "Thể loại",
    "country": "Quốc gia",
    "year": "Năm phát hành",
    "movie": "Chi tiết phim",
    "watch": "Xem phim",
    "search": "Tìm kiếm",
    "favorites": "Yêu thích",
    "history": "Lịch sử",
    "single-movies": "Phim lẻ",
    "series-movies": "Phim bộ",
  };

  const movie = slug ? MOVIES.find(m => m.slug === slug) : null;

  // ── Special Case: Movie Detail & Watch ──
  if (movie && (paths.includes("movie") || paths.includes("watch"))) {
    const isSeries = !!(movie.episodes && movie.episodes > 1);
    const categoryTitle = isSeries ? "Phim Bộ" : "Phim Lẻ";
    const categoryPath = isSeries ? "/series-movies" : "/single-movies";
    
    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/" className="flex items-center gap-1.5 text-text-muted hover:text-accent transition-colors">
                <Home size={14} className="mb-0.5" /> Trang chủ
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-text-muted/30" />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/catalog" className="text-text-muted hover:text-white transition-colors">Danh mục</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-text-muted/30" />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={categoryPath as any} className="text-text-muted hover:text-white transition-colors">{categoryTitle}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-text-muted/30" />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-bold text-accent">
              {movie.title}{ep ? ` - Tập ${ep}` : ""}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
  }

  // ── General Case ──
  const items: { title: string; href: string; isLast: boolean }[] = [];
  const catalogSubRoutes = ["genre", "country", "year", "single-movies", "series-movies"];
  const needsCatalogParent = paths.some(p => catalogSubRoutes.includes(p)) && !paths.includes("catalog");

  if (needsCatalogParent) {
    items.push({ title: "Danh mục", href: "/catalog", isLast: false });
  }

  paths.forEach((p, i) => {
    const isLast = i === paths.length - 1;
    let title = titleMap[p] || p.charAt(0).toUpperCase() + p.slice(1).replace(/-/g, " ");
    
    // Better title for slug pages (Genre name, Country name, Year)
    if (isLast && i > 0) {
      const parent = paths[i-1];
      
      if (parent === "genre") {
        const found = GENRES.find((g: string) => slugify(g) === p);
        if (found) title = found;
      } else if (parent === "country") {
        const found = COUNTRIES.find((c: string) => slugify(c) === p);
        if (found) title = found;
      } else if (parent === "year") {
        const found = YEARS.find((y: string) => slugify(y) === p);
        if (found) title = found;
      }
    }

    items.push({
      title,
      href: "/" + paths.slice(0, i + 1).join("/"),
      isLast
    });
  });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/" className="flex items-center gap-1.5 text-text-muted hover:text-accent transition-colors">
              <Home size={14} className="mb-0.5" /> Trang chủ
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        
        {items.map((item, i) => (
          <React.Fragment key={item.href + i}>
            <BreadcrumbSeparator className="text-text-muted/30" />
            <BreadcrumbItem>
              {item.isLast ? (
                <BreadcrumbPage className="font-bold text-accent">{item.title}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={item.href as any} className="text-text-muted hover:text-white transition-colors">{item.title}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
