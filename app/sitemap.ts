import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/solutions", priority: 0.9 },
    { path: "/solutions/agents", priority: 0.8 },
    { path: "/solutions/automatisation", priority: 0.8 },
    { path: "/solutions/data", priority: 0.8 },
    { path: "/diagnostic", priority: 0.9 },
    { path: "/contact", priority: 0.7 },
    { path: "/faq", priority: 0.6 },
    { path: "/legal", priority: 0.3 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
