"use client";
import { useState } from "react";
import type { Movie } from "@/types";

const GENRES = ["Tất cả", "Hành động", "Khoa học viễn tưởng", "Kinh dị", "Hài", "Hoạt hình", "Tâm lý", "Tội phạm", "Lịch sử", "Sử thi", "Phiêu lưu", "Gia đình", "Thiên tai", "Tiểu sử", "Siêu anh hùng", "Gián điệp"];

interface Props {
  movies: Movie[];
  initialQuery?: string;
  onSelect: (movie: Movie) => void;
  onToggleFavorite: (movie: Movie) => void;
  favorites: Set<number>;
}

export default function SearchPage({ movies, initialQuery = "", onSelect, onToggleFavorite, favorites }: Props) {
  const [query, setQuery] = useState(initialQuery);
  const [genre, setGenre] = useState("Tất cả");

  const filtered = movies.filter((m) => {
    const q = query.toLowerCase();
    const matchQ = !q || m.title.toLowerCase().includes(q) || m.genre.some((g) => g.toLowerCase().includes(q));
    const matchG = genre === "Tất cả" || m.genre.includes(genre);
    return matchQ && matchG;
  });

  return (
    <div style={{ padding: "32px 40px" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, marginBottom: 20, color: "#f0eee8" }}>Tìm kiếm</h1>

      {/* Search input */}
      <div style={{ position: "relative", marginBottom: 20 }}>
        <div style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9896a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tên phim, thể loại, diễn viên..."
          style={{
            width: "100%", background: "#1a1a24",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 12, padding: "14px 16px 14px 48px",
            color: "#f0eee8", fontSize: 15, outline: "none",
            fontFamily: "inherit",
          }}
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            style={{
              position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)",
              background: "#22222e", border: "none", color: "#9896a0", borderRadius: "50%",
              width: 24, height: 24, display: "flex", alignItems: "center",
              justifyContent: "center", cursor: "pointer",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        )}
      </div>

      {/* Genre pills */}
      <div className="hide-scroll" style={{ display: "flex", gap: 8, overflowX: "auto", marginBottom: 24, paddingBottom: 4 }}>
        {GENRES.map((g) => (
          <button
            key={g}
            onClick={() => setGenre(g)}
            style={{
              flexShrink: 0,
              background: genre === g ? "#c0392b" : "#1a1a24",
              color: genre === g ? "#fff" : "#9896a0",
              border: "1px solid " + (genre === g ? "#c0392b" : "rgba(255,255,255,0.07)"),
              borderRadius: 20, padding: "6px 16px", fontSize: 13,
              cursor: "pointer", fontWeight: genre === g ? 700 : 400,
              transition: "all 0.2s", whiteSpace: "nowrap",
            }}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Results count */}
      <div style={{ marginBottom: 14, color: "#9896a0", fontSize: 13 }}>
        {filtered.length} kết quả{query ? ` cho "${query}"` : ""}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 16 }}>
          {filtered.map((m) => (
            <div
              key={m.id}
              onClick={() => onSelect(m)}
              style={{ cursor: "pointer", borderRadius: 10, overflow: "hidden", background: "#1a1a24", transition: "transform 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04) translateY(-4px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <div style={{ position: "relative", paddingBottom: "150%", background: "#111118" }}>
                <img src={m.thumb} alt={m.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => ((e.target as HTMLImageElement).style.display = "none")} />
                <div style={{ position: "absolute", top: 8, left: 8, background: "#c0392b", color: "#fff", fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 4 }}>{m.quality}</div>
                {m.tags[0] && <div style={{ position: "absolute", top: 8, right: 8, background: "rgba(0,0,0,0.8)", color: "#d4a853", fontSize: 9, fontWeight: 700, padding: "2px 6px", borderRadius: 4 }}>{m.tags[0]}</div>}
              </div>
              <div style={{ padding: "10px 10px 12px" }}>
                <div style={{ fontSize: 12, fontWeight: 600, lineHeight: 1.3, marginBottom: 4, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: "#f0eee8" }}>{m.title}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#9896a0", fontSize: 11 }}>
                  <span style={{ color: "#d4a853" }}>★ {m.rating}</span>
                  <span>·</span><span>{m.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "80px 0", color: "#9896a0" }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <p style={{ marginTop: 16, fontSize: 16 }}>Không tìm thấy phim phù hợp</p>
        </div>
      )}
    </div>
  );
}
