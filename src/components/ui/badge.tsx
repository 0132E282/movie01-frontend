import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded px-2 py-0.5 text-xs font-bold transition-colors",
  {
    variants: {
      variant: {
        default: "bg-accent text-white",
        secondary: "bg-bg-3 text-text-muted border border-border",
        gold: "bg-black/80 text-gold",
        quality: "bg-accent text-white",
        tag: "bg-white/10 text-text-muted",
        active: "bg-accent/20 text-accent border border-accent/40",
        outline: "border border-border text-text-muted bg-transparent",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
