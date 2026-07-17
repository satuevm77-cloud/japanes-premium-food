"use client";

import { CalendarDays, Clock, Users } from "lucide-react";

import { Reveal } from "@/components/animations/Reveal";
import { ReservationForm } from "@/components/sections/ReservationForm";
import { PageHero } from "@/components/sections/PageHero";
import { useI18n } from "@/lib/i18n";
import { contactDetails, imagery } from "@/lib/site-data";

export default function ReservationPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t.reservation.eyebrow}
        title={t.reservation.title}
        description={t.reservation.description}
        image={imagery.hero}
      />

      <section className="section-band bg-obsidian">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="space-y-10">
              <div>
                <p className="mb-4 text-sm font-medium uppercase text-gold">
                  {t.reservation.hostDesk}
                </p>
                <h2 className="font-serifjp text-4xl font-light leading-tight text-premiumWhite sm:text-5xl">
                  {t.reservation.subtitle}
                </h2>
              </div>

              <div className="space-y-4 text-sm leading-7 text-warmGray">
                {contactDetails.hours.map((hour) => (
                  <p key={hour}>{hour}</p>
                ))}
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <div className="rounded-lg border border-premiumWhite/10 bg-premiumWhite/[0.035] p-5">
                  <CalendarDays className="mb-3 text-gold" size={20} />
                  <p className="text-sm font-medium text-premiumWhite">{t.reservation.flexibleDates}</p>
                  <p className="mt-1 text-xs text-warmGray">{t.reservation.flexibleDatesDesc}</p>
                </div>
                <div className="rounded-lg border border-premiumWhite/10 bg-premiumWhite/[0.035] p-5">
                  <Clock className="mb-3 text-gold" size={20} />
                  <p className="text-sm font-medium text-premiumWhite">{t.reservation.eveningService}</p>
                  <p className="mt-1 text-xs text-warmGray">{t.reservation.eveningServiceTime}</p>
                </div>
                <div className="rounded-lg border border-premiumWhite/10 bg-premiumWhite/[0.035] p-5">
                  <Users className="mb-3 text-gold" size={20} />
                  <p className="text-sm font-medium text-premiumWhite">{t.reservation.upToGuests}</p>
                  <p className="mt-1 text-xs text-warmGray">{t.reservation.upToGuestsDesc}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ReservationForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
