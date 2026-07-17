"use client";

import { CalendarDays } from "lucide-react";

import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { useI18n } from "@/lib/i18n";

export function ReservationCta() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-obsidian py-20">
      <div className="seigaiha-layer" />
      <div className="section-shell relative z-10 flex flex-col items-start justify-between gap-8 border-y border-gold/30 py-12 md:flex-row md:items-center">
        <div>
          <p className="mb-3 text-sm font-medium uppercase text-gold">
            {t.reservation.eyebrow}
          </p>
          <h2 className="font-serifjp text-4xl font-light text-premiumWhite sm:text-5xl">
            {t.reservation.title}
          </h2>
        </div>
        <LuxuryButton href="/reservation" icon={<CalendarDays size={17} />}>
          {t.hero.reserve}
        </LuxuryButton>
      </div>
    </section>
  );
}
