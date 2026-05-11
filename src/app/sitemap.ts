import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tollesding.de",
      lastModified: new Date("2026-05-11"),
      changeFrequency: "weekly",
      priority: 1
    }
  ];
}
