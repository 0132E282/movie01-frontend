"use client";
import type { Movie } from "@/types";
import Icon from "./Icon";
import { cn } from "@/lib/utils";

interface Props {
  history: number[];
  movies: Movie[];
  onSelect: (movie: Movie) => void;
  onClearHistory: () => void;
  onPlay?: (movie: Movie, ep: number) => void;
}

export default function HistoryPage({ history, movies, onSelect, onClearHistory, onPlay }: Props) {
  const histMovies = history.map((id) => movies.find((m) => m.id === id)).filter(Boolean) as Movie[];

  return (
    <div className="px-6 md:px-10 py-8 max-w-[1300px] mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-[28px] font-extrabold mb-1 text-text uppercase tracking-tight">
            Lịch Sử Xem
          </h1>
          <p className="text-text-muted text-sm font-medium">
            {histMovies.length} bộ phim đã xem
          </p>
        </div>
        {histMovies.length > 0 && (
          <button
            onClick={onClearHistory}
            className="bg-red-500/10 text-red-500 border border-red-500/30 rounded-xl px-5 py-2.5 text-xs font-black uppercase tracking-widest hover:bg-red-500/20 transition-all flex items-center gap-2 group active:scale-95"
          >
            <Icon name="trash" size={14} className="group-hover:rotate-12 transition-transform" />
            Xóa tất cả
          </button>
        )}
      </div>

      {histMovies.length === 0 ? (
        <div className="text-center py-32 text-text-muted bg-bg-2 rounded-3xl border border-dashed border-border">
          <div className="w-20 h-20 rounded-full bg-bg-3 flex items-center justify-center mb-6 mx-auto">
            <Icon name="history" size={36} className="opacity-20" />
          </div>
          <p className="text-lg font-bold text-text mb-2">Chưa có lịch sử xem phim</p>
          <p className="text-sm">Hãy khám phá các bộ phim mới ngay hôm nay</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {histMovies.map((m, i) => (
            <div
              key={m.id}
              onClick={() => onSelect(m)}
              className="flex gap-5 bg-bg-2 hover:bg-bg-3 border border-border rounded-2xl p-3.5 cursor-pointer transition-all items-center group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-[70px] h-[100px] rounded-xl overflow-hidden shrink-0 bg-bg-4 shadow-lg group-hover:shadow-accent/10 transition-all relative z-10">
                <img src={m.thumb} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>

              <div className="flex-1 min-w-0 relative z-10">
                <div className="font-black text-[15px] mb-1.5 truncate text-text group-hover:text-accent transition-colors uppercase tracking-tight">
                  {m.title}
                </div>
                <div className="flex items-center gap-3 text-text-muted text-[12px] font-bold mb-3">
                  <span className="text-gold flex items-center gap-1">
                    <Icon name="star" size={12} className="fill-gold" />
                    {m.rating}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/10" />
                  <span>{m.year}</span>
                  <span className="w-1 h-1 rounded-full bg-white/10" />
                  <span>{m.duration}</span>
                </div>
                
                <div className="flex flex-col gap-1.5 w-full max-w-[200px]">
                   <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-accent rounded-full shadow-[0_0_10px_rgba(192,57,43,0.5)]" 
                        style={{ width: `${35 + i * 5}%` }} 
                      />
                   </div>
                   <div className="text-[10px] text-text-muted font-black uppercase tracking-widest opacity-60">
                      Đã xem {35 + i * 5}%
                   </div>
                </div>
              </div>

              <button
                onClick={(e) => { e.stopPropagation(); onPlay ? onPlay(m, 1) : onSelect(m); }}
                className="bg-accent hover:bg-accent-hover px-6 py-3 rounded-xl text-white text-[12px] font-black uppercase tracking-widest transition-all flex items-center gap-2.5 shrink-0 shadow-lg shadow-accent/20 group/btn active:scale-95 relative z-10"
              >
                <Icon name="play" size={14} className="fill-white group-hover/btn:scale-125 transition-transform" />
                Tiếp tục
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
