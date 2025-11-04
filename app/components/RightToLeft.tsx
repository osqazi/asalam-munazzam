"use client";
import Image from "next/image";
import { partnersData } from "@/data/partners";

export default function LeftToRightMarquee() {
// First half (17 partners)
const firstHalfLength = Math.floor(partnersData.length / 2); // 17
const firstHalfPartners = partnersData.slice(0, firstHalfLength);

// Second half (18 partners)  
const secondHalfPartners = partnersData.slice(firstHalfLength);

const partners = firstHalfPartners

  return (
    <div className="relative overflow-hidden py-6 bg-gray-50">
      <div className="flex animate-marquee-left-to-right space-x-16">
        {[...partners, ...partners].map((company, index) => (
          <div
            key={`${company.enrl}-${index}`}
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
