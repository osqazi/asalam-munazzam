import { packages } from '@/data/packages';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Check, 
  X, 
  Building2, 
  Plane, 
  Utensils, 
  FileText, 
  Bus,
  Star,
  Clock,
  Users
} from 'lucide-react';

interface PackageDetailProps {
  params: {
    id: string;
  };
}

export default function PackageDetail({ params }: PackageDetailProps) {
  const packageId = parseInt(params.id);
  const pkg = packages.find(p => p.id === packageId);

  if (!pkg) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-2xl">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center space-x-2 hover:text-amber-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Packages</span>
            </Link>
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold">As Salam Munazzam</h1>
              <p className="text-lg opacity-90">Hajj 2026</p>
            </div>
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Package Header */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {pkg.packageType}
                </span>
                <div className="flex items-center text-amber-600">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">{pkg.duration}</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {pkg.packageName}
              </h1>
              
              {/* Hotels */}
              <div className="grid md:grid-cols-3 gap-3 mb-6">
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <Building2 className="w-5 h-5 text-amber-800" />
                  <div>
                    <p className="text-sm text-gray-600">Maktab</p>
                    <p className="font-semibold text-gray-800">{pkg.maktab}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <Building2 className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-600">Makkah Hotel</p>
                    <p className="font-semibold text-gray-800">{pkg.makkahHotel}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <Building2 className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Medinah Hotel</p>
                    <p className="font-semibold text-gray-800">{pkg.medinahHotel}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Starting Price */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-6 rounded-2xl text-center min-w-64">
              <p className="text-sm opacity-90 mb-2">Starting From</p>
              <p className="text-3xl font-bold mb-2">{pkg.sharingRoomPrice}</p>
              <p className="text-sm opacity-90">Per Person</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Pricing Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Users className="w-6 h-6 mr-2 text-green-600" />
              Package Pricing
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <span className="font-semibold text-gray-800">Double Bed Room</span>
                <span className="text-xl font-bold text-green-700">{pkg.doubleBedRoomPrice}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <span className="font-semibold text-gray-800">Triple Bed Room</span>
                <span className="text-xl font-bold text-blue-700">{pkg.tripleBedRoomPrice}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                <span className="font-semibold text-gray-800">Quad Bed Room</span>
                <span className="text-xl font-bold text-amber-700">{pkg.quadBedRoomPrice}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                <span className="font-semibold text-gray-800">Sharing Room</span>
                <span className="text-xl font-bold text-purple-700">{pkg.sharingRoomPrice}</span>
              </div>
            </div>
          </div>

          {/* Inclusions Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Star className="w-6 h-6 mr-2 text-amber-500" />
              Package Inclusions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InclusionItem 
                included={pkg.isAirTicketIncluded} 
                text="Air Ticket Included" 
                icon={<Plane className="w-4 h-4" />}
              />
              <InclusionItem 
                included={pkg.isVisaIncluded} 
                text="Visa Processing" 
                icon={<FileText className="w-4 h-4" />}
              />
              <InclusionItem 
                included={pkg.isMealIncluded} 
                text="Meals Included" 
                icon={<Utensils className="w-4 h-4" />}
              />
              <InclusionItem 
                included={pkg.isBusServiceIncluded} 
                text="Bus Service" 
                icon={<Bus className="w-4 h-4" />}
              />
              <InclusionItem 
                included={pkg.isQurbaniIncluded} 
                text="Qurbani Service" 
                icon={<Star className="w-4 h-4" />}
              />
              <InclusionItem 
                included={pkg.isAziziaStay} 
                text={`Azizia Stay: ${pkg.aziziaPlace}`} 
                icon={<Building2 className="w-4 h-4" />}
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Book This Package?</h3>
            <p className="text-lg mb-6 opacity-90">
              Contact us now to secure your spot for Hajj 2026
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
                Contact Us Now
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function InclusionItem({ included, text, icon }: { included: boolean; text: string; icon: React.ReactNode }) {
  return (
    <div className={`flex items-center space-x-3 p-3 rounded-lg ${
      included ? 'bg-green-50 text-green-800' : 'bg-gray-100 text-gray-500'
    }`}>
      <div className={`p-2 rounded-full ${
        included ? 'bg-green-500 text-white' : 'bg-gray-400 text-white'
      }`}>
        {included ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
      </div>
      <div className="flex items-center space-x-2">
        {icon}
        <span className={`font-medium ${included ? '' : 'line-through'}`}>
          {text}
        </span>
      </div>
    </div>
  );
}