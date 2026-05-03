"use client";
import Icon from "./Icon";
import { cn } from "@/lib/utils";

interface Props {
  currentPage: number;
  totalPages: number;
  setPage: (p: number) => void;
}

export default function Pagination({ currentPage, totalPages, setPage }: Props) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2">
      <button
        onClick={() => setPage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={cn(
          "bg-bg-3 border border-border rounded-xl w-11 h-11 flex items-center justify-center transition-all",
          currentPage === 1 ? "text-text-muted cursor-not-allowed opacity-40" : "text-text cursor-pointer hover:border-border-strong active:scale-90"
        )}
      >
        <Icon name="chevronLeft" size={20} />
      </button>
      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={cn(
              "rounded-xl w-11 h-11 text-[14px] border cursor-pointer transition-all active:scale-90",
              currentPage === p 
                ? "bg-accent border-accent text-white font-black shadow-lg shadow-accent/20" 
                : "bg-bg-3 border-border text-text-muted font-bold hover:border-border-strong hover:text-text"
            )}
          >{p}</button>
        ))}
      </div>
      <button
        onClick={() => setPage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={cn(
          "bg-bg-3 border border-border rounded-xl w-11 h-11 flex items-center justify-center transition-all",
          currentPage === totalPages ? "text-text-muted cursor-not-allowed opacity-40" : "text-text cursor-pointer hover:border-border-strong active:scale-90"
        )}
      >
        <Icon name="chevronRight" size={20} />
      </button>
    </div>
  );
}
