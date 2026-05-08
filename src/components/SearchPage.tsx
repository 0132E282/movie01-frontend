"use client";
import { useState } from "react";
import type { Movie } from "@/types";
import Icon from "./Icon";
import { cn } from "@/lib/utils";

const GENRES = ["Tất cả", "Hành động", "Khoa học viễn tưởng", "Kinh dị", "Hài", "Hoạt hình", "Tâm lý", "Tội phạm", "Lịch sử", "Sử thi", "Phiêu lưu", "Gia đình", "Thiên tai", "Tiểu sử", "Siêu anh hùng", "Gián điệp"];

interface Props {
  movies: Movie[];
  initialQuery?: string;
  onSelect: (movie: Movie) => void;
  onToggleFavorite: (movie: Movie) => void;
  favorites: Set<number>;
}

export default function SearchPage({ movies, initialQuery = "", onSelect, onToggleFavorite, favorites }: Props) {
  const [query, setQuery] = useState(initialQuery);
  const [genre, setGenre] = useState("Tất cả");

  const filtered = movies.filter((m) => {
    const q = query.toLowerCase();
    const matchQ = !q || m.title.toLowerCase().includes(q) || m.genre.some((g) => g.toLowerCase().includes(q));
    const matchG = genre === "Tất cả" || m.genre.includes(genre);
    return matchQ && matchG;
  });

  return (
    <div className="px-6 md:px-10 py-8 max-w-[1300px] mx-auto min-h-[70vh]">
      <div className="flex flex-col gap-6 mb-10">
        <h1 className="font-display text-[32px] font-extrabold text-text uppercase tracking-tight">Tìm kiếm</h1>

        {/* Search input */}
        <div className="relative group">
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-accent transition-colors">
            <Icon name="search" size={20} />
          </div>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tên phim, thể loại, diễn viên..."
            className="w-full bg-bg-2 border border-border focus:border-accent/50 rounded-2xl py-5 pl-14 pr-14 text-text text-[16px] outline-none transition-all shadow-inner placeholder:text-text-muted/50 font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-5 top-1/2 -translate-y-1/2 bg-bg-4 hover:bg-bg-3 text-text-muted hover:text-white rounded-full w-8 h-8 flex items-center justify-center transition-all active:scale-90"
            >
              <Icon name="x" size={16} />
            </button>
          )}
        </div>

        {/* Genre pills */}
        <div className="flex gap-2 overflow-x-auto hide-scroll pb-2 -mx-2 px-2">
          {GENRES.map((g) => (
            <button
              key={g}
              onClick={() => setGenre(g)}
              className={cn(
                "flex-shrink-0 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all border",
                genre === g 
                  ? "bg-accent border-accent text-white shadow-lg shadow-accent/20" 
                  : "bg-bg-2 border-border text-text-muted hover:border-white/20 hover:text-white"
              )}
            >
              {g}
            </button>
          ))}
        </div>

        {/* Results count */}
        <div className="flex items-center gap-2 text-text-muted text-[13px] font-bold">
           <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
           {filtered.length} kết quả {query && <span>cho "{query}"</span>}
        </div>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-x-6 gap-y-10">
          {filtered.map((m) => {
            const isFavorite = favorites.has(m.id);
            return (
              <div
                key={m.id}
                onClick={() => onSelect(m)}
                className="group cursor-pointer relative"
              >
                <div className="aspect-[2/3] rounded-2xl overflow-hidden bg-bg-2 border border-border shadow-card group-hover:shadow-card-hover transition-all duration-500 relative">
                  <img 
                    src={m.thumb} 
                    alt={m.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                     <div className="bg-accent text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg shadow-lg">
                        {m.quality}
                     </div>
                  </div>

                  {/* Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                     <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center shadow-glow">
                        <Icon name="play" size={24} className="fill-white" />
                     </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavorite(m);
                    }}
                    className={cn(
                      "absolute top-3 right-3 w-9 h-9 rounded-xl flex items-center justify-center backdrop-blur-md transition-all active:scale-90 border",
                      isFavorite 
                        ? "bg-red-500 border-red-500 text-white shadow-lg" 
                        : "bg-black/40 border-white/10 text-white hover:bg-black/60"
                    )}
                  >
                    <Icon name="heart" size={18} className={cn(isFavorite && "fill-current")} />
                  </button>
                </div>

                <div className="mt-4 px-1">
                  <h3 className="font-bold text-[14px] text-text line-clamp-1 group-hover:text-accent transition-colors uppercase tracking-tight">
                    {m.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-1.5 text-[11px] text-text-muted font-black uppercase tracking-widest">
                    <span className="text-gold flex items-center gap-1">★ {m.rating}</span>
                    <span className="w-1 h-1 rounded-full bg-white/10" />
                    <span>{m.year}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-32 text-text-muted bg-bg-2 rounded-3xl border border-dashed border-border mt-10">
          <div className="w-20 h-20 rounded-full bg-bg-3 flex items-center justify-center mb-6">
            <Icon name="search" size={36} className="opacity-20" />
          </div>
          <p className="text-lg font-bold text-text mb-2">Không tìm thấy phim phù hợp</p>
          <p className="text-sm">Hãy thử tìm kiếm với từ khóa khác</p>
        </div>
      )}
    </div>
  );
}
