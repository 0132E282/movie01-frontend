"use client";
import { useState, useEffect } from "react";
import type { Movie } from "@/types";
import { Loader2, AlertCircle } from "lucide-react";

interface Props {
  movie: Movie;
  episode?: number | null;
  onEpChange?: (ep: number) => void;
  isSeries?: boolean;
}

export default function VideoPlayer({ movie, episode, isSeries }: Props) {
  const [loading, setLoading] = useState(true);

  const currentEp = episode?.toString() || "1";
  const embedUrl = movie.episode_links?.[currentEp];

  // Reset loading state when episode changes
  useEffect(() => {
    if (embedUrl) setLoading(true);
  }, [embedUrl]);

  if (!embedUrl) {
    return (
      <div className="relative w-full aspect-video bg-bg-2 flex flex-col items-center justify-center border border-white/5 rounded-xl overflow-hidden group">
        <img
          src={movie.backdrop || movie.thumb}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="relative z-10 flex flex-col items-center gap-4 text-center px-6">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
            <AlertCircle className="text-text-muted w-8 h-8" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">Chưa có link xem phim</h3>
            <p className="text-text-muted text-sm mt-1">Vui lòng quay lại sau hoặc thử server khác</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-black w-full aspect-video rounded-xl overflow-hidden border border-white/5 shadow-2xl">
      {/* Premium Loader */}
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-bg-2 z-20">
          <Loader2 className="w-10 h-10 text-accent animate-spin mb-3" />
          <span className="text-text-muted text-xs font-bold uppercase tracking-[0.2em] animate-pulse">
            Đang tải nguồn phim...
          </span>
        </div>
      )}

      <iframe
        src={embedUrl}
        className="w-full h-full border-0 relative z-10"
        allowFullScreen
        onLoad={() => setLoading(false)}
        allow="autoplay; encrypted-media; picture-in-picture"
        title={`${movie.title} - ${isSeries ? `Tập ${currentEp}` : "Full"}`}
      />
    </div>
  );
}
