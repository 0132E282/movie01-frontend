"use client";
import { useState, useEffect } from "react";
import { X, Mail, Lock, User, ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  mode: "login" | "register";
  onClose: () => void;
  onSuccess: (user: { name: string; email: string }) => void;
}

export default function AuthModal({ mode, onClose, onSuccess }: Props) {
  const [tab, setTab] = useState<"login" | "register">(mode || "login");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (tab === "register" && !form.name.trim()) e.name = "Vui lòng nhập tên";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Email không hợp lệ";
    if (form.password.length < 6) e.password = "Mật khẩu ít nhất 6 ký tự";
    return e;
  };

  const handleSubmit = async () => {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    onSuccess({ name: form.name || form.email.split("@")[0], email: form.email });
  };

  if (!isMounted) return null;

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[420px] bg-bg-2 border border-white/10 rounded-2xl p-8 lg:p-10 shadow-2xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-text-muted hover:text-white hover:bg-white/10 transition-all"
        >
          <X size={20} />
        </button>

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="font-display text-3xl font-black text-accent tracking-tighter">
            PhimMoi<sup className="text-[12px] align-super">®</sup>
          </div>
          <p className="text-[11px] text-text-muted uppercase tracking-[0.2em] mt-2 font-bold opacity-50">
            {tab === "login" ? "Chào mừng trở lại" : "Tạo tài khoản mới"}
          </p>
        </div>

        {/* Tabs Switcher */}
        <div className="relative flex bg-bg-3 p-1.5 rounded-xl mb-8">
          {/* Sliding background */}
          <div 
            className={cn(
              "absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-accent rounded-lg transition-all duration-300 ease-out",
              tab === "login" ? "left-1.5" : "left-[calc(50%+4.5px)]"
            )}
          />
          <button
            onClick={() => setTab("login")}
            className={cn(
              "relative z-10 flex-1 py-2.5 text-sm font-black transition-colors duration-200",
              tab === "login" ? "text-white" : "text-text-muted hover:text-white"
            )}
          >
            ĐĂNG NHẬP
          </button>
          <button
            onClick={() => setTab("register")}
            className={cn(
              "relative z-10 flex-1 py-2.5 text-sm font-black transition-colors duration-200",
              tab === "register" ? "text-white" : "text-text-muted hover:text-white"
            )}
          >
            ĐĂNG KÝ
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {tab === "register" && (
            <div className="space-y-1.5">
              <div className="relative group">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-accent transition-colors" />
                <input
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Họ và tên"
                  className={cn(
                    "w-full bg-bg-3 border border-white/5 rounded-xl py-3.5 pl-12 pr-4 text-text text-sm outline-none transition-all placeholder:text-text-muted/30 focus:border-accent/50 focus:bg-bg-4",
                    errors.name && "border-red-500/50 bg-red-500/5"
                  )}
                />
              </div>
              {errors.name && <p className="text-[11px] text-red-500 font-bold ml-1">{errors.name}</p>}
            </div>
          )}

          <div className="space-y-1.5">
            <div className="relative group">
              <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-accent transition-colors" />
              <input
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                placeholder="Email"
                type="email"
                className={cn(
                  "w-full bg-bg-3 border border-white/5 rounded-xl py-3.5 pl-12 pr-4 text-text text-sm outline-none transition-all placeholder:text-text-muted/30 focus:border-accent/50 focus:bg-bg-4",
                  errors.email && "border-red-500/50 bg-red-500/5"
                )}
              />
            </div>
            {errors.email && <p className="text-[11px] text-red-500 font-bold ml-1">{errors.email}</p>}
          </div>

          <div className="space-y-1.5">
            <div className="relative group">
              <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-accent transition-colors" />
              <input
                value={form.password}
                onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
                placeholder="Mật khẩu"
                type="password"
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                className={cn(
                  "w-full bg-bg-3 border border-white/5 rounded-xl py-3.5 pl-12 pr-4 text-text text-sm outline-none transition-all placeholder:text-text-muted/30 focus:border-accent/50 focus:bg-bg-4",
                  errors.password && "border-red-500/50 bg-red-500/5"
                )}
              />
            </div>
            {errors.password && <p className="text-[11px] text-red-500 font-bold ml-1">{errors.password}</p>}
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-accent hover:bg-accent-hover text-white rounded-xl py-4 font-black text-sm tracking-widest uppercase transition-all shadow-lg shadow-accent/20 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed mt-4 flex items-center justify-center gap-2 group"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                {tab === "login" ? "Đăng Nhập" : "Tham Gia Ngay"}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </div>

        {/* Footer Link */}
        <p className="text-center mt-8 text-[13px] text-text-muted font-bold">
          {tab === "login" ? "Chưa có tài khoản?" : "Đã có tài khoản?"}{" "}
          <button
            onClick={() => setTab(tab === "login" ? "register" : "login")}
            className="text-accent hover:text-accent-hover underline underline-offset-4 cursor-pointer bg-transparent border-none p-0 font-black ml-1 transition-colors"
          >
            {tab === "login" ? "Đăng ký ngay" : "Đăng nhập"}
          </button>
        </p>
      </div>
    </div>
  );
}
