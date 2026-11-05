import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl.href, changeFrequency: "weekly", priority: 1 },
    { url: new URL("/careers", siteUrl).href, changeFrequency: "weekly", priority: 0.7 },
  ];
}
