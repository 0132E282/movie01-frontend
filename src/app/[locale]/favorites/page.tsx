"use client";
import { useRouter } from "@/i18n/routing";
import { MOVIES } from "@/data/movies";
import type { Movie } from "@/types";
import Navbar from "@/components/Navbar";
import MainLayout from "@/layouts/MainLayout";
import { useAppContext } from "@/context/AppContext";
import { getMovieUrl } from "@/lib/routes";
import Icon from "@/components/Icon";
import { cn } from "@/lib/utils";

export default function FavoritesRoute() {
  const router = useRouter();
  const { favorites, toggleFavorite, addToHistory, user, setAuthMode } = useAppContext();
  const favoriteMovies = MOVIES.filter((m) => favorites.has(m.id));

  const handleSelect = (m: Movie) => {
    addToHistory(m.id);
    router.push(getMovieUrl(m.slug));
  };

  if (!user) {
    return (
      <MainLayout>
        <Navbar />
        <div className="pt-20 pb-32">
          <div className="max-w-[1300px] mx-auto px-6 md:px-10 flex flex-col items-center text-center">
            <div className="bg-accent/10 w-24 h-24 rounded-full flex items-center justify-center mb-8 border border-accent/20 animate-pulse">
              <Icon name="heart" size={40} className="text-accent" />
            </div>
            <h2 className="text-[32px] font-black text-text uppercase tracking-tight mb-4">Bạn chưa đăng nhập</h2>
            <p className="text-text-muted max-w-md mb-10 font-medium leading-relaxed">
              Vui lòng đăng nhập để xem và quản lý danh sách phim yêu thích của bạn. 
              Các bộ phim bạn thích sẽ được đồng bộ trên tất cả thiết bị.
            </p>
            <button
              onClick={() => setAuthMode("login")}
              className="bg-accent hover:bg-accent-hover text-white px-12 py-4 rounded-2xl text-[15px] font-black uppercase tracking-[0.2em] transition-all shadow-xl shadow-accent/20 active:scale-95 flex items-center gap-3"
            >
              <Icon name="user" size={20} />
              Đăng nhập ngay
            </button>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Navbar />
      <div className="pt-20 pb-20">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h1 className="font-display text-[36px] font-extrabold text-text uppercase tracking-tight mb-2">Phim Yêu Thích</h1>
              <div className="flex items-center gap-2 text-text-muted font-bold text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                {favoriteMovies.length} bộ phim trong danh sách của bạn
              </div>
            </div>
          </div>

          {favoriteMovies.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-32 text-text-muted bg-bg-2 rounded-3xl border border-dashed border-border">
              <div className="w-24 h-24 rounded-full bg-bg-3 flex items-center justify-center mb-8">
                <Icon name="heart" size={44} className="opacity-10" />
              </div>
              <p className="text-xl font-bold text-text mb-3">Danh sách yêu thích đang trống</p>
              <p className="text-sm font-medium mb-8">Hãy nhấn biểu tượng trái tim trên bất kỳ bộ phim nào để thêm vào đây</p>
              <button 
                onClick={() => router.push("/")}
                className="text-accent font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-all"
              >
                Khám phá phim ngay <Icon name="chevronRight" size={14} />
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-x-8 gap-y-12">
              {favoriteMovies.map((m) => (
                <div key={m.id} className="group relative">
                  <div
                    onClick={() => handleSelect(m)}
                    className="aspect-[2/3] rounded-2xl overflow-hidden bg-bg-2 border border-border shadow-card group-hover:shadow-card-hover transition-all duration-500 cursor-pointer relative"
                  >
                    <img src={m.thumb} alt={m.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="absolute top-3 left-3">
                       <div className="bg-accent text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg shadow-lg">
                          {m.quality}
                       </div>
                    </div>

                    {/* Actions */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                       <div className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-glow">
                          <Icon name="play" size={28} className="fill-white" />
                       </div>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleFavorite(m)}
                    className="absolute -top-3 -right-3 w-10 h-10 rounded-2xl bg-bg-3 border border-border text-red-500 shadow-xl flex items-center justify-center hover:bg-red-500 hover:text-white transition-all active:scale-90 z-20 group/remove"
                  >
                    <Icon name="x" size={20} className="group-hover:rotate-90 transition-transform" />
                  </button>

                  <div className="mt-5">
                    <h3 className="font-bold text-[16px] text-text line-clamp-1 group-hover:text-accent transition-colors uppercase tracking-tight mb-2">
                      {m.title}
                    </h3>
                    <div className="flex items-center gap-4 text-[12px] text-text-muted font-black uppercase tracking-widest">
                      <span className="text-gold flex items-center gap-1">★ {m.rating}</span>
                      <span className="w-1 h-1 rounded-full bg-white/10" />
                      <span>{m.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
