"use client";
import { useState, useEffect, useCallback } from "react";
import { Play, Heart, Star, ChevronLeft, ChevronRight, Info } from "lucide-react";
import type { Movie } from "@/types";
import { cn } from "@/lib/utils";

interface Props {
  movies: Movie[];
  onPlay: (m: Movie, ep: number) => void;
  onDetail: (m: Movie) => void;
  onToggleFavorite: (m: Movie) => void;
  favorites: Set<number>;
  size?: "sm" | "lg";
}

export default function HeroBanner({ movies, onPlay, onDetail, onToggleFavorite, favorites, size = "lg" }: Props) {
  const featured = movies
    .filter((m) => m.is_show_slider)
    .sort((a, b) => a.position_show_slider - b.position_show_slider)
    .length > 0
    ? movies.filter((m) => m.is_show_slider).sort((a, b) => a.position_show_slider - b.position_show_slider)
    : movies.slice(0, 5);
    
  const [idx, setIdx] = useState(0);
  const [animating, setAnimating] = useState(false);

  const movie = featured[idx % featured.length];

  useEffect(() => {
    const t = setInterval(() => goTo((idx + 1) % featured.length), 7000);
    return () => clearInterval(t);
  }, [idx, featured.length]);

  const goTo = useCallback(
    (next: number) => {
      if (animating || next === idx) return;
      setAnimating(true);
      setTimeout(() => {
        setIdx(next);
        setAnimating(false);
      }, 350);
    },
    [animating, idx]
  );

  if (!movie) return null;
  const isFav = favorites.has(movie.id);
  const isSmall = size === "sm";

  return (
    <div 
      className="relative w-full overflow-hidden bg-bg cursor-pointer group/banner" 
      style={{ height: isSmall ? "clamp(240px, 35vw, 320px)" : "clamp(420px, 60vw, 720px)" }}
      onClick={() => {
        // On mobile, entire banner clicks to detail
        if (window.innerWidth < 1024) onDetail(movie);
      }}
    >
      {/* ── Backdrop slides ──────────────────────────────────── */}
      {featured.map((m, i) => (
        <div
          key={m.id}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === idx ? 1 : 0, zIndex: i === idx ? 1 : 0 }}
        >
          <img
            src={m.backdrop}
            alt=""
            className="w-full h-full object-cover object-center lg:object-[center_20%]"
            onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent lg:hidden" />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-bg via-bg/60 to-transparent" />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/20" />
        </div>
      ))}

      {/* ── Content overlay (Mobile + Desktop) ────────────────────── */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end lg:justify-center">
        <div
          className={cn(
            "px-6 md:px-12 lg:px-20 pb-12 lg:pb-0 transition-all duration-500 w-full max-w-[1400px] mx-auto",
          )}
          style={{ 
            opacity: animating ? 0 : 1, 
            transform: animating ? "translateY(10px)" : "translateY(0)" 
          }}
        >
          <div className="flex flex-col items-start text-left w-full lg:max-w-[700px]">
            {/* Badges & Meta (Mobile optimized) */}
            <div className="flex flex-wrap items-center gap-2 mb-3 lg:mb-6">
              <span className="bg-accent text-white text-[10px] lg:text-[11px] font-black px-2 py-0.5 lg:px-2.5 lg:py-1 rounded-sm tracking-widest uppercase">
                {movie.quality}
              </span>
              <span className="flex items-center gap-1 text-gold text-[12px] lg:text-[13px] font-black">
                <Star size={14} className="fill-gold" /> {movie.rating}
              </span>
              <span className="text-white/60 text-[12px] font-bold lg:hidden">
                · {movie.year} · {movie.country}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-sans font-black leading-[1.2] lg:leading-[1.1] tracking-tight text-white mb-2 drop-shadow-2xl text-[28px] md:text-[40px] lg:text-[64px] break-words">
              {movie.title}
            </h1>

            {/* Sub-title (English title) */}
            <p className="text-white/80 text-[14px] lg:text-[18px] mb-4 font-bold tracking-tight break-words">
              {movie.title !== movie.slug.replace(/-/g, ' ') ? movie.slug.replace(/-/g, ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : ""}
            </p>

            {/* Meta Rows (Desktop only for full detail) */}
            <div className="hidden lg:flex flex-col gap-3 mb-6">
              <p className="text-white/80 text-[15px] font-bold tracking-tight">
                {movie.genre.slice(0, 3).join(" · ")}
              </p>
              <div className="flex items-center gap-3 text-[13px] font-bold text-white/60">
                <span>{movie.year}</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>{movie.duration}</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>{movie.country}</span>
              </div>
            </div>

            {/* Genre (Mobile only) */}
            <p className="text-accent text-[13px] font-bold lg:hidden mb-4">
              {movie.genre.slice(0, 2).join(" · ")}
            </p>

            {/* Description (Desktop only) */}
            <p className="hidden lg:block text-white/50 text-[15px] leading-[1.6] mb-8 line-clamp-3 max-w-[550px]">
              {movie.desc}
            </p>
          </div>
        </div>
      </div>

        {/* Bottom Row: Actions (Left) + Thumbnails (Right) */}
        <div className="hidden lg:flex absolute bottom-10 left-10 lg:left-20 right-10 lg:right-20 z-20 flex items-center justify-between gap-10">
          {/* Actions (Left) */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={(e) => { e.stopPropagation(); onPlay(movie, 1); }}
              className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-black transition-all duration-300 shadow-xl hover:shadow-accent/40 active:scale-95 text-[15px] px-8 py-3.5 rounded-xl"
            >
              <Play size={18} className="fill-white" />
              Xem Ngay
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); onDetail(movie); }}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold border border-white/10 transition-all duration-300 active:scale-95 text-[14px] px-6 py-3.5 rounded-xl backdrop-blur-md"
            >
              <Info size={18} />
              Chi Tiết
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); onToggleFavorite(movie); }}
              className={cn(
                "flex items-center justify-center rounded-xl border transition-all duration-300 active:scale-95 bg-white/5 backdrop-blur-md w-12 h-12 lg:w-[54px] lg:h-[54px]",
                isFav
                  ? "text-red-500 border-red-500/30 bg-red-500/10"
                  : "text-white border-white/10 hover:bg-white/20"
              )}
            >
              <Heart size={20} className={cn(isFav && "fill-red-500")} />
            </button>
          </div>

          {/* Thumbnails (Right) */}
          <div className="flex justify-end gap-3 overflow-x-auto hide-scroll flex-1">
            {featured.map((m, i) => (
              <button
                key={m.id}
                onClick={(e) => { e.stopPropagation(); goTo(i); }}
                className={cn(
                  "relative flex-shrink-0 transition-all duration-300",
                  i === idx ? "scale-110" : "opacity-40 hover:opacity-100"
                )}
              >
                <div className={cn(
                  "rounded-lg overflow-hidden border-2 transition-all duration-300",
                  i === idx ? "border-accent shadow-xl shadow-accent/20 w-24 h-14" : "border-white/10 w-20 h-12"
                )}>
                  <img
                    src={m.thumb}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

      {/* ── Desktop Navigation Arrows ───────────────── */}
      <div className="hidden lg:block">
        <button
          onClick={(e) => { e.stopPropagation(); goTo((idx - 1 + featured.length) % featured.length); }}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/20 hover:bg-accent text-white transition-all duration-300 backdrop-blur-md border border-white/5 opacity-0 group-hover/banner:opacity-100"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); goTo((idx + 1) % featured.length); }}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/20 hover:bg-accent text-white transition-all duration-300 backdrop-blur-md border border-white/5 opacity-0 group-hover/banner:opacity-100"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* ── Progress Indicator ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-white/5">
        <div
          key={idx}
          className="h-full bg-accent origin-left"
          style={{ animation: "hero-progress 7s linear forwards" }}
        />
      </div>

      <style>{`
        @keyframes hero-progress {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
