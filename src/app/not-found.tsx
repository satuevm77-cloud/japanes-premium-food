"use client";

import { ArrowRight, CalendarDays } from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { useI18n } from "@/lib/i18n";
import { imagery } from "@/lib/site-data";

export default function NotFound() {
  const { t } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t.notFound.eyebrow}
        title={t.notFound.title}
        description={t.notFound.description}
        image={imagery.bar}
      />
      <section className="section-band bg-obsidian">
        <div className="section-shell flex flex-col gap-4 sm:flex-row">
          <LuxuryButton href="/" variant="outline" icon={<ArrowRight size={17} />}>
            {t.notFound.returnHome}
          </LuxuryButton>
          <LuxuryButton href="/reservation" icon={<CalendarDays size={17} />}>
            {t.notFound.reserve}
          </LuxuryButton>
        </div>
      </section>
    </>
  );
}
