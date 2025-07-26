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
  Lightbulb,  // New icon for thought leadership
  Globe,      // New icon for industry trends
  Award       // New icon for case studies
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

// Refined content categories
const contentCategories = [
  {
    id: 'case-studies',
    name: 'Vaka İncelemeleri',
    description: 'Somut proje başarıları ve çözüm hikayeleri',
    icon: Award,
    color: 'text-blue-600',
    articles: [
      {
        id: 'pharma-cleanroom-transformation',
        title: 'X İlaç Firmasında GMP Uyumlu Temiz Oda Dönüşümü',
        excerpt: 'Kontaminasyon riskini sıfıra indiren kapsamlı temiz oda yenileme projesi.',
        author: 'Dr. Mehmet Kaya',
        category: 'Vaka İncelemesi',
        publishDate: '2024-02-15',
        readTime: '10 dakika'
      },
      // More case studies...
    ]
  },
  {
    id: 'technical-deep-dive',
    name: 'Mühendislik Derinliği',
    description: 'Teknik uzmanlık ve detaylı analiz',
    icon: Lightbulb,
    color: 'text-green-600',
    articles: [
      {
        id: 'hvac-energy-optimization',
        title: 'Temiz Oda HVAC Sistemlerinde Enerji Verimliliği',
        excerpt: 'Optimize edilmiş havalandırma sistemleriyle maliyetleri ve karbon ayak izini azaltma stratejileri.',
        author: 'Eng. Ayşe Demir',
        category: 'Teknik Analiz',
        publishDate: '2024-02-10',
        readTime: '8 dakika'
      },
      // More technical articles...
    ]
  },
  {
    id: 'industry-trends',
    name: 'Sektör Öngörüleri',
    description: 'Geleceği şekillendiren trendler ve analizler',
    icon: Globe,
    color: 'text-purple-600',
    articles: [
      {
        id: 'cleanroom-ai-future',
        title: 'Yapay Zeka ve Temiz Oda Teknolojilerinin Geleceği',
        excerpt: '2030\'a doğru temiz oda sistemlerinde yapay zeka ve otomasyon öngörüleri.',
        author: 'Dr. Emre Yılmaz',
        category: 'Trend Analizi',
        publishDate: '2024-02-05',
        readTime: '7 dakika'
      },
      // More trend analysis articles...
    ]
  }
];

export default function BlogPage() {
  return (
    <MainLayout>
      <PageHero
        title="Düşünce Liderliği Platformu"
        subtitle="Mühendislik bilgisini paylaşarak sektörü ilerletiyoruz."
        breadcrumbs={[{ label: 'Blog' }]}
      />

      {/* Thought Leadership Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="inline-block bg-white/30 backdrop-blur-sm rounded-full px-6 py-2 mb-4 text-primary-900">
            <span className="text-sm font-medium">🚀 Sektörün Nabzı</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Mühendislik Bilgisini Demokratikleştiriyoruz
          </h2>
          <p className="text-xl text-primary-800 max-w-3xl mx-auto mb-8">
            Her makalemiz, temiz oda teknolojilerinde 20+ yıllık birikimimizin bir yansıması. 
            Şeffaf, derinlikli ve pratik bilgiyi herkes için erişilebilir kılıyoruz.
          </p>
        </div>
      </section>

      {/* Content Categories Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {contentCategories.map((category) => (
              <div 
                key={category.id} 
                className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 hover:shadow-xl transition-all group"
              >
                <div className={`mb-6 ${category.color}`}>
                  <category.icon className="w-12 h-12 mx-auto" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                  {category.name}
                </h3>
                <p className="text-center text-gray-600 mb-6">
                  {category.description}
                </p>
                <div className="space-y-4">
                  {category.articles.map((article) => (
                    <Link 
                      key={article.id}
                      href={`/blog/${article.id}`}
                      className="block bg-gray-50 hover:bg-primary-50 rounded-lg p-4 transition-colors group"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">
                            {article.title}
                          </h4>
                          <div className="text-xs text-gray-500 mt-1 flex items-center space-x-2">
                            <span>{article.author}</span>
                            <span>•</span>
                            <span>{article.publishDate}</span>
                          </div>
                        </div>
                        <ArrowRight className="text-gray-400 group-hover:text-primary-600 transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter and Contribution CTA */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">
            Sektörün Bilgi Birikimini Birlikte Geliştirelim
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Uzmanlığınızı paylaşın, sektörün gelişimine katkıda bulunun. 
            Makalelerinizle NEVAYS Blog'da yer alın.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/contact"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Makale Önerisi Gönder
            </Link>
            <Link
              href="/bilgi-merkezi"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold"
            >
              Bilgi Merkezini Keşfet
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}