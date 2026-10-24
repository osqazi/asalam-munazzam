import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  MapPin,
  Package,
  ShieldCheck,
  Users,
} from "lucide-react";

const siteUrl = "https://www.assalammunazzam.com.pk";
const pageTitle = "About As Salam Munazzam | Hajj & Umrah Pakistan";
const pageDescription =
  "Learn about As Salam Munazzam (Private) Limited, its Ministry registration, Hajj partner network, pilgrim guidance, and company credentials.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/about` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteUrl}/about`,
    siteName: "As Salam Munazzam (Private) Limited",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "As Salam Munazzam (Private) Limited",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [`${siteUrl}/og-image.png`],
  },
};

const services = [
  {
    icon: Package,
    title: "Hajj Package Information",
    description:
      "Explore package brochures shared by partner DHCs, with options that may vary by duration, accommodation, and service level.",
  },
  {
    icon: Users,
    title: "A Network of Hajj Partners",
    description:
      "Review partner profiles and the season-specific information published for each Hajj year, including allocations and available packages.",
  },
  {
    icon: Heart,
    title: "Pilgrim Guidance",
    description:
      "We welcome Hajj and Umrah inquiries and aim to make it easier for pilgrims to find relevant information and the right point of contact.",
  },
];

const exploreLinks = [
  {
    href: "/partners",
    title: "Our Partners",
    description: "View DHC profiles and season allocations.",
  },
  {
    href: "/packages",
    title: "Hajj Packages",
    description: "Browse package brochures shared by partners.",
  },
  {
    href: "/notifications",
    title: "Official Notifications",
    description: "Read season letters and published notices.",
  },
  {
    href: "/contact",
    title: "Contact Us",
    description: "Get in touch with our team for guidance.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 px-4 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl space-y-12 md:space-y-16">
        <header className="overflow-hidden rounded-3xl bg-gradient-to-r from-green-700 via-emerald-700 to-green-800 px-6 py-12 text-center text-white shadow-2xl sm:px-10 md:py-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-amber-100">
            <ShieldCheck aria-hidden="true" className="h-4 w-4" />
            MORA Registration No. 0413
          </span>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            About As Salam Munazzam
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-green-50 sm:text-lg md:text-xl">
            Helping pilgrims explore Hajj and Umrah information with trusted
            partner connections, thoughtful guidance, comfort, and care.
          </p>
        </header>

        <section
          aria-labelledby="who-we-are-heading"
          className="grid gap-8 rounded-3xl border border-green-100 bg-white p-6 shadow-xl md:grid-cols-[1.15fr_0.85fr] md:items-center md:p-10"
        >
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              Who We Are
            </p>
            <h2
              id="who-we-are-heading"
              className="mt-2 text-2xl font-bold text-green-900 sm:text-3xl"
            >
              A trusted point of connection for pilgrims
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-gray-700 sm:text-lg">
              <p>
                <strong>As Salam Munazzam (Private) Limited</strong> is a
                Pakistan-based Hajj organization registered with the Ministry
                of Religious Affairs and Interfaith Harmony. We connect
                pilgrims with our Dependent Hajj Company (DHC) partners and
                make season information easier to find and understand.
              </p>
              <p>
                Our website brings partner profiles, Hajj allocations, package
                brochures, and official notifications together in one place.
                We want visitors to be able to review their options clearly
                and approach the relevant partner with confidence.
              </p>
            </div>
          </div>

          <aside className="rounded-2xl bg-gradient-to-br from-amber-50 to-green-50 p-6 sm:p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-white shadow-md">
              <MapPin aria-hidden="true" className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-green-900">Our Approach</h3>
            <p className="mt-3 leading-relaxed text-gray-700">
              We aim to make the path to trusted Hajj and Umrah information
              clearer by bringing pilgrims, partner organizations, and season
              details together—serving every inquiry with comfort and care.
            </p>
          </aside>
        </section>

        <section aria-labelledby="how-we-help-heading">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              How We Help
            </p>
            <h2
              id="how-we-help-heading"
              className="mt-2 text-2xl font-bold text-green-900 sm:text-3xl"
            >
              Clear information, connected support
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-green-100 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl sm:p-7"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-600 to-emerald-700 text-white">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-green-900">{title}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="credentials-heading"
          className="rounded-3xl bg-gradient-to-r from-green-700 to-emerald-800 p-6 text-white shadow-2xl sm:p-8 md:p-10"
        >
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-200">
                Credentials & Leadership
              </p>
              <h2
                id="credentials-heading"
                className="mt-2 text-2xl font-bold sm:text-3xl"
              >
                Experience grounded in responsibility
              </h2>
              <p className="mt-4 leading-relaxed text-green-50">
                As Salam Munazzam&apos;s public credentials include its
                registration with the Ministry of Religious Affairs and its
                Saudi Munazzam number.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
                <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                  <p className="text-sm text-green-100">MORA Registration</p>
                  <p className="mt-1 text-xl font-bold">No. 0413</p>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                  <p className="text-sm text-green-100">Saudi Munazzam</p>
                  <p className="mt-1 text-xl font-bold">No. 20187</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 text-gray-700 shadow-lg sm:p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <Users aria-hidden="true" className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-green-900 sm:text-2xl">
                Designated company representative
              </h3>
              <p className="mt-4 leading-relaxed">
                <strong>Mr. Muhammad Yousuf Pirwani</strong>, owner of Pirwani
                Hajj Group (Private) Limited and designated person of As Salam
                Munazzam (Pvt.) Ltd. He is authorized to sign and execute
                related contracts in Makkah Mukarramah and Madinah Munawwarah,
                and brings decades of experience in Hajj and Umrah operations.
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="season-information-heading"
          className="rounded-3xl border border-amber-200 bg-white p-6 shadow-xl sm:p-8 md:p-10"
        >
          <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
              <Package aria-hidden="true" className="h-7 w-7" />
            </div>
            <div>
              <h2
                id="season-information-heading"
                className="text-2xl font-bold text-green-900 sm:text-3xl"
              >
                Hajj information, organized by season
              </h2>
              <p className="mt-3 max-w-4xl leading-relaxed text-gray-700 sm:text-lg">
                Partner allocations and package offers can change from one
                Hajj season to another. The site keeps season details organized
                so visitors can explore current information and select a
                previous year when they need to review earlier records.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="explore-heading">
          <div className="mb-8 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              Explore the Website
            </p>
            <h2
              id="explore-heading"
              className="mt-2 text-2xl font-bold text-green-900 sm:text-3xl"
            >
              Find the information you need
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {exploreLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-2xl border border-green-100 bg-white p-5 shadow-md transition-all hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="text-lg font-bold text-green-900">
                    {link.title}
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-amber-600 transition-transform group-hover:translate-x-1"
                  />
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-gray-600">
                  {link.description}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
