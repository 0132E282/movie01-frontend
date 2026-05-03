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

// * SRP: HeroBanner only owns slide state + rendering — data comes from parent
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

  // * Auto-advance every 7s
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
    <div className="relative w-full overflow-hidden" style={{ height: isSmall ? "clamp(200px, 25vw, 300px)" : "clamp(420px, 58vw, 640px)" }}>
      {/* ── Backdrop slides ──────────────────────────────────── */}
      {featured.map((m, i) => (
        <div
          key={m.id}
          className="absolute inset-0 transition-opacity duration-500"
          style={{ opacity: i === idx ? 1 : 0, zIndex: i === idx ? 1 : 0 }}
        >
          <img
            src={m.backdrop}
            alt=""
            className="w-full h-full object-cover object-center"
            onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
          />
          {/* Left fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/75 to-transparent" />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-[#0a0a0f]/30" />
        </div>
      ))}

      {/* ── Content overlay ──────────────────────────────────── */}
      <div className="relative z-10 h-full flex items-center">
        <div
          className={cn(
            "pr-10 md:pr-16 transition-all duration-400 w-full",
            isSmall ? "pl-10 md:pl-12" : "pl-10 md:pl-16 max-w-[1200px]"
          )}
          style={{ opacity: animating ? 0 : 1, transform: animating ? "translateY(8px)" : "translateY(0)" }}
        >
          <div className={cn("flex items-center justify-between gap-6 w-full", !isSmall && "flex-col items-start justify-start")}>
            <div className={cn("flex-1", isSmall ? "max-w-[70%]" : "max-w-[650px]")}>
              {!isSmall && (
                /* Quality + episode badge (Homepage only) */
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="bg-accent text-white text-[10px] font-black px-2.5 py-1 rounded tracking-widest uppercase">
                    {movie.quality}
                  </span>
                  {movie.episodes && (
                    <span className="bg-bg-3 border border-white/10 text-text text-[10px] font-bold px-2.5 py-1 rounded tracking-wide uppercase">
                      Hoàn tất ({movie.episodes}/{movie.episodes})
                    </span>
                  )}
                  {movie.tags.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="bg-bg-3/80 border border-white/10 text-text-muted text-[10px] font-semibold px-2.5 py-1 rounded tracking-wide uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {/* Title */}
              <h1 className={cn(
                "font-sans font-extrabold leading-[1.08] tracking-tight text-white drop-shadow-lg",
                isSmall ? "text-[clamp(24px,4vw,36px)] mb-0" : "text-[clamp(26px,4.5vw,52px)] mb-2"
              )}>
                {movie.title}
              </h1>

              {!isSmall && (
                <>
                  {/* Sub-title / genre line */}
                  <p className="text-text-muted text-[13px] mb-3 font-medium">
                    {movie.genre.join(" · ")}
                  </p>

                  {/* Meta row */}
                  <div className="flex items-center gap-3 text-[13px] mb-5 flex-wrap">
                    <span className="flex items-center gap-1 text-gold font-bold">
                      <Star size={13} className="fill-gold text-gold" />
                      {movie.rating}
                    </span>
                    <span className="text-text-muted">{movie.year}</span>
                    <span className="opacity-20 text-text-muted">·</span>
                    <span className="text-text-muted">{movie.duration}</span>
                    <span className="opacity-20 text-text-muted">·</span>
                    <span className="text-text-muted">{movie.country}</span>
                  </div>

                  {/* Description */}
                  <p className="text-white/65 text-[13.5px] leading-[1.7] mb-7 line-clamp-3 max-w-[420px]">
                    {movie.desc}
                  </p>
                </>
              )}
            </div>

            {/* Actions */}
            <div className={cn("flex items-center gap-3", isSmall && "shrink-0")}>
              <button
                onClick={() => onPlay(movie, 1)}
                className={cn(
                  "flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold transition-all duration-200 shadow-lg hover:shadow-accent/30 hover:shadow-xl active:scale-95",
                  isSmall ? "text-[12px] px-6 py-2.5 rounded-md" : "text-[14px] px-6 py-3 rounded-lg"
                )}
              >
                <Play size={isSmall ? 14 : 16} className="fill-white" />
                Xem Ngay
              </button>

              {!isSmall && (
                <>
                  <button
                    onClick={() => onDetail(movie)}
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/18 backdrop-blur-sm border border-white/20 text-white font-semibold text-[14px] px-6 py-3 rounded-lg transition-all duration-200 active:scale-95"
                  >
                    <Info size={16} />
                    Chi Tiết
                  </button>

                  <button
                    onClick={() => onToggleFavorite(movie)}
                    className={cn(
                      "flex items-center justify-center w-11 h-11 rounded-lg border transition-all duration-200 active:scale-95",
                      isFav
                        ? "text-red-400 border-red-400/50 bg-red-400/10"
                        : "text-white/60 border-white/20 bg-white/8 hover:bg-white/15 hover:text-white"
                    )}
                  >
                    <Heart size={17} className={cn(isFav && "fill-red-400")} />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* ── Filmstrip thumbnails ──────────────── */}
        {!isSmall && (
          <div className="hidden lg:flex absolute right-10 bottom-10 gap-2 z-20">
            {featured.map((m, i) => (
              <button
                key={m.id}
                onClick={() => goTo(i)}
                className={cn(
                  "relative flex-shrink-0 rounded-md overflow-hidden transition-all duration-300 cursor-pointer",
                  i === idx
                    ? "w-[96px] h-[60px] ring-2 ring-accent shadow-lg shadow-accent/30"
                    : "w-[72px] h-[46px] opacity-55 hover:opacity-90 hover:scale-105"
                )}
              >
                <img
                  src={m.thumb}
                  alt={m.title}
                  className="w-full h-full object-cover"
                  onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
                />
                {i === idx && <div className="absolute inset-x-0 bottom-0 h-0.5 bg-accent" />}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Arrows ───────────────── */}
      <button
        onClick={() => goTo((idx - 1 + featured.length) % featured.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/70 border border-white/15 text-white/70 hover:text-white transition-all duration-200 backdrop-blur-sm"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={() => goTo((idx + 1) % featured.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/70 border border-white/15 text-white/70 hover:text-white transition-all duration-200 backdrop-blur-sm"
        style={{ right: "clamp(12px, 1.5vw, 24px)" }}
      >
        <ChevronRight size={18} />
      </button>

      {/* ── Progress bar ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-[2px] bg-white/8">
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
      `}</style>
    </div>
  );
}
