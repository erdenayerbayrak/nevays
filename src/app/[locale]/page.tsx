import { Metadata } from 'next';
import { MainLayout } from '@/components/layout';
import HeroSection from '@/components/sections/hero-section';
import PartnersMarquee from '@/components/sections/partners-marquee';
import SectorSolutions from '@/components/sections/sector-solutions';
import AnimatedCounter from '@/components/ui/animated-counter';
import { ArrowRight, Shield, Settings, Package, Users, CheckCircle, Factory, FlaskConical, Award, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { WhiteServiceCard } from '@/components/ui/white-service-card';


interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
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
    title: 'Temiz Oda Kurulumu ve Cleanroom Sistemleri',
    description: 'ISO 14644 ve GMP standartlarında profesyonel temiz oda tasarımı, kurulumu ve validasyonu',
    iconName: 'Shield',
    href: '/uygulama',
    features: ['Temiz Oda Tasarımı', 'Anahtar Teslim Kurulum', 'GMP Validasyonu'],
    image: '/images/temizodasistemcard.webp'
  },
  {
    title: 'Temiz Oda HVAC ve Havalandırma',
    description: 'Temiz oda için özel tasarlanmış HEPA filtreli havalandırma ve klimatizasyon sistemleri',
    iconName: 'Settings',
    href: '/uygulama',
    features: ['HEPA/ULPA Filtrasyon', 'Laminer Hava Akışı', 'Basınç Kontrolü'],
    image: '/images/hvac.webp'
  },
  {
    title: 'Temiz Oda Ekipmanları',
    description: 'Laminer akış kabinleri, biyogüvenlik kabinleri ve temiz oda ekipmanları',
    iconName: 'Package',
    href: '/urunler',
    features: ['Laminer Akış Kabinleri', 'BSC Class I-II', 'Pass Box Sistemleri'],
    image: '/images/laminerhavaakış.webp'
  },
  {
    title: 'Modüler Temiz Oda Panelleri',
    description: 'Modüler temiz oda panel sistemleri, cleanroom kapıları ve özel çözümler',
    iconName: 'Factory',
    href: '/urunler',
    features: ['Modüler Paneller', 'Temiz Oda Kapıları', 'Özel Tasarım'],
    image: '/images/temizodamalzeme.webp'
  }
];


const whyChooseUs = [
  {
    title: '20+ Yıl Temiz Oda Deneyimi',
    description: 'Temiz oda kurulumu ve cleanroom teknolojilerinde 2003ten bu yana uzman hizmet',
    icon: Award,
    count: 20,
    countSuffix: '+'
  },
  {
    title: 'Anahtar Teslim Temiz Oda',
    description: 'Temiz oda tasarımından kuruluma kadar tek noktadan hizmet',
    icon: CheckCircle,
    count: null
  },
  {
    title: '200+ Temiz Oda Projesi',
    description: 'Farklı sektörlerde başarıyla tamamlanmış temiz oda kurulumları',
    icon: TrendingUp,
    count: 200,
    countSuffix: '+'
  },
  {
    title: 'ISO 14644 & GMP Uyumluluk',
    description: 'EU GMP ve ISO 14644 standartlarında tam uyumlu temiz oda sistemleri',
    icon: Shield,
    count: 100,
    countSuffix: '%'
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
              Temiz Oda Hizmetlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cleanroom kurulumu ve temiz oda sistemlerinde kapsamlı mühendislik çözümleri
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <WhiteServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                iconName={service.iconName}
                href={service.href}
                features={service.features}
                image={service.image}
              />
            ))}
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
              Neden NEVAYS Temiz Oda?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temiz oda kurulumu ve cleanroom mühendisliğinde fark yaratan yaklaşımımız
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
                  {item.count ? (
                    <div className="mb-2">
                      <AnimatedCounter 
                        value={item.count} 
                        suffix={item.countSuffix || ''} 
                        className="text-4xl font-bold text-primary-600"
                      />
                    </div>
                  ) : null}
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
            Temiz Oda Projeniz İçin Ücretsiz Keşif
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Temiz oda uzmanı ekibimiz projenizi değerlendirip, size özel cleanroom çözümü hazırlasın
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