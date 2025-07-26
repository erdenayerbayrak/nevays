import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import HeroSection from '@/components/sections/hero-section';
import PartnersMarquee from '@/components/sections/partners-marquee';
import SectorSolutions from '@/components/sections/sector-solutions';
import { ArrowRight, Shield, Settings, Package, Users, CheckCircle, Factory, FlaskConical, Award, TrendingUp } from 'lucide-react';
import Link from 'next/link';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'hero' });
  
  const title = locale === 'tr' 
    ? 'NEVAYS - Temiz Oda Sistemleri ve Cleanroom Kurulumu | GMP Uyumlu Çözümler'
    : 'NEVAYS - Cleanroom Systems & Installation | GMP Compliant Solutions';
    
  const description = locale === 'tr'
    ? '25+ yıl deneyimle temiz oda kurulumu, laboratuvar sistemleri ve HVAC uygulamaları. İlaç, sağlık, elektronik sektörlerinde GMP uyumlu temiz oda panelleri ve modüler cleanroom çözümleri.'
    : '25+ years experience in cleanroom installation, laboratory systems and HVAC applications. GMP compliant cleanroom panels and modular cleanroom solutions for pharmaceutical, healthcare, electronics sectors.';

  return {
    title,
    description,
    keywords: locale === 'tr' 
      ? 'temiz oda, temiz oda kurulumu, temiz oda sistemleri, temiz oda panelleri, cleanroom, GMP, ISO 14644, laboratuvar kurulum, modüler temiz oda, steril oda'
      : 'cleanroom, cleanroom installation, cleanroom systems, cleanroom panels, GMP, ISO 14644, laboratory installation, modular cleanroom, sterile room',
    authors: [{ name: 'NEVAYS Cleanroom Systems' }],
    creator: 'NEVAYS',
    publisher: 'NEVAYS',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://nevays.com/${locale}`,
      siteName: 'NEVAYS Cleanroom Systems',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: locale === 'tr' ? 'NEVAYS Temiz Oda Sistemleri' : 'NEVAYS Cleanroom Systems',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.jpg'],
    },
    alternates: {
      canonical: `https://nevays.com/${locale}`,
      languages: {
        'tr': 'https://nevays.com/tr',
        'en': 'https://nevays.com/en',
      },
    },
  };
}

const services = [
  {
    title: 'Temiz Oda Kurulumu',
    description: 'ISO 14644 ve GMP standartlarında profesyonel temiz oda tasarımı ve kurulumu',
    icon: Shield,
    href: '/uygulama',
    features: ['Tasarım ve Mühendislik', 'Anahtar Teslim Kurulum', 'Validasyon ve Test']
  },
  {
    title: 'HVAC Sistemleri',
    description: 'Temiz oda için özel tasarlanmış havalandırma ve klimatizasyon sistemleri',
    icon: Settings,
    href: '/uygulama',
    features: ['HEPA/ULPA Filtrasyon', 'Enerji Verimli Çözümler', 'BMS Entegrasyonu']
  },
  {
    title: 'Laminer Akış Kabinleri',
    description: 'Dikey ve yatay laminer akış kabinleri, biyogüvenlik kabinleri',
    icon: Package,
    href: '/urunler',
    features: ['Dikey/Yatay LAF', 'BSC Class I-II', 'Özel Tasarım']
  },
  {
    title: 'Temiz Oda Sistemleri',
    description: 'Modüler panel sistemleri, özel kapılar ve pass box çözümleri',
    icon: Factory,
    href: '/urunler',
    features: ['Modüler Paneller', 'Özel Kapılar', 'Pass Box Sistemleri']
  }
];


const whyChooseUs = [
  {
    title: '20+ Yıl Deneyim',
    description: 'Temiz oda teknolojilerinde 2003ten bu yana uzman hizmet',
    icon: Award
  },
  {
    title: 'Anahtar Teslim Çözüm',
    description: 'Tasarımdan kuruluma kadar tek noktadan hizmet',
    icon: CheckCircle
  },
  {
    title: '150+ Başarılı Proje',
    description: 'Farklı sektörlerde kanıtlanmış başarı hikayesi',
    icon: TrendingUp
  },
  {
    title: 'GMP Uyumluluk',
    description: 'EU GMP ve ISO 14644 standartlarında tam uyumluluk',
    icon: Shield
  }
];

export default function HomePage() {
  return (
    <MainLayout>
      {/* Original Hero Section */}
      <HeroSection />

      {/* Partners Marquee */}
      <PartnersMarquee />

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Hizmetlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temiz oda teknolojilerinde kapsamlı çözümler sunuyoruz
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary-200 transition-colors">
                        <Icon className="h-8 w-8 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={service.href}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors group-hover:translate-x-1"
                    >
                      Detayları Gör
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sector Solutions - Original Component */}
      <SectorSolutions />

      {/* Why Choose NEVAYS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Neden NEVAYS?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temiz oda mühendisliğinde fark yaratan yaklaşımımız
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                    <Icon className="h-10 w-10 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Projeniz İçin Ücretsiz Keşif
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Uzman ekibimiz projenizi değerlendirip, size özel çözüm önerisi hazırlasın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:02123456789"
              className="bg-white text-primary-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              📞 Hemen Arayın: 0212 XXX XX XX
            </a>
            <a 
              href="https://wa.me/905551234567"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              📱 WhatsApp Mesaj Gönderin
            </a>
            <a 
              href="mailto:info@nevays.com"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              ✉️ E-posta Gönderin
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}