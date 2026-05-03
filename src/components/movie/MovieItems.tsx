"use client";
import type { Movie } from "@/types";
import MovieItem from "./MovieItem";
import Icon from "../Icon";
import Pagination from "../Pagination";

interface Props {
  movies: Movie[];
  onSelect: (m: Movie) => void;
  onToggleFavorite: (m: Movie) => void;
  favorites: Set<number>;
  view?: "grid" | "list";
  emptyMessage?: string;
  // Pagination props
  currentPage?: number;
  totalPages?: number;
  setPage?: (p: number) => void;
}

export default function MovieItems({
  movies,
  onSelect,
  onToggleFavorite,
  favorites,
  view = "grid",
  emptyMessage = "Không tìm thấy phim phù hợp",
  currentPage,
  totalPages,
  setPage
}: Props) {
  if (!movies.length) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-text-muted bg-bg-2 rounded-3xl border border-dashed border-border mb-12">
        <div className="w-20 h-20 rounded-full bg-bg-3 flex items-center justify-center mb-6">
          <Icon name="film" size={36} />
        </div>
        <p className="text-lg font-bold text-text mb-2">{emptyMessage}</p>
        <p className="text-sm">Hãy thử thay đổi bộ lọc để có kết quả tốt hơn</p>
      </div>
    );
  }

  const renderContent = () => {
    if (view === "list") {
      return (
        <div className="flex flex-col gap-4 mb-10">
          {movies.map((m) => (
            <MovieItem
              key={m.id}
              movie={m}
              onSelect={onSelect}
              onToggleFavorite={onToggleFavorite}
              isFavorite={favorites.has(m.id)}
              view="list"
            />
          ))}
        </div>
      );
    }

    return (
      <div className="grid [grid-template-columns:repeat(auto-fill,minmax(170px,1fr))] gap-x-5 gap-y-8 mb-10">
        {movies.map((m) => (
          <MovieItem
            key={m.id}
            movie={m}
            onSelect={onSelect}
            onToggleFavorite={onToggleFavorite}
            isFavorite={favorites.has(m.id)}
            size="md"
            view="grid"
          />
        ))}
      </div>
    );
  };

  return (
    <div className="mb-12">
      {renderContent()}
      
      {currentPage !== undefined && totalPages !== undefined && setPage !== undefined && (
        <div className="mt-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setPage={setPage}
          />
        </div>
      )}
    </div>
  );
}
