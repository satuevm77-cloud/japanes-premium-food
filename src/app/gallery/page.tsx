"use client";

import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { PageHero } from "@/components/sections/PageHero";
import { useI18n } from "@/lib/i18n";
import { imagery } from "@/lib/site-data";

export default function GalleryPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t.gallery.eyebrow}
        title={t.gallery.title}
        description={t.gallery.description}
        image={imagery.hero}
      />

      <section className="section-band bg-obsidian">
        <div className="section-shell">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
