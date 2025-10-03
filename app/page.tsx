import Header from '../app/components/Header';
import PackageCard from '../app/components/PackageCard';
import { packages } from '../data/packages';
import Partners from './components/Partners';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Choose Your Perfect Hajj Package
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Select from our carefully curated Hajj packages designed to provide you with 
            the most comfortable and spiritually fulfilling journey to the Holy Lands.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} package={pkg} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready for Your Spiritual Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us today to book your Hajj package and begin your once-in-a-lifetime journey.
            </p>
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Contact Us Now
            </button>
          </div>
        </div>
      </main>
      <div>
        <Partners/>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-xl font-bold mb-2">As-Salam (Private) Limited. - Hajj Munazzam</h4>
          <p className="text-gray-400">Hajj 2026 Packages - Your Trusted Partner in Spiritual Journey</p>
          <p className="text-gray-300 text-sm mt-4">Developed by: MetaLog Inc. © - 2025-26 - All rights reserved.</p>
          <p className="text-gray-300 text-sm mt-4">Developer's Contact/Whatsapp: +92-335-3221003 </p>
        </div>
      </footer>
    </div>
  );
}