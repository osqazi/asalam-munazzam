import "server-only";
import fs from "node:fs/promises";
import path from "node:path";
import { cookies } from "next/headers";
import type { Partner } from "@/types/partners";

export type Season = { year: number; status: "draft" | "published"; seo: { title: string; description: string; pages?: Partial<Record<"home"|"partners"|"packages"|"notifications",{title:string;description:string}>> }; partners: Partner[]; notifications: unknown[]; copiedFrom?: number; allocationsConfirmed?: boolean; lastModified?: string };
const root = process.cwd();
const seasonPath = (year: number) => path.join(root, "data", "seasons", String(year), "season.json");

export async function getSeasonSettings(): Promise<{ activeSeason: number; availableSeasons: number[] }> {
  try { return JSON.parse(await fs.readFile(path.join(root, "data/settings.json"), "utf8")); }
  catch { return { activeSeason: 2027, availableSeasons: [2027, 2026] }; }
}

export async function getPublicSeasonYears():Promise<number[]>{
  const settings=await getSeasonSettings();const published:number[]=[];
  for(const year of settings.availableSeasons){try{const season=JSON.parse(await fs.readFile(seasonPath(year),"utf8")) as Season;if(season.status==="published")published.push(year);}catch{}}
  return published.sort((a,b)=>b-a);
}

export async function getSeason(requested?: string | number, includeDraft=false): Promise<Season> {
  const settings = await getSeasonSettings();
  let selected = Number(requested);
  if (!selected) {
    try { selected = Number((await cookies()).get("asm_season")?.value); } catch { /* no request cookie context */ }
  }
  const year = selected || settings.activeSeason;
  const fallback=async()=>{const years=await getPublicSeasonYears();const fallbackYear=years.includes(settings.activeSeason)?settings.activeSeason:years[0];if(!fallbackYear)throw new Error("No published Hajj season is available.");return getSeason(fallbackYear,true);};
  if (!settings.availableSeasons.includes(year)) return fallback();
  try {
    const season=JSON.parse(await fs.readFile(seasonPath(year), "utf8")) as Season;
    if(!includeDraft&&season.status!=="published")return fallback();
    return season;
  } catch { return fallback(); }
}

export async function saveSeason(season: Season): Promise<void> {
  if (process.env.VERCEL) throw new Error("The JSON dashboard cannot save on Vercel's ephemeral filesystem. Edit locally, then deploy manually.");
  validateSeason(season);
  const assetPaths=[...season.partners.flatMap(p=>[p.logo,...p.packageBrochures.map(b=>b.image)]),...season.notifications.map((n:any)=>typeof n.image==="string"?n.image:"")].filter(Boolean);
  for(const asset of assetPaths){const file=asset.slice(1).split("/");if(!asset.startsWith(`/seasons/${season.year}/`)||file.includes("..")||asset.includes("\\"))throw new Error(`Asset path must stay inside Hajj ${season.year}: ${asset}`);try{await fs.access(path.join(root,"public",...file));}catch{throw new Error(`Asset does not exist: ${asset}`)}}
  (season as Season & { lastModified?: string }).lastModified = new Date().toISOString();
  const file = seasonPath(season.year);
  await fs.mkdir(path.dirname(file), { recursive: true });
  const temp = `${file}.${Date.now()}.tmp`;
  await fs.writeFile(temp, JSON.stringify(season, null, 2) + "\n", "utf8");
  await fs.rename(temp, file);
  const settings = await getSeasonSettings();
  if (!settings.availableSeasons.includes(season.year)) settings.availableSeasons.unshift(season.year);
  await fs.writeFile(path.join(root, "data/settings.json"), JSON.stringify(settings, null, 2) + "\n", "utf8");
}

export function validateSeason(value: unknown): asserts value is Season {
  if (!value || typeof value !== "object") throw new Error("Season data must be an object.");
  const s = value as Season;
  if (!Number.isInteger(s.year) || s.year < 2020 || s.year > 2100) throw new Error("Enter a valid season year.");
  if (s.status !== "draft" && s.status !== "published") throw new Error("Season status must be draft or published.");
  if (!Array.isArray(s.partners) || !Array.isArray(s.notifications)) throw new Error("Season must include partner and notification arrays.");
  if (!s.seo || typeof s.seo.title !== "string" || typeof s.seo.description !== "string") throw new Error("SEO title and description are required.");
  const slugs = new Set<string>();
  const enrollments = new Set<number>();
  const packageIds = new Set<string>();
  for (const p of s.partners) {
    if (!p.slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.slug) || !p.name || !Number.isInteger(p.enrl) || p.enrl<=0 || !Number.isFinite(p.pilgrims) || p.pilgrims < 0 || !p.logo?.startsWith(`/seasons/${s.year}/`) || !Array.isArray(p.packageBrochures)) throw new Error("Each DHC needs a unique valid enrollment number, slug, name, non-negative pilgrim count, season logo, and package list.");
    if (slugs.has(p.slug)) throw new Error(`Duplicate partner slug: ${p.slug}`);
    if (enrollments.has(p.enrl)) throw new Error(`Duplicate enrollment number: ${p.enrl}`);
    slugs.add(p.slug);
    enrollments.add(p.enrl);
    for (const b of p.packageBrochures) {if (!b.id || !b.title || !b.image?.startsWith(`/seasons/${s.year}/`)) throw new Error(`Package assets for ${p.name} must use this season's asset folder.`);if(packageIds.has(b.id))throw new Error(`Duplicate package id: ${b.id}`);packageIds.add(b.id);}
  }
}
