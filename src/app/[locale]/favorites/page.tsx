"use client";
import { useRouter } from "@/i18n/routing";
import { MOVIES } from "@/data/movies";
import type { Movie } from "@/types";
import Navbar from "@/components/Navbar";
import MainLayout from "@/layouts/MainLayout";
import { useAppContext } from "@/context/AppContext";
import { getMovieUrl } from "@/lib/routes";

export default function FavoritesRoute() {
  const router = useRouter();
  const { favorites, toggleFavorite, addToHistory, user, setAuthMode } = useAppContext();
  const favoriteMovies = MOVIES.filter((m) => favorites.has(m.id));

  const handleSelect = (m: Movie) => {
    addToHistory(m.id);
    router.push(getMovieUrl(m.slug));
  };

  if (!user) {
    return (
      <MainLayout>
        <Navbar />
        <div style={{ paddingTop: 56 }}>
          <div style={{ padding: "80px 40px", textAlign: "center" }}>
            <div style={{ background: "rgba(192,57,43,0.1)", width: 80, height: 80, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: "#f0eee8", marginBottom: 12 }}>Bạn chưa đăng nhập</h2>
            <p style={{ color: "#9896a0", marginBottom: 24, fontSize: 14 }}>Vui lòng đăng nhập để xem và quản lý danh sách phim yêu thích của bạn.</p>
            <button
              onClick={() => setAuthMode("login")}
              style={{ background: "#c0392b", color: "#fff", border: "none", borderRadius: 8, padding: "12px 32px", fontSize: 14, fontWeight: 700, cursor: "pointer" }}
            >
              Đăng nhập ngay
            </button>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Navbar />
      <div style={{ paddingTop: 56 }}>
        <div style={{ padding: "32px 40px" }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, marginBottom: 6, color: "#f0eee8" }}>Yêu Thích</h1>
          <p style={{ color: "#9896a0", fontSize: 14, marginBottom: 28 }}>{favoriteMovies.length} bộ phim trong danh sách</p>
          {favoriteMovies.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0", color: "#9896a0" }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              <p style={{ marginTop: 16, fontSize: 16 }}>Chưa có phim yêu thích</p>
              <p style={{ marginTop: 8, fontSize: 13 }}>Nhấn ♥ trên bất kỳ phim nào để thêm vào đây</p>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 16 }}>
              {favoriteMovies.map((m) => (
                <div key={m.id} style={{ position: "relative" }}>
                  <div
                    onClick={() => handleSelect(m)}
                    style={{ cursor: "pointer", borderRadius: 10, overflow: "hidden", background: "#1a1a24", transition: "transform 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04) translateY(-4px)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    <div style={{ position: "relative", paddingBottom: "150%", background: "#111118" }}>
                      <img src={m.thumb} alt={m.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => ((e.target as HTMLImageElement).style.display = "none")} />
                      <div style={{ position: "absolute", top: 8, left: 8, background: "#c0392b", color: "#fff", fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 4 }}>{m.quality}</div>
                    </div>
                    <div style={{ padding: "10px 10px 12px" }}>
                      <div style={{ fontSize: 12, fontWeight: 600, lineHeight: 1.3, marginBottom: 4, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: "#f0eee8" }}>{m.title}</div>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#9896a0", fontSize: 11 }}>
                        <span style={{ color: "#d4a853" }}>★ {m.rating}</span>
                        <span>·</span><span>{m.year}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleFavorite(m)}
                    style={{
                      position: "absolute", top: 10, right: 10,
                      background: "rgba(0,0,0,0.7)", border: "none",
                      borderRadius: "50%", width: 28, height: 28,
                      display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e25561" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
