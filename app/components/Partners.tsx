import Image from "next/image";

const partners = [
  {
    id: 1,
    name: 'Aroma Travel',
    logo: '/partners/aroma.png',
  },
  {
    id: 2,
    name: 'Bukhari Travel',
    logo: '/partners/bukhari.png',
  },
  {
    id: 3,
    name: 'Al Syed Travel',
    logo: '/partners/alsyed.png',
  },
  {
    id: 4,
    name: 'Hujaj-ul-Ansar',
    logo: '/partners/hujajulansar.png',
  },
  {
    id: 5,
    name: 'Khizer Travel',
    logo: '/partners/khizer.png',
  },
  {
    id: 6,
    name: 'Citi Travel',
    logo: '/partners/citi.png',
  },
  {
    id: 7,
    name: 'Super Travel',
    logo: '/partners/super.png',
  },
  {
    id: 8,
    name: 'Al Tayyaba Tours',
    logo: '/partners/altaybah.png',
  },
];

export default function Partners() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cluster of leading organizations to provide you with the best Hajj experience
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          {/* Marquee Wrapper */}
          <div className="flex animate-marquee">
            {/* First Set */}
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="flex-shrink-0 mx-8 group"
              >
                <div className="bg-white rounded-xl p-2 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-gray-200">
                  {/* Logo Container - No padding, full size */}
                  <div className="w-40 h-20 relative">
                    <Image 
                      src={partner.logo} 
                      alt={partner.name}
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate Set for Seamless Loop */}
            {partners.map((partner) => (
              <div
                key={`duplicate-${partner.id}`}
                className="flex-shrink-0 mx-8 group"
              >
                <div className="bg-white rounded-xl p-2 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-gray-200">
                  {/* Logo Container - No padding, full size */}
                  <div className="w-40 h-20 relative">
                    <Image 
                      src={partner.logo} 
                      alt={partner.name}
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}