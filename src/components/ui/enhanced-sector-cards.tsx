'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronRight, Award, Building, Zap, Shield, Beaker, Cpu, Heart, Factory } from 'lucide-react';
import Link from 'next/link';

interface SectorData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  backgroundImage: string;
  features: string[];
  projects: number;
  compliance: string[];
  caseStudy?: {
    title: string;
    client: string;
    result: string;
  };
}

const sectorsData: SectorData[] = [
  {
    id: 'pharmaceutical',
    title: 'İlaç Endüstrisi',
    description: 'GMP standartlarında, pharmaceutical üretim tesisleri için özelleştirilmiş temiz oda çözümleri',
    icon: <Beaker className="w-8 h-8" />,
    backgroundImage: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=1200&h=800&fit=crop',
    features: ['GMP Compliance', 'Sterile Manufacturing', 'Controlled Environment', 'Validation Services'],
    projects: 85,
    compliance: ['FDA', 'EMA', 'GMP', 'ISO 14644'],
    caseStudy: {
      title: 'Büyük Ölçekli İlaç Üretim Tesisi',
      client: 'Global Pharmaceutical Company',
      result: '50,000 m² temiz oda alanı, Class 100-10,000 seviyelerinde'
    }
  },
  {
    id: 'electronics',
    title: 'Elektronik Sektörü',
    description: 'Yarı iletken ve elektronik üretimi için ultra temiz mikrokirlilik kontrollü ortamlar',
    icon: <Cpu className="w-8 h-8" />,
    backgroundImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=800&fit=crop',
    features: ['Ultra-Clean Environment', 'ESD Protection', 'Contamination Control', 'Precision Climate'],
    projects: 62,
    compliance: ['ISO 14644', 'IES Standards', 'SEMI Standards'],
    caseStudy: {
      title: 'Semiconductor Fab Facility',
      client: 'Leading Chip Manufacturer',
      result: 'Class 1-10 ultra-clean production environment'
    }
  },
  {
    id: 'medical',
    title: 'Medikal Cihazlar',
    description: 'Tıbbi cihaz üretimi ve sterilizasyonu için özel tasarım temiz oda sistemleri',
    icon: <Heart className="w-8 h-8" />,
    backgroundImage: 'https://images.unsplash.com/photo-1559757175-0b9b4d19d4b4?w=1200&h=800&fit=crop',
    features: ['Sterile Processing', 'Medical Device Manufacturing', 'Biocompatibility', 'Quality Assurance'],
    projects: 43,
    compliance: ['FDA 21 CFR Part 820', 'ISO 13485', 'MDR', 'ISO 14644'],
    caseStudy: {
      title: 'Kalp Pili Üretim Tesisi',
      client: 'Medical Device Leader',
      result: 'Class 10,000 steril üretim ortamı kurulumu'
    }
  },
  {
    id: 'food',
    title: 'Gıda & İçecek',
    description: 'Hijyenik gıda üretimi için HACCP uyumlu temiz üretim ortamları',
    icon: <Shield className="w-8 h-8" />,
    backgroundImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop',
    features: ['HACCP Compliance', 'Hygienic Design', 'Food Safety', 'Clean Production'],
    projects: 38,
    compliance: ['HACCP', 'BRC', 'SQF', 'ISO 22000'],
    caseStudy: {
      title: 'Bebek Maması Üretim Tesisi',
      client: 'Global Food Company',
      result: 'Hijyenik üretim ortamı ve otomatik CIP sistemleri'
    }
  },
  {
    id: 'cosmetics',
    title: 'Kozmetik',
    description: 'Kozmetik ürün üretimi için hijyenik ve kontrollü üretim ortamları',
    icon: <Zap className="w-8 h-8" />,
    backgroundImage: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=800&fit=crop',
    features: ['Cosmetic Manufacturing', 'Contamination Prevention', 'Quality Control', 'Packaging Environment'],
    projects: 29,
    compliance: ['FDA Cosmetics', 'EU Cosmetics Regulation', 'ISO 22716'],
    caseStudy: {
      title: 'Lüks Kozmetik Üretim Hattı',
      client: 'Premium Cosmetics Brand',  
      result: 'Kontaminasyon-free üretim ve ambalajlama sistemi'
    }
  },
  {
    id: 'biotechnology',
    title: 'Biyoteknoloji',
    description: 'Biyolojik ürün üretimi ve araştırması için özel tasarım laboratuvar ortamları',
    icon: <Factory className="w-8 h-8" />,
    backgroundImage: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&h=800&fit=crop',
    features: ['Biosafety Containment', 'Cell Culture Environment', 'Biopharmaceutical Production', 'Research Labs'],
    projects: 21,
    compliance: ['cGMP', 'FDA Biologics', 'EMA Guidelines', 'Biosafety Levels'],
    caseStudy: {
      title: 'Gen Terapisi Araştırma Merkezi',
      client: 'Biotech Research Institute',
      result: 'BSL-2/3 seviyesi güvenli laboratuvar ortamları'
    }
  }
];

// Full-width Case Study highlight component
function FeaturedCaseStudy() {
  const featured = sectorsData[0]; // Pharmaceutical as featured
  
  return (
    <div className="mb-16 bg-gradient-to-r from-primary-900 to-primary-800 rounded-2xl overflow-hidden shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Image Side */}
        <div className="relative h-64 lg:h-auto">
          <Image
            src={featured.backgroundImage}
            alt={featured.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-transparent" />
        </div>
        
        {/* Content Side */}
        <div className="p-8 lg:p-12 text-white">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
              {featured.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold">Başarı Hikayesi</h3>
              <p className="text-primary-200">{featured.title}</p>
            </div>
          </div>
          
          <h4 className="text-xl font-semibold mb-3">{featured.caseStudy?.title}</h4>
          <p className="text-primary-100 mb-4">{featured.caseStudy?.client}</p>
          <p className="text-lg leading-relaxed mb-6">{featured.caseStudy?.result}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex space-x-6">
              <div>
                <div className="text-2xl font-bold text-accent-400">{featured.projects}+</div>
                <div className="text-sm text-primary-200">Tamamlanan Proje</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent-400">{featured.compliance.length}</div>
                <div className="text-sm text-primary-200">Compliance Standard</div>
              </div>
            </div>
            
            <button className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
              Detayları İncele
              <ChevronRight className="w-5 h-5 ml-2 inline-block" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EnhancedSectorCards() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">
            Sektörel Çözümlerimiz
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Her sektörün kendine özgü gereksinimlerine uygun özelleştirilmiş temiz oda çözümleri
          </p>
        </div>

        {/* Featured Case Study */}
        <FeaturedCaseStudy />

        {/* Sector Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectorsData.map((sector, index) => (
            <div
              key={sector.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setHoveredCard(sector.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Image with Overlay */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={sector.backgroundImage}
                  alt={sector.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Dynamic Overlay */}
                <div 
                  className={`absolute inset-0 transition-all duration-500 ${
                    hoveredCard === sector.id
                      ? 'bg-gradient-to-br from-primary-600/70 via-primary-800/60 to-primary-900/80'
                      : 'bg-gradient-to-br from-primary-900/40 via-primary-800/30 to-transparent'
                  }`}
                />

                {/* Sector-specific pattern overlay */}
                <div 
                  className={`absolute inset-0 opacity-20 transition-opacity duration-500 ${
                    hoveredCard === sector.id ? 'opacity-40' : 'opacity-20'
                  }`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }}
                />

                {/* Icon */}
                <div className="absolute top-4 left-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                    hoveredCard === sector.id
                      ? 'bg-white/90 text-primary-600 scale-110'
                      : 'bg-white/20 text-white'
                  }`}>
                    {sector.icon}
                  </div>
                </div>

                {/* Project Count Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {sector.projects}+ Proje
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {sector.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  {sector.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {sector.features.slice(0, 2).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-lg font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                    {sector.features.length > 2 && (
                      <span className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-lg">
                        +{sector.features.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* Compliance Badges */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {sector.compliance.slice(0, 3).map((comp, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-accent-50 text-accent-700 text-xs rounded-lg font-medium border border-accent-200"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm transition-colors duration-300 flex items-center group">
                    Detayları İncele
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <div className="text-right">
                    <div className="text-xs text-neutral-500">Toplam Proje</div>
                    <div className="text-lg font-bold text-primary-600">{sector.projects}+</div>
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 border-2 border-transparent rounded-2xl transition-all duration-300 pointer-events-none ${
                hoveredCard === sector.id ? 'border-primary-400 shadow-lg' : ''
              }`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Size Özel Çözüm Geliştirme
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Sektörünüze özgü ihtiyaçlarınızı analiz ederek, en uygun temiz oda çözümünü birlikte tasarlayalım
            </p>
            <button className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
              Ücretsiz Konsültasyon
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}