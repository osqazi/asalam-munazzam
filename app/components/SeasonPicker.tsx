"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
export default function SeasonPicker({ year, years, allocationNotice }: { year: number; years: number[]; allocationNotice?: string }) {
  const router=useRouter(); const pathname=usePathname(); const params=useSearchParams();
  const selectedYear = Number(params.get("year")) || year;
  return <label className="flex items-center gap-2 rounded-lg bg-transparent px-3 py-1.5 text-sm font-semibold text-amber-950">Hajj season<select aria-label="Choose Hajj season" value={selectedYear} onChange={e=>{const selected=e.target.value;document.cookie=`asm_season=${selected}; path=/; max-age=15552000; SameSite=Lax${location.protocol==="https:"?"; Secure":""}`;const next=new URLSearchParams(params.toString());next.set("year",selected);router.push(`${pathname}?${next.toString()}`)}} className="rounded border border-amber-700/40 bg-transparent px-2 py-1 text-amber-950">{years.map(y=><option key={y} value={y}>{y}</option>)}</select></label>;
}

export function SeasonNotice({ message }: { message?: string }) {
  return message ? <div className="mx-auto my-3 max-w-3xl rounded bg-amber-50 px-4 py-2 text-center text-sm text-amber-900">{message}</div> : null;
}
