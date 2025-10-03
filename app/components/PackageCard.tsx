import Link from 'next/link';
import { HajjPackage } from '@/data/packages';
import { Star, Clock, Users, Building2 } from 'lucide-react';

interface PackageCardProps {
  package: HajjPackage;
}

export default function PackageCard({ package: pkg }: PackageCardProps) {
  return (
    <Link href={`/packages/${pkg.id}`}>
      <div 
        className="group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-3xl cursor-pointer h-96"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${pkg.tileBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Package Type Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            {pkg.packageType}
          </span>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300 group-hover:translate-y-[-8px]">
          {/* Package Name */}
          <h3 className="text-xl font-bold mb-3 leading-tight drop-shadow-md">
            {pkg.packageName}
          </h3>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-3 text-sm mb-4">
            {/* Duration */}
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-amber-300" />
              <span>{pkg.duration}</span>
            </div>

            {/* Starting Price */}
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-amber-300" />
              <span className="font-semibold">From {pkg.sharingRoomPrice}</span>
            </div>

            {/* Maktab */}
            <div className="flex items-center space-x-2 col-span-2">
              <Building2 className="w-4 h-4 text-amber-300" />
              <span className="truncate">Maktab: {pkg.maktab}</span>
            </div>

            {/* Makkah Hotel */}
            <div className="flex items-center space-x-2 col-span-2">
              <Building2 className="w-4 h-4 text-amber-300" />
              <span className="truncate">Makkah: {pkg.makkahHotel}</span>
            </div>

            {/* Medinah Hotel */}
            <div className="flex items-center space-x-2 col-span-2">
              <Building2 className="w-4 h-4 text-amber-300" />
              <span className="truncate">Medinah: {pkg.medinahHotel}</span>
            </div>
          </div>

          {/* Price Range */}
          <div className="flex justify-between items-center mb-3">
            <div className="text-amber-300 font-semibold">
              Starting at {pkg.sharingRoomPrice}
            </div>
            <div className="bg-green-600 px-3 py-1 rounded-full text-xs font-semibold">
              View Details →
            </div>
          </div>

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 inline-block">
                <span className="text-white font-semibold text-lg">Explore Package</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}