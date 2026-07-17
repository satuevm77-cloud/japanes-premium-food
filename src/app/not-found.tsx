import { ArrowRight, CalendarDays } from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { imagery } from "@/lib/site-data";

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="Not Found"
        title="This private room is not on tonight's floor plan."
        description="Return to the restaurant experience or request a table with the host desk."
        image={imagery.bar}
      />
      <section className="section-band bg-obsidian">
        <div className="section-shell flex flex-col gap-4 sm:flex-row">
          <LuxuryButton href="/" variant="outline" icon={<ArrowRight size={17} />}>
            Return Home
          </LuxuryButton>
          <LuxuryButton href="/reservation" icon={<CalendarDays size={17} />}>
            Reserve Table
          </LuxuryButton>
        </div>
      </section>
    </>
  );
}
