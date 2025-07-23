'use client';

import { useEffect, useRef } from 'react';

// Mock interactive map component (in real project would use Mapbox or Google Maps)
export default function ContactMapInteractive() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // In a real implementation, you would initialize the map here
    // Example with Mapbox:
    // const map = new mapboxgl.Map({
    //   container: mapRef.current,
    //   style: 'mapbox://styles/mapbox/light-v10',
    //   center: [29.0151, 41.0295], // Istanbul coordinates
    //   zoom: 15
    // });
  }, []);

  return (
    <div className="h-full min-h-[400px] bg-gray-100 relative overflow-hidden">
      {/* Mock Map Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300">
        {/* Grid pattern to simulate map */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(0,0,0,0.1)_1px,_transparent_1px),_linear-gradient(0deg,_rgba(0,0,0,0.1)_1px,_transparent_1px)] bg-[length:20px_20px]" />
        </div>
        
        {/* Mock roads */}
        <div className="absolute top-1/3 left-0 right-0 h-2 bg-gray-400 opacity-60" />
        <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-gray-400 opacity-60" />
        <div className="absolute top-2/3 left-1/4 right-1/4 h-1 bg-gray-500 opacity-40" />
        
        {/* Mock buildings */}
        <div className="absolute top-1/4 left-1/4 w-16 h-12 bg-gray-600 opacity-30 rounded-sm" />
        <div className="absolute top-1/2 right-1/3 w-20 h-16 bg-gray-600 opacity-30 rounded-sm" />
        <div className="absolute bottom-1/3 left-1/3 w-12 h-10 bg-gray-600 opacity-30 rounded-sm" />
        
        {/* Company location marker */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            {/* Pulsing circle */}
            <div className="absolute inset-0 w-8 h-8 bg-brand-primary rounded-full animate-pulse opacity-30" />
            <div className="absolute inset-0 w-6 h-6 bg-brand-primary rounded-full m-1 animate-pulse opacity-50" />
            
            {/* Main marker */}
            <div className="relative w-4 h-4 bg-brand-primary rounded-full m-2 shadow-lg">
              <div className="absolute inset-0.5 bg-white rounded-full" />
              <div className="absolute inset-1 bg-brand-primary rounded-full" />
            </div>
            
            {/* Location pin shadow */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-6 h-2 bg-black/20 rounded-full blur-sm" />
          </div>
        </div>
        
        {/* Nearby landmarks */}
        <div className="absolute top-1/4 right-1/4 text-xs text-gray-600 font-medium">
          <div className="bg-white/80 px-2 py-1 rounded shadow-sm">
            Beşiktaş Merkez
          </div>
        </div>
        
        <div className="absolute bottom-1/4 left-1/4 text-xs text-gray-600 font-medium">
          <div className="bg-white/80 px-2 py-1 rounded shadow-sm">
            Metro İstasyonu
          </div>
        </div>
      </div>
      
      {/* Map controls */}
      <div className="absolute top-4 right-4 flex flex-col space-y-2">
        <button className="w-10 h-10 bg-white shadow-md rounded border hover:bg-gray-50 flex items-center justify-center text-gray-600 font-bold">
          +
        </button>
        <button className="w-10 h-10 bg-white shadow-md rounded border hover:bg-gray-50 flex items-center justify-center text-gray-600 font-bold">
          −
        </button>
      </div>
      
      {/* Attribution */}
      <div className="absolute bottom-2 right-2 text-xs text-gray-500 bg-white/80 px-2 py-1 rounded">
        © NEVAYS Interactive Map
      </div>
    </div>
  );
}