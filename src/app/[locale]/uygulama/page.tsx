import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import MainLayout from '@/components/layout/main-layout';
import PageHero from '@/components/ui/page-hero';
import { Building2, FlaskConical, Wind, Settings, Cpu, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'applications' });
  
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
    title: 'Modüler Temiz Oda Sistemleri',
    description: 'Esnek ve hızlı kurulum imkanı sunan modüler temiz oda çözümleri. Değişken üretim ihtiyaçlarına uyum sağlayan, demonte edilebilir panel sistemleri ile minimum kesinti süresinde maksimum verimlilik. AR-GE merkezleri ve pilot üretim tesisleri için ideal.',
    icon: Cpu,
    technicalKeywords: ['modüler sistem', 'esnek kurulum', 'demonte edilebilir', 'pilot üretim'],
    href: '/applications/modular-cleanroom'
  },
  {
    title: 'Anahtar Teslim Laboratuvar Kurulumu', 
    description: 'Araştırma ve analiz laboratuvarları için kapsamlı mühendislik disiplinlerinin entegrasyonu. Gas dağıtım sistemlerinden fume hood kurulumuna, elektrik altyapısından güvenlik sistemlerine kadar tüm bileşenlerin koordineli kurulumu.',
    icon: FlaskConical,
    technicalKeywords: ['laboratuvar altyapısı', 'fume hood sistemleri', 'gas dağıtım', 'güvenlik protokolleri'],
    href: '/applications/laboratory-installation'
  },
  {
    title: 'Hassas İklimlendirme HVAC Uygulamaları',
    description: 'Enerji verimliliği ve hassas iklimlendirme gereksinimlerini karşılayan GMP uyumlu HVAC sistemleri. Merkezi klima santrallerinden özel filtrasyon ünitelerine, tüm sistem bileşenlerinin optimum performans için tasarlanması ve kurulumu.',
    icon: Wind, 
    technicalKeywords: ['enerji verimliliği', 'hassas iklimlendirme', 'GMP uyumlu sistemler', 'merkezi klima'],
    href: '/applications/hvac'
  },
  {
    title: 'LAF (Laminer Akış) Kabin Sistemleri',
    description: 'Steril çalışma alanları için yüksek performanslı laminer hava akışlı kabinler ve biyogüvenlik kabinleri. Mikrobiyoloji laboratuvarları ve farmasötik üretim alanlarında kritik kontaminasyon kontrolü sağlayan özel mühendislik çözümleri.',
    icon: Settings,
    technicalKeywords: ['laminer hava akışı', 'biyogüvenlik kabinleri', 'steril çalışma alanları', 'kontaminasyon kontrolü'],
    href: '/applications/laf-cabin'
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {applications.map((app, index) => {
              const Icon = app.icon;
              return (
                <div
                  key={app.title}
                  className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                >
                  {/* Visual Header with Professional Images */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={
                        index === 0 ? "/images/temizodasistemcard.webp" :
                        index === 1 ? "/images/temizodamalzeme.webp" :
                        index === 2 ? "/images/hvac.webp" :
                        index === 3 ? "/images/laminerhavaakış.webp" :
                        "/images/temizodasistemcard.webp"
                      }
                      alt={`${app.title} - Mühendislik çözümü görseli`}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Application type badge */}
                    <div className="absolute top-4 left-4 bg-primary-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                      <span className="text-xs font-semibold">
                        {index === 0 ? 'Modüler' : index === 1 ? 'Laboratuvar' : index === 2 ? 'HVAC' : index === 3 ? 'LAF Kabin' : 'Temiz Oda'}
                      </span>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="text-center text-white">
                        <ArrowRight className="h-12 w-12 mx-auto mb-2" />
                        <p className="font-semibold">Detayları İncele</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors">
                      {app.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {app.description}
                    </p>

                    {/* Technical Keywords */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {app.technicalKeywords.map((keyword, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={app.href}
                      className="inline-flex items-center w-full justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 group-hover:scale-105"
                    >
                      <span className="mr-2">Daha Fazla Bilgi Al</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Proje Sürecimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Anahtar teslim projelerimizde izlediğimiz sistematik yaklaşım
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Danışmanlık', desc: 'İhtiyaç analizi ve teknik değerlendirme' },
              { step: '02', title: 'Tasarım', desc: '3D modelleme ve sistem spesifikasyonları' },
              { step: '03', title: 'Kurulum', desc: 'Profesyonel montaj ve entegrasyon' },
              { step: '04', title: 'Teslim', desc: 'Test, validasyon ve kullanıcı eğitimi' }
            ].map((item, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-primary-200 z-0" />
                )}
                
                <div className="relative bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow z-10">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-700 font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
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