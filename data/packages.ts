export interface HajjPackage {
  id: number;
  packageName: string;
  packageType: string;
  maktab: string;
  doubleBedRoomPrice: string;
  tripleBedRoomPrice: string;
  quadBedRoomPrice: string;
  sharingRoomPrice: string;
  makkahHotel: string;
  medinahHotel: string;
  isAziziaStay: boolean;
  aziziaPlace: string;
  isAirTicketIncluded: boolean;
  isQurbaniIncluded: boolean;
  isMealIncluded: boolean;
  isVisaIncluded: boolean;
  isBusServiceIncluded: boolean;
  tileBackground: string;
  duration: string;
}

export const packages: HajjPackage[] = [
  {
    id: 1,
    packageName: "17-18 Days Hajj Short Package",
    packageType: "Short Package",
    maktab: 'A',
    doubleBedRoomPrice: "PKR 2,810,000",
    tripleBedRoomPrice: "PKR 2,435,000",
    quadBedRoomPrice: "PKR 2,210,000",
    sharingRoomPrice: "PKR 2,150,000",
    makkahHotel: "Swiss Al Makam",
    medinahHotel: "Taibah Front",
    isAziziaStay: false,
    aziziaPlace: "N/A",
    isAirTicketIncluded: true,
    isQurbaniIncluded: false,
    isMealIncluded: true,
    isVisaIncluded: true,
    isBusServiceIncluded: true,
    tileBackground: "/pkg-1.webp",
    duration: "17-18 Days"
  },
  {
    id: 2,
    packageName: "25 Days Hajj Premium Package",
    packageType: "Premium Package",
    maktab: 'B',
    doubleBedRoomPrice: "PKR 3,500,000",
    tripleBedRoomPrice: "PKR 3,200,000",
    quadBedRoomPrice: "PKR 2,900,000",
    sharingRoomPrice: "PKR 2,750,000",
    makkahHotel: "Makkah Clock Royal Tower",
    medinahHotel: "Anwar Al Madinah Mövenpick",
    isAziziaStay: true,
    aziziaPlace: "Azizia Premium Residence",
    isAirTicketIncluded: true,
    isQurbaniIncluded: true,
    isMealIncluded: true,
    isVisaIncluded: true,
    isBusServiceIncluded: true,
    tileBackground: "/pkg-2.webp",
    duration: "25 Days"
  },
  {
    id: 3,
    packageName: "21 Days Hajj Standard Package",
    packageType: "Standard Package",
    maktab: 'D',
    doubleBedRoomPrice: "PKR 3,100,000",
    tripleBedRoomPrice: "PKR 2,800,000",
    quadBedRoomPrice: "PKR 2,600,000",
    sharingRoomPrice: "PKR 2,450,000",
    makkahHotel: "Intercontinental Makkah",
    medinahHotel: "Dar Al Taqwa Hotel",
    isAziziaStay: false,
    aziziaPlace: "N/A",
    isAirTicketIncluded: true,
    isQurbaniIncluded: false,
    isMealIncluded: true,
    isVisaIncluded: true,
    isBusServiceIncluded: true,
    tileBackground: "/pkg-3.webp",
    duration: "21 Days"
  },
  {
    id: 4,
    packageName: "30 Days Hajj Luxury Package",
    packageType: "Luxury Package",
    maktab: 'A',
    doubleBedRoomPrice: "PKR 4,200,000",
    tripleBedRoomPrice: "PKR 3,800,000",
    quadBedRoomPrice: "PKR 3,500,000",
    sharingRoomPrice: "PKR 3,200,000",
    makkahHotel: "Raffles Makkah",
    medinahHotel: "Sheraton Madinah",
    isAziziaStay: true,
    aziziaPlace: "Azizia Luxury Camp",
    isAirTicketIncluded: true,
    isQurbaniIncluded: true,
    isMealIncluded: true,
    isVisaIncluded: true,
    isBusServiceIncluded: true,
    tileBackground: "/pkg-4.webp",
    duration: "30 Days"
  },
  {
    id: 5,
    packageName: "19 Days Hajj Economic Package",
    packageType: "Economic Package",
    maktab: 'B',
    doubleBedRoomPrice: "PKR 2,600,000",
    tripleBedRoomPrice: "PKR 2,300,000",
    quadBedRoomPrice: "PKR 2,100,000",
    sharingRoomPrice: "PKR 1,950,000",
    makkahHotel: "Al Marwa Rayyan Hotel",
    medinahHotel: "Al Haram Hotel Madinah",
    isAziziaStay: false,
    aziziaPlace: "N/A",
    isAirTicketIncluded: true,
    isQurbaniIncluded: false,
    isMealIncluded: false,
    isVisaIncluded: true,
    isBusServiceIncluded: true,
    tileBackground: "/pkg-5.webp",
    duration: "19 Days"
  },
  {
    id: 6,
    packageName: "28 Days Hajj Deluxe Package",
    packageType: "Deluxe Package",
    maktab: 'D',
    doubleBedRoomPrice: "PKR 3,800,000",
    tripleBedRoomPrice: "PKR 3,400,000",
    quadBedRoomPrice: "PKR 3,100,000",
    sharingRoomPrice: "PKR 2,900,000",
    makkahHotel: "Swissôtel Makkah",
    medinahHotel: "Al Mas Hotel Al Madinah",
    isAziziaStay: true,
    aziziaPlace: "Azizia Deluxe Tent",
    isAirTicketIncluded: true,
    isQurbaniIncluded: true,
    isMealIncluded: true,
    isVisaIncluded: true,
    isBusServiceIncluded: true,
    tileBackground: "/pkg-6.webp",
    duration: "28 Days"
  }
];