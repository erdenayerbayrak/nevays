'use client';

import { Shield, Cpu, Building, Car, Leaf } from 'lucide-react';
import Link from 'next/link';
import { useLocale } from 'next-intl';

const sectors = [
  {
    icon: Shield,
    title: 'Savunma Sanayi',
    subtitle: 'Üretim Süreçleri',
    description: 'Savunma sanayi üretim süreçlerinde hassas parçaların montajı esnasında partikül istenmeyen alanlar için temiz oda kurulumu gerçekleştirilir.',
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600'
  },
  {
    icon: Cpu,
    title: 'Nano Teknoloji',
    subtitle: 'Özel Alanlar',
    description: 'Nanoteknoloji laboratuvarları, en yüksek temiz oda standartlarının uygulandığı, ultra hassas cihazlar ile çalışmaların gerçekleştirildiği alanlardır.',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
  {
    icon: Building,
    title: 'Medikal Endüstri',
    subtitle: 'Hijyenik Alanlar',
    description: 'Medikal müdahalelerin uygulandığı alanlarda hijyenik alanlara ihtiyaç duyulmaktadır. Bu hijyenik ortamları sağlamak için temiz oda kurulumu yapılır.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    icon: Car,
    title: 'Otomotiv Sanayi',
    subtitle: 'Montaj Süreçleri',
    description: 'Otomotiv sanayi üretim tesisleri birçok parçanın montajlandığı alanlardır. Üretimlerin bazı bölümleri için hava kontrollü alan kurulumu gerçekleştirilir.',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600'
  },
  {
    icon: Leaf,
    title: 'Çevre Koruma',
    subtitle: 'Biyoteknoloji Laboratuvarları',
    description: 'Biyoteknoloji laboratuvarları, en yüksek temiz oda standartlarının uygulandığı, insanı ve çevreyi koruyan faktörler içeren hassas alanlardır.',
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-600'
  }
];

export default function SectorSolutions() {
  const locale = useLocale();

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-2 mb-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-full border border-blue-100">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-semibold text-blue-700">Sektörel Uzmanlık</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-teal-700 bg-clip-text text-transparent">
              Sektöre Özel Çözümler Sunuyoruz
            </span>
          </h2>
          
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent w-24"></div>
            <div className="mx-4 w-3 h-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-teal-300 to-transparent w-24"></div>
          </div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Her sektörün kendine özgü gereksinimlerini anlayarak, 
            <strong className="text-blue-700"> GMP uyumlu temiz oda sistemleri</strong> tasarlıyor ve kuruyoruz.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <Link 
                key={index} 
                href={`/${locale}/applications`}
                className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100/50 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray-100/30 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
                
                {/* Icon */}
                <div className={`relative flex items-center justify-center w-16 h-16 ${sector.bgColor} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <Icon className={`h-8 w-8 ${sector.iconColor}`} />
                  <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {sector.title}
                  </h3>
                  
                  <div className="text-sm font-semibold text-blue-600 mb-4">
                    {sector.subtitle}
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {sector.description}
                  </p>
                  
                  {/* CTA */}
                  <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    <span>Detayları İncele</span>
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 rounded-3xl p-8 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-24 translate-x-24 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-400/20 rounded-full translate-y-20 -translate-x-20 animate-pulse animation-delay-1000"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Projeniz İçin Özel Çözüm Arıyorsunuz?
              </h3>
              <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                Sektörünüze özel <strong className="text-white">temiz oda sistemleri</strong> ve 
                <strong className="text-white"> mühendislik çözümleri</strong> için uzman ekibimizle görüşün.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+905123456789"
                  className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Hemen Arayın
                </a>
                <a 
                  href="https://wa.me/905123456789?text=Merhaba, sektörüme özel temiz oda çözümleri hakkında bilgi almak istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}