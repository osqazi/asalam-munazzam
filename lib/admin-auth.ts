import "server-only";
import { cookies } from "next/headers";
import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

const cookieName = "asm_admin";
const secret = () => process.env.ADMIN_SESSION_SECRET || "";
export function passwordHash(password: string, salt = randomBytes(16).toString("hex")) {
  return `${salt}:${scryptSync(password, salt, 64).toString("hex")}`;
}
export function verifyPassword(password: string) {
  const stored = process.env.ADMIN_PASSWORD_HASH || "";
  const [salt, expected] = stored.split(":");
  if (!salt || !expected) return false;
  const actual = scryptSync(password, salt, 64);
  const expectedBuffer = Buffer.from(expected, "hex");
  return actual.length === expectedBuffer.length && timingSafeEqual(actual, expectedBuffer);
}
function sign(value: string) { return createHmac("sha256", secret()).update(value).digest("hex"); }
export function createSession() {
  if (!secret()) throw new Error("ADMIN_SESSION_SECRET is not configured.");
  const payload = `${Date.now() + 8 * 60 * 60 * 1000}.${randomBytes(16).toString("hex")}`;
  return `${payload}.${sign(payload)}`;
}
export function validSession(value?: string) {
  if (!secret() || !value) return false;
  const parts = value.split(".");
  if (parts.length !== 3 || Number(parts[0]) < Date.now()) return false;
  const payload = `${parts[0]}.${parts[1]}`;
  const expected = Buffer.from(sign(payload), "hex");
  const actual = Buffer.from(parts[2], "hex");
  return expected.length === actual.length && timingSafeEqual(expected, actual);
}
export async function isAdmin() { return validSession((await cookies()).get(cookieName)?.value); }
export const adminCookieName = cookieName;
export function originAllowed(request: Request) {
  const origin = request.headers.get("origin");
  return !origin || new URL(origin).host === new URL(request.url).host;
}
