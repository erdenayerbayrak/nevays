import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import MainLayout from '@/components/layout/main-layout';
import ReferencesMarquee from '@/components/sections/references-marquee';
import { MapPin, Calendar, Award, Users, Building2, FlaskConical } from 'lucide-react';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'references' });
  
  const title = locale === 'tr' 
    ? 'Referanslarımız - Başarılı Temiz Oda Projeleri | NEVAYS'
    : 'Our References - Successful Cleanroom Projects | NEVAYS';
    
  const description = locale === 'tr'
    ? 'ASELSAN, VALEO, ATABAY İLAÇ ve daha fazlası. 150+ başarılı temiz oda kurulum projemizi keşfedin.'
    : 'ASELSAN, VALEO, ATABAY PHARMA and more. Discover our 150+ successful cleanroom installation projects.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://nevays.com/${locale}/referanslar`,
      siteName: 'NEVAYS',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      type: 'website',
    },
  };
}

const featuredProjects = [
  {
    id: 'atabay-pharmaceutical',
    title: 'ATABAY İLAÇ - GMP Üretim Tesisi',
    category: 'İlaç Sanayii',
    location: 'İstanbul, Türkiye',
    year: '2023',
    area: '1,200 m²',
    description: 'EU GMP standartlarında Class C ve Class D temiz oda kompleksi. Oral katı dozaj formu üretim alanları için kapsamlı HVAC ve temiz oda kurulumu.',
    image: '/images/projects/atabay-cleanroom.jpg',
    features: [
      'EU GMP Class C/D temiz odalar',
      'HVAC sistemi ve HEPA filtrasyon',
      'Basınç kademelendirme sistemi',
      'Validasyon ve dokümantasyon'
    ],
    tags: ['GMP', 'İlaç Üretimi', 'Class C/D', 'HVAC'],
    sector: 'pharmaceutical'
  },
  {
    id: 'aselsan-electronics',
    title: 'ASELSAN - Elektronik Üretim Merkezi',
    category: 'Savunma Sanayi',
    location: 'Ankara, Türkiye',
    year: '2023',
    area: '800 m²',
    description: 'Hassas elektronik komponent üretimi için ESD korumalı temiz oda ve test laboratuvarı sistemleri. Class 10,000 temizlik seviyesi.',
    image: '/images/projects/aselsan-cleanroom.jpg',
    features: [
      'ESD korumalı temiz oda',
      'Class 10,000 (ISO 7) seviyesi',
      'Özel havalandırma sistemi',
      'Test laboratuvarı kurulumu'
    ],
    tags: ['ESD Koruma', 'Elektronik', 'Class 10K', 'Test Lab'],
    sector: 'electronics'
  },
  {
    id: 'valeo-automotive',
    title: 'VALEO - Otomotiv AR-GE Merkezi',
    category: 'Otomotiv',
    location: 'Bursa, Türkiye',
    year: '2022',
    area: '600 m²',
    description: 'Otomotiv parçaları AR-GE çalışmaları için özel tasarım laboratuvar ve temiz oda sistemleri. İklim test odaları dahil.',
    image: '/images/projects/valeo-cleanroom.jpg',
    features: [
      'AR-GE laboratuvarları',
      'İklim test odaları',
      'Kalite kontrol alanları',
      'Özel HVAC sistemleri'
    ],
    tags: ['AR-GE', 'Otomotiv', 'Test Odaları', 'Kalite Kontrol'],
    sector: 'automotive'
  },
  {
    id: 'world-medicine',
    title: 'WORLD MEDİCİNE - Steril Üretim',
    category: 'İlaç Sanayii',
    location: 'İstanbul, Türkiye',
    year: '2022',
    area: '450 m²',
    description: 'Steril ilaç üretimi için GMP Grade A/B temiz oda sistemleri. Laminer hava akışlı kabinler ve isolatör sistemleri.',
    image: '/images/projects/world-medicine-cleanroom.jpg',
    features: [
      'GMP Grade A/B sistemler',
      'Steril üretim alanları',
      'Laminer akış kabinleri',
      'İzolatör entegrasyonu'
    ],
    tags: ['GMP Grade A/B', 'Steril Üretim', 'LAF', 'İzolatör'],
    sector: 'pharmaceutical'
  },
  {
    id: 'turk-ilac',
    title: 'TÜRK İLAÇ - Tablet Üretim Hattı',
    category: 'İlaç Sanayii',
    location: 'İstanbul, Türkiye',
    year: '2021',
    area: '300 m²',
    description: 'Tablet üretim hattı için GMP uyumlu temiz oda ve destekleyici alanların kurulumu. Toz kontrolü ve özel havalandırma.',
    image: '/images/projects/turk-ilac-cleanroom.jpg',
    features: [
      'Tablet üretim alanları',
      'Toz kontrol sistemleri',
      'GMP uyumlu tasarım',
      'Özel havalandırma'
    ],
    tags: ['Tablet Üretimi', 'Toz Kontrol', 'GMP', 'İlaç'],
    sector: 'pharmaceutical'
  },
  {
    id: 'smart-solar',
    title: 'SMART SOLAR - PV Panel Test Lab',
    category: 'Enerji',
    location: 'Ankara, Türkiye',
    year: '2021',
    area: '200 m²',
    description: 'Fotovoltaik panel test ve kalite kontrol laboratuvarı. Kontrollü ortam koşulları ve özel test ekipmanları.',
    image: '/images/projects/smart-solar-lab.jpg',
    features: [
      'PV panel test alanları',
      'Kontrollü ortam koşulları',
      'Kalite kontrol lab',
      'Özel test ekipmanları'
    ],
    tags: ['PV Test', 'Kalite Kontrol', 'Enerji', 'Laboratuvar'],
    sector: 'energy'
  }
];

const sectors = [
  { name: 'İlaç Sanayii', icon: FlaskConical, count: 45, color: 'bg-blue-500' },
  { name: 'Elektronik', icon: Building2, count: 32, color: 'bg-purple-500' },
  { name: 'Medikal Cihaz', icon: Award, count: 28, color: 'bg-green-500' },
  { name: 'Otomotiv', icon: Building2, count: 22, color: 'bg-red-500' },
  { name: 'Gıda', icon: FlaskConical, count: 18, color: 'bg-orange-500' },
  { name: 'Ar-Ge', icon: Award, count: 15, color: 'bg-teal-500' }
];

export default function ReferencesPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Referanslarımız
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              150+ başarılı proje ile temiz oda teknolojilerinde güvenilir ortağınız
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">150+</div>
              <div className="text-gray-600">Tamamlanan Proje</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Referans Firma</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">20+</div>
              <div className="text-gray-600">Yıl Deneyim</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">Müşteri Memnuniyeti</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reference Logos Marquee */}
      <ReferencesMarquee />

      {/* Sectors Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sektörel Deneyimimiz
            </h2>
            <p className="text-xl text-gray-600">
              Farklı sektörlerde gerçekleştirdiğimiz başarılı projeler
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${sector.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-gray-400">{sector.count}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{sector.name}</h3>
                  <p className="text-gray-600 text-sm">
                    {sector.count} başarılı proje tamamlandı
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Öne Çıkan Projelerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gerçekleştirdiğimiz başarılı projelerden örnekler ve detayları
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {featuredProjects.map((project, index) => (
              <article
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-500 font-medium">{project.title} - Proje Görseli</p>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold">{project.category}</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  {/* Project Info */}
                  <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.year}
                    </div>
                    <div className="flex items-center">
                      <Building2 className="h-4 w-4 mr-1" />
                      {project.area}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Proje Özelikleri:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border hover:bg-primary-50 hover:text-primary-700 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Müşteri Yorumları
            </h2>
            <p className="text-xl text-gray-600">
              Projelerimiz hakkında müşterilerimizin görüşleri
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-8 w-8 text-gray-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">ATABAY İLAÇ</h4>
                  <p className="text-gray-600 text-sm">Proje Müdürü</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic leading-relaxed">
                "NEVAYS ile çalışmaktan çok memnunuz. GMP gereksinimlerini mükemmel şekilde anlayıp, 
                projemizi zamanında ve bütçe dahilinde tamamladılar. Profesyonel yaklaşımları için teşekkürler."
              </blockquote>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-8 w-8 text-gray-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">ASELSAN</h4>
                  <p className="text-gray-600 text-sm">Teknik Müdür</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic leading-relaxed">
                "Elektronik üretim tesisimiz için hassas temiz oda çözümü arıyorduk. NEVAYS'ın teknik 
                uzmanlığı ve kaliteli işçiliği beklentilerimizi fazlasıyla karşıladı."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Siz de Referanslarımız Arasına Katılın
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Projeniz için ücretsiz keşif ve teknik danışmanlık hizmeti
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:02123456789"
              className="bg-white text-primary-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              📞 Hemen Arayın
            </a>
            <a 
              href="https://wa.me/905551234567"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              📱 WhatsApp Mesaj
            </a>
            <a 
              href="mailto:info@nevays.com"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              ✉️ Proje Detayları
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}