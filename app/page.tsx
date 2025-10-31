import Header from '../app/components/Header';
import PackageCard from '../app/components/PackageCard';
import { packages } from '../data/packages';
import RightToLeftMarquee from './components/LeftToRight';
import Partners from './components/Partners';
import LeftToRightMarquee from './components/RightToLeft';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      {/* Header */}
      <Header />
      {/* <div>
        <Partners/>
      </div> */}
     
<div className='pt-12'>
  <div className="text-center mb-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
             Our Trusted Partners
           </h2>
           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
             Cluster of leading organizations to provide you with the best Hajj experience
           </p>
         </div>
  <RightToLeftMarquee />

  <LeftToRightMarquee />
</div>



      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Choose Your Perfect Hajj 2026 Package
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
      
      
    </div>
  );
}