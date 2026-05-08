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
    <footer className="bg-bg border-t border-white/5  py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-10 mb-12">
          {/* Brand Logo & Info */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shadow-lg shadow-accent/20">
                <span className="text-white text-xl">🖐</span>
              </div>
              <div>
                <div className="font-serif text-[18px] font-black text-accent leading-none">
                  PhimMoi<sup className="text-[9px] align-super">®</sup>
                </div>
                <div className="text-[10px] text-white/40 mt-1 uppercase tracking-widest font-bold">Premium Cinema</div>
              </div>
            </div>
            <p className="text-[13px] text-white/40 leading-relaxed max-w-[280px]">
              Website xem phim trực tuyến chất lượng cao, cập nhật phim mới nhất mỗi ngày, xem miễn phí hàng nghìn bộ phim HD/4K đa thể loại.
            </p>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="text-[14px] font-black text-white mb-6 uppercase tracking-wider">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => handleLink(link)}
                      className="text-[13px] text-white/40 hover:text-accent transition-colors text-left cursor-pointer bg-transparent border-none p-0"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[12px] text-white/20 text-center md:text-left">
            © 2026 PhimMoi.Net — Xem phim HD miễn phí, nhanh nhất, chất lượng nhất.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["HD", "4K", "VietSub", "Thuyết Minh"].map((tag) => (
              <span
                key={tag}
                className="text-[10px] text-white/30 border border-white/10 rounded-md px-3 py-1 font-black tracking-widest uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
