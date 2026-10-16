import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSeason, getPublicSeasonYears } from "@/lib/seasons";
import PartnerDetailClient from "./PartnerDetailClient";

type Props={params:Promise<{slug:string}>;searchParams:Promise<{year?:string}>};
export async function generateMetadata({params,searchParams}:Props):Promise<Metadata>{
  const [{slug},q]=await Promise.all([params,searchParams]);const season=await getSeason(q.year);const partner=season.partners.find(p=>p.slug===decodeURIComponent(slug));
  if(!partner)return {title:"Partner not found | As Salam Munazzam",robots:{index:false,follow:false}};
  const title=`${partner.name} – Hajj ${season.year} | As Salam Munazzam`;
  const description=`View Hajj ${season.year} partner information for ${partner.name}, including pilgrim allocation and offered packages.`;
  const canonical=`https://www.assalammunazzam.com.pk/partners/${partner.slug}?year=${season.year}`;
  return {title,description,alternates:{canonical},openGraph:{title,description,url:canonical,siteName:"As Salam Munazzam (Private) Limited",images:[{url:`https://www.assalammunazzam.com.pk${partner.logo}`,alt:`${partner.name}, Hajj ${season.year}`}],type:"article",locale:"en_PK"},twitter:{card:"summary_large_image",title,description,images:[`https://www.assalammunazzam.com.pk${partner.logo}`]}};
}
export default async function PartnerDetail({params,searchParams}:Props){
  const [{slug},q]=await Promise.all([params,searchParams]);const [season,years]=await Promise.all([getSeason(q.year),getPublicSeasonYears()]);const partner=season.partners.find(p=>p.slug===decodeURIComponent(slug));if(!partner)notFound();
  const canonical=`https://www.assalammunazzam.com.pk/partners/${partner.slug}?year=${season.year}`;
  const allocationNotice=season.allocationsConfirmed===false?`Hajj ${season.year} allocations were copied from ${season.copiedFrom} and still need confirmation.`:undefined;
  return <><PartnerDetailClient partnerData={partner} year={season.year} years={years} allocationNotice={allocationNotice}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"TravelAgency",name:partner.name,description:`Hajj ${season.year} partner information and packages under As Salam Munazzam`,image:`https://www.assalammunazzam.com.pk${partner.logo}`,url:canonical,telephone:partner.contactNumber,email:partner.email,address:{"@type":"PostalAddress",streetAddress:partner.address,addressCountry:"PK"},parentOrganization:{"@type":"Organization",name:"As Salam Munazzam (Private) Limited",url:"https://www.assalammunazzam.com.pk"}})}}/></>;
}
