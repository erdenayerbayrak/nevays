'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import LoadingSpinner from '@/components/ui/loading-spinner';

// Dynamically import map component
const MapComponent = dynamic(() => import('@/components/ui/contact-map-interactive'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <LoadingSpinner size="lg" />
    </div>
  ),
});

export default function ContactMap() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="bg-gray-100 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="relative">
      <MapComponent />
      
      {/* Overlay with company info */}
      <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
        <h3 className="font-display font-heading text-lg text-gray-900 mb-2">
          NEVAYS Merkez Ofis
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Atatürk Mahallesi, Teknoloji Caddesi No: 123<br />
          Beşiktaş / İstanbul 34349<br />
          Türkiye
        </p>
        <div className="mt-3 pt-3 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            Toplu taşıma ile kolay erişim.<br />
            Otopark mevcuttur.
          </p>
        </div>
      </div>
    </div>
  );
}