"use client";
import { useState } from "react";
import Image from "next/image";
import { 
 
  Phone, 
  MapPin, 
  User, 
  FileText, 
  Download,
  ZoomIn,
  Share2,
  Globe,
  Award,
  BadgeCheck
} from "lucide-react";
import { Partner } from "@/types/partners";

interface PartnerDetailClientProps {
  partnerData: Partner;
}

export default function PartnerDetailClient({ partnerData }: PartnerDetailClientProps) {
  const [selectedBrochure, setSelectedBrochure] = useState<string | null>(null);
  const packageBrochures = partnerData.packageBrochures;

  const downloadBrochure = (imageUrl: string, title: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${title.replace(/\s+/g, '_')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const sharePartner = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: partnerData.name,
          text: `Check out ${partnerData.name} - Hajj Packages 2026`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Partner Header Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-green-100">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
            
            {/* Logo Section */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative w-48 h-48 bg-white rounded-2xl shadow-lg p-4 border border-green-200">
                <Image
                  src={partnerData.logo}
                  alt={partnerData.name}
                  fill
                  className="object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "/partners/placeholder-logo.png";
                  }}
                />
              </div>
            </div>

            {/* Partner Info */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-2">
                    {partnerData.name}
                  </h1>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold text-sm">
                      Enrollment #: {partnerData.enrl}
                    </span>
                    <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-semibold text-sm">
                      {partnerData.pilgrims} Pilgrims
                    </span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold text-sm">
                      DTS: {partnerData.dtsLicenceNo}
                    </span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-semibold text-sm">
                      IATA: {partnerData.iataNo}
                    </span>
                  </div>
                </div>
                <button
                  onClick={sharePartner}
                  className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>

              {/* Contact Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Contact Person</p>
                      <p className="font-semibold text-gray-800">{partnerData.contactPerson}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-50 rounded-lg text-green-600">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Contact Number</p>
                      <a 
                        href={`tel:${partnerData.contactNumber}`}
                        className="font-semibold text-gray-800 hover:text-green-700 transition-colors"
                      >
                        {partnerData.contactNumber}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Website</p>
                      <a 
                        href={`https://${partnerData.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-gray-800 hover:text-green-700 transition-colors"
                      >
                        {partnerData.website}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Office Address</p>
                      <p className="font-semibold text-gray-800">{partnerData.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-red-50 rounded-lg text-red-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email Address</p>
                      <a 
                        href={`mailto:${partnerData.email}`}
                        className="font-semibold text-gray-800 hover:text-green-700 transition-colors"
                      >
                        {partnerData.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                      <BadgeCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Accreditations</p>
                      <p className="font-semibold text-gray-800">MORA Approved</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-6 text-white text-center">
            <FileText className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">{packageBrochures.length}</div>
            <div className="text-green-100">Available Packages</div>
          </div>
          <div className="bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl p-6 text-white text-center">
            <User className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">{partnerData.pilgrims}</div>
            <div className="text-amber-100">Pilgrims Capacity</div>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-white text-center">
            <Award className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">{partnerData.enrl}</div>
            <div className="text-blue-100">Enrollment No.</div>
          </div>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white text-center">
            <BadgeCheck className="w-8 h-8 mx-auto mb-2" />
            <div className="text-lg font-bold">{partnerData.iataNo}</div>
            <div className="text-purple-100">IATA Certified</div>
          </div>
        </div>

        {/* Hajj Packages Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800">
              Hajj Packages 2026
            </h2>
            <p className="text-gray-600">
              {packageBrochures.length} packages available
            </p>
          </div>

          {packageBrochures.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packageBrochures.map((brochure) => (
                <div
                  key={brochure.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-green-100 overflow-hidden"
                >
                  {/* Brochure Image */}
                  <div 
                    className="relative h-48 bg-gray-100 cursor-pointer group"
                    onClick={() => setSelectedBrochure(brochure.image)}
                  >
                    <Image
                      src={brochure.image}
                      alt={brochure.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Overlay Actions */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex space-x-3">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedBrochure(brochure.image);
                          }}
                          className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transition-all duration-200 transform hover:scale-110"
                        >
                          <ZoomIn className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            downloadBrochure(brochure.image, brochure.title);
                          }}
                          className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transition-all duration-200 transform hover:scale-110"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Brochure Info */}
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-green-800 mb-2 line-clamp-2">
                      {brochure.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {brochure.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => setSelectedBrochure(brochure.image)}
                        className="flex items-center space-x-1 text-green-600 hover:text-green-700 font-semibold text-sm transition-colors"
                      >
                        <ZoomIn className="w-4 h-4" />
                        <span>View Brochure</span>
                      </button>
                      <button
                        onClick={() => downloadBrochure(brochure.image, brochure.title)}
                        className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 text-sm transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-green-100">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Packages Available</h3>
              <p className="text-gray-500">Packages will be announced soon</p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Interested in {partnerData.name} Packages?</h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Contact {partnerData.contactPerson} directly for detailed information and personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${partnerData.contactNumber}`}
              className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Call Now
            </a>
            <a
              href={`mailto:${partnerData.email}`}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-green-700 transition-all duration-200"
            >
              Send Email
            </a>
            {partnerData.website && (
              <a
                href={`https://${partnerData.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-green-700 transition-all duration-200"
              >
                Visit Website
              </a>
            )}
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
                alt="Brochure preview"
                width={800}
                height={1000}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <button
                onClick={() => {
                  const brochure = packageBrochures.find(b => b.image === selectedBrochure);
                  if (brochure) {
                    downloadBrochure(selectedBrochure, brochure.title);
                  }
                }}
                className="bg-white text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}