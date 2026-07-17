"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/animations/Reveal";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { RemoteImage } from "@/components/ui/RemoteImage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useI18n } from "@/lib/i18n";
import { galleryImages } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function GalleryPreview() {
  const { t } = useI18n();

  return (
    <section className="section-band bg-obsidian">
      <div className="section-shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow={t.gallery.eyebrow}
            title={t.gallery.title}
            description={t.gallery.description}
          />
          <LuxuryButton href="/gallery" variant="outline" icon={<ArrowRight size={17} />}>
            {t.gallery.viewGallery}
          </LuxuryButton>
        </div>

        <div className="mt-12 grid auto-rows-[260px] grid-cols-1 gap-5 md:grid-cols-4">
          {galleryImages.slice(0, 5).map((item, index) => (
            <Reveal key={item.alt} delay={index * 0.06}>
              <motion.div
                whileHover={{ scale: 0.985 }}
                className={cn(
                  "group relative h-full overflow-hidden rounded-sm border border-premiumWhite/10",
                  index === 0 && "md:col-span-2 md:row-span-2",
                  index === 2 && "md:col-span-2"
                )}
              >
                <RemoteImage
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(8,8,8,0.68))] opacity-70 transition group-hover:opacity-40" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
