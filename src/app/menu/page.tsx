"use client";

import { Reveal } from "@/components/animations/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { RemoteImage } from "@/components/ui/RemoteImage";
import { useI18n } from "@/lib/i18n";
import { menuCategories, imagery } from "@/lib/site-data";

export default function MenuPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t.menu.eyebrow}
        title={t.menu.title}
        description={t.menu.description}
        image={imagery.sushi}
      />

      <section className="section-band bg-obsidian">
        <div className="section-shell space-y-16">
          {menuCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              <Reveal>
                <div className="mb-8 flex flex-col justify-between gap-4 border-b border-gold/30 pb-5 md:flex-row md:items-end">
                  <div>
                    <p className="mb-2 text-sm font-medium uppercase text-gold">
                      {category.title}
                    </p>
                    <h2 className="font-serifjp text-4xl font-light text-premiumWhite">
                      {category.description}
                    </h2>
                  </div>
                  <p className="text-sm text-warmGray">
                    Chapter {String(categoryIndex + 1).padStart(2, "0")}
                  </p>
                </div>
              </Reveal>

              <div className="grid gap-6 lg:grid-cols-3">
                {category.items.map((item, index) => (
                  <Reveal key={item.name} delay={index * 0.06}>
                    <article className="group h-full overflow-hidden rounded-lg border border-premiumWhite/10 bg-premiumWhite/[0.035] transition duration-300 hover:-translate-y-2 hover:border-gold/60">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <RemoteImage
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover transition duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 border border-transparent transition group-hover:border-gold" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="font-serifjp text-2xl font-light text-premiumWhite">
                            {item.name}
                          </h3>
                          <p className="text-gold">{item.price}</p>
                        </div>
                        <p className="mt-4 text-sm leading-7 text-warmGray">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
