'use client';

import { Shield, Settings, CheckCircle, Users } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function CleanroomInstallationContent() {
  const features = [
    {
      icon: Shield,
      title: 'GMP Uyumlu Tasarım',
      description: 'Pharmaceutical üretim tesisleri için FDA ve EMA standartlarına uygun temiz oda sistemleri.'
    },
    {
      icon: Settings,
      title: 'ISO 14644 Sınıflandırması',
      description: 'ISO 5 ila ISO 8 arası temiz oda sınıfları için özel tasarım ve validasyon hizmetleri.'
    },
    {
      icon: CheckCircle,
      title: 'Kapsamlı Sistem Entegrasyonu',
      description: 'HVAC, elektrik, otomasyon ve monitoring sistemlerinin tam entegrasyonu.'
    },
    {
      icon: Users,
      title: 'Uzman Mühendislik Ekibi',
      description: '25+ yıl deneyimli mühendislik kadrosu ile proje yönetimi ve teknik destek.'
    }
  ];

  const applications = [
    'Pharmaceutical Manufacturing',
    'Medical Device Production',
    'Biotechnology Laboratories',
    'Semiconductor Facilities',
    'Food Processing Plants',
    'Cosmetics Manufacturing'
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Ana İçerik */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Profesyonel Temiz Oda Kurulumu
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                <strong>Temiz oda kurulumu</strong> projelerimizde, kritik üretim ortamlarının 
                gerektirdiği en yüksek standartları sağlıyoruz. İlaç sanayi, medical device 
                üretimi ve elektronik sektöründe contamination kontrolü için kapsamlı 
                mühendislik çözümleri geliştiriyoruz.
              </p>
              <p>
                <strong>GMP (Good Manufacturing Practice)</strong> gereksinimlerini tam olarak 
                karşılayan sistemlerimiz, FDA ve EMA validasyon süreçlerinde başarılı sonuçlar 
                elde etmektedir. Her proje, müşterinin spesifik üretim süreçlerine göre özelleştirilir.
              </p>
              <p>
                <strong>ISO 14644</strong> standartlarına uygun sınıflandırma ve test süreçleri 
                ile sistem performansını garanti altına alıyoruz. Commissioning ve qualification 
                aşamalarında kapsamlı dokümantasyon desteği sağlıyoruz.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <Image
              src="/images/applications/cleanroom-process.jpg"
              alt="Temiz oda kurulum süreci"
              width={600}
              height={400}
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Özellikler */}
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
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Uygulama Alanları */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Uygulama Alanları
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {applications.map((app, index) => (
              <div key={index} className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{app}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Proje Süreci */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Proje Uygulama Süreci
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Teknik Analiz', desc: 'Üretim süreçleri ve gereksinim analizi' },
              { step: '02', title: 'Tasarım & Mühendislik', desc: 'Detay projeler ve sistem tasarımı' },
              { step: '03', title: 'Kurulum & Komisyon', desc: 'Profesyonel montaj ve devreye alma' },
              { step: '04', title: 'Validasyon & Destek', desc: 'Test süreçleri ve sürekli destek' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{phase.title}</h4>
                <p className="text-gray-600 text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Temiz Oda Projeniz İçin Görüşelim</h3>
          <p className="text-blue-100 mb-6">
            Üretim tesisinizdeki gereksinimleri değerlendirmek ve size özel çözüm sunmak için buradayız
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="tel:+905123456789">Uzman Görüşmesi</a>
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