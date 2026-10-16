import { NextResponse } from "next/server";
import { adminCookieName, createSession, originAllowed, verifyPassword } from "@/lib/admin-auth";

export async function POST(request: Request) {
  if (!originAllowed(request)) return NextResponse.json({ error: "Request origin rejected." }, { status: 403 });
  const forwarded = request.headers.get("x-forwarded-for") || "unknown";
  const key = `asm-login:${forwarded}`;
  const now = Date.now();
  const bucket = (globalThis as typeof globalThis & { loginBuckets?: Map<string, { n: number; t: number }> }).loginBuckets ??= new Map();
  const entry = bucket.get(key);
  if (entry && entry.t > now && entry.n >= 8) return NextResponse.json({ error: "Too many attempts. Try again later." }, { status: 429 });
  try {
    const body = await request.json();
    if (typeof body.password !== "string" || body.password.length > 256 || !verifyPassword(body.password)) {
      const next = entry && entry.t > now ? { n: entry.n + 1, t: entry.t } : { n: 1, t: now + 15 * 60 * 1000 };
      bucket.set(key, next);
      return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
    }
    bucket.delete(key);
    const response = NextResponse.json({ ok: true });
    response.cookies.set(adminCookieName, createSession(), { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/", maxAge: 8 * 60 * 60 });
    return response;
  } catch { return NextResponse.json({ error: "Login is not configured correctly." }, { status: 503 }); }
}
