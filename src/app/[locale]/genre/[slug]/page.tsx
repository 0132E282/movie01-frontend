import { GENRES, slugify } from "@/data/movies";
import GenreClient from "./GenreClient";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const genreName = GENRES.find(g => slugify(g) === slug) || "Thể Loại";
  
  const title = `Phim ${genreName} Hay Nhất - Xem Phim ${genreName} HD Vietsub`;
  const description = `Tổng hợp danh sách phim ${genreName} mới nhất, phim ${genreName} hay nhất mọi thời đại với chất lượng HD tuyệt vời tại PhimMoi.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/genre/${slug}`,
    },
  };
}

export default async function GenrePage({ params }: Props) {
  const { slug } = await params;
  const initialGenreName = GENRES.find(g => slugify(g) === slug) || "Tất cả";

  return <GenreClient slug={slug} initialGenreName={initialGenreName} />;
}
