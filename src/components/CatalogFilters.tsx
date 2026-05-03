"use client";
import { GENRES, YEARS, QUALITIES, COUNTRIES, SORT_OPTIONS } from "@/data/movies";
import Icon from "./Icon";
import { cn } from "@/lib/utils";

interface Props {
  genre: string;
  setGenre: (v: string) => void;
  year: string;
  setYear: (v: string) => void;
  quality: string;
  setQuality: (v: string) => void;
  country: string;
  setCountry: (v: string) => void;
  sort: string;
  setSort: (v: string) => void;
  showFilters: boolean;
  setShowFilters: (v: boolean) => void;
  view: "grid" | "list";
  setView: (v: "grid" | "list") => void;
  activeFiltersCount: number;
}

export default function CatalogFilters({
  genre, setGenre,
  year, setYear,
  quality, setQuality,
  country, setCountry,
  sort, setSort,
  showFilters, setShowFilters,
  view, setView,
  activeFiltersCount
}: Props) {
  const FilterSelect = ({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) => (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] text-text-muted font-bold tracking-[0.05em] uppercase px-1">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none bg-bg-3 border border-border rounded-lg py-2.5 pl-3 pr-10 text-text text-[13.5px] cursor-pointer outline-none w-full transition-colors hover:border-border-strong focus:border-accent"
        >
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-60">
          <Icon name="chevronDown" size={14} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="mt-8">
      {showFilters && (
        <div className="bg-bg-2 border border-border rounded-2xl p-6 mb-10 grid gap-5 items-end [grid-template-columns:repeat(auto-fit,minmax(180px,1fr))] shadow-xl animate-slide-up">
          <FilterSelect label="Thể loại" value={genre} onChange={setGenre} options={GENRES} />
          <FilterSelect label="Năm phát hành" value={year} onChange={setYear} options={YEARS} />
          <FilterSelect label="Chất lượng" value={quality} onChange={setQuality} options={QUALITIES} />
          <FilterSelect label="Quốc gia" value={country} onChange={setCountry} options={COUNTRIES} />
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] text-text-muted font-bold tracking-[0.05em] uppercase px-1">Sắp xếp</label>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-bg-3 border border-border rounded-lg py-2.5 pl-3 pr-10 text-text text-[13.5px] cursor-pointer outline-none w-full transition-colors hover:border-border-strong focus:border-accent"
              >
                {SORT_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-60">
                <Icon name="chevronDown" size={14} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick genre chips */}
      <div className="hide-scroll flex gap-2.5 overflow-x-auto mb-8 pb-1 scroll-smooth">
        {GENRES.map((g) => (
          <button
            key={g}
            onClick={() => setGenre(g)}
            className={cn(
              "shrink-0 rounded-xl px-5 py-2.5 text-[13.5px] font-bold cursor-pointer transition-all border active:scale-95",
              genre === g 
                ? "bg-accent border-accent text-white shadow-lg shadow-accent/25" 
                : "bg-bg-3 border-border text-text-muted hover:border-border-strong hover:text-text"
            )}
          >{g}</button>
        ))}
      </div>
    </div>
  );
}
