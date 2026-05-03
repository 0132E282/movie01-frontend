"use client";
import { use, useState, useMemo, useEffect } from "react";
import { useRouter } from "@/i18n/routing";
import { MOVIES } from "@/data/movies";
import type { Movie } from "@/types";
import Navbar from "@/components/Navbar";
import Icon from "@/components/Icon";
import MainLayout from "@/layouts/MainLayout";
import VideoPlayer from "@/components/VideoPlayer";
import { useAppContext } from "@/context/AppContext";
import { getMovieUrl, getWatchUrl } from "@/lib/routes";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const SERVERS = ["Server VIP 1", "Server VIP 2", "Server VIP 3"];

export default function WatchPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: rawSlug } = use(params);
  const router = useRouter();
  const { favorites, toggleFavorite, addToHistory } = useAppContext();

  // Parse slug: "movie-slug-tap-1" -> { slug: "movie-slug", ep: 1 }
  const { movieSlug, currentEp } = useMemo(() => {
    const match = rawSlug.match(/^(.+)-tap-(\d+)$/);
    if (match) {
      return {
        movieSlug: match[1],
        currentEp: parseInt(match[2])
      };
    }
    return {
      movieSlug: rawSlug,
      currentEp: 1
    };
  }, [rawSlug]);

  const movie = useMemo(() => MOVIES.find((m) => m.slug === movieSlug) ?? null, [movieSlug]);

  const [subType, setSubType] = useState("vietsub");
  const [server, setServer] = useState(SERVERS[0]);

  useEffect(() => {
    if (movie) {
      addToHistory(movie.id);
    }
  }, [movie?.id]);

  if (!movie) {
    return (
      <MainLayout>
        <Navbar />
        <div className="pt-32 text-center px-10 text-text-muted">
          <Icon name="alertCircle" size={48} className="mx-auto text-white/5" />
          <p className="mt-4 text-[18px] font-bold text-text">Không tìm thấy phim</p>
          <button
            onClick={() => router.push("/")}
            className="mt-6 bg-accent text-white border-none rounded-lg px-6 py-2.5 text-[14px] font-bold cursor-pointer hover:bg-accent-hover transition-colors"
          >
            Về trang chủ
          </button>
        </div>
      </MainLayout>
    );
  }

  const totalEps = movie.episodes || 1;
  const isSeries = totalEps > 1;

  const related = MOVIES
    .filter((m) => m.id !== movie.id && m.genre.some((g) => movie.genre.includes(g)))
    .slice(0, 8);

  const handlePlay = (m: Movie, ep = 1) => {
    router.push(getWatchUrl(m.slug, ep));
  };

  const handleSelect = (m: Movie) => {
    router.push(getMovieUrl(m.slug));
  };

  return (
    <MainLayout>
      <Navbar />
      <div className="pt-14 min-h-screen bg-bg">
        <div className="mx-auto max-w-[1300px] px-6 py-10 animate-in fade-in duration-500">
          <div className="grid grid-cols-[1fr_320px] gap-10 items-start">
            {/* Left Column: Player & Info */}
            <div className="min-w-0">
              {/* Server Selector */}
              <div className="flex gap-3 mb-6 flex-wrap">
                {SERVERS.map((s) => (
                  <button
                    key={s}
                    onClick={() => setServer(s)}
                    className={cn(
                      "px-5 py-2.5 rounded-xl text-[13px] font-black transition-all border flex items-center gap-2.5 whitespace-nowrap shadow-sm",
                      server === s 
                        ? "bg-accent border-accent text-white shadow-lg shadow-accent/25 scale-[1.02]" 
                        : "bg-bg-3 border-white/5 text-text-muted hover:border-white/20 hover:text-text hover:bg-bg-4"
                    )}
                  >
                    <Icon name="server" size={15} />
                    {s}
                  </button>
                ))}
              </div>

              {/* Player Container */}
              <div className="rounded-xl overflow-hidden shadow-2xl border border-white/5 bg-black aspect-video mb-6 relative group">
                <VideoPlayer
                  movie={movie}
                  episode={isSeries ? currentEp : null}
                  onEpChange={(ep) => handlePlay(movie, ep)}
                  isSeries={isSeries}
                  server={server}
                />
              </div>

              {/* Movie Title & Meta */}
              <div className="mb-8">
                <h1 className="text-[28px] font-black mb-2 tracking-tight text-white leading-tight">
                  {movie.title} {isSeries && <span className="text-accent ml-2">Tập {currentEp}</span>}
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

              {/* Info Card */}
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

              {/* Episode List */}
              <div className="bg-bg-2 border border-white/5 rounded-xl overflow-hidden">
                <div className="flex items-center gap-4 px-5 py-4 border-b border-white/5 bg-white/2">
                  <span className="font-black text-[15px] text-text">DANH SÁCH TẬP</span>
                  <div className="flex gap-2">
                    {["vietsub", "thuyet-minh"].map((t) => (
                      <button
                        key={t}
                        onClick={() => setSubType(t)}
                        className={cn(
                          "px-3 py-1.5 rounded-md text-[11.5px] font-bold transition-all",
                          subType === t ? "bg-accent text-white" : "bg-bg-3 text-text-muted hover:bg-bg-4"
                        )}
                      >
                        {t === "vietsub" ? "Vietsub" : "Thuyết Minh"}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="p-5 flex flex-wrap gap-2 max-h-[300px] overflow-y-auto hide-scroll">
                  {isSeries ? (
                    Array.from({ length: totalEps }, (_, i) => i + 1).map((ep) => (
                      <button
                        key={ep}
                        onClick={() => handlePlay(movie, ep)}
                        className={cn(
                          "w-[54px] h-[38px] rounded-lg text-[13px] font-bold transition-all border",
                          currentEp === ep 
                            ? "bg-accent border-accent text-white shadow-lg shadow-accent/20" 
                            : "bg-bg-3 border-white/5 text-text-muted hover:border-white/20 hover:text-text"
                        )}
                      >
                        {ep}
                      </button>
                    ))
                  ) : (
                    <button className="h-10 px-6 rounded-lg bg-accent text-white font-bold text-[13px]">Máy chủ #1</button>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Recommendations */}
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
