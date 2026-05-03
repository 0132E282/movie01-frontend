"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "@/i18n/routing";

import { MOVIES } from "@/data/movies";
import type { Movie } from "@/types";
import Navbar from "@/components/Navbar";
import SearchPage from "@/components/SearchPage";
import MainLayout from "@/layouts/MainLayout";
import { useAppContext } from "@/context/AppContext";
import { getMovieUrl } from "@/lib/routes";

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { favorites, toggleFavorite, addToHistory } = useAppContext();
  const query = searchParams.get("q") || "";

  const handleSelect = (m: Movie) => {
    addToHistory(m.id);
    router.push(getMovieUrl(m.slug));
  };

  return (
    <SearchPage
      movies={MOVIES}
      initialQuery={query}
      onSelect={handleSelect}
      onToggleFavorite={toggleFavorite}
      favorites={favorites}
    />
  );
}

export default function SearchRoute() {
  return (
    <MainLayout>
      <Navbar />
      <div style={{ paddingTop: 56 }}>
        <Suspense fallback={<div style={{ padding: 40, color: "#9896a0" }}>Đang tải...</div>}>
          <SearchContent />
        </Suspense>
      </div>
    </MainLayout>
  );
}
