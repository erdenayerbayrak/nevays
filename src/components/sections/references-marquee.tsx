'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

const references = [
  { name: 'ASELSAN', logo: '/logos/aselsan.png' },
  { name: 'ATABAY İLAÇ', logo: '/logos/atabay.png' },
  { name: 'WORLD MEDICINE', logo: '/logos/world-medicine.png' },
  { name: 'TÜRK İLAÇ SERUM SANAYİ', logo: '/logos/turk-ilac.png' },
  { name: 'VALEO', logo: '/logos/valeo.png' },
  { name: 'SMART GÜNEŞ TEKNOLOJİLERİ', logo: '/logos/smart-solar.png' },
  { name: 'ARMADA FOODS', logo: '/logos/armada.png' },
  { name: 'SİSTEMA', logo: '/logos/sistema.png' },
  { name: 'SAMSUNG', logo: '/logos/samsung.png' },
  { name: 'AYSAM', logo: '/logos/aysam.png' },
  { name: 'SONİTUS', logo: '/logos/sonitus.png' },
  { name: 'SONOFARMA', logo: '/logos/sonofarma.png' },
  { name: 'TAY AVIATION', logo: '/logos/tay-aviation.png' },
  { name: 'ARİON İLAÇ', logo: '/logos/arion.png' },
];

export default function ReferencesMarquee() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee">
          {/* First set */}
          <div className="flex items-center space-x-12 pr-12">
            {references.map((ref, index) => (
              <div
                key={`${ref.name}-1-${index}`}
                className="flex-shrink-0 h-16 w-40 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={ref.logo}
                  alt={ref.name}
                  width={160}
                  height={64}
                  className="object-contain max-h-full max-w-full"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center space-x-12 pr-12">
            {references.map((ref, index) => (
              <div
                key={`${ref.name}-2-${index}`}
                className="flex-shrink-0 h-16 w-40 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={ref.logo}
                  alt={ref.name}
                  width={160}
                  height={64}
                  className="object-contain max-h-full max-w-full"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}