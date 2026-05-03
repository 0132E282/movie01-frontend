"use client";
import { COUNTRIES } from "@/data/movies";
import CategoryListPage from "@/components/CategoryListPage";

export default function CountryListPage() {
  return (
    <CategoryListPage 
      title="Quốc gia" 
      items={COUNTRIES} 
      type="country" 
    />
  );
}
