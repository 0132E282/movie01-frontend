"use client";
import { useRef } from "react";
import type { Movie } from "@/types";
import MovieItem from "./MovieItem";
import Icon from "../Icon";

interface Props {
  title: string;
  movies: Movie[];
  onSelect: (m: Movie) => void;
  onToggleFavorite: (m: Movie) => void;
  favorites: Set<number>;
  size?: "sm" | "md" | "lg";
  onViewAll?: (cat: string) => void;
  category?: string;
}

export default function MovieRow({ title, movies, onSelect, onToggleFavorite, favorites, size, onViewAll, category }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => scrollRef.current?.scrollBy({ left: dir * 500, behavior: "smooth" });
  if (!movies.length) return null;

  return (
    <div className="mb-10 md:mb-16">
      <div className="flex items-center justify-between mb-5 md:mb-8 gap-3">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-6 md:h-7 bg-accent rounded-full" />
          <h2 className="text-lg md:text-xl font-black tracking-tight text-white uppercase truncate sm:whitespace-normal">{title}</h2>
        </div>
        
        <div className="flex items-center gap-4 justify-end">
          {onViewAll && (
            <button
              onClick={() => onViewAll(category || "")}
              className="hidden sm:flex group bg-transparent border-0 text-text-muted hover:text-white text-sm cursor-pointer font-bold items-center gap-2 transition-colors whitespace-nowrap"
            >
              Xem tất cả <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          )}
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => scroll(-1)}
              className="bg-bg-3 border border-white/5 text-text-muted hover:bg-bg-4 hover:text-white rounded-lg w-9 h-9 md:w-10 md:h-10 flex items-center justify-center cursor-pointer transition-all"
            >
              <Icon name="chevronLeft" size={16} />
            </button>
            <button
              onClick={() => scroll(1)}
              className="bg-bg-3 border border-white/5 text-text-muted hover:bg-bg-4 hover:text-white rounded-lg w-9 h-9 md:w-10 md:h-10 flex items-center justify-center cursor-pointer transition-all"
            >
              <Icon name="chevronRight" size={16} />
            </button>
          </div>
        </div>
      </div>
      
      <div ref={scrollRef} className="hide-scroll flex gap-5 overflow-x-auto pb-4 px-1 -mx-1 mb-4 md:mb-0">
        {movies.map((m) => (
          <MovieItem key={m.id} movie={m} onSelect={onSelect} onToggleFavorite={onToggleFavorite} isFavorite={favorites.has(m.id)} size={size} />
        ))}
      </div>

      {onViewAll && (
        <div className="sm:hidden mt-2">
          <button
            onClick={() => onViewAll(category || "")}
            className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-text-muted text-sm font-black uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all active:scale-[0.98]"
          >
            Xem tất cả {title}
          </button>
        </div>
      )}
    </div>
  );
}
