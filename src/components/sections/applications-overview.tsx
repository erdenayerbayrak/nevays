'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Building, Microscope, Wind, Box, Layers } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function ApplicationsOverview() {
  const t = useTranslations('applications');
  const locale = useLocale();

  const applications = [
    {
      id: 'cleanroom-installation',
      title: 'Temiz Oda Kurulumu',
      description: 'GMP ve ISO 14644 standartlarında temiz oda sistemleri tasarımı ve kurulumu. Pharmaceutical ve medical device üretim tesisleri için kapsamlı çözümler.',
      icon: Building,
      image: '/images/applications/cleanroom-installation.jpg',
      keywords: 'temiz oda kurulumu, cleanroom installation, GMP',
      href: '/applications/clean-room-installation'
    },
    {
      id: 'laboratory-installation',
      title: 'Laboratuvar Kurulumu',
      description: 'Araştırma ve kalite kontrol laboratuvarları için özel tasarım sistemleri. Biosafety cabinet, fume hood ve özel havalandırma çözümleri.',
      icon: Microscope,
      image: '/images/applications/laboratory-installation.jpg',
      keywords: 'laboratuvar kurulumu, lab installation, biosafety',
      href: '/applications/laboratory-installation'
    },
    {
      id: 'hvac-applications',
      title: 'HVAC Uygulamaları',
      description: 'Endüstriyel tesislerde hava teknolojileri entegrasyonu. AHU sistemleri, filtrasyon ve klima kontrol sistemlerinin profesyonel kurulumu.',
      icon: Wind,
      image: '/images/applications/hvac-systems.jpg',
      keywords: 'HVAC uygulamaları, hava teknolojileri, AHU sistemleri',
      href: '/applications/hvac'
    },
    {
      id: 'laf-cabin-systems',
      title: 'LAF Kabin Sistemleri',
      description: 'Laminar Air Flow cabinet sistemleri tasarımı ve imalatı. Sterile çalışma ortamları için portable ve sabit kabin çözümleri.',
      icon: Box,
      image: '/images/applications/laf-cabins.jpg',
      keywords: 'LAF kabin, laminar air flow, sterile kabin',
      href: '/applications/laf-cabin'
    },
    {
      id: 'modular-cleanrooms',
      title: 'Modüler Temiz Oda',
      description: 'Hızlı kurulum imkanı sunan modüler temiz oda sistemleri. Flexible tasarım ve kolay genişletme imkanları ile ekonomik çözümler.',
      icon: Layers,
      image: '/images/applications/modular-cleanrooms.jpg',
      keywords: 'modüler temiz oda, modular cleanroom, flexible design',
      href: '/applications/modular-clean-room'
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Giriş Metni */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Teknik Mükemmellik, Proje Güveni
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            25 yılı aşkın deneyimimizle, kritik üretim ve araştırma ortamlarında 
            mühendislik odaklı çözümler geliştiriyoruz. Her proje, sektörel gereksinimlere 
            özgü tasarlanır ve en yüksek kalite standartlarında uygulanır.
          </p>
        </div>

        {/* Premium Application Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {applications.map((app, index) => {
            const Icon = app.icon;
            
            return (
              <Link 
                key={app.id}
                href={`/${locale}${app.href}`}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Image Background */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={`https://images.unsplash.com/photo-${
                      index === 0 ? '1576671081837-49000212a370' : // Cleanroom
                      index === 1 ? '1582719508461-905c673771fd' : // Laboratory
                      index === 2 ? '1581092795360-fd1ca04f0952' : // HVAC
                      index === 3 ? '1631815588090-d4bfec5b1ccb' : // LAF Cabin
                      '1581091226825-a6a2a5aee158'                   // Modular
                    }?w=800&h=600&fit=crop&crop=center`}
                    alt={app.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Icon */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Keywords Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1 bg-blue-600/80 backdrop-blur-sm rounded-full border border-white/20">
                      <span className="text-xs font-medium text-white">{app.keywords.split(',')[0]}</span>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {app.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    {app.description}
                  </p>
                  
                  {/* CTA */}
                  <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    <span>Detaylı Bilgi</span>
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-teal-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
            );
          })}
        </div>

        {/* Premium CTA Section */}
        <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 rounded-3xl p-12 text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-24 translate-x-24 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-400/20 rounded-full translate-y-20 -translate-x-20 animate-pulse animation-delay-1000"></div>
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center px-6 py-2 mb-6 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-semibold text-white/90">Uzman Mühendislik</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Projeniz İçin Teknik Destek
            </h3>
            
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Hangi uygulama alanında olursa olsun, projenizdeki teknik gereksinimleri 
              değerlendirmek ve size <strong className="text-white">özel çözümler</strong> sunmak için buradayız.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="tel:+905123456789"
                className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px]"
              >
                Teknik Görüşme
              </a>
              <a 
                href="https://wa.me/905123456789?text=Merhaba, uygulama alanları hakkında teknik destek almak istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px]"
              >
                WhatsApp Destek
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}