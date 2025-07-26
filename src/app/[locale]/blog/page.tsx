import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import MainLayout from '@/components/layout/main-layout';
import { Calendar, User, ArrowRight, BookOpen, TrendingUp } from 'lucide-react';
import Link from 'next/link';

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

const featuredArticle = {
  id: 'gmp-2024-guncellemeleri',
  title: 'GMP 2024 Güncellemeleri: Temiz Oda Standartlarında Yeni Gereksinimler',
  excerpt: 'AB GMP kılavuzunda 2024 yılında yapılan önemli güncellemeler ve bunların temiz oda tasarımına etkileri. Yeni validasyon gereksinimleri ve kontaminasyon kontrol stratejileri.',
  author: 'Dr. Mehmet Özkan',
  authorRole: 'Temiz Oda Uzmanı',
  publishDate: '2024-01-15',
  readTime: '8 dakika',
  category: 'GMP & Regulasyon',
  tags: ['GMP', 'Validasyon', 'Standartlar', '2024']
};

const blogArticles = [
  {
    id: 'iso-14644-3-yeni-standart',
    title: 'ISO 14644-3:2024 Yeni Standartı: Test Yöntemlerinde Değişiklikler',
    excerpt: 'ISO 14644-3 standardının yeni versiyonunda yapılan değişiklikler ve test yöntemlerindeki yenilikler.',
    author: 'Eng. Ayşe Demir',
    authorRole: 'Validasyon Uzmanı',
    publishDate: '2024-01-10',
    readTime: '6 dakika',
    category: 'Standartlar',
    tags: ['ISO 14644', 'Test', 'Validasyon']
  },
  {
    id: 'enerji-verimli-hvac-sistemleri',
    title: 'Enerji Verimli HVAC Sistemleri: Temiz Odalarda Sürdürülebilirlik',
    excerpt: 'Temiz oda HVAC sistemlerinde enerji verimliliği sağlamanın yolları ve sürdürülebilir teknolojiler.',
    author: 'Eng. Can Yılmaz',
    authorRole: 'HVAC Uzmanı',
    publishDate: '2024-01-05',
    readTime: '5 dakika',
    category: 'Teknoloji',
    tags: ['HVAC', 'Enerji', 'Sürdürülebilirlik']
  },
  {
    id: 'elektronik-sektorunde-temiz-oda',
    title: 'Elektronik Sektöründe Temiz Oda Gereksinimleri ve ESD Koruması',
    excerpt: 'Elektronik üretiminde temiz oda standartları ve elektrostatik deşarj koruması için kritik noktalar.',
    author: 'Dr. Emre Kaya',
    authorRole: 'Elektronik Uzmanı',
    publishDate: '2023-12-28',
    readTime: '7 dakika',
    category: 'Sektörel',
    tags: ['Elektronik', 'ESD', 'Üretim']
  },
  {
    id: 'temiz-oda-maliyetleri-2024',
    title: 'Temiz Oda Kurulum Maliyetleri: 2024 Fiyat Analizi',
    excerpt: '2024 yılında temiz oda kurulum maliyetlerini etkileyen faktörler ve bütçe planlama önerileri.',
    author: 'Eng. Fatma Şen',
    authorRole: 'Proje Müdürü',
    publishDate: '2023-12-20',
    readTime: '4 dakika',
    category: 'Maliyet',
    tags: ['Maliyet', 'Bütçe', 'Planlama']
  }
];

const categories = [
  { name: 'GMP & Regulasyon', count: 12, color: 'bg-blue-500' },
  { name: 'Standartlar', count: 8, color: 'bg-purple-500' },
  { name: 'Teknoloji', count: 15, color: 'bg-green-500' },
  { name: 'Sektörel', count: 10, color: 'bg-red-500' },
  { name: 'Maliyet', count: 6, color: 'bg-orange-500' },
  { name: 'Ekipman', count: 9, color: 'bg-teal-500' }
];

const popularTags = [
  'GMP', 'ISO 14644', 'HVAC', 'Validasyon', 'Elektronik', 'Biyoteknoloji', 
  'Maliyet', 'ESD', 'Enerji', 'Sürdürülebilirlik', 'Pass Box', 'Kurulum'
];

export default function BlogPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">Düşünce Liderliği</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              NEVAYS<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary-200">
                Blog
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Sektörün en güncel gelişmeleri, derinlemesine analizler ve 20+ yıllık deneyimimizden 
              uzman perspektifleri. Temiz oda dünyasında referans kaynak.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🎆 Öne Çıkan Uzman Makalesi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sektördeki son gelişmeleri derinlemesine inceleyen özel içerikler
            </p>
          </div>

          <article className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <div className="lg:grid lg:grid-cols-2 lg:gap-0">
              {/* Image Side */}
              <div className="relative h-64 lg:h-auto bg-gradient-to-br from-primary-100 to-primary-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-primary-700 font-medium text-center px-4">
                    {featuredArticle.title} - Makale Görseli
                  </p>
                </div>
                <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold">Öne Çıkan</span>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded">
                    {featuredArticle.category}
                  </span>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    15 Ocak 2024
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    {featuredArticle.readTime}
                  </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {featuredArticle.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                      <User className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{featuredArticle.author}</p>
                      <p className="text-sm text-gray-600">{featuredArticle.authorRole}</p>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featuredArticle.id}`}
                    className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    Devamını Oku
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Recent Articles */}
            <section className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  📝 Son Uzman Makaleleri
                </h2>
                <p className="text-sm text-gray-500">
                  Güncel kalan bilgi, sürekli güncellenen perspektif
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {blogArticles.map((article, index) => (
                  <article
                    key={article.id}
                    className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    {/* Article Image */}
                    <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                      <div className="absolute inset-0 flex items-center justify-center p-4">
                        <p className="text-gray-500 font-medium text-center text-sm">
                          {article.title} - Makale Görseli
                        </p>
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="p-6">
                      <div className="flex items-center text-xs text-gray-500 mb-3 space-x-3">
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {article.category}
                        </span>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(article.publishDate).toLocaleDateString('tr-TR')}
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="h-3 w-3 mr-1" />
                          {article.readTime}
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-2">
                            <User className="h-4 w-4 text-gray-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{article.author}</p>
                          </div>
                        </div>

                        <Link
                          href={`/blog/${article.id}`}
                          className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
                        >
                          Oku →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Categories */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Kategoriler
                </h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      href={`/blog/kategori/${category.name.toLowerCase().replace(/ /g, '-')}`}
                      className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition-colors"
                    >
                      <div className="flex items-center">
                        <div className={`w-3 h-3 ${category.color} rounded-full mr-3`} />
                        <span className="text-gray-700 text-sm">{category.name}</span>
                      </div>
                      <span className="text-gray-500 text-xs">{category.count}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Popüler Etiketler
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Link
                      key={index}
                      href={`/blog/etiket/${tag.toLowerCase()}`}
                      className="bg-gray-100 hover:bg-primary-50 hover:text-primary-700 text-gray-700 px-3 py-1 rounded-full text-sm transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Thought Leadership CTA */}
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 border border-primary-200">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-primary-900 mb-2">
                    🎥 Uzman Görüşleri
                  </h3>
                  <p className="text-primary-700 text-sm mb-4 leading-relaxed">
                    20+ yıllık deneyimimizden sektörün gelişimi için özgün perspektifler
                  </p>
                  <div className="bg-primary-600/10 rounded-lg p-3 mb-4">
                    <p className="text-xs text-primary-800 font-medium">
                      "Bilgiyi paylaşmak, sektörü ilerletir"
                    </p>
                  </div>
                  <Link
                    href="/temiz-oda"
                    className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    📖 Bilgi Merkezi
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            🚀 Başarı Hikayenizi Paylaşın
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Projenizin başarı hikayesini blog makalesi olarak paylaşarak hem sektöre 
            katkıda bulunun hem de şirketinizin uzmanlığını gösterin.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-semibold mb-2">🏆 Başarı Hikayeleri</h3>
                <p className="text-sm text-gray-300">Proje sonuçlarınızı vaka analizi olarak</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🔬 Teknik Makaleler</h3>
                <p className="text-sm text-gray-300">Uzmanlık alanınızdaki görüşlerinizi</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">📈 Sektör Trendleri</h3>
                <p className="text-sm text-gray-300">Gelecek öngörülerinizi ve analizlerinizi</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              📝 Proje Hikayesi Paylaş
            </Link>
            <a 
              href="mailto:info@nevays.com"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              ✉️ İletişim Kur
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}