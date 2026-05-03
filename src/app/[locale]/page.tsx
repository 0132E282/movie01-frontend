import { MOVIES } from "@/data/movies";
import HomeClient from "./HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PhimMoi – Trang Chủ Xem Phim Online HD Cập Nhật Mỗi Ngày",
  description: "PhimMoi - Website xem phim online miễn phí, cập nhật nhanh nhất các bộ phim bom tấn, phim bộ, phim lẻ, hoạt hình với chất lượng HD tuyệt vời.",
  openGraph: {
    title: "PhimMoi – Trang Chủ Xem Phim Online HD",
    description: "Website xem phim online miễn phí, cập nhật nhanh nhất các bộ phim bom tấn.",
    url: "/",
    siteName: "PhimMoi",
    images: [
      {
        url: "/images/og-main.png",
        width: 1200,
        height: 630,
        alt: "PhimMoi - Xem phim online",
      },
    ],
  },
};

export default function HomePage() {
  const featuredMovies = MOVIES
    .filter((m) => m.is_featured)
    .sort((a, b) => a.position_featured - b.position_featured)
    .slice(0, 8);
  const newMovies = [...MOVIES].sort((a, b) => b.year - a.year).slice(0, 8);
  const topRated = [...MOVIES].sort((a, b) => b.rating - a.rating).slice(0, 8);
  const actionMovies = MOVIES.filter((m) => m.genre.includes("Hành động"));
  const animatedMovies = MOVIES.filter((m) => m.genre.includes("Hoạt hình"));

  return (
    <HomeClient 
      movies={MOVIES}
      featuredMovies={featuredMovies}
      newMovies={newMovies}
      topRated={topRated}
      actionMovies={actionMovies}
      animatedMovies={animatedMovies}
    />
  );
}
