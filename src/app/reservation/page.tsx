import { Reveal } from "@/components/animations/Reveal";
import { ReservationForm } from "@/components/sections/ReservationForm";
import { PageHero } from "@/components/sections/PageHero";
import { contactDetails, imagery } from "@/lib/site-data";

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
            <div>
              <p className="mb-4 text-sm font-medium uppercase text-gold">
                Host Desk
              </p>
              <h2 className="font-serifjp text-4xl font-light leading-tight text-premiumWhite sm:text-5xl">
                Dinner is seated with intention, never rushed.
              </h2>
              <div className="mt-8 space-y-4 text-sm leading-7 text-warmGray">
                {contactDetails.hours.map((hour) => (
                  <p key={hour}>{hour}</p>
                ))}
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
