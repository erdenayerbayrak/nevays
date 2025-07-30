import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
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
  const t = await getTranslations({ locale, namespace: 'blog' });
  
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
    title: 'GMP Uyumlu Temiz Oda Tasarımında Kritik Faktörler',
    excerpt: 'Farmasötik sektörde GMP standartlarına uygun temiz oda tasarımının temel prensipleri ve dikkat edilmesi gereken kritik noktalar.',
    author: 'NEVAYS Mühendislik',
    category: 'Mühendislik',
    publishDate: '2024-01-15',
    readTime: '8 dakika',
    views: '1.2K',
    image: '/images/temizodasistemcard.webp',
    featured: true
  },
  {
    id: '2', 
    title: 'ISO 14644 Standartlarında Son Güncellemeler',
    excerpt: 'Temiz oda sınıflandırması ve test prosedürlerinde yapılan son değişiklikler ve bunların proje uygulamalarına etkileri.',
    author: 'NEVAYS Mühendislik',
    category: 'Standartlar',
    publishDate: '2024-01-10',
    readTime: '6 dakika',
    views: '890',
    image: '/images/hvac.webp',
    featured: false
  },
  {
    id: '3',
    title: 'Modüler Temiz Oda Sistemlerinin Avantajları',
    excerpt: 'Esnek kurulum imkanı ve maliyet etkinliği açısından modüler temiz oda çözümlerinin detaylı analizi.',
    author: 'NEVAYS Mühendislik',
    category: 'Teknoloji',
    publishDate: '2024-01-05',
    readTime: '10 dakika',
    views: '1.5K',
    image: '/images/temizodamalzeme.webp',
    featured: false
  },
  {
    id: '4',
    title: 'HVAC Sistemlerinde Enerji Verimliliği',
    excerpt: 'Temiz oda havalandırma sistemlerinde enerji tüketimini optimize etme yöntemleri ve sürdürülebilir çözümler.',
    author: 'NEVAYS Mühendislik',
    category: 'Teknoloji',
    publishDate: '2023-12-28',
    readTime: '7 dakika',
    views: '750',
    image: '/images/laminerhavaakış.webp',
    featured: false
  },
  {
    id: '5',
    title: 'LAF Kabin Seçimi ve Kurulum Rehberi',
    excerpt: 'Laminer akış kabinlerinin doğru seçimi, kurulum süreçleri ve performans optimizasyonu için pratik öneriler.',
    author: 'NEVAYS Mühendislik',
    category: 'Mühendislik',
    publishDate: '2023-12-20',
    readTime: '12 dakika',
    views: '980',
    image: '/images/temizodasistemcard.webp',
    featured: false
  },
  {
    id: '6',
    title: 'Temiz Oda Validasyon Süreçleri',
    excerpt: 'Temiz oda sistemlerinin performans testleri, validasyon protokolleri ve sürekli izleme gereksinimleri.',
    author: 'NEVAYS Mühendislik',
    category: 'Standartlar',
    publishDate: '2023-12-15',
    readTime: '9 dakika',
    views: '1.1K',
    image: '/images/hvac.webp',
    featured: false
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