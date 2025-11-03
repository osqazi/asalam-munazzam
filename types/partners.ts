// types/partners.ts

export interface PackageBrochure {
  id: string;
  title: string;
  image: string;
  description: string;
}

export interface Partner {
  enrl: number;
  name: string;
  pilgrims: number;
  logo: string;
  shortName: string;
  contactPerson: string;
  address: string;
  contactNumber: string;
  email: string;
  website: string;
  dtsLicenceNo: string;
  iataNo: string;
  packageBrochures: PackageBrochure[];
}

// Optional: Type for the full array
export type PartnersData = Partner[];