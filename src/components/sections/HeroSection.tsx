"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import dynamic from "next/dynamic";

import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { RemoteImage } from "@/components/ui/RemoteImage";
import { imagery } from "@/lib/site-data";

const LuxuryScene = dynamic(
  () => import("@/components/three/LuxuryScene").then((mod) => mod.LuxuryScene),
  { ssr: false }
);

export function HeroSection() {
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
            Luxury Japanese Cuisine
          </p>
          <h1 className="font-serifjp text-6xl font-light uppercase leading-none text-premiumWhite sm:text-7xl md:text-8xl lg:text-9xl">
            Japanes
            <span className="block text-gold">Premium Food</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-premiumWhite/80 sm:text-xl">
            Authentic Japanese cuisine crafted with tradition and perfection.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <LuxuryButton href="/reservation" icon={<CalendarDays size={17} />}>
              Reserve Table
            </LuxuryButton>
            <LuxuryButton href="/menu" variant="outline" icon={<ArrowRight size={17} />}>
              Explore Menu
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
            <span className="block text-premiumWhite">Omakase Counter</span>
            12 private seats nightly
          </p>
          <p>
            <span className="block text-premiumWhite">Seasonal Menu</span>
            Ingredients selected daily
          </p>
          <p>
            <span className="block text-premiumWhite">Private Dining</span>
            Business and celebration rooms
          </p>
        </motion.div>
      </div>
    </section>
  );
}
