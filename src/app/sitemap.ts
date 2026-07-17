import type { MetadataRoute } from "next";

const baseUrl = "https://japanes-premium-food.example.com";

const routes = [
  "",
  "/about",
  "/menu",
  "/gallery",
  "/reviews",
  "/reservation",
  "/contact"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.78
  }));
}
