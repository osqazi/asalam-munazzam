
// import { partnersData } from "@/data/partners";
// import PartnerDetailClient from "./PartnerDetailClient";

// type PartnerPageProps = {
//   params: Promise<{ name: string }>;
// };

// export default async function PartnerDetail({ params }: PartnerPageProps) {
//   const { name } = await params;
//   const partnerName = decodeURIComponent(name);
//   const partnerData = partnersData.find((p) => p.name === partnerName);

//   if (!partnerData) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8 px-4">
//         <div className="max-w-6xl mx-auto text-center">
//           <h1 className="text-4xl font-bold text-green-800 mb-4">Partner Not Found</h1>
//           <p className="text-gray-600">The requested partner could not be found.</p>
//         </div>
//       </div>
//     );
//   }

//   return <PartnerDetailClient partnerData={partnerData} />;
// }

import { partnersData } from "@/data/partners";
import PartnerDetailClient from "./PartnerDetailClient";

type PartnerPageProps = {
  params: Promise<{ slug: string }>;
};

// ✅ Generate SEO Metadata for each Partner
export async function generateMetadata({ params }: PartnerPageProps) {
  const { slug } = await params;
  const partnerName = decodeURIComponent(slug);
  const partner = partnersData.find((p) => p.slug === partnerName);

  if (!partner) {
    return {
      title: "Partner Not Found – As Salam Munazzam (Private) Limited",
      description: "Requested partner not found in As Salam Munazzam (Private) Limited network.",
    };
  }

  const title = `${partner.name} – Hajj 2026 Packages | As Salam Munazzam (Private) Limited`;
  const description = `Explore official Hajj 2026 packages by ${partner.name}, a Dependent Hajj Company under As Salam Munazzam (Private) Limited. Contact ${partner.contactPerson} at ${partner.contactNumber} or visit ${partner.website}.`;

  const image = partner.logo.startsWith("http")
    ? partner.logo
    : `https://www.assalammunazzam.com.pk${partner.logo}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.assalammunazzam.com.pk/partners/${encodeURIComponent(partner.slug)}`,
      siteName: "As Salam Munazzam (Private) Limited",
      images: [
        {
          url: image,
          width: 800,
          height: 600,
          alt: `${partner.name} – Hajj 2026`,
        },
      ],
      type: "article",
      locale: "en_PK",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

// ✅ Main Component
export default async function PartnerDetail({ params }: PartnerPageProps) {
  const { slug } = await params;
  const partnerName = decodeURIComponent(slug);
  const partnerData = partnersData.find((p) => p.slug === partnerName);

  if (!partnerData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Partner Not Found</h1>
          <p className="text-gray-600">The requested partner could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Partner Detail Component */}
      <PartnerDetailClient partnerData={partnerData} />

      {/* ✅ Structured Data (Schema.org LocalBusiness) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: partnerData.name,
            description: `Official Hajj 2026 packages provider under As Salam Munazzam (Private) Limited`,
            image: partnerData.logo,
            url: `https://www.assalammunazzam.com.pk/partners/${encodeURIComponent(
              partnerData.name
            )}`,
            telephone: partnerData.contactNumber,
            email: partnerData.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: partnerData.address,
              addressCountry: "PK",
            },
            knowsAbout: ["Hajj 2026", "Umrah", "Travel Packages", "Pilgrimage Services"],
            sameAs: partnerData.website ? [`https://${partnerData.website}`] : [],
            parentOrganization: {
              "@type": "Organization",
              name: "As Salam Munazzam (Private) Limited",
              url: "https://www.assalammunazzam.com.pk",
            },
          }),
        }}
      />
    </>
  );
}
