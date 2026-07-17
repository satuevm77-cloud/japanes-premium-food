import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/animations/Reveal";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { RemoteImage } from "@/components/ui/RemoteImage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { imagery } from "@/lib/site-data";

export function PhilosophySection() {
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
            eyebrow="Philosophy"
            title="A Tokyo dining ritual shaped by restraint, texture and exact timing."
            description="Japanes Premium Food blends modern luxury with traditional Japanese sensibility. Every service is built around seasonal ingredients, calm hospitality and the confidence of craft."
          />

          <div className="mt-9 grid gap-6 sm:grid-cols-3">
            {[
              ["01", "Seasonal sourcing"],
              ["02", "Chef-led omakase"],
              ["03", "Private hospitality"]
            ].map(([number, label]) => (
              <div key={number} className="border-t border-gold/40 pt-5">
                <p className="font-serifjp text-3xl text-gold">{number}</p>
                <p className="mt-2 text-sm text-warmGray">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <LuxuryButton href="/about" variant="outline" icon={<ArrowRight size={17} />}>
              Discover Story
            </LuxuryButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
