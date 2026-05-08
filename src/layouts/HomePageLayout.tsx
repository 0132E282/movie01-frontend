"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import type { Movie } from "@/types";

interface HomePageLayoutProps {
  children: React.ReactNode;
  movies: Movie[];
  onPlay: (m: Movie, ep: number) => void;
  onDetail: (m: Movie) => void;
  onToggleFavorite: (m: Movie) => void;
  favorites: Set<number>;
}

export default function HomePageLayout({children,movies,onPlay,onDetail,onToggleFavorite,favorites}: HomePageLayoutProps) {
  return (
    <div className="bg-bg min-h-screen flex flex-col pt-14">
      <Navbar />
      <div className="flex-1">
        <HeroBanner
          movies={movies}
          onPlay={onPlay}
          onDetail={onDetail}
          onToggleFavorite={onToggleFavorite}
          favorites={favorites}
        />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
