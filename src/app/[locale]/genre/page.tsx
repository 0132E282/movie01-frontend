"use client";
import { GENRES } from "@/data/movies";
import CategoryListPage from "@/components/CategoryListPage";

export default function GenreListPage() {
  return (
    <CategoryListPage 
      title="Thể loại" 
      items={GENRES} 
      type="genre" 
    />
  );
}
