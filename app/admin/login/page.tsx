"use client";
import { useState } from "react";
export default function AdminLogin() {
  const [password, setPassword] = useState(""); const [error, setError] = useState(""); const [busy, setBusy] = useState(false);
  async function submit(e: React.FormEvent) {
    e.preventDefault(); setBusy(true); setError("");
    const res = await fetch("/api/admin/login", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ password }) });
    const data = await res.json(); setBusy(false);
    if (!res.ok) { setError(data.error || "Sign in failed."); return; }
    location.href = "/admin";
  }
  return <main className="mx-auto my-16 max-w-md rounded-2xl bg-white p-8 shadow-xl"><h1 className="mb-2 text-3xl font-bold text-green-800">Admin sign in</h1><p className="mb-6 text-gray-600">Sign in to manage Hajj season data.</p><form onSubmit={submit} className="space-y-4"><label className="block font-medium">Password<input autoComplete="current-password" type="password" required value={password} onChange={e=>setPassword(e.target.value)} className="mt-2 w-full rounded-lg border p-3" /></label>{error&&<p role="alert" className="text-red-700">{error}</p>}<button disabled={busy} className="w-full rounded-lg bg-green-700 p-3 font-semibold text-white disabled:opacity-50">{busy?"Signing in…":"Sign in"}</button></form></main>;
}
