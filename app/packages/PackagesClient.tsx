
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Search, 
  Filter, 
  Download, 
  ZoomIn, 
  Star, 
  Users,
  MapPin,
  Calendar,
  Hotel,
  Plane,
  Heart
} from "lucide-react";
import { partnersData } from "@/data/partners";
import { PackageBrochure, Partner } from "@/types/partners";

// HD Placeholder images for Kaaba and Madinah
const holyImages = [
  "/pkg-1.webp",
  "/madinah-1.jpg", 
  "/kaaba-p3.jpg",
  "/madinah-2.jpg"
];

export default function Packages() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPartner, setSelectedPartner] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");
  const [selectedBrochure, setSelectedBrochure] = useState<string | null>(null);

  // Get all packages from all partners
  const allPackages: (PackageBrochure & { partner: Partner })[] = partnersData.flatMap(partner =>
    partner.packageBrochures.map(brochure => ({
      ...brochure,
      partner
    }))
  );

  // Get unique partners for filter
  const uniquePartners = Array.from(new Set(partnersData.map(p => p.name)));

  // Filter packages
  const filteredPackages = allPackages.filter(pkg => {
    const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pkg.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pkg.partner.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPartner = selectedPartner === "all" || pkg.partner.name === selectedPartner;
    const matchesPrice = priceRange === "all" || true; // Add price logic when available

    return matchesSearch && matchesPartner && matchesPrice;
  });

  const downloadBrochure = (imageUrl: string, title: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${title.replace(/\s+/g, '_')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Stats
  const totalPackages = allPackages.length;
  const totalPartners = uniquePartners.length;
  const averagePackagesPerPartner = Math.round(totalPackages / partnersData.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8 md:py-6">
      {/* Hero Section with Kaaba Image */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src={holyImages[0]}
          alt="Beautiful view of Kaaba"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Hajj Packages 2026
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto drop-shadow-lg">
              Discover the Perfect Spiritual Journey from Our Trusted Partners
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4 -mt-16 relative z-10">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center border border-green-100 transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Hotel className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-green-700">{totalPackages}</div>
            <div className="text-gray-600">Total Packages</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center border border-green-100 transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-amber-600">{totalPartners}</div>
            <div className="text-gray-600">Trusted Partners</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center border border-green-100 transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-purple-600">2026</div>
            <div className="text-gray-600">Hajj Season</div>
          </div>
        </div>

        {/* Madinah Image Section */}
        <div className="relative rounded-2xl overflow-hidden mb-8 h-48">
          <Image
            src={holyImages[1]}
            alt="Beautiful view of Madinah"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="text-white p-8 max-w-md">
              <h2 className="text-2xl font-bold mb-2">Spiritual Journey Awaits</h2>
              <p className="opacity-90">Visit the Holy Cities with Comfort and Peace</p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-green-100">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search packages, partners..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Partner Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedPartner}
                onChange={(e) => setSelectedPartner(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="all">All Partners</option>
                {uniquePartners.map(partner => (
                  <option key={partner} value={partner}>{partner}</option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">💰</span>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="all">All Price Ranges</option>
                <option value="economy">Economy</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
                <option value="vip">VIP</option>
              </select>
            </div>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800">
              Available Hajj Packages
            </h2>
            <p className="text-gray-600">
              Showing {filteredPackages.length} of {totalPackages} packages
            </p>
          </div>

          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPackages.map((pkg) => (
                <div
                  key={`${pkg.partner.enrl}-${pkg.id}`}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-green-100 overflow-hidden group"
                >
                  {/* Package Image */}
                  <div 
                    className="relative h-48 bg-gray-100 cursor-pointer"
                    onClick={() => setSelectedBrochure(pkg.image)}
                  >
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Partner Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {pkg.partner.shortName}
                      </span>
                    </div>

                    {/* Overlay Actions */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex space-x-3">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedBrochure(pkg.image);
                          }}
                          className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transition-all duration-200 transform hover:scale-110"
                        >
                          <ZoomIn className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            downloadBrochure(pkg.image, pkg.title);
                          }}
                          className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transition-all duration-200 transform hover:scale-110"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Package Info */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {pkg.partner.enrl}
                      </span>
                      <div className="flex items-center space-x-1 text-amber-500">
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                      </div>
                    </div>

                    <h3 className="font-bold text-lg text-green-800 mb-2 line-clamp-2 h-14">
                      {pkg.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {pkg.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{pkg.partner.pilgrims} pilgrims</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>Makkah & Madinah</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                      <Link
                        href={`/partners/${encodeURIComponent(pkg.partner.name)}`}
                        className="text-green-600 hover:text-green-700 font-semibold text-sm transition-colors"
                      >
                        View Partner
                      </Link>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setSelectedBrochure(pkg.image)}
                          className="text-green-600 hover:text-green-700 text-sm transition-colors"
                        >
                          View
                        </button>
                        <button
                          onClick={() => downloadBrochure(pkg.image, pkg.title)}
                          className="text-gray-600 hover:text-gray-800 text-sm transition-colors"
                        >
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-green-100">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Packages Found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search criteria</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedPartner("all");
                  setPriceRange("all");
                }}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Second Holy Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="relative rounded-2xl overflow-hidden h-64">
            <Image
              src={holyImages[2]}
              alt="Kaaba during prayer"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end">
              <div className="text-white p-6">
                <h3 className="text-xl font-bold mb-1">Makkah Packages</h3>
                <p className="opacity-90">Stay near Haram with premium accommodations</p>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden h-64">
            <Image
              src={holyImages[3]}
              alt="Madinah at night"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end">
              <div className="text-white p-6">
                <h3 className="text-xl font-bold mb-1">Madinah Stays</h3>
                <p className="opacity-90">Comfortable hotels near Masjid an-Nabawi</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Our expert team is here to help you find the perfect Hajj package for your spiritual journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/partners"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-green-700 transition-all duration-200"
            >
              View All Partners
            </Link>
          </div>
        </div>
      </div>

      {/* Brochure Modal */}
      {selectedBrochure && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedBrochure(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedBrochure(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors text-2xl"
            >
              ×
            </button>
            <div className="relative w-full h-full">
              <Image
                src={selectedBrochure}
                alt="Package brochure"
                width={800}
                height={1000}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <button
                onClick={() => downloadBrochure(selectedBrochure, "Package Brochure")}
                className="bg-white text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Brochure</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}