'use client';

import { Wind, Thermometer, Filter, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HvacApplicationsContent() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">HVAC Sistemleri Entegrasyonu</h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p><strong>HVAC uygulamaları</strong> alanında, endüstriyel tesislerin hava kalitesi ve iklim kontrol gereksinimlerini karşılayan kapsamlı sistemler geliştiriyoruz.</p>
              <p><strong>AHU sistemleri</strong> (Air Handling Units) tasarımı ve entegrasyonunda uzman ekibimizle, energy-efficient ve maintenance-friendly çözümler sunuyoruz.</p>
              <p><strong>Hava teknolojileri</strong> alanındaki 25+ yıllık deneyimimizle, pharmaceutical, food processing ve electronics sektörlerinde başarılı projeler gerçekleştiriyoruz.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Wind, title: 'AHU Sistemleri', desc: 'Air Handling Units' },
              { icon: Filter, title: 'Filtrasyon', desc: 'HEPA/ULPA Filters' },
              { icon: Thermometer, title: 'İklim Kontrolü', desc: 'Temperature/Humidity' },
              { icon: Zap, title: 'Enerji Verimliliği', desc: 'Smart Controls' }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-blue-50 rounded-xl p-6 text-center">
                  <Icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="text-center bg-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">HVAC Projeniz İçin Teknik Danışmanlık</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="tel:+905123456789">Hemen Arayın</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}