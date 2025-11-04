import Link from "next/link";
import {
  Users,
  Star,
  Shield,
  Award,
  Package,
  Heart,
  Calendar,
} from "lucide-react";

export default function HomeSection() {
  const stats = [
    {
      icon: <Shield className="w-8 h-8" />,
      value: "0413",
      label: "Ministry Registration No.",
      description: "Fully Registered & Approved",
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "35+",
      label: "Trusted Partners",
      description: "Dependent Hajj Companies",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      value: "2,407",
      label: "Pilgrims to Serve",
      description: "Blessed Journeys Completed",
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "Expert",
      label: "Team Members",
      description: "Professional & Experienced",
    },
  ];

  const features = [
    {
      icon: <Package className="w-6 h-6" />,
      title: "Wide Range of Packages",
      description: "From Short to Long Stay & Economy to Premium options",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Premium Services",
      description: "Luxury accommodations & VIP treatment available",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Flexible Durations",
      description: "Tailored packages for every schedule and budget",
    },
  ];

  const quickLinks = [
    {
      title: "Hajj Packages",
      description: "Explore our comprehensive Hajj packages",
      href: "/packages",
      bgGradient: "from-green-600 to-emerald-700",
      textColor: "text-white",
      icon: "🕋",
    },
    {
      title: "Our Partners",
      description: "Meet our trusted partner network",
      href: "/partners",
      bgGradient: "from-amber-500 to-yellow-500",
      textColor: "text-white",
      icon: "🤝",
    },
    {
      title: "Contact Us",
      description: "Get in touch for spiritual guidance",
      href: "/contact",
      bgGradient: "from-blue-600 to-cyan-600",
      textColor: "text-white",
      icon: "📞",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-green-50 to-emerald-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section with SEO Optimization */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6 leading-tight">
            As Salam Munazzam
            <span className="block text-2xl md:text-3xl text-emerald-600 mt-2 font-light">
              (Private) Limited
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Your Trusted Partner for Spiritual Journeys to the Holy Lands -
            Making Hajj & Umrah Experiences Memorable Since Inception
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-6 text-center transform hover:scale-105 transition-all duration-300 border border-green-100"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-green-700 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-800 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Company Description with Features
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16 border border-green-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
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
                <strong>Hajj operations for the year 2026 (1447 A.H.)</strong>,
                with a sanctioned allocation of <strong>2,407 pilgrims</strong>,
                in accordance with the{" "}
                <strong>Service Providers’ Agreement (SPA-2026)</strong>.
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
                a well-recognized name in Pakistan’s Hajj and Umrah sector. With{" "}
                <strong>decades of proven experience</strong> in managing,
                organizing, and facilitating large-scale pilgrimage operations,
                Mr. Pirwani brings exceptional leadership and operational
                expertise to ensure smooth and spiritually fulfilling
                experiences for the pilgrims.
                <br />
                <br />
                Supported by a network of{" "}
                <strong>
                  35 Designated Hajj Companies (DHCs) and trusted partners
                </strong>
                , As Salam Munazzam (Pvt.) Ltd. stands as a{" "}
                <strong>symbol of trust, excellence, and dedication</strong>
                in serving the Guests of Allah. The company remains committed to
                providing a{" "}
                <strong>
                  comfortable, well-coordinated, and spiritually enriching
                  journey
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

            <div className="relative">
              <div className="bg-gradient-to-br from-green-500 to-emerald-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Government Approved & Registered</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Extensive Network of Trusted Partners</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Experienced Expert Team</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Comprehensive Package Options</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Personalized Spiritual Guidance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16 border border-green-200 relative overflow-hidden">
  <div className="relative">
    {/* Main Content */}
    <div className="pr-0 lg:pr-80">
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
    <div className="lg:absolute lg:top-1/2 lg:right-8 lg:transform lg:-translate-y-1/2 lg:w-72 mt-8 lg:mt-0">
      <div className="bg-gradient-to-br from-green-500 to-emerald-700 rounded-2xl p-6 text-white shadow-xl">
        <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
        <ul className="space-y-3 text-lg">
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
      </div>
    </div>
  </div>
</div>

        {/* Quick Links Grid */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">
            Explore Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickLinks.map((link, index) => (
              <Link key={index} href={link.href} className="group block">
                <div
                  className={`bg-gradient-to-r ${link.bgGradient} rounded-2xl p-8 h-full transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl ${link.textColor} text-center`}
                >
                  <div className="text-4xl mb-4">{link.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{link.title}</h3>
                  <p className="opacity-90 text-lg">{link.description}</p>
                  <div className="mt-4 inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                    <span className="font-semibold">Explore Now</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* SEO Optimized Bottom Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready for Your Spiritual Journey?
          </h2>
          <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied pilgrims who have trusted As Salam
            Munazzam for their Hajj and Umrah journeys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/packages"
              className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              View Hajj Packages
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-green-700 transition-all duration-200"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
