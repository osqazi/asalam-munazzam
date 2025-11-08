import { useState } from 'react';

const CertificateSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsZoomed(false);
    document.body.style.overflow = 'unset'; // Re-enable scrolling
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16 border border-green-200 overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-[url('/mak.webp')] bg-cover bg-center opacity-25"
        aria-hidden="true"
      ></div>

      {/* Overlay content */}
      <div className="relative">
        {/* Main Content */}
        <div className="pr-0 lg:pr-[500px]">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
            Your Spiritual Journey, Our Sacred Responsibility
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            <strong>As Salam Munazzam (Private) Limited</strong> is a duly
            registered Hajj Organizing Company with the{" "}
            <strong>
              Government of Pakistan, Ministry of Religious Affairs and
              Interfaith Harmony
            </strong>
            , under <strong>MORA Registration No. 0413</strong>.
            <br />
            <br />
            The company is officially authorized to organize and manage
            <strong> Hajj operations for the year 2026 (1447 A.H.)</strong>,
            with a sanctioned allocation of <strong>2,407 pilgrims</strong>,
            in accordance with the{" "}
            <strong>Service Providers' Agreement (SPA-2026)</strong>.
            <br />
            <br />
            Representing the company as its{" "}
            <strong>Designated Person</strong>,
            <strong>Mr. Muhammad Yousuf Pirwani</strong> (Passport No.{" "}
            <strong>AD3993175</strong>) is authorized to sign and execute
            all related contracts in
            <strong>Makkah Mukarramah</strong> and{" "}
            <strong>Madinah Munawwarah</strong>. He is the esteemed{" "}
            <strong>Owner of Pirwani Hajj Group (Private) Limited</strong>,
            a well-recognized name in Pakistan's Hajj and Umrah sector. With{" "}
            <strong>decades of proven experience</strong> in managing,
            organizing, and facilitating large-scale pilgrimage operations,
            Mr. Pirwani brings exceptional leadership and operational
            expertise to ensure smooth and spiritually fulfilling
            experiences for the pilgrims.
            <br />
            <br />
            Supported by a network of{" "}
            <strong>
              35 Designated Hajj Companies (DHCs) / Trusted Partners
            </strong>
            , As Salam Munazzam (Pvt.) Ltd. stands as a{" "}
            <strong>symbol of trust, excellence, and dedication</strong>
            in serving the Guests of Allah. The company remains committed to
            providing a{" "}
            <strong>
              comfortable, well-coordinated, and spiritually enriching
              journey{" "}
            </strong>
            for all its pilgrims — <strong>Insha-Allah</strong>.
          </p>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="p-2 bg-green-100 rounded-lg text-green-600 mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-green-800 text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us - Floating Container */}
        <div className="lg:absolute lg:top-8 lg:right-8 lg:w-96 mt-8 lg:mt-0">
          <div className="bg-gradient-to-br from-green-500 to-emerald-700 rounded-2xl p-6 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
            <ul className="space-y-3 text-lg mb-6">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span>Government Approved & Registered</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span>Extensive Network of Trusted Partners</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span>Experienced Expert Team</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span>Comprehensive Package Options</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span>Personalized Spiritual Guidance</span>
              </li>
            </ul>
            
            {/* Certificate Section - Enhanced Size */}
            <div className="border-t border-green-300 pt-6">
              <h4 className="font-bold text-xl mb-4 text-center text-white bg-green-600 py-2 rounded-lg">
                Official Certificate of Incorporation
              </h4>
              <div className="bg-white rounded-xl p-4 shadow-lg border-2 border-green-300">
                <img 
                  src="/certificate.webp" 
                  alt="Certificate of Incorporation for As Salam Munazzam Private Ltd - Government Registered Hajj Organizing Company"
                  className="w-full h-auto rounded-lg object-contain max-h-80 transition-transform duration-300 cursor-zoom-in hover:shadow-lg"
                  onClick={openModal}
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-green-100 text-base font-medium">
                  MORA Registration No. 0413
                </p>
                <p className="text-green-200 text-sm mt-1">
                  Authorized by Government of Pakistan
                </p>
                <button 
                  onClick={openModal}
                  className="mt-3 bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  View Full Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-green-700 text-white">
              <h3 className="text-2xl font-bold">
                Certificate of Incorporation - As Salam Munazzam (Private) Limited
              </h3>
              <div className="flex space-x-2">
                <button
                  onClick={toggleZoom}
                  className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  {isZoomed ? 'Zoom Out' : 'Zoom In'}
                </button>
                <button
                  onClick={closeModal}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors ml-2"
                >
                  Close
                </button>
              </div>
            </div>

            {/* Modal Body with Certificate */}
            <div className="flex-1 overflow-auto p-4 bg-gray-100">
              <div className={`bg-white p-4 rounded-lg shadow-inner ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}>
                <img 
                  src="/certificate.webp" 
                  alt="Certificate of Incorporation for As Salam Munazzam Private Ltd - Government Registered Hajj Organizing Company"
                  className={`mx-auto rounded-lg transition-all duration-300 ${
                    isZoomed 
                      ? 'max-w-none w-auto h-auto cursor-zoom-out' 
                      : 'max-w-full h-auto cursor-zoom-in'
                  }`}
                  onClick={toggleZoom}
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-gray-200 bg-gray-50 text-center">
              <p className="text-gray-600">
                <strong>MORA Registration No. 0413</strong> • Government of Pakistan Approved
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Click on the certificate to zoom in/out • Use the buttons above for controls
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Sample features array (you can replace with your actual data)
const features = [
  {
    icon: "✓",
    title: "Government Registered",
    description: "Fully authorized by Ministry of Religious Affairs"
  },
  {
    icon: "✓", 
    title: "Experienced Team",
    description: "Decades of proven expertise in Hajj operations"
  },
  {
    icon: "✓",
    title: "Comprehensive Support",
    description: "End-to-end guidance throughout your spiritual journey"
  }
];

export default CertificateSection;