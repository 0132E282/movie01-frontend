"use client";
import { useRouter } from "@/i18n/routing";
import { MOVIES } from "@/data/movies";
import type { Movie } from "@/types";
import Navbar from "@/components/Navbar";
import HistoryPage from "@/components/HistoryPage";
import MainLayout from "@/layouts/MainLayout";
import { useAppContext } from "@/context/AppContext";
import { getMovieUrl, getWatchUrl } from "@/lib/routes";

export default function HistoryRoute() {
  const router = useRouter();
  const { watchHistory, addToHistory, clearHistory } = useAppContext();

  const handleSelect = (m: Movie) => {
    addToHistory(m.id);
    router.push(getMovieUrl(m.slug));
  };

  const handlePlay = (m: Movie, ep = 1) => {
    router.push(getWatchUrl(m.slug, m.episodes ? ep : undefined));
  };

  return (
    <MainLayout>
      <Navbar />
      <div style={{ paddingTop: 56 }}>
        <HistoryPage
          history={watchHistory}
          movies={MOVIES}
          onSelect={handleSelect}
          onClearHistory={clearHistory}
          onPlay={handlePlay}
        />
      </div>
    </MainLayout>
  );
}
