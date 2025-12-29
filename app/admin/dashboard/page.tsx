'use client';

import { useEffect, useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';
import AdminSidebar from '@/components/AdminSidebar';
import { getProperties } from '@/lib/properties';
import { Property } from '@/data/properties';

function AdminDashboardContent() {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    setProperties(getProperties());
  }, []);

  const stats = [
    { 
      label: 'Total Properties', 
      value: properties.length.toString(), 
      icon: '🏠',
      color: 'bg-blue-500'
    },
    { 
      label: 'Available', 
      value: properties.filter(p => p.status === 'Available').length.toString(), 
      icon: '✅',
      color: 'bg-green-500'
    },
    { 
      label: 'Sold', 
      value: properties.filter(p => p.status === 'Sold').length.toString(), 
      icon: '💰',
      color: 'bg-yellow-500'
    },
    { 
      label: 'Total Value', 
      value: `₹${properties.reduce((sum, p) => sum + p.price, 0).toLocaleString('en-IN')}`, 
      icon: '📊',
      color: 'bg-purple-500'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className="text-4xl">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Properties</h2>
          <div className="space-y-4">
            {properties.slice(0, 5).map((property) => (
              <div key={property.id} className="flex items-center justify-between py-3 border-b last:border-0">
                <div>
                  <p className="font-semibold text-gray-900">{property.title}</p>
                  <p className="text-sm text-gray-600">{property.location}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">₹{property.price.toLocaleString('en-IN')}</p>
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      property.status === 'Available'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {property.status}
                  </span>
                </div>
              </div>
            ))}
            {properties.length === 0 && (
              <p className="text-gray-500 text-center py-4">No properties found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <ProtectedRoute>
      <AdminDashboardContent />
    </ProtectedRoute>
  );
}

