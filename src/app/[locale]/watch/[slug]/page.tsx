import { MOVIES } from "@/data/movies";
import WatchClient from "./WatchClient";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/SEO/JsonLd";

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

function parseSlug(rawSlug: string) {
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
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { movieSlug, currentEp } = parseSlug(slug);
  const movie = MOVIES.find((m) => m.slug === movieSlug);

  if (!movie) {
    return {
      title: "Không tìm thấy phim",
    };
  }

  const title = `Xem phim ${movie.title} - Tập ${currentEp} Vietsub HD`;
  const description = `Đang xem phim ${movie.title} tập ${currentEp}. ${movie.desc.substring(0, 120)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "video.episode",
      url: `/watch/${slug}`,
      images: [
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

export default async function WatchPage({ params }: Props) {
  const { slug } = await params;
  const { movieSlug, currentEp } = parseSlug(slug);
  const movie = MOVIES.find((m) => m.slug === movieSlug);

  if (!movie) {
    notFound();
  }

  const related = MOVIES
    .filter((m) => m.id !== movie.id && m.genre.some((g) => movie.genre.includes(g)))
    .slice(0, 8);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": `${movie.title} - Tập ${currentEp}`,
    "description": movie.desc,
    "thumbnailUrl": [movie.thumb, movie.backdrop].filter(Boolean),
    "uploadDate": new Date().toISOString(), // Since we don't have exact upload date
    "duration": movie.duration.includes("phút") ? `PT${parseInt(movie.duration)}M` : "PT1H30M", // Basic conversion
    "contentUrl": `https://phimmoi01-frontend.vercel.app/watch/${slug}`,
    "embedUrl": `https://phimmoi01-frontend.vercel.app/watch/${slug}`,
    "interactionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": { "@type": "WatchAction" },
      "userInteractionCount": movie.views
    }
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <WatchClient movie={movie} currentEp={currentEp} related={related} />
    </>
  );
}
