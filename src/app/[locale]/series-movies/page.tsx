"use client";
import { Suspense, useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "@/i18n/routing";

import { MOVIES } from "@/data/movies";
import type { Movie } from "@/types";
import Navbar from "@/components/Navbar";
import MovieItems from "@/components/movie/MovieItems";
import CatalogFilters from "@/components/CatalogFilters";
import MainLayout from "@/layouts/MainLayout";
import { useAppContext } from "@/context/AppContext";
import { getMovieUrl, getWatchUrl } from "@/lib/routes";

function SeriesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { favorites, toggleFavorite, addToHistory } = useAppContext();

  // State for filters
  const [genre, setGenre] = useState(searchParams.get("genre") || "Tất cả");
  const [country, setCountry] = useState(searchParams.get("country") || "Tất cả");
  const [year, setYear] = useState(searchParams.get("year") || "Tất cả");
  const [quality, setQuality] = useState(searchParams.get("quality") || "Tất cả");
  const [sort, setSort] = useState("newest");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(true);
  const [page, setPage] = useState(1);
  const PER_PAGE = 12;

  // Sync with search params
  useEffect(() => { setGenre(searchParams.get("genre") || "Tất cả"); setPage(1); }, [searchParams]);

  const filtered = useMemo(() => {
    let list = MOVIES.filter((m) => {
      // Filter by type: series (episodes !== null && > 1)
      if (m.type !== "series") return false;

      if (genre !== "Tất cả" && !m.genre.includes(genre)) return false;
      if (year !== "Tất cả" && String(m.year) !== year) return false;
      if (quality !== "Tất cả" && m.quality !== quality) return false;
      if (country !== "Tất cả" && !m.country.includes(country)) return false;
      return true;
    });

    if (sort === "newest") list = [...list].sort((a, b) => b.year - a.year);
    else if (sort === "oldest") list = [...list].sort((a, b) => a.year - b.year);
    else if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    else if (sort === "views") list = [...list].sort((a, b) => parseFloat(b.views) - parseFloat(a.views));

    return list;
  }, [genre, year, quality, country, sort]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleSelect = (m: Movie) => {
    addToHistory(m.id);
    router.push(getMovieUrl(m.slug));
  };

  const getDynamicTitle = () => {
    let parts = [];
    if (genre !== "Tất cả") parts.push(genre);
    if (country !== "Tất cả") parts.push(country);
    if (year !== "Tất cả") parts.push(`Năm ${year}`);

    if (parts.length > 0) return `Phim bộ ${parts.join(" - ")}`;
    return "Phim Bộ Mới Cập Nhật";
  };

  const activeFiltersCount = [
    genre !== "Tất cả",
    year !== "Tất cả",
    quality !== "Tất cả",
    country !== "Tất cả"
  ].filter(Boolean).length;

  return (
    <div className="px-10 pt-8 pb-12 max-w-[1600px] mx-auto">
      <div className="flex items-center gap-4 mb-10 flex-wrap">
        <h1 className="text-[32px] font-black tracking-tight text-white">
          {getDynamicTitle()}
        </h1>
        <div className="flex items-center gap-2 text-text-muted text-[13.5px] font-medium bg-bg-2 border border-border px-4 py-2 rounded-full shadow-inner">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          {filtered.length} bộ phim được tìm thấy
        </div>
      </div>

      <CatalogFilters
        genre={genre} setGenre={(v) => { setGenre(v); setPage(1); }}
        year={year} setYear={(v) => { setYear(v); setPage(1); }}
        quality={quality} setQuality={(v) => { setQuality(v); setPage(1); }}
        country={country} setCountry={(v) => { setCountry(v); setPage(1); }}
        sort={sort} setSort={(v) => { setSort(v); setPage(1); }}
        showFilters={showFilters} setShowFilters={setShowFilters}
        view={view} setView={setView}
        activeFiltersCount={activeFiltersCount}
      />

      <MovieItems
        movies={paged}
        onSelect={handleSelect}
        onToggleFavorite={toggleFavorite}
        favorites={favorites}
        view={view}
        currentPage={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    </div>
  );
}

export default function SeriesRoute() {
  return (
    <MainLayout hideBreadcrumb={false}>
      <Navbar />
      <div>
        <Suspense fallback={<div className="p-10 text-text-muted text-center py-20 font-bold">Đang tải danh sách phim bộ...</div>}>
          <SeriesContent />
        </Suspense>
      </div>
    </MainLayout>
  );
}
