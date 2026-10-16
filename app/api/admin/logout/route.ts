import { NextResponse } from "next/server";
import { adminCookieName, originAllowed } from "@/lib/admin-auth";
export async function POST(request: Request) {
  if (!originAllowed(request)) return NextResponse.json({ error: "Request origin rejected." }, { status: 403 });
  const response = NextResponse.json({ ok: true });
  response.cookies.set(adminCookieName, "", { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/", maxAge: 0 });
  return response;
}
