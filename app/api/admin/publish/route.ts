import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";
import { isAdmin, originAllowed } from "@/lib/admin-auth";
import { getSeason, getSeasonSettings } from "@/lib/seasons";
export const runtime = "nodejs";
export async function POST(request: Request) {
  if (process.env.VERCEL) return NextResponse.json({ error: "Change the active season locally, then deploy manually. Vercel's filesystem is not persistent." }, { status: 409 });
  if (!await isAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!originAllowed(request)) return NextResponse.json({ error: "Request origin rejected." }, { status: 403 });
  try {
    const { year } = await request.json();
    const season = await getSeason(year,true);
    if (season.year !== Number(year) || season.status !== "published") return NextResponse.json({ error: "Save the season as published before activating it." }, { status: 400 });
    if (season.allocationsConfirmed !== true) return NextResponse.json({ error: "Confirm the season's pilgrim allocations before activation." }, { status: 400 });
    const settings = await getSeasonSettings(); settings.activeSeason = season.year;
    await fs.writeFile(path.join(process.cwd(), "data/settings.json"), JSON.stringify(settings, null, 2) + "\n");
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: "Could not publish season." }, { status: 400 }); }
}
