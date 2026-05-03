"use client";
import type { Movie } from "@/types";

interface Props {
  movie: Movie;
  onClose: () => void;
}

export default function TrailerPopup({ movie, onClose }: Props) {
  return (
    <div
      style={{
        position: "fixed", inset: 0, background: "rgba(0,0,0,0.92)",
        zIndex: 3000, display: "flex", alignItems: "center",
        justifyContent: "center", padding: 20,
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%", maxWidth: 860, background: "#000",
          borderRadius: 14, overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 40px 100px rgba(0,0,0,0.8)",
        }}
      >
        {/* Header */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "14px 18px",
          background: "rgba(255,255,255,0.04)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#f0eee8" }}>Trailer – {movie.title}</div>
            <div style={{ fontSize: 11, color: "#9896a0", marginTop: 2 }}>{movie.year} · {movie.duration}</div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.08)", border: "none",
              color: "#9896a0", borderRadius: "50%", width: 32, height: 32,
              display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Player area */}
        <div style={{ position: "relative", paddingBottom: "56.25%", background: "#0a0a0a" }}>
          <img
            src={movie.backdrop || movie.thumb} alt=""
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }}
            onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
          />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)" }} />

          {/* Play button */}
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexDirection: "column", gap: 16,
          }}>
            <div style={{
              width: 80, height: 80, background: "rgba(192,57,43,0.9)", borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 0 8px rgba(192,57,43,0.2), 0 0 40px rgba(192,57,43,0.4)",
              cursor: "pointer",
            }}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="#fff" stroke="none">
                <polygon points="5,3 19,12 5,21"/>
              </svg>
            </div>
            <div style={{
              background: "rgba(0,0,0,0.6)", borderRadius: 8, padding: "8px 20px",
              backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.1)",
            }}>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", letterSpacing: "0.02em" }}>
                ▶ Đang phát trailer · {movie.title}
              </span>
            </div>
          </div>

          {/* Bottom controls */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            background: "linear-gradient(transparent, rgba(0,0,0,0.9))",
            padding: "24px 20px 14px",
          }}>
            <div style={{ height: 3, background: "rgba(255,255,255,0.12)", borderRadius: 2, marginBottom: 10, cursor: "pointer" }}>
              <div style={{ width: "28%", height: "100%", background: "#c0392b", borderRadius: 2, position: "relative" }}>
                <div style={{ position: "absolute", right: -5, top: "50%", transform: "translateY(-50%)", width: 11, height: 11, background: "#fff", borderRadius: "50%" }} />
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#fff", fontSize: 12 }}>
              <span style={{ fontWeight: 600 }}>0:42</span>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>/ 2:30</span>
              <div style={{ flex: 1 }} />
              <span style={{ background: "rgba(255,255,255,0.15)", padding: "2px 8px", borderRadius: 4, fontSize: 10, fontWeight: 700 }}>HD</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
              </svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
