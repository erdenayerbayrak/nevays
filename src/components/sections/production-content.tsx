'use client';

import { useTranslations } from 'next-intl';
import { Factory, Shield, Settings, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ProductionContent() {
  const t = useTranslations('production');

  const features = [
    {
      icon: Factory,
      title: 'Temiz Oda Panelleri',
      description: 'Yüksek kaliteli malzemelerle üretilen duvar ve tavan panelleri. Kolay montaj ve demontaj imkanı sunar.',
      keywords: 'temiz oda paneli, duvar paneli'
    },
    {
      icon: Shield,
      title: 'Antibakteriyel Malzemeler',
      description: 'Mikroorganizmaların üremesini engelleyen özel kaplama teknolojileri ile maksimum hijyen sağlanır.',
      keywords: 'antibakteriyel panel, hijyen panel'
    },
    {
      icon: Settings,
      title: 'Hijyenik Süpürgelik',
      description: 'Oval süpürgelik detayları ile temizlik kolaylığı ve estetik bütünlük bir arada sunulur.',
      keywords: 'oval süpürgelik, hijyenik detay'
    },
    {
      icon: CheckCircle,
      title: 'Kalite Standartları',
      description: 'GMP ve ISO standartlarına uygun üretim süreçleri ile güvenilir çözümler geliştiriyoruz.',
      keywords: 'GMP uyumlu, ISO standart'
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Ana İçerik */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Temiz Oda Panel Üretimi
          </h2>
          <div className="max-w-4xl mx-auto text-gray-600 space-y-4">
            <p>
              NEVAYS olarak, partner firmamızla birlikte <strong>temiz oda panelleri</strong> üretiminde 
              teknik mükemmellik ve kalite standartlarını bir araya getiriyoruz. Modern üretim tesisimizde 
              <strong> temiz oda duvar paneli</strong>, <strong>temiz oda tavan paneli</strong> ve 
              <strong> hijyen panel</strong> sistemleri üretilmektedir.
            </p>
            <p>
              <strong>Oval süpürgelik</strong> ve <strong>hijyen süpürgelik</strong> detaylarımız, 
              GMP standartlarına uygun olarak tasarlanmıştır. Bu özel detaylar bakterilerin birikmesini 
              önleyerek maksimum hijyen sağlar.
            </p>
            <p>
              <strong>Temiz oda paneli</strong> üretimimizde kullandığımız HPL malzemeler, antibakteriyel 
              özellikli olup uzun ömürlü kullanım sağlar. Panel sistemlerimiz kolay montaj ve demontaj 
              imkanı sunarak proje sürelerini optimize eder.
            </p>
          </div>
        </div>

        {/* Özellikler */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* İletişim */}
        <div className="text-center bg-gray-50 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Panel Üretim Projeniz İçin İletişime Geçin
          </h3>
          <p className="text-gray-600 mb-6">
            Özel gereksinimlerinize uygun temiz oda paneli çözümleri geliştiriyoruz
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