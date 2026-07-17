import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { HeroSection } from "@/components/sections/HeroSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ReservationCta } from "@/components/sections/ReservationCta";
import { ReviewsPreview } from "@/components/sections/ReviewsPreview";
import { SignatureMenuSection } from "@/components/sections/SignatureMenuSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <SignatureMenuSection />
      <GalleryPreview />
      <ReviewsPreview />
      <ReservationCta />
    </>
  );
}
