import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      // ── Design Tokens (nguồn sự thật duy nhất) ──────────────────────────────
      colors: {
        bg: {
          DEFAULT: "#0a0a0f",
          2: "#111118",
          3: "#1a1a24",
          4: "#22222e",
        },
        accent: {
          DEFAULT: "#c0392b",
          2: "#e74c3c",
          hover: "#a93226",
        },
        gold: "#d4a853",
        text: {
          DEFAULT: "#f0eee8",
          muted: "#9896a0",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.07)",
          strong: "rgba(255,255,255,0.13)",
        },
        // shadcn/ui semantic tokens
        background: "#0a0a0f",
        foreground: "#f0eee8",
        card: { DEFAULT: "#111118", foreground: "#f0eee8" },
        popover: { DEFAULT: "#1a1a24", foreground: "#f0eee8" },
        primary: { DEFAULT: "#c0392b", foreground: "#ffffff" },
        secondary: { DEFAULT: "#1a1a24", foreground: "#9896a0" },
        muted: { DEFAULT: "#1a1a24", foreground: "#9896a0" },
        destructive: { DEFAULT: "#c0392b", foreground: "#ffffff" },
        input: "#22222e",
        ring: "#c0392b",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
        display: ["var(--font-playfair)", "Playfair Display", "serif"],
      },
      borderRadius: {
        lg: "10px",
        md: "8px",
        sm: "6px",
        card: "10px",
      },
      boxShadow: {
        card: "0 4px 12px rgba(0,0,0,0.3)",
        "card-hover": "0 16px 40px rgba(0,0,0,0.6)",
        glow: "0 0 0 10px rgba(192,57,43,0.18)",
      },
      keyframes: {
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "slide-up": { from: { opacity: "0", transform: "translateY(10px)" }, to: { opacity: "1", transform: "translateY(0)" } },
      },
      animation: {
        "fade-in": "fade-in 0.2s ease",
        "slide-up": "slide-up 0.25s ease",
      },
    },
  },
  plugins: [],
};

export default config;
