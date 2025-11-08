import type { Metadata } from "next";
import NotificationsClient from "./NotificationsClient";

export const metadata: Metadata = {
  title: "Official Hajj 2026 Notifications | As Salam Munazzam (Private) Limited",
  description:
    "View official letters, approval documents, and policy guidelines for Hajj 2026 issued by the Ministry of Religious Affairs (MORA) and other authorities.",
  keywords: [
    "Hajj 2026 notifications",
    "MORA letters",
    "Hajj policy 2026",
    "Hajj operator certification",
    "As Salam Munazzam notifications",
    "Ministry of Religious Affairs Pakistan",
    "Hajj documents",
  ],
  openGraph: {
    title: "Official Hajj 2026 Notifications | As Salam Munazzam (Private) Limited",
    description:
      "Access all official notifications, approval letters, and Hajj 2026 policy documents from MORA and partner authorities.",
    url: "https://www.assalammunazzam.com.pk/notifications",
    siteName: "As Salam Munazzam (Private) Limited",
    images: [
      {
        url: "https://www.assalammunazzam.com.pk/og-notifications.jpg",
        width: 1200,
        height: 630,
        alt: "Official Hajj 2026 Notifications – As Salam Munazzam",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Official Hajj 2026 Notifications | As Salam Munazzam (Private) Limited",
    description:
      "Stay updated with official letters, certifications, and policies for Hajj 2026 from MORA and related departments.",
    images: ["https://www.assalammunazzam.com.pk/og-notifications.jpg"],
  },
  alternates: {
    canonical: "https://www.assalammunazzam.com.pk/notifications",
  },
};

export default function NotificationsPage() {
  return <NotificationsClient />;
}
