'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const partnersData = [
  {
    name: 'Pfizer',
    logo: '/logos/logo.png',
    category: 'pharmaceutical'
  },
  {
    name: 'Johnson & Johnson',
    logo: '/logos/images (1).png',
    category: 'pharmaceutical'
  },
  {
    name: 'Roche',
    logo: '/logos/images (2).png',
    category: 'pharmaceutical'
  },
  {
    name: 'Novartis',
    logo: '/logos/360_197_1.avif',
    category: 'pharmaceutical'
  },
  {
    name: 'Samsung',
    logo: '/logos/images.png',
    category: 'electronics'
  },
  {
    name: 'Intel',
    logo: '/logos/logo.png',
    category: 'electronics'
  },
  {
    name: 'TSMC',
    logo: '/logos/images.jpeg',
    category: 'electronics'
  },
  {
    name: 'Abbott',
    logo: '/logos/arion-lg.png',
    category: 'medical'
  },
  {
    name: 'Medtronic',
    logo: '/logos/Aysam-Logo-1-scaled.webp',
    category: 'medical'
  },
  {
    name: 'Siemens',
    logo: '/logos/images.jpeg',
    category: 'industrial'
  },
  {
    name: 'Bosch',
    logo: '/logos/indir.png',
    category: 'industrial'
  },
  {
    name: 'GE Healthcare',
    logo: '/logos/sistema_logo.png',
    category: 'medical'
  }
];

export default function PartnersMarquee() {
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate the partners for seamless loop
  const duplicatedPartners = [...partnersData, ...partnersData];

  return (
    <section className="py-12 bg-gradient-to-r from-neutral-50 to-primary-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary-900 mb-2">
            Güvenilen Partnerlerimiz
          </h2>
          <p className="text-neutral-600">
            Dünya çapında lider şirketlerle gerçekleştirdiğimiz başarılı projeler
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-neutral-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-primary-50 to-transparent z-10" />
        
        <div 
          className="flex space-x-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={`flex space-x-12 animate-marquee ${isHovered ? 'paused' : ''}`}>
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="relative w-32 h-16 flex items-center justify-center p-4 bg-white rounded-xl shadow-sm border border-neutral-100 transition-all duration-500 group-hover:shadow-lg group-hover:-translate-y-1">
                  <div className="relative w-full h-full transition-all duration-500 group-hover:scale-105">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                      sizes="128px"
                    />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-primary-900 text-white text-xs py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    {partner.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent border-t-primary-900" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* EU GMP / ISO 14644 */}
          <div className="bg-gradient-to-b from-purple-50 to-white rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-purple-100/50">
            <div className="text-5xl font-black text-purple-600 mb-3">50+</div>
            <div className="text-gray-700 font-medium leading-tight">
              EU GMP / ISO 14644<br/>
              <span className="text-xs uppercase tracking-wide">STANDARTLARINA UYGUN KURULUM</span>
            </div>
          </div>
          {/* Temiz Oda */}
          <div className="bg-gradient-to-b from-teal-50 to-white rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-teal-100/50">
            <div className="text-5xl font-black text-teal-600 mb-3">100+</div>
            <div className="text-gray-700 font-medium">
              Temiz Oda<br/>
              Ürünü
            </div>
          </div>
          {/* İli Kapsayan */}
          <div className="bg-gradient-to-b from-orange-50 to-white rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-orange-100/50">
            <div className="text-5xl font-black text-orange-600 mb-3">81</div>
            <div className="text-gray-700 font-medium">
              İli Kapsayan<br/>
              Hizmet Ağı
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}