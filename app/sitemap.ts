import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/blog", "/privacidade", "/termos", "/lgpd"];
  const lastModified = new Date();
  return routes.map((r) => ({
    url: `${siteConfig.url}${r}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: r === "" ? 1 : 0.7,
  }));
}
