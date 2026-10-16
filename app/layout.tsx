
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Analytics } from "@vercel/analytics/next";
import { getPublicSeasonYears, getSeason } from "@/lib/seasons";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.assalammunazzam.com.pk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "As Salam Munazzam (Pvt) Ltd | Hajj & Umrah Pakistan",
    template: "%s",
  },
  description:
    "As Salam Munazzam (Pvt) Ltd connects pilgrims with its Dependent Hajj Companies and Hajj season information in Pakistan.",
  applicationName: "As Salam Munazzam",
  authors: [{ name: "As Salam Munazzam (Private) Limited" }],
  creator: "As Salam Munazzam (Private) Limited",
  publisher: "As Salam Munazzam (Private) Limited",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: siteUrl,
    title: "As Salam Munazzam (Pvt) Ltd – Hajj & Umrah Services",
    description:
      "Explore Hajj season information and partner companies from As Salam Munazzam.",
    siteName: "As Salam Munazzam (Pvt) Ltd",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "As Salam Munazzam (Pvt) Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "As Salam Munazzam (Pvt) Ltd – Hajj & Umrah Services",
    description:
      "Your trusted Hajj travel partner in Pakistan. Explore season information and partner companies.",
    images: [`${siteUrl}/og-image.png`],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "Travel",
  other: {
    "theme-color": "#0b3d91",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [season, years] = await Promise.all([getSeason(), getPublicSeasonYears()]);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header year={season.year} years={years} />
        <main className="mt-56 md:mt-36">{children}</main>
        <Footer />
        <Analytics />

        {/* --- JSON-LD Structured Data --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "As Salam Munazzam (Pvt) Ltd",
              url: siteUrl,
              logo: `${siteUrl}/logo.png`,
              sameAs: [
                "https://facebook.com/assalammunazzam",
                "https://instagram.com/assalammunazzam",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+92-335-3221003",
                contactType: "Customer Support",
                areaServed: "PK",
                availableLanguage: ["English", "Urdu"],
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
