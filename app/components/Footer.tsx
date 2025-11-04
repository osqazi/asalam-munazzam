// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faWhatsapp, faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faPhone, faEnvelope, faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";
// import Link from 'next/link';
// import Image from 'next/image';
// import logo from '@/public/assalamlogo.png'; // Adjust path as needed

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   const quickLinks = [
//     { name: "Home", href: "/" },
//     { name: "Packages", href: "/packages" },
//     { name: "Partners", href: "/partners" },
//     { name: "Notifications", href: "/notifications" },
//     { name: "Contact Us", href: "/contact" }
//   ];

//   const services = [
//     "Hajj Packages 2026",
//     "Overseas Pakistani Hajj Packages",
//     "Group Hajj Packages",
    
//   ];

//   const contactInfo = [
//     {
//       icon: faPhone,
//       text: "+92-XXX-XXXXXXX",
//       link: "tel:+92XXXXXXXXX"
//     },
//     {
//       icon: faWhatsapp,
//       text: "+92-300-XXXXXXX",
//       link: "https://wa.me/92300XXXXXXX"
//     },
//     {
//       icon: faEnvelope,
//       text: "info@assalamunazzam.com",
//       link: "mailto:info@assalamunazzam.com"
//     },
//     {
//       icon: faMapMarkerAlt,
//       text: "Main Office, Pakistan",
//       link: "#"
//     }
//   ];

//   const socialLinks = [
//     { icon: faFacebook, href: "#", color: "hover:text-blue-400" },
//     { icon: faWhatsapp, href: "https://wa.me/923353221003", color: "hover:text-green-400" },
//     { icon: faInstagram, href: "#", color: "hover:text-pink-400" },
//     { icon: faTwitter, href: "#", color: "hover:text-blue-300" }
//   ];

//   return (
//     <footer className="bg-gradient-to-br from-gray-900 to-green-900 text-white pt-12 pb-6 ">
//       <div className="container mx-auto px-4">
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
//           {/* Company Info */}
//           <div className="lg:col-span-1">
//             <div className="flex items-center space-x-3 mb-4">
//               <div className="w-12 h-12 relative">
//                 <Image
//   src={logo}
//   alt="As Salam Munazzam Logo"
//   fill
//   className="object-contain invert brightness-0"
//   // optional: add contrast-[value] or opacity-[value]
// />

//               </div>
//               <div>
//                 <h3 className="text-xl font-bold">As Salam Munazzam</h3>
//                 <p className="text-green-300 text-sm">(Private) Limited</p>
//               </div>
//             </div>
//             <p className="text-gray-300 mb-4 leading-relaxed ">
//               Your trusted partner for spiritual journeys to the Holy Lands. 
//               Making Hajj & Umrah experiences memorable with comfort and care.
//             </p>
//             <div className="flex items-center text-gray-400 text-sm">
//               {/* <FontAwesomeIcon icon={faClock} className="w-4 h-4 mr-2" /> */}
//               {/* <span>Office Hours: 9:00 AM - 6:00 PM</span> */}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-bold mb-4 text-green-300 border-b border-green-600 pb-2">
//               Quick Links
//             </h4>
//             <ul className="space-y-2 text-center md:text-left">
//               {quickLinks.map((link, index) => (
//                 <li key={index}>
//                   <Link 
//                     href={link.href}
//                     className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center group"
//                   >
//                     <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="text-lg font-bold mb-4 text-green-300 border-b border-green-600 pb-2">
//               Our Services
//             </h4>
//             <ul className="space-y-2">
//               {services.map((service, index) => (
//                 <li key={index}>
//                   <span className="text-gray-300 hover:text-green-400 transition-colors duration-200 cursor-pointer flex items-center group">
//                     <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
//                     {service}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-lg font-bold mb-4 text-green-300 border-b border-green-600 pb-2">
//               Contact Us
//             </h4>
//             <div className="space-y-3">
//               {contactInfo.map((contact, index) => (
//                 <a
//                   key={index}
//                   href={contact.link}
//                   className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-200 group"
//                   target={contact.icon === faWhatsapp ? "_blank" : "_self"}
//                   rel={contact.icon === faWhatsapp ? "noopener noreferrer" : ""}
//                 >
//                   <FontAwesomeIcon 
//                     icon={contact.icon} 
//                     className={`w-4 h-4 mr-3 ${
//                       contact.icon === faWhatsapp ? 'text-green-400' : 
//                       contact.icon === faPhone ? 'text-blue-400' : 
//                       contact.icon === faEnvelope ? 'text-red-400' : 'text-yellow-400'
//                     } group-hover:scale-110 transition-transform`} 
//                   />
//                   <span>{contact.text}</span>
//                 </a>
//               ))}
//             </div>

//             {/* Social Links */}
//             <div className="mt-6">
//               <h5 className="text-md font-semibold mb-3 text-gray-300">Follow Us</h5>
//               <div className="flex space-x-4">
//                 {socialLinks.map((social, index) => (
//                   <a
//                     key={index}
//                     href={social.href}
//                     className={`w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 ${social.color}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FontAwesomeIcon icon={social.icon} className="w-4 h-4" />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-gray-700 pt-6">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <div className="text-center md:text-left">
//               <p className="text-gray-400">
//                 © {currentYear} As Salam Munazzam (Private) Limited. All rights reserved.
//               </p>
//               <p className="text-gray-500 text-sm mt-1">
//                 Ministry of Religious Affairs Registration No. 0413
//               </p>
//             </div>
            
//             <div className="text-center md:text-right">
//               <p className="text-gray-400 text-sm">
//                 Developed by{' '}
//                 <span className="text-green-400 font-semibold">MetaLog Inc.</span>
//               </p>
//               <a 
//                 href="https://wa.me/923353221003" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="flex items-center justify-center md:justify-end space-x-2 text-gray-400 hover:text-green-400 transition-colors mt-1"
//               >
//                 <FontAwesomeIcon icon={faWhatsapp} className="w-3 h-3" />
//                 <span className="text-sm">+92-335-3221003</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assalamlogo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/packages" },
    { name: "Partners", href: "/partners" },
    { name: "Notifications", href: "/notifications" },
    { name: "Contact Us", href: "/contact" },
  ];

  const services = [
    "Hajj Packages 2026",
    "Overseas Pakistani Hajj Packages",
    "Group Hajj Packages",
  ];

  const contactInfo = [
    {
      icon: faPhone,
      text: "+92-XXX-XXXXXXX",
      link: "tel:+92XXXXXXXXX",
    },
    {
      icon: faWhatsapp,
      text: "+92-300-XXXXXXX",
      link: "https://wa.me/92300XXXXXXX",
    },
    {
      icon: faEnvelope,
      text: "info@assalamunazzam.com",
      link: "mailto:info@assalamunazzam.com",
    },
    {
      icon: faMapMarkerAlt,
      text: "Main Office, Pakistan",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: faFacebook,
      href: "#",
      label: "Facebook",
      color: "hover:text-blue-400",
    },
    {
      icon: faWhatsapp,
      href: "https://wa.me/923353221003",
      label: "WhatsApp",
      color: "hover:text-green-400",
    },
    {
      icon: faInstagram,
      href: "#",
      label: "Instagram",
      color: "hover:text-pink-400",
    },
    {
      icon: faTwitter,
      href: "#",
      label: "Twitter",
      color: "hover:text-blue-300",
    },
  ];

  return (
    <footer
      className="bg-gradient-to-br from-gray-900 to-green-900 text-white pt-12 pb-6"
      role="contentinfo"
    >
      <div className="container mx-auto px-4">
        {/* ======= MAIN FOOTER ======= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* --- Company Info --- */}
          <section aria-labelledby="footer-company-info">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 relative">
                <Image
                  src={logo}
                  alt="As Salam Munazzam (Pvt) Ltd Logo"
                  title="As Salam Munazzam (Private) Limited"
                  fill
                  className="object-contain invert brightness-0"
                />
              </div>
              <div>
                <h3
                  id="footer-company-info"
                  className="text-xl font-bold leading-tight"
                >
                  As Salam Munazzam
                </h3>
                <p className="text-green-300 text-sm">(Private) Limited</p>
              </div>
            </div>

            <p className="text-gray-300 mb-4 leading-relaxed">
              Your trusted partner for spiritual journeys to the Holy Lands.
              Making Hajj & Umrah experiences memorable with comfort and care.
            </p>
          </section>

          {/* --- Quick Links --- */}
          <nav aria-labelledby="footer-quick-links">
            <h4
              id="footer-quick-links"
              className="text-lg font-bold mb-4 text-green-300 border-b border-green-600 pb-2"
            >
              Quick Links
            </h4>
            <ul className="space-y-2 text-center md:text-left">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center group"
                    aria-label={`Navigate to ${link.name}`}
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* --- Services --- */}
          <section aria-labelledby="footer-services">
            <h4
              id="footer-services"
              className="text-lg font-bold mb-4 text-green-300 border-b border-green-600 pb-2"
            >
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 cursor-default flex items-center group"
                    aria-label={service}
                  >
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* --- Contact Info --- */}
          <address
            aria-labelledby="footer-contact"
            className="not-italic space-y-3"
          >
            <h4
              id="footer-contact"
              className="text-lg font-bold mb-4 text-green-300 border-b border-green-600 pb-2"
            >
              Contact Us
            </h4>

            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-200 group"
                target={
                  contact.icon === faWhatsapp ? "_blank" : undefined
                }
                rel={
                  contact.icon === faWhatsapp ? "noopener noreferrer" : undefined
                }
                aria-label={`Contact via ${contact.text}`}
              >
                <FontAwesomeIcon
                  icon={contact.icon}
                  className={`w-4 h-4 mr-3 ${
                    contact.icon === faWhatsapp
                      ? "text-green-400"
                      : contact.icon === faPhone
                      ? "text-blue-400"
                      : contact.icon === faEnvelope
                      ? "text-red-400"
                      : "text-yellow-400"
                  } group-hover:scale-110 transition-transform`}
                />
                <span>{contact.text}</span>
              </a>
            ))}

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-md font-semibold mb-3 text-gray-300">
                Follow Us
              </h5>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${social.label}`}
                  >
                    <FontAwesomeIcon
                      icon={social.icon}
                      className="w-4 h-4"
                      title={social.label}
                    />
                  </a>
                ))}
              </div>
            </div>
          </address>
        </div>

        {/* ======= BOTTOM BAR ======= */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © {currentYear} As Salam Munazzam (Private) Limited. All rights
                reserved.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Ministry of Religious Affairs Registration No. 0413
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                Developed by{" "}
                <a
                  href="https://owais-qazi.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 font-semibold hover:underline"
                  aria-label="Visit MetaLog Inc developer portfolio"
                >
                  MetaLog Inc.
                </a>
              </p>

              <a
                href="https://wa.me/923353221003"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end space-x-2 text-gray-400 hover:text-green-400 transition-colors mt-1"
                aria-label="Contact MetaLog Inc via WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="w-3 h-3" />
                <span className="text-sm">+92-335-3221003</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
