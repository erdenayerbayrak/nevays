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

        {/* Uygulama Alanları Grid */}
        <div className="space-y-16">
          {applications.map((app, index) => {
            const Icon = app.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={app.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={!isEven ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mr-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-sm text-blue-600 font-medium">
                      {app.keywords}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {app.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {app.description}
                  </p>
                  
                  <Button variant="outline" asChild>
                    <Link href={`/${locale}${app.href}`}>
                      Detaylı Bilgi
                      <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </Button>
                </div>
                
                <div className={!isEven ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <div className="aspect-w-4 aspect-h-3">
                      <Image
                        src={app.image}
                        alt={app.title}
                        width={600}
                        height={400}
                        className="rounded-2xl object-cover shadow-lg"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bölümü */}
        <div className="text-center mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Projeniz İçin Uzman Mühendislik Desteği
          </h3>
          <p className="text-gray-600 mb-6">
            Hangi uygulama alanında olursa olsun, projenizdeki teknik gereksinimleri 
            değerlendirmek ve size özel çözümler sunmak için buradayız.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="tel:+905123456789">Teknik Görüşme</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://wa.me/905123456789" target="_blank">WhatsApp Destek</a>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}