import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | As Salam Munazzam (Private) Limited",
  description:
    "Get in touch with As Salam Munazzam (Private) Limited for Hajj 2026, Umrah, or partnership inquiries. Our team is available to guide you with expert support and consultation.",
  openGraph: {
    title: "Contact Us | As Salam Munazzam (Private) Limited",
    description:
      "Reach out to As Salam Munazzam for official Hajj and Umrah guidance, partnership discussions, or customer support.",
    url: "https://www.assalammunazzam.com.pk/contact",
    siteName: "As Salam Munazzam (Private) Limited",
    images: [
      {
        url: "https://www.assalammunazzam.com.pk/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact As Salam Munazzam",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact As Salam Munazzam | Hajj & Umrah Experts",
    description:
      "Contact us for official Hajj and Umrah packages, VIP services, or partnership inquiries.",
    images: ["https://www.assalammunazzam.com.pk/og-contact.jpg"],
  },
  alternates: {
    canonical: "https://www.assalammunazzam.com.pk/contact",
  },
};

export default function Page() {
  return <ContactClient />;
}
