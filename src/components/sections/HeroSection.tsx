"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import dynamic from "next/dynamic";

import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { RemoteImage } from "@/components/ui/RemoteImage";
import { useI18n } from "@/lib/i18n";
import { imagery } from "@/lib/site-data";

const LuxuryScene = dynamic(
  () => import("@/components/three/LuxuryScene").then((mod) => mod.LuxuryScene),
  { ssr: false }
);

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative flex min-h-[94svh] items-center overflow-hidden border-b border-premiumWhite/10 bg-obsidian pt-20">
      <RemoteImage
        src={imagery.hero}
        alt="Sushi chefs preparing food inside a premium Japanese restaurant"
        fill
        priority
        className="object-cover opacity-58"
      />
      <div className="absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgba(8,8,8,0.92)_0%,rgba(8,8,8,0.62)_48%,rgba(8,8,8,0.22)_100%)]" />
      <div className="absolute inset-0 z-[3] bg-[radial-gradient(circle_at_70%_42%,rgba(201,162,39,0.2),transparent_24%),radial-gradient(circle_at_20%_70%,rgba(6,78,59,0.28),transparent_26%)]" />
      <div className="seigaiha-layer z-[4]" />
      <LuxuryScene />

      <div className="section-shell relative z-20 py-20">
        <motion.div
          initial={{ opacity: 0, y: 36, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="max-w-4xl"
        >
          <p className="mb-5 text-sm font-medium uppercase text-gold">
            {t.hero.eyebrow}
          </p>
          <h1 className="font-serifjp text-6xl font-light uppercase leading-none text-premiumWhite sm:text-7xl md:text-8xl lg:text-9xl">
            {t.hero.title1}
            <span className="block text-gold">{t.hero.title2}</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-premiumWhite/80 sm:text-xl">
            {t.hero.description}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <LuxuryButton href="/reservation" icon={<CalendarDays size={17} />}>
              {t.hero.reserve}
            </LuxuryButton>
            <LuxuryButton href="/menu" variant="outline" icon={<ArrowRight size={17} />}>
              {t.hero.explore}
            </LuxuryButton>
          </div>
        </motion.div>

        <motion.div
          className="mt-20 grid max-w-3xl gap-5 border-l border-gold/50 pl-5 text-sm text-warmGray sm:grid-cols-3"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
        >
          <p>
            <span className="block text-premiumWhite">{t.hero.omakase}</span>
            {t.hero.omakaseDesc}
          </p>
          <p>
            <span className="block text-premiumWhite">{t.hero.seasonal}</span>
            {t.hero.seasonalDesc}
          </p>
          <p>
            <span className="block text-premiumWhite">{t.hero.private}</span>
            {t.hero.privateDesc}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
