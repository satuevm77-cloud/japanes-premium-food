"use client";

import { Reveal } from "@/components/animations/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { RemoteImage } from "@/components/ui/RemoteImage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useI18n } from "@/lib/i18n";
import { imagery } from "@/lib/site-data";

export default function AboutPage() {
  const { t } = useI18n();

  const editorial = [
    { title: t.about.history, body: t.about.historyBody },
    { title: t.about.chef, body: t.about.chefBody },
    { title: t.about.ingredients, body: t.about.ingredientsBody },
    { title: t.about.traditions, body: t.about.traditionsBody }
  ];

  return (
    <>
      <PageHero
        eyebrow={t.about.eyebrow}
        title={t.about.title}
        description={t.about.description}
        image={imagery.sashimi}
      />

      <section className="section-band bg-obsidian">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <SectionHeader
              eyebrow={t.about.philosophyTitle}
              title={t.about.philosophySubtitle}
              description={t.about.philosophyDesc}
            />
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {editorial.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="h-full rounded-lg border border-premiumWhite/10 bg-premiumWhite/[0.035] p-6">
                  <h2 className="font-serifjp text-2xl font-light text-premiumWhite">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-warmGray">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band border-y border-premiumWhite/10 bg-[#0D0C0A]">
        <div className="section-shell grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[5/4] overflow-hidden rounded-sm border border-premiumWhite/10">
              <RemoteImage
                src={imagery.hero}
                alt="Chef counter during Japanese dinner service"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="font-serifjp text-4xl font-light leading-tight text-premiumWhite sm:text-5xl">
              {t.about.counterTitle}
            </p>
            <p className="mt-6 text-base leading-8 text-warmGray">
              {t.about.counterBody}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
