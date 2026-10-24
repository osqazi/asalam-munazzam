"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef, useState } from "react";
import affiliationShield from "@/public/ministry-affiliation-shield.jpg";
import incorporationCertificate from "@/public/certificate.webp";

type Credential = {
  title: string;
  alt: string;
  image: StaticImageData;
};

const credentials: Credential[] = [
  {
    title: "Ministry Affiliation Shield",
    alt: "Ministry of Religious Affairs affiliation shield for As Salam Munazzam, showing MORA Registration No. 0413 and Saudi Munazzam No. 20187",
    image: affiliationShield,
  },
  {
    title: "Certificate of Incorporation",
    alt: "Securities and Exchange Commission of Pakistan Certificate of Incorporation for As Salam Munazzam (Private) Limited",
    image: incorporationCertificate,
  },
];

export default function CertificateSection({
  year,
  totalPilgrims,
  partnerCount,
}: {
  year: number;
  totalPilgrims: number;
  partnerCount: number;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedCredential, setSelectedCredential] = useState<Credential | null>(null);

  const openCredential = (credential: Credential) => {
    setSelectedCredential(credential);
    dialogRef.current?.showModal();
  };

  return (
    <section
      aria-labelledby="official-credentials-heading"
      className="mb-16 overflow-hidden rounded-3xl border border-green-200 bg-white shadow-2xl"
    >
      <div className="grid gap-8 p-6 md:grid-cols-[minmax(0,1fr)_minmax(20rem,0.9fr)] md:p-10 lg:gap-12">
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
            Company Registration & Ministry Affiliation
          </p>
          <h2
            id="official-credentials-heading"
            className="mb-6 text-3xl font-bold text-green-900 md:text-4xl"
          >
            Official Credentials
          </h2>

          <div className="space-y-5 text-base leading-relaxed text-gray-700 md:text-lg">
            <p>
              <strong>As Salam Munazzam (Private) Limited</strong> is registered
              with the Government of Pakistan&apos;s Ministry of Religious
              Affairs and Interfaith Harmony under{" "}
              <strong>MORA Registration No. 0413</strong>.
            </p>
            <p>
              The company is authorized for{" "}
              <strong>Hajj {year} under SPA-{year}</strong>, with an allocation
              of{" "}
              <strong>{totalPilgrims.toLocaleString()} pilgrims</strong>.
            </p>
            <p>
              <strong>Mr. Muhammad Yousuf Pirwani</strong>, owner of Pirwani
              Hajj Group (Private) Limited, is the company&apos;s designated
              person and is authorized to sign and execute related contracts
              in Makkah Mukarramah and Madinah Munawwarah. He brings decades of
              experience in Hajj and Umrah operations.
            </p>
            <p>
              As Salam Munazzam works with{" "}
              <strong>{partnerCount} Designated Hajj Companies (DHCs)</strong>{" "}
              to serve pilgrims.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-green-950">
            <span className="rounded-full bg-green-50 px-4 py-2">
              MORA Registration No. 0413
            </span>
            <span className="rounded-full bg-amber-50 px-4 py-2">
              Saudi Munazzam No. 20187
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
          {credentials.map((credential) => (
            <article
              key={credential.title}
              className="rounded-2xl border border-green-100 bg-gradient-to-b from-green-50 to-white p-4 text-center shadow-md"
            >
              <h3 className="mb-3 text-lg font-bold text-green-900">
                {credential.title}
              </h3>
              <button
                type="button"
                aria-haspopup="dialog"
                aria-label={"Enlarge " + credential.title}
                onClick={() => openCredential(credential)}
                className="group block w-full rounded-xl bg-white p-2 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
              >
                <Image
                  src={credential.image}
                  alt={credential.alt}
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 300px"
                  className="mx-auto h-[24rem] w-full rounded-lg object-contain transition group-hover:scale-[1.01]"
                />
                <span className="mt-2 block text-sm font-semibold text-green-800 group-hover:text-green-950">
                  View full image
                </span>
              </button>
            </article>
          ))}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="credential-dialog-heading"
        onClose={() => setSelectedCredential(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        className="m-auto max-h-[92vh] w-[calc(100%-2rem)] max-w-4xl overflow-y-auto rounded-2xl border-0 bg-white p-4 shadow-2xl backdrop:bg-black/80 sm:p-6"
      >
        {selectedCredential && (
          <>
            <div className="mb-4 flex items-start justify-between gap-4">
              <h2
                id="credential-dialog-heading"
                className="text-xl font-bold text-green-900 sm:text-2xl"
              >
                {selectedCredential.title}
              </h2>
              <button
                type="button"
                autoFocus
                onClick={() => dialogRef.current?.close()}
                className="shrink-0 rounded-lg bg-green-700 px-4 py-2 font-semibold text-white hover:bg-green-800 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
              >
                Close
              </button>
            </div>
            <Image
              src={selectedCredential.image}
              alt={selectedCredential.alt}
              sizes="(max-width: 768px) 92vw, 800px"
              className="mx-auto max-h-[75vh] w-auto max-w-full rounded-lg object-contain"
            />
          </>
        )}
      </dialog>
    </section>
  );
}
