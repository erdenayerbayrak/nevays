import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import MainLayout from '@/components/layout/main-layout';
import { Download, FileText, Package, Shield, Settings, Eye } from 'lucide-react';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'catalogs' });
  
  const title = locale === 'tr' 
    ? 'Kataloglar - PDF Katalog İndirme | NEVAYS'
    : 'Catalogs - PDF Catalog Download | NEVAYS';
    
  const description = locale === 'tr'
    ? 'NEVAYS ürün katalogları: Temiz oda panelleri, HVAC sistemleri, pass box ve ekipmanlar. PDF olarak indirin.'
    : 'NEVAYS product catalogs: Cleanroom panels, HVAC systems, pass box and equipment. Download as PDF.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://nevays.com/${locale}/kataloglar`,
      siteName: 'NEVAYS',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      type: 'website',
    },
  };
}

const catalogs = [
  {
    id: 'temiz-oda-panelleri',
    title: 'Temiz Oda Panelleri Katalogu',
    description: 'Sandwich panel, hijyen panel ve modüler duvar paneli sistemleri. Teknik özellikler, boyutlar ve uygulama alanları.',
    icon: Shield,
    pageCount: 24,
    fileSize: '3.2 MB',
    lastUpdate: '2024-01-15',
    category: 'Paneller',
    featured: true,
    downloadUrl: '/kataloglar/pdf/nevays-temiz-oda-panelleri-2024.pdf',
    previewImage: '/kataloglar/previews/temiz-oda-panelleri-preview.jpg',
    contents: [
      'Sandwich Panel Sistemleri (50-100mm)',
      'Hijyen Panel Özellikleri',
      'Modüler Duvar Paneli Seçenekleri',
      'Teknik Özellikler ve Test Sonuçları',
      'Kurulum Detayları',
      'Fiyat Listesi'
    ]
  },
  {
    id: 'hvac-sistemleri',
    title: 'HVAC Sistemleri Katalogu',
    description: 'Temiz oda ve laboratuvarlar için özel tasarlanmış havalandırma, klimatizasyon ve filtrasyon sistemleri.',
    icon: Settings,
    pageCount: 32,
    fileSize: '4.8 MB',
    lastUpdate: '2024-01-10',
    category: 'HVAC',
    featured: true,
    downloadUrl: '/kataloglar/pdf/nevays-hvac-sistemleri-2024.pdf',
    previewImage: '/kataloglar/previews/hvac-sistemleri-preview.jpg',
    contents: [
      'Merkezi Klima Sistemleri',
      'Hava İşleme Üniteleri (AHU)',
      'HEPA/ULPA Filtrasyon',
      'Enerji Geri Kazanım Üniteleri',
      'BMS Entegrasyonu',
      'Sistem Seçimi Rehberi'
    ]
  },
  {
    id: 'pass-box-sistemleri',
    title: 'Pass Box Sistemleri',
    description: 'Statik ve dinamik pass box çeşitleri, UV sterilizasyon sistemleri ve özel boyut seçenekleri.',
    icon: Package,
    pageCount: 16,
    fileSize: '2.1 MB',
    lastUpdate: '2024-01-05',
    category: 'Ekipmanlar',
    featured: false,
    downloadUrl: '/kataloglar/pdf/nevays-pass-box-sistemleri-2024.pdf',
    previewImage: '/kataloglar/previews/pass-box-preview.jpg',
    contents: [
      'Statik Pass Box Modelleri',
      'Dinamik Pass Box (HEPA Filtreli)',
      'UV Sterilizasyon Pass Box',
      'Özel Boyut Seçenekleri',
      'Kontrol Sistemleri',
      'Kurulum ve Bakım'
    ]
  },
  {
    id: 'temiz-oda-kapilari',
    title: 'Temiz Oda Kapıları',
    description: 'Hermetik kapatma özellikli manuel ve otomatik temiz oda kapıları, hava kilidi sistemleri.',
    icon: Shield,
    pageCount: 20,
    fileSize: '2.8 MB',
    lastUpdate: '2023-12-28',
    category: 'Kapılar',
    featured: false,
    downloadUrl: '/kataloglar/pdf/nevays-temiz-oda-kapilari-2024.pdf',
    previewImage: '/kataloglar/previews/temiz-oda-kapilari-preview.jpg',
    contents: [
      'Manuel Swing Kapılar',
      'Otomatik Sliding Kapılar',
      'Hava Kilidi (Air Lock) Sistemleri',
      'Acil Çıkış Kapıları',
      'Kontrol ve Güvenlik Sistemleri',
      'Boyut ve Seçenekler'
    ]
  },
  {
    id: 'laminer-akis-kabinleri',
    title: 'Laminer Akış Kabinleri',
    description: 'Dikey ve yatay laminer akış kabinleri, biyogüvenlik kabinleri ve steril çalışma alanları.',
    icon: Settings,
    pageCount: 18,
    fileSize: '2.5 MB',
    lastUpdate: '2023-12-20',
    category: 'Kabinler',
    featured: false,
    downloadUrl: '/kataloglar/pdf/nevays-laminer-akis-kabinleri-2024.pdf',
    previewImage: '/kataloglar/previews/laminer-akis-preview.jpg',
    contents: [
      'Dikey Laminer Akış Kabinleri',
      'Yatay Laminer Akış Kabinleri',
      'Biyogüvenlik Kabinleri (BSC Class I, II)',
      'Özel Tasarım Seçenekleri',
      'HEPA/ULPA Filtrasyon',
      'Test ve Validasyon'
    ]
  },
  {
    id: 'temiz-oda-kiyafetleri',
    title: 'Temiz Oda Kıyafetleri',
    description: 'ESD korumalı temiz oda kıyafetleri, steril eldiven ve maskeler, ayakkabı ve aksesuarlar.',
    icon: Shield,
    pageCount: 12,
    fileSize: '1.8 MB',
    lastUpdate: '2023-12-15',
    category: 'Kıyafetler',
    featured: false,
    downloadUrl: '/kataloglar/pdf/nevays-temiz-oda-kiyafetleri-2024.pdf',
    previewImage: '/kataloglar/previews/temiz-oda-kiyafetleri-preview.jpg',
    contents: [
      'Temiz Oda Tulumları',
      'ESD Korumalı Kıyafetler',
      'Steril Eldiven ve Maskeler',
      'Temiz Oda Ayakkabıları',
      'Başlık ve Saç Boneleri',
      'Beden Tablosu ve Bakım'
    ]
  }
];

const categories = [
  { name: 'Tümü', count: catalogs.length, color: 'bg-gray-500' },
  { name: 'Paneller', count: 2, color: 'bg-blue-500' },
  { name: 'HVAC', count: 1, color: 'bg-green-500' },
  { name: 'Ekipmanlar', count: 1, color: 'bg-purple-500' },
  { name: 'Kapılar', count: 1, color: 'bg-red-500' },
  { name: 'Kabinler', count: 1, color: 'bg-orange-500' },
  { name: 'Kıyafetler', count: 1, color: 'bg-teal-500' }
];

export default function CatalogsPage() {
  const featuredCatalogs = catalogs.filter(cat => cat.featured);
  const regularCatalogs = catalogs.filter(cat => !cat.featured);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ürün Katalogları
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Tüm ürünlerimiz hakkında detaylı bilgi için kataloglarımızı inceleyin
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">{catalogs.length}</div>
              <div className="text-gray-600">Katalog</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">150+</div>
              <div className="text-gray-600">Sayfa</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">6</div>
              <div className="text-gray-600">Kategori</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">2024</div>
              <div className="text-gray-600">Güncel</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Catalogs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🌟 Öne Çıkan Kataloglar
            </h2>
            <p className="text-xl text-gray-600">
              En çok indirilen ve güncel kataloglarımız
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredCatalogs.map((catalog, index) => {
              const Icon = catalog.icon;
              return (
                <div
                  key={catalog.id}
                  className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                          <Icon className="h-8 w-8 text-primary-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{catalog.title}</h3>
                          <span className="bg-primary-200 text-primary-800 px-2 py-1 rounded text-sm font-medium">
                            {catalog.category}
                          </span>
                        </div>
                      </div>
                      <div className="text-right text-sm text-gray-600">
                        <div>{catalog.pageCount} sayfa</div>
                        <div>{catalog.fileSize}</div>
                      </div>
                    </div>
                    <p className="text-gray-700">{catalog.description}</p>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Katalog İçeriği:</h4>
                    <div className="grid grid-cols-1 gap-2 mb-6">
                      {catalog.contents.map((content, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                          {content}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <span>Son güncelleme: {new Date(catalog.lastUpdate).toLocaleDateString('tr-TR')}</span>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <a
                        href={catalog.downloadUrl}
                        download
                        className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        İndir (PDF)
                      </a>
                      <button className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Catalogs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tüm Kataloglar
            </h2>
            <p className="text-xl text-gray-600">
              Ürün kategorilerine göre katalogları keşfedin
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-primary-100 text-primary-700 border border-primary-200' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className={`w-3 h-3 ${category.color} rounded-full mr-2`} />
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Catalog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularCatalogs.map((catalog, index) => {
              const Icon = catalog.icon;
              return (
                <div
                  key={catalog.id}
                  className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  {/* Catalog Preview */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="h-16 w-16 text-gray-400" />
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-gray-700">
                      {catalog.pageCount} sayfa
                    </div>
                  </div>

                  {/* Catalog Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                        {catalog.category}
                      </span>
                      <span className="text-gray-500 text-xs">{catalog.fileSize}</span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                      {catalog.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {catalog.description}
                    </p>

                    <div className="text-xs text-gray-500 mb-4">
                      Son güncelleme: {new Date(catalog.lastUpdate).toLocaleDateString('tr-TR')}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <a
                        href={catalog.downloadUrl}
                        download
                        className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold rounded-lg transition-colors"
                      >
                        <Download className="w-3 h-3 mr-1" />
                        İndir
                      </a>
                      <button className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                        <Eye className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Catalog Request */}
      <section className="py-20 bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <FileText className="h-16 w-16 text-primary-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Özel Katalog Talebi
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Projenize özel ürün seçimi veya detaylı teknik bilgiler için 
              özelleştirilmiş katalog hazırlayabiliriz.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-primary-900 mb-2">📋 Özel Seçim</h3>
                <p className="text-sm text-primary-700">Projenize uygun ürün seçimi</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-primary-900 mb-2">📐 Teknik Detay</h3>
                <p className="text-sm text-primary-700">Detaylı teknik çizimler</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-primary-900 mb-2">💰 Fiyat Bilgisi</h3>
                <p className="text-sm text-primary-700">Güncel fiyat listesi</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                📋 Özel Katalog Talep Et
              </button>
              <a 
                href="mailto:info@nevays.com"
                className="bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                ✉️ E-posta Gönder
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Katalog İndirme Sorunu mu Yaşıyorsunuz?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Teknik destek ekibimiz size yardımcı olmaya hazır
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:02123456789"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              📞 Teknik Destek: 0212 XXX XX XX
            </a>
            <a 
              href="https://wa.me/905551234567"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              📱 WhatsApp Destek
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}