import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import MainLayout from '@/components/layout/main-layout';
import { Download, FileText, Package } from 'lucide-react';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'catalogs' });
  
  const title = locale === 'tr' 
    ? 'Teknik Dokümanlar - Katalog İndirme Merkezi | NEVAYS'
    : 'Technical Documents - Catalog Download Center | NEVAYS';
    
  const description = locale === 'tr'
    ? 'Tüm NEVAYS teknik kataloglarını PDF formatında indirin. Temiz oda panelleri, kapılar, pass box ve sarf malzemeleri.'
    : 'Download all NEVAYS technical catalogs in PDF format. Cleanroom panels, doors, pass boxes and consumables.';

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

// Kategori bazında organize edilmiş katalog yapısı
const catalogCategories = [
  {
    id: 'temiz-oda-panel-sistemleri',
    title: 'Temiz Oda Panel Sistemleri',
    description: 'Sandwich panel, hijyen panel ve modüler duvar sistemleri',
    catalogs: [
      {
        id: 'temiz-oda-panelleri',
        title: 'Temiz Oda Panelleri - Teknik Katalog',
        fileInfo: 'PDF • 3.2 MB • Güncelleme: 15.01.2024',
        downloadUrl: '/kataloglar/pdf/nevays-temiz-oda-panelleri-2024.pdf',
        previewThumbnail: '/kataloglar/thumbnails/temiz-oda-panelleri-thumb.jpg'
      }
    ]
  },
  {
    id: 'temiz-oda-kapilari',
    title: 'Temiz Oda Kapıları',
    description: 'Manuel, otomatik kapılar ve hava kilidi sistemleri',
    catalogs: [
      {
        id: 'temiz-oda-kapilari',
        title: 'Temiz Oda Kapıları - Ürün Katalogu',
        fileInfo: 'PDF • 2.8 MB • Güncelleme: 28.12.2023',
        downloadUrl: '/kataloglar/pdf/nevays-temiz-oda-kapilari-2024.pdf',
        previewThumbnail: '/kataloglar/thumbnails/temiz-oda-kapilari-thumb.jpg'
      }
    ]
  },
  {
    id: 'pass-box-uniteleri',
    title: 'Pass Box Üniteleri',
    description: 'Statik, dinamik ve UV sterilizasyonlu pass box sistemleri',
    catalogs: [
      {
        id: 'pass-box-sistemleri',
        title: 'Pass Box Sistemleri - Teknik Doküman',
        fileInfo: 'PDF • 2.1 MB • Güncelleme: 05.01.2024',
        downloadUrl: '/kataloglar/pdf/nevays-pass-box-sistemleri-2024.pdf',
        previewThumbnail: '/kataloglar/thumbnails/pass-box-thumb.jpg'
      }
    ]
  },
  {
    id: 'temiz-oda-sarf-malzemeleri',
    title: 'Temiz Oda Sarf Malzemeleri',
    description: 'ESD kıyafetler, eldiven, maske ve diğer sarf malzemeleri',
    catalogs: [
      {
        id: 'temiz-oda-kiyafetleri',
        title: 'Temiz Oda Kıyafetleri ve Sarf Malzemeleri',
        fileInfo: 'PDF • 1.8 MB • Güncelleme: 15.12.2023',
        downloadUrl: '/kataloglar/pdf/nevays-temiz-oda-kiyafetleri-2024.pdf',
        previewThumbnail: '/kataloglar/thumbnails/temiz-oda-kiyafetleri-thumb.jpg'
      }
    ]
  }
];

// Tüm katalogları tek ZIP dosyası olarak indirme seçeneği
const bulkDownload = {
  title: 'Tüm Katalogları İndir',
  description: 'Tüm teknik katalogları tek sıkıştırılmış dosyada',
  fileInfo: 'ZIP • 12.8 MB • 4 Katalog Dahil',
  downloadUrl: '/kataloglar/zip/nevays-tum-kataloglar-2024.zip'
};

export default function CatalogsPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Download className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">Teknik Doküman Merkezi</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Teknik<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary-200">
                Dokümanlar
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Tüm ürün kataloglarımızı anında indirin. Sade, hızlı ve işlevsel doküman merkezi.
            </p>
          </div>
        </div>
      </section>

      {/* Bulk Download Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {bulkDownload.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {bulkDownload.description}
              </p>
              <p className="text-sm text-gray-500 mb-6">
                {bulkDownload.fileInfo}
              </p>
              <a
                href={bulkDownload.downloadUrl}
                download
                className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors text-lg"
              >
                <Download className="w-5 h-5 mr-3" />
                Tüm Katalogları İndir (ZIP)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Categories */}
      {catalogCategories.map((category, categoryIndex) => (
        <section key={category.id} className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                {category.title}
              </h2>
              <p className="text-lg text-gray-600">
                {category.description}
              </p>
            </div>

            {/* Category Catalogs */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.catalogs.map((catalog) => (
                <div
                  key={catalog.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  {/* Catalog Preview Thumbnail */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <FileText className="h-16 w-16 text-gray-400 mx-auto mb-2" />
                        <p className="text-xs text-gray-500 font-medium">
                          Katalog Kapak Görseli
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Catalog Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {catalog.title}
                    </h3>
                    
                    <p className="text-sm text-gray-500 mb-4">
                      {catalog.fileInfo}
                    </p>

                    {/* Download Button */}
                    <a
                      href={catalog.downloadUrl}
                      download
                      className="w-full inline-flex items-center justify-center px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      İndir
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}


      {/* Quick Contact for Catalog Issues */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              📞 Katalog Desteği
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              İndirme sorunu yaşıyor veya özel katalog talebi oluşturmak istiyorsunuz?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:02123456789"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                📞 Ara: 0212 XXX XX XX
              </a>
              <a 
                href="mailto:katalog@nevays.com"
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                ✉️ katalog@nevays.com
              </a>
            </div>
          </div>
        </div>
      </section>

    </MainLayout>
  );
}