"use client";
import Image from "next/image";

export default function RightToLeftMarquee() {
  const partners = [
  { id: 1, name: "Moazzin Travel", logo: "/partners/moazzin.png" },
  { id: 2, name: "Moin Travel", logo: "/partners/moin.png" },
  { id: 3, name: "Muawin Travel", logo: "/partners/muawin.png" },
  { id: 4, name: "Rafeeq Travel", logo: "/partners/rafeeq.png" },
  { id: 5, name: "Rashidien Travel", logo: "/partners/rashidien.png" },
  { id: 6, name: "Rehmani Travel", logo: "/partners/rehmani.png" },
  { id: 7, name: "Sajideen Travel", logo: "/partners/sajideen.png" },
  { id: 8, name: "Sakhi Travel", logo: "/partners/sakhi.png" },
  { id: 9, name: "Super Travel", logo: "/partners/super.png" },
  { id: 10, name: "Tayyaba Travel", logo: "/partners/tayyaba.png" },
  { id: 11, name: "Travshop Travel", logo: "/partners/travshop.png" },
  { id: 12, name: "Hujaj-ul-Ansar", logo: "/partners/hujajulansar.png" },
  { id: 13, name: "Arfat Travel", logo: "/partners/arfat.png" },
  { id: 14, name: "Aroma Aviation", logo: "/partners/aviation.png" },
  { id: 15, name: "Karwan e Meezan", logo: "/partners/KMeezab.png" },
  { id: 16, name: "Raza e Noori ", logo: "/partners/razanoor.png" },
  { id: 17, name: "Pirwani Hajj", logo: "/partners/pirwani.png" },
  { id: 18, name: "Faizan e Noori", logo: "/partners/FaizanNoori.png" },
];


  return (
    <div className="relative overflow-hidden py-6 bg-gray-50">
      <div className="flex animate-marquee-right-to-left space-x-16">
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
        @keyframes marquee-right-to-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee-right-to-left {
          animation: marquee-right-to-left 40s linear infinite;
          display: flex;
          width: max-content;
        }

        .relative:hover .animate-marquee-right-to-left {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
