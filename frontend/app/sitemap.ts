import type { MetadataRoute } from "next";
import services from "@/src/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mkhannetcafe.com";

  const staticRoutes = ["", "/services"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changefreq: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changefreq: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
