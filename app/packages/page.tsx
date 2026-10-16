import type { Metadata } from "next";
import PackagesClient from "./PackagesClient";
import { getSeason, getPublicSeasonYears } from "@/lib/seasons";

type Props={searchParams:Promise<{year?:string}>};
export async function generateMetadata({searchParams}:Props):Promise<Metadata>{
  const q=await searchParams; const season=await getSeason(q.year); const packageCount=season.partners.reduce((n,p)=>n+p.packageBrochures.length,0); const title=packageCount?(season.seo.pages?.packages?.title||`Hajj ${season.year} Packages | As Salam Munazzam`):`Hajj ${season.year} Packages Coming Soon | As Salam Munazzam`;
  const description=packageCount?(season.seo.pages?.packages?.description||`Compare ${packageCount} Hajj ${season.year} package brochures from As Salam Munazzam partner companies.`):`Hajj ${season.year} partner allocations are available. Package brochures have not yet been published.`;
  const url=`https://www.assalammunazzam.com.pk/packages?year=${season.year}`;
  return {title,description,...(packageCount===0?{robots:{index:false,follow:true}}:{}),alternates:{canonical:url},openGraph:{title,description,url,siteName:"As Salam Munazzam (Private) Limited",images:[{url:"https://www.assalammunazzam.com.pk/og-hajj-packages.jpg",width:1200,height:630,alt:title}],locale:"en_PK",type:"website"},twitter:{card:"summary_large_image",title,description,images:["https://www.assalammunazzam.com.pk/og-hajj-packages.jpg"]}};
}

export default async function PackagesPage({searchParams}:Props) {
  const q=await searchParams; const [season,years]=await Promise.all([getSeason(q.year),getPublicSeasonYears()]);
  const allocationNotice=season.allocationsConfirmed===false?`Hajj ${season.year} allocations were copied from ${season.copiedFrom} and still need confirmation.`:undefined;
  return <PackagesClient partnersData={season.partners} year={season.year} years={years} allocationNotice={allocationNotice}/>;
}
