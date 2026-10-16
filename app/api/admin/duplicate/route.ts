import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";
import { isAdmin, originAllowed } from "@/lib/admin-auth";
import { getSeason, getSeasonSettings, saveSeason } from "@/lib/seasons";
export const runtime = "nodejs";
export async function POST(request: Request) {
  if (process.env.VERCEL) return NextResponse.json({ error: "Create seasons in the local dashboard, then deploy manually. Vercel's filesystem is not persistent." }, { status: 409 });
  if (!await isAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!originAllowed(request)) return NextResponse.json({ error: "Request origin rejected." }, { status: 403 });
  try {
    const { sourceYear, year } = await request.json();
    const target = Number(year);
    if (!Number.isInteger(target) || target < 2020 || target > 2100) throw new Error("Enter a valid season year.");
    const settings = await getSeasonSettings();
    if (settings.availableSeasons.includes(target)) throw new Error("That season already exists.");
    const source = await getSeason(sourceYear);
    if (source.year !== Number(sourceYear)) throw new Error("Source season not found.");
    const newSeason = structuredClone(source);
    newSeason.year = target; newSeason.status = "draft"; newSeason.copiedFrom = source.year; newSeason.allocationsConfirmed = false;
    newSeason.seo = { title: `Hajj ${target} Partners and Packages | As Salam Munazzam`, description: `Explore Hajj ${target} season information from As Salam Munazzam and its partner companies.` };
    for (const p of newSeason.partners) {
      p.logo = p.logo.replace(`/seasons/${source.year}/`, `/seasons/${target}/`);
      p.packageBrochures = [];
    }
    newSeason.notifications = [];
    const targetRoot = path.join(process.cwd(), "public", "seasons", String(target));
    await fs.mkdir(path.join(targetRoot, "partners"), { recursive: true });
    await fs.mkdir(path.join(targetRoot, "packages"), { recursive: true });
    await fs.mkdir(path.join(targetRoot, "notifications"), { recursive: true });
    await fs.cp(path.join(process.cwd(), "public", "seasons", String(source.year), "partners"), path.join(targetRoot, "partners"), { recursive: true });
    await saveSeason(newSeason);
    return NextResponse.json({ ok: true, year: target });
  } catch (error) { return NextResponse.json({ error: error instanceof Error ? error.message : "Could not duplicate season." }, { status: 400 }); }
}
