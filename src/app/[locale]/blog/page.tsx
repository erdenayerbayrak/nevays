import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import PageHero from '@/components/ui/page-hero';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  BookOpen, 
  TrendingUp, 
  Lightbulb,
  Globe,      
  Award,
  Share2,
  Download,
  Clock,
  Eye
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  
  const title = locale === 'tr' 
    ? 'NEVAYS Blog - Düşünce Liderliği ve Sektör İçgörüleri'
    : 'NEVAYS Blog - Thought Leadership and Industry Insights';
    
  const description = locale === 'tr'
    ? 'Temiz oda teknolojilerinde düşünce liderliği. Uzman makaleleri, sektör trendleri, vaka analizleri ve teknik rehberler.'
    : 'Thought leadership in cleanroom technologies. Expert articles, industry trends, case studies and technical guides.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://nevays.com/${locale}/blog`,
      siteName: 'NEVAYS',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      type: 'website',
    },
  };
}

// Blog makaleleri - sade ve hızlı yapı
const blogArticles = [
  {
    id: '1',
    title: 'Temiz Oda Nedir? Cleanroom Sistemleri Rehberi',
    excerpt: 'Temiz oda tanımı, sınıflandırması, uygulama alanları ve kurulum süreçleri hakkında kapsamlı bilgiler.',
    author: 'NEVAYS Mühendislik Ekibi',
    category: 'Temel Bilgiler',
    publishDate: '2024-01-20',
    readTime: '6 dakika',
    views: '1.45K',
    image: '/images/blog/temiz-oda-nedir.jpg',
    featured: true,
    slug: 'temiz-oda-nedir'
  },
  {
    id: '2',
    title: 'GMP Nedir? İyi Üretim Uygulamaları Rehberi',
    excerpt: 'Good Manufacturing Practice (GMP) standartları, temiz oda sistemlerinde uygulanması ve kalite güvencesi.',
    author: 'NEVAYS Kalite Ekibi',
    category: 'Kalite',
    publishDate: '2024-01-18',
    readTime: '9 dakika',
    views: '1.28K',
    image: '/images/blog/gmp-iyi-uretim.jpg',
    featured: true,
    slug: 'gmp-nedir-iyi-uretim-uygulamalari'
  },
  {
    id: '3',
    title: 'Temiz Oda Sınıflandırması: ISO 14644 Standartları',
    excerpt: 'ISO 14644 standardına göre temiz oda sınıfları, parçacık limitleri ve sınıflandırma kriterleri.',
    author: 'NEVAYS Teknik Ekibi',
    category: 'Standartlar',
    publishDate: '2024-01-16',
    readTime: '7 dakika',
    views: '1.12K',
    image: '/images/blog/iso-14644-siniflandirma.jpg',
    featured: true,
    slug: 'temiz-oda-siniflandirmasi-iso-14644'
  },
  {
    id: '4',
    title: 'Modüler Temiz Oda Sistemleri: Avantajları ve Uygulamaları',
    excerpt: 'Modüler temiz oda çözümlerinin esnek kurulum imkanları, maliyet etkinliği ve hızlı devreye alma avantajları.',
    author: 'NEVAYS Mühendislik',
    category: 'Teknoloji',
    publishDate: '2024-01-12',
    readTime: '9 dakika',
    views: '1.3K',
    image: '/images/laminerhavaakış.webp',
    featured: false,
    slug: 'moduler-temiz-oda-sistemleri-avantajlari'
  },
  {
    id: '26',
    title: 'Temiz Oda Standartları 2024: Yeni ISO 14644 Güncellemeleri',
    excerpt: '2024 yılında güncellenen ISO 14644 standartları ve temiz oda sınıflandırmaları hakkında detaylı bilgiler.',
    author: 'NEVAYS Mühendislik Ekibi',
    category: 'Standartlar',
    publishDate: '2024-01-15',
    readTime: '8 dakika',
    views: '1.05K',
    image: '/images/temizodasistemcard.webp',
    featured: false,
    slug: 'temiz-oda-standartlari-2024'
  },
  {
    id: '27',
    title: 'Temiz Oda Hava Filtreleri: HEPA ve ULPA Teknolojileri',
    excerpt: 'HEPA ve ULPA filtrelerinin çalışma prensipleri, seçim kriterleri ve bakım gereksinimleri.',
    author: 'NEVAYS Mühendislik',
    category: 'Teknoloji',
    publishDate: '2024-01-08',
    readTime: '10 dakika',
    views: '890',
    image: '/images/hvac.webp',
    featured: false,
    slug: 'temiz-oda-hava-filtreleri-hepa-ulpa'
  },
  {
    id: '28',
    title: 'Temiz Oda Aydınlatma Sistemleri ve LED Teknolojisi',
    excerpt: 'Temiz oda aydınlatma gereksinimleri, LED teknolojisinin avantajları ve enerji verimliliği.',
    author: 'NEVAYS Mühendislik',
    category: 'Teknoloji',
    publishDate: '2024-01-05',
    readTime: '7 dakika',
    views: '720',
    image: '/images/laminerhavaakış.webp',
    featured: false,
    slug: 'temiz-oda-aydinlatma-sistemleri-led'
  },
  {
    id: '29',
    title: 'Temiz Oda İzleme Sistemleri: IoT ve Dijital Çözümler',
    excerpt: 'Akıllı temiz oda izleme sistemleri, IoT sensörleri ve gerçek zamanlı veri analizi.',
    author: 'NEVAYS Mühendislik',
    category: 'Teknoloji',
    publishDate: '2024-01-02',
    readTime: '9 dakika',
    views: '650',
    image: '/images/temizodamalzeme.webp',
    featured: false,
    slug: 'temiz-oda-izleme-sistemleri-iot'
  },
  {
    id: '30',
    title: 'Temiz Oda Risk Analizi ve FMEA Uygulamaları',
    excerpt: 'Temiz oda sistemlerinde risk analizi metodları, FMEA uygulamaları ve güvenlik değerlendirmesi.',
    author: 'NEVAYS Mühendislik',
    category: 'Kalite',
    publishDate: '2023-12-30',
    readTime: '11 dakika',
    views: '580',
    image: '/images/temizodasistemcard.webp',
    featured: false,
    slug: 'temiz-oda-risk-analizi-fmea'
  },
  {
    id: '5',
    title: 'Steril Alan Nedir? Sterilizasyon Yöntemleri',
    excerpt: 'Steril alan tanımı, sterilizasyon teknikleri ve farmasötik üretimde kritik kontrol noktaları.',
    author: 'NEVAYS Mühendislik',
    category: 'Temel Bilgiler',
    publishDate: '2024-01-10',
    readTime: '7 dakika',
    views: '1.1K',
    image: '/images/temizodasistemcard.webp',
    featured: false,
    slug: 'steril-alan-nedir-sterilizasyon-yontemleri'
  },
  {
    id: '6',
    title: 'Temiz Oda Panelleri: Malzeme Seçimi ve Özellikleri',
    excerpt: 'Temiz oda duvar panelleri, tavan panelleri ve hijyen panellerinin teknik özellikleri ve seçim kriterleri.',
    author: 'NEVAYS Mühendislik',
    category: 'Ürünler',
    publishDate: '2024-01-08',
    readTime: '11 dakika',
    views: '980',
    image: '/images/hvac.webp',
    featured: false,
    slug: 'temiz-oda-panelleri-malzeme-secimi'
  },
  {
    id: '7',
    title: 'LAF Kabin Sistemleri: Laminer Hava Akışı Teknolojisi',
    excerpt: 'Laminer Air Flow (LAF) kabinlerinin çalışma prensipleri, türleri ve laboratuvar uygulamalarında kullanımı.',
    author: 'NEVAYS Mühendislik',
    category: 'Teknoloji',
    publishDate: '2024-01-05',
    readTime: '8 dakika',
    views: '890',
    image: '/images/temizodamalzeme.webp',
    featured: false,
    slug: 'laf-kabin-sistemleri-laminer-hava-akisi'
  },
  {
    id: '8',
    title: 'Temiz Oda HVAC Sistemleri ve Havalandırma',
    excerpt: 'Temiz oda havalandırma sistemlerinin tasarımı, enerji verimliliği ve performans optimizasyonu.',
    author: 'NEVAYS Mühendislik',
    category: 'Mühendislik',
    publishDate: '2024-01-03',
    readTime: '10 dakika',
    views: '1.2K',
    image: '/images/laminerhavaakış.webp',
    featured: false,
    slug: 'temiz-oda-hvac-sistemleri-havalandirma'
  },
  {
    id: '9',
    title: 'Temiz Oda Validasyonu ve Test Prosedürleri',
    excerpt: 'Temiz oda sistemlerinin performans testleri, validasyon protokolleri ve sürekli izleme gereksinimleri.',
    author: 'NEVAYS Mühendislik',
    category: 'Standartlar',
    publishDate: '2023-12-30',
    readTime: '9 dakika',
    views: '750',
    image: '/images/temizodasistemcard.webp',
    featured: false,
    slug: 'temiz-oda-validasyonu-test-prosedurleri'
  },
  {
    id: '10',
    title: 'Farmasötik Temiz Oda Tasarımı: GMP Uyumluluk',
    excerpt: 'İlaç üretim tesislerinde GMP standartlarına uygun temiz oda tasarımının kritik faktörleri.',
    author: 'NEVAYS Mühendislik',
    category: 'Mühendislik',
    publishDate: '2023-12-28',
    readTime: '12 dakika',
    views: '1.4K',
    image: '/images/hvac.webp',
    featured: false,
    slug: 'farmasotik-temiz-oda-tasarimi-gmp'
  },
  {
    id: '11',
    title: 'Temiz Oda Kıyafetleri ve ESD Koruması',
    excerpt: 'Temiz oda tulumları, antistatik kıyafetler ve elektrostatik deşarj (ESD) koruması için gereksinimler.',
    author: 'NEVAYS Mühendislik',
    category: 'Ürünler',
    publishDate: '2023-12-25',
    readTime: '6 dakika',
    views: '680',
    image: '/images/temizodamalzeme.webp',
    featured: false,
    slug: 'temiz-oda-kiyafetleri-esd-korumasi'
  },
  {
    id: '12',
    title: 'Pass Box Sistemleri: Malzeme Transfer Çözümleri',
    excerpt: 'Pass box sistemlerinin çalışma prensipleri, türleri ve temiz oda uygulamalarında kullanım alanları.',
    author: 'NEVAYS Mühendislik',
    category: 'Ürünler',
    publishDate: '2023-12-22',
    readTime: '7 dakika',
    views: '590',
    image: '/images/laminerhavaakış.webp',
    featured: false,
    slug: 'pass-box-sistemleri-malzeme-transfer'
  },
  {
    id: '13',
    title: 'Temiz Oda Denetimi ve Kalite Kontrol',
    excerpt: 'Temiz oda sistemlerinin düzenli denetimi, kalite kontrol prosedürleri ve uygunluk değerlendirmesi.',
    author: 'NEVAYS Mühendislik',
    category: 'Standartlar',
    publishDate: '2023-12-20',
    readTime: '8 dakika',
    views: '720',
    image: '/images/temizodasistemcard.webp',
    featured: false,
    slug: 'temiz-oda-denetimi-kalite-kontrol'
  },
  {
    id: '14',
    title: 'Laboratuvar Temiz Oda Kurulumu: Özel Gereksinimler',
    excerpt: 'Araştırma ve analiz laboratuvarları için özel temiz oda çözümleri ve kurulum gereksinimleri.',
    author: 'NEVAYS Mühendislik',
    category: 'Mühendislik',
    publishDate: '2023-12-18',
    readTime: '10 dakika',
    views: '850',
    image: '/images/hvac.webp',
    featured: false,
    slug: 'laboratuvar-temiz-oda-kurulumu'
  },
  {
    id: '15',
    title: 'Temiz Oda Yönetmeliği ve Yasal Gereksinimler',
    excerpt: 'Türkiye ve AB temiz oda yönetmelikleri, yasal gereksinimler ve uyumluluk kriterleri.',
    author: 'NEVAYS Mühendislik',
    category: 'Standartlar',
    publishDate: '2023-12-15',
    readTime: '9 dakika',
    views: '920',
    image: '/images/temizodamalzeme.webp',
    featured: false,
    slug: 'temiz-oda-yonetmeligi-yasal-gereksinimler'
  },
  {
    id: '16',
    title: 'Temiz Oda Kapıları: Tasarım ve Seçim Kriterleri',
    excerpt: 'Temiz oda kapılarının teknik özellikleri, sızdırmazlık gereksinimleri ve doğru seçim kriterleri.',
    author: 'NEVAYS Mühendislik',
    category: 'Ürünler',
    publishDate: '2023-12-12',
    readTime: '7 dakika',
    views: '640',
    image: '/images/laminerhavaakış.webp',
    featured: false,
    slug: 'temiz-oda-kapilari-tasarim-secim'
  },
  {
    id: '17',
    title: 'Biyoteknoloji Sektöründe Temiz Oda Uygulamaları',
    excerpt: 'Biyoteknoloji ve biyofarmasötik üretimde özel temiz oda gereksinimler ve çözüm önerileri.',
    author: 'NEVAYS Mühendislik',
    category: 'Sektörler',
    publishDate: '2023-12-10',
    readTime: '11 dakika',
    views: '780',
    image: '/images/temizodasistemcard.webp',
    featured: false,
    slug: 'biyoteknoloji-temiz-oda-uygulamalari'
  },
  {
    id: '18',
    title: 'Elektronik Sektöründe Temiz Oda Gereksinimleri',
    excerpt: 'Yarıiletken ve elektronik üretiminde temiz oda standartları, ESD koruması ve özel gereksinimler.',
    author: 'NEVAYS Mühendislik',
    category: 'Sektörler',
    publishDate: '2023-12-08',
    readTime: '8 dakika',
    views: '690',
    image: '/images/hvac.webp',
    featured: false,
    slug: 'elektronik-sektorunde-temiz-oda'
  },
  {
    id: '19',
    title: 'Gıda Sektöründe Hijyen ve Temiz Alan Uygulamaları',
    excerpt: 'Gıda üretim tesislerinde hijyen standartları, temiz alan tasarımı ve HACCP uyumluluğu.',
    author: 'NEVAYS Mühendislik',
    category: 'Sektörler',
    publishDate: '2023-12-05',
    readTime: '9 dakika',
    views: '560',
    image: '/images/temizodamalzeme.webp',
    featured: false,
    slug: 'gida-sektorunde-hijyen-temiz-alan'
  },
  {
    id: '20',
    title: 'Temiz Oda Maliyetleri ve Yatırım Analizi',
    excerpt: 'Temiz oda projelerinin maliyet analizi, yatırım geri dönüş hesaplamaları ve bütçe planlama rehberi.',
    author: 'NEVAYS Mühendislik',
    category: 'Ekonomi',
    publishDate: '2023-12-03',
    readTime: '10 dakika',
    views: '1.1K',
    image: '/images/laminerhavaakış.webp',
    featured: false,
    slug: 'temiz-oda-maliyetleri-yatirim-analizi'
  },
  {
    id: '21',
    title: 'Temiz Oda Bakım ve Sürdürülebilirlik',
    excerpt: 'Temiz oda sistemlerinin düzenli bakımı, performans izleme ve uzun vadeli sürdürülebilirlik stratejileri.',
    author: 'NEVAYS Mühendislik',
    category: 'Bakım',
    publishDate: '2023-12-01',
    readTime: '8 dakika',
    views: '670',
    image: '/images/temizodasistemcard.webp',
    featured: false,
    slug: 'temiz-oda-bakim-surdurulebilirlik'
  },
  {
    id: '22',
    title: 'Temiz Oda Teknolojilerinde Gelecek Trendleri',
    excerpt: 'Temiz oda sektöründe yeni teknolojiler, IoT entegrasyonu ve gelecek dönem beklentileri.',
    author: 'NEVAYS Mühendislik',
    category: 'Teknoloji',
    publishDate: '2023-11-28',
    readTime: '12 dakika',
    views: '950',
    image: '/images/hvac.webp',
    featured: false,
    slug: 'temiz-oda-teknolojilerinde-gelecek-trendleri'
  },
  {
    id: '23',
    title: 'Temiz Oda Proje Yönetimi: Başarı Faktörleri',
    excerpt: 'Temiz oda projelerinin başarılı yönetimi için kritik faktörler, zaman planlaması ve risk yönetimi.',
    author: 'NEVAYS Mühendislik',
    category: 'Proje Yönetimi',
    publishDate: '2023-11-25',
    readTime: '11 dakika',
    views: '820',
    image: '/images/temizodamalzeme.webp',
    featured: false,
    slug: 'temiz-oda-proje-yonetimi-basari-faktorleri'
  },
  {
    id: '24',
    title: 'Enerji Verimli Temiz Oda Tasarımı',
    excerpt: 'Sürdürülebilir temiz oda çözümleri, enerji tasarrufu teknikleri ve çevre dostu yaklaşımlar.',
    author: 'NEVAYS Mühendislik',
    category: 'Sürdürülebilirlik',
    publishDate: '2023-11-22',
    readTime: '9 dakika',
    views: '740',
    image: '/images/laminerhavaakış.webp',
    featured: false,
    slug: 'enerji-verimli-temiz-oda-tasarimi'
  },
  {
    id: '25',
    title: 'Temiz Oda Personel Eğitimi ve Sertifikasyon',
    excerpt: 'Temiz oda operasyonları için personel eğitim programları, sertifikasyon süreçleri ve yetkinlik gereksinimleri.',
    author: 'NEVAYS Mühendislik',
    category: 'Eğitim',
    publishDate: '2023-11-20',
    readTime: '8 dakika',
    views: '580',
    image: '/images/temizodasistemcard.webp',
    featured: false,
    slug: 'temiz-oda-personel-egitimi-sertifikasyon'
  }
];

export default function BlogPage() {
  const featuredArticle = blogArticles.find(article => article.featured);
  const regularArticles = blogArticles.filter(article => !article.featured);

  return (
    <MainLayout>
      <PageHero
        title="Blog & Makaleler"
        subtitle="Temiz oda teknolojilerinde güncel bilgi ve mühendislik perspektifleri."
        breadcrumbs={[{ label: 'Blog' }]}
      />

      {/* Sade Giriş */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Mühendislik Makaleleri
          </h1>
          <p className="text-lg text-gray-600">
            Temiz oda sektöründeki gelişmeleri, teknik analizleri ve proje deneyimlerini sizlerle paylaşıyoruz.
          </p>
        </div>
      </section>

      {/* Öne Çıkan Makale */}
      {featuredArticle && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Öne Çıkan Makale</h2>
            </div>
            
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mr-3">
                      {featuredArticle.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm space-x-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {featuredArticle.publishDate}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredArticle.readTime}
                      </span>
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {featuredArticle.views}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {featuredArticle.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {featuredArticle.author}
                    </span>
                    
                    <div className="flex items-center space-x-3">
                      <button className="flex items-center px-3 py-2 text-gray-600 hover:text-primary-600 transition-colors">
                        <Share2 className="w-4 h-4 mr-1" />
                        <span className="text-sm">Paylaş</span>
                      </button>
                      
                      <Link
                        href={`/blog/${featuredArticle.id}`}
                        className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                      >
                        Devamını Oku
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* Makale Listesi */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Tüm Makaleler</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-xs mb-3 space-x-3">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {article.publishDate}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readTime}
                    </span>
                    <span className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {article.views}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {article.author}
                    </span>
                    
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                      
                      <Link
                        href={`/blog/${article.id}`}
                        className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        Oku
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Basit CTA */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Temiz oda projeniz için görüşelim
          </h2>
          <p className="text-gray-600 mb-6">
            Makalelerle ilgili sorularınız veya proje talepleriniz için bize ulaşın.
          </p>
          <a 
            href="https://wa.me/905551234567"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            📱 WhatsApp ile İletişim
          </a>
        </div>
      </section>
    </MainLayout>
  );
}