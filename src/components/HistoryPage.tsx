"use client";
import type { Movie } from "@/types";

interface Props {
  history: number[];
  movies: Movie[];
  onSelect: (movie: Movie) => void;
  onClearHistory: () => void;
  onPlay?: (movie: Movie, ep: number) => void;
}

export default function HistoryPage({ history, movies, onSelect, onClearHistory, onPlay }: Props) {
  const histMovies = history.map((id) => movies.find((m) => m.id === id)).filter(Boolean) as Movie[];

  return (
    <div style={{ padding: "32px 40px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
        <div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, marginBottom: 4, color: "#f0eee8" }}>Lịch Sử Xem</h1>
          <p style={{ color: "#9896a0", fontSize: 14 }}>{histMovies.length} bộ phim đã xem</p>
        </div>
        {histMovies.length > 0 && (
          <button
            onClick={onClearHistory}
            style={{
              background: "rgba(226,85,97,0.1)", color: "#e25561",
              border: "1px solid rgba(226,85,97,0.3)", borderRadius: 8,
              padding: "8px 16px", fontSize: 13, cursor: "pointer",
              display: "flex", alignItems: "center", gap: 6,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e25561" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6"/>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
            </svg>
            Xóa tất cả
          </button>
        )}
      </div>

      {histMovies.length === 0 ? (
        <div style={{ textAlign: "center", padding: "80px 0", color: "#9896a0" }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
          <p style={{ marginTop: 16, fontSize: 16 }}>Chưa có lịch sử xem phim</p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {histMovies.map((m, i) => (
            <div
              key={m.id}
              onClick={() => onSelect(m)}
              style={{
                display: "flex", gap: 14, background: "#1a1a24",
                borderRadius: 10, padding: 12, cursor: "pointer",
                border: "1px solid rgba(255,255,255,0.07)",
                transition: "border-color 0.2s", alignItems: "center",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#c0392b")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
            >
              <div style={{ width: 60, height: 88, borderRadius: 6, overflow: "hidden", flexShrink: 0, background: "#111118" }}>
                <img src={m.thumb} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => ((e.target as HTMLImageElement).style.display = "none")} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: "#f0eee8" }}>{m.title}</div>
                <div style={{ display: "flex", gap: 10, color: "#9896a0", fontSize: 12, marginBottom: 5 }}>
                  <span style={{ color: "#d4a853", display: "flex", alignItems: "center", gap: 3 }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="#d4a853" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    {m.rating}
                  </span>
                  <span>{m.year} · {m.duration}</span>
                </div>
                <div style={{ height: 3, background: "rgba(255,255,255,0.08)", borderRadius: 2 }}>
                  <div style={{ width: `${35 + i * 5}%`, height: "100%", background: "#c0392b", borderRadius: 2 }} />
                </div>
                <div style={{ fontSize: 11, color: "#9896a0", marginTop: 4 }}>Đã xem {35 + i * 5}%</div>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); onPlay ? onPlay(m, 1) : onSelect(m); }}
                style={{
                  background: "#c0392b", border: "none", borderRadius: 7,
                  padding: "7px 14px", color: "#fff", fontSize: 12, fontWeight: 700,
                  cursor: "pointer", display: "flex", alignItems: "center", gap: 5, flexShrink: 0,
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff" stroke="none"><polygon points="5,3 19,12 5,21"/></svg>
                Tiếp tục
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
