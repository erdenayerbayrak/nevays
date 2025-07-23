'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

const references = [
  { name: 'ASELSAN', logo: '/logos/aselsan-logo-1.jpg' },
  { name: 'ATABAY İLAÇ', logo: '/logos/images.png' },
  { name: 'VALEO', logo: '/logos/Valeo_Logo.svg' },
  { name: 'SİSTEMA', logo: '/logos/sistema_logo.png' },
  { name: 'SAMSUNG', logo: '/logos/indir.png' },
  { name: 'AYSAM', logo: '/logos/Aysam-Logo-1-scaled.webp' },
  { name: 'TAY AVIATION', logo: '/logos/tay-new-logo-removebg-preview.png' },
  { name: 'ARİON İLAÇ', logo: '/logos/arion-lg.png' },
  { name: 'SMART GÜNEŞ TEKNOLOJİLERİ', logo: '/logos/360_197_1.avif' },
  { name: 'WORLD MEDICINE', logo: '/logos/logo.png' },
  { name: 'TÜRK İLAÇ SERUM SANAYİ', logo: '/logos/images (2).png' },
  { name: 'ARMADA FOODS', logo: '/logos/images (1).png' },
  { name: 'SONİTUS', logo: '/logos/images.jpeg' },
  { name: 'AYSAM GROUP', logo: '/logos/Aysam-Logo-1-scaled (1).webp' },
];

export default function ReferencesMarquee() {
  return (
    <section id="references" className="py-20 bg-gradient-to-br from-white via-gray-50/50 to-slate-50 border-y border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
             Referanslarımız
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            İlaç, sağlık ve teknoloji sektörünün lider firmalarıyla gerçekleştirdiğimiz 
            <strong> cleanroom</strong> ve <strong>laboratuvar kurulum</strong> projeleri
          </p>
        </div>
      </div>
      
      <div className="relative overflow-hidden">
        {/* Gradient Fade Edges */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>
        
        <div className="flex animate-marquee">
          {/* First set */}
          <div className="flex items-center space-x-16 pr-16">
            {references.map((ref, index) => (
              <div
                key={`${ref.name}-1-${index}`}
                className="group flex-shrink-0 h-20 w-48 flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:scale-105"
              >
                <Image
                  src={ref.logo}
                  alt={ref.name}
                  width={180}
                  height={72}
                  className="object-contain max-h-full max-w-full filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center space-x-16 pr-16">
            {references.map((ref, index) => (
              <div
                key={`${ref.name}-2-${index}`}
                className="group flex-shrink-0 h-20 w-48 flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:scale-105"
              >
                <Image
                  src={ref.logo}
                  alt={ref.name}
                  width={180}
                  height={72}
                  className="object-contain max-h-full max-w-full filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Premium Stats Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Stat 1 */}
          <div className="group relative bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-3xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
            <div className="relative z-10 text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-gray-700 font-semibold text-sm leading-tight">
                EU GMP / ISO 14644<br/>
                <span className="text-blue-600">STANDARTLARINA UYGUN KURULUM</span>
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="group relative bg-gradient-to-br from-teal-50 via-white to-teal-50 rounded-3xl p-8 border border-teal-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-teal-500/10 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
            <div className="relative z-10 text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                100+
              </div>
              <div className="text-gray-700 font-semibold text-sm leading-tight">
                <span className="text-teal-600">Temiz Oda</span><br/>
                Ürünü
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="group relative bg-gradient-to-br from-purple-50 via-white to-purple-50 rounded-3xl p-8 border border-purple-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
            <div className="relative z-10 text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                81
              </div>
              <div className="text-gray-700 font-semibold text-sm leading-tight">
                <span className="text-purple-600">İli Kapsayan</span><br/>
                Hizmet Ağı
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}