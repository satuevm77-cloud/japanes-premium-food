import { RemoteImage } from "@/components/ui/RemoteImage";
import { imagery } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image = imagery.hero,
  className
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[58svh] items-end overflow-hidden border-b border-premiumWhite/10 bg-obsidian pt-28",
        className
      )}
    >
      <RemoteImage
        src={image}
        alt=""
        fill
        priority
        className="object-cover opacity-42"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.22),rgba(8,8,8,0.92))]" />
      <div className="seigaiha-layer" />
      <div className="section-shell relative z-10 pb-16">
        <p className="mb-5 text-sm font-medium uppercase text-gold">{eyebrow}</p>
        <h1 className="max-w-4xl font-serifjp text-5xl font-light leading-tight text-premiumWhite sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-warmGray">
          {description}
        </p>
      </div>
    </section>
  );
}
