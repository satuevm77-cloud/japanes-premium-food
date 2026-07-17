"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/animations/Reveal";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { RemoteImage } from "@/components/ui/RemoteImage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { menuCategories } from "@/lib/site-data";

export function SignatureMenuSection() {
  const items = menuCategories.flatMap((category) => category.items).slice(0, 3);

  return (
    <section className="section-band border-y border-premiumWhite/10 bg-[#0D0C0A]">
      <div className="section-shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Menu"
            title="Seasonal signatures for a refined evening."
            description="A concise selection from the tasting menu, composed around ocean, fire and delicate fermentation."
          />
          <LuxuryButton href="/menu" variant="ghost" icon={<ArrowRight size={17} />}>
            Full Menu
          </LuxuryButton>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group overflow-hidden rounded-lg border border-premiumWhite/10 bg-premiumWhite/[0.035]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <RemoteImage
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 border border-transparent transition group-hover:border-gold/60" />
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
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
