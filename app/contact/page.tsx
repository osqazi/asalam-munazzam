import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "HGO Contact Directory | As Salam Munazzam (Private) Limited",
  description:
    "View contact details for 35 registered Hajj Group Organizers (HGOs) in the As Salam Munazzam directory, plus our office contact information.",
  openGraph: {
    title: "HGO Contact Directory | As Salam Munazzam (Private) Limited",
    description:
      "View the contact directory for 35 registered Hajj Group Organizers and contact As Salam Munazzam for Hajj inquiries.",
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
    title: "HGO Contact Directory | As Salam Munazzam",
    description:
      "View contact details for 35 registered Hajj Group Organizers and reach As Salam Munazzam for Hajj inquiries.",
    images: ["https://www.assalammunazzam.com.pk/og-contact.jpg"],
  },
  alternates: {
    canonical: "https://www.assalammunazzam.com.pk/contact",
  },
};

export default function Page() {
  return <ContactClient />;
}
