// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import './globals.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import { config } from "@fortawesome/fontawesome-svg-core";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// import { Analytics } from "@vercel/analytics/next"
// config.autoAddCss = false;

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'As Salam Munazzam (Private) Limited',
//   description: 'Premium Hajj Packages for 2026 - Your Spiritual Journey Awaits',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <Header/>
//       <div className='mt-56 md:mt-36'>
//       <body className={inter.className}>
       
//         {children}
//         <Analytics />
//         </body>
//       </div>
//       <Footer/>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Analytics } from "@vercel/analytics/next";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.assalammunazzam.com.pk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "As Salam Munazzam (Pvt) Ltd – Hajj 2026 Packages",
    template: "%s | As Salam Munazzam (Pvt) Ltd",
  },
  description:
    "As Salam Munazzam (Pvt) Ltd proudly represents 35 Dependent Hajj Companies (DHCs) offering premium Hajj 2026 packages approved by MORA Pakistan. Your trusted spiritual travel partner.",
  applicationName: "As Salam Munazzam Hajj 2026",
  keywords: [
    "Hajj 2026 Pakistan",
    "Hajj packages 2026",
    "As Salam Munazzam",
    "Private Hajj companies Pakistan",
    "Umrah and Hajj packages",
  ],
  authors: [{ name: "MetaLog Inc.", url: "https://owais-qazi.vercel.app" }],
  creator: "As Salam Munazzam (Private) Limited",
  publisher: "As Salam Munazzam (Private) Limited",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: siteUrl,
    title: "As Salam Munazzam (Pvt) Ltd – Hajj 2026 Packages",
    description:
      "Explore premium Hajj 2026 packages from our 35 partner companies. Approved by MORA Pakistan.",
    siteName: "As Salam Munazzam (Pvt) Ltd",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "As Salam Munazzam (Pvt) Ltd – Hajj 2026 Packages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "As Salam Munazzam (Pvt) Ltd – Hajj 2026 Packages",
    description:
      "Your trusted Hajj 2026 travel partner in Pakistan. Explore packages from our 35 partner companies.",
    images: [`${siteUrl}/og-image.jpg`],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
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
                telephone: "+92-XXX-XXXXXXX",
                contactType: "Customer Service",
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
