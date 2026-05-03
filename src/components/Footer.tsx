"use client";
import { useRouter } from "next/navigation";

const cols = [
  {
    title: "Phim Mới",
    links: ["Phim chiếu rạp", "Phim lẻ", "Phim bộ", "Phim hành động", "Phim viễn tưởng", "Phim tâm lý", "Phim hài hước"],
  },
  {
    title: "Phim Hay",
    links: ["Phim Mỹ", "Phim Hàn Quốc", "Phim Trung Quốc", "Phim Thái Lan", "Phim Việt Nam", "Phim Ma Kinh Dị", "Phim Hoạt Hình"],
  },
  {
    title: "Phim Hot",
    links: ["Về chúng tôi", "Phimmoi", "Sitemap"],
  },
  {
    title: "Trợ giúp",
    links: ["Hỏi đáp", "Phimmoi", "Liên hệ", "Tin tức"],
  },
  {
    title: "Thông tin",
    links: ["Điều khoản sử dụng", "Chính sách riêng tư", "Khiếu nại bản quyền"],
  },
];

const linkRouteMap: Record<string, string> = {
  "Phim hành động": "/catalog?genre=" + encodeURIComponent("Hành động"),
  "Phim viễn tưởng": "/catalog?genre=" + encodeURIComponent("Khoa học viễn tưởng"),
  "Phim tâm lý": "/catalog?genre=" + encodeURIComponent("Tâm lý"),
  "Phim hài hước": "/catalog?genre=" + encodeURIComponent("Hài"),
  "Phim Ma Kinh Dị": "/catalog?genre=" + encodeURIComponent("Kinh dị"),
  "Phim Hoạt Hình": "/catalog?genre=" + encodeURIComponent("Hoạt hình"),
  "Phim lẻ": "/catalog",
  "Phim bộ": "/series",
  "Phim chiếu rạp": "/catalog",
};

export default function Footer() {
  const router = useRouter();

  const handleLink = (link: string) => {
    const route = linkRouteMap[link];
    if (route) router.push(route);
  };

  return (
    <footer style={{
      background: "#0d0d0d",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      marginTop: 0,
      padding: "40px 40px 24px",
      fontFamily: "inherit",
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "220px repeat(5, 1fr)", gap: 32, marginBottom: 32 }}>
        {/* Logo col */}
        <div style={{ paddingRight: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <span style={{ fontSize: 26 }}>🖐</span>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 800, color: "#c0392b", lineHeight: 1 }}>
                PhimMoi<sup style={{ fontSize: 9, verticalAlign: "super" }}>®</sup>
              </div>
              <div style={{ fontSize: 9, color: "#9896a0", marginTop: 1 }}>Phim Mới Nhất Chất</div>
            </div>
          </div>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#9896a0", marginBottom: 6 }}>PhimMoi and Chill</div>
          <p style={{ fontSize: 11, color: "rgba(152,150,160,0.75)", lineHeight: 1.7 }}>
            Website xem phim trực tuyến chất lượng cao, cập nhật phim mới nhất vietSub mỗi ngày, xem miễn phí hàng nghìn bộ phim HD/4K đa thể loại.
          </p>
        </div>

        {/* Link columns */}
        {cols.map((col) => (
          <div key={col.title}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#c0392b", marginBottom: 14, letterSpacing: "0.01em" }}>
              {col.title}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {col.links.map((link) => (
                <a
                  key={link}
                  onClick={() => handleLink(link)}
                  style={{
                    fontSize: 12, color: "rgba(152,150,160,0.85)",
                    cursor: "pointer", textDecoration: "none",
                    transition: "color 0.18s", display: "block",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#f0eee8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(152,150,160,0.85)")}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        paddingTop: 18,
        display: "flex", alignItems: "center",
        justifyContent: "space-between", flexWrap: "wrap", gap: 10,
      }}>
        <div style={{ fontSize: 11, color: "rgba(152,150,160,0.55)" }}>
          © 2025 PhimMoi.Net — Xem phim HD miễn phí, nhanh nhất, chất lượng nhất.
        </div>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          {["HD", "4K", "VietSub", "Thuyết Minh"].map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 10, color: "rgba(152,150,160,0.5)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 4, padding: "2px 8px",
                fontWeight: 600, letterSpacing: "0.04em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
