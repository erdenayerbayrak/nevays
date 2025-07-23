'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { PenTool } from 'lucide-react';
import BlogCard from '@/components/ui/blog-card';
import Section from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readingTime: number;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 'clean-room-standards-2024',
    title: 'Temiz Oda Standartları 2024: Yeni ISO 14644 Güncellemeleri',
    excerpt: 'ISO 14644 standardında yapılan son güncellemeler ve bunların temiz oda tasarımına etkileri hakkında detaylı analiz.',
    content: 'Blog içeriği...',
    author: 'Dr. Ali Nevay',
    publishDate: '2024-01-15',
    readingTime: 8,
    category: 'Standartlar',
    tags: ['ISO 14644', 'Clean Room', 'Standards', 'Compliance'],
    image: '/images/blog/clean-room-standards.jpg',
    featured: true
  },
  {
    id: 'hvac-energy-efficiency',
    title: 'HVAC Sistemlerinde Enerji Verimliliği: Pratik Çözümler',
    excerpt: 'Enerji maliyetlerini düşürürken performansı artıran HVAC optimizasyon teknikleri ve gerçek dünya örnekleri.',
    content: 'Blog içeriği...',
    author: 'Mehmet Kaya',
    publishDate: '2024-01-10',
    readingTime: 12,
    category: 'HVAC',
    tags: ['Energy Efficiency', 'HVAC', 'Optimization', 'Cost Saving'],
    image: '/images/blog/hvac-efficiency.jpg',
    featured: true
  },
  {
    id: 'pharmaceutical-gmp-guide',
    title: 'İlaç Sektöründe GMP Uygunluğu: Kapsamlı Rehber',
    excerpt: 'GMP standartlarına uygun temiz oda tasarımı ve validasyon süreçleri için adım adım rehber.',
    content: 'Blog içeriği...',
    author: 'Dr. Zehra Aksoy',
    publishDate: '2024-01-05',
    readingTime: 15,
    category: 'GMP',
    tags: ['GMP', 'Pharmaceutical', 'Validation', 'Compliance'],
    image: '/images/blog/gmp-guide.jpg',
    featured: false
  },
  {
    id: 'hospital-hvac-design',
    title: 'Hastane HVAC Tasarımında Kritik Noktalar',
    excerpt: 'Hastane ortamlarında hava kalitesi ve enfeksiyon kontrolü için özel tasarım prensipleri.',
    content: 'Blog içeriği...',
    author: 'Fatih Özkan',
    publishDate: '2024-01-02',
    readingTime: 10,
    category: 'Healthcare',
    tags: ['Hospital', 'HVAC', 'Healthcare', 'Design'],
    image: '/images/blog/hospital-hvac.jpg',
    featured: false
  },
  {
    id: 'iot-clean-room-monitoring',
    title: 'IoT ile Temiz Oda Monitoring: Geleceğin Teknolojisi',
    excerpt: 'Akıllı sensörler ve IoT teknolojileri ile temiz oda parametrelerinin gerçek zamanlı izlenmesi.',
    content: 'Blog içeriği...',
    author: 'Burak Yılmaz',
    publishDate: '2023-12-28',
    readingTime: 7,
    category: 'Technology',
    tags: ['IoT', 'Monitoring', 'Smart Systems', 'Innovation'],
    image: '/images/blog/iot-monitoring.jpg',
    featured: false
  },
  {
    id: 'sustainability-clean-tech',
    title: 'Sürdürülebilir Temiz Oda Teknolojileri',
    excerpt: 'Çevre dostu malzemeler ve enerji verimli sistemler ile sürdürülebilir temiz oda çözümleri.',
    content: 'Blog içeriği...',
    author: 'Ayşe Demir',
    publishDate: '2023-12-25',
    readingTime: 9,
    category: 'Sustainability',
    tags: ['Sustainability', 'Green Technology', 'Environment', 'Efficiency'],
    image: '/images/blog/sustainability.jpg',
    featured: false
  }
];

const categories = [
  'Tümü',
  'Standartlar',
  'HVAC',
  'GMP',
  'Healthcare',
  'Technology',
  'Sustainability'
];

export default function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [visiblePosts, setVisiblePosts] = useState(6);
  const locale = useLocale();

  const filteredPosts = blogPosts.filter(post => 
    selectedCategory === 'Tümü' || post.category === selectedCategory
  );

  const displayedPosts = filteredPosts.slice(0, visiblePosts);
  const hasMore = visiblePosts < filteredPosts.length;

  const loadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };

  return (
    <Section background="light">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-heading text-gray-900 mb-4">
          Son Makaleler
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mx-auto mb-6" />
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Sektördeki son gelişmeler ve uzman görüşlerini keşfedin
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'primary' : 'outline'}
            size="sm"
            onClick={() => {
              setSelectedCategory(category);
              setVisiblePosts(6);
            }}
            className={cn(
              'transition-all duration-200',
              selectedCategory === category
                ? 'shadow-md'
                : 'hover:border-brand-primary hover:text-brand-primary'
            )}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Featured Posts */}
      {selectedCategory === 'Tümü' && (
        <div className="mb-16">
          <h3 className="text-2xl font-display font-heading text-gray-900 mb-8">
            Öne Çıkan Makaleler
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                href={`/${locale}/blog/${post.id}`}
                featured
              />
            ))}
          </div>
        </div>
      )}

      {/* Regular Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedPosts
          .filter(post => selectedCategory === 'Tümü' || !post.featured)
          .map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              href={`/${locale}/blog/${post.id}`}
            />
          ))}
      </div>

      {/* Load More */}
      {hasMore && (
        <div className="text-center mt-12">
          <Button
            variant="outline"
            onClick={loadMore}
            className="min-w-[200px]"
          >
            Daha Fazla Makale Yükle
          </Button>
        </div>
      )}

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <PenTool className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Makale bulunamadı</h3>
          <p className="text-gray-600 mb-4">Seçilen kategoride henüz makale bulunmuyor.</p>
          <Button
            variant="outline"
            onClick={() => setSelectedCategory('Tümü')}
          >
            Tüm Makaleleri Gör
          </Button>
        </div>
      )}
    </Section>
  );
}