'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { getProperties } from '@/lib/properties';
import { Property } from '@/data/properties';

export default function PropertiesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [allProperties, setAllProperties] = useState<Property[]>([]);

  useEffect(() => {
    const loadProperties = () => {
      const properties = getProperties();
      setAllProperties(properties);
      setFilteredProperties(properties);
    };
    
    loadProperties();
    
    // Listen for storage changes (when admin adds/edits/deletes)
    window.addEventListener('storage', loadProperties);
    window.addEventListener('storage', loadProperties); // Also listen to custom event
    
    return () => {
      window.removeEventListener('storage', loadProperties);
    };
  }, []);
  const [filters, setFilters] = useState({
    location: '',
    priceRange: '',
    propertyType: '',
  });

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    
    // Apply filters
    let filtered = allProperties;
    
    if (newFilters.propertyType) {
      filtered = filtered.filter(p => p.propertyType === newFilters.propertyType);
    }
    
    if (newFilters.priceRange) {
      const [min, max] = newFilters.priceRange.split('-').map(Number);
      if (max) {
        filtered = filtered.filter(p => p.price >= min && p.price <= max);
      } else {
        filtered = filtered.filter(p => p.price >= min);
      }
    }
    
    if (newFilters.location) {
      filtered = filtered.filter(p => 
        p.location.toLowerCase().includes(newFilters.location.toLowerCase())
      );
    }
    
    setFilteredProperties(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Properties
            </h1>
            <p className="text-gray-600">
              Browse our complete collection of properties
            </p>
          </div>

          {/* Filters and View Toggle */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="Enter location"
                    value={filters.location}
                    onChange={(e) => handleFilterChange('location', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Price Range
                  </label>
                  <select
                    value={filters.priceRange}
                    onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Any Price</option>
                    <option value="0-5000000">Under ₹50 Lakh</option>
                    <option value="5000000-10000000">₹50 Lakh - ₹1 Crore</option>
                    <option value="10000000-20000000">₹1 Crore - ₹2 Crore</option>
                    <option value="20000000-999999999">Over ₹2 Crore</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Property Type
                  </label>
                  <select
                    value={filters.propertyType}
                    onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">All Types</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="Plot">Plot</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>
              </div>
              
              <div className="flex items-end gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${
                    viewMode === 'grid'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  } transition-colors`}
                  aria-label="Grid view"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${
                    viewMode === 'list'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  } transition-colors`}
                  aria-label="List view"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Properties Grid/List */}
          <div className={viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
            : 'space-y-6'
          }>
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} viewMode={viewMode} />
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No properties found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

