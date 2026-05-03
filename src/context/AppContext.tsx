"use client";
import { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { Movie } from "@/types";

interface User {
  name: string;
  email: string;
}

interface AppContextValue {
  favorites: Set<number>;
  watchHistory: number[];
  user: User | null;
  toggleFavorite: (movie: Movie) => void;
  addToHistory: (movieId: number) => void;
  clearHistory: () => void;
  setUser: (user: User | null) => void;
  authMode: "login" | "register" | null;
  setAuthMode: (mode: "login" | "register" | null) => void;
}

export const AppContext = createContext<AppContextValue>({
  favorites: new Set(),
  watchHistory: [],
  user: null,
  toggleFavorite: () => {},
  addToHistory: () => {},
  clearHistory: () => {},
  setUser: () => {},
  authMode: null,
  setAuthMode: () => {},
});

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Set<number>>(() => {
    if (typeof window === "undefined") return new Set();
    try {
      return new Set(JSON.parse(localStorage.getItem("phimmoi_favs") || "[]"));
    } catch {
      return new Set();
    }
  });

  const [watchHistory, setWatchHistory] = useState<number[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      return JSON.parse(localStorage.getItem("phimmoi_history") || "[]");
    } catch {
      return [];
    }
  });

  const [user, setUser] = useState<User | null>(null);
  const [authMode, setAuthMode] = useState<"login" | "register" | null>(null);

  useEffect(() => {
    localStorage.setItem("phimmoi_favs", JSON.stringify([...favorites]));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("phimmoi_history", JSON.stringify(watchHistory));
  }, [watchHistory]);

  const toggleFavorite = useCallback((movie: Movie) => {
    if (!user) {
      setAuthMode("login");
      return;
    }
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(movie.id) ? next.delete(movie.id) : next.add(movie.id);
      return next;
    });
  }, [user]);

  const addToHistory = useCallback((movieId: number) => {
    setWatchHistory((h) => [movieId, ...h.filter((id) => id !== movieId)].slice(0, 20));
  }, []);

  const clearHistory = useCallback(() => setWatchHistory([]), []);

  return (
    <AppContext.Provider value={{ favorites, watchHistory, user, toggleFavorite, addToHistory, clearHistory, setUser, authMode, setAuthMode }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
