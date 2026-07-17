import { Star } from "lucide-react";

import { Reveal } from "@/components/animations/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { reviews } from "@/lib/site-data";

export function ReviewsPreview() {
  return (
    <section className="section-band border-y border-premiumWhite/10 bg-[#0D0C0A]">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Guest Notes"
          title="Trusted by guests who notice the details."
          description="Private clients, travelers and business hosts return for service that feels personal, composed and exact."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, index) => (
            <Reveal key={review.name} delay={index * 0.06}>
              <article className="h-full rounded-lg border border-premiumWhite/10 bg-premiumWhite/[0.035] p-6">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: review.rating }).map((_, star) => (
                    <Star key={star} size={15} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-6 text-sm leading-7 text-premiumWhite/80">
                  &ldquo;{review.review}&rdquo;
                </p>
                <div className="mt-8 border-t border-premiumWhite/10 pt-5">
                  <p className="text-sm text-premiumWhite">{review.name}</p>
                  <p className="mt-1 text-xs uppercase text-warmGray">
                    {review.country}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
