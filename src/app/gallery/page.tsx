import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { PageHero } from "@/components/sections/PageHero";
import { imagery } from "@/lib/site-data";

export const metadata = {
  title: "Gallery",
  description: "A cinematic gallery of Japanes Premium Food."
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Cinematic details from counter, cellar and table."
        description="A visual record of the restaurant's ingredients, craft and late-night atmosphere."
        image={imagery.hero}
      />

      <section className="section-band bg-obsidian">
        <div className="section-shell">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
