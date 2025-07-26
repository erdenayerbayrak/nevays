import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import MainLayout from '@/components/layout/main-layout';
import { Building2, FlaskConical, Wind, Settings } from 'lucide-react';
import Link from 'next/link';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'applications' });
  
  const title = locale === 'tr' 
    ? 'Uygulamalarımız - Temiz Oda ve Laboratuvar Kurulumu | NEVAYS'
    : 'Our Applications - Cleanroom and Laboratory Installation | NEVAYS';
    
  const description = locale === 'tr'
    ? 'Temiz oda kurulumu, laboratuvar kurulumu, HVAC sistemleri ve laminer hava akışlı kabinler. Anahtar teslim proje çözümleri.'
    : 'Cleanroom installation, laboratory installation, HVAC systems and laminar air flow cabinets. Turnkey project solutions.';

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
    description: 'GMP ve ISO 14644 standartlarında anahtar teslim temiz oda sistemleri. İlaç, elektronik ve medikal sektörlerde özel çözümler.',
    icon: Building2,
    features: [
      'ISO Class 5-8 temizlik seviyeleri',
      'GMP uyumlu tasarım',
      'Modüler panel sistemleri',
      'HEPA/ULPA filtrasyon',
      'Basınç kademelendirme',
      'Validasyon ve dokümantasyon'
    ],
    industries: ['İlaç Sanayii', 'Elektronik', 'Medikal Cihaz', 'Gıda'],
    href: '/applications/clean-room-installation'
  },
  {
    title: 'Laboratuvar Kurulumu',
    description: 'Analiz ve araştırma laboratuvarları için kapsamlı mühendislik çözümleri. Özel tasarım ve entegre sistemler.',
    icon: FlaskConical,
    features: [
      'Lab furniture sistemleri',
      'Fume hood kurulumu',
      'Gas dağıtım sistemleri',
      'Elektrik altyapısı',
      'Su arıtma sistemleri',
      'Güvenlik sistemleri'
    ],
    industries: ['Ar-Ge Merkezleri', 'Üniversiteler', 'Kalite Kontrol', 'Analiz Lab.'],
    href: '/applications/laboratory-installation'
  },
  {
    title: 'HVAC Sistemleri',
    description: 'Temiz oda ve laboratuvarlar için özel tasarlanmış havalandırma, klimatizasyon ve filtrasyon sistemleri.',
    icon: Wind,
    features: [
      'Merkezi klima sistemleri',
      'Hava filtrasyon üniteleri',
      'Enerji geri kazanım',
      'BMS entegrasyonu',
      'IoT monitoring',
      'Bakım ve servis'
    ],
    industries: ['Hastaneler', 'Üretim Tesisleri', 'Ofis Binaları', 'Veri Merkezleri'],
    href: '/applications/hvac'
  },
  {
    title: 'Laminer Hava Akışlı Kabinler',
    description: 'Yüksek kaliteli laminer akış kabinleri ve biyogüvenlik kabinleri. Steril çalışma alanları için özel çözümler.',
    icon: Settings,
    features: [
      'Dikey/Yatay laminer akış',
      'Biyogüvenlik kabinleri (BSC)',
      'HEPA/ULPA filtrasyon',
      'ISO 5 temizlik sınıfı',
      'Düşük gürültü seviyesi',
      'EN 12469 standardı'
    ],
    industries: ['Mikrobiyoloji', 'Hücre Kültürü', 'Farmasötik', 'Araştırma'],
    href: '/applications/laf-cabin'
  }
];

export default function ApplicationsPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Uygulamalarımız
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Temiz oda teknolojilerinde kapsamlı çözümler sunarak, projenizin her aşamasında yanınızdayız
            </p>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {applications.map((app, index) => {
              const Icon = app.icon;
              return (
                <div
                  key={app.title}
                  className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-8 text-white">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold">{app.title}</h2>
                    </div>
                    <p className="text-white/90 leading-relaxed">{app.description}</p>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Özellikler</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {app.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Industries */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Uygulama Alanları</h3>
                      <div className="flex flex-wrap gap-2">
                        {app.industries.map((industry, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full border border-primary-200"
                          >
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href={app.href}
                      className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 group"
                    >
                      <span className="mr-2">Detayları İncele</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
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
          <h2 className="text-3xl font-bold mb-4">
            Projeniz İçin Ücretsiz Danışmanlık
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Uzman ekibimiz, ihtiyaçlarınıza en uygun çözümü tasarlamak için hazır
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:02123456789"
              className="bg-white text-primary-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              📞 Hemen Arayın
            </a>
            <a 
              href="https://wa.me/905551234567"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              📱 WhatsApp
            </a>
            <Link 
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              ✉️ İletişim Formu
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}