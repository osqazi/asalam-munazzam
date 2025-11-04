"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { partnersData } from "@/data/partners";


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
                <Link href={`/partners/${partner.slug}`}>
                <div className="bg-gradient-to-l from-gray-500 to-gray-700 text-white text-lg text-center rounded-full w-full mt-2 py-2">
                  Show Detail & Packages

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