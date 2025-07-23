'use client';

import Image from 'next/image';
import { Wrench, Users, Award, TrendingUp } from 'lucide-react';

const approaches = [
  {
    icon: Wrench,
    title: 'Mühendislik Odaklı Yaklaşım',
    description: 'Her proje için özel tasarım ve hesaplama. Standart çözümler değil, ihtiyaca özel mühendislik.',
    stat: '100%',
    statLabel: 'Özel Tasarım'
  },
  {
    icon: Users,
    title: 'Deneyimli Ekip',
    description: 'Temiz oda teknolojilerinde uzman mühendis ve teknisyen kadromuz.',
    stat: '20+',
    statLabel: 'Yıllık Deneyim'
  },
  {
    icon: Award,
    title: 'Uluslararası Standartlar',
    description: 'GMP, ISO 14644, FDA kılavuzlarına tam uyumlu sistem tasarımı ve kurulumu.',
    stat: '50+',
    statLabel: 'Başarılı Proje'
  },
  {
    icon: TrendingUp,
    title: 'Sürekli İyileştirme',
    description: 'Proje sonrası teknik destek, performans izleme ve sistem optimizasyonu.',
    stat: '24/7',
    statLabel: 'Teknik Destek'
  }
];

export default function EngineeringApproach() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-heading text-gray-900 mb-4">
            Neden <span className="text-brand-primary">NEVAYS</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sadece ürün tedarikçisi değil, kapsamlı mühendislik hizmeti sunan güvenilir çözüm ortağınız.
          </p>
        </div>

        {/* Approach Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {approaches.map((approach, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <approach.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                {approach.title}
              </h3>
              
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {approach.description}
              </p>
              
              <div className="border-t border-gray-100 pt-4">
                <div className="text-2xl font-bold text-brand-primary mb-1">
                  {approach.stat}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  {approach.statLabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-heading text-gray-900 mb-6">
              Temiz Oda Projelerinde Fark Yaratan Yaklaşımımız
            </h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Proje Öncesi Analiz:</strong> Üretim süreçlerinizi detaylı inceleyerek en uygun temiz oda sınıfını belirliyoruz.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Özel Tasarım:</strong> Standardize edilmiş değil, size özel hesaplanmış ve tasarlanmış sistemler.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Kalifikasyon & Validasyon:</strong> Sistem kurulumu sonrası performans testleri ve dokümantasyon.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Sürekli Destek:</strong> Proje teslimi sonrası teknik destek ve bakım hizmetleri.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-sm text-gray-600 italic">
                "NEVAYS ile çalışmak, sadece temiz oda satın almak değil, 
                deneyimli bir mühendislik ekibinin projenize odaklanması demektir."
              </p>
            </div>
          </div>
          
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=500&fit=crop&crop=center"
              alt="Temiz oda mühendislik ekibi çalışırken"
              width={600}
              height={500}
              className="rounded-2xl shadow-lg w-full h-auto"
              loading="lazy"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
            
            {/* Quality Badge */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-brand-primary" />
                <div>
                  <p className="text-sm font-medium text-gray-900">ISO 9001:2015</p>
                  <p className="text-xs text-gray-600">Kalite Yönetim Sistemi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}