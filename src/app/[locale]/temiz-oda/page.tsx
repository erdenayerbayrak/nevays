import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import MainLayout from '@/components/layout/main-layout';
import { Shield, Info, BookOpen, HelpCircle, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'cleanroom' });
  
  const title = locale === 'tr' 
    ? 'Temiz Oda Nedir? GMP ve ISO 14644 Rehberi | NEVAYS'
    : 'What is a Cleanroom? GMP and ISO 14644 Guide | NEVAYS';
    
  const description = locale === 'tr'
    ? 'Temiz oda nedir, GMP nedir, ISO 14644 standartları hakkında kapsamlı bilgi. Temiz oda sınıfları, kurulum rehberi ve uzman tavsiyeleri.'
    : 'What is a cleanroom, what is GMP, comprehensive information about ISO 14644 standards. Cleanroom classes, installation guide and expert advice.';

  return {
    title,
    description,
    keywords: 'temiz oda nedir, GMP nedir, ISO 14644, temiz oda sınıfları, cleanroom, temiz oda kurulumu, farmasötik temiz oda',
    openGraph: {
      title,
      description,
      url: `https://nevays.com/${locale}/temiz-oda`,
      siteName: 'NEVAYS',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      type: 'website',
    },
  };
}

const knowledgeTopics = [
  {
    title: 'Temiz Oda Nedir?',
    description: 'Temiz oda tanımı, çalışma prensipleri ve temel özellikler hakkında kapsamlı bilgi.',
    icon: Shield,
    content: [
      'Kontrollü ortam tanımı',
      'Partikül kontrol sistemleri',
      'Hava akış prensipleri',
      'Basınç kademelendirme',
      'Sıcaklık ve nem kontrolü'
    ],
    slug: 'temiz-oda-nedir'
  },
  {
    title: 'GMP (İyi Üretim Uygulamaları)',
    description: 'Good Manufacturing Practice standartları ve farmasötik sektördeki uygulamaları.',
    icon: CheckCircle,
    content: [
      'GMP temel prensipleri',
      'Farmasötik GMP gereksinimleri',
      'Dokümantasyon sistemi',
      'Personel eğitimi',
      'Validasyon süreçleri'
    ],
    slug: 'gmp-nedir'
  },
  {
    title: 'ISO 14644 Standartları',
    description: 'Uluslararası temiz oda sınıflandırma standartları ve uygulamaları.',
    icon: BookOpen,
    content: [
      'ISO 14644-1 sınıflandırma',
      'Test ve izleme yöntemleri',
      'Tasarım kriterleri',
      'Operasyonel gereksinimler',
      'Performans kriterleri'
    ],
    slug: 'iso-14644-standartlari'
  },
  {
    title: 'Temiz Oda Sınıfları',
    description: 'ISO ve Federal Standard 209E göre temiz oda sınıflandırması ve uygulamaları.',
    icon: Info,
    content: [
      'Class 1-100,000 sınıfları',
      'Partikül sayım limitleri',
      'Uygulama alanları',
      'Seçim kriterleri',
      'Maliyet analizi'
    ],
    slug: 'temiz-oda-siniflari'
  },
  {
    title: 'HVAC Sistemleri',
    description: 'Temiz oda HVAC sistemleri, hava filtrasyonu ve klimatizasyon çözümleri.',
    icon: Shield,
    content: [
      'Hava işleme üniteleri',
      'HEPA/ULPA filtrasyon',
      'Enerji verimliliği',
      'Bakım ve işletme',
      'Sistem entegrasyonu'
    ],
    slug: 'hvac-sistemleri'
  },
  {
    title: 'Validasyon ve Testler',
    description: 'Temiz oda validasyon süreçleri, testler ve sertifikasyon işlemleri.',
    icon: HelpCircle,
    content: [
      'IQ/OQ/PQ protokolleri',
      'Partikül sayım testleri',
      'Hava akış ölçümleri',
      'Basınç testleri',
      'Yıllık validasyonlar'
    ],
    slug: 'validasyon-testler'
  }
];

const cleanroomClasses = [
  { class: 'ISO 5', particles: '3,520', applications: 'Farmasötik üretim, ameliyathaneler' },
  { class: 'ISO 6', particles: '35,200', applications: 'Medikal cihaz üretimi' },
  { class: 'ISO 7', particles: '352,000', applications: 'Elektronik montaj' },
  { class: 'ISO 8', particles: '3,520,000', applications: 'Genel üretim alanları' }
];

const faqItems = [
  {
    question: 'Temiz oda kurulumu ne kadar sürer?',
    answer: 'Proje boyutuna göre 2-8 hafta arasında değişir. 100m² standart temiz oda kurulumu ortalama 3-4 hafta sürmektedir.'
  },
  {
    question: 'Temiz oda işletme maliyetleri nelerdir?',
    answer: 'Enerji tüketimi, filtre değişimi, bakım ve validasyon testleri ana maliyet kalemleridir. Yıllık işletme maliyeti m² başına 200-500 TL arasındadır.'
  },
  {
    question: 'Hangi sektörler temiz oda kullanır?',
    answer: 'İlaç, medikal cihaz, elektronik, gıda, otomotiv, havacılık, biyoteknoloji ve araştırma laboratuvarları temiz oda kullanır.'
  },
  {
    question: 'GMP gereksinimleri nelerdir?',
    answer: 'Personel eğitimi, dokümantasyon, temizlik prosedürleri, preventif bakım, validasyon ve sürekli izleme GMP temel gereksinimleridir.'
  }
];

export default function CleanroomPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Temiz Oda Bilgi Merkezi
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              GMP, ISO 14644 ve temiz oda teknolojileri hakkında uzman içerikleri
            </p>
          </div>
        </div>
      </section>

      {/* Knowledge Topics Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Temiz Oda Teknolojileri Rehberi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temiz oda tasarımı ve kurulumu hakkında bilmeniz gereken her şey
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {knowledgeTopics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <article
                  key={topic.title}
                  className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                        <Icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                        {topic.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{topic.description}</p>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <ul className="space-y-2 mb-6">
                      {topic.content.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/temiz-oda/${topic.slug}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm transition-colors group-hover:translate-x-1"
                    >
                      Detayını Oku
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cleanroom Classes Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Temiz Oda Sınıfları (ISO 14644-1)
            </h2>
            <p className="text-xl text-gray-600">
              Partikül sayımına göre temiz oda sınıflandırması ve uygulama alanları
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-primary-900">
                      ISO Sınıfı
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-primary-900">
                      Max. Partikül (≥0.5µm/m³)
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-primary-900">
                      Tipik Uygulamalar
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {cleanroomClasses.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                          {item.class}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-900 font-mono text-sm">
                        {item.particles}
                      </td>
                      <td className="px-6 py-4 text-gray-700 text-sm">
                        {item.applications}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              * Partikül sayıları ≥0.5 mikromet boyutundaki partiküller için m³ başına maksimum değerlerdir.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-xl text-gray-600">
              Temiz oda projeleri hakkında merak edilenler
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <HelpCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Consultation CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold mb-4">
              🎯 Projeniz İçin Uzman Danışmanlığı
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Temiz oda tasarımı ve kurulumu konularında 20+ yıl deneyimli uzmanlarımızla 
              ücretsiz görüşme yapabilirsiniz.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-xl p-4">
                <h3 className="font-semibold mb-2">📋 Teknik Analiz</h3>
                <p className="text-sm text-white/80">İhtiyaç analizi ve fizibilite çalışması</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <h3 className="font-semibold mb-2">💰 Maliyet Hesabı</h3>
                <p className="text-sm text-white/80">Detaylı fiyat teklifi ve bütçe planlaması</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <h3 className="font-semibold mb-2">📐 Tasarım Önerisi</h3>
                <p className="text-sm text-white/80">3D modelleme ve layout tasarımı</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:02123456789"
                className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                📞 Hemen Arayın
              </a>
              <a 
                href="https://wa.me/905551234567"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                📱 WhatsApp Danışmanlık
              </a>
              <Link 
                href="/contact"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-700 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                ✉️ Detaylı Bilgi Talep Et
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}