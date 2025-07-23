'use client';

import { useLocale } from 'next-intl';
import { Layers, DoorOpen, Package, Shirt } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function ProductsOverview() {
  const locale = useLocale();

  const products = [
    {
      id: 'clean-room-panels',
      title: 'Temiz Oda Panelleri',
      description: 'HPL ve sac metal yüzeyler ile antibakteriyel özellikli duvar ve tavan panelleri. GMP uyumlu ve kolay temizlenebilir yüzeyler.',
      icon: Layers,
      image: '/images/products/cleanroom-panels.jpg',
      keywords: 'temiz oda paneli, HPL panel, antibakteriyel panel',
      href: '/products/clean-room-panels',
      features: ['Antibakteriyel Yüzey', 'Kolay Montaj', 'GMP Uyumlu', 'Oval Süpürgelik']
    },
    {
      id: 'clean-room-doors',
      title: 'Temiz Oda Kapıları',
      description: 'Hermetic seal özelliği ile pressure difference koruyabilen özel temiz oda kapıları. Manuel ve otomatik açılım seçenekleri.',
      icon: DoorOpen,
      image: '/images/products/cleanroom-doors.jpg',
      keywords: 'temiz oda kapısı, hermetic door, sliding door',
      href: '/products/clean-room-doors',
      features: ['Hermetic Seal', 'Pressure Resistant', 'Glass Window', 'Emergency Exit']
    },
    {
      id: 'pass-box',
      title: 'Pass Box Sistemleri',
      description: 'Temiz odalar arası güvenli materyal transferi için UV sterilizasyon ve interlock sistemli pass box çözümleri.',
      icon: Package,
      image: '/images/products/pass-box.jpg',
      keywords: 'pass box, material transfer, UV sterilization',
      href: '/products/pass-box',
      features: ['UV Sterilization', 'Interlock System', 'HEPA Filter', 'Different Sizes']
    },
    {
      id: 'clean-room-clothing',
      title: 'Temiz Oda Kıyafetleri',
      description: 'Antistatic ve particle-free özellikli temiz oda tulumları, ayakkabıları ve aksesuarları. ESD korumalı ürün seçenekleri.',
      icon: Shirt,
      image: '/images/products/cleanroom-clothing.jpg',
      keywords: 'temiz oda tulum, ESD tulum, antistatic clothing',
      href: '/products/clean-room-clothing',
      features: ['ESD Protected', 'Particle-Free', 'Disposable Options', 'Various Sizes']
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Giriş */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ürün Gamımız
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Temiz oda sistemleri için kaliteli ve güvenilir ürün çözümlerimiz.
          </p>
        </div>

        {/* Ürün Kartları */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {products.map((product, index) => {
            const Icon = product.icon;
            
            return (
              <div key={product.id} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {product.description}
                    </p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link 
                  href={`/${locale}${product.href}`}
                  className="inline-block text-blue-600 text-sm font-medium hover:text-blue-700"
                >
                  Detaylı Bilgi →
                </Link>
              </div>
            );
          })}
        </div>

        {/* İletişim */}
        <div className="text-center bg-gray-50 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Ürün Seçimi İçin Danışmanlık
          </h3>
          <p className="text-gray-600 mb-6">
            Projenizin gereksinimlerine en uygun ürünleri seçmek için uzman ekibimizden destek alın.
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