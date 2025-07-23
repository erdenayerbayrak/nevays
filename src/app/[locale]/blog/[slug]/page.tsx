import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, Tag } from 'lucide-react';
import MainLayout from '@/components/layout/main-layout';
import Section from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import CTABanner from '@/components/sections/cta-banner';

interface Props {
  params: { locale: string; slug: string };
}

// Mock blog data
const blogData = {
  'clean-room-standards-2024': {
    title: 'Temiz Oda Standartları 2024: Yeni ISO 14644 Güncellemeleri',
    excerpt: 'ISO 14644 standardında yapılan son güncellemeler ve bunların temiz oda tasarımına etkileri hakkında detaylı analiz.',
    author: 'Dr. Ali Nevay',
    authorBio: 'NEVAYS CEO\'su ve Temiz Oda Teknolojileri uzmanı. 30+ yıllık sektör deneyimi.',
    authorImage: '/images/team/ali-nevay.jpg',
    publishDate: '2024-01-15',
    readingTime: 8,
    category: 'Standartlar',
    tags: ['ISO 14644', 'Clean Room', 'Standards', 'Compliance'],
    image: '/images/blog/clean-room-standards-hero.jpg',
    content: `
      <p>ISO 14644 standardının 2024 yılında yayınlanan güncellemeleri, temiz oda endüstrisinde önemli değişikliklere yol açmıştır. Bu makalede, yeni gereksinimleri ve bunların pratik uygulamalarını detaylı olarak inceleyeceğiz.</p>

      <h2>Ana Değişiklikler</h2>
      <p>2024 güncellemelerinin en önemli noktaları şunlardır:</p>
      <ul>
        <li>Parçacık sayım metodolojisinde iyileştirmeler</li>
        <li>Yeni hava akış hızı gereksinimleri</li>
        <li>Gelişmiş test protokolleri</li>
        <li>Dijital monitoring sistemleri entegrasyonu</li>
      </ul>

      <h2>Praktik Uygulamalar</h2>
      <p>Bu değişikliklerin mevcut temiz oda sistemlerine etkilerini değerlendirirken şu faktörleri göz önünde bulundurmak gerekir:</p>

      <h3>1. Mevcut Sistemlerin Uyum Süreci</h3>
      <p>Halihazırda kurulu olan temiz oda sistemlerinin yeni standartlara uyumu için planlı bir geçiş süreci gereklidir. Bu süreç genellikle 12-18 ay sürmektedir.</p>

      <h3>2. Yeni Tasarımlarda Dikkate Alınacak Noktalar</h3>
      <p>Yeni projelerde ISO 14644:2024 gereksinimlerini karşılamak için tasarım aşamasından itibaren özel dikkat gösterilmelidir.</p>

      <h2>Sonuç</h2>
      <p>ISO 14644:2024 güncellemeleri, temiz oda teknolojilerinde önemli bir adımdır. NEVAYS olarak, müşterilerimizin bu geçiş sürecinde yanlarında olmaktan memnuniyet duyuyoruz.</p>
    `,
    relatedPosts: ['hvac-energy-efficiency', 'pharmaceutical-gmp-guide']
  }
};

export async function generateMetadata({ params: { slug } }: Props): Promise<Metadata> {
  const post = blogData[slug as keyof typeof blogData];
  
  if (!post) {
    return { title: 'Blog Yazısı Bulunamadı' };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params: { locale, slug } }: Props) {
  const post = blogData[slug as keyof typeof blogData];

  if (!post) {
    notFound();
  }

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-end">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="mb-8">
              <Button variant="ghostButton" size="sm" asChild>
                <Link href={`/${locale}/blog`}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Blog\'a Dön
                </Link>
              </Button>
            </div>

            <div className="max-w-4xl text-white">
              <div className="flex items-center gap-4 mb-4 text-sm">
                <span className="px-3 py-1 bg-brand-primary rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(post.publishDate).toLocaleDateString('tr-TR')}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readingTime} dk okuma
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-heading mb-4 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-lg text-white/90 max-w-3xl leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Author Info */}
          <div className="flex items-center mb-8 p-6 bg-gray-50 rounded-lg">
            <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
              <Image
                src={post.authorImage}
                alt={post.author}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <User className="h-4 w-4 mr-2 text-gray-500" />
                <span className="font-semibold text-gray-900">{post.author}</span>
              </div>
              <p className="text-gray-600 text-sm">{post.authorBio}</p>
            </div>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Paylaş
            </Button>
          </div>

          {/* Article Body */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center mb-4">
              <Tag className="h-5 w-5 text-gray-500 mr-2" />
              <span className="font-medium text-gray-700">Etiketler:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-sm rounded-full hover:bg-brand-primary hover:text-white transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Related Posts */}
      <Section background="light">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-display font-heading text-gray-900 mb-8 text-center">
            İlgili Makaleler
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {post.relatedPosts.map((relatedSlug, index) => (
              <Link
                key={index}
                href={`/${locale}/blog/${relatedSlug}`}
                className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={`/images/blog/${relatedSlug}.jpg`}
                    alt="Related Post"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-display font-heading text-lg text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">
                    İlgili Makale Başlığı
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Makale açıklaması ve özet bilgiler...
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <CTABanner
        title="Uzman Görüşlerimizi Kaçırmayın"
        description="Blog yazılarımızı takip edin ve sektördeki en son gelişmelerden haberdar olun."
        buttonText="Blog\'a Abone Ol"
        buttonAction="contact"
      />
    </MainLayout>
  );
}