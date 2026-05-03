"use client";
import { useState, useMemo, useEffect } from "react";
import { useRouter } from "@/i18n/routing";
import type { Movie } from "@/types";
import Navbar from "@/components/Navbar";
import Icon from "@/components/Icon";
import MainLayout from "@/layouts/MainLayout";
import VideoPlayer from "@/components/VideoPlayer";
import { useAppContext } from "@/context/AppContext";
import { getMovieUrl, getWatchUrl } from "@/lib/routes";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function WatchClient({ movie, currentEp, related }: { movie: Movie, currentEp: number, related: Movie[] }) {
  const router = useRouter();
  const { favorites, addToHistory } = useAppContext();

  // episodes are 0-indexed in the data array, but currentEp is 1-indexed
  const [currentEpIndex, setCurrentEpIndex] = useState(Math.max(0, currentEp - 1));
  const [currentServerIndex, setCurrentServerIndex] = useState(0);

  useEffect(() => {
    if (movie) {
      addToHistory(movie.id);
    }
  }, [movie?.id]);

  // Update ep index if prop changes (e.g. from URL navigation)
  useEffect(() => {
      setCurrentEpIndex(Math.max(0, currentEp - 1));
  }, [currentEp]);

  const isSeries = movie.type === "series";
  const activeEpisode = movie.episodes[currentEpIndex] || movie.episodes[0];
  const activeServer = activeEpisode?.server[currentServerIndex] || activeEpisode?.server[0];
  const videoUrl = activeServer?.url || "";

  const handlePlay = (m: Movie, epIndex: number) => {
    setCurrentEpIndex(epIndex);
    setCurrentServerIndex(0); // Reset server when changing episode
    router.push(getWatchUrl(m.slug, epIndex + 1));
  };

  const handleSelect = (m: Movie) => {
    router.push(getMovieUrl(m.slug));
  };

  return (
    <MainLayout>
      <Navbar />
      <div className="pt-14 min-h-screen bg-bg">
        <div className="mx-auto max-w-[1300px] px-6 py-10 animate-in fade-in duration-500">
          <div className="grid grid-cols-[1fr_320px] gap-10 items-start">
            {/* Left Column: Player & Info */}
            <div className="min-w-0">
              {/* Server Selector */}
              <div className="flex gap-3 mb-6 flex-wrap">
                {activeEpisode?.server.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentServerIndex(idx)}
                    className={cn(
                      "px-5 py-2.5 rounded-xl text-[13px] font-black transition-all border flex items-center gap-2.5 whitespace-nowrap shadow-sm",
                      currentServerIndex === idx 
                        ? "bg-accent border-accent text-white shadow-lg shadow-accent/25 scale-[1.02]" 
                        : "bg-bg-3 border-white/5 text-text-muted hover:border-white/20 hover:text-text hover:bg-bg-4"
                    )}
                  >
                    <Icon name="server" size={15} />
                    {s.title}
                  </button>
                ))}
              </div>

              {/* Player Container */}
              <div className="rounded-xl overflow-hidden shadow-2xl border border-white/5 bg-black aspect-video mb-6 relative group">
                <VideoPlayer
                  url={videoUrl}
                  movie={movie}
                  episode={currentEpIndex + 1}
                  isSeries={isSeries}
                />
              </div>

              {/* Movie Title & Meta */}
              <div className="mb-8">
                <h1 className="text-[28px] font-black mb-2 tracking-tight text-white leading-tight">
                  {movie.title} {isSeries && <span className="text-accent ml-2">Tập {currentEpIndex + 1}</span>}
                </h1>
                <div className="flex items-center gap-4 text-[13.5px] text-text-muted flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <Icon name="star" size={14} className="fill-gold text-gold" />
                    <span className="text-gold font-bold">{movie.rating}</span>
                  </div>
                  <span className="opacity-20">|</span>
                  <span>{movie.year}</span>
                  <span>{movie.duration}</span>
                  <span>{movie.country}</span>
                  <div className="flex items-center gap-2">
                    {movie.genre.map(g => (
                      <Badge key={g} variant="secondary" className="bg-white/5 text-[10px] py-0.5">{g}</Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Info Card */}
              <div className="bg-bg-2 border border-white/5 rounded-xl p-5 flex gap-5 mb-8">
                <div className="w-[100px] shrink-0 rounded-lg overflow-hidden border border-white/10 shadow-lg">
                  <img src={movie.thumb} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                   <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-[13px] mb-3">
                      <span className="text-text-muted font-bold">Đạo diễn:</span>
                      <span className="text-text">{movie.director}</span>
                      <span className="text-text-muted font-bold">Diễn viên:</span>
                      <span className="text-text line-clamp-1">{movie.cast.join(", ")}</span>
                   </div>
                   <p className="text-text-muted text-[13px] leading-relaxed line-clamp-3 italic opacity-80">
                      {movie.desc}
                   </p>
                </div>
              </div>

              {/* Episode List */}
              <div className="bg-bg-2 border border-white/5 rounded-xl overflow-hidden">
                <div className="flex items-center gap-4 px-5 py-4 border-b border-white/5 bg-white/2">
                  <span className="font-black text-[15px] text-text uppercase">
                      {isSeries ? "Danh sách tập" : "Đang phát"}
                  </span>
                </div>
                <div className="p-5 flex flex-wrap gap-2 max-h-[300px] overflow-y-auto hide-scroll">
                  {movie.episodes.map((ep, idx) => (
                    <button
                      key={idx}
                      onClick={() => handlePlay(movie, idx)}
                      className={cn(
                        "min-w-[54px] h-[38px] px-3 rounded-lg text-[13px] font-bold transition-all border",
                        currentEpIndex === idx 
                          ? "bg-accent border-accent text-white shadow-lg shadow-accent/20" 
                          : "bg-bg-3 border-white/5 text-text-muted hover:border-white/20 hover:text-text"
                      )}
                    >
                      {ep.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Recommendations */}
            <div className="sticky top-20">
              <div className="flex items-center gap-2 font-black text-[16px] text-white mb-6 uppercase tracking-wider">
                <span className="w-1.5 h-6 bg-accent rounded-full" />
                Đề xuất cho bạn
              </div>
              <div className="flex flex-col gap-4">
                {related.map((m) => (
                  <div
                    key={m.id}
                    onClick={() => handleSelect(m)}
                    className="flex gap-3 group cursor-pointer"
                  >
                    <div className="w-[85px] aspect-[2/3] shrink-0 rounded-lg overflow-hidden border border-white/5 relative bg-bg-3">
                      <img src={m.thumb} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="py-1">
                      <h4 className="text-[13.5px] font-bold text-text leading-tight mb-1.5 line-clamp-2 group-hover:text-accent transition-colors">
                        {m.title}
                      </h4>
                      <div className="flex items-center gap-2 text-[11.5px] text-text-muted font-medium">
                        <span className="text-gold">★ {m.rating}</span>
                        <span>·</span>
                        <span>{m.year}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
