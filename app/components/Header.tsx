// import Link from "next/link";

// export default function Header() {
//   return (
//     <header className="bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-2xl">
//       <div className="container mx-auto px-4 py-2">
//         <div className="text-center">
//           <Link href={"/"}>
//           <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
//             As Salam Munazzam (Pvt) Ltd.
//           </h1>
//           </Link>
          
//           <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
//             Your Spiritual Journey to the Holy Lands - All Types of Hajj Packages with Comfort and Care
//           </p>
//         </div>
//       </div>
//     </header>
//   );
// }

"use client"
// import { ArrowLeft } from "lucide-react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Header() {
//   const pathname = usePathname();
//   const isHomePage = pathname === "/";

//   return (
//      <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-2xl z-50">
//       <div className="container mx-auto px-4 py-2">
//         {/* Back to Home Button - Only show when not on home page */}
//         {!isHomePage && (
//           <div className="absolute top-12 left-4">
//             <Link 
//   href="/"
//   className="inline-flex items-center gap-2 bg-white text-green-700 hover:bg-gray-100 px-4 py-2 rounded-lg transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
// >
//   ← Back to Home Page
// </Link>
//           </div>
//         )}
        
//         <div className="text-center">
//           <Link href={"/"}>
//             <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
//               As Salam Munazzam (Pvt) Ltd.
//             </h1>
//           </Link>
          
//           <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
//             Your Spiritual Journey to the Holy Lands - All Types of Hajj Packages with Comfort and Care
//           </p>
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

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

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
    <header className={`fixed top-0 left-0 right-0 bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-2xl z-50 transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`}>
      <div className="container mx-auto px-4">
        {/* Back to Home Button - Only show when not on home page and hidden on small screens */}
        {!isHomePage && (
          <div className="absolute top-4 left-4 hidden md:block">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 bg-white text-green-700 hover:bg-gray-100 px-4 py-2 rounded-lg transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
            >
              ← Back to Home
            </Link>
          </div>
        )}
        
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
                As Salam Munazzam (Pvt) Ltd.
              </h1>
            </Link>
            
            {/* Description - Hidden when scrolled */}
            {!isScrolled && (
              <p className="text-lg md:text-xl opacity-80 max-w-2xl transition-opacity duration-300">
                Your Spiritual Journey to the Holy Lands - All Types of Hajj Packages with Comfort and Care
              </p>
            )}
          </div>
          <div className=" content-end">
          <div className={`transition-all duration-300 mx-auto md:mx-0 ${isScrolled ? 'w-0 h-0' : 'md:w-36 md:h-36 w-0 h-0'}`}>
            <Image
              src={logo2} 
              alt="logo2"
              className="w-full h-full object-contain"
            />
          </div>
          </div>
          
        </div>
      </div>
    </header>
  );
}