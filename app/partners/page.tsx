// "use client";
// import { useState } from "react";
// import Image from "next/image";

// // Partner data with enrollment numbers and pilgrim counts
// const partnersData = [
//   { enrl: 4127, name: "KARWAN-E-RANIZANI (PVT) LTD.", pilgrims: 80, logo: "/partners/karwan.png" },
//   { enrl: 4128, name: "MAJMU-E-RAMZANI (PVT) LTD.", pilgrims: 147, logo: "/partners/majramzani.png" },
//   { enrl: 4272, name: "KARWAN-E-REHMANI TOURS AND TRA", pilgrims: 63, logo: "/partners/rehmani.png" },
//   { enrl: 2263, name: "AL SMIDEEN TRAVELS & TOURS (PVT) LTD", pilgrims: 32, logo: "/partners/alsyed.png" },
//   { enrl: 4151, name: "AL TAYABA TRAVELS & TOURS (PVT) LTD", pilgrims: 90, logo: "/partners/tayyaba.png" },
//   { enrl: 4153, name: "ITUJAJ-AL-ANSAR HMI & UMRAH TOURS (PVT) LTD", pilgrims: 80, logo: "/partners/hujajulansar.png" },
//   { enrl: 4156, name: "AROMA TRAVEL SERVICES (PVT) LTD", pilgrims: 176, logo: "/partners/aroma.png" },
//   { enrl: 4337, name: "AROMA AVIATION (PVT) LTD", pilgrims: 32, logo: "/partners/aviation.png" },
//   { enrl: 4157, name: "AL SYED TRAVELS (PVT) LTD", pilgrims: 147, logo: "/partners/alsyed.png" },
//   { enrl: 4343, name: "KETIZER TRAVELS (PVT) LTD", pilgrims: 32, logo: "/partners/khizer.png" },
//   { enrl: 4330, name: "CITI TRAVELS (PVT) LTD", pilgrims: 32, logo: "/partners/citi.png" },
//   { enrl: 4327, name: "SUPER TRAVELS (PVT) LTD", pilgrims: 32, logo: "/partners/super.png" },
//   { enrl: 4291, name: "BUKHARI TOURS (PVT) LTD", pilgrims: 32, logo: "/partners/buktour.png" },
//   { enrl: 4307, name: "BUKHARI ASSOCIATE (PVT) LTD", pilgrims: 32, logo: "/partners/bukasso.png" },
//   { enrl: 4306, name: "BUKHARI & SONS (PVT) LTD", pilgrims: 32, logo: "/partners/buksons.png" },
//   { enrl: 3313, name: "TRAVEL SHOP (PVT) LTD HAJJ UNIRAII TRAVEL & TOUR SERVICES", pilgrims: 32, logo: "/partners/travshop.png" },
//   { enrl: 4171, name: "PIRWANI HAJJ GROUP (PVT) LTD.", pilgrims: 80, logo: "/partners/pirwani.png" },
//   { enrl: 4168, name: "FA1ZAN E NOORI INTERNATIONAL (PVT) LTD.", pilgrims: 75, logo: "/partners/FaizanNoori.png" },
//   { enrl: 4325, name: "RAZA E NOOR (PVT) LTD.", pilgrims: 32, logo: "/partners/razanoor.png" },
//   { enrl: 4365, name: "KARWAN E ZIA E NOORI INTERNATIONAL (PVT) LTD.", pilgrims: 32, logo: "/partners/ziaenoori.png" },
//   { enrl: 4219, name: "KARWAN E MUSTAFAI (PVT) LTD.", pilgrims: 75, logo: "/partners/mustafai.png" },
//   { enrl: 4386, name: "RWAN E SURIYA HAJJ & UMRAH (PVT) LTD.", pilgrims: 32, logo: "/partners/suriya.png" },
//   { enrl: 4210, name: "TAIR E HARAM INTERNATIONAL (PVT) LTD.", pilgrims: 90, logo: "/partners/haram.png" },
//   { enrl: 4284, name: "MIN UL JJAJ HAJJ & UMRAH (PVT) LTD.", pilgrims: 63, logo: "/partners/moin.png" },
//   { enrl: 4212, name: "KARWAN E MAKKAH MADINA (PVT) LTD", pilgrims: 80, logo: "/partners/kmm.png" },
//   { enrl: 4152, name: "AL RASHEDIN HAJJ & UMRAH SERVCES (PVT) LTD.", pilgrims: 80, logo: "/partners/rashidien.png" },
//   { enrl: 4378, name: "KARWAN E MALIK (PVT) LTD.", pilgrims: 32, logo: "/partners/malik.png" },
//   { enrl: 4268, name: "NEW INTL KARWAN E ARFAT (PVT) LTD.", pilgrims: 66, logo: "/partners/arfat.png" },
//   { enrl: 4393, name: "KARWAN E MEEZAB REHMAN (PVT) LTD.", pilgrims: 32, logo: "/partners/KMeezab.png" },
//   { enrl: 4193, name: "KARWAN E AMJADIA HAJJ & UMRAH SERVICES (PVT) LTD.", pilgrims: 80, logo: "/partners/karwan.png" },
//   { enrl: 4218, name: "MUAWIN UL HUJJAJ (PVA. LTD.", pilgrims: 90, logo: "/partners/muawin.png" },
//   { enrl: 4201, name: "SAK1-11 WAHAB HMI COM", pilgrims: 80, logo: "/partners/sakhi.png" },
//   { enrl: 4126, name: "AL MOAZZIN HAJJ & UMRAH SERVI", pilgrims: 147, logo: "/partners/moazzin.png" },
//   { enrl: 4154, name: "KARWAN E RFI UL RARMAIN (PVT) LTD.", pilgrims: 80, logo: "/partners/rafeeq.png" },
//   { enrl: 4140, name: "KARWAN E AI-IL E SU NNAT TRAVELS", pilgrims: 90, logo: "/partners/ahlesunnat.png" },
// ];

// export default function Partners() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortBy, setSortBy] = useState("name");

//   // Calculate total pilgrims
//   const totalPilgrims = partnersData.reduce((sum, partner) => sum + partner.pilgrims, 0);

//   // Filter and sort partners
//   const filteredPartners = partnersData
//     .filter(partner => 
//       partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       partner.enrl.toString().includes(searchTerm)
//     )
//     .sort((a, b) => {
//       switch (sortBy) {
//         case "name":
//           return a.name.localeCompare(b.name);
//         case "enrl":
//           return a.enrl - b.enrl;
//         case "pilgrims":
//           return b.pilgrims - a.pilgrims;
//         default:
//           return 0;
//       }
//     });

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
//             Our Trusted Partners
//           </h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Working together to make your spiritual journey to the Holy Lands memorable and comfortable
//           </p>
//         </div>

//         {/* Total Pilgrims Card */}
//         <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl shadow-2xl p-8 mb-8 text-center text-white">
//           <div className="flex flex-col md:flex-row items-center justify-between">
//             <div className="mb-4 md:mb-0">
//               <h2 className="text-2xl md:text-3xl font-bold mb-2">Total Pilgrims Served</h2>
//               <p className="text-green-100">Across all our partner organizations</p>
//             </div>
//             <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 min-w-[200px]">
//               <div className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
//                 {totalPilgrims.toLocaleString()}
//               </div>
//               <p className="text-green-100 mt-2">Blessed Journeys</p>
//             </div>
//           </div>
//         </div>

//         {/* Controls */}
//         <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//           <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
//             <div className="flex-1 w-full">
//               <input
//                 type="text"
//                 placeholder="Search by name or enrollment number..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
//               />
//             </div>
//             <div className="flex gap-4">
//               <select
//                 value={sortBy}
//                 onChange={(e) => setSortBy(e.target.value)}
//                 className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
//               >
//                 <option value="name">Sort by Name</option>
//                 <option value="enrl">Sort by Enrollment</option>
//                 <option value="pilgrims">Sort by Pilgrims</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Partners Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
//           {filteredPartners.map((partner) => (
//             <div
//               key={partner.enrl}
//               className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-green-100 overflow-hidden"
//             >
//               {/* Logo Section */}
//               <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 flex items-center justify-center h-32">
//                 <div className="relative w-20 h-20 bg-white rounded-xl shadow-md p-2">
//                   <Image
//                     src={partner.logo}
//                     alt={partner.name}
//                     fill
//                     className="object-contain p-1"
//                     onError={(e) => {
//                       e.currentTarget.src = "/partners/placeholder-logo.png";
//                     }}
//                   />
//                 </div>
//               </div>

//               {/* Details Section */}
//               <div className="p-6">
//                 <h3 className="font-bold text-lg text-green-800 mb-2 line-clamp-2 h-14">
//                   {partner.name}
//                 </h3>
                
//                 <div className="space-y-3">
//                   <div className="flex justify-between items-center">
//                     <span className="text-sm font-medium text-gray-600">Enrollment #</span>
//                     <span className="font-bold text-green-700">{partner.enrl}</span>
//                   </div>
                  
//                   <div className="flex justify-between items-center">
//                     <span className="text-sm font-medium text-gray-600">Pilgrims</span>
//                     <span className="font-bold text-amber-600 text-lg">{partner.pilgrims}</span>
//                   </div>
//                 </div>

//                 {/* Status Badge */}
//                 <div className="mt-4 pt-4 border-t border-gray-100">
//                   <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
//                     partner.pilgrims >= 100 
//                       ? "bg-green-100 text-green-800" 
//                       : partner.pilgrims >= 50 
//                       ? "bg-amber-100 text-amber-800"
//                       : "bg-blue-100 text-blue-800"
//                   }`}>
//                     {partner.pilgrims >= 100 ? "Premium Partner" : 
//                      partner.pilgrims >= 50 ? "Gold Partner" : "Standard Partner"}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Summary Stats */}
//         <div className="bg-white rounded-2xl shadow-lg p-8">
//           <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">Partnership Summary</h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="text-center p-4">
//               <div className="text-3xl font-bold text-green-600 mb-2">{partnersData.length}</div>
//               <div className="text-gray-600">Total Partners</div>
//             </div>
//             <div className="text-center p-4">
//               <div className="text-3xl font-bold text-amber-600 mb-2">
//                 {Math.max(...partnersData.map(p => p.pilgrims))}
//               </div>
//               <div className="text-gray-600">Max Pilgrims (Single Partner)</div>
//             </div>
//             <div className="text-center p-4">
//               <div className="text-3xl font-bold text-blue-600 mb-2">
//                 {Math.round(totalPilgrims / partnersData.length)}
//               </div>
//               <div className="text-gray-600">Average per Partner</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Partner data with enrollment numbers and pilgrim counts
const partnersData = [
  { enrl: 4171, name: "PIRWANI HAJJ GROUP (PVT) LTD.", pilgrims: 80, logo: "/partners/pirwani.png" },
  { enrl: 4127, name: "KARWAN-E-RAMZANI (PVT) LTD.", pilgrims: 80, logo: "/partners/karramzani.png" },
  { enrl: 4128, name: "MAJMU-E-RAMZANI (PVT) LTD.", pilgrims: 147, logo: "/partners/majramzani.png" },
  { enrl: 4272, name: "KARWAN-E-REHMANI TOURS AND TRA", pilgrims: 63, logo: "/partners/rehmani.png" },
  { enrl: 2263, name: "AL SAJIDEEN TRAVELS & TOURS (PVT) LTD", pilgrims: 32, logo: "/partners/sajideen.png" },
  { enrl: 4151, name: "AL TAYABA TRAVELS & TOURS (PVT) LTD", pilgrims: 90, logo: "/partners/tayyaba.png" },
  { enrl: 4153, name: "HUJAJ-AL-ANSAR HAJJ & UMRAH TOURS (PVT) LTD", pilgrims: 80, logo: "/partners/hujajulansar.png" },
  { enrl: 4156, name: "AROMA TRAVEL SERVICES (PVT) LTD", pilgrims: 176, logo: "/partners/aroma.png" },
  { enrl: 4337, name: "AROMA AVIATION (PVT) LTD", pilgrims: 32, logo: "/partners/aviation.png" },
  { enrl: 4157, name: "AL SYED TRAVELS (PVT) LTD", pilgrims: 147, logo: "/partners/alsyed.png" },
  { enrl: 4343, name: "KHIZER TRAVELS (PVT) LTD", pilgrims: 32, logo: "/partners/khizer.png" },
  { enrl: 4330, name: "CITI TRAVELS (PVT) LTD", pilgrims: 32, logo: "/partners/citi.png" },
  { enrl: 4327, name: "SUPER TRAVELS (PVT) LTD", pilgrims: 32, logo: "/partners/super.png" },
  { enrl: 4291, name: "BUKHARI TOURS (PVT) LTD", pilgrims: 32, logo: "/partners/buktour.png" },
  { enrl: 4307, name: "BUKHARI ASSOCIATE (PVT) LTD", pilgrims: 32, logo: "/partners/bukasso.png" },
  { enrl: 4306, name: "BUKHARI & SONS (PVT) LTD", pilgrims: 32, logo: "/partners/buksons.png" },
  { enrl: 3313, name: "TRAVEL SHOP (PVT) LTD HAJJ UNIRAII TRAVEL & TOUR SERVICES", pilgrims: 32, logo: "/partners/travshop.png" },
  { enrl: 4168, name: "FAIZAN E NOORI INTERNATIONAL (PVT) LTD.", pilgrims: 75, logo: "/partners/FaizanNoori.png" },
  { enrl: 4325, name: "RAZA E NOOR (PVT) LTD.", pilgrims: 32, logo: "/partners/razanoor.png" },
  { enrl: 4365, name: "KARWAN E ZIA E NOORI INTERNATIONAL (PVT) LTD.", pilgrims: 32, logo: "/partners/ziaenoori.png" },
  { enrl: 4219, name: "KARWAN E MUSTAFAI (PVT) LTD.", pilgrims: 75, logo: "/partners/mustafai.png" },
  { enrl: 4386, name: "KARWAN E SURIYA HAJJ & UMRAH (PVT) LTD.", pilgrims: 32, logo: "/partners/suriya.png" },
  { enrl: 4210, name: "TAIR E HARAM INTERNATIONAL (PVT) LTD.", pilgrims: 90, logo: "/partners/haram.png" },
  { enrl: 4284, name: "MOIN UL HUJJAJ HAJJ & UMRAH (PVT) LTD.", pilgrims: 63, logo: "/partners/moin.png" },
  { enrl: 4212, name: "KARWAN E MAKKAH MADINA (PVT) LTD", pilgrims: 80, logo: "/partners/kmm.png" },
  { enrl: 4152, name: "AL RASHEDIN HAJJ & UMRAH SERVCES (PVT) LTD.", pilgrims: 80, logo: "/partners/rashidien.png" },
  { enrl: 4378, name: "KARWAN E MALIK (PVT) LTD.", pilgrims: 32, logo: "/partners/malik.png" },
  { enrl: 4268, name: "NEW INTL KARWAN E ARFAT (PVT) LTD.", pilgrims: 66, logo: "/partners/arfat.png" },
  { enrl: 4393, name: "KARWAN E MEEZAB REHMAN (PVT) LTD.", pilgrims: 32, logo: "/partners/KMeezab.png" },
  { enrl: 4193, name: "KARWAN E AMJADIA HAJJ & UMRAH SERVICES (PVT) LTD.", pilgrims: 80, logo: "/partners/karwan.png" },
  { enrl: 4218, name: "MUAWIN UL HUJJAJ (PVT) LTD.", pilgrims: 90, logo: "/partners/muawin.png" },
  { enrl: 4201, name: "SAKHI WAHAB HAJJ COMPANY (PVT) LTD.", pilgrims: 80, logo: "/partners/sakhi.png" },
  { enrl: 4126, name: "AL MOAZZIN HAJJ & UMRAH SERVICES (PVT) LTD.", pilgrims: 147, logo: "/partners/moazzin.png" },
  { enrl: 4154, name: "KARWAN E RFIQUL HARMAIN (PVT) LTD.", pilgrims: 80, logo: "/partners/rafeeq.png" },
  { enrl: 4140, name: "KARWAN E AHL E SUNNAT TRAVELS & TOURS (PVT) LTD.", pilgrims: 90, logo: "/partners/ahlesunnat.png" },
];

export default function Partners() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("Default");

  // Calculate total pilgrims
  const totalPilgrims = partnersData.reduce((sum, partner) => sum + partner.pilgrims, 0);

  // Filter and sort partners
  const filteredPartners = partnersData
    .filter(partner => 
      partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.enrl.toString().includes(searchTerm)
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "enrl":
          return a.enrl - b.enrl;
        case "pilgrims":
          return b.pilgrims - a.pilgrims;
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Our Trusted Partners
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Working together to make your spiritual journey to the Holy Lands memorable and comfortable
          </p>
        </div>

        {/* Total Pilgrims Card */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl shadow-2xl p-8 mb-8 text-center text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Total Pilgrims to Serve in Hajj 2026</h2>
              <p className="text-green-100">Across all our partner organizations</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 min-w-[200px]">
              <div className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
                {totalPilgrims.toLocaleString()}
              </div>
              <p className="text-green-100 mt-2">Blessed Journeys</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="flex-1 w-full">
              <input
                type="text"
                placeholder="Search by name or enrollment number..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="default">Default Sort</option>
                <option value="name">Sort by Name</option>
                <option value="enrl">Sort by Enrollment</option>
                <option value="pilgrims">Sort by Pilgrims</option>
              </select>
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredPartners.map((partner) => (
            <div
              key={partner.enrl}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-green-100 overflow-hidden"
            >
              {/* Logo Section - Larger Image */}
              <div className="bg-white p-1 flex items-center justify-center h-40">
                <div className="relative w-full h-full ">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                    // style={{ width: '75%', height: '75%' }}
                    onError={(e) => {
                      e.currentTarget.src = "/partners/placeholder-logo.png";
                    }}
                  />
                </div>
              </div>

              {/* Details Section */}
              <div className="p-6 bg-amber-50">
                <h3 className="font-bold text-lg text-green-800 mb-3 line-clamp-2 h-14">
                  {partner.name}
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Enrollment #</span>
                    <span className="font-bold text-green-700">{partner.enrl}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Pilgrims</span>
                    <span className="font-bold text-amber-600 text-lg">{partner.pilgrims}</span>
                  </div>
                </div>
                <Link href={'#'}>
                <div className="bg-gradient-to-l from-gray-500 to-gray-700 text-white text-lg text-center rounded-full w-full mt-2 py-2">
                  Show Hajj Packages

                </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">Partnership Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-green-600 mb-2">{partnersData.length}</div>
              <div className="text-gray-600">Total Partners</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-amber-600 mb-2">
                {Math.max(...partnersData.map(p => p.pilgrims))}
              </div>
              <div className="text-gray-600">Max Pilgrims</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {Math.round(totalPilgrims / partnersData.length)}
              </div>
              <div className="text-gray-600">Average per Partner</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}