import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import PageHero from '@/components/ui/page-hero';
import { Shield, BookOpen, Award, Users, ChevronRight, Clock, TrendingUp, CheckCircle, ArrowRight, Lightbulb, FileText, Globe } from 'lucide-react';
import Link from 'next/link';

// SEO odaklı sık sorulan sorular
const seoQuestions = [
  {
    question: 'Temiz oda nedir?',
    answer: 'Temiz oda, havadaki partikül miktarının kontrol altında tutulduğu, ISO 14644 standartlarına uygun özel mühendislik alanlarıdır. Farmasötik, elektronik ve medikal sektörlerde kritik üretim süreçlerinde kullanılır.',
    category: 'Temel Kavramlar',
    keywords: ['temiz oda nedir', 'cleanroom tanımı', 'partikül kontrolü'],
    slug: 'temiz-oda-nedir'
  },
  {
    question: 'Temiz oda sistemleri nelerdir?',
    answer: 'Temiz oda sistemleri HVAC filtrasyon, LAF kabinleri, panel sistemleri, özel kapılar, pass box ünitelerini kapsar. Bu sistemler entegre çalışarak kontaminasyon kontrolü sağlar.',
    category: 'Sistemler',
    keywords: ['temiz oda sistemleri', 'HVAC', 'LAF kabinleri'],
    slug: 'temiz-oda-sistemleri'
  },
  {
    question: 'Temiz oda sınıfları nelerdir?',
    answer: 'ISO 14644 standardına göre Class 1-9 arası sınıflar vardır. Class 100 (ISO 5) farmasötik, Class 1000 (ISO 6) elektronik sektörde yaygın kullanılır.',
    category: 'Standartlar',
    keywords: ['temiz oda sınıfları', 'ISO 14644', 'Class 100'],
    slug: 'temiz-oda-siniflari'
  },
  {
    question: 'GMP nedir?',
    answer: 'GMP (Good Manufacturing Practice) İyi Üretim Uygulamaları, farmasötik ürünlerin kalite standartlarını belirleyen uluslararası düzenlemelerdir.',
    category: 'Standartlar',
    keywords: ['GMP nedir', 'İyi Üretim Uygulamaları', 'farmasötik standartlar'],
    slug: 'gmp-nedir'
  },
  {
    question: 'GMP sertifikası nedir?',
    answer: 'GMP sertifikası, üretim tesislerinin İyi Üretim Uygulamaları standartlarına uygunluğunu belgelendiren resmi sertifikadır.',
    category: 'Sertifikasyon',
    keywords: ['GMP sertifikası', 'üretim uygunluğu', 'kalite belgelendirme'],
    slug: 'gmp-sertifikasi'
  },
  {
    question: 'GMP belgesi nedir?',
    answer: 'GMP belgesi, farmasötik ve gıda üretim tesislerinin kalite yönetim sistemlerinin standartlara uygunluğunu gösteren resmi belgedir.',
    category: 'Belgelendirme',
    keywords: ['GMP belgesi', 'kalite yönetimi', 'üretim belgesi'],
    slug: 'gmp-belgesi'
  },
  {
    question: 'ISO 14644 nedir?',
    answer: 'ISO 14644, temiz oda ve kontrollü ortamların sınıflandırılması, performans testleri ve izlenmesi için uluslararası standarttır.',
    category: 'Standartlar',
    keywords: ['ISO 14644', 'temiz oda standardı', 'uluslararası norm'],
    slug: 'iso-14644'
  },
  {
    question: 'ISO 14644-1 nedir?',
    answer: 'ISO 14644-1, havadaki partikül konsantrasyonuna göre temiz oda sınıflandırmasını belirleyen ana standarttır.',
    category: 'Standartlar',
    keywords: ['ISO 14644-1', 'partikül sınıflandırma', 'temiz oda normları'],
    slug: 'iso-14644-1'
  },
  {
    question: 'Steril alan nedir?',
    answer: 'Steril alan, mikroorganizmaların tamamen elimine edildiği, aseptik üretim için özel tasarlanmış kontrollü ortamlardır.',
    category: 'Temel Kavramlar',
    keywords: ['steril alan nedir', 'aseptik ortam', 'mikroorganizma kontrolü'],
    slug: 'steril-alan-nedir'
  },
  {
    question: 'Modüler temiz oda nedir?',
    answer: 'Modüler temiz oda, önceden üretilmiş panel sistemlerle hızlı kurulum imkanı sunan, esnek ve ölçeklenebilir temiz oda çözümleridir.',
    category: 'Teknoloji',
    keywords: ['modüler temiz oda', 'panel sistemleri', 'hızlı kurulum'],
    slug: 'moduler-temiz-oda'
  },
  {
    question: 'Temiz oda yönetmeliği nedir?',
    answer: 'Temiz oda yönetmeliği, Türkiye\'de temiz oda tesislerinin tasarım, kurulum ve işletme gereksinimlerini düzenleyen yasal mevzuattır.',
    category: 'Mevzuat',
    keywords: ['temiz oda yönetmeliği', 'yasal gereksinimler', 'mevzuat'],
    slug: 'temiz-oda-yonetmeligi'
  },
  {
    question: 'Temiz oda denetimi nasıl yapılır?',
    answer: 'Temiz oda denetimi, partikül sayımı, hava akış ölçümü, basınç farkı testleri ve mikrobiyolojik kontroller ile gerçekleştirilir.',
    category: 'Test & Validasyon',
    keywords: ['temiz oda denetim', 'performans testi', 'validasyon'],
    slug: 'temiz-oda-denetimi'
  }
];

// Yan öne çıkan içerikler
const sidebarFeatured = [
  {
    title: 'GMP Standartları ve Sertifikasyon',
    description: 'İyi Üretim Uygulamaları standartları ve farmasötik sektördeki kritik gereksinimleri.',
    readTime: '12 dakika',
    category: 'Standartlar',
    slug: 'gmp-standartlari',
    icon: Award,
    color: 'bg-emerald-50 border-emerald-200'
  },
  {
    title: 'ISO 14644-1 Sınıflandırması',
    description: 'Uluslararası temiz oda standartlarının detaylı analizi ve uygulama örnekleri.',
    readTime: '10 dakika', 
    category: 'Standartlar',
    slug: 'iso-14644-standartlari',
    icon: Globe,
    color: 'bg-blue-50 border-blue-200'
  }
];

// İçerik kategorileri
const knowledgeCategories = [
  {
    title: 'Temel Kavramlar',
    description: 'Temiz oda teknolojisinin temel prensipleri ve tanımları',
    icon: Lightbulb,
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    iconColor: 'text-blue-600',
    topics: [
      {
        title: 'Temiz Oda Sınıfları ve Uygulama Alanları',
        description: 'ISO 14644 ve Federal Standard 209E\'ye göre temiz oda sınıflandırması ve sektörel uygulamalar.',
        readTime: '8 dakika',
        keywords: ['temiz oda sınıfları', 'ISO sınıflandırma', 'Class 100'],
        slug: 'temiz-oda-siniflari'
      },
      {
        title: 'Steril Alan vs Temiz Oda Farkları',
        description: 'Steril alan ile temiz oda arasındaki kritik farklar ve uygulamalar.',
        readTime: '6 dakika',
        keywords: ['steril alan', 'sterilizasyon', 'aseptik ortam'],
        slug: 'steril-alan-temiz-oda-farklari'
      },
      {
        title: 'HVAC Sistemleri ve Hava Akış Prensipleri',
        description: 'Temiz odalarda hava filtrasyon sistemleri ve laminer akış teknolojileri.',
        readTime: '10 dakika',
        keywords: ['HVAC', 'laminer akış', 'HEPA filtre'],
        slug: 'hvac-sistemleri-hava-akis'
      }
    ]
  },
  {
    title: 'Standartlar ve Yönetmelikler',
    description: 'Ulusal ve uluslararası standartlar, sertifikasyon süreçleri',
    icon: FileText,
    bgColor: 'bg-slate-50',
    borderColor: 'border-slate-200', 
    iconColor: 'text-slate-600',
    topics: [
      {
        title: 'Türkiye Temiz Oda Yönetmelikleri',
        description: 'Türkiye\'deki temiz oda yönetmelikleri, denetim gereksinimleri ve uygunluk süreçleri.',
        readTime: '9 dakika',
        keywords: ['temiz oda yönetmeliği', 'denetim', 'uygunluk'],
        slug: 'turkiye-temiz-oda-yonetmelikleri'
      },
      {
        title: 'FDA ve EMA Gereksinimleri',
        description: 'Amerika ve Avrupa ilaç kurumlarının temiz oda standartları.',
        readTime: '11 dakika',
        keywords: ['FDA', 'EMA', 'farmasötik standartlar'],
        slug: 'fda-ema-gereksinimleri'
      },
      {
        title: 'Validasyon ve Test Protokolleri',
        description: 'Temiz oda performans testleri ve validasyon süreçlerinin uygulanması.',
        readTime: '13 dakika',
        keywords: ['validasyon', 'test protokolleri', 'performans testi'],
        slug: 'validasyon-test-protokolleri'
      }
    ]
  },
  {
    title: 'Teknoloji ve Uygulama',
    description: 'Modüler sistemler, tasarım ve kurulum teknolojileri',
    icon: Shield,
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    iconColor: 'text-emerald-600', 
    topics: [
      {
        title: 'Modüler Temiz Oda Avantajları',
        description: 'Esnek tasarım, hızlı kurulum ve maliyet etkin çözümler.',
        readTime: '7 dakika',
        keywords: ['modüler sistem', 'esnek tasarım', 'hızlı kurulum'],
        slug: 'moduler-temiz-oda-avantajlari'
      },
      {
        title: 'Enerji Verimliliği ve Sürdürülebilirlik',
        description: 'Çevre dostu temiz oda tasarımları ve enerji optimizasyon stratejileri.',
        readTime: '9 dakika',
        keywords: ['enerji verimliliği', 'sürdürülebilirlik', 'yeşil teknoloji'],
        slug: 'enerji-verimliligi-surdurulebilirlik'
      }
    ]
  }
];


interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const title = locale === 'tr' 
    ? 'NEVAYS Bilgi Merkezi - GMP, ISO 14644, Uzman İçerikleri'
    : 'NEVAYS Knowledge Center - GMP, ISO 14644, Expert Content';
    
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
      url: `https://nevays.com/${locale}/bilgi-merkezi`,
      siteName: 'NEVAYS',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      type: 'website',
    },
  };
}

export default function BilgiMerkeziPage() {

  return (
    <MainLayout>
      {/* Hero Section */}
      <PageHero
        title="Temiz Oda Bilgi Merkezi"
        subtitle="Sektörün en çok sorulan sorularına teknik yanıtlar ve mühendislik rehberleri."
        breadcrumbs={[
          { label: 'Bilgi Merkezi' }
        ]}
      />

      {/* SEO Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Temiz Oda Sistemleri Hakkında Her Şey
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              <strong>Temiz oda nedir?</strong> <strong>GMP nedir?</strong> <strong>ISO 14644</strong> standartları nelerdir? 
              Temiz oda sektörünün en çok merak edilen sorularına mühendislik perspektifiyle yanıtlar.
            </p>
          </div>
        </div>
      </section>

      {/* Sıkça Sorulan Sorular - SEO Odaklı FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-lg text-gray-600">
              Temiz oda sektörünün en çok merak edilen konularında uzman yanıtlar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seoQuestions.map((item, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full border border-primary-200">
                    {item.category}
                  </span>
                </div>

                {/* Question */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-primary-700 transition-colors">
                  {item.question}
                </h3>

                {/* Answer */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.answer}
                </p>

                {/* Keywords */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {item.keywords.slice(0, 2).map((keyword, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-md border"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={`/bilgi-merkezi/${item.slug}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm transition-all"
                >
                  <span className="mr-2">Detaylı Bilgi</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Mühendislik Perspektifi Bölümü */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mühendislik Perspektifiyle Temiz Oda
            </h2>
            <p className="text-lg text-gray-600">
              NEVAYS'ın 20+ yıllık tecrübesi ile sektörel yaklaşımlar
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Neden NEVAYS Bilgi Merkezi?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Mühendislik Odaklı İçerik</h4>
                      <p className="text-gray-600 text-sm">Satış jargonu değil, teknik gerçekler</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">20+ Yıl Tecrübe</h4>
                      <p className="text-gray-600 text-sm">Gerçek proje deneyimlerinden örnekler</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Güncel Standartlar</h4>
                      <p className="text-gray-600 text-sm">ISO 14644, GMP ve yasal mevzuat takibi</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <img 
                  src="/images/temizodasistemcard.webp" 
                  alt="NEVAYS Temiz Oda Mühendislik" 
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
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