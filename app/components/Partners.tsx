// import Image from "next/image";

// const partners = [
//   {
//     id: 1,
//     name: 'Aroma Travel',
//     logo: '/partners/aroma.png',
//   },
//   {
//     id: 2,
//     name: 'Bukhari Travel',
//     logo: '/partners/bukhari.png',
//   },
//   {
//     id: 3,
//     name: 'Al Syed Travel',
//     logo: '/partners/alsyed.png',
//   },
//   {
//     id: 4,
//     name: 'Hujaj-ul-Ansar',
//     logo: '/partners/hujajulansar.png',
//   },
//   {
//     id: 5,
//     name: 'Khizer Travel',
//     logo: '/partners/khizer.png',
//   },
//   {
//     id: 6,
//     name: 'Citi Travel',
//     logo: '/partners/citi.png',
//   },
//   {
//     id: 7,
//     name: 'Super Travel',
//     logo: '/partners/super.png',
//   },
//   {
//     id: 8,
//     name: 'Al Tayyaba Tours',
//     logo: '/partners/altaybah.png',
//   },
// ];

// export default function Partners() {
//   return (
//     <section className="bg-white py-16">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//             Our Trusted Partners
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Cluster of leading organizations to provide you with the best Hajj experience
//           </p>
//         </div>

//         {/* Marquee Container */}
//         <div className="relative overflow-hidden">
//           {/* Gradient Overlays */}
//           <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
//           <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
//           {/* Marquee Wrapper */}
//           <div className="flex animate-marquee">
//             {/* First Set */}
//             {partners.map((partner) => (
//               <div
//                 key={partner.id}
//                 className="flex-shrink-0 mx-8 group"
//               >
//                 <div className="bg-white rounded-xl p-2 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-gray-200">
//                   {/* Logo Container - No padding, full size */}
//                   <div className="w-40 h-20 relative">
//                     <Image 
//                       src={partner.logo} 
//                       alt={partner.name}
//                       fill
//                       className="object-contain rounded-lg"
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
            
//             {/* Duplicate Set for Seamless Loop */}
//             {partners.map((partner) => (
//               <div
//                 key={`duplicate-${partner.id}`}
//                 className="flex-shrink-0 mx-8 group"
//               >
//                 <div className="bg-white rounded-xl p-2 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-gray-200">
//                   {/* Logo Container - No padding, full size */}
//                   <div className="w-40 h-20 relative">
//                     <Image 
//                       src={partner.logo} 
//                       alt={partner.name}
//                       fill
//                       className="object-contain rounded-lg"
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client"
// import Image from 'next/image';

// export default function PartnersMarquee() {
//   const partners = [
//     {
//       id: 1,
//       name: 'Aroma Travel',
//       logo: '/partners/aroma.png',
//     },
//     {
//       id: 2,
//       name: 'Bukhari Travel',
//       logo: '/partners/bukhari.png',
//     },
//     {
//       id: 3,
//       name: 'Al Syed Travel',
//       logo: '/partners/alsyed.png',
//     },
//     {
//       id: 4,
//       name: 'Hujaj-ul-Ansar',
//       logo: '/partners/hujajulansar.png',
//     },
//     {
//       id: 5,
//       name: 'Khizer Travel',
//       logo: '/partners/khizer.png',
//     },
//     {
//       id: 6,
//       name: 'Citi Travel',
//       logo: '/partners/citi.png',
//     },
//     {
//       id: 7,
//       name: 'Super Travel',
//       logo: '/partners/super.png',
//     },
//     {
//       id: 8,
//       name: 'Al Tayyaba Tours',
//       logo: '/partners/altaybah.png',
//     },
//   ];

//   // Create 32 companies by repeating the array 4 times
//   const allCompanies = Array.from({ length: 32 }, (_, index) => {
//     const originalPartner = partners[index % partners.length];
//     return {
//       ...originalPartner,
//       id: index + 1,
//       name: `${originalPartner.name}`
//     };
//   });

//   return (
//     <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-amber-400 to-yellow-500 border-t-2 border-amber-600 shadow-2xl py-3">
//       {/* Marquee Container */}
//       <div className="relative overflow-hidden">
//         {/* Marquee 1 */}
//         <div className="flex animate-marquee whitespace-nowrap">
//           {allCompanies.map((company) => (
//             <div
//               key={company.id}
//               className="group inline-flex items-center justify-center mx-6"
//             >
//               <div className="bg-white rounded-xl p-3 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 border-2 border-amber-200 w-16 h-16 flex items-center justify-center">
//                 <Image
//                   src={company.logo}
//                   alt={company.name}
//                   width={40}
//                   height={40}
//                   className="object-contain transition-transform duration-500 group-hover:scale-110"
//                   onError={(e) => {
//                     e.target.src = `data:image/svg+xml;base64,${btoa(`
//                       <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
//                         <rect width="40" height="40" fill="#fef3c7" rx="8"/>
//                         <text x="20" y="24" text-anchor="middle" font-family="Arial" font-size="10" fill="#d97706" font-weight="bold">C${company.id}</text>
//                       </svg>
//                     `)}`;
//                   }}
//                 />
//               </div>
              
//               {/* Hover Tooltip */}
//               <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-amber-800 text-white text-sm py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50 whitespace-nowrap shadow-lg">
//                 {company.name}
//                 <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full border-4 border-transparent border-t-amber-800"></div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Duplicate for seamless loop */}
//         <div className="flex animate-marquee2 absolute top-0 whitespace-nowrap">
//           {allCompanies.map((company) => (
//             <div
//               key={`duplicate-${company.id}`}
//               className="group inline-flex items-center justify-center mx-6"
//             >
//               <div className="bg-white rounded-xl p-3 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 border-2 border-amber-200 w-16 h-16 flex items-center justify-center">
//                 <Image
//                   src={company.logo}
//                   alt={company.name}
//                   width={40}
//                   height={40}
//                   className="object-contain transition-transform duration-500 group-hover:scale-110"
//                   onError={(e) => {
//                     e.target.src = `data:image/svg+xml;base64,${btoa(`
//                       <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
//                         <rect width="40" height="40" fill="#fef3c7" rx="8"/>
//                         <text x="20" y="24" text-anchor="middle" font-family="Arial" font-size="10" fill="#d97706" font-weight="bold">C${company.id}</text>
//                       </svg>
//                     `)}`;
//                   }}
//                 />
//               </div>
              
//               {/* Hover Tooltip */}
//               <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-amber-800 text-white text-sm py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50 whitespace-nowrap shadow-lg">
//                 {company.name}
//                 <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full border-4 border-transparent border-t-amber-800"></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Header Text */}
//       <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white px-6 py-2 rounded-t-lg shadow-lg">
//         <h3 className="text-sm font-bold uppercase tracking-wider">
//           Trusted by 32+ Partner Companies
//         </h3>
//       </div>

//       {/* Custom CSS for marquee animation */}
//       <style jsx>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-100%);
//           }
//         }
        
//         @keyframes marquee2 {
//           0% {
//             transform: translateX(100%);
//           }
//           100% {
//             transform: translateX(0%);
//           }
//         }
        
//         .animate-marquee {
//           animation: marquee 60s linear infinite;
//         }
        
//         .animate-marquee2 {
//           animation: marquee2 60s linear infinite;
//         }
        
//         /* Pause animation on hover */
//         .relative:hover .animate-marquee,
//         .relative:hover .animate-marquee2 {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </div>
//   );
// }

