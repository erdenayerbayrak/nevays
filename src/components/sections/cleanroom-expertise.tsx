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
    <section className="py-24 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Temiz Oda <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Mühendislik Uzmanlığı</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            20+ yıllık deneyimimizle, dünya standartlarında <strong className="text-gray-900">temiz oda sistemleri</strong> ve 
            <strong className="text-gray-900"> kontaminasyonsuz ortam</strong> çözümleri geliştiriyoruz.
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
                  <div key={index} className="group bg-white p-5 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <area.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">{area.title}</h4>
                        <p className="text-sm text-gray-600">{area.description}</p>
                      </div>
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
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent" />
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-5 border border-gray-100 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">ISO 14644-1</p>
                  <p className="text-xs text-gray-600">Sertifikalı Sistemler</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-2xl p-5 border border-gray-100 transform hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">20+</p>
                <p className="text-xs text-gray-600 font-medium">Yıllık Deneyim</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Standards Section */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-100 shadow-xl p-8 lg:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Teknik Standartlar ve Sınıflandırma
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Temiz oda projelerimizde uluslararası standartlara tam uyum sağlayarak, 
              en yüksek kalite ve güvenilirlik sunarız.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">GMP</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 text-lg">Good Manufacturing Practice</h4>
              <p className="text-sm text-gray-600">
                İlaç ve tıbbi cihaz üretimi için zorunlu kalite standartları
              </p>
            </div>

            <div className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-xl font-bold text-white">ISO</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 text-lg">ISO 14644 Serisi</h4>
              <p className="text-sm text-gray-600">
                Temiz oda sınıflandırması ve performans kriterleri
              </p>
            </div>

            <div className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-xl font-bold text-white">FDA</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 text-lg">FDA Guidelines</h4>
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