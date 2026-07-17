"use client";

import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";

import { Reveal } from "@/components/animations/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { useI18n } from "@/lib/i18n";
import { contactDetails, imagery } from "@/lib/site-data";

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        description={t.contact.description}
        image={imagery.exterior}
      />

      <section className="section-band bg-obsidian">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="space-y-6">
              <ContactRow icon={<MapPin size={18} />} title={t.contact.address} text={contactDetails.address} />
              <ContactRow icon={<Phone size={18} />} title={t.contact.phone} text={contactDetails.phone} />
              <ContactRow icon={<Mail size={18} />} title={t.contact.email} text={contactDetails.email} />
              <ContactRow
                icon={<Instagram size={18} />}
                title={t.contact.social}
                text={contactDetails.socials.join(" / ")}
              />
              <div className="pt-4">
                <LuxuryButton href="/reservation" icon={<Clock size={17} />}>
                  {t.contact.reserve}
                </LuxuryButton>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative min-h-[460px] overflow-hidden rounded-lg border border-premiumWhite/10 bg-[#0D0C0A]">
              <div className="seigaiha-layer" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(201,162,39,0.18),transparent_24%),linear-gradient(135deg,rgba(6,78,59,0.28),transparent_44%)]" />
              <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/50" />
              <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-gold" />
              <div className="absolute bottom-6 left-6 right-6 border-t border-premiumWhite/10 pt-5">
                <p className="font-serifjp text-2xl font-light text-premiumWhite">
                  Ginza Lane
                </p>
                <p className="mt-2 text-sm text-warmGray">
                  {t.contact.mapPlaceholder}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  title,
  text
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 border-b border-premiumWhite/10 pb-6">
      <div className="mt-1 text-gold">{icon}</div>
      <div>
        <p className="text-sm font-medium uppercase text-premiumWhite">{title}</p>
        <p className="mt-2 text-sm leading-7 text-warmGray">{text}</p>
      </div>
    </div>
  );
}
