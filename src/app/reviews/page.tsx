"use client";

import { Star } from "lucide-react";

import { Reveal } from "@/components/animations/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { useI18n } from "@/lib/i18n";
import { reviews, imagery } from "@/lib/site-data";

export default function ReviewsPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t.reviews.eyebrow}
        title={t.reviews.title}
        description={t.reviews.description}
        image={imagery.bar}
      />

      <section className="section-band bg-obsidian">
        <div className="section-shell grid gap-6 md:grid-cols-2">
          {reviews.map((review, index) => (
            <Reveal key={review.name} delay={index * 0.07}>
              <article className="h-full rounded-lg border border-premiumWhite/10 bg-premiumWhite/[0.035] p-7">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: review.rating }).map((_, star) => (
                    <Star key={star} size={17} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-8 font-serifjp text-2xl font-light leading-snug text-premiumWhite">
                  &ldquo;{review.review}&rdquo;
                </p>
                <div className="mt-9 border-t border-premiumWhite/10 pt-5">
                  <p className="text-premiumWhite">{review.name}</p>
                  <p className="mt-1 text-sm text-warmGray">{review.country}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
