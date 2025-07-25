'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const partnersData = [
  {
    name: 'Pfizer',
    logo: 'https://logos-world.net/wp-content/uploads/2020/11/Pfizer-Logo.png',
    category: 'pharmaceutical'
  },
  {
    name: 'Johnson & Johnson',
    logo: 'https://logos-world.net/wp-content/uploads/2020/08/Johnson-and-Johnson-Logo.png',
    category: 'pharmaceutical'
  },
  {
    name: 'Roche',
    logo: 'https://logos-world.net/wp-content/uploads/2020/11/Roche-Logo.png',
    category: 'pharmaceutical'
  },
  {
    name: 'Novartis',
    logo: 'https://logos-world.net/wp-content/uploads/2020/11/Novartis-Logo.png',
    category: 'pharmaceutical'
  },
  {
    name: 'Samsung',
    logo: 'https://logos-world.net/wp-content/uploads/2020/04/Samsung-Logo.png',
    category: 'electronics'
  },
  {
    name: 'Intel',
    logo: 'https://logos-world.net/wp-content/uploads/2020/03/Intel-Logo.png',
    category: 'electronics'
  },
  {
    name: 'TSMC',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/TSMC.svg',
    category: 'electronics'
  },
  {
    name: 'Abbott',
    logo: 'https://logos-world.net/wp-content/uploads/2021/02/Abbott-Logo.png',
    category: 'medical'
  },
  {
    name: 'Medtronic',
    logo: 'https://logos-world.net/wp-content/uploads/2021/02/Medtronic-Logo.png',
    category: 'medical'
  },
  {
    name: 'Siemens',
    logo: 'https://logos-world.net/wp-content/uploads/2020/06/Siemens-Logo.png',
    category: 'industrial'
  },
  {
    name: 'Bosch',
    logo: 'https://logos-world.net/wp-content/uploads/2020/08/Bosch-Logo.png',
    category: 'industrial'
  },
  {
    name: 'GE Healthcare',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/GE_Healthcare_logo.svg',
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
            <div className="text-3xl font-black text-primary-600 mb-2">150+</div>
            <div className="text-sm text-neutral-600">Başarılı Proje</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
            <div className="text-3xl font-black text-primary-600 mb-2">50+</div>
            <div className="text-sm text-neutral-600">Global Partner</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
            <div className="text-3xl font-black text-primary-600 mb-2">25+</div>
            <div className="text-sm text-neutral-600">Ülke</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
            <div className="text-3xl font-black text-primary-600 mb-2">98%</div>
            <div className="text-sm text-neutral-600">Müşteri Memnuniyeti</div>
          </div>
        </div>
      </div>
    </section>
  );
}