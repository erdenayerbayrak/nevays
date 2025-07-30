import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import PageHero from '@/components/ui/page-hero';
import { Building2, FlaskConical, Wind, Settings, Cpu, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;  
  const title = locale === 'tr' 
    ? 'Mühendislik Çözümlerimiz - Anahtar Teslim Temiz Oda Projeleri | NEVAYS'
    : 'Our Engineering Solutions - Turnkey Cleanroom Projects | NEVAYS';
    
  const description = locale === 'tr'
    ? 'Anahtar teslim temiz oda kurulumu, laboratuvar sistemleri, HVAC uygulamaları, LAF kabinleri ve modüler temiz oda çözümleri. Tasarımdan validasyona.'
    : 'Turnkey cleanroom installation, laboratory systems, HVAC applications, LAF cabinets and modular cleanroom solutions. From design to validation.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://nevays.com/${locale}/uygulama`,
      siteName: 'NEVAYS',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      type: 'website',
    },
  };
}

const applications = [
  {
    title: 'Temiz Oda Kurulumu',
    description: 'ISO 14644 ve GMP standartlarında profesyonel temiz oda tasarımı ve kurulumu. Tasarım ve mühendislik süreçlerinden anahtar teslim kuruluma kadar tüm aşamaların profesyonel yönetimi ile validasyon ve test süreçlerini kapsayan çözümler.',
    icon: Building2,
    technicalKeywords: ['ISO 14644', 'GMP standartları', 'anahtar teslim kurulum', 'validasyon ve test'],
    href: '/applications/clean-room-installation',
    features: ['Tasarım ve Mühendislik', 'Anahtar Teslim Kurulum', 'Validasyon ve Test']
  },
  {
    title: 'Laboratuvar Kurulumu',
    description: 'Araştırma ve analiz laboratuvarları için kapsamlı mühendislik disiplinlerinin entegrasyonu. Gas dağıtım sistemlerinden fume hood kurulumuna, elektrik altyapısından güvenlik sistemlerine kadar tüm bileşenlerin koordineli kurulumu.',
    icon: FlaskConical,
    technicalKeywords: ['laboratuvar altyapısı', 'fume hood sistemleri', 'gas dağıtım', 'güvenlik protokolleri'],
    href: '/applications/laboratory-installation',
    features: ['Laboratuvar Altyapısı', 'Fume Hood Sistemleri', 'Güvenlik Protokolleri']
  },
  {
    title: 'HVAC Uygulamaları',
    description: 'Temiz oda için özel tasarlanmış havalandırma ve klimatizasyon sistemleri. HEPA/ULPA filtrasyon teknolojileri ile enerji verimli çözümler sunarak BMS entegrasyonu ile tam otomatik sistem yönetimi sağlayan hassas iklimlendirme uygulamaları.',
    icon: Wind,
    technicalKeywords: ['HEPA/ULPA filtrasyon', 'enerji verimli çözümler', 'BMS entegrasyonu', 'hassas iklimlendirme'],
    href: '/applications/hvac',
    features: ['HEPA/ULPA Filtrasyon', 'Enerji Verimli Çözümler', 'BMS Entegrasyonu']
  },
  {
    title: 'LAF Kabin Sistemleri',
    description: 'Dikey ve yatay laminer akış kabinleri ile biyogüvenlik kabinleri. Steril çalışma alanları için yüksek performanslı hava akış sistemleri. Mikrobiyoloji laboratuvarları ve farmasötik üretim alanlarında kritik kontaminasyon kontrolü sağlayan özel mühendislik çözümleri.',
    icon: Settings,
    technicalKeywords: ['dikey/yatay LAF', 'BSC Class I-II', 'özel tasarım', 'kontaminasyon kontrolü'],
    href: '/applications/laf-cabin',
    features: ['Dikey/Yatay LAF', 'BSC Class I-II', 'Özel Tasarım']
  },
  {
    title: 'Modüler Temiz Oda',
    description: 'Esnek ve hızlı kurulum imkanı sunan modüler temiz oda çözümleri. Değişken üretim ihtiyaçlarına uyum sağlayan, demonte edilebilir panel sistemleri ile minimum kesinti süresinde maksimum verimlilik. AR-GE merkezleri ve pilot üretim tesisleri için ideal.',
    icon: Cpu,
    technicalKeywords: ['modüler sistem', 'esnek kurulum', 'demonte edilebilir', 'pilot üretim'],
    href: '/applications/modular-cleanroom',
    features: ['Modüler Paneller', 'Esnek Kurulum', 'Hızlı Montaj']
  }
];

export default function ApplicationsPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <PageHero
        title="Mühendislik Çözümlerimiz"
        subtitle="Vizyonunuzu, tasarımdan validasyona kadar anahtar teslim projelere dönüştürüyoruz."
        breadcrumbs={[
          { label: 'Uygulamalarımız' }
        ]}
      />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Anahtar Teslim Proje Yaklaşımımız
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            NEVAYS, sadece ekipman tedarikçisi değil; <strong>mühendislik disiplinlerinin entegrasyonu</strong> ile 
            projenizin her aşamasını koordine eden, <strong>anahtar teslim proje</strong> kabiliyetine sahip 
            bütüncül bir teknoloji ortağıdır. <strong>Tasarım, kurulum ve validasyon</strong> süreçlerinin 
            tamamında tek noktadan sorumluluk alırız.
          </p>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, index) => {
              const Icon = app.icon;
              return (
                <div
                  key={app.title}
                  className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Görsel Bölümü */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={
                        index === 0 ? "/images/temizodasistemcard.webp" :
                        index === 1 ? "/images/temizodamalzeme.webp" :
                        index === 2 ? "/images/hvac.webp" :
                        index === 3 ? "/images/laminerhavaakış.webp" :
                        index === 4 ? "/images/temizodasistemcard.webp" :
                        "/images/temizodasistemcard.webp"
                      }
                      alt={`${app.title} - Mühendislik Çözümü`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Kategori Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary-600 text-white px-2 py-1 rounded-md text-xs font-medium">
                        {index === 0 ? 'Temiz Oda' : index === 1 ? 'Laboratuvar' : index === 2 ? 'HVAC' : index === 3 ? 'LAF Kabin' : 'Modüler'}
                      </span>
                    </div>
                    
                    {/* İkon */}
                    <div className="absolute bottom-3 right-3">
                      <div className="bg-white/90 rounded-lg p-2">
                        <Icon className="h-5 w-5 text-primary-600" />
                      </div>
                    </div>
                  </div>

                  {/* İçerik Bölümü */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {app.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {app.description}
                    </p>

                    {/* Özellikler */}
                    {app.features && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {app.features.slice(0, 2).map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTA Button */}
                    <Link
                      href={app.href}
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg text-sm transition-colors"
                    >
                      <span className="mr-2">Detayları Gör</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold mb-4">
              İlgili Projeleri İnceleyin ve Detaylı Bilgi Alın
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Mühendislik çözümlerimiz hakkında <strong>anahtar teslim proje</strong> deneyimimizi keşfedin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:02123456789"
                className="bg-white text-primary-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                📞 Mühendislik Danışmanlığı
              </a>
              <a 
                href="https://wa.me/905551234567"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                📱 WhatsApp Proje Bilgisi
              </a>
              <Link 
                href="/referanslar"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                🏗️ Referans Projeler
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}