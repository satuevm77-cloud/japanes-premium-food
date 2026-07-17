"use client";

import { CalendarDays, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-premiumWhite/10 bg-obsidian/70 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between">
        <Link href="/" className="group inline-flex flex-col">
          <span className="font-serifjp text-xl font-light uppercase text-premiumWhite">
            Japanes
          </span>
          <span className="text-xs font-medium uppercase text-gold">
            Premium Food
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-sm text-warmGray transition hover:text-premiumWhite",
                pathname === item.href && "text-premiumWhite"
              )}
            >
              {item.label}
              {pathname === item.href ? (
                <span className="absolute -bottom-2 left-0 h-px w-full bg-gold" />
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <LuxuryButton href="/reservation" icon={<CalendarDays size={16} />}>
            Reserve
          </LuxuryButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-premiumWhite/15 text-premiumWhite transition hover:border-gold hover:text-gold lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-premiumWhite/10 bg-obsidian/95 px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile primary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-sm px-3 py-3 text-sm text-warmGray transition hover:bg-premiumWhite/5 hover:text-premiumWhite",
                  pathname === item.href && "bg-gold/10 text-premiumWhite"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
