'use client';

import { useState, useMemo } from 'react';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { ChevronRight, MapPin, Calendar, Building, Award } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  year: number;
  industry: 'pharmaceutical' | 'hospital' | 'industrial' | 'cleanroom';
  country: string;
  image: string;
  description: string;
  metrics: {
    area?: string;
    capacity?: string;
    efficiency?: string;
    standard?: string;
  };
  tags: string[];
}

const projects: Project[] = [
  {
    id: 'pfizer-istanbul',
    title: 'Pfizer İlaç Üretim Tesisi',
    client: 'Pfizer',
    location: 'İstanbul, Türkiye',
    year: 2023,
    industry: 'pharmaceutical',
    country: 'turkey',
    image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&h=600&fit=crop',
    description: 'GMP Grade B temiz oda sistemi ve HVAC altyapısı',
    metrics: {
      area: '2,500 m²',
      standard: 'ISO 5 (Grade B)',
      efficiency: 'A+ Enerji Sınıfı',
      capacity: '50,000 m³/h'
    },
    tags: ['GMP', 'Clean Room', 'HVAC', 'Pharmaceutical']
  },
  {
    id: 'university-hospital-ankara',
    title: 'Üniversite Hastanesi Ameliyathaneleri',
    client: 'Ankara Üniversitesi',
    location: 'Ankara, Türkiye',
    year: 2023,
    industry: 'hospital',
    country: 'turkey',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
    description: '12 adet ameliyathane ve yoğun bakım ünitesi havalandırma sistemi',
    metrics: {
      area: '1,800 m²',
      standard: 'ISO 7',
      efficiency: 'A Enerji Sınıfı',
      capacity: '35,000 m³/h'
    },
    tags: ['Hospital', 'Operating Room', 'HVAC', 'Healthcare']
  },
  {
    id: 'zoetis-belgium',
    title: 'Zoetis Veteriner İlaç Fabrikası',
    client: 'Zoetis',
    location: 'Brussels, Belçika',
    year: 2022,
    industry: 'pharmaceutical',
    country: 'belgium',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop',
    description: 'Veteriner ilaç üretimi için temiz oda ve hava işleme sistemleri',
    metrics: {
      area: '3,200 m²',
      standard: 'ISO 6 (Grade C)',
      efficiency: 'A+ Enerji Sınıfı',
      capacity: '75,000 m³/h'
    },
    tags: ['Veterinary', 'Clean Room', 'Manufacturing', 'GMP']
  },
  {
    id: 'electronics-facility-germany',
    title: 'Elektronik Üretim Tesisi',
    client: 'TechCorp Germany',
    location: 'München, Almanya',
    year: 2022,
    industry: 'industrial',
    country: 'germany',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
    description: 'Mikroçip üretimi için ultra temiz ortam ve parçacık kontrol sistemi',
    metrics: {
      area: '4,000 m²',
      standard: 'ISO 4',
      efficiency: 'A+ Enerji Sınıfı',
      capacity: '120,000 m³/h'
    },
    tags: ['Electronics', 'Semiconductor', 'Ultra Clean', 'Manufacturing']
  },
  {
    id: 'hospital-dubai',
    title: 'Dubai Özel Hastanesi',
    client: 'Dubai Healthcare',
    location: 'Dubai, UAE',
    year: 2021,
    industry: 'hospital',
    country: 'uae',
    image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&h=600&fit=crop',
    description: 'Kapsamlı hastane HVAC sistemi ve ameliyathane temiz odaları',
    metrics: {
      area: '5,500 m²',
      standard: 'ISO 7',
      efficiency: 'A Enerji Sınıfı',
      capacity: '200,000 m³/h'
    },
    tags: ['Hospital', 'HVAC', 'Middle East', 'Healthcare']
  },
  {
    id: 'cleanroom-facility-poland',
    title: 'Kozmetik Üretim Tesisi',
    client: 'Beauty Corp',
    location: 'Varşova, Polonya',
    year: 2021,
    industry: 'cleanroom',
    country: 'poland',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop',
    description: 'Kozmetik ürün üretimi için temiz oda ve kontaminasyon kontrol sistemi',
    metrics: {
      area: '1,500 m²',
      standard: 'ISO 8',
      efficiency: 'A Enerji Sınıfı',
      capacity: '25,000 m³/h'
    },
    tags: ['Cosmetics', 'Clean Room', 'Manufacturing', 'Quality Control']
  }
];

const industries = [
  { key: 'all', label: 'Tümü', color: 'bg-neutral-100 text-neutral-700', count: projects.length },
  { key: 'pharmaceutical', label: 'İlaç', color: 'bg-blue-100 text-blue-700', count: projects.filter(p => p.industry === 'pharmaceutical').length },
  { key: 'hospital', label: 'Hastane', color: 'bg-green-100 text-green-700', count: projects.filter(p => p.industry === 'hospital').length },
  { key: 'industrial', label: 'Endüstriyel', color: 'bg-orange-100 text-orange-700', count: projects.filter(p => p.industry === 'industrial').length },
  { key: 'cleanroom', label: 'Temiz Oda', color: 'bg-purple-100 text-purple-700', count: projects.filter(p => p.industry === 'cleanroom').length },
];

const countries = [
  { key: 'all', label: 'Tüm Ülkeler' },
  { key: 'turkey', label: 'Türkiye' },
  { key: 'germany', label: 'Almanya' },
  { key: 'belgium', label: 'Belçika' },
  { key: 'uae', label: 'BAE' },
  { key: 'poland', label: 'Polonya' },
];

function ModernProjectCard({ project }: { project: Project }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover transition-all duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Loading Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 animate-pulse" />
        )}
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-60'
        }`} />
        
        {/* Year Badge */}
        <div className="absolute top-4 left-4">
          <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {project.year}
          </div>
        </div>
        
        {/* Industry Badge */}
        <div className="absolute top-4 right-4">
          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
            industries.find(i => i.key === project.industry)?.color || 'bg-neutral-100 text-neutral-700'
          }`}>
            {industries.find(i => i.key === project.industry)?.label}
          </div>
        </div>

        {/* Slide-up Project Info */}
        <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-500 ${
          isHovered ? 'translate-y-0' : 'translate-y-full'
        }`}>
          <div className="bg-gradient-to-t from-primary-900/90 to-transparent p-4 rounded-xl -m-4">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <div className="flex items-center text-primary-200 mb-2">
              <Building className="w-4 h-4 mr-2" />
              <span className="text-sm">{project.client}</span>
            </div>
            <div className="flex items-center text-primary-200 mb-3">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm">{project.location}</span>
            </div>
            <p className="text-sm text-primary-100 mb-4 line-clamp-2">
              {project.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <span className="text-primary-200">Alan: </span>
                <span className="text-white font-semibold">{project.metrics.area}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-accent-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Static Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
          {project.title}
        </h3>
        <div className="flex items-center text-neutral-600 mb-2">
          <Building className="w-4 h-4 mr-2" />
          <span className="text-sm">{project.client}</span>
        </div>
        <div className="flex items-center text-neutral-600 mb-4">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{project.location}</span>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center p-3 bg-neutral-50 rounded-lg">
            <div className="text-sm text-neutral-500">Standart</div>
            <div className="text-sm font-semibold text-primary-600">{project.metrics.standard}</div>
          </div>
          <div className="text-center p-3 bg-neutral-50 rounded-lg">
            <div className="text-sm text-neutral-500">Kapasite</div>
            <div className="text-sm font-semibold text-primary-600">{project.metrics.capacity}</div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-lg font-medium"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-lg">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ModernFilterSystem() {
  const [activeIndustry, setActiveIndustry] = useState('all');
  const [activeCountry, setActiveCountry] = useState('all');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const locale = useLocale();

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const industryMatch = activeIndustry === 'all' || project.industry === activeIndustry;
      const countryMatch = activeCountry === 'all' || project.country === activeCountry;
      return industryMatch && countryMatch;
    });
  }, [activeIndustry, activeCountry]);

  const handleFilterChange = (filterType: 'industry' | 'country', value: string) => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      if (filterType === 'industry') {
        setActiveIndustry(value);
      } else {
        setActiveCountry(value);
      }
      setIsTransitioning(false);
    }, 150);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">
            Başarılı Projelerimiz
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Dünya çapında gerçekleştirdiğimiz projelerle temiz oda teknolojilerinde öncülük ediyoruz
          </p>
        </div>

        {/* Modern Pill-Style Filters */}
        <div className="space-y-8 mb-16">
          {/* Industry Filters */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-primary-900 mb-4">Sektör</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry) => (
                <button
                  key={industry.key}
                  onClick={() => handleFilterChange('industry', industry.key)}
                  className={`
                    group relative px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105
                    ${activeIndustry === industry.key
                      ? 'bg-primary-600 text-white shadow-lg scale-105'
                      : 'bg-white text-neutral-700 border-2 border-neutral-200 hover:border-primary-400 hover:text-primary-600'
                    }
                  `}
                >
                  <span className="relative z-10 flex items-center">
                    {industry.label}
                    <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                      activeIndustry === industry.key 
                        ? 'bg-white/20 text-white' 
                        : 'bg-neutral-100 text-neutral-600'
                    }`}>
                      {industry.count}
                    </span>
                  </span>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-primary-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
                </button>
              ))}
            </div>
          </div>

          {/* Country Filters */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-primary-900 mb-4">Ülke</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {countries.map((country) => (
                <button
                  key={country.key}
                  onClick={() => handleFilterChange('country', country.key)}
                  className={`
                    px-5 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105
                    ${activeCountry === country.key
                      ? 'bg-accent-500 text-white shadow-lg scale-105'
                      : 'bg-white text-neutral-600 border border-neutral-200 hover:border-accent-400 hover:text-accent-600'
                    }
                  `}
                >
                  {country.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg border border-neutral-100">
            <Award className="w-5 h-5 text-primary-600 mr-2" />
            <span className="text-primary-900 font-semibold">
              <span className="text-2xl font-bold text-primary-600">{filteredProjects.length}</span> proje bulundu
            </span>
          </div>
        </div>

        {/* Projects Grid with Fade Transition */}
        <div className={`transition-all duration-300 ${
          isTransitioning ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ModernProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* No Results State */}
        {filteredProjects.length === 0 && !isTransitioning && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building className="w-12 h-12 text-primary-400" />
            </div>
            <h3 className="text-2xl font-bold text-primary-900 mb-3">Proje Bulunamadı</h3>
            <p className="text-neutral-600 mb-6 max-w-md mx-auto">
              Seçilen filtrelere uygun proje bulunmuyor. Lütfen farklı filtreler deneyin.
            </p>
            <button
              onClick={() => {
                setActiveIndustry('all');
                setActiveCountry('all');
              }}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Tüm Projeleri Göster
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Kendi Projenizi Mi Planlıyorsunuz?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Deneyimli ekibimizle birlikte hayalinizdeki temiz oda projesini gerçekleştirelim
            </p>
            <button className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
              Proje Danışmanlığı Alın
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}