"use client";

import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/animations/Reveal";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { RemoteImage } from "@/components/ui/RemoteImage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useI18n } from "@/lib/i18n";
import { imagery } from "@/lib/site-data";

export function PhilosophySection() {
  const { t } = useI18n();

  return (
    <section className="section-band bg-obsidian">
      <div className="seigaiha-layer" />
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-premiumWhite/10">
            <RemoteImage
              src={imagery.sashimi}
              alt="Fresh sashimi arranged on a dark plate"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(8,8,8,0.55))]" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionHeader
            eyebrow={t.philosophy.eyebrow}
            title={t.philosophy.title}
            description={t.philosophy.description}
          />

          <div className="mt-9 grid gap-6 sm:grid-cols-3">
            {[
              ["01", t.philosophy.step1],
              ["02", t.philosophy.step2],
              ["03", t.philosophy.step3]
            ].map(([number, label]) => (
              <div key={number} className="border-t border-gold/40 pt-5">
                <p className="font-serifjp text-3xl text-gold">{number}</p>
                <p className="mt-2 text-sm text-warmGray">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <LuxuryButton href="/about" variant="outline" icon={<ArrowRight size={17} />}>
              {t.philosophy.discover}
            </LuxuryButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
