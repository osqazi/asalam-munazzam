import { MetadataRoute } from "next";
import { partnersData } from "@/data/partners";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.assalammunazzam.com.pk";

  const staticRoutes = [
    "",
    "/packages",
    "/partners",
    "/notifications",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const partnerRoutes = partnersData.map((partner) => ({
    url: `${baseUrl}/partners/${partner.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...partnerRoutes];
}
