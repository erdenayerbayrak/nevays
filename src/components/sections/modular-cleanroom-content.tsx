'use client';

import { Layers, Clock, Wrench, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ModularCleanroomContent() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Modüler Temiz Oda Avantajları</h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p><strong>Modüler temiz oda</strong> sistemlerimiz, geleneksel inşaat yöntemlerine kıyasla %60 daha hızlı kurulum imkanı sunar.</p>
              <p><strong>Flexible design</strong> yaklaşımımızla, gelecekteki kapasite artışlarına kolayca adapte olabilen sistemler geliştiriyoruz.</p>
              <p><strong>Prefabrik temiz oda</strong> çözümlerimiz, quality-controlled factory conditions'da üretilir ve site'da hızlıca monte edilir.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Clock, title: 'Hızlı Kurulum', desc: '60% daha hızlı' },
              { icon: Layers, title: 'Modüler Yapı', desc: 'Esnek genişletme' },
              { icon: Wrench, title: 'Kolay Bakım', desc: 'Minimum downtime' },
              { icon: TrendingUp, title: 'Maliyet Etkin', desc: 'Optimal ROI' }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-gray-50 rounded-xl p-6 text-center">
                  <Icon className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Modüler Sistem Özellikleri</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2-6 Hafta</div>
              <div className="text-gray-600">Kurulum Süresi</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">ISO 5-8</div>
              <div className="text-gray-600">Temizlik Sınıfları</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">%30</div>
              <div className="text-gray-600">Maliyet Tasarrufu</div>
            </div>
          </div>
        </div>
        
        <div className="text-center bg-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Modüler Temiz Oda Projeniz İçin Görüşelim</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="tel:+905123456789">Teknik Danışmanlık</a>
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