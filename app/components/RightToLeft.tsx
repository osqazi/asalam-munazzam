"use client";
import Image from "next/image";

export default function LeftToRightMarquee() {
  const partners = [
  { id: 1, name: "Aroma Travel", logo: "/partners/aroma.png" },
  { id: 2, name: "Al Syed Travel", logo: "/partners/alsyed.png" },
  { id: 3, name: "Ahle Sunnat Travel", logo: "/partners/ahlesunnat.png" },
  { id: 4, name: "Bukasso Travel", logo: "/partners/bukasso.png" },
  { id: 5, name: "Buksons Travel", logo: "/partners/buksons.png" },
  { id: 6, name: "Buk Tour", logo: "/partners/buktour.png" },
  { id: 7, name: "Citi Travel", logo: "/partners/citi.png" },
  { id: 8, name: "Khizer Travel", logo: "/partners/khizer.png" },
  { id: 9, name: "Haram Travel", logo: "/partners/haram.png" },
  { id: 10, name: "Karramzani Travel", logo: "/partners/karramzani.png" },
  { id: 11, name: "Karwan Travel", logo: "/partners/karwan.png" },
  { id: 12, name: "KMM Travel", logo: "/partners/kmm.png" },
  { id: 13, name: "Maj Ramzani Travel", logo: "/partners/majramzani.png" },
  { id: 14, name: "Malik Travel", logo: "/partners/malik.png" },
];


  return (
    <div className="relative overflow-hidden py-6 bg-gray-50">
      <div className="flex animate-marquee-left-to-right space-x-16">
        {[...partners, ...partners].map((company, index) => (
          <div
            key={`${company.id}-${index}`}
            className="group relative flex-shrink-0 flex flex-col items-center justify-center"
          >
            <div className="relative rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 border border-gray-200 w-28 h-28 overflow-hidden">
              <Image
                src={company.logo}
                alt={company.name}
                width={120}
                height={120}
                className="object-cover"
              />
            </div>

            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 whitespace-nowrap">
              {company.name}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-4 border-transparent border-t-gray-800"></div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee-left-to-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee-left-to-right {
          animation: marquee-left-to-right 40s linear infinite;
          display: flex;
          width: max-content;
        }

        .relative:hover .animate-marquee-left-to-right {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
