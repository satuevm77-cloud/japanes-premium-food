import { Reveal } from "@/components/animations/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { RemoteImage } from "@/components/ui/RemoteImage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { imagery } from "@/lib/site-data";

export const metadata = {
  title: "About Restaurant",
  description: "The philosophy, chef and traditions behind Japanes Premium Food."
};

const editorial = [
  {
    title: "History",
    body: "Founded as an intimate counter for guests who value stillness as much as flavor, Japanes Premium Food grew from a private chef's table into a full luxury restaurant."
  },
  {
    title: "Chef",
    body: "The kitchen is led with omakase discipline: fewer gestures, better ingredients and a deep respect for temperature, timing and texture."
  },
  {
    title: "Ingredients",
    body: "Seafood, rice, tea and seasonal produce are selected daily, with fermentation and charcoal used to create depth without heaviness."
  },
  {
    title: "Traditions",
    body: "The room borrows from Japanese tea ceremony, kaiseki pacing and Tokyo nightlife, creating an evening that feels quiet, private and exact."
  }
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Traditional Japanese craft, interpreted through modern luxury."
        description="A restaurant built around precision, privacy and the confidence of seasonal cuisine."
        image={imagery.sashimi}
      />

      <section className="section-band bg-obsidian">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Restaurant Philosophy"
              title="Luxury is felt in the timing between things."
              description="We design each dinner as a sequence of calm moments. Service is attentive without noise, the dining room is dramatic without excess, and the menu moves with the seasons."
            />
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {editorial.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="h-full rounded-lg border border-premiumWhite/10 bg-premiumWhite/[0.035] p-6">
                  <h2 className="font-serifjp text-2xl font-light text-premiumWhite">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-warmGray">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band border-y border-premiumWhite/10 bg-[#0D0C0A]">
        <div className="section-shell grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[5/4] overflow-hidden rounded-sm border border-premiumWhite/10">
              <RemoteImage
                src={imagery.hero}
                alt="Chef counter during Japanese dinner service"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="font-serifjp text-4xl font-light leading-tight text-premiumWhite sm:text-5xl">
              The chef&apos;s counter is intentionally small, so every guest remains
              close to the craft.
            </p>
            <p className="mt-6 text-base leading-8 text-warmGray">
              Knife work, rice temperature, nori texture and sake service happen
              in view. The performance is never theatrical for its own sake; it
              is the natural result of serious cuisine.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
