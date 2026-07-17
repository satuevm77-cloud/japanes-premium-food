import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type LuxuryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: "gold" | "outline" | "ghost";
};

export function LuxuryButton({
  href,
  children,
  icon,
  variant = "gold",
  className,
  type = "button",
  ...props
}: LuxuryButtonProps) {
  const classes = cn(
    "group inline-flex min-h-12 items-center justify-center gap-3 rounded-sm px-6 py-3 text-sm font-medium uppercase transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4",
    "disabled:cursor-not-allowed disabled:opacity-55",
    variant === "gold" &&
      "border border-gold bg-gold text-obsidian shadow-gold hover:bg-premiumWhite hover:border-premiumWhite",
    variant === "outline" &&
      "border border-gold/60 bg-obsidian/35 text-premiumWhite backdrop-blur hover:border-gold hover:bg-gold/10",
    variant === "ghost" &&
      "border border-premiumWhite/10 bg-premiumWhite/[0.03] text-premiumWhite hover:border-gold/60 hover:bg-gold/10",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        <span>{children}</span>
        {icon}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      <span>{children}</span>
      {icon}
    </button>
  );
}
