"use client";

import { Globe } from "lucide-react";
import { useState } from "react";

import { useI18n, localeLabels, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const locales: Locale[] = ["en", "ja", "ru"];

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-9 items-center gap-1.5 rounded-sm border border-premiumWhite/10 px-2.5 text-xs font-medium text-warmGray transition hover:border-gold hover:text-gold"
        aria-label="Change language"
      >
        <Globe size={14} />
        <span>{localeLabels[locale]}</span>
      </button>

      {open ? (
        <div className="absolute right-0 top-full z-50 mt-1 min-w-[100px] rounded-sm border border-premiumWhite/10 bg-[#0D0C0A] py-1 shadow-emerald">
          {locales.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => {
                setLocale(l);
                setOpen(false);
              }}
              className={cn(
                "flex w-full items-center px-3 py-2 text-sm transition",
                l === locale
                  ? "bg-gold/10 text-gold"
                  : "text-warmGray hover:bg-premiumWhite/5 hover:text-premiumWhite"
              )}
            >
              {localeLabels[l]}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
