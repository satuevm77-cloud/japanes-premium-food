import type { Metadata } from "next";
import type { ReactNode } from "react";

import { CursorGlow } from "@/components/animations/CursorGlow";
import { LoadingScreen } from "@/components/animations/LoadingScreen";
import { SmoothScrollProvider } from "@/components/animations/SmoothScrollProvider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { imagery } from "@/lib/site-data";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://japanes-premium-food.example.com"),
  title: {
    default: "Japanes Premium Food | Luxury Japanese Restaurant",
    template: "%s | Japanes Premium Food"
  },
  description: "Experience authentic Japanese cuisine in a premium atmosphere.",
  keywords: [
    "luxury Japanese restaurant",
    "premium sushi",
    "omakase",
    "Japanese fine dining",
    "private dining"
  ],
  authors: [{ name: "Japanes Premium Food" }],
  creator: "Japanes Premium Food",
  publisher: "Japanes Premium Food",
  category: "restaurant",
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/favicon.svg"
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Japanes Premium Food | Luxury Japanese Restaurant",
    description: "Experience authentic Japanese cuisine in a premium atmosphere.",
    type: "website",
    url: "/",
    locale: "en_US",
    siteName: "Japanes Premium Food",
    images: [
      {
        url: imagery.hero,
        width: 2200,
        height: 1400,
        alt: "Japanes Premium Food sushi counter"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Japanes Premium Food | Luxury Japanese Restaurant",
    description: "Experience authentic Japanese cuisine in a premium atmosphere.",
    images: [imagery.hero]
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Japanes Premium Food",
  servesCuisine: "Japanese",
  priceRange: "$$$$",
  image: imagery.hero,
  url: "https://japanes-premium-food.example.com",
  menu: "https://japanes-premium-food.example.com/menu",
  acceptsReservations: true,
  telephone: "+81 3 0000 2048",
  address: {
    "@type": "PostalAddress",
    streetAddress: "8 Ginza Lane",
    addressLocality: "Tokyo",
    addressCountry: "JP"
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday"],
      opens: "18:00",
      closes: "23:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "17:30",
      closes: "00:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "17:30",
      closes: "22:00"
    }
  ]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <SmoothScrollProvider />
        <LoadingScreen />
        <CursorGlow />
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
