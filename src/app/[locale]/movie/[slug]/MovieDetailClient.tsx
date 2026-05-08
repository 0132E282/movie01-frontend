"use client";
import { useState, useEffect } from "react";
import { useRouter } from "@/i18n/routing";
import type { Movie } from "@/types";
import Navbar from "@/components/Navbar";
import TrailerPopup from "@/components/TrailerPopup";
import Icon from "@/components/Icon";
import StarRating from "@/components/StarRating";
import MainLayout from "@/layouts/MainLayout";
import { useAppContext } from "@/context/AppContext";
import { getMovieUrl, getWatchUrl } from "@/lib/routes";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Play, Heart, Film, Eye, Calendar, Clock, User, ChevronLeft } from "lucide-react";

export default function MovieDetailClient({ movie, related }: { movie: Movie, related: Movie[] }) {
  const router = useRouter();
  const { favorites, toggleFavorite, addToHistory } = useAppContext();

  const [showTrailer, setShowTrailer] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [selectedLang, setSelectedLang] = useState<string>("");

  useEffect(() => {
    setIsMounted(true);
    if (movie) {
      addToHistory(movie.id);
    }
    // Initialize selected language from first available episode server
    if (movie?.episodes?.[0]?.server?.[0]) {
      setSelectedLang(movie.episodes[0].server[0].title);
    }
  }, [movie?.id]);

  const isSeries = movie.type === "series";
  const hasTrailer = !!movie.trailer;
  const isFavorite = favorites.has(movie.id);

  const handlePlay = (m: Movie, ep = 1) => {
    const url = getWatchUrl(m.slug, ep);
    // Add language as query parameter if selected
    router.push({
      ...url,
      query: selectedLang ? { lang: selectedLang } : {}
    });
  };

  const handleSelect = (m: Movie) => {
    router.push(getMovieUrl(m.slug));
  };

  if (!isMounted) return null;

  return (
    <MainLayout transparentBreadcrumb>
      <Navbar />

      <div className="min-h-screen bg-bg relative pb-16">
        {/* Immersive Backdrop Section - Scaled Down */}
        <div className="relative h-[40vh] lg:h-[50vh] w-full overflow-hidden">
          <img
            src={movie.backdrop || movie.thumb}
            alt=""
            className="w-full h-full object-cover object-center opacity-40 lg:opacity-50"
          />
          {/* Multi-layered Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-transparent to-transparent h-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-bg/60 via-bg/20 to-transparent hidden lg:block" />

          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="absolute top-18 left-6 lg:left-10 z-50 p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white backdrop-blur-md transition-all active:scale-90"
          >
            <ChevronLeft size={20} />
          </button>
        </div>

        {/* Content Container - Compact Scale */}
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 -mt-[15vh] lg:-mt-[18vh] relative z-20">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">

            {/* Left Column: Poster & Actions (Scaled Down) */}
            <div className="w-full lg:w-[200px] shrink-0 flex flex-col items-center lg:items-start">
              <div className="relative w-[160px] lg:w-full aspect-[2/3] rounded-xl overflow-hidden shadow-2xl border border-white/10 group">
                <img src={movie.thumb} alt={movie.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button onClick={() => handlePlay(movie, 1)} className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center shadow-glow">
                    <Play size={24} fill="white" />
                  </button>
                </div>
                <div className="absolute top-2.5 left-2.5 flex flex-col gap-1">
                   <Badge variant="gold" className="px-1.5 py-0 text-[8px] uppercase font-black tracking-widest">{movie.quality}</Badge>
                </div>
              </div>

              {/* Quick Actions (Desktop Compact) */}
              <div className="hidden lg:flex flex-col gap-2 w-full mt-5">
                <button
                  onClick={() => handlePlay(movie, 1)}
                  className="w-full bg-accent hover:bg-accent-hover text-white py-2.5 rounded-xl font-black tracking-widest uppercase flex items-center justify-center gap-2 transition-all active:scale-[0.98] text-[13px]"
                >
                  <Play size={16} fill="white" /> XEM PHIM
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleFavorite(movie)}
                    className={cn(
                      "flex-1 py-2.5 rounded-xl border font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] text-[12px]",
                      isFavorite ? "bg-red-500/10 border-red-500/50 text-red-500" : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                    )}
                  >
                    <Heart size={14} fill={isFavorite ? "currentColor" : "none"} /> {isFavorite ? "Đã Thích" : "Thích"}
                  </button>
                  {hasTrailer && (
                    <button
                      onClick={() => setShowTrailer(true)}
                      className="flex-1 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all active:scale-[0.98] text-[12px]"
                    >
                      <Film size={14} /> Trailer
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Information (Scaled Down) */}
            <div className="flex-1 w-full lg:pt-2">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <h1 translate="no" className="text-[22px] lg:text-[32px] font-black text-white leading-tight mb-2 tracking-tighter uppercase">
                  {movie.title}
                </h1>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 lg:gap-4 mb-4 text-[11px] lg:text-[12px] text-text-muted font-bold">
                  <div className="flex items-center gap-1 bg-gold/10 text-gold px-2 py-0.5 rounded-full border border-gold/20">
                    <StarRating rating={movie.rating} size={10} />
                    <span>{movie.rating}</span>
                  </div>
                  <span className="hidden lg:block opacity-20">|</span>
                  <div className="flex items-center gap-1.5"><Calendar size={13} className="text-accent" /> {movie.year}</div>
                  <span className="hidden lg:block opacity-20">|</span>
                  <div className="flex items-center gap-1.5"><Clock size={13} className="text-accent" /> {movie.duration}</div>
                  <span className="hidden lg:block opacity-20">|</span>
                  <div className="bg-white/5 px-2 py-0.5 rounded text-[9px] uppercase tracking-widest">{movie.country}</div>
                  <span className="hidden lg:block opacity-20">|</span>
                  <div className="bg-white/5 px-2 py-0.5 rounded text-[9px] uppercase tracking-widest text-accent border border-accent/20">{movie.language}</div>
                </div>

                {/* Genre Tags */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-1.5 mb-6">
                  {movie.genre.map((g) => (
                    <span key={g} className="bg-bg-3 text-text-muted text-[10px] font-black uppercase tracking-wider px-3.5 py-1.2 rounded-full border border-white/5 transition-colors">
                      {g}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <div className="max-w-[750px] mb-6">
                  <p className="text-[12px] lg:text-[13px] text-text-muted leading-relaxed font-medium opacity-60 line-clamp-3">
                    {movie.desc}
                  </p>
                </div>

                {/* Meta Info - Clean Split (No Table/Box) */}
                <div className="flex flex-col md:flex-row gap-8 lg:gap-16 w-full max-w-[850px] mb-12 py-6 border-y border-white/5">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0"><User size={16} /></div>
                      <div>
                        <div className="text-[10px] text-text-muted font-black uppercase tracking-widest">Đạo diễn</div>
                        <div className="text-[14px] text-white font-bold">{movie.director}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0"><Eye size={16} /></div>
                      <div>
                        <div className="text-[10px] text-text-muted font-black uppercase tracking-widest">Lượt xem</div>
                        <div className="text-[14px] text-white font-bold">{movie.views.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1.5] space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0"><User size={16} /></div>
                      <div>
                        <div className="text-[10px] text-text-muted font-black uppercase tracking-widest">Diễn viên chính</div>
                        <div className="text-[14px] text-white font-bold leading-relaxed">{movie.cast.join(", ")}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Actions (Compact) */}
                <div className="flex lg:hidden flex-col gap-3 w-full mb-10">
                  <button onClick={() => handlePlay(movie, 1)} className="w-full bg-accent text-white py-3.5 rounded-xl font-black text-[15px] flex items-center justify-center gap-3">
                    <Play size={20} fill="white" /> XEM PHIM
                  </button>
                  <div className="flex gap-2">
                    <button onClick={() => toggleFavorite(movie)} className={cn("flex-1 py-3 rounded-xl border font-bold flex items-center justify-center gap-2", isFavorite ? "bg-red-500/10 border-red-500/50 text-red-500" : "bg-white/5 border-white/10 text-white")}>
                      <Heart size={18} fill={isFavorite ? "currentColor" : "none"} /> Thích
                    </button>
                  </div>
                </div>
              </div>

                {/* Split Content Section (Compact & Premium Layout) */}
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10">

                  {/* Left: Episodes Section (Compact Design) */}
                  <div className="lg:col-span-7 animate-fade-in flex flex-col">
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-5 bg-accent rounded-full shadow-glow-sm" />
                        <h2 className="text-[14px] lg:text-[15px] font-black text-white uppercase tracking-[0.1em]">
                          {isSeries ? "Danh sách tập" : "Ngôn ngữ"}
                        </h2>
                      </div>
                      <div className="text-[11px] text-text-muted font-bold uppercase tracking-widest opacity-50">
                        {selectedLang.toLowerCase().includes("server")
                          ? (movie.episodes[0].server.findIndex(s => s.title === selectedLang) === 0 ? "Việt SUB" : "Thuyết Minh")
                          : selectedLang}
                      </div>
                    </div>

                    {/* Compact Language Selector */}
                    <div className="flex items-center gap-1.5 p-1 bg-white/5 rounded-xl border border-white/10 w-fit mb-6">
                      {Array.from(new Set(movie.episodes.flatMap(ep => ep.server.map(s => s.title)))).map((lang, idx) => {
                        let displayLang = lang;
                        if (lang.toLowerCase().includes("server")) {
                          displayLang = idx === 0 ? "Việt SUB" : "Thuyết Minh";
                        }

                        const isActive = selectedLang === lang;
                        return (
                          <button
                            key={lang}
                            onClick={() => setSelectedLang(lang)}
                            className={cn(
                              "px-5 py-2 rounded-lg text-[11px] font-black uppercase tracking-wider transition-all",
                              isActive
                                ? "bg-accent text-white shadow-lg shadow-accent/20"
                                : "text-text-muted hover:text-white hover:bg-white/5"
                            )}
                          >
                            {displayLang}
                          </button>
                        );
                      })}
                    </div>

                    {/* Episode Grid (Compact) */}
                    <div className="bg-white/[0.02] rounded-2xl border border-white/5 p-5 relative overflow-hidden group/list">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover/list:opacity-100 transition-opacity" />

                      <div className="max-h-[380px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                        <div className="grid grid-cols-[repeat(auto-fill,minmax(54px,1fr))] gap-2.5">
                          {movie.episodes.length > 0 ? (
                            movie.episodes.map((ep, idx) => (
                              <button
                                key={idx}
                                onClick={() => handlePlay(movie, idx + 1)}
                                className={cn(
                                  "aspect-square flex items-center justify-center rounded-lg text-[13px] font-black transition-all border",
                                  "bg-bg-3 border-white/5 text-text-muted hover:bg-accent hover:border-accent hover:text-white hover:scale-110 hover:shadow-glow-sm"
                                )}
                              >
                                {ep.title.replace("Tập ", "")}
                              </button>
                            ))
                          ) : (
                            <div className="col-span-full py-12 text-center">
                               <div className="text-[11px] text-text-muted font-black uppercase tracking-[0.2em] opacity-30">Đang cập nhật...</div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Recommendations (Refined) */}
                  <div className="lg:col-span-5 animate-fade-in flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-1.5 h-5 bg-accent rounded-full shadow-glow-sm" />
                      <h2 className="text-[14px] lg:text-[15px] font-black text-white uppercase tracking-[0.1em]">Đề xuất cho bạn</h2>
                    </div>

                    <div className="space-y-3 max-h-[500px] overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                      {related.map((m) => (
                        <div
                          key={m.id}
                          onClick={() => handleSelect(m)}
                          className="flex gap-4 p-2 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all cursor-pointer group"
                        >
                          <div className="relative w-[70px] aspect-[2/3] shrink-0 rounded-lg overflow-hidden bg-bg-3 shadow-lg group-hover:shadow-accent/10 transition-all">
                            <img src={m.thumb} alt={m.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                               <Play size={14} fill="white" className="text-white scale-75 group-hover:scale-100 transition-transform" />
                            </div>
                            <div className="absolute top-1.5 left-1.5">
                               <Badge variant="gold" className="text-[7px] px-1 py-0 border-none shadow-sm">{m.quality}</Badge>
                            </div>
                          </div>
                          <div className="flex flex-col justify-center gap-1.5 py-1">
                            <h3 className="text-[13px] font-bold text-white line-clamp-1 group-hover:text-accent transition-colors">
                              {m.title}
                            </h3>
                            <div className="flex items-center gap-2.5 text-[10px] text-text-muted font-black uppercase tracking-wider">
                              <div className="flex items-center gap-1 text-gold">
                                <StarRating rating={m.rating} size={9} />
                                <span>{m.rating}</span>
                              </div>
                              <span className="w-1 h-1 rounded-full bg-white/10" />
                              <span>{m.year}</span>
                              <span className="w-1 h-1 rounded-full bg-white/10" />
                              <span className="text-accent">{m.type === "series" ? "Bộ" : "Lẻ"}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      {showTrailer && <TrailerPopup movie={movie} onClose={() => setShowTrailer(false)} />}
    </MainLayout>
  );
}
