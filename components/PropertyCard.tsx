'use client';

import Link from 'next/link';
import { Property } from '@/data/properties';
import Image from 'next/image';
import { formatPrice } from '@/lib/currency';

interface PropertyCardProps {
  property: Property;
  viewMode?: 'grid' | 'list';
}

export default function PropertyCard({ property, viewMode = 'grid' }: PropertyCardProps) {

  if (viewMode === 'list') {
    return (
      <div className="card flex flex-col md:flex-row">
        <div className="relative w-full md:w-64 h-48 md:h-auto flex-shrink-0">
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
            <p className="text-gray-600 mb-4">{property.location}</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
              <span>{property.sqft.toLocaleString('en-IN')} sq ft</span>
              <span className="text-primary-600 font-semibold">{property.propertyType}</span>
            </div>
            <p className="text-2xl font-bold text-primary-600 mb-4">{formatPrice(property.price)}</p>
          </div>
          <Link
            href={`/properties/${property.id}`}
            className="btn-primary inline-block text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="relative h-48 w-full">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
        <p className="text-gray-600 mb-4">{property.location}</p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
          <span>{property.sqft.toLocaleString('en-IN')} sq ft</span>
          <span className="text-primary-600 font-semibold">{property.propertyType}</span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-primary-600">{formatPrice(property.price)}</p>
          <Link
            href={`/properties/${property.id}`}
            className="btn-primary"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

