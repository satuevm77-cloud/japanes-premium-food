"use client";

import { Instagram, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { useI18n } from "@/lib/i18n";
import { contactDetails } from "@/lib/site-data";

const navKeys = ["home", "about", "menu", "gallery", "reviews", "reservation", "contact"] as const;
const navHrefs = ["/", "/about", "/menu", "/gallery", "/reviews", "/reservation", "/contact"];

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="relative border-t border-premiumWhite/10 bg-obsidian">
      <div className="seigaiha-layer" />
      <div className="section-shell relative z-10 grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serifjp text-3xl font-light uppercase text-premiumWhite">
            Japanes
          </p>
          <p className="mt-1 text-sm font-medium uppercase text-gold">
            Premium Food
          </p>
          <p className="mt-5 max-w-md text-sm leading-7 text-warmGray">
            {t.footer.description}
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-medium uppercase text-premiumWhite">
            {t.footer.explore}
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm text-warmGray">
            {navKeys.map((key, i) => (
              <Link
                key={navHrefs[i]}
                href={navHrefs[i]}
                className="transition hover:text-gold"
              >
                {t.nav[key]}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-medium uppercase text-premiumWhite">
            {t.footer.visit}
          </p>
          <div className="space-y-4 text-sm text-warmGray">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 shrink-0 text-gold" size={16} />
              <span>{contactDetails.address}</span>
            </p>
            <p className="flex gap-3">
              <Phone className="mt-0.5 shrink-0 text-gold" size={16} />
              <span>{contactDetails.phone}</span>
            </p>
            <p className="flex gap-3">
              <Instagram className="mt-0.5 shrink-0 text-gold" size={16} />
              <span>@japanespremiumfood</span>
            </p>
          </div>
        </div>
      </div>
      <div className="section-shell border-t border-premiumWhite/10 py-5 text-xs text-warmGray">
        <p>2026 Japanes Premium Food. Crafted for private dining and fine cuisine.</p>
      </div>
    </footer>
  );
}
