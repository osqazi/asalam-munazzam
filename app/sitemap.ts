import type { MetadataRoute } from "next";
import { getPublicSeasonYears, getSeason } from "@/lib/seasons";

const baseUrl = "https://www.assalammunazzam.com.pk";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/about` },
    { url: `${baseUrl}/contact` },
  ];
  const years = await getPublicSeasonYears();
  const seasons = await Promise.all(years.map((year) => getSeason(year)));

  const seasonRoutes: MetadataRoute.Sitemap = seasons.flatMap((season) => {
    const lastModified = season.lastModified
      ? new Date(season.lastModified)
      : undefined;
    const entries: MetadataRoute.Sitemap = [
      { url: `${baseUrl}/?year=${season.year}`, lastModified },
      { url: `${baseUrl}/partners?year=${season.year}`, lastModified },
      ...season.partners.map((partner) => ({
        url: `${baseUrl}/partners/${partner.slug}?year=${season.year}`,
        lastModified,
      })),
    ];

    const packageCount = season.partners.reduce(
      (total, partner) => total + partner.packageBrochures.length,
      0,
    );
    if (packageCount > 0) {
      entries.push({
        url: `${baseUrl}/packages?year=${season.year}`,
        lastModified,
      });
    }
    if (season.notifications.length > 0) {
      entries.push({
        url: `${baseUrl}/notifications?year=${season.year}`,
        lastModified,
      });
    }
    return entries;
  });

  return [...staticRoutes, ...seasonRoutes];
}
