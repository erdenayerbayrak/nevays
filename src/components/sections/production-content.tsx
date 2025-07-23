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
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Temiz Oda Panel Üretimi
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                NEVAYS olarak, partner firmamızla birlikte <strong>temiz oda panelleri</strong> üretiminde 
                teknik mükemmellik ve kalite standartlarını bir araya getiriyoruz. Modern üretim tesisimizde 
                <strong> temiz oda duvar paneli</strong>, <strong>temiz oda tavan paneli</strong> ve 
                <strong> hijyen panel</strong> sistemleri üretilmektedir.
              </p>
              <p>
                <strong>Oval süpürgelik</strong> ve <strong>hijyen süpürgelik</strong> detaylarımız, 
                GMP standartlarına uygun olarak tasarlanmıştır. Bu özel detaylar bakterilerin birikmesini 
                önleyerek maksimum hijyen sağlar. İlaç, gıda ve elektronik sektörlerinin katı gereksinimlerini 
                karşılayacak şekilde geliştirilmiştir.
              </p>
              <p>
                <strong>Temiz oda paneli</strong> üretimimizde kullandığımız HPL (High Pressure Laminate) 
                malzemeler, antibakteriyel özellikli olup uzun ömürlü kullanım sağlar. Panel sistemlerimiz 
                kolay montaj ve demontaj imkanı sunarak proje sürelerini optimize eder.
              </p>
              <p>
                Referans teknoloji firmalarımız olan cleanestroom.com.tr, hijyenpanel.com ve aksteril.com 
                standardlarında üretim yaparak, sektörde güvenilir bir çözüm ortağı olarak hizmet veriyoruz.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3">
              <Image
                src="/images/production/panel-manufacturing.jpg"
                alt="Temiz oda panel üretim süreci"
                width={600}
                height={400}
                className="rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Özellikler Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-2">
                  {feature.description}
                </p>
                <p className="text-sm text-blue-600 font-medium">
                  {feature.keywords}
                </p>
              </div>
            );
          })}
        </div>

        {/* Teknik Spesifikasyonlar */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Teknik Spesifikasyonlar</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Panel Özellikleri</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Kalınlik: 50mm, 75mm, 100mm seçenekleri</li>
                <li>• Yüzey: Antibakteriyel HPL kaplama</li>
                <li>• Çekirdek: Mineral yün veya poliüretan</li>
                <li>• Kenar detayları: Alüminyum profil sistemi</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Hijyenik Detaylar</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Oval süpürgelik: R=25mm yarıçapında</li>
                <li>• Köşe detayları: Bakteri birikmesini önleyici</li>
                <li>• Yüzey pürüzlülüğü: Ra &lt; 0.8 μm</li>
                <li>• Temizlik: Dezenfektan ile uyumlu</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Referans Firmalar */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Referans Teknolojileri</h3>
          <p className="text-gray-600 mb-8">
            Üretim süreçlerimizde sektörün öncü firmalarının teknolojilerinden ilham alıyoruz
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-600">
            <span className="bg-blue-50 px-3 py-1 rounded-full">cleanestroom.com.tr</span>
            <span className="bg-blue-50 px-3 py-1 rounded-full">hijyenpanel.com</span>
            <span className="bg-blue-50 px-3 py-1 rounded-full">aksteril.com</span>
          </div>
        </div>

        {/* CTA Bölümü */}
        <div className="text-center bg-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Panel Üretim Projeniz İçin Görüşelim</h3>
          <p className="text-blue-100 mb-6">
            Özel gereksinimlerinize uygun temiz oda paneli çözümleri geliştiriyoruz
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="tel:+905123456789">Hemen Arayın</a>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <a href="https://wa.me/905123456789" target="_blank">WhatsApp</a>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}