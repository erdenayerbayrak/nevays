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
        
        {/* Giriş */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Uygulama Alanları
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Temiz oda kurulumu, laboratuvar sistemleri ve HVAC uygulamalarında 
            profesyonel mühendislik çözümleri sunuyoruz.
          </p>
        </div>

        {/* Uygulama Kartları */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {applications.map((app, index) => {
            const Icon = app.icon;
            
            return (
              <Link 
                key={app.id}
                href={`/${locale}${app.href}`}
                className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {app.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {app.description}
                    </p>
                    <span className="text-blue-600 text-sm font-medium">
                      Detaylı Bilgi →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* İletişim */}
        <div className="text-center bg-gray-50 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Projeniz İçin Teknik Destek
          </h3>
          <p className="text-gray-600 mb-6">
            Uygulama alanlarımız hakkında detaylı bilgi almak için bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+905301234567"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Telefon: +90 530 123 45 67
            </a>
            <a 
              href="https://wa.me/905301234567" 
              target="_blank"
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}