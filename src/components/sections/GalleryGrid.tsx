"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { Reveal } from "@/components/animations/Reveal";
import { RemoteImage } from "@/components/ui/RemoteImage";
import { galleryImages } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selected = selectedIndex === null ? null : galleryImages[selectedIndex];

  const close = useCallback(() => setSelectedIndex(null), []);
  const previous = useCallback(() => {
    setSelectedIndex((current) =>
      current === null ? current : (current - 1 + galleryImages.length) % galleryImages.length
    );
  }, []);
  const next = useCallback(() => {
    setSelectedIndex((current) =>
      current === null ? current : (current + 1) % galleryImages.length
    );
  }, []);

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }

      if (event.key === "ArrowLeft") {
        previous();
      }

      if (event.key === "ArrowRight") {
        next();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [close, next, previous, selectedIndex]);

  return (
    <>
      <div className="grid auto-rows-[260px] grid-cols-1 gap-5 md:grid-cols-4">
        {galleryImages.map((item, index) => (
          <Reveal key={item.alt} delay={index * 0.05}>
            <motion.figure
              className={cn(
                "group relative h-full overflow-hidden rounded-sm border border-premiumWhite/10 bg-premiumWhite/[0.03]",
                item.size === "large" && "md:col-span-2 md:row-span-2",
                item.size === "wide" && "md:col-span-2",
                item.size === "tall" && "md:row-span-2"
              )}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                aria-label={`Open ${item.alt}`}
                onClick={() => setSelectedIndex(index)}
                className="relative block h-full w-full overflow-hidden text-left"
              >
                <RemoteImage
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(8,8,8,0.7))] opacity-65 transition group-hover:opacity-35" />
                <span className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-sm border border-premiumWhite/20 bg-obsidian/55 text-premiumWhite opacity-0 backdrop-blur transition group-hover:opacity-100">
                  <Expand size={17} />
                </span>
                <span className="absolute bottom-0 left-0 right-0 p-5 text-sm text-premiumWhite opacity-0 transition group-hover:opacity-100">
                  {item.alt}
                </span>
              </button>
            </motion.figure>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-obsidian/88 p-4 backdrop-blur-md sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              aria-label="Close gallery image"
              onClick={close}
              className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-sm border border-premiumWhite/15 bg-obsidian/70 text-premiumWhite transition hover:border-gold hover:text-gold"
            >
              <X size={18} />
            </button>

            <button
              type="button"
              aria-label="Previous image"
              onClick={previous}
              className="absolute left-5 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm border border-premiumWhite/15 bg-obsidian/70 text-premiumWhite transition hover:border-gold hover:text-gold sm:inline-flex"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              aria-label="Next image"
              onClick={next}
              className="absolute right-5 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm border border-premiumWhite/15 bg-obsidian/70 text-premiumWhite transition hover:border-gold hover:text-gold sm:inline-flex"
            >
              <ChevronRight size={20} />
            </button>

            <motion.figure
              className="relative h-[76svh] w-full max-w-6xl overflow-hidden rounded-lg border border-gold/30 bg-[#0D0C0A] shadow-gold"
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <RemoteImage
                src={selected.src}
                alt={selected.alt}
                fill
                priority
                className="object-cover"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 border-t border-premiumWhite/10 bg-obsidian/74 p-5 text-sm text-premiumWhite backdrop-blur">
                {selected.alt}
              </figcaption>
            </motion.figure>

            <div className="absolute bottom-5 flex gap-3 sm:hidden">
              <button
                type="button"
                aria-label="Previous image"
                onClick={previous}
                className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-premiumWhite/15 bg-obsidian/70 text-premiumWhite"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={next}
                className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-premiumWhite/15 bg-obsidian/70 text-premiumWhite"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
