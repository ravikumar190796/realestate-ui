'use client';

import { Property } from '@/data/properties';

const STORAGE_KEY = 'realestate_properties';

// Initialize with default properties if localStorage is empty
const defaultProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Luxury Villa',
    location: 'Mumbai, Maharashtra',
    price: 45000000,
    sqft: 4500,
    propertyType: 'Villa',
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    ],
    description: 'Stunning modern villa with panoramic views, featuring an open floor plan, high-end finishes, and a beautiful outdoor space perfect for entertaining.',
    amenities: ['Swimming Pool', 'Garage', 'Garden', 'Fireplace', 'Home Office', 'Walk-in Closet'],
    status: 'Available',
  },
  {
    id: '2',
    title: 'Downtown Apartment',
    location: 'Delhi, NCR',
    price: 32000000,
    sqft: 2800,
    propertyType: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800',
    ],
    description: 'Luxurious apartment in the heart of Delhi with floor-to-ceiling windows, premium amenities, and breathtaking city views.',
    amenities: ['Concierge', 'Gym', 'Rooftop Terrace', 'Wine Cellar', 'Smart Home', 'Parking'],
    status: 'Available',
  },
  {
    id: '3',
    title: 'Cozy Family Home',
    location: 'Bangalore, Karnataka',
    price: 6500000,
    sqft: 2200,
    propertyType: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800',
    ],
    description: 'Beautiful family home in a quiet neighborhood with a spacious backyard, updated kitchen, and plenty of natural light throughout.',
    amenities: ['Backyard', 'Garage', 'Fireplace', 'Updated Kitchen', 'Hardwood Floors'],
    status: 'Available',
  },
  {
    id: '4',
    title: 'Beachfront Commercial Space',
    location: 'Goa',
    price: 12000000,
    sqft: 1800,
    propertyType: 'Commercial',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
    ],
    description: 'Stunning beachfront commercial space with direct ocean access, modern amenities, and resort-style living.',
    amenities: ['Ocean View', 'Balcony', 'Pool', 'Gym', 'Beach Access', 'Concierge'],
    status: 'Available',
  },
  {
    id: '5',
    title: 'Residential Plot',
    location: 'Pune, Maharashtra',
    price: 18000000,
    sqft: 3200,
    propertyType: 'Plot',
    images: [
      'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=800',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800',
    ],
    description: 'Prime residential plot in a well-developed area with all necessary approvals and clear title.',
    amenities: ['Clear Title', 'Approved Layout', 'Road Access', 'Water Supply', 'Electricity', 'Parking'],
    status: 'Available',
  },
  {
    id: '6',
    title: 'Mountain View Villa',
    location: 'Dehradun, Uttarakhand',
    price: 45000000,
    sqft: 5800,
    propertyType: 'Villa',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
    ],
    description: 'Magnificent mountain estate with breathtaking views, featuring luxury amenities, multiple living spaces, and private access.',
    amenities: ['Mountain View', 'Private Access', 'Hot Tub', 'Wine Cellar', 'Home Theater', 'Garage', 'Fireplace'],
    status: 'Available',
  },
  {
    id: '7',
    title: 'Urban Commercial Space',
    location: 'Hyderabad, Telangana',
    price: 8500000,
    sqft: 1600,
    propertyType: 'Commercial',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800',
    ],
    description: 'Stylish urban commercial space with modern finishes in a vibrant downtown neighborhood.',
    amenities: ['Modern Design', 'High Ceilings', 'Modern Kitchen', 'City View', 'Parking'],
    status: 'Available',
  },
  {
    id: '8',
    title: 'Suburban Plot',
    location: 'Chennai, Tamil Nadu',
    price: 7500000,
    sqft: 3100,
    propertyType: 'Plot',
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800',
    ],
    description: 'Spacious plot in a family-friendly neighborhood with excellent connectivity, schools nearby, and modern infrastructure.',
    amenities: ['Good Connectivity', 'Schools Nearby', 'Shopping Malls', 'Hospitals', 'Public Transport'],
    status: 'Available',
  },
];

export const getProperties = (): Property[] => {
  if (typeof window === 'undefined') return defaultProperties;
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    // Initialize with default properties
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProperties));
    return defaultProperties;
  }
  
  try {
    return JSON.parse(stored);
  } catch {
    return defaultProperties;
  }
};

export const saveProperty = (property: Property): void => {
  const properties = getProperties();
  const existingIndex = properties.findIndex(p => p.id === property.id);
  
  if (existingIndex >= 0) {
    properties[existingIndex] = property;
  } else {
    properties.push(property);
  }
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(properties));
};

export const deleteProperty = (id: string): void => {
  const properties = getProperties();
  const filtered = properties.filter(p => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
};

export const getPropertyById = (id: string): Property | undefined => {
  const properties = getProperties();
  return properties.find(p => p.id === id);
};

