"use client";

import { useState, useEffect } from "react";
import { useRouter } from "@/i18n/routing";
import type { Movie } from "@/types";
import Navbar from "@/components/Navbar";
import Icon from "@/components/Icon";
import MainLayout from "@/layouts/MainLayout";
import VideoPlayer from "@/components/VideoPlayer";
import { useAppContext } from "@/context/AppContext";
import { getMovieUrl, getWatchUrl } from "@/lib/routes";
import { Badge } from "@/components/ui/badge";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

export default function WatchClient({
  movie,
  currentEp,
  related
}: {
  movie: Movie;
  currentEp: number;
  related: Movie[];
}) {
  const router = useRouter();
  const { addToHistory } = useAppContext();

  const [currentEpIndex, setCurrentEpIndex] = useState(Math.max(0, currentEp - 1));
  const [currentServerIndex, setCurrentServerIndex] = useState(0);
  const [selectedLang, setSelectedLang] = useState("");
  const searchParams = useSearchParams();
  const langParam = searchParams.get("lang");

  // Initialize selectedLang based on query param or the first available server
  useEffect(() => {
    const defaultLang = movie?.episodes?.[0]?.server?.[0]?.title || "";
    const lang = langParam || defaultLang;
    
    if (lang) {
      setSelectedLang(lang);
      // Find server index for the selected language in the active episode
      const activeEp = movie.episodes[currentEpIndex] || movie.episodes[0];
      if (activeEp) {
        const idx = activeEp.server.findIndex(s => s.title === lang);
        if (idx !== -1) setCurrentServerIndex(idx);
      }
    }
  }, [movie?.id, langParam]);

  useEffect(() => {
    if (movie) {
      addToHistory(movie.id);
    }
  }, [movie?.id, addToHistory]);

  useEffect(() => {
    setCurrentEpIndex(Math.max(0, currentEp - 1));
  }, [currentEp]);

  const isSeries = movie.type === "series";
  const activeEpisode = movie.episodes[currentEpIndex] || movie.episodes[0];
  const activeServer = activeEpisode?.server[currentServerIndex] || activeEpisode?.server[0];
  const videoUrl = activeServer?.url || "";

  const handlePlay = (m: Movie, epIndex: number) => {
    setCurrentEpIndex(epIndex);

    // Maintain the selected language when switching episodes
    const nextEpisode = m.episodes[epIndex];
    if (nextEpisode) {
      const langIdx = nextEpisode.server.findIndex(s => s.title === selectedLang);
      if (langIdx !== -1) {
        setCurrentServerIndex(langIdx);
      } else {
        setCurrentServerIndex(0); // Fallback if preferred lang not found
      }
    }

    router.push(getWatchUrl(m.slug, epIndex + 1));
  };

  const handleSelect = (m: Movie) => {
    router.push(getMovieUrl(m.slug));
  };

  return (
    <MainLayout transparentBreadcrumb>
      <Navbar />
      <div className="min-h-screen bg-bg relative">
        {/* Immersive Backdrop Overlay */}
        <div className="absolute inset-0 h-[50vh] overflow-hidden pointer-events-none">
          <img
            src={movie.backdrop || movie.thumb}
            alt=""
            className="w-full h-full object-cover opacity-10 blur-3xl scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
        </div>

        <div className="px-4 md:px-10 pb-16 relative z-20 container mx-auto max-w-[1300px] animate-in fade-in duration-700">
          <div className="pt-2 lg:pt-4 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-10 items-start">
            <div className="min-w-0">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-white/5 bg-black aspect-video mb-6 relative group">
                <VideoPlayer
                  url={videoUrl}
                  movie={movie}
                  episode={currentEpIndex + 1}
                  isSeries={isSeries}
                />
              </div>

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

              <div className="bg-bg-2 border border-white/5 rounded-xl overflow-hidden shadow-xl">
                <div className="flex flex-col">
                  {/* Language Selection Section */}
                  <div className="px-5 py-4 border-b border-white/5 bg-white/2">
                    <span className="font-black text-[14px] text-white uppercase tracking-wider flex items-center gap-2">
                       <div className="w-1 h-5 bg-accent rounded-full" />
                       Chọn phiên bản phim
                    </span>
                  </div>
                  <div className="p-5 flex flex-wrap gap-3 border-b border-white/5 bg-bg-2/50">
                    {Array.from(new Set(movie.episodes.flatMap(ep => ep.server.map(s => s.title)))).map((lang, idx) => {
                      let displayLang = lang;
                      if (lang.toLowerCase().includes("server")) {
                        displayLang = idx === 0 ? "Việt SUB" : "Thuyết Minh";
                      }
                      return (
                        <button
                          key={lang}
                          onClick={() => {
                            setSelectedLang(lang);
                            const serverIdx = activeEpisode.server.findIndex(s => s.title === lang);
                            if (serverIdx !== -1) setCurrentServerIndex(serverIdx);
                          }}
                          className={cn(
                            "px-8 py-3 rounded-xl text-[13px] font-black transition-all border flex items-center justify-center gap-3",
                            selectedLang === lang
                              ? "bg-accent border-accent text-white shadow-lg shadow-accent/20"
                              : "bg-white/5 border-white/10 text-text-muted hover:bg-white/10 hover:border-white/20 hover:text-white"
                          )}
                        >
                          {displayLang.toUpperCase()}
                        </button>
                      );
                    })}
                  </div>

                  {/* Episode Selection Section (Series Only) */}
                  {isSeries && (
                    <>
                      <div className="px-5 py-4 border-b border-white/5 bg-white/2 flex items-center justify-between">
                        <span className="font-black text-[14px] text-white uppercase tracking-wider flex items-center gap-2">
                          <div className="w-1 h-5 bg-accent rounded-full" />
                          Danh sách tập phim
                        </span>
                        
                        {/* Compact Search for episodes */}
                        <div className="relative group hidden md:block">
                          <input 
                            type="text" 
                            placeholder="Tìm tập..." 
                            className="bg-bg-3 border border-white/5 rounded-lg py-1.5 pl-8 pr-3 text-[12px] w-32 focus:w-48 focus:border-accent/50 outline-none transition-all text-white"
                            onChange={(e) => {
                              const val = e.target.value;
                              if (!val) return;
                              const epNum = parseInt(val);
                              if (!isNaN(epNum) && epNum > 0 && epNum <= movie.episodes.length) {
                                // Optional: logic to scroll to episode or just highlight
                              }
                            }}
                          />
                          <div className="absolute left-2.5 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-accent transition-colors">
                            <Icon name="search" size={12} />
                          </div>
                        </div>
                      </div>

                      {/* Episode Range Tabs (for large series) */}
                      {movie.episodes.length > 50 && (
                         <div className="px-5 py-2 border-b border-white/5 bg-bg-2/30 flex gap-2 overflow-x-auto scrollbar-none">
                            {Array.from({ length: Math.ceil(movie.episodes.length / 50) }).map((_, i) => (
                              <button 
                                key={i}
                                className={cn(
                                  "px-3 py-1 rounded-md text-[11px] font-black uppercase tracking-widest whitespace-nowrap border transition-all",
                                  "bg-bg-3 border-white/5 text-text-muted hover:text-white"
                                )}
                              >
                                {i * 50 + 1} - {Math.min((i + 1) * 50, movie.episodes.length)}
                              </button>
                            ))}
                         </div>
                      )}

                      <div className="p-5">
                        <div className="grid grid-cols-[repeat(auto-fill,minmax(58px,1fr))] gap-2 max-h-[400px] overflow-y-auto scrollbar-thin pr-2">
                          {movie.episodes.map((ep, idx) => (
                            <button
                              key={idx}
                              onClick={() => handlePlay(movie, idx)}
                              className={cn(
                                "h-11 flex flex-col items-center justify-center rounded-xl text-[13px] font-black transition-all border relative overflow-hidden",
                                currentEpIndex === idx 
                                  ? "bg-accent border-accent text-white shadow-lg shadow-accent/30 scale-105 z-10" 
                                  : "bg-bg-3 border-white/5 text-text-muted hover:bg-bg-4 hover:border-white/20 hover:text-text"
                              )}
                            >
                              <span className="relative z-10">{ep.title.replace("Tập ", "")}</span>
                              {currentEpIndex === idx && (
                                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                              )}
                            </button>
                          ))}
                        </div>
                        <div className="mt-4 text-[11px] text-text-muted font-bold flex items-center gap-2 opacity-50 italic">
                           <Icon name="info" size={12} />
                           Mẹo: Bạn có thể sử dụng phím mũi tên để chuyển tập nhanh.
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

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
      </div>
    </MainLayout>
  );
}
