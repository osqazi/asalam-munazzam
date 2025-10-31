// // import Link from "next/link";

// // export default function Header() {
// //   return (
// //     <header className="bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-2xl">
// //       <div className="container mx-auto px-4 py-2">
// //         <div className="text-center">
// //           <Link href={"/"}>
// //           <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
// //             As Salam Munazzam (Pvt) Ltd.
// //           </h1>
// //           </Link>
          
// //           <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
// //             Your Spiritual Journey to the Holy Lands - All Types of Hajj Packages with Comfort and Care
// //           </p>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // }

// "use client"
// // import { ArrowLeft } from "lucide-react";
// // import Link from "next/link";
// // import { usePathname } from "next/navigation";

// // export default function Header() {
// //   const pathname = usePathname();
// //   const isHomePage = pathname === "/";

// //   return (
// //      <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-2xl z-50">
// //       <div className="container mx-auto px-4 py-2">
// //         {/* Back to Home Button - Only show when not on home page */}
// //         {!isHomePage && (
// //           <div className="absolute top-12 left-4">
// //             <Link 
// //   href="/"
// //   className="inline-flex items-center gap-2 bg-white text-green-700 hover:bg-gray-100 px-4 py-2 rounded-lg transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
// // >
// //   ← Back to Home Page
// // </Link>
// //           </div>
// //         )}
        
// //         <div className="text-center">
// //           <Link href={"/"}>
// //             <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
// //               As Salam Munazzam (Pvt) Ltd.
// //             </h1>
// //           </Link>
          
// //           <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
// //             Your Spiritual Journey to the Holy Lands - All Types of Hajj Packages with Comfort and Care
// //           </p>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // }
// "use client"
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState, useEffect } from "react";
// import logo from '@/public/assalamlogo.png'
// import Image from "next/image";
// import logo2 from '@/public/AssalamLogoFinal.png'
// import Navbar from "./Navbar";

// export default function Header() {
//   const pathname = usePathname();
//   const isHomePage = pathname === "/";
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className={`fixed top-0 left-0 right-0 bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-2xl z-50 transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`}>
//       <div className="container mx-auto px-4">
//         {/* Back to Home Button - Only show when not on home page and hidden on small screens */}
//         {!isHomePage && (
//           <div className="absolute top-4 left-4 hidden md:block">
//             <Link 
//               href="/"
//               className="inline-flex items-center gap-2 bg-white text-green-700 hover:bg-gray-100 px-4 py-2 rounded-lg transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
//             >
//               ← Back to Home
//             </Link>
//           </div>
//         )}
        
//         {/* Header Content - Stack on mobile, flex on larger screens */}
//         <div className="text-center md:flex md:items-center md:justify-center md:gap-8">
//           {/* Logo */}
//           <div className={`transition-all duration-300 mx-auto md:mx-0 ${isScrolled ? 'w-14 h-14' : 'md:w-36 md:h-36 w-18 h-18'}`}>
//             <Image
//               src={logo} 
//               alt="As Salam Munazzam Logo"
//               className="w-full h-full object-contain"
//             />
//           </div>
          
//           {/* Title and Description */}
//           <div className="md:text-left">
//             <Link href={"/"}>
//               <h1 className={`font-bold drop-shadow-lg transition-all duration-300 ${isScrolled ? 'text-xl md:text-2xl mb-0' : 'text-2xl md:text-5xl mb-4'}`}>
//                 As Salam Munazzam (Private) Limited
//               </h1>
//             </Link>
            
//             {/* Description - Hidden when scrolled */}
//             {!isScrolled && (
//               <p className="text-lg md:text-xl opacity-80 max-w-2xl transition-opacity duration-300">
//                 Your Spiritual Journey to the Holy Lands - All Types of Hajj Packages with Comfort and Care
//               </p>
//             )}
//           </div>
//           <div className=" content-end">
//           <div className={`transition-all duration-300 mx-auto md:mx-0 ${isScrolled ? 'w-0 h-0' : 'md:w-36 md:h-36 w-0 h-0'}`}>
//             <Image
//               src={logo2} 
//               alt="logo2"
//               className="w-full h-full object-contain"
//             />
//           </div>
//           </div>
          
//         </div>
//       </div>
//     </header>
//   );
// }

"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import logo from '@/public/assalamlogo.png'
import Image from "next/image";
import logo2 from '@/public/AssalamLogoFinal.png'
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/packages" },
    { name: "Partners", href: "/partners" },
    { name: "Notifications", href: "/notifications" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-2xl z-50 transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`}>
        <div className="container mx-auto px-4">
          {/* Back to Home Button - Only show when not on home page and hidden on small screens */}
          {/* {!isHomePage && (
            <div className="absolute top-4 left-4 hidden md:block">
              <Link 
                href="/"
                className="inline-flex items-center gap-2 bg-white text-green-700 hover:bg-gray-100 px-4 py-2 rounded-lg transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
              >
                ← Back to Home
              </Link>
            </div>
          )} */}
          
          {/* Header Content - Stack on mobile, flex on larger screens */}
          <div className="text-center md:flex md:items-center md:justify-center md:gap-8">
            {/* Logo */}
            <div className={`transition-all duration-300 mx-auto md:mx-0 ${isScrolled ? 'w-14 h-14' : 'md:w-36 md:h-36 w-18 h-18'}`}>
              <Image
                src={logo} 
                alt="As Salam Munazzam Logo"
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Title and Description */}
            <div className="md:text-left">
              <Link href={"/"}>
                <h1 className={`font-bold drop-shadow-lg transition-all duration-300 ${isScrolled ? 'text-xl md:text-2xl mb-0' : 'text-2xl md:text-5xl mb-4'}`}>
                  As Salam Munazzam (Private) Limited
                </h1>
              </Link>
              
              {/* Description - Hidden when scrolled */}
              {!isScrolled && (
                <p className="text-lg md:text-xl opacity-80 max-w-2xl transition-opacity duration-300">
                  Your Spiritual Journey to the Holy Lands - All Types of Hajj Packages with Comfort and Care
                </p>
              )}
            </div>
            
            {/* Right Logo */}
            <div className="content-end">
              <div className={`transition-all duration-300 mx-auto md:mx-0 ${isScrolled ? 'w-0 h-0' : 'md:w-52 md:h-36 w-0 h-0'}`}>
                <Image
                  src={logo2} 
                  alt="logo2"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Bar - Embedded in Header */}
        <nav className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 shadow-lg border-t border-amber-300 mt-2 relative overflow-hidden">
  {/* Metallic shine effect */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"></div>
  
  <div className="container mx-auto px-4 relative z-10">
    {/* Desktop Menu */}
    <div className="hidden md:flex justify-center items-center">
      {menuItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`px-6 py-1 font-semibold transition-all duration-200 border-b-2 border-transparent hover:bg-amber-400/30 hover:text-amber-900 ${
            isActiveLink(item.href)
              ? "text-amber-900 border-amber-700 bg-amber-400/40 font-bold"
              : "text-amber-900 hover:border-amber-600"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </div>

    {/* Mobile Menu Button */}
    <div className="md:hidden flex justify-between items-center py-2">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="p-2 text-amber-900 hover:text-amber-800 transition-colors bg-amber-400/30 rounded"
      >
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <span className="text-sm font-medium text-amber-900">Navigation Menu</span>
    </div>

    {/* Mobile Menu Dropdown */}
    {isMenuOpen && (
      <div className="md:hidden bg-gradient-to-b from-amber-500 to-amber-600 shadow-xl border-t border-amber-400 relative overflow-hidden">
        {/* Metallic shine for dropdown */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/15 to-transparent"></div>
        <div className="relative z-10">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-6 py-1 font-semibold border-l-4 transition-all duration-200 ${
                isActiveLink(item.href)
                  ? "text-amber-900 bg-amber-400/40 border-amber-700 font-bold"
                  : "text-amber-900 border-transparent hover:bg-amber-400/30 hover:border-amber-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    )}
  </div>
</nav>
      </header>

      {/* Spacer for fixed header */}
      <div className={`transition-all duration-300 ${isScrolled ? 'h-8' : 'h-8'}`}></div>
    </>
  );
}