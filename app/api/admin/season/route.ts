import { NextResponse } from "next/server";
import { getSeason, getSeasonSettings, saveSeason } from "@/lib/seasons";
import { isAdmin, originAllowed } from "@/lib/admin-auth";
export const runtime = "nodejs";
export async function GET(request: Request) {
  if (!await isAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const year = new URL(request.url).searchParams.get("year");
  const [season, settings] = await Promise.all([getSeason(year || undefined,true), getSeasonSettings()]);
  return NextResponse.json({ season, settings });
}
export async function PUT(request: Request) {
  if (!await isAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!originAllowed(request)) return NextResponse.json({ error: "Request origin rejected." }, { status: 403 });
  try {
    const body=await request.text();if(body.length>2_000_000)return NextResponse.json({error:"Season file is too large."},{status:413});
    const season = JSON.parse(body);
    await saveSeason(season);
    return NextResponse.json({ ok: true });
  } catch (error) { return NextResponse.json({ error: error instanceof Error ? error.message : "Could not save season." }, { status: 400 }); }
}
