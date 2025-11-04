// import Image from 'next/image';
// import Header from '../app/components/Header';
// import RightToLeftMarquee from './components/LeftToRight';
// import LeftToRightMarquee from './components/RightToLeft';
// import hero from '@/public/hero.jpg'
// import HomeSection from './components/HomeSection';

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
//       {/* Header */}
//       <Header />
//       {/* <div>
//         <Partners/>
//       </div> */}
// <div className='pt-12'>
//   <div className="text-center mb-4">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//              Our Trusted Dependent Hajj Companies (DHCs)
//            </h2>
//            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//              Cluster of leading organizations to provide you with the best Hajj experience
//            </p>
//          </div>
//   <RightToLeftMarquee />

//   <LeftToRightMarquee />
// </div>
// <div className='py-8'>
//   <div className='h-auto py-4 bg-amber-400 text-center text-white md:flex md:justify-center md:items-center md:gap-10'>
//     <p className='text-3xl md:text-4xl font-bold mb-2 md:mb-0'>
//       HAJJ 2026
//     </p>
//     <p className='text-2xl md:text-4xl font-bold'>
//       حج ۱۴۴۷ ہجری
//     </p>
//   </div>
//   <div className='relative w-full'>
//     <Image 
//       src={hero}
//       alt='Hajj 2026 - حج ۱۴۴۷ ہجری'
//       className='w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover'
//       priority // For above-the-fold images
//     />
//   </div>
// </div>
// <HomeSection/>
      
      
//     </div>
//   );
// }

import Image from "next/image";
import RightToLeftMarquee from "./components/LeftToRight";
import LeftToRightMarquee from "./components/RightToLeft";
import hero from "@/public/hero.jpg";
import HomeSection from "./components/HomeSection";

export const metadata = {
  title: "As Salam Munazzam (Pvt) Ltd – Official Hajj 2026 Packages",
  description:
    "Explore official Hajj 2026 packages from As Salam Munazzam (Pvt) Ltd and its 35 Dependent Hajj Companies (DHCs), approved by the Ministry of Religious Affairs Pakistan. Find economy to premium packages for a memorable spiritual journey.",
  keywords: [
    "Hajj 2026 Pakistan",
    "As Salam Munazzam",
    "Hajj packages 2026",
    "Umrah and Hajj travel Pakistan",
    "Dependent Hajj Companies",
    "MORA approved Hajj operators",
  ],
  openGraph: {
    title: "As Salam Munazzam (Pvt) Ltd – Hajj 2026 Packages",
    description:
      "Official portal of As Salam Munazzam (Pvt) Ltd representing 35 Dependent Hajj Companies for Hajj 2026 approved by MORA Pakistan.",
    url: "https://www.assalammunazzam.com.pk",
    siteName: "As Salam Munazzam (Pvt) Ltd",
    images: [
      {
        url: "https://www.assalammunazzam.com.pk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hajj 2026 Packages – As Salam Munazzam (Pvt) Ltd",
      },
    ],
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "As Salam Munazzam (Pvt) Ltd – Hajj 2026 Packages",
    description:
      "Explore official Hajj 2026 packages from 35 trusted Dependent Hajj Companies under As Salam Munazzam (Pvt) Ltd.",
    images: ["https://www.assalammunazzam.com.pk/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      {/* Hero and Marquees */}
      <div className="pt-12">
        <div className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Trusted Dependent Hajj Companies (DHCs)
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cluster of leading organizations to provide you with the best Hajj experience
          </p>
        </div>
        <RightToLeftMarquee />
        <LeftToRightMarquee />
      </div>

      {/* Hero Image Section */}
      <div className="py-8">
        <div className="h-auto py-4 bg-amber-400 text-center text-white md:flex md:justify-center md:items-center md:gap-10">
          <p className="text-3xl md:text-4xl font-bold mb-2 md:mb-0">HAJJ 2026</p>
          <p className="text-2xl md:text-4xl font-bold">حج ۱۴۴۷ ہجری</p>
        </div>
        <div className="relative w-full">
          <Image
            src={hero}
            alt="Hajj 2026 – حج ۱۴۴۷ ہجری"
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            priority
          />
        </div>
      </div>

      {/* Main Home Section */}
      <HomeSection />

      {/* Structured Data for Home Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "As Salam Munazzam (Pvt) Ltd",
            url: "https://www.assalammunazzam.com.pk",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://www.assalammunazzam.com.pk/search?query={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </div>
  );
}
