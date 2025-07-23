'use client';

import { CheckCircle, Download, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductContentProps {
  productName: string;
  description: string;
  features: string[];
  specifications: string[];
  applications: string[];
}

export default function ProductContent({ 
  productName, 
  description, 
  features, 
  specifications, 
  applications 
}: ProductContentProps) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Ürün Açıklaması */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {productName} Özellikleri
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {description}
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-800">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Teknik Spesifikasyonlar</h3>
            <div className="space-y-3">
              {specifications.map((spec, index) => (
                <div key={index} className="bg-white rounded-lg p-3 text-sm">
                  <span className="text-gray-800">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Uygulama Alanları */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Uygulama Alanları
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {applications.map((app, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="text-gray-800 font-medium">{app}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Katalog İndirme */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-16">
          <div className="text-center">
            <Download className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ürün Kataloğu
            </h3>
            <p className="text-gray-600 mb-6">
              Detaylı teknik özellikler, boyutlar ve uygulama örnekleri için kataloğumuzu indirin
            </p>
            <Button size="lg" asChild>
              <a href="/catalogs/product-catalog.pdf" target="_blank">
                <Download className="mr-2 h-5 w-5" />
                Katalog İndir (PDF)
              </a>
            </Button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ürün Hakkında Teknik Bilgi Alın
          </h3>
          <p className="text-blue-100 mb-6">
            Projenize özel ürün seçimi ve teknik detaylar için uzmanlarımızla görüşün
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="tel:+905123456789">
                <Phone className="mr-2 h-5 w-5" />
                Hemen Arayın
              </a>
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