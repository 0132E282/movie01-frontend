"use client";
import { useState, useRef, useEffect } from "react";
import { Link, useRouter, usePathname } from "@/i18n/routing";
import { useAppContext } from "@/context/AppContext";
import AuthModal from "@/components/AuthModal";
import { cn } from "@/lib/utils";
import { GENRES, COUNTRIES, YEARS, slugify } from "@/data/movies";

const ProfileMenu = ({
  user,
  onLogout,
  onClose,
}: {
  user: { name: string; email: string };
  onLogout: () => void;
  onClose: (action?: any) => void;
}) => (
  <div className="absolute top-[calc(100%+8px)] right-0 bg-bg-2 border border-border rounded-xl overflow-hidden min-w-[200px] shadow-card-hover z-[500]">
    <div className="p-4 border-b border-border">
      <div className="font-bold text-sm mb-0.5">{user.name}</div>
      <div className="color-text-muted text-xs">{user.email}</div>
    </div>
    <div className="p-2">
      {[
        { icon: "🎬", label: "Lịch sử xem", action: "/history" as any },
        { icon: "♥", label: "Yêu thích", action: "/favorites" as any },
      ].map((item) => (
        <button
          key={item.action}
          onClick={() => onClose(item.action)}
          className="w-full bg-transparent border-none text-text p-2 rounded-lg cursor-pointer flex items-center gap-2.5 text-xs text-left transition-colors hover:bg-bg-3"
        >
          <span className="text-text-muted">{item.icon}</span>{item.label}
        </button>
      ))}
      <div className="border-t border-border my-1.5" />
      <button
        onClick={onLogout}
        className="w-full bg-transparent border-none text-red-400 p-2 rounded-lg cursor-pointer flex items-center gap-2.5 text-xs transition-colors hover:bg-red-400/10"
      >
        ↩ Đăng xuất
      </button>
    </div>
  </div>
);

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { user, setUser, authMode, setAuthMode } = useAppContext();

  const navLinks = [
    { id: "home",    label: "PHIMMOI",        path: "/",            highlight: false },
    { id: "le",      label: "PHIM LẺ",        path: "/single-movies",     highlight: false },
    { id: "bo",      label: "PHIM BỘ",        path: "/series-movies",     highlight: false },
    { id: "genres",  label: "THỂ LOẠI",       path: "/genre", highlight: false, dropdown: GENRES.filter(g => g !== "Tất cả"), type: "genre" },
    { id: "country", label: "QUỐC GIA",       path: "/country", highlight: false, dropdown: COUNTRIES.filter(c => c !== "Tất cả"), type: "country" },
    { id: "year",    label: "NĂM PHÁT HÀNH",  path: "/year",    highlight: false, dropdown: YEARS.filter(y => y !== "Tất cả"), type: "year" },
    { id: "nowshow", label: "PHIM CHIẾU RẠP", path: "/catalog", highlight: false },
  ];

  const [profileOpen, setProfileOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const doSearch = () => {
    if (searchVal.trim()) {
      router.push({
        pathname: "/search",
        query: { q: searchVal.trim() }
      } as any);
    }
  };

  const handleSearchKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") doSearch();
  };

  const isActive = (linkPath: string, linkId: string) => {
    if (linkId === "home") return pathname === "/";
    return pathname.startsWith(linkPath);
  };

  const handleMouseEnter = (id: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(id);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[200] bg-[#0d0d0d] border-b border-white/5 h-14 flex items-center px-5 shadow-lg">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 cursor-pointer mr-6 shrink-0 group"
        >
          <div className="leading-tight">
            <div className="text-[16px] font-black text-accent tracking-tighter group-hover:scale-105 transition-transform origin-left">
              PhimMoi<sup className="text-[9px] align-super">®</sup>
            </div>
            <div className="text-[10px] text-text-muted mt-0.5 font-bold uppercase tracking-widest opacity-80">Online & Chill</div>
          </div>
        </Link>

        {/* Nav links */}
        <div className="flex items-stretch flex-1 h-full ml-2">
          {navLinks.map((l) => {
            const active = isActive(l.path, l.id);
            const hasDropdown = !!l.dropdown;
            const isDropdownOpen = openDropdown === l.id;

            return (
              <div
                key={l.id}
                className="relative h-full"
                onMouseEnter={() => hasDropdown && handleMouseEnter(l.id)}
                onMouseLeave={() => hasDropdown && handleMouseLeave()}
              >
                <Link
                  href={l.path as any}
                  className={cn(
                    "px-4 cursor-pointer text-[13px] font-black tracking-wide whitespace-nowrap transition-all flex items-center h-full border-b-2",
                    active 
                      ? "text-accent border-accent" 
                      : "text-text-muted border-transparent hover:text-white"
                  )}
                >
                  {l.label}
                  {hasDropdown && (
                    <svg className={cn("ml-1.5 w-3 h-3 transition-transform duration-200", isDropdownOpen && "rotate-180")} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {hasDropdown && isDropdownOpen && (
                  <div className={cn(
                    "absolute top-full left-0 bg-bg-2 border border-border rounded-b-2xl shadow-2xl p-5 animate-fade-in z-[300] grid gap-x-8 gap-y-2",
                    l.id === "genres" ? "grid-cols-2 min-w-[360px]" : l.id === "year" ? "grid-cols-3 min-w-[300px]" : "grid-cols-2 min-w-[300px]"
                  )}>
                    {l.dropdown?.map((item) => (
                      <Link
                        key={item}
                        href={{
                          pathname: `${l.path}/[slug]` as any,
                          params: { slug: slugify(String(item)) }
                        }}
                        className="px-3 py-2 text-[13px] font-bold text-text-muted hover:text-white hover:bg-white/5 rounded-xl transition-all whitespace-nowrap flex items-center gap-2 group/item"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover/item:scale-100 transition-transform" />
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Search */}
          <div className="relative flex items-center group">
            <input
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              onFocus={() => setSearchFocus(true)}
              onBlur={() => setSearchFocus(false)}
              onKeyDown={handleSearchKey}
              placeholder="Tìm phim..."
              className={cn(
                "bg-white/5 border border-white/10 rounded-xl py-2 px-4 pr-10 text-text text-sm outline-none transition-all placeholder:text-text-muted/50",
                searchFocus ? "bg-bg-3 border-accent/50 w-[240px] shadow-lg shadow-accent/5" : "w-[180px] hover:bg-white/8"
              )}
            />
            <button
              onClick={doSearch}
              className="absolute right-3 bg-transparent border-none text-text-muted cursor-pointer flex items-center p-0 hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
          </div>

          {/* User Section */}
          {!user ? (
            <button
              onClick={() => setAuthMode("login")}
              className="bg-accent hover:bg-accent-hover text-white rounded-xl px-5 py-2 text-sm font-black cursor-pointer shrink-0 transition-all shadow-lg shadow-accent/20 active:scale-95"
            >
              Đăng nhập
            </button>
          ) : (
            <div className="relative">
              <button
                onClick={() => setProfileOpen((p) => !p)}
                className="bg-white/5 border border-white/10 text-text rounded-xl px-3 py-2 text-sm font-bold cursor-pointer flex items-center gap-3 hover:bg-white/10 transition-all active:scale-95"
              >
                <div className="w-[24px] h-[24px] bg-accent rounded-full flex items-center justify-center text-[12px] font-black text-white shadow-inner">
                  {user.name[0].toUpperCase()}
                </div>
                <span className="max-w-[100px] truncate">{user.name}</span>
              </button>
              {profileOpen && (
                <ProfileMenu
                  user={user}
                  onLogout={() => { setProfileOpen(false); setUser(null); }}
                  onClose={(action) => {
                    setProfileOpen(false);
                    if (action) router.push(action);
                  }}
                />
              )}
            </div>
          )}
        </div>
      </nav>

      {authMode && (
        <AuthModal
          mode={authMode}
          onClose={() => setAuthMode(null)}
          onSuccess={(u) => { setUser(u); setAuthMode(null); }}
        />
      )}
    </>
  );
}
