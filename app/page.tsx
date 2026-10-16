import Image from "next/image";
import RightToLeftMarquee from "./components/LeftToRight";
import LeftToRightMarquee from "./components/RightToLeft";
import hero from "@/public/hero.jpg";
import HomeSection from "./components/HomeSection";
import { getSeason } from "@/lib/seasons";
import { SeasonNotice } from "@/app/components/SeasonPicker";
import type { Metadata } from "next";

export async function generateMetadata({searchParams}:{searchParams:Promise<{year?:string}>}):Promise<Metadata>{
  const q=await searchParams;const season=await getSeason(q.year);const title=season.seo.pages?.home?.title||`As Salam Munazzam | Hajj ${season.year} Partners and Packages`;const description=season.seo.pages?.home?.description||`View Hajj ${season.year} season information and partner allocations from As Salam Munazzam.`;const url=`https://www.assalammunazzam.com.pk/?year=${season.year}`;
  return {title,description,alternates:{canonical:url},openGraph:{title,description,url,siteName:"As Salam Munazzam (Pvt) Ltd",images:[{url:"https://www.assalammunazzam.com.pk/og-image.png",width:1200,height:630,alt:title}],type:"website",locale:"en_PK"},twitter:{card:"summary_large_image",title,description,images:["https://www.assalammunazzam.com.pk/og-image.png"]}};
}

export default async function Home({searchParams}:{searchParams:Promise<{year?:string}>}) {
  const q=await searchParams;const season=await getSeason(q.year);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <SeasonNotice message={season.allocationsConfirmed===false?`Hajj ${season.year} allocations were copied from ${season.copiedFrom} as a starting point and still need confirmation.`:undefined}/>
      {/* Hero and Marquees */}
      <div className="pt-16">
        <div className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Trusted Dependent Hajj Companies (DHCs)
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cluster of leading organizations to provide you with the best Hajj experience
          </p>
        </div>
        <RightToLeftMarquee partnersData={season.partners} />
        <LeftToRightMarquee partnersData={season.partners} />
      </div>

      {/* Hero Image Section */}
      <div className="py-8">
        <div className="h-auto py-4 bg-gradient-to-b from-amber-400 to-amber-500 shadow-xl border-t border-amber-400 text-center text-white md:flex md:justify-center md:items-center md:gap-10">
          <p className="text-3xl md:text-4xl font-bold mb-2 md:mb-0">HAJJ {season.year}</p>
          <p className="text-2xl md:text-4xl font-bold">حج {String(season.year - 579).replace(/[0-9]/g, digit => "٠١٢٣٤٥٦٧٨٩"[Number(digit)])} ہجری</p>
        </div>
        <div className="relative w-full">
          <Image
            src={hero}
            alt={`Hajj ${season.year} – Kaaba and holy sites`}
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            priority
          />
        </div>
      </div>

      {/* Main Home Section */}
      <HomeSection partners={season.partners} year={season.year} />

      {/* Structured Data for Home Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "As Salam Munazzam (Pvt) Ltd",
            url: "https://www.assalammunazzam.com.pk",
          }),
        }}
      />
    </div>
  );
}
