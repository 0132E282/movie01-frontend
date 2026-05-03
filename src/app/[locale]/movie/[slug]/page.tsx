"use client";
import { use, useState, useMemo, useEffect } from "react";
import { useRouter } from "@/i18n/routing";
import { MOVIES } from "@/data/movies";
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

export default function MovieDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const router = useRouter();
  const { favorites, toggleFavorite, addToHistory } = useAppContext();

  const movie = useMemo(() => MOVIES.find((m) => m.slug === slug) ?? null, [slug]);

  const [activeTab, setActiveTab] = useState("episodes");
  const [subType, setSubType] = useState("vietsub");
  const [showTrailer, setShowTrailer] = useState(false);

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
          <p className="mt-2 text-[13px]">Phim bạn tìm kiếm không tồn tại hoặc đã bị xóa.</p>
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
  const hasTrailer = movie.trailer !== false;

  const related = MOVIES
    .filter((m) => m.id !== movie.id && m.genre.some((g) => movie.genre.includes(g)))
    .slice(0, 12);

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
      <div className="pt-14 min-h-screen bg-bg">
        {/* Backdrop Section */}
        <div className="relative h-[400px] overflow-hidden">
          <img
            src={movie.backdrop || movie.thumb}
            alt=""
            className="w-full h-full object-cover object-[center_20%]"
            onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-bg/65 to-transparent" />

          <button
            onClick={() => router.back()}
            className="absolute top-5 left-5 bg-black/55 border border-white/10 text-text-muted rounded-lg px-4 py-2 text-xs font-bold cursor-pointer flex items-center gap-2 backdrop-blur-md transition-all hover:bg-black/75 active:scale-95"
          >
            <Icon name="chevronLeft" size={14} />
            Quay lại
          </button>
        </div>

        {/* Main Content Layout */}
        <div className="px-8 pb-16 -mt-[160px] relative z-10 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-[200px_1fr] gap-8 items-start">
            {/* Left Column: Poster & Quick Info */}
            <div className="shrink-0">
              <div className="rounded-xl overflow-hidden shadow-2xl border-2 border-white/5 mb-4 group relative">
                <img src={movie.thumb} alt={movie.title} className="w-full block transition-transform group-hover:scale-105" onError={(e) => ((e.target as HTMLImageElement).style.display = "none")} />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <button onClick={() => handlePlay(movie, 1)} className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all">
                      <Icon name="play" size={24} className="fill-white ml-1" />
                   </button>
                </div>
              </div>
              <div className="flex gap-1.5 justify-center flex-wrap">
                <Badge variant="quality" className="px-2.5 py-1 text-[10px]">{movie.quality}</Badge>
                {isSeries && (
                  <Badge variant="secondary" className="px-2.5 py-1 text-[10px] bg-white/5 text-text-muted border-none">
                    {totalEps} Tập
                  </Badge>
                )}
              </div>
            </div>

            {/* Right Column: Detailed Info */}
            <div className="pt-16">
              <div className="flex gap-2 mb-3 flex-wrap">
                {movie.tags.map((t) => (
                  <Badge key={t} variant="gold" className="text-[9px] px-2 py-0.5 uppercase tracking-wider">{t}</Badge>
                ))}
              </div>

              <h1 className="text-[36px] font-black leading-tight mb-1 tracking-tight text-white">
                {movie.title}
              </h1>
              <div className="text-text-muted text-[14px] mb-4 italic opacity-70">
                {movie.title} ({movie.year})
              </div>

              {/* Metadata Bar */}
              <div className="flex items-center gap-4 mb-5 flex-wrap text-[13.5px] text-text-muted">
                <div className="flex items-center gap-1.5">
                  <StarRating rating={movie.rating} />
                  <span className="text-gold font-black text-[16px]">{movie.rating}</span>
                </div>
                <span className="opacity-20">|</span>
                <span>{movie.year}</span>
                <span>{movie.duration}{isSeries ? "/tập" : ""}</span>
                <span>{movie.country}</span>
                <div className="flex items-center gap-1.5">
                  <Icon name="eye" size={14} />
                  {movie.views} lượt xem
                </div>
              </div>

              {/* Genres */}
              <div className="flex gap-2 mb-6 flex-wrap">
                {movie.genre.map((g) => (
                  <span key={g} className="bg-bg-3 text-text-muted text-[11.5px] font-bold px-3.5 py-1.5 rounded-full border border-white/5 transition-colors hover:border-accent/30 hover:text-text">
                    {g}
                  </span>
                ))}
              </div>

              <p className="text-text-muted/80 text-[14px] leading-relaxed mb-8 max-w-[700px]">
                {movie.desc}
              </p>

              {/* Detail Table */}
              <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-[13.5px] mb-8">
                <span className="text-text-muted font-bold">Đạo diễn:</span>
                <span className="text-text">{movie.director}</span>
                <span className="text-text-muted font-bold">Diễn viên:</span>
                <span className="text-text">{movie.cast.join(", ")}</span>
                <span className="text-text-muted font-bold">Quốc gia:</span>
                <span className="text-text">{movie.country}</span>
                <span className="text-text-muted font-bold">Ngôn ngữ:</span>
                <span className="text-text">{movie.language}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 flex-wrap">
                <button
                  onClick={() => handlePlay(movie, 1)}
                  className="bg-accent text-white border-none rounded-lg px-7 py-3 text-[14px] font-black cursor-pointer flex items-center gap-2.5 shadow-lg shadow-accent/20 transition-all hover:bg-accent-hover active:scale-95"
                >
                  <Icon name="play" size={18} className="fill-white" />
                  {isSeries ? "Xem Tập 1" : "Xem Phim"}
                </button>

                {hasTrailer && (
                  <button
                    onClick={() => setShowTrailer(true)}
                    className="bg-white/5 text-text border border-white/10 rounded-lg px-5 py-3 text-[14px] font-bold cursor-pointer flex items-center gap-2 backdrop-blur-sm transition-all hover:bg-white/10"
                  >
                    <Icon name="film" size={18} />
                    Trailer
                  </button>
                )}

                <button
                  onClick={() => toggleFavorite(movie)}
                  className={cn(
                    "border rounded-lg px-5 py-3 text-[13.5px] font-bold cursor-pointer flex items-center gap-2 transition-all active:scale-95",
                    isFavorite
                      ? "bg-red-500/10 text-red-500 border-red-500/30"
                      : "bg-bg-3 text-text-muted border-white/5 hover:bg-bg-4 hover:text-text"
                  )}
                >
                  <Icon name="heart" size={16} className={cn(isFavorite && "fill-red-500")} />
                  {isFavorite ? "Đã thích" : "Yêu thích"}
                </button>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-12">
            <div className="flex border-b border-white/5 mb-6">
              {[
                { id: "episodes", label: isSeries ? "Danh sách tập" : "Xem ngay" },
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
                <div className="flex gap-2 mb-6">
                  {["vietsub", "thuyet-minh"].map((t) => (
                    <button
                      key={t}
                      onClick={() => setSubType(t)}
                      className={cn(
                        "px-4 py-2 rounded-lg text-[13px] font-bold transition-all",
                        subType === t ? "bg-accent text-white" : "bg-bg-3 text-text-muted hover:bg-bg-4"
                      )}
                    >
                      {t === "vietsub" ? "Vietsub" : "Thuyết Minh"}
                    </button>
                  ))}
                </div>

                {isSeries ? (
                  <div className="grid grid-cols-[repeat(auto-fill,minmax(60px,1fr))] gap-2">
                    {Array.from({ length: totalEps }, (_, i) => i + 1).map((ep) => (
                      <button
                        key={ep}
                        onClick={() => handlePlay(movie, ep)}
                        className={cn(
                          "h-10 rounded-lg text-[13px] font-bold transition-all border",
                          "bg-bg-3 border-white/5 text-text-muted hover:border-white/20 hover:text-text"
                        )}
                      >
                        {ep}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    <button
                      onClick={() => handlePlay(movie, 1)}
                      className="w-full max-w-[200px] h-12 bg-bg-3 border border-white/5 rounded-lg flex items-center justify-center gap-3 text-[14px] font-bold text-text hover:bg-bg-4 hover:border-accent/30 transition-all group"
                    >
                      <Icon name="play" size={16} className="fill-accent group-hover:scale-110 transition-transform" />
                      Máy chủ #1
                    </button>
                  </div>
                )}
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
        </div>

        {showTrailer && <TrailerPopup movie={movie} onClose={() => setShowTrailer(false)} />}
      </div>
    </MainLayout>
  );
}
