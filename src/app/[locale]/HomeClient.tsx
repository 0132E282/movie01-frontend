"use client";
import { useRouter } from "@/i18n/routing";
import { Link } from "@/i18n/routing";
import { slugify } from "@/data/movies";
import type { Movie } from "@/types";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import MovieRow from "@/components/movie/MovieRow";
import MainLayout from "@/layouts/MainLayout";
import { useAppContext } from "@/context/AppContext";
import { getMovieUrl, getWatchUrl, getGenreUrl } from "@/lib/routes";

const genreCategories = [
  { label: "Hành Động", genre: "Hành động" },
  { label: "Kinh Dị", genre: "Kinh dị" },
  { label: "Hoạt Hình", genre: "Hoạt hình" },
  { label: "Tâm Lý", genre: "Tâm lý" },
  { label: "Lãng Mạn", genre: "Lãng mạn" },
  { label: "Khoa Học", genre: "Khoa học viễn tưởng" },
  { label: "Lịch Sử", genre: "Lịch sử" },
  { label: "Tội Phạm", genre: "Tội phạm" },
];

export default function HomeClient({ 
  movies, 
  featuredMovies, 
  newMovies, 
  topRated, 
  actionMovies, 
  animatedMovies 
}: { 
  movies: Movie[],
  featuredMovies: Movie[],
  newMovies: Movie[],
  topRated: Movie[],
  actionMovies: Movie[],
  animatedMovies: Movie[]
}) {
  const router = useRouter();
  const { favorites, toggleFavorite, addToHistory } = useAppContext();

  const handleSelect = (m: Movie) => {
    addToHistory(m.id);
    router.push(getMovieUrl(m.slug));
  };

  const handlePlay = (m: Movie, ep = 1) => {
    router.push(getWatchUrl(m.slug, m.episodes ? ep : undefined));
  };

  const handleViewCategory = (genre: string) => {
    if (genre === "Tất cả") {
      router.push("/catalog");
    } else {
      router.push(getGenreUrl(slugify(genre)));
    }
  };

  return (
    <MainLayout hideBreadcrumb={true}>
      <Navbar />
      <div className="min-h-screen bg-bg">
        <HeroBanner
          movies={movies}
          onPlay={handlePlay}
          onDetail={handleSelect}
          onToggleFavorite={toggleFavorite}
          favorites={favorites}
        />
        <div className="px-10 pb-12 mt-8 relative z-20">
          {/* Genre categories - Simplified Premium UI */}
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-accent rounded-full" />
                <h2 className="text-xl font-black tracking-tight text-white uppercase">Thể Loại Phim</h2>
              </div>
              <Link href="/catalog" className="text-sm font-bold text-text-muted hover:text-accent transition-colors flex items-center gap-2 group">
                Xem tất cả <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
              {genreCategories.map((c) => (
                <Link
                  key={c.genre}
                  href={getGenreUrl(slugify(c.genre))}
                  className="group"
                >
                  <div className="relative bg-bg-2 border border-white/5 rounded-xl px-4 py-3.5 transition-all duration-300 group-hover:bg-bg-3 group-hover:border-accent/30 group-hover:-translate-y-1 flex items-center justify-center overflow-hidden h-full">
                    <span className="relative z-10 text-[13.5px] font-bold text-text group-hover:text-white transition-colors text-center">
                      {c.label}
                    </span>

                    {/* Subtle hover indicator */}
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <MovieRow title="Phim Nổi Bật" movies={featuredMovies} onSelect={handleSelect} onToggleFavorite={toggleFavorite} favorites={favorites} />
          <MovieRow title="Phim Mới Nhất" movies={newMovies} onSelect={handleSelect} onToggleFavorite={toggleFavorite} favorites={favorites} onViewAll={handleViewCategory} category="Tất cả" />
          <MovieRow title="Phim Đánh Giá Cao" movies={topRated} onSelect={handleSelect} onToggleFavorite={toggleFavorite} favorites={favorites} />
          {actionMovies.length > 0 && <MovieRow title="Phim Hành Động" movies={actionMovies} onSelect={handleSelect} onToggleFavorite={toggleFavorite} favorites={favorites} onViewAll={handleViewCategory} category="Hành động" />}
          {animatedMovies.length > 0 && <MovieRow title="Phim Hoạt Hình" movies={animatedMovies} onSelect={handleSelect} onToggleFavorite={toggleFavorite} favorites={favorites} onViewAll={handleViewCategory} category="Hoạt hình" />}
        </div>
      </div>
    </MainLayout>
  );
}
