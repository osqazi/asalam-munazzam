import type { Metadata } from "next";
import PackagesClient from "./PackagesClient";

export const metadata: Metadata = {
  title: "Hajj Packages 2026 – Compare & Choose | As Salam Munazzam (Private) Limited",
  description:
    "Explore premium, economy, and VIP Hajj 2026 packages from 35 trusted partner companies of As Salam Munazzam (Private) Limited. View and download official brochures easily.",
  keywords: [
    "Hajj 2026 packages",
    "As Salam Munazzam",
    "Hajj packages Pakistan",
    "VIP Hajj package",
    "Economy Hajj package",
    "Hajj travel companies Pakistan",
    "Makkah Madinah tour 2026",
    "Hajj packages Karachi Lahore Islamabad",
  ],
  openGraph: {
    title: "Hajj Packages 2026 – As Salam Munazzam (Private) Limited",
    description:
      "Compare and select the best Hajj 2026 packages from our 35 partner companies. Official brochures available for download.",
    url: "https://www.assalammunazzam.com.pk/packages",
    siteName: "As Salam Munazzam (Private) Limited",
    images: [
      {
        url: "https://www.assalammunazzam.com.pk/og-hajj-packages.jpg",
        width: 1200,
        height: 630,
        alt: "Hajj Packages 2026 – As Salam Munazzam (Private) Limited",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hajj Packages 2026 | As Salam Munazzam (Private) Limited",
    description:
      "Discover official Hajj 2026 packages from 35 partner travel companies. Economy, Standard, and VIP options available.",
    images: ["https://www.assalammunazzam.com.pk/og-hajj-packages.jpg"],
  },
  alternates: {
    canonical: "https://www.assalammunazzam.com.pk/packages",
  },
};

export default function PackagesPage() {
  return <PackagesClient />;
}
