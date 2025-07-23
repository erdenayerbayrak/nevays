'use client';

import { useState, useMemo } from 'react';
import { useLocale } from 'next-intl';
import Section from '@/components/ui/section';
import ProjectCard from '@/components/ui/project-card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
    image: '/images/projects/pfizer-istanbul.jpg',
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
    image: '/images/projects/hospital-ankara.jpg',
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
    image: '/images/projects/zoetis-belgium.jpg',
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
    image: '/images/projects/electronics-germany.jpg',
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
    image: '/images/projects/hospital-dubai.jpg',
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
    image: '/images/projects/cosmetics-poland.jpg',
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
  { key: 'all', label: 'Tümü', count: projects.length },
  { key: 'pharmaceutical', label: 'İlaç', count: projects.filter(p => p.industry === 'pharmaceutical').length },
  { key: 'hospital', label: 'Hastane', count: projects.filter(p => p.industry === 'hospital').length },
  { key: 'industrial', label: 'Endüstriyel', count: projects.filter(p => p.industry === 'industrial').length },
  { key: 'cleanroom', label: 'Temiz Oda', count: projects.filter(p => p.industry === 'cleanroom').length },
];

const countries = [
  { key: 'all', label: 'Tüm Ülkeler' },
  { key: 'turkey', label: 'Türkiye' },
  { key: 'germany', label: 'Almanya' },
  { key: 'belgium', label: 'Belçika' },
  { key: 'uae', label: 'BAE' },
  { key: 'poland', label: 'Polonya' },
];

const years = [
  { key: 'all', label: 'Tüm Yıllar' },
  { key: '2023', label: '2023' },
  { key: '2022', label: '2022' },
  { key: '2021', label: '2021' },
  { key: '2020', label: '2020' },
];

export default function FilterableProjects() {
  const [activeIndustry, setActiveIndustry] = useState('all');
  const [activeCountry, setActiveCountry] = useState('all');
  const [activeYear, setActiveYear] = useState('all');
  const locale = useLocale();

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const industryMatch = activeIndustry === 'all' || project.industry === activeIndustry;
      const countryMatch = activeCountry === 'all' || project.country === activeCountry;
      const yearMatch = activeYear === 'all' || project.year.toString() === activeYear;
      
      return industryMatch && countryMatch && yearMatch;
    });
  }, [activeIndustry, activeCountry, activeYear]);

  return (
    <Section background="light">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-heading text-gray-900 mb-4">
          Proje Portföyümüz
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Farklı sektörlerden başarılı projelerimizi filtreleyin ve inceleyin
        </p>
      </div>

      {/* Filters */}
      <div className="space-y-6 mb-12">
        {/* Industry Filter */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Sektör</h3>
          <div className="flex flex-wrap gap-2">
            {industries.map((industry) => (
              <Button
                key={industry.key}
                variant={activeIndustry === industry.key ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setActiveIndustry(industry.key)}
                className={cn(
                  'transition-all duration-200',
                  activeIndustry === industry.key
                    ? 'shadow-md'
                    : 'hover:border-brand-primary hover:text-brand-primary'
                )}
              >
                {industry.label}
                <span className="ml-2 px-1.5 py-0.5 text-xs bg-black/10 rounded-full">
                  {industry.count}
                </span>
              </Button>
            ))}
          </div>
        </div>

        {/* Country & Year Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Ülke</h3>
            <div className="flex flex-wrap gap-2">
              {countries.map((country) => (
                <Button
                  key={country.key}
                  variant={activeCountry === country.key ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setActiveCountry(country.key)}
                  className={cn(
                    'transition-all duration-200',
                    activeCountry === country.key
                      ? 'shadow-md'
                      : 'hover:border-brand-primary hover:text-brand-primary'
                  )}
                >
                  {country.label}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Yıl</h3>
            <div className="flex flex-wrap gap-2">
              {years.map((year) => (
                <Button
                  key={year.key}
                  variant={activeYear === year.key ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setActiveYear(year.key)}
                  className={cn(
                    'transition-all duration-200',
                    activeYear === year.key
                      ? 'shadow-md'
                      : 'hover:border-brand-primary hover:text-brand-primary'
                  )}
                >
                  {year.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-8">
        <p className="text-gray-600">
          <span className="font-semibold text-brand-primary">{filteredProjects.length}</span> proje bulundu
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            href={`/${locale}/projects/${project.id}`}
          />
        ))}
      </div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 bg-gray-300 rounded-sm"></div>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Proje bulunamadı</h3>
          <p className="text-gray-600 mb-4">Seçilen filtrelere uygun proje bulunmuyor.</p>
          <Button
            variant="outline"
            onClick={() => {
              setActiveIndustry('all');
              setActiveCountry('all');
              setActiveYear('all');
            }}
          >
            Filtreleri Temizle
          </Button>
        </div>
      )}
    </Section>
  );
}