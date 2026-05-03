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

export default function MovieDetailClient({ movie, related }: { movie: Movie, related: Movie[] }) {
  const router = useRouter();
  const { favorites, toggleFavorite, addToHistory } = useAppContext();

  const [activeTab, setActiveTab] = useState("episodes");
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    if (movie) {
      addToHistory(movie.id);
    }
  }, [movie?.id]);

  const isSeries = movie.type === "series";
  const hasTrailer = !!movie.trailer;

  const handlePlay = (m: Movie, ep = 1) => {
    router.push(getWatchUrl(m.slug, ep));
  };

  const handleSelect = (m: Movie) => {
    router.push(getMovieUrl(m.slug));
  };

  const isFavorite = favorites.has(movie.id);

  return (
    <MainLayout>
      <Navbar />
      <div className="min-h-screen bg-bg">
        {/* MOBILE LAYOUT: Cinematic Centered (sm/md only) */}
        <div className="lg:hidden">
          <div className="relative h-[450px] overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={movie.backdrop || movie.thumb}
                alt=""
                className="w-full h-full object-cover object-center scale-105 blur-[2px] opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-bg/20 via-bg/80 to-bg" />
            </div>

            <div className="relative z-20 h-full flex flex-col items-center justify-end pb-10">
              <div className="w-[160px] aspect-[2/3] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 mb-6 relative">
                <img src={movie.thumb} alt={movie.title} className="w-full h-full object-cover" />
              </div>
              <div className="text-center px-6">
                <h1 className="text-[28px] font-black leading-tight mb-2 tracking-tight text-white drop-shadow-lg uppercase">
                  {movie.title}
                </h1>
                <p className="text-white/60 text-[14px] font-medium tracking-wide">
                   {movie.title} ({movie.year})
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 pb-12 relative z-30">
            <div className="flex flex-col items-center">
              <button className="flex items-center gap-2 text-gold font-black uppercase tracking-[0.2em] text-[12px] mb-8">
                Thông tin phim <Icon name="chevronDown" size={14} />
              </button>

              <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                <span className="bg-gold text-black px-2.5 py-1 rounded text-[11px] font-black tracking-tight">IMDb {movie.rating}</span>
                <span className="bg-white/10 text-white/80 px-2.5 py-1 rounded text-[11px] font-bold border border-white/5">{movie.year}</span>
                {hasTrailer && (
                  <button onClick={() => setShowTrailer(true)} className="bg-white/10 text-white/80 px-2.5 py-1 rounded text-[11px] font-bold border border-white/5">Trailer</button>
                )}
                <span className="bg-white/10 text-white/80 px-2.5 py-1 rounded text-[11px] font-bold border border-white/5">{movie.duration}</span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                {movie.genre.map((g) => (
                  <span key={g} className="bg-white/5 text-white/60 px-4 py-1.5 rounded-lg text-[12px] font-bold border border-white/5">{g}</span>
                ))}
              </div>

              {isSeries && (
                <div className="w-full mb-10">
                  <div className="flex items-center gap-3 bg-orange-500/10 border border-orange-500/20 px-4 py-3 rounded-2xl text-orange-500 text-[13px] font-black">
                     <div className="w-5 h-5 rounded-full border-2 border-orange-500/30 border-t-orange-500 animate-spin" />
                     Đã chiếu: Tập {movie.episodes.length}/{movie.episodes.length} Tập
                  </div>
                </div>
              )}

              <div className="w-full mb-10">
                <h3 className="text-white text-[16px] font-black mb-4">Giới thiệu:</h3>
                <p className="text-white/50 text-[15px] leading-[1.7] font-medium">{movie.desc}</p>
              </div>

              <div className="flex items-center gap-4 w-full">
                 <button onClick={() => handlePlay(movie, 1)} className="flex-1 bg-accent text-white font-black text-[15px] py-4 rounded-2xl flex items-center justify-center gap-3">
                    <Icon name="play" size={20} className="fill-white" />
                    {isSeries ? "Xem Ngay" : "Xem Phim"}
                 </button>
                 <button onClick={() => toggleFavorite(movie)} className={cn("w-14 h-14 rounded-2xl flex items-center justify-center border", isFavorite ? "bg-red-500 text-white border-red-500" : "bg-white/5 text-white border-white/10")}>
                    <Icon name="heart" size={24} className={cn(isFavorite && "fill-white")} />
                 </button>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP LAYOUT: Original Grid (lg and above) */}
        <div className="hidden lg:block">
          <div className="relative h-[400px] overflow-hidden">
            <img src={movie.backdrop || movie.thumb} alt="" className="w-full h-full object-cover object-[center_20%] opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/25" />
            <div className="absolute inset-0 bg-gradient-to-r from-bg/65 to-transparent" />
            <button onClick={() => router.back()} className="absolute top-5 left-5 bg-black/55 border border-white/10 text-text-muted rounded-lg px-4 py-2 text-xs font-bold cursor-pointer flex items-center gap-2 backdrop-blur-md transition-all hover:bg-black/75">
              <Icon name="chevronLeft" size={14} /> Quay lại
            </button>
          </div>

          <div className="px-8 pb-16 -mt-[160px] relative z-10 max-w-[1400px] mx-auto">
            <div className="grid grid-cols-[250px_1fr] gap-10 items-start">
              <div className="shrink-0">
                <div className="rounded-xl overflow-hidden shadow-2xl border-2 border-white/5 mb-6 group relative aspect-[2/3]">
                  <img src={movie.thumb} alt={movie.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button onClick={() => handlePlay(movie, 1)} className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-lg">
                      <Icon name="play" size={24} className="fill-white ml-1" />
                    </button>
                  </div>
                </div>
                <div className="flex gap-2 justify-center flex-wrap">
                  <Badge variant="gold" className="px-3 py-1 text-[11px] uppercase">{movie.quality}</Badge>
                  <Badge variant="secondary" className="px-3 py-1 text-[11px] bg-white/5 text-text-muted">{movie.year}</Badge>
                </div>
              </div>

              <div className="pt-16">
                <h1 className="text-[42px] font-black leading-tight mb-2 tracking-tight text-white uppercase">{movie.title}</h1>
                <div className="text-text-muted text-[16px] mb-6 opacity-70 italic">{movie.title} ({movie.year})</div>
                
                <div className="flex items-center gap-6 mb-8 text-[14px] text-text-muted">
                  <div className="flex items-center gap-2"><StarRating rating={movie.rating} /><span className="text-gold font-black text-[18px]">{movie.rating}</span></div>
                  <span className="opacity-20">|</span>
                  <span>{movie.year}</span>
                  <span>{movie.duration}</span>
                  <span>{movie.country}</span>
                  <div className="flex items-center gap-2"><Icon name="eye" size={16} /> {movie.views} lượt xem</div>
                </div>

                <div className="flex gap-2 mb-8">
                  {movie.genre.map((g) => (
                    <span key={g} className="bg-bg-3 text-text-muted text-[12px] font-bold px-4 py-1.5 rounded-full border border-white/5">{g}</span>
                  ))}
                </div>

                <p className="text-text-muted/80 text-[15px] leading-relaxed mb-10 max-w-[800px]">{movie.desc}</p>

                <div className="grid grid-cols-[auto_1fr] gap-x-10 gap-y-3 text-[14px] mb-10 p-6 bg-white/5 rounded-2xl border border-white/5">
                  <span className="text-text-muted font-bold">Đạo diễn:</span><span className="text-text">{movie.director}</span>
                  <span className="text-text-muted font-bold">Diễn viên:</span><span className="text-text">{movie.cast.join(", ")}</span>
                  <span className="text-text-muted font-bold">Quốc gia:</span><span className="text-text">{movie.country}</span>
                </div>

                <div className="flex gap-4">
                  <button onClick={() => handlePlay(movie, 1)} className="bg-accent hover:bg-accent-hover text-white font-black px-10 py-4 rounded-xl flex items-center gap-3 transition-all"><Icon name="play" size={20} className="fill-white" /> {isSeries ? "Xem Ngay" : "Xem Phim"}</button>
                  {hasTrailer && <button onClick={() => setShowTrailer(true)} className="bg-white/5 text-text border border-white/10 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-white/10 transition-all"><Icon name="film" size={20} /> Trailer</button>}
                  <button onClick={() => toggleFavorite(movie)} className={cn("px-6 py-4 rounded-xl border transition-all", isFavorite ? "bg-red-500 text-white border-red-500" : "bg-white/5 text-white border-white/10")}><Icon name="heart" size={24} className={cn(isFavorite && "fill-white")} /></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12">
          <div className="flex border-b border-white/5 mb-6">
            {[
              { id: "episodes", label: isSeries ? "Danh sách tập" : "Danh sách server" },
              { id: "suggestion", label: "Có thể bạn thích" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-6 py-3.5 text-[14px] font-bold transition-all relative",
                  activeTab === tab.id ? "text-accent" : "text-text-muted hover:text-text"
                )}
              >
                {tab.label}
                {activeTab === tab.id && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent shadow-[0_0_8px_rgba(192,57,43,0.5)]" />}
              </button>
            ))}
          </div>

          {activeTab === "episodes" && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-2">
                {movie.episodes.map((ep, idx) => (
                  <button
                    key={idx}
                    onClick={() => handlePlay(movie, idx + 1)}
                    className={cn(
                      "h-10 px-4 rounded-lg text-[13px] font-bold transition-all border",
                      "bg-bg-3 border-white/5 text-text-muted hover:border-white/20 hover:text-text"
                    )}
                  >
                    {ep.title}
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === "suggestion" && (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
              {related.map((m) => (
                <div
                  key={m.id}
                  onClick={() => handleSelect(m)}
                  className="cursor-pointer group"
                >
                  <div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-bg-3 mb-3 border border-white/5">
                    <img src={m.thumb} alt={m.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" onError={(e) => ((e.target as HTMLImageElement).style.display = "none")} />
                    <Badge variant="quality" className="absolute top-2 left-2 text-[9px]">{m.quality}</Badge>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <Icon name="play" size={32} className="fill-white" />
                    </div>
                  </div>
                  <h3 className="text-[13.5px] font-bold text-text mb-1 truncate group-hover:text-accent transition-colors">{m.title}</h3>
                  <div className="flex items-center gap-2 text-[11px] text-text-muted">
                    <span className="text-gold font-bold">★ {m.rating}</span>
                    <span>·</span>
                    <span>{m.year}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {showTrailer && <TrailerPopup movie={movie} onClose={() => setShowTrailer(false)} />}
      </div>
    </MainLayout>
  );
}
