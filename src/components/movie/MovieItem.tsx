"use client";
import { useState } from "react";
import { Play, Heart, Star } from "lucide-react";
import type { Movie } from "@/types";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface Props {
  movie: Movie;
  onSelect: (m: Movie) => void;
  onToggleFavorite: (m: Movie) => void;
  isFavorite: boolean;
  size?: "sm" | "md" | "lg";
  view?: "grid" | "list";
}

const widthClass = { sm: "w-[140px]", md: "w-[175px]", lg: "w-[220px]" };

export default function MovieItem({
  movie, onSelect, onToggleFavorite, isFavorite, size = "md", view = "grid",
}: Props) {
  const [hovered, setHovered] = useState(false);

  const getBadgeText = () => {
    const parts = [movie.quality];
    
    if (movie.language) {
      const lang = movie.language.toLowerCase();
      if (lang.includes("thuyết minh")) parts.push("TM");
      else if (lang.includes("lồng tiếng")) parts.push("Lồng tiếng");
      else if (lang.includes("vietsub")) parts.push("Vietsub");
    }

    if (movie.episodes) {
      parts.push(`Tập ${movie.episodes}`);
    }

    return parts.filter(Boolean).join(" · ");
  };

  if (view === "list") {
    return (
      <div
        onClick={() => onSelect(movie)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "flex gap-4 rounded-lg p-3 cursor-pointer items-center transition-all duration-200",
          "border border-border bg-bg-3 hover:bg-bg-4 hover:border-border-strong"
        )}
      >
        <div className="relative w-[70px] h-[100px] rounded-md overflow-hidden shrink-0 bg-bg-2">
          <img src={movie.thumb} alt="" className="w-full h-full object-cover" onError={(e) => ((e.target as HTMLImageElement).style.display = "none")} />
          <Badge variant="quality" className="absolute top-1 left-1 text-[9px] uppercase">{getBadgeText()}</Badge>
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-bold text-[15px] mb-1 truncate">{movie.title}</p>
          <div className="flex gap-2 text-text-muted text-xs mb-2 flex-wrap items-center">
            <span className="flex items-center gap-1 text-gold font-bold">
              <Star size={11} className="fill-gold text-gold" />{movie.rating}
            </span>
            <span>{movie.year} · {movie.duration}</span>
            <span>{movie.genre.slice(0, 2).join(", ")}</span>
            <span>{movie.country}</span>
          </div>
          <p className="text-text-muted text-xs leading-relaxed line-clamp-2">{movie.desc}</p>
        </div>

        <div className="flex flex-col gap-2 shrink-0">
          <Button size="sm" onClick={(e) => { e.stopPropagation(); onSelect(movie); }}>
            <Play size={12} className="fill-white" /> Xem
          </Button>
          <Button
            size="sm" variant="secondary"
            className={cn(isFavorite && "text-red-400 border-red-400/30 bg-red-400/10")}
            onClick={(e) => { e.stopPropagation(); onToggleFavorite(movie); }}
          >
            <Heart size={12} className={cn(isFavorite && "fill-red-400 text-red-400")} />
            {isFavorite ? "Đã thích" : "Thích"}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onSelect(movie)}
      className={cn(
        "shrink-0 cursor-pointer rounded-lg overflow-hidden bg-bg-3 relative",
        "transition-all duration-250 ease-out",
        widthClass[size],
        hovered ? "scale-[1.05] -translate-y-1 shadow-card-hover" : "scale-100 shadow-card"
      )}
    >
      <div className="relative pb-[150%] bg-bg-3">
        <img
          src={movie.thumb} alt={movie.title}
          onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <Badge variant="quality" className="absolute top-2 left-2 text-[10px] uppercase">{getBadgeText()}</Badge>
        {movie.tags[0] && <Badge variant="gold" className="absolute top-2 right-2 text-[9px]">{movie.tags[0]}</Badge>}

        {hovered && (
          <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center gap-2 animate-fade-in">
            <button
              onClick={(e) => { e.stopPropagation(); onSelect(movie); }}
              className="w-12 h-12 rounded-full bg-accent hover:bg-accent-hover flex items-center justify-center transition-colors"
            >
              <Play size={20} className="fill-white text-white ml-0.5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); onToggleFavorite(movie); }}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] border transition-colors",
                isFavorite
                  ? "bg-red-400/20 text-red-400 border-red-400/40"
                  : "bg-white/10 text-white border-white/20 hover:bg-white/20"
              )}
            >
              <Heart size={13} className={cn(isFavorite && "fill-red-400")} />
              {isFavorite ? "Đã thích" : "Yêu thích"}
            </button>
          </div>
        )}
      </div>

      <div className="p-2.5 pb-3">
        <p className="text-xs font-semibold leading-tight mb-1 truncate">{movie.title}</p>
        <div className="flex items-center gap-1.5 text-text-muted text-[11px]">
          <span className="flex items-center gap-1 text-gold">
            <Star size={11} className="fill-gold text-gold" />{movie.rating}
          </span>
          <span>·</span><span>{movie.year}</span>
          <span>·</span><span className="truncate">{movie.duration}</span>
        </div>
      </div>
    </div>
  );
}
