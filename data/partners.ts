import { Partner } from "@/types/partners";

// export const partnersData = [
//   { enrl: 4171, name: "PIRWANI HAJJ GROUP (PVT) LTD.", pilgrims: 80, logo: "/partners/pirwani.png" },
//   { enrl: 4127, name: "KARWAN-E-RAMZANI (PVT) LTD.", pilgrims: 80, logo: "/partners/karramzani.png" },
//   { enrl: 4128, name: "MAJMU-E-RAMZANI (PVT) LTD.", pilgrims: 147, logo: "/partners/majramzani.png" },
//   { enrl: 4272, name: "KARWAN-E-REHMANI TOURS AND TRA", pilgrims: 63, logo: "/partners/rehmani.png" },
//   { enrl: 2263, name: "AL SAJIDEEN TRAVELS & TOURS (PVT) LTD", pilgrims: 32, logo: "/partners/sajideen.png" },
//   { enrl: 4151, name: "AL TAYABA TRAVELS & TOURS (PVT) LTD", pilgrims: 90, logo: "/partners/tayyaba.png" },
//   { enrl: 4153, name: "HUJAJ-AL-ANSAR HAJJ & UMRAH TOURS (PVT) LTD", pilgrims: 80, logo: "/partners/hujajulansar.png" },
//   { enrl: 4156, name: "AROMA TRAVEL SERVICES (PVT) LTD", pilgrims: 176, logo: "/partners/aroma.png" },
//   { enrl: 4337, name: "AROMA AVIATION (PVT) LTD", pilgrims: 32, logo: "/partners/aviation.png" },
//   { enrl: 4157, name: "AL SYED TRAVELS (PVT) LTD", pilgrims: 147, logo: "/partners/alsyed.png" },
//   { enrl: 4343, name: "KHIZER TRAVELS (PVT) LTD", pilgrims: 32, logo: "/partners/khizer.png" },
//   { enrl: 4330, name: "CITI TRAVELS (PVT) LTD", pilgrims: 32, logo: "/partners/citi.png" },
//   { enrl: 4327, name: "SUPER TRAVELS (PVT) LTD", pilgrims: 32, logo: "/partners/super.png" },
//   { enrl: 4291, name: "BUKHARI TOURS (PVT) LTD", pilgrims: 32, logo: "/partners/buktour.png" },
//   { enrl: 4307, name: "BUKHARI ASSOCIATE (PVT) LTD", pilgrims: 32, logo: "/partners/bukasso.png" },
//   { enrl: 4306, name: "BUKHARI & SONS (PVT) LTD", pilgrims: 32, logo: "/partners/buksons.png" },
//   { enrl: 3313, name: "TRAVEL SHOP (PVT) LTD HAJJ UNIRAII TRAVEL & TOUR SERVICES", pilgrims: 32, logo: "/partners/travshop.png" },
//   { enrl: 4168, name: "FAIZAN E NOORI INTERNATIONAL (PVT) LTD.", pilgrims: 75, logo: "/partners/FaizanNoori.png" },
//   { enrl: 4325, name: "RAZA E NOOR (PVT) LTD.", pilgrims: 32, logo: "/partners/razanoor.png" },
//   { enrl: 4365, name: "KARWAN E ZIA E NOORI INTERNATIONAL (PVT) LTD.", pilgrims: 32, logo: "/partners/ziaenoori.png" },
//   { enrl: 4219, name: "KARWAN E MUSTAFAI (PVT) LTD.", pilgrims: 75, logo: "/partners/mustafai.png" },
//   { enrl: 4386, name: "KARWAN E SURIYA HAJJ & UMRAH (PVT) LTD.", pilgrims: 32, logo: "/partners/suriya.png" },
//   { enrl: 4210, name: "TAIR E HARAM INTERNATIONAL (PVT) LTD.", pilgrims: 90, logo: "/partners/haram.png" },
//   { enrl: 4284, name: "MOIN UL HUJJAJ HAJJ & UMRAH (PVT) LTD.", pilgrims: 63, logo: "/partners/moin.png" },
//   { enrl: 4212, name: "KARWAN E MAKKAH MADINA (PVT) LTD", pilgrims: 80, logo: "/partners/kmm.png" },
//   { enrl: 4152, name: "AL RASHEDIN HAJJ & UMRAH SERVCES (PVT) LTD.", pilgrims: 80, logo: "/partners/rashidien.png" },
//   { enrl: 4378, name: "KARWAN E MALIK (PVT) LTD.", pilgrims: 32, logo: "/partners/malik.png" },
//   { enrl: 4268, name: "NEW INTL KARWAN E ARFAT (PVT) LTD.", pilgrims: 66, logo: "/partners/arfat.png" },
//   { enrl: 4393, name: "KARWAN E MEEZAB REHMAN (PVT) LTD.", pilgrims: 32, logo: "/partners/KMeezab.png" },
//   { enrl: 4193, name: "KARWAN E AMJADIA HAJJ & UMRAH SERVICES (PVT) LTD.", pilgrims: 80, logo: "/partners/karwan.png" },
//   { enrl: 4218, name: "MUAWIN UL HUJJAJ (PVT) LTD.", pilgrims: 90, logo: "/partners/muawin.png" },
//   { enrl: 4201, name: "SAKHI WAHAB HAJJ COMPANY (PVT) LTD.", pilgrims: 80, logo: "/partners/sakhi.png" },
//   { enrl: 4126, name: "AL MOAZZIN HAJJ & UMRAH SERVICES (PVT) LTD.", pilgrims: 147, logo: "/partners/moazzin.png" },
//   { enrl: 4154, name: "KARWAN E RFIQUL HARMAIN (PVT) LTD.", pilgrims: 80, logo: "/partners/rafeeq.png" },
//   { enrl: 4140, name: "KARWAN E AHL E SUNNAT TRAVELS & TOURS (PVT) LTD.", pilgrims: 90, logo: "/partners/ahlesunnat.png" },
// ];

export const partnersData: Partner[] = [
  {
    enrl: 4171,
    name: "PIRWANI HAJJ GROUP (PVT) LTD.",
    pilgrims: 80,
    logo: "/partners/pirwani.png",
    contactPerson: "Mr. Muhammad Pirwani",
    address: "Office #12, 3rd Floor, Al-Hafeez Shopping Mall, Main Boulevard Gulberg, Lahore",
    contactNumber: "+92 42 3578 5500",
    email: "info@pirwanihajj.com",
    website: "https://www.pirwanihajj.com",
    dtsLicenceNo: "DTS-4171-LHR",
    iataNo: "27-3-1234",
    packageBrochures: [
      {
        id: "pkg-4171-1",
        title: "Premium Hajj Package 2026",
        image: "/brochures/pirwani-premium.jpg",
        description: "5-star accommodation near Haram, VIP transport, guided Ziyarat in Madinah."
      }
    ]
  },
  {
    enrl: 4127,
    name: "KARWAN-E-RAMZANI (PVT) LTD.",
    pilgrims: 80,
    logo: "/partners/karramzani.png",
    contactPerson: "Hafiz Ahmed Ramzani",
    address: "Plot 45, Block B, Satellite Town, Rawalpindi",
    contactNumber: "+92 51 484 9200",
    email: "contact@karramzani.com",
    website: "https://www.karramzani.com",
    dtsLicenceNo: "DTS-4127-RWP",
    iataNo: "27-3-5678",
    packageBrochures: [
      {
        id: "pkg-4127-1",
        title: "Ramzani Gold Hajj",
        image: "/brochures/ramzani-gold.jpg",
        description: "Luxury tents in Mina, direct flights, expert guidance."
      },
      {
        id: "pkg-4127-2",
        title: "Family Hajj Package",
        image: "/brochures/ramzani-family.jpg",
        description: "Family suites, child care, educational sessions."
      }
    ]
  },
  {
    enrl: 4128,
    name: "MAJMU-E-RAMZANI (PVT) LTD.",
    pilgrims: 147,
    logo: "/partners/majramzani.png",
    contactPerson: "Mr. Bilal Ramzani",
    address: "Suite 205, Siddique Trade Center, Gulberg III, Lahore",
    contactNumber: "+92 42 3588 7744",
    email: "info@majramzani.com",
    website: "https://www.majramzani.com",
    dtsLicenceNo: "DTS-4128-LHR",
    iataNo: "27-3-9012",
    packageBrochures: [
      {
        id: "pkg-4128-1",
        title: "Majmu Platinum Hajj",
        image: "/brochures/majram-platinum.jpg",
        description: "Private Aziziya residence, Saudi Airlines direct."
      }
    ]
  },
  {
    enrl: 4272,
    name: "KARWAN-E-REHMANI TOURS AND TRA",
    pilgrims: 63,
    logo: "/partners/rehmani.png",
    contactPerson: "Maulana Rehman Siddiqui",
    address: "Office 8, Al-Noor Plaza, Shahrah-e-Faisal, Karachi",
    contactNumber: "+92 21 3432 1090",
    email: "rehmani.tours@gmail.com",
    website: "https://www.rehmanitours.com",
    dtsLicenceNo: "DTS-4272-KHI",
    iataNo: "27-3-3456",
    packageBrochures: [
      {
        id: "pkg-4272-1",
        title: "Rehmani Standard Hajj",
        image: "/brochures/rehmani-standard.jpg",
        description: "Complete Hajj with training camps in Karachi."
      },
      {
        id: "pkg-4272-2",
        title: "Budget Hajj",
        image: "/brochures/rehmani-budget.jpg",
        description: "Economy package for first-time Hujjaj."
      }
    ]
  },
  {
    enrl: 2263,
    name: "AL SAJIDEEN TRAVELS & TOURS (PVT) LTD",
    pilgrims: 32,
    logo: "/partners/sajideen.png",
    contactPerson: "Mr. Sajid Hussain",
    address: "Shop 3, Ground Floor, Taj Mahal Plaza, Murree Road, Rawalpindi",
    contactNumber: "+92 51 425 3001",
    email: "alsajideen@gmail.com",
    website: "https://alsajideen.com",
    dtsLicenceNo: "DTS-2263-RWP",
    iataNo: "27-3-7890",
    packageBrochures: [
      {
        id: "pkg-2263-1",
        title: "Sajideen Hajj Basic",
        image: "/brochures/sajideen-basic.jpg",
        description: "Essential Hajj services at lowest cost."
      }
    ]
  },
  {
    enrl: 4151,
    name: "AL TAYABA TRAVELS & TOURS (PVT) LTD",
    pilgrims: 90,
    logo: "/partners/tayyaba.png",
    contactPerson: "Ms. Tayyaba Khan",
    address: "Office 10, Davis Road, Near Shimla Hill, Lahore",
    contactNumber: "+92 42 3630 5500",
    email: "tayaba.travels@outlook.com",
    website: "https://altayaba.pk",
    dtsLicenceNo: "DTS-4151-LHR",
    iataNo: "27-3-4321",
    packageBrochures: [
      {
        id: "pkg-4151-1",
        title: "Tayaba Executive Hajj",
        image: "/brochures/tayaba-exec.jpg",
        description: "Business class flights, 5-star hotels."
      },
      {
        id: "pkg-4151-2",
        title: "Women-Only Hajj Group",
        image: "/brochures/tayaba-women.jpg",
        description: "Female-led group with privacy focus."
      }
    ]
  },
  {
    enrl: 4153,
    name: "HUJAJ-AL-ANSAR HAJJ & UMRAH TOURS (PVT) LTD",
    pilgrims: 80,
    logo: "/partners/hujajulansar.png",
    contactPerson: "Sheikh Ansar Mehmood",
    address: "Plot 88, Sector G-11/3, Islamabad",
    contactNumber: "+92 51 236 4000",
    email: "hujajansar@gmail.com",
    website: "https://hujajansar.com",
    dtsLicenceNo: "DTS-4153-ISB",
    iataNo: "27-3-6543",
    packageBrochures: [
      {
        id: "pkg-4153-1",
        title: "Ansar VIP Hajj",
        image: "/brochures/ansar-vip.jpg",
        description: "Private transport, VIP Mina camp."
      }
    ]
  },
  {
    enrl: 4156,
    name: "AROMA TRAVEL SERVICES (PVT) LTD",
    pilgrims: 176,
    logo: "/partners/aroma.png",
    contactPerson: "Mr. Farhan Aroma",
    address: "Head Office: PECHS Block 6, Shahrah-e-Faisal, Karachi",
    contactNumber: "+92 21 3456 7890",
    email: "info@aromatravels.com",
    website: "https://www.aromatravels.com",
    dtsLicenceNo: "DTS-4156-KHI",
    iataNo: "27-3-2109",
    packageBrochures: [
      {
        id: "pkg-4156-1",
        title: "Aroma Royal Hajj",
        image: "/brochures/aroma-royal.jpg",
        description: "Royal suites, private guides, luxury buses."
      },
      {
        id: "pkg-4156-2",
        title: "Corporate Hajj",
        image: "/brochures/aroma-corporate.jpg",
        description: "Executive packages for company employees."
      }
    ]
  },
  {
    enrl: 4337,
    name: "AROMA AVIATION (PVT) LTD",
    pilgrims: 32,
    logo: "/partners/aviation.png",
    contactPerson: "Capt. Salman Aroma",
    address: "Jinnah Terminal, Karachi Airport, Karachi",
    contactNumber: "+92 21 9907 1234",
    email: "aviation@aroma.com",
    website: "https://aromaaviation.com",
    dtsLicenceNo: "DTS-4337-KHI",
    iataNo: "27-3-8765",
    packageBrochures: [
      {
        id: "pkg-4337-1",
        title: "Charter Hajj Flight",
        image: "/brochures/aviation-charter.jpg",
        description: "Dedicated aircraft for group."
      }
    ]
  },
  {
    enrl: 4157,
    name: "AL SYED TRAVELS (PVT) LTD",
    pilgrims: 147,
    logo: "/partners/alsyed.png",
    contactPerson: "Syed Ali Raza",
    address: "Office 15, Al-Latif Center, Main Boulevard Gulshan-e-Ravi, Lahore",
    contactNumber: "+92 42 3740 1111",
    email: "alsyedtravels@gmail.com",
    website: "https://alsyedtravels.com",
    dtsLicenceNo: "DTS-4157-LHR",
    iataNo: "27-3-5432",
    packageBrochures: [
      {
        id: "pkg-4157-1",
        title: "Syed Silver Hajj",
        image: "/brochures/syed-silver.jpg",
        description: "Mid-range comfort with full support."
      }
    ]
  },
  {
    enrl: 4343,
    name: "KHIZER TRAVELS (PVT) LTD",
    pilgrims: 32,
    logo: "/partners/khizer.png",
    contactPerson: "Mr. Khizer Hayat",
    address: "Office 4, Civic Center, Melody Market, Islamabad",
    contactNumber: "+92 51 111 545 937",
    email: "khizertravels@live.com",
    website: "https://khizertravels.com",
    dtsLicenceNo: "DTS-4343-ISB",
    iataNo: "27-3-9876",
    packageBrochures: [
      {
        id: "pkg-4343-1",
        title: "Khizer Economy Hajj",
        image: "/brochures/khizer-economy.jpg",
        description: "Basic package with full compliance."
      },
      {
        id: "pkg-4343-2",
        title: "Umrah in Muharram",
        image: "/brochures/khizer-muharram.jpg",
        description: "Spiritual Umrah in Islamic New Year."
      }
    ]
  },
  {
    enrl: 4330,
    name: "CITI TRAVELS (PVT) LTD",
    pilgrims: 32,
    logo: "/partners/citi.png",
    contactPerson: "Mr. Asif Raza",
    address: "Citi Tower, MM Alam Road, Gulberg III, Lahore",
    contactNumber: "+92 42 3578 1234",
    email: "info@cititravels.pk",
    website: "https://cititravels.pk",
    dtsLicenceNo: "DTS-4330-LHR",
    iataNo: "27-3-1122",
    packageBrochures: [
      {
        id: "pkg-4330-1",
        title: "Citi Budget Hajj",
        image: "/brochures/citi-budget.jpg",
        description: "Affordable Hajj with shared facilities."
      }
    ]
  },
  {
    enrl: 4327,
    name: "SUPER TRAVELS (PVT) LTD",
    pilgrims: 32,
    logo: "/partners/super.png",
    contactPerson: "Mr. Kamran Sheikh",
    address: "Super Heights, Main Market, Gulberg, Lahore",
    contactNumber: "+92 42 3576 5432",
    email: "supertravels@gmail.com",
    website: "https://supertravels.com.pk",
    dtsLicenceNo: "DTS-4327-LHR",
    iataNo: "27-3-3344",
    packageBrochures: [
      {
        id: "pkg-4327-1",
        title: "Super Umrah Express",
        image: "/brochures/super-express.jpg",
        description: "5-day Umrah from Lahore."
      },
      {
        id: "pkg-4327-2",
        title: "Hajj Training Camp",
        image: "/brochures/super-camp.jpg",
        description: "Pre-Hajj mock rituals and guidance."
      }
    ]
  },
  {
    enrl: 4291,
    name: "BUKHARI TOURS (PVT) LTD",
    pilgrims: 32,
    logo: "/partners/buktour.png",
    contactPerson: "Mr. Hassan Bukhari",
    address: "Bukhari House, Model Town, Lahore",
    contactNumber: "+92 42 3588 9900",
    email: "bukhari.tours@yahoo.com",
    website: "https://bukharitours.com",
    dtsLicenceNo: "DTS-4291-LHR",
    iataNo: "27-3-5566",
    packageBrochures: [
      {
        id: "pkg-4291-1",
        title: "Bukhari Standard Hajj",
        image: "/brochures/bukhari-standard.jpg",
        description: "Reliable Hajj with group support."
      }
    ]
  },
  {
    enrl: 4307,
    name: "BUKHARI ASSOCIATE (PVT) LTD",
    pilgrims: 32,
    logo: "/partners/bukasso.png",
    contactPerson: "Mr. Imran Bukhari",
    address: "Suite 12, Bukhari Center, Faisal Town, Lahore",
    contactNumber: "+92 42 3516 7890",
    email: "associate@bukhari.com",
    website: "https://bukharigroup.com",
    dtsLicenceNo: "DTS-4307-LHR",
    iataNo: "27-3-7788",
    packageBrochures: [
      {
        id: "pkg-4307-1",
        title: "Associate Umrah",
        image: "/brochures/bukasso-umrah.jpg",
        description: "Year-round Umrah with visa support."
      }
    ]
  },
  {
    enrl: 4306,
    name: "BUKHARI & SONS (PVT) LTD",
    pilgrims: 32,
    logo: "/partners/buksons.png",
    contactPerson: "Mr. Nadeem Bukhari",
    address: "Bukhari Plaza, Johar Town, Lahore",
    contactNumber: "+92 42 3531 2345",
    email: "sons@bukhari.pk",
    website: "https://bukharisons.com",
    dtsLicenceNo: "DTS-4306-LHR",
    iataNo: "27-3-9900",
    packageBrochures: [
      {
        id: "pkg-4306-1",
        title: "Family Hajj Plan",
        image: "/brochures/buksons-family.jpg",
        description: "Group travel for families."
      },
      {
        id: "pkg-4306-2",
        title: "Ramadan Umrah",
        image: "/brochures/buksons-ramadan.jpg",
        description: "Last 10 days with I'tikaf."
      }
    ]
  },
  {
    enrl: 3313,
    name: "TRAVEL SHOP (PVT) LTD HAJJ UNIRAII TRAVEL & TOUR SERVICES",
    pilgrims: 32,
    logo: "/partners/travshop.png",
    contactPerson: "Mr. Salman Qureshi",
    address: "Shop 7, Liberty Market, Gulberg III, Lahore",
    contactNumber: "+92 42 3578 4321",
    email: "travelshop@live.com",
    website: "https://travelshop.pk",
    dtsLicenceNo: "DTS-3313-LHR",
    iataNo: "27-3-2233",
    packageBrochures: [
      {
        id: "pkg-3313-1",
        title: "Shop & Pray Umrah",
        image: "/brochures/travshop-umrah.jpg",
        description: "Umrah + shopping in Makkah."
      }
    ]
  },
  {
    enrl: 4168,
    name: "FAIZAN E NOORI INTERNATIONAL (PVT) LTD.",
    pilgrims: 75,
    logo: "/partners/FaizanNoori.png",
    contactPerson: "Maulana Faizan Ahmed",
    address: "Faizan Center, Main Boulevard, DHA Phase 5, Lahore",
    contactNumber: "+92 42 3717 8900",
    email: "faizanenoori@gmail.com",
    website: "https://faizanenoori.com",
    dtsLicenceNo: "DTS-4168-LHR",
    iataNo: "27-3-4455",
    packageBrochures: [
      {
        id: "pkg-4168-1",
        title: "Noori Spiritual Hajj",
        image: "/brochures/faizan-spiritual.jpg",
        description: "Hajj with daily Dua and Zikr sessions."
      },
      {
        id: "pkg-4168-2",
        title: "Umrah with Madinah Stay",
        image: "/brochures/faizan-madinah.jpg",
        description: "Extended stay in Madinah."
      }
    ]
  },
  {
    enrl: 4325,
    name: "RAZA E NOOR (PVT) LTD.",
    pilgrims: 32,
    logo: "/partners/razanoor.png",
    contactPerson: "Mr. Raza Abbas",
    address: "Noor Plaza, Allama Iqbal Town, Lahore",
    contactNumber: "+92 42 3541 5678",
    email: "razaenoor@outlook.com",
    website: "https://razaenoor.com",
    dtsLicenceNo: "DTS-4325-LHR",
    iataNo: "27-3-6677",
    packageBrochures: [
      {
        id: "pkg-4325-1",
        title: "Raza Economy Hajj",
        image: "/brochures/razanoor-economy.jpg",
        description: "Affordable and reliable."
      }
    ]
  },
  {
    enrl: 4365,
    name: "KARWAN E ZIA E NOORI INTERNATIONAL (PVT) LTD.",
    pilgrims: 32,
    logo: "/partners/ziaenoori.png",
    contactPerson: "Mufti Zia-ur-Rehman",
    address: "Zia House, Wahdat Road, Lahore",
    contactNumber: "+92 42 3758 9012",
    email: "ziaenoori@gmail.com",
    website: "https://ziaenoori.com",
    dtsLicenceNo: "DTS-4365-LHR",
    iataNo: "27-3-8899",
    packageBrochures: [
      {
        id: "pkg-4365-1",
        title: "Zia Noori Hajj",
        image: "/brochures/ziaenoori-hajj.jpg",
        description: "Traditional Hajj with scholarly guidance."
      }
    ]
  },
  {
    enrl: 4219,
    name: "KARWAN E MUSTAFAI (PVT) LTD.",
    pilgrims: 75,
    logo: "/partners/mustafai.png",
    contactPerson: "Mr. Mustafa Kamal",
    address: "Mustafai Center, Ferozepur Road, Lahore",
    contactNumber: "+92 42 3592 3456",
    email: "mustafai.travels@yahoo.com",
    website: "https://mustafai.com",
    dtsLicenceNo: "DTS-4219-LHR",
    iataNo: "27-3-1010",
    packageBrochures: [
      {
        id: "pkg-4219-1",
        title: "Mustafai Deluxe Hajj",
        image: "/brochures/mustafai-deluxe.jpg",
        description: "Comfortable stay near Haram."
      },
      {
        id: "pkg-4219-2",
        title: "Umrah for Students",
        image: "/brochures/mustafai-student.jpg",
        description: "Budget Umrah during holidays."
      }
    ]
  },
  {
    enrl: 4386,
    name: "KARWAN E SURIYA HAJJ & UMRAH (PVT) LTD.",
    pilgrims: 32,
    logo: "/partners/suriya.png",
    contactPerson: "Ms. Suriya Bano",
    address: "Suriya Tower, Main Market, Gulberg, Lahore",
    contactNumber: "+92 42 3571 2345",
    email: "suriya.hajj@gmail.com",
    website: "https://suriyahajj.com",
    dtsLicenceNo: "DTS-4386-LHR",
    iataNo: "27-3-1212",
    packageBrochures: [
      {
        id: "pkg-4386-1",
        title: "Suriya Women Hajj",
        image: "/brochures/suriya-women.jpg",
        description: "Female-only group with privacy."
      }
    ]
  },
  {
    enrl: 4210,
    name: "TAIR E HARAM INTERNATIONAL (PVT) LTD.",
    pilgrims: 90,
    logo: "/partners/haram.png",
    contactPerson: "Mr. Tahir Mehmood",
    address: "Tair Plaza, Shahrah-e-Quaid-e-Azam, Lahore",
    contactNumber: "+92 42 3631 4567",
    email: "info@taireharam.com",
    website: "https://taireharam.com",
    dtsLicenceNo: "DTS-4210-LHR",
    iataNo: "27-3-1414",
    packageBrochures: [
      {
        id: "pkg-4210-1",
        title: "Tair VIP Hajj",
        image: "/brochures/tair-vip.jpg",
        description: "Luxury package with private transport."
      }
    ]
  },
  {
    enrl: 4284,
    name: "MOIN UL HUJJAJ HAJJ & UMRAH (PVT) LTD.",
    pilgrims: 63,
    logo: "/partners/moin.png",
    contactPerson: "Mr. Moinuddin",
    address: "Moin Center, Baghbanpura, Lahore",
    contactNumber: "+92 42 3684 5678",
    email: "moinulhujjaj@gmail.com",
    website: "https://moinulhujjaj.com",
    dtsLicenceNo: "DTS-4284-LHR",
    iataNo: "27-3-1616",
    packageBrochures: [
      {
        id: "pkg-4284-1",
        title: "Moin Standard Hajj",
        image: "/brochures/moin-standard.jpg",
        description: "Reliable group travel."
      },
      {
        id: "pkg-4284-2",
        title: "Umrah in Rajab",
        image: "/brochures/moin-rajab.jpg",
        description: "Blessed month Umrah."
      }
    ]
  },
  {
    enrl: 4212,
    name: "KARWAN E MAKKAH MADINA (PVT) LTD",
    pilgrims: 80,
    logo: "/partners/kmm.png",
    contactPerson: "Mr. Abdul Rehman",
    address: "KMM House, Multan Road, Lahore",
    contactNumber: "+92 42 3754 3210",
    email: "kmm.hajj@outlook.com",
    website: "https://kmmhajj.com",
    dtsLicenceNo: "DTS-4212-LHR",
    iataNo: "27-3-1818",
    packageBrochures: [
      {
        id: "pkg-4212-1",
        title: "KMM Classic Hajj",
        image: "/brochures/kmm-classic.jpg",
        description: "Full Hajj with Ziyarat."
      }
    ]
  },
  {
    enrl: 4152,
    name: "AL RASHEDIN HAJJ & UMRAH SERVCES (PVT) LTD.",
    pilgrims: 80,
    logo: "/partners/rashidien.png",
    contactPerson: "Mr. Rashid Ahmed",
    address: "Al-Rashid Plaza, Main Boulevard, DHA, Lahore",
    contactNumber: "+92 42 3572 8901",
    email: "alrashidin@gmail.com",
    website: "https://alrashidin.com",
    dtsLicenceNo: "DTS-4152-LHR",
    iataNo: "27-3-2020",
    packageBrochures: [
      {
        id: "pkg-4152-1",
        title: "Rashidin Deluxe Umrah",
        image: "/brochures/rashidin-deluxe.jpg",
        description: "4-star hotels, guided tours."
      },
      {
        id: "pkg-4152-2",
        title: "Hajj with Training",
        image: "/brochures/rashidin-training.jpg",
        description: "Pre-departure seminars."
      }
    ]
  },
  {
    enrl: 4378,
    name: "KARWAN E MALIK (PVT) LTD.",
    pilgrims: 32,
    logo: "/partners/malik.png",
    contactPerson: "Mr. Malik Asif",
    address: "Malik Tower, Garden Town, Lahore",
    contactNumber: "+92 42 3589 0123",
    email: "malik.karwan@yahoo.com",
    website: "https://karwanmalik.com",
    dtsLicenceNo: "DTS-4378-LHR",
    iataNo: "27-3-2221",
    packageBrochures: [
      {
        id: "pkg-4378-1",
        title: "Malik Budget Hajj",
        image: "/brochures/malik-budget.jpg",
        description: "Economical and trusted."
      }
    ]
  },
  {
    enrl: 4268,
    name: "NEW INTL KARWAN E ARFAT (PVT) LTD.",
    pilgrims: 66,
    logo: "/partners/arfat.png",
    contactPerson: "Mr. Arfat Khan",
    address: "Arfat Center, Shah Alam Market, Lahore",
    contactNumber: "+92 42 3765 4321",
    email: "newarfat@gmail.com",
    website: "https://newarfat.com",
    dtsLicenceNo: "DTS-4268-LHR",
    iataNo: "27-3-2424",
    packageBrochures: [
      {
        id: "pkg-4268-1",
        title: "Arfat International Hajj",
        image: "/brochures/arfat-intl.jpg",
        description: "Direct flights, full support."
      }
    ]
  },
  {
    enrl: 4393,
    name: "KARWAN E MEEZAB REHMAN (PVT) LTD.",
    pilgrims: 32,
    logo: "/partners/KMeezab.png",
    contactPerson: "Mr. Meezab Ur Rehman",
    address: "Rehman Plaza, Samanabad, Lahore",
    contactNumber: "+92 42 3755 6789",
    email: "meezabrehman@live.com",
    website: "https://meezabrehman.com",
    dtsLicenceNo: "DTS-4393-LHR",
    iataNo: "27-3-2626",
    packageBrochures: [
      {
        id: "pkg-4393-1",
        title: "Meezab Standard Hajj",
        image: "/brochures/meezab-standard.jpg",
        description: "Complete Hajj package."
      },
      {
        id: "pkg-4393-2",
        title: "Umrah in Sha'ban",
        image: "/brochures/meezab-shaban.jpg",
        description: "Pre-Ramadan Umrah."
      }
    ]
  },
  {
    enrl: 4193,
    name: "KARWAN E AMJADIA HAJJ & UMRAH SERVICES (PVT) LTD.",
    pilgrims: 80,
    logo: "/partners/karwan.png",
    contactPerson: "Mr. Amjad Hussain",
    address: "Amjadia House, Anarkali, Lahore",
    contactNumber: "+92 42 3731 2345",
    email: "amjadia.hajj@gmail.com",
    website: "https://amjadia.com",
    dtsLicenceNo: "DTS-4193-LHR",
    iataNo: "27-3-2828",
    packageBrochures: [
      {
        id: "pkg-4193-1",
        title: "Amjadia Premium Hajj",
        image: "/brochures/amjadia-premium.jpg",
        description: "Luxury accommodation and transport."
      }
    ]
  },
  {
    enrl: 4218,
    name: "MUAWIN UL HUJJAJ (PVT) LTD.",
    pilgrims: 90,
    logo: "/partners/muawin.png",
    contactPerson: "Mr. Muawin Siddiqui",
    address: "Muawin Center, Ichhra, Lahore",
    contactNumber: "+92 42 3759 8765",
    email: "muawin.hujjaj@outlook.com",
    website: "https://muawinhujjaj.com",
    dtsLicenceNo: "DTS-4218-LHR",
    iataNo: "27-3-3030",
    packageBrochures: [
      {
        id: "pkg-4218-1",
        title: "Muawin Support Hajj",
        image: "/brochures/muawin-support.jpg",
        description: "Full assistance for elderly."
      }
    ]
  },
  {
    enrl: 4201,
    name: "SAKHI WAHAB HAJJ COMPANY (PVT) LTD.",
    pilgrims: 80,
    logo: "/partners/sakhi.png",
    contactPerson: "Mr. Sakhi Wahab",
    address: "Wahab Plaza, Mozang, Lahore",
    contactNumber: "+92 42 3635 7890",
    email: "sakhiwahab@gmail.com",
    website: "https://sakhiwahab.com",
    dtsLicenceNo: "DTS-4201-LHR",
    iataNo: "27-3-3232",
    packageBrochures: [
      {
        id: "pkg-4201-1",
        title: "Sakhi Classic Hajj",
        image: "/brochures/sakhi-classic.jpg",
        description: "Trusted group travel."
      },
      {
        id: "pkg-4201-2",
        title: "Umrah with Ziyarat",
        image: "/brochures/sakhi-ziyarat.jpg",
        description: "Historical sites visit."
      }
    ]
  },
  {
    enrl: 4126,
    name: "AL MOAZZIN HAJJ & UMRAH SERVICES (PVT) LTD.",
    pilgrims: 147,
    logo: "/partners/moazzin.png",
    contactPerson: "Mr. Moazzin Ali",
    address: "Moazzin Tower, Gulberg II, Lahore",
    contactNumber: "+92 42 3578 9012",
    email: "almoazzin@gmail.com",
    website: "https://almoazzin.com",
    dtsLicenceNo: "DTS-4126-LHR",
    iataNo: "27-3-3434",
    packageBrochures: [
      {
        id: "pkg-4126-1",
        title: "Moazzin Luxury Hajj",
        image: "/brochures/moazzin-luxury.jpg",
        description: "5-star experience."
      }
    ]
  },
  {
    enrl: 4154,
    name: "KARWAN E RFIQUL HARMAIN (PVT) LTD.",
    pilgrims: 80,
    logo: "/partners/rafeeq.png",
    contactPerson: "Mr. Rafiq Ahmed",
    address: "Rafiq Center, Saddar, Rawalpindi",
    contactNumber: "+92 51 5566 7890",
    email: "rafiqul.harmain@yahoo.com",
    website: "https://rafiqulharmain.com",
    dtsLicenceNo: "DTS-4154-RWP",
    iataNo: "27-3-3636",
    packageBrochures: [
      {
        id: "pkg-4154-1",
        title: "Rafiqul Harmain Hajj",
        image: "/brochures/rafiq-hajj.jpg",
        description: "Complete spiritual journey."
      }
    ]
  },
  {
    enrl: 4140,
    name: "KARWAN E AHL E SUNNAT TRAVELS & TOURS (PVT) LTD.",
    pilgrims: 90,
    logo: "/partners/ahlesunnat.png",
    contactPerson: "Mufti Ahmed Raza",
    address: "Jamia Masjid Road, Faisalabad",
    contactNumber: "+92 41 886 5432",
    email: "info@ahlesunnattravels.com",
    website: "https://www.ahlesunnattravels.com",
    dtsLicenceNo: "DTS-4140-FSD",
    iataNo: "27-3-3838",
    packageBrochures: [
      {
        id: "pkg-4140-1",
        title: "Ahl-e-Sunnat Hajj",
        image: "/brochures/ahlesunnat-hajj.jpg",
        description: "Traditional rituals with scholarly guidance."
      },
      {
        id: "pkg-4140-2",
        title: "Dars-e-Hajj Package",
        image: "/brochures/ahlesunnat-dars.jpg",
        description: "Hajj with daily Fiqh lessons."
      }
    ]
  }
];