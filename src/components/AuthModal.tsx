"use client";
import { useState } from "react";

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

  const validate = () => {
    const e: Record<string, string> = {};
    if (tab === "register" && !form.name.trim()) e.name = "Vui lòng nhập tên";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Email không hợp lệ";
    if (form.password.length < 6) e.password = "Mật khẩu ít nhất 6 ký tự";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess({ name: form.name || form.email.split("@")[0], email: form.email });
    }, 1000);
  };

  const inputStyle = (hasError: boolean) => ({
    width: "100%", background: "#1a1a24",
    border: "1px solid " + (hasError ? "#e25561" : "rgba(255,255,255,0.07)"),
    borderRadius: 8, padding: "11px 14px",
    color: "#f0eee8", fontSize: 14, outline: "none",
    fontFamily: "inherit",
  } as React.CSSProperties);

  return (
    <div
      style={{
        position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)",
        zIndex: 2000, display: "flex", alignItems: "center",
        justifyContent: "center", padding: 20,
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#111118", borderRadius: 16, padding: 36,
          width: "100%", maxWidth: 420,
          border: "1px solid rgba(255,255,255,0.07)", position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 16, right: 16, background: "#1a1a24",
            border: "none", color: "#9896a0", borderRadius: "50%",
            width: 30, height: 30, display: "flex", alignItems: "center",
            justifyContent: "center", cursor: "pointer",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 800, color: "#c0392b" }}>PhimMoi</span>
        </div>

        {/* Tab toggle */}
        <div style={{ display: "flex", background: "#1a1a24", borderRadius: 8, padding: 4, marginBottom: 28 }}>
          {(["login", "register"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                flex: 1, background: tab === t ? "#c0392b" : "transparent",
                color: tab === t ? "#fff" : "#9896a0",
                border: "none", borderRadius: 6, padding: "9px 0",
                fontSize: 14, fontWeight: 700, cursor: "pointer", transition: "all 0.2s",
              }}
            >
              {t === "login" ? "Đăng Nhập" : "Đăng Ký"}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {tab === "register" && (
            <div>
              <input
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="Họ tên"
                style={inputStyle(!!errors.name)}
              />
              {errors.name && <p style={{ color: "#e25561", fontSize: 11, marginTop: 4 }}>{errors.name}</p>}
            </div>
          )}
          <div>
            <input
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              placeholder="Email"
              type="email"
              style={inputStyle(!!errors.email)}
            />
            {errors.email && <p style={{ color: "#e25561", fontSize: 11, marginTop: 4 }}>{errors.email}</p>}
          </div>
          <div>
            <input
              value={form.password}
              onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
              placeholder="Mật khẩu"
              type="password"
              style={inputStyle(!!errors.password)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />
            {errors.password && <p style={{ color: "#e25561", fontSize: 11, marginTop: 4 }}>{errors.password}</p>}
          </div>
          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              background: "#c0392b", color: "#fff", border: "none",
              borderRadius: 8, padding: "13px 0", fontSize: 15, fontWeight: 700,
              cursor: "pointer", opacity: loading ? 0.7 : 1,
              transition: "opacity 0.2s", marginTop: 4,
            }}
          >
            {loading ? "Đang xử lý..." : tab === "login" ? "Đăng Nhập" : "Tạo Tài Khoản"}
          </button>
        </div>

        <p style={{ textAlign: "center", marginTop: 16, fontSize: 13, color: "#9896a0" }}>
          {tab === "login" ? "Chưa có tài khoản? " : "Đã có tài khoản? "}
          <span
            onClick={() => setTab(tab === "login" ? "register" : "login")}
            style={{ color: "#c0392b", cursor: "pointer", fontWeight: 600 }}
          >
            {tab === "login" ? "Đăng ký ngay" : "Đăng nhập"}
          </span>
        </p>
      </div>
    </div>
  );
}
