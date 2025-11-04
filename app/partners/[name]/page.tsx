
import { partnersData } from "@/data/partners";
import PartnerDetailClient from "./PartnerDetailClient";
import { Partner } from "@/types/partners";

type PartnerPageProps = {
  params: Promise<{ name: string }>;
};

export default async function PartnerDetail({ params }: PartnerPageProps) {
  const { name } = await params;
  const partnerName = decodeURIComponent(name);
  const partnerData = partnersData.find((p) => p.name === partnerName);

  if (!partnerData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Partner Not Found</h1>
          <p className="text-gray-600">The requested partner could not be found.</p>
        </div>
      </div>
    );
  }

  return <PartnerDetailClient partnerData={partnerData} />;
}