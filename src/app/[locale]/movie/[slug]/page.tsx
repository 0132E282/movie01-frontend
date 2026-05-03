import { MOVIES } from "@/data/movies";
import MovieDetailClient from "./MovieDetailClient";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/SEO/JsonLd";

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const movie = MOVIES.find((m) => m.slug === slug);

  if (!movie) {
    return {
      title: "Không tìm thấy phim",
    };
  }

  const title = `${movie.title} (${movie.year}) - Xem Phim HD Vietsub`;
  const description = movie.desc.substring(0, 160);

  return {
    title,
    description,
    keywords: [movie.title, ...movie.genre, ...movie.cast, movie.country, movie.year.toString()],
    openGraph: {
      title,
      description,
      type: "video.movie",
      url: `/movie/${movie.slug}`,
      images: [
        {
          url: movie.thumb,
          width: 300,
          height: 450,
          alt: movie.title,
        },
        {
          url: movie.backdrop || movie.thumb,
          width: 1200,
          height: 630,
          alt: movie.title,
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [movie.backdrop || movie.thumb],
    },
  };
}

export default async function MovieDetailPage({ params }: Props) {
  const { slug } = await params;
  const movie = MOVIES.find((m) => m.slug === slug);

  if (!movie) {
    notFound();
  }

  const related = MOVIES
    .filter((m) => m.id !== movie.id && m.genre.some((g) => movie.genre.includes(g)))
    .slice(0, 12);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Movie",
    "name": movie.title,
    "image": movie.thumb,
    "description": movie.desc,
    "datePublished": movie.year.toString(),
    "genre": movie.genre,
    "director": {
      "@type": "Person",
      "name": movie.director
    },
    "actor": movie.cast.map(name => ({
      "@type": "Person",
      "name": name
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": movie.rating,
      "bestRating": "10",
      "worstRating": "1",
      "ratingCount": movie.views // Using views as a proxy for rating count
    }
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <MovieDetailClient movie={movie} related={related} />
    </>
  );
}
