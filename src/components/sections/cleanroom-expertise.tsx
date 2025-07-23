'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ArrowRight, CheckCircle, Building2, Microscope, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const expertiseAreas = [
  {
    icon: Building2,
    title: 'Temiz Oda Kurulumu',
    description: 'GMP standartlarına uygun temiz oda sistemleri tasarım ve kurulumu'
  },
  {
    icon: Microscope,
    title: 'Laboratuvar Sistemleri',
    description: 'Analiz ve araştırma laboratuvarları için özel mühendislik çözümleri'
  },
  {
    icon: ShieldCheck,
    title: 'Kontaminasyon Kontrolü',
    description: 'ISO 14644 standartlarında partikül ve mikrobiyal kontrol'
  }
];

const industries = [
  'İlaç Sanayii',
  'Tıbbi Cihaz Üretimi',
  'Elektronik & Yarı İletken',
  'Gıda Teknolojisi',
  'Biyoteknoloji',
  'Araştırma Laboratuvarları'
];

export default function CleanroomExpertise() {
  const locale = useLocale();

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-heading text-gray-900 mb-6">
            <span className="text-gradient">Temiz Oda</span> Mühendislik Uzmanlığı
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            20+ yıllık deneyimimizle, dünya standartlarında <strong>temiz oda sistemleri</strong> ve 
            <strong> kontaminasyonsuz ortam</strong> çözümleri geliştiriyoruz.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading text-gray-900 mb-6">
                Mühendislik Yaklaşımımız
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>NEVAYS</strong> olarak, temiz oda projelerinde sadece ürün tedarikçisi değil, 
                kapsamlı mühendislik hizmeti sunan bir firma olarak konumlanıyoruz. Her proje için 
                özel tasarım yaklaşımı benimser, <strong>GMP</strong> ve <strong>ISO 14644</strong> standartlarına 
                tam uyum sağlarız.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {expertiseAreas.map((area, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <area.icon className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">{area.title}</h4>
                      <p className="text-sm text-gray-600">{area.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Applications */}
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-4">Uygulama Alanlarımız</h4>
              <div className="grid grid-cols-2 gap-3">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-secondary" />
                    <span className="text-sm text-gray-700">{industry}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" asChild>
                <Link href={`/${locale}/clean-room`}>
                  Temiz Oda Rehberi
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={`/${locale}/contact`}>
                  Proje Danışmanlığı
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop&crop=center"
                alt="Modern temiz oda laboratuvar sistemi"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-brand-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">ISO 14644-1</p>
                  <p className="text-xs text-gray-600">Sertifikalı Sistemler</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
              <div className="text-center">
                <p className="text-2xl font-bold text-brand-primary">20+</p>
                <p className="text-xs text-gray-600">Yıllık Deneyim</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Standards Section */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading text-gray-900 mb-4">
              Teknik Standartlar ve Sınıflandırma
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Temiz oda projelerimizde uluslararası standartlara tam uyum sağlayarak, 
              en yüksek kalite ve güvenilirlik sunarız.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-brand-primary">GMP</span>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Good Manufacturing Practice</h4>
              <p className="text-sm text-gray-600">
                İlaç ve tıbbi cihaz üretimi için zorunlu kalite standartları
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold text-brand-secondary">ISO</span>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">ISO 14644 Serisi</h4>
              <p className="text-sm text-gray-600">
                Temiz oda sınıflandırması ve performans kriterleri
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold text-gray-700">FDA</span>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">FDA Guidelines</h4>
              <p className="text-sm text-gray-600">
                Amerika gıda ve ilaç dairesi onaylı tasarım kriterleri
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}