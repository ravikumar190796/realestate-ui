export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  sqft: number;
  propertyType: 'Apartment' | 'Villa' | 'Plot' | 'Commercial';
  images: string[];
  description: string;
  amenities: string[];
  status: 'Available' | 'Sold';
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Luxury Villa',
    location: 'Beverly Hills, CA',
    price: 2500000,
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4500,
    propertyType: 'Villa',
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    ],
    description: 'Stunning modern villa with panoramic views, featuring an open floor plan, high-end finishes, and a beautiful outdoor space perfect for entertaining.',
    amenities: ['Swimming Pool', 'Garage', 'Garden', 'Fireplace', 'Home Office', 'Walk-in Closet'],
    status: 'Active',
  },
  {
    id: '2',
    title: 'Downtown Penthouse',
    location: 'Manhattan, NY',
    price: 3200000,
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2800,
    propertyType: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800',
    ],
    description: 'Luxurious penthouse in the heart of Manhattan with floor-to-ceiling windows, premium amenities, and breathtaking city views.',
    amenities: ['Concierge', 'Gym', 'Rooftop Terrace', 'Wine Cellar', 'Smart Home', 'Parking'],
    status: 'Active',
  },
  {
    id: '3',
    title: 'Cozy Family Home',
    location: 'Austin, TX',
    price: 650000,
    bedrooms: 4,
    bathrooms: 2,
    sqft: 2200,
    propertyType: 'House',
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800',
    ],
    description: 'Beautiful family home in a quiet neighborhood with a spacious backyard, updated kitchen, and plenty of natural light throughout.',
    amenities: ['Backyard', 'Garage', 'Fireplace', 'Updated Kitchen', 'Hardwood Floors'],
    status: 'Active',
  },
  {
    id: '4',
    title: 'Beachfront Condo',
    location: 'Miami Beach, FL',
    price: 1200000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1800,
    propertyType: 'Condo',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
    ],
    description: 'Stunning beachfront condo with direct ocean access, modern amenities, and resort-style living in the heart of Miami Beach.',
    amenities: ['Ocean View', 'Balcony', 'Pool', 'Gym', 'Beach Access', 'Concierge'],
    status: 'Active',
  },
  {
    id: '5',
    title: 'Historic Brownstone',
    location: 'Brooklyn, NY',
    price: 1800000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    propertyType: 'House',
    images: [
      'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=800',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800',
    ],
    description: 'Charming historic brownstone with original architectural details, recently renovated with modern conveniences while preserving its character.',
    amenities: ['Original Details', 'Garden', 'Fireplace', 'Updated Kitchen', 'Basement', 'Parking'],
    status: 'Active',
  },
  {
    id: '6',
    title: 'Mountain View Estate',
    location: 'Aspen, CO',
    price: 4500000,
    bedrooms: 6,
    bathrooms: 5,
    sqft: 5800,
    propertyType: 'Villa',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
    ],
    description: 'Magnificent mountain estate with breathtaking views, featuring luxury amenities, multiple living spaces, and a private ski access.',
    amenities: ['Mountain View', 'Ski Access', 'Hot Tub', 'Wine Cellar', 'Home Theater', 'Garage', 'Fireplace'],
    status: 'Active',
  },
  {
    id: '7',
    title: 'Urban Loft',
    location: 'Seattle, WA',
    price: 850000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1600,
    propertyType: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800',
    ],
    description: 'Stylish urban loft with exposed brick, high ceilings, and modern finishes in a vibrant downtown neighborhood.',
    amenities: ['Exposed Brick', 'High Ceilings', 'Modern Kitchen', 'City View', 'Parking'],
    status: 'Active',
  },
  {
    id: '8',
    title: 'Suburban Dream Home',
    location: 'Portland, OR',
    price: 750000,
    bedrooms: 5,
    bathrooms: 3,
    sqft: 3100,
    propertyType: 'House',
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800',
    ],
    description: 'Spacious suburban home in a family-friendly neighborhood with excellent schools, large yard, and modern updates throughout.',
    amenities: ['Large Yard', 'Garage', 'Updated Kitchen', 'Fireplace', 'Hardwood Floors', 'Home Office'],
    status: 'Active',
  },
];

