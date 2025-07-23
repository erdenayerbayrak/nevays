'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Section from '@/components/ui/section';
import LoadingSpinner from '@/components/ui/loading-spinner';

// Dynamically import the map component to avoid SSR issues
const WorldMap = dynamic(() => import('@/components/ui/world-map'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-96">
      <LoadingSpinner size="lg" />
    </div>
  ),
});

const regions = [
  { name: 'Europe', projects: 180, coords: [15, 54] as [number, number] },
  { name: 'Middle East', projects: 120, coords: [45, 25] as [number, number] },
  { name: 'North Africa', projects: 85, coords: [0, 28] as [number, number] },
  { name: 'Asia Pacific', projects: 95, coords: [100, 35] as [number, number] },
  { name: 'Americas', projects: 40, coords: [-75, 40] as [number, number] },
];

export default function WorldMapSection() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Section background="dark">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-heading text-white mb-4">
            Global Varlığımız
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Dünya çapında 45 ülkede 500+ başarılı proje
          </p>
        </div>
        <div className="flex items-center justify-center h-96">
          <LoadingSpinner size="lg" />
        </div>
      </Section>
    );
  }

  return (
    <Section background="dark">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-heading text-white mb-4">
          Global Varlığımız
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Dünya çapında 45 ülkede 500+ başarılı proje
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
        <WorldMap 
          regions={regions}
          onRegionHover={setSelectedRegion}
          selectedRegion={selectedRegion}
        />

        {/* Region Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
          {regions.map((region) => (
            <div
              key={region.name}
              className={`text-center p-4 rounded-lg transition-all duration-300 cursor-pointer ${
                selectedRegion === region.name
                  ? 'bg-brand-primary text-white'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              onMouseEnter={() => setSelectedRegion(region.name)}
              onMouseLeave={() => setSelectedRegion(null)}
            >
              <div className="text-2xl font-display font-heading text-brand-secondary mb-1">
                {region.projects}
              </div>
              <div className="text-sm opacity-80">
                {region.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}