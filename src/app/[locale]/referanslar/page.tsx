'use client';

import MainLayout from '@/components/layout/main-layout';
import { MapPin, Calendar, Award, Users, Building2, FlaskConical, Filter, CheckCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

// Referans firmaları - güncellenmiş logoları ile
const references = [
  { name: 'ASELSAN', logo: '/logos/aselsan-logo.png', sector: 'defense' },
  { name: 'ATABAY İLAÇ', logo: '/logos/atabay-logo.png', sector: 'pharmaceutical' },
  { name: 'WORLD MEDICINE', logo: '/logos/world-medicine-logo.png', sector: 'pharmaceutical' },
  { name: 'TÜRK İLAÇ SERUM SANAYİ', logo: '/logos/turk-ilac-logo.png', sector: 'pharmaceutical' },
  { name: 'VALEO', logo: '/logos/valeo-logo.png', sector: 'automotive' },
  { name: 'SMART GÜNEŞ TEKNOLOJİLERİ', logo: '/logos/smart-solar-logo.png', sector: 'energy' },
  { name: 'ARMADA FOODS', logo: '/logos/armada-foods-logo.png', sector: 'food' },
  { name: 'SİSTEMA', logo: '/logos/sistema-logo.png', sector: 'electronics' },
  { name: 'SAMSUNG', logo: '/logos/samsung-logo.png', sector: 'electronics' },
  { name: 'AYSAM', logo: '/logos/aysam-logo.png', sector: 'medical' },
  { name: 'SONİTUS', logo: '/logos/sonitus-logo.png', sector: 'medical' },
  { name: 'SONOFARMA', logo: '/logos/sonofarma-logo.png', sector: 'pharmaceutical' },
  { name: 'TAY AVIATION', logo: '/logos/tay-aviation-logo.png', sector: 'aerospace' },
  { name: 'ARİON İLAÇ', logo: '/logos/arion-logo.png', sector: 'pharmaceutical' }
];

// Sektör filtreleri
const sectorFilters = [
  { id: 'all', name: 'Tümü', count: references.length },
  { id: 'pharmaceutical', name: 'İlaç ve Sağlık', count: references.filter(r => r.sector === 'pharmaceutical').length },
  { id: 'defense', name: 'Savunma ve Havacılık', count: references.filter(r => ['defense', 'aerospace'].includes(r.sector)).length },
  { id: 'electronics', name: 'Elektronik', count: references.filter(r => r.sector === 'electronics').length },
  { id: 'automotive', name: 'Otomotiv', count: references.filter(r => r.sector === 'automotive').length },
  { id: 'others', name: 'Diğer', count: references.filter(r => ['food', 'energy', 'medical'].includes(r.sector)).length }
];

// Öne çıkan başarı hikayeleri (Case Studies)
const caseStudies = [
  {
    id: 'aselsan-case',
    company: 'ASELSAN',
    logo: '/logos/aselsan-logo.png',
    title: 'ASELSAN - Mikroelektronik Üretim Tesisi ISO 7 Temiz Oda Projesi',
    challenge: 'Yüksek hassasiyete sahip elektronik komponentlerin üretimi için statik kontrolün ve partikül seviyelerinin kritik olduğu bir alan yaratmak.',
    solution: 'ESD zemin kaplaması, HEPA filtreli tavan sistemleri ve hassas nem kontrollü HVAC ünitelerini içeren anahtar teslim bir sistem kuruldu.',
    results: ['%99.99 partikül kontrolü', 'Sıfır ESD hasarı', '2023 yılında teslim', '850 m² alan'],
    image: '/images/case-studies/aselsan-cleanroom.jpg',
    sector: 'defense'
  },
  {
    id: 'atabay-case',
    company: 'ATABAY İLAÇ',
    logo: '/logos/atabay-logo.png',
    title: 'ATABAY İLAÇ - EU GMP Standartlarında Katı Dozaj Üretim Kompleksi',
    challenge: 'EU GMP gereksinimleri doğrultusunda Class C ve Class D seviyelerinde entegre temiz oda sistemlerinin kurulması.',
    solution: 'Çapraz kontaminasyon riskini ortadan kaldıran basınç kademeleri, HEPA filtrasyon ve sürekli izleme sistemleri ile kapsamlı GMP uyumlu tesis.',
    results: ['EU GMP onayı alındı', 'Class C/D sertifikasyonu', '1,200 m² tesis', '%100 validasyon başarısı'],
    image: '/images/case-studies/atabay-cleanroom.jpg',
    sector: 'pharmaceutical'
  },
  {
    id: 'valeo-case',
    company: 'VALEO',
    logo: '/logos/valeo-logo.png',
    title: 'VALEO - Otomotiv Bileşenleri AR-GE ve Test Merkezi',
    challenge: 'Otomotiv parçalarının hassas test ve geliştirme çalışmaları için kontrollü çevresel koşullar ve temiz üretim alanları oluşturmak.',
    solution: 'Çok zonlu iklim kontrol sistemleri, vibrasyon izolasyonu ve özel test ekipmanları entegrasyonu ile AR-GE odaklı temiz oda kompleksi.',
    results: ['Çok parametreli test kabiliyeti', 'ISO standartlarına uygunluk', '600 m² AR-GE alanı', 'Enerji verimli sistem'],
    image: '/images/case-studies/valeo-cleanroom.jpg',
    sector: 'automotive'
  },
  {
    id: 'world-medicine-case',
    company: 'WORLD MEDICINE',
    logo: '/logos/world-medicine-logo.png',
    title: 'WORLD MEDICINE - Steril İlaç Üretimi GMP Grade A/B Sistemleri',
    challenge: 'Steril ilaç üretimi için en yüksek temizlik standartları olan Grade A ve Grade B seviyelerinde temiz oda sistemleri kurmak.',
    solution: 'Laminer akış kabinleri, isolatör teknolojisi ve sürekli partikül monitoring ile entegre steril üretim ortamı tasarımı.',
    results: ['Grade A/B sertifikasyonu', 'Steril üretim kapasitesi', '450 m² steril alan', 'İzolatör entegrasyonu'],
    image: '/images/case-studies/world-medicine-cleanroom.jpg',
    sector: 'pharmaceutical'
  }
];

export default function ReferencesPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredReferences = activeFilter === 'all' 
    ? references 
    : activeFilter === 'others'
      ? references.filter(ref => ['food', 'energy', 'medical'].includes(ref.sector))
      : activeFilter === 'defense'
        ? references.filter(ref => ['defense', 'aerospace'].includes(ref.sector))
        : references.filter(ref => ref.sector === activeFilter);

  return (
    <>
      <Head>
        <title>Güven Üzerine İnşa Edilen Projeler - NEVAYS Referansları</title>
        <meta 
          name="description" 
          content="ASELSAN, VALEO, ATABAY İLAÇ ve daha fazlası. 150+ başarılı temiz oda kurulum projemizi ve başarı hikayelerimizi keşfedin." 
        />
        <meta property="og:title" content="Güven Üzerine İnşa Edilen Projeler - NEVAYS Referansları" />
        <meta property="og:description" content="ASELSAN, VALEO, ATABAY İLAÇ ve daha fazlası. 150+ başarılı temiz oda kurulum projemizi ve başarı hikayelerimizi keşfedin." />
        <meta property="og:url" content="https://nevays.com/tr/referanslar" />
        <meta property="og:type" content="website" />
      </Head>
      <MainLayout>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <Award className="w-4 h-4 mr-2" />
                <span className="text-sm font-semibold">150+ Başarılı Proje</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Güven Üzerine<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary-200">
                  İnşa Edilen Projeler
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                20+ yıllık deneyimimizle, Türkiye'nin önde gelen firmalarının güvenini kazanmış projelerimizi keşfedin. 
                Her projede yaratığımız değer ve başardığımız sonuçlar.
              </p>
            </div>
          </div>
        </section>

        {/* Success Stories - Case Studies */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                🏆 Öne Çıkan Başarı Hikayeleri
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Sadece kimlerle çalıştığımızı değil, onlar için neleri başardığımızı da gösteriyoruz. 
                İşte mühendislik yetkinliğimizi kanıtlayan vaka analizleri.
              </p>
            </div>

            <div className="space-y-20">
              {caseStudies.map((caseStudy, index) => (
                <article 
                  key={caseStudy.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Case Study Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mr-4 p-2">
                        {/* Logo placeholder */}
                        <div className="text-center">
                          <div className="text-xs text-gray-500 font-medium">{caseStudy.company}</div>
                          <div className="text-xs text-gray-400">LOGO</div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {caseStudy.company}
                        </h3>
                        <p className="text-primary-600 font-semibold text-sm">Başarı Hikayesi</p>
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      {caseStudy.title}
                    </h4>

                    <div className="space-y-6">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                          🎯 Zorluk (Challenge)
                        </h5>
                        <p className="text-gray-700 leading-relaxed">
                          {caseStudy.challenge}
                        </p>
                      </div>

                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                          🔧 NEVAYS'ın Çözümü (Solution)
                        </h5>
                        <p className="text-gray-700 leading-relaxed">
                          {caseStudy.solution}
                        </p>
                      </div>

                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                          📊 Sonuçlar (Results)
                        </h5>
                        <div className="grid grid-cols-2 gap-3">
                          {caseStudy.results.map((result, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-sm font-medium text-gray-800">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Image */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="relative h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-lg">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <Building2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-500 font-medium">
                            {caseStudy.company} - Proje Görseli
                          </p>
                          <p className="text-gray-400 text-sm mt-2">
                            Yüksek Çözünürlüklü Fotoğraf
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* All References - Filterable Gallery */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                📋 Tüm Referanslarımız
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Sektörlere göre filtreleyerek tüm referans firmalarımızı görüntüleyebilirsiniz
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {sectorFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-primary-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-700 border border-gray-200'
                  }`}
                >
                  {filter.name}
                  <span className="ml-2 text-sm opacity-75">({filter.count})</span>
                </button>
              ))}
            </div>

            {/* References Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filteredReferences.map((reference, index) => (
                <div
                  key={`${reference.name}-${index}`}
                  className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105 flex items-center justify-center h-32 ${
                    activeFilter !== 'all' && 
                    (activeFilter === 'others' 
                      ? !['food', 'energy', 'medical'].includes(reference.sector)
                      : activeFilter === 'defense' 
                        ? !['defense', 'aerospace'].includes(reference.sector)
                        : reference.sector !== activeFilter
                    ) ? 'opacity-30 pointer-events-none' : 'opacity-100'
                  }`}
                  style={{
                    animation: activeFilter !== 'all' ? 'fadeIn 0.5s ease-in-out' : 'none'
                  }}
                >
                  {/* Logo Placeholder */}
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <span className="text-xs text-gray-500 font-bold">LOGO</span>
                    </div>
                    <p className="text-xs font-semibold text-gray-800 leading-tight">
                      {reference.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {filteredReferences.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">Bu kategoride henüz referans bulunmamaktadır.</p>
              </div>
            )}
          </div>
        </section>

        {/* Stats and Trust Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🔢 Rakamlarla NEVAYS Güvenilirliği
              </h2>
              <p className="text-xl text-gray-600">
                20+ yıllık deneyimimizin somut göstergeleri
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center bg-gradient-to-b from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
                <div className="text-5xl font-black text-blue-600 mb-3">150+</div>
                <div className="text-gray-700 font-semibold">Tamamlanan Proje</div>
                <div className="text-sm text-gray-500 mt-1">2003'ten günümüze</div>
              </div>
              <div className="text-center bg-gradient-to-b from-green-50 to-white rounded-2xl p-8 border border-green-100">
                <div className="text-5xl font-black text-green-600 mb-3">50+</div>
                <div className="text-gray-700 font-semibold">Referans Firma</div>
                <div className="text-sm text-gray-500 mt-1">Farklı sektörlerden</div>
              </div>
              <div className="text-center bg-gradient-to-b from-purple-50 to-white rounded-2xl p-8 border border-purple-100">
                <div className="text-5xl font-black text-purple-600 mb-3">%98</div>
                <div className="text-gray-700 font-semibold">Müşteri Memnuniyeti</div>
                <div className="text-sm text-gray-500 mt-1">Geri bildirim anketleri</div>
              </div>
              <div className="text-center bg-gradient-to-b from-orange-50 to-white rounded-2xl p-8 border border-orange-100">
                <div className="text-5xl font-black text-orange-600 mb-3">%100</div>
                <div className="text-gray-700 font-semibold">Zamanında Teslim</div>
                <div className="text-sm text-gray-500 mt-1">Son 5 yıl ortalaması</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              🚀 Siz de Referanslarımız Arasına Katılmaya Hazır mısınız?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Başarılı projelerimize bir yenisini eklemek için projenizi değerlendirmeye alabilir, 
              size de aynı kalite ve güvenilirlikle hizmet verebiliriz.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
              <h3 className="text-2xl font-bold mb-6">
                ⚡ Ücretsiz Proje Değerlendirmesi
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Teknik Fizibilite</h4>
                  <p className="text-sm text-white/80">Projenizin teknik gereksinimlerini analiz ediyoruz</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Maliyet Analizi</h4>
                  <p className="text-sm text-white/80">Şeffaf ve rekabetçi fiyat teklifi hazırlıyoruz</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Zaman Planlaması</h4>
                  <p className="text-sm text-white/80">Proje takvimi ve kilometre taşlarını belirliyoruz</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:02123456789"
                className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center"
              >
                📞 Proje Danışmanlığı
              </a>
              <a 
                href="https://wa.me/905551234567"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center"
              >
                📱 WhatsApp ile Bilgi Al
              </a>
              <a 
                href="mailto:projeler@nevays.com"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-700 px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center"
              >
                ✉️ Detaylı Proje Teklifi
              </a>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}