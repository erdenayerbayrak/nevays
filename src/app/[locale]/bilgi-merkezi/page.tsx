import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import MainLayout from '@/components/layout/main-layout';
import PageHero from '@/components/ui/page-hero';
import { Shield, BookOpen, Award, Users, ChevronRight, Clock, TrendingUp, CheckCircle, ArrowRight, Lightbulb, FileText, Globe } from 'lucide-react';
import Link from 'next/link';

// Öne çıkan ana içerik
const featuredContent = {
  title: 'Temiz Oda Nedir ve Sistemleri Nasıl Çalışır?',
  description: 'ISO 14644 standartlarında partikül kontrolü, hava akış sistemleri ve çapraz bulaşma önlemi tekniklerinin kapsamlı analizi. Farmasötik, elektronik ve medikal sektörlerde kritik üretim alanlarının temel prensipleri.',
  readTime: '15 dakika',
  category: 'Temel Kavramlar',
  slug: 'temiz-oda-nedir-sistemleri',
  keywords: ['temiz oda nedir', 'temiz oda sistemleri', 'ISO 14644', 'partikül kontrolü', 'HEPA filtrasyon'],
  imageUrl: '/images/temizodasistemcard.webp'
};

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
  const t = await getTranslations({ locale, namespace: 'knowledge' });
  
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
        title="Bilgi Merkezi"
        subtitle="Sektörünün standartlarını belirleyen bilgi, tecrübe ve analizler."
        breadcrumbs={[
          { label: 'Bilgi Merkezi' }
        ]}
      />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Bilgiyi Paylaşarak Büyüyoruz
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            NEVAYS olarak, 20+ yıllık tecrübemizde edindiğimiz bilgi birikimini sektör paydaşlarımızla paylaşmayı bir sorumluluk olarak görüyoruz. Bu merkez, temiz oda teknolojileri hakkında en doğru ve güncel bilgiye ulaşmanız için tasarlandı.
          </p>
        </div>
      </section>

      {/* Manşet Bölümü - "Asymmetric Hero Content" */}
      <section id="featured-content" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ÖNE ÇIKAN İÇERİKLER
            </h2>
            <p className="text-xl text-gray-600">
              Sektörün en çok merak ettiği konularda derinlemesine analizler
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sol Büyük Kart - Ana Featured Content */}
            <div className="lg:col-span-2">
              <article className="group bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                {/* Görsel Header */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={featuredContent.imageUrl}
                    alt={featuredContent.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 bg-primary-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                    <span className="text-sm font-semibold">{featuredContent.category}</span>
                  </div>
                  
                  {/* Reading Time */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">{featuredContent.readTime}</span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="text-center text-white">
                      <BookOpen className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-xl font-semibold">Makaleyi Oku</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 group-hover:text-primary-700 transition-colors leading-tight">
                    {featuredContent.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    {featuredContent.description}
                  </p>

                  {/* Keywords */}
                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                      {featuredContent.keywords.map((keyword, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-full border border-primary-200"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/bilgi-merkezi/${featuredContent.slug}`}
                    className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-300 group-hover:scale-105 text-lg"
                  >
                    <span className="mr-3">Detaylı Makaleyi Oku</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            </div>

            {/* Sağ Yan Kartlar */}
            <div className="space-y-8">
              {sidebarFeatured.map((item, index) => {
                const Icon = item.icon;
                return (
                  <article
                    key={index}
                    className={`group bg-white rounded-2xl shadow-lg border-2 ${item.color} overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}
                  >
                    <div className="p-6">
                      <div className="flex items-start mb-4">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4 shadow-sm">
                          <Icon className="h-6 w-6 text-gray-700" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full mr-2">
                              {item.category}
                            </span>
                            <span className="flex items-center text-gray-500 text-sm">
                              <Clock className="w-3 h-3 mr-1" />
                              {item.readTime}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <Link
                        href={`/bilgi-merkezi/${item.slug}`}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm group-hover:translate-x-1 transition-all"
                      >
                        <span className="mr-2">Okumaya Başla</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Kategorize İçerik - "Expertise Zones" */}
      {knowledgeCategories.map((category, categoryIndex) => {
        const CategoryIcon = category.icon;
        return (
          <section key={category.title} className={`py-20 ${category.bgColor}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Category Header */}
              <div className="text-center mb-16">
                <div className="flex items-center justify-center mb-6">
                  <div className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center mr-4 shadow-lg border-2 ${category.borderColor}`}>
                    <CategoryIcon className={`h-8 w-8 ${category.iconColor}`} />
                  </div>
                  <div className="text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                      {category.title}
                    </h2>
                    <p className="text-xl text-gray-600 mt-2">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Topics Grid */}
              <div className="grid lg:grid-cols-3 gap-8">
                {category.topics.map((topic, topicIndex) => (
                  <article
                    key={topic.title}
                    className="group bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 bg-white border-2 ${category.borderColor} ${category.iconColor} text-sm font-semibold rounded-full`}>
                          {topic.readTime}
                        </span>
                        <TrendingUp className={`w-5 h-5 ${category.iconColor}`} />
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors leading-tight">
                        {topic.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                        {topic.description}
                      </p>

                      {/* Keywords */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {topic.keywords.slice(0, 3).map((keyword, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-md border"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link
                        href={`/bilgi-merkezi/${topic.slug}`}
                        className={`w-full inline-flex items-center justify-center px-6 py-3 border-2 ${category.borderColor} ${category.iconColor} hover:bg-white hover:shadow-md font-semibold rounded-xl transition-all duration-300 group-hover:scale-105`}
                      >
                        <span className="mr-2">Makaleyi Oku</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}


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