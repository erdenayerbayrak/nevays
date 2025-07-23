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
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Temiz Oda Ürün Gamı
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temiz oda sistemleriniz için gerekli tüm ürün gruplarında kaliteli, 
            standartlara uygun ve güvenilir çözümler sunuyoruz. Her ürün, 
            sektörel gereksinimlere göre özelleştirilmiş teknik spesifikasyonlara sahiptir.
          </p>
        </div>

        {/* Ürün Kartları */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {products.map((product, index) => {
            const Icon = product.icon;
            
            return (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mr-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-sm text-blue-600 font-medium">
                      {product.keywords}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {product.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Öne Çıkan Özellikler:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="default" asChild className="flex-1">
                      <Link href={`/${locale}${product.href}`}>
                        Ürün Detayları
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={`/catalogs/${product.id}.pdf`} target="_blank">
                        Katalog
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ürün Kategorileri Özeti */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Ürün Kategorilerine Genel Bakış
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-600">Ana Ürün Grubu</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Ürün Çeşidi</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">GMP</div>
              <div className="text-gray-600">Standart Uyumlu</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Teknik Destek</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ürün Seçimi İçin Teknik Danışmanlık
          </h3>
          <p className="text-blue-100 mb-6">
            Projenizin gereksinimlerine en uygun ürünleri seçmek için uzman ekibimizden destek alın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="tel:+905123456789">Ürün Danışmanlığı</a>
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