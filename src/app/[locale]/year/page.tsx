"use client";
import { YEARS } from "@/data/movies";
import CategoryListPage from "@/components/CategoryListPage";

export default function YearListPage() {
  return (
    <CategoryListPage
      title="Năm phát hành"
      items={YEARS}
      type="year"
    />
  );
}
