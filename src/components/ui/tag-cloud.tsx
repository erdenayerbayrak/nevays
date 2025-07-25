'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, BookOpen, Award, Settings, Microscope, Wind, Shield, FileText } from 'lucide-react';

interface TagData {
  text: string;
  weight: number;
  category: 'basic' | 'technical' | 'standards' | 'operation';
  icon?: React.ReactNode;
  description: string;
  articles: number;
}

const tagsData: TagData[] = [
  // Temel Bilgiler (Basic)
  { text: 'Temiz Oda Nedir', weight: 10, category: 'basic', icon: <BookOpen className="w-4 h-4" />, description: 'Temiz oda teknolojilerinin temel prensipleri', articles: 12 },
  { text: 'Clean Room', weight: 9, category: 'basic', description: 'Kontrollü ortam teknolojileri', articles: 8 },
  { text: 'Hava Filtrasyonu', weight: 8, category: 'technical', icon: <Wind className="w-4 h-4" />, description: 'HEPA ve ULPA filtreleme sistemleri', articles: 15 },
  { text: 'Sterilizasyon', weight: 7, category: 'operation', description: 'Sterilizasyon yöntemleri ve uygulamaları', articles: 10 },
  
  // Standartlar (Standards)
  { text: 'ISO 14644', weight: 9, category: 'standards', icon: <Award className="w-4 h-4" />, description: 'Temiz oda sınıflandırma standardı', articles: 18 },
  { text: 'GMP', weight: 8, category: 'standards', icon: <Shield className="w-4 h-4" />, description: 'İyi Üretim Uygulamaları rehberi', articles: 14 },
  { text: 'FDA', weight: 6, category: 'standards', description: 'Amerika Gıda ve İlaç Dairesi düzenlemeleri', articles: 9 },
  { text: 'EU GMP', weight: 7, category: 'standards', description: 'Avrupa İyi Üretim Uygulamaları', articles: 11 },
  
  // Teknik (Technical)
  { text: 'HVAC', weight: 8, category: 'technical', icon: <Settings className="w-4 h-4" />, description: 'Isıtma, havalandırma ve klima sistemleri', articles: 16 },
  { text: 'Laboratuvar', weight: 7, category: 'technical', icon: <Microscope className="w-4 h-4" />, description: 'Laboratuvar tasarımı ve kurulumu', articles: 13 },
  { text: 'Basınç Kontrolü', weight: 6, category: 'technical', description: 'Temiz oda basınç differansiyeli', articles: 8 },
  { text: 'Parçacık Sayımı', weight: 5, category: 'technical', description: 'Hava kalitesi ölçümü', articles: 7 },
  { text: 'Validasyon', weight: 7, category: 'standards', description: 'IQ/OQ/PQ validasyon süreçleri', articles: 12 },
  
  // Operasyon (Operation)
  { text: 'Bakım Kalibrasyon', weight: 6, category: 'operation', description: 'Sistem bakımı ve kalibrasyon', articles: 9 },
  { text: 'Monitoring', weight: 5, category: 'operation', description: 'Sürekli izleme sistemleri', articles: 6 },
  { text: 'Giyinme Odasıı', weight: 4, category: 'operation', description: 'Personel giriş prosedürleri', articles: 5 },
  { text: 'Temizlik Protokolü', weight: 5, category: 'operation', description: 'Temiz oda temizlik prosedürleri', articles: 8 },
  
  // Sektörel (Industry Specific)
  { text: 'Pharmaceutical', weight: 8, category: 'basic', description: 'İlaç endüstrisi uygulamaları', articles: 20 },
  { text: 'Semiconductor', weight: 6, category: 'technical', description: 'Yarı iletken üretimi', articles: 10 },
  { text: 'Biyoteknoloji', weight: 5, category: 'basic', description: 'Biyolojik ürün üretimi', articles: 7 },
  { text: 'Medikal Cihaz', weight: 6, category: 'standards', description: 'Tıbbi cihaz üretimi', articles: 11 },
];

const categoryColors = {
  basic: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200', hover: 'hover:bg-blue-200' },
  technical: { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-200', hover: 'hover:bg-green-200' },
  standards: { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200', hover: 'hover:bg-purple-200' },
  operation: { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-200', hover: 'hover:bg-orange-200' }
};

const categoryIcons = {
  basic: <BookOpen className="w-4 h-4" />,
  technical: <Settings className="w-4 h-4" />,
  standards: <Award className="w-4 h-4" />,
  operation: <FileText className="w-4 h-4" />
};

function TagCloudItem({ tag, isSelected, onClick }: { 
  tag: TagData; 
  isSelected: boolean; 
  onClick: () => void; 
}) {
  const colors = categoryColors[tag.category];
  const fontSize = Math.max(12, Math.min(28, 12 + tag.weight * 1.6));
  
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center m-2 px-4 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer
        border-2 transform hover:scale-110 hover:-translate-y-1
        ${isSelected 
          ? `${colors.bg} ${colors.text} ${colors.border} scale-110 shadow-lg` 
          : `bg-white ${colors.text} ${colors.border} hover:${colors.bg} shadow-sm hover:shadow-md`
        }
      `}
      style={{ fontSize: `${fontSize}px` }}
    >
      {tag.icon && (
        <span className="mr-2 flex-shrink-0">
          {tag.icon}
        </span>
      )}
      <span>{tag.text}</span>
      <span className="ml-2 text-xs opacity-70">
        {tag.articles}
      </span>
    </button>
  );
}

function TagDetail({ tag }: { tag: TagData }) {
  const colors = categoryColors[tag.category];
  
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-100">
      <div className="flex items-center mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${colors.bg}`}>
          {tag.icon || categoryIcons[tag.category]}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-primary-900 mb-1">{tag.text}</h3>
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${colors.bg} ${colors.text}`}>
            {tag.category === 'basic' && 'Temel Bilgiler'}
            {tag.category === 'technical' && 'Teknik'}
            {tag.category === 'standards' && 'Standartlar'}
            {tag.category === 'operation' && 'Operasyon'}
          </div>
        </div>
      </div>
      
      <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
        {tag.description}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600">{tag.articles}</div>
            <div className="text-sm text-neutral-500">Makale</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600">{tag.weight}</div>
            <div className="text-sm text-neutral-500">Popülerlik</div>
          </div>
        </div>
        
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
          Makaleleri İncele
        </button>
      </div>
    </div>
  );
}

export default function TagCloud() {
  const [selectedTag, setSelectedTag] = useState<TagData | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const filteredTags = tagsData.filter(tag => {
    const matchesSearch = tag.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tag.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tag.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    if (filteredTags.length > 0 && !selectedTag) {
      setSelectedTag(filteredTags[0]);
    }
  }, [filteredTags, selectedTag]);

  const categories = [
    { key: 'all', label: 'Tümü', count: tagsData.length },
    { key: 'basic', label: 'Temel Bilgiler', count: tagsData.filter(t => t.category === 'basic').length },
    { key: 'technical', label: 'Teknik', count: tagsData.filter(t => t.category === 'technical').length },
    { key: 'standards', label: 'Standartlar', count: tagsData.filter(t => t.category === 'standards').length },
    { key: 'operation', label: 'Operasyon', count: tagsData.filter(t => t.category === 'operation').length }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">
            Bilgi Merkezi
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
            Temiz oda teknolojileri hakkında kapsamlı bilgi kaynağımızdan faydalanın
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Aradığınız konuyu yazın..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border-2 border-neutral-200 rounded-2xl focus:border-primary-500 focus:outline-none bg-white shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="text-center mb-12">
          <div className="inline-flex bg-white rounded-2xl p-2 shadow-lg border border-neutral-100">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`
                  flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300
                  ${selectedCategory === category.key
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'text-neutral-600 hover:text-primary-600 hover:bg-primary-50'
                  }
                `}
              >
                <span className="mr-2">
                  {category.key !== 'all' && categoryIcons[category.key as keyof typeof categoryIcons]}
                </span>
                {category.label}
                <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                  selectedCategory === category.key 
                    ? 'bg-white/20 text-white' 
                    : 'bg-neutral-100 text-neutral-600'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Tag Cloud */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-neutral-100">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-primary-900 mb-2">Popüler Konular</h3>
            <p className="text-neutral-600">Konulara tıklayarak detaylı bilgilere ulaşabilirsiniz</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center min-h-[300px]">
            {filteredTags.length > 0 ? (
              filteredTags.map((tag, index) => (
                <TagCloudItem
                  key={tag.text}
                  tag={tag}
                  isSelected={selectedTag?.text === tag.text}
                  onClick={() => setSelectedTag(tag)}
                />
              ))
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-neutral-400" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-700 mb-2">Sonuç bulunamadı</h3>
                <p className="text-neutral-500">Farklı bir arama terimi deneyin</p>
              </div>
            )}
          </div>
        </div>

        {/* Selected Tag Detail */}
        {selectedTag && (
          <div className="animate-fade-in-up">
            <TagDetail tag={selectedTag} />
          </div>
        )}

        {/* Featured Articles Preview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Temiz Oda Tasarımı', 'GMP Validasyonu', 'HVAC Sistemleri'].map((title, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                  <FileText className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-900">{title}</h4>
                  <p className="text-sm text-neutral-500">5 dk okuma</p>
                </div>
              </div>
              <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                {title} hakkında detaylı bilgi ve uygulama örnekleri...
              </p>
              <button className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center group">
                Devamını Oku
                <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}