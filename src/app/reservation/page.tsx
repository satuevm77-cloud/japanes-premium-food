import { Reveal } from "@/components/animations/Reveal";
import { ReservationForm } from "@/components/sections/ReservationForm";
import { PageHero } from "@/components/sections/PageHero";
import { contactDetails, imagery } from "@/lib/site-data";
import { CalendarDays, Clock, Users } from "lucide-react";

export const metadata = {
  title: "Reservation",
  description: "Request a reservation at Japanes Premium Food."
};

export default function ReservationPage() {
  return (
    <>
      <PageHero
        eyebrow="Reservation"
        title="Request a private table or chef's counter seat."
        description="Share your preferred date, guest count and occasion. Our host team will confirm availability."
        image={imagery.hero}
      />

      <section className="section-band bg-obsidian">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="space-y-10">
              <div>
                <p className="mb-4 text-sm font-medium uppercase text-gold">
                  Host Desk
                </p>
                <h2 className="font-serifjp text-4xl font-light leading-tight text-premiumWhite sm:text-5xl">
                  Dinner is seated with intention, never rushed.
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
                  <p className="text-sm font-medium text-premiumWhite">Flexible Dates</p>
                  <p className="mt-1 text-xs text-warmGray">Choose any available evening</p>
                </div>
                <div className="rounded-lg border border-premiumWhite/10 bg-premiumWhite/[0.035] p-5">
                  <Clock className="mb-3 text-gold" size={20} />
                  <p className="text-sm font-medium text-premiumWhite">Evening Service</p>
                  <p className="mt-1 text-xs text-warmGray">17:30 — 23:00</p>
                </div>
                <div className="rounded-lg border border-premiumWhite/10 bg-premiumWhite/[0.035] p-5">
                  <Users className="mb-3 text-gold" size={20} />
                  <p className="text-sm font-medium text-premiumWhite">Up to 8 Guests</p>
                  <p className="mt-1 text-xs text-warmGray">Private rooms available</p>
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
