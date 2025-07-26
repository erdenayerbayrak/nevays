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
    ? 'NEVAYS Temiz Oda Bilgi Merkezi - GMP, ISO 14644, Uzman İçerikleri'
    : 'NEVAYS Cleanroom Knowledge Center - GMP, ISO 14644, Expert Content';
    
  const description = locale === 'tr'
    ? 'Türkiye\'nin en kapsamlı temiz oda bilgi merkezi. GMP, ISO 14644, steril alan, modüler temiz oda ve temiz oda yönetmeliği konularında uzman içerikleri.'
    : 'Turkey\'s most comprehensive cleanroom knowledge center. Expert content on GMP, ISO 14644, sterile areas, modular cleanrooms and cleanroom regulations.';

  return {
    title,
    description,
    keywords: 'temiz oda nedir, temiz oda sistemleri, temiz oda sınıfları, GMP nedir, GMP sertifikası, GMP belgesi, ISO 14644, ISO 14644-1, steril alan nedir, modüler temiz oda, temiz oda yönetmeliği, temiz oda denetim',
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

// Konu kümeleri (Topic Clusters) stratejisi ile yeniden yapılandırıldı
const knowledgeCategories = [
  {
    title: 'Temel Kavramlar',
    description: 'Temiz oda teknolojisinin temel prensipleri ve tanımları',
    topics: [
      {
        title: 'Temiz Oda Nedir ve Temiz Oda Sistemleri',
        description: 'Temiz oda tanımı, çalışma prensipleri ve sistem bileşenleri hakkında kapsamlı rehber. Kontrollü ortam teknolojisi ve uygulama alanları.',
        icon: Shield,
        readTime: '8 dakika',
        keywords: ['temiz oda nedir', 'temiz oda sistemleri', 'kontrollü ortam'],
        slug: 'temiz-oda-nedir-sistemleri'
      },
      {
        title: 'Temiz Oda Sınıfları ve Uygulama Alanları',
        description: 'ISO 14644 ve Federal Standard 209E\'ye göre temiz oda sınıflandırması. Class 1\'den ISO 9\'a kadar tüm sınıflar ve sektörel uygulamalar.',
        icon: Info,
        readTime: '6 dakika',
        keywords: ['temiz oda sınıfları', 'ISO sınıflandırma', 'Class 100'],
        slug: 'temiz-oda-siniflari'
      },
      {
        title: 'Steril Alan Nedir - Farklar ve Uygulamalar',
        description: 'Steril alan ile temiz oda arasındaki farklar, sterilizasyon teknikleri ve farmasötik sektördeki kritik uygulamalar.',
        icon: CheckCircle,
        readTime: '5 dakika',
        keywords: ['steril alan nedir', 'sterilizasyon', 'aseptik ortam'],
        slug: 'steril-alan-nedir'
      }
    ]
  },
  {
    title: 'Standartlar ve Yönetmelikler',
    description: 'Ulusal ve uluslararası standartlar, sertifikasyon süreçleri',
    topics: [
      {
        title: 'GMP Standartı ve Sertifikasyon Süreçleri',
        description: 'GMP nedir, GMP sertifikası ve GMP belgesi nasıl alınır? İyi üretim uygulamaları standartları ve farmasötik sektördeki gereksinimleri.',
        icon: CheckCircle,
        readTime: '10 dakika',
        keywords: ['GMP nedir', 'GMP sertifikası', 'GMP belgesi', 'İyi Üretim Uygulamaları'],
        slug: 'gmp-standartlari-sertifikasyon'
      },
      {
        title: 'ISO 14644 ve ISO 14644-1 Standartları',
        description: 'Uluslararası temiz oda standartlarının detaylı analizi. ISO 14644-1 sınıflandırma sistemi, test yöntemleri ve uygulamalı örnekler.',
        icon: BookOpen,
        readTime: '12 dakika',
        keywords: ['ISO 14644', 'ISO 14644-1', 'temiz oda standartları'],
        slug: 'iso-14644-standartlari'
      },
      {
        title: 'Temiz Oda Yönetmeliği ve Denetim Süreçleri',
        description: 'Türkiye\'deki temiz oda yönetmelikleri, denetim gereksinimleri ve uygunluk değerlendirme süreçleri. Bakınlık kontrollerinden sertifikasyona.',
        icon: HelpCircle,
        readTime: '7 dakika',
        keywords: ['temiz oda yönetmeliği', 'temiz oda denetim', 'uygunluk değerlendirme'],
        slug: 'temiz-oda-yonetmeligi-denetim'
      }
    ]
  },
  {
    title: 'Uygulama ve Teknoloji',
    description: 'Modüler sistemler, tasarım ve kurulum teknolojileri',
    topics: [
      {
        title: 'Modüler Temiz Oda Sistemleri',
        description: 'Modüler temiz oda avantajları, kurulum süreçleri ve maliyet analizi. Esnek tasarım çözümleri ve hızlı kurulum teknikleri.',
        icon: Shield,
        readTime: '9 dakika',
        keywords: ['modüler temiz oda', 'esnek tasarım', 'hızlı kurulum'],
        slug: 'moduler-temiz-oda-sistemleri'
      }
    ]
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
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">NEVAYS Bilgi Merkezi</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Temiz Oda<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary-200">
                Bilgi Merkezi
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Türkiye\'nin en kapsamlı temiz oda bilgi kaynağı. Sektörde otorite olan NEVAYS uzmanlarından 
              GMP, ISO 14644 ve temiz oda teknolojileri hakkında derinlemesine içerikler.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Konu Kümeleri ile Düzenlenmiş Kapsamlı İçerikler
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Her konu, birbiriyle ilişkili makalelerle desteklenerek size en kapsamlı bilgiyi sunar. 
            Temiz oda projeleriniz için ihtiyacınız olan tüm bilgiler tek bir merkezde.
          </p>
        </div>
      </section>

      {/* Knowledge Categories */}
      {knowledgeCategories.map((category, categoryIndex) => (
        <section key={category.title} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {category.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {category.topics.map((topic, topicIndex) => {
                const Icon = topic.icon;
                return (
                  <article
                    key={topic.title}
                    className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                  >
                    {/* Header with Reading Time */}
                    <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-primary-200 rounded-xl flex items-center justify-center mr-3">
                            <Icon className="h-6 w-6 text-primary-700" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center mb-1">
                              <span className="px-2 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                                {topic.readTime}
                              </span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-700 transition-colors leading-tight">
                              {topic.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{topic.description}</p>
                    </div>

                    {/* Keywords and CTA */}
                    <div className="p-6">
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {topic.keywords.map((keyword, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md border"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link
                        href={`/bilgi-merkezi/${topic.slug}`}
                        className="w-full inline-flex items-center justify-center px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 group-hover:scale-105"
                      >
                        <span className="mr-2">Makaleyi Oku</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ))}

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

      {/* Search and Navigation Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            🔍 Aradığınızı Bulamadınız mı?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Bilgi merkezimizde yer almayan özel sorularınız için uzmanlarımızla doğrudan iletişime geçebilirsiniz.
          </p>
          
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              🎯 Uzman Desteği Alın
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <HelpCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Teknik Danışmanlık</h4>
                <p className="text-sm text-gray-600">Proje özeli sorularınız</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Standart Rehberliği</h4>
                <p className="text-sm text-gray-600">GMP ve ISO uygulamaları</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Proje Değerlendirme</h4>
                <p className="text-sm text-gray-600">Fizibilite ve maliyet analizi</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:02123456789"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                📞 Uzmanı Ara
              </a>
              <a 
                href="mailto:bilgi@nevays.com"
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                ✉️ Detaylı Soru Sor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Positioning CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              🏆 Sektörde Otorite: NEVAYS Bilgi Merkezi
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              20+ yıllık deneyimimizle, Türkiye'nin en kapsamlı temiz oda bilgi kaynağını yarattık. 
              Sadece bilgi paylaşmıyoruz; her projenin arkasında duran uygulama deneyimimizi de sunuyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                📈 Rakamlarla NEVAYS Uzmanlık
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                  <div className="text-3xl font-black text-white mb-2">150+</div>
                  <div className="text-sm text-white/80">Tamamlanan Proje</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                  <div className="text-3xl font-black text-white mb-2">50+</div>
                  <div className="text-sm text-white/80">Uzman Makale</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                  <div className="text-3xl font-black text-white mb-2">20+</div>
                  <div className="text-sm text-white/80">Yıllık Deneyim</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                  <div className="text-3xl font-black text-white mb-2">100%</div>
                  <div className="text-sm text-white/80">Başarı Oranı</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">
                🚀 Bilgiden Uygulamaya: Tek Adres
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Uzman İçerik Üretimi</h4>
                    <p className="text-white/80 text-sm">Sektörde referans gösterilen teknik makaleler</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Anahtar Teslim Uygulama</h4>
                    <p className="text-white/80 text-sm">Bilgiyi proje haline dönüştüren deneyim</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Sürekli Güncellenen İçerik</h4>
                    <p className="text-white/80 text-sm">Sektördeki gelişmeleri anlık takip</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/referanslar"
                  className="bg-white text-primary-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  🏢 Referans Projelerimiz
                </Link>
                <Link 
                  href="/uygulama"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-700 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  🔧 Mühendislik Çözümlerimiz
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}