import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import MainLayout from '@/components/layout/main-layout';
import { Package, Shield, FileText, Download } from 'lucide-react';
import Link from 'next/link';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'products' });
  
  const title = locale === 'tr' 
    ? 'Ürünlerimiz - Temiz Oda Paneli ve Ekipmanları | NEVAYS'
    : 'Our Products - Cleanroom Panels and Equipment | NEVAYS';
    
  const description = locale === 'tr'
    ? 'Temiz oda panelleri, hijyen panelleri, temiz oda kapıları, pass box sistemleri ve temiz oda kıyafetleri. Kaliteli ürünler.'
    : 'Cleanroom panels, hygiene panels, cleanroom doors, pass box systems and cleanroom clothing. Quality products.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://nevays.com/${locale}/urunler`,
      siteName: 'NEVAYS',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      type: 'website',
    },
  };
}

const productCategories = [
  {
    title: 'Temiz Oda Panelleri',
    description: 'ISO standartlarında sandwich panel, hijyen panel ve modüler duvar paneli sistemleri.',
    icon: Shield,
    products: [
      'Sandwich Panel (50mm, 75mm, 100mm)',
      'Hijyen Panel (Antibakteriyel)',
      'Modüler Duvar Paneli',
      'Köşe Profilleri ve Bağlantı Elemanları'
    ],
    specifications: [
      '0.6mm DKP sac yüzey',
      'PIR/PUR köpük dolgum',
      'CE sertifikalı',
      'GMP uyumlu'
    ],
    catalogPdf: '/kataloglar/temiz-oda-panelleri.pdf',
    href: '/products/clean-room-panels'
  },
  {
    title: 'Temiz Oda Kapıları',
    description: 'Hermetik kapatma özellikli özel tasarım temiz oda kapıları ve otomatik sistemler.',
    icon: Package,
    products: [
      'Manuel Swing Kapılar',
      'Otomatik Sliding Kapılar',
      'Hava Kilidi (Air Lock) Kapıları',
      'Acil Çıkış Kapıları'
    ],
    specifications: [
      'Hermetik conta sistemi',
      'Elektromanyetik kilit',
      'Cam panel opsiyonu',
      'ISO 14644 uyumlu'
    ],
    catalogPdf: '/kataloglar/temiz-oda-kapilari.pdf',
    href: '/products/clean-room-doors'
  },
  {
    title: 'Pass Box Sistemleri',
    description: 'Kontaminasyon önleyici geçiş kutuları ve malzeme transfer sistemleri.',
    icon: Package,
    products: [
      'Statik Pass Box',
      'Dinamik Pass Box (HEPA Filtreli)',
      'UV Sterilizasyon Pass Box',
      'Özel Boyut Pass Box'
    ],
    specifications: [
      'HEPA/ULPA filtrasyon',
      'UV-C sterilizasyon',
      'Elektronik kilit sistemi',
      'Paslanmaz çelik yapı'
    ],
    catalogPdf: '/kataloglar/pass-box-sistemleri.pdf',
    href: '/products/pass-box'
  },
  {
    title: 'Temiz Oda Kıyafetleri',
    description: 'ESD korumalı ve steril temiz oda kıyafetleri, ayakkabılar ve aksesuarlar.',
    icon: Shield,
    products: [
      'Temiz Oda Tulumu',
      'ESD Korumalı Kıyafetler',
      'Steril Eldiven ve Maske',
      'Temiz Oda Ayakkabıları'
    ],
    specifications: [
      'Anti-statik özellik',
      'Nefes alabilir kumaş',
      'Yıkanabilir',
      'CE sertifikalı'
    ],
    catalogPdf: '/kataloglar/temiz-oda-kiyafetleri.pdf',
    href: '/products/clean-room-clothing'
  }
];

export default function ProductsPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ürünlerimiz
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Temiz oda teknolojilerinde ihtiyacınız olan tüm ürünler, yüksek kalite ve güvenilirlikle
            </p>
          </div>
        </div>
      </section>

      {/* Products Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {productCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                        <Icon className="h-8 w-8 text-primary-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                        <p className="text-gray-600 mt-1">{category.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Products List */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Ürün Çeşitleri</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {category.products.map((product, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{product}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Specifications */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Teknik Özellikler</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {category.specifications.map((spec, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={category.href}
                        className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
                      >
                        <Package className="w-4 h-4 mr-2" />
                        Detayları Gör
                      </Link>
                      <a
                        href={category.catalogPdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Katalog İndir
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Teknik Destek ve Servis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tüm ürünlerimiz için kapsamlı teknik destek ve servis hizmetleri sunuyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2 Yıl Garanti</h3>
              <p className="text-gray-600 text-sm">
                Tüm ürünlerimiz için kapsamlı 2 yıl garanti süresi
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hızlı Teslimat</h3>
              <p className="text-gray-600 text-sm">
                Türkiye genelinde 2-5 iş günü içinde teslimat
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Teknik Dokümantasyon</h3>
              <p className="text-gray-600 text-sm">
                Kurulum kılavuzları ve bakım talimatları dahil
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Özel Çözümler Arıyor Musunuz?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Standart ürünlerimiz dışında, projenizin özel ihtiyaçlarına yönelik 
            özelleştirilmiş çözümler tasarlayıp üretebiliriz.
          </p>
          
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200">
            <h3 className="text-xl font-semibold text-primary-900 mb-4">
              🔧 Özel Tasarım ve Üretim Hizmetleri
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-primary-800 mb-2">Özel Boyut Ürünler</h4>
                <p className="text-primary-700 text-sm">Projenizin ölçülerine göre özel üretim</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-800 mb-2">Özel Malzeme Seçenekleri</h4>
                <p className="text-primary-700 text-sm">Farklı yüzey ve dolgum malzemeleri</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-800 mb-2">Entegre Sistemler</h4>
                <p className="text-primary-700 text-sm">Elektrik, HVAC entegrasyonu</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-800 mb-2">Özel Sertifikasyonlar</h4>
                <p className="text-primary-700 text-sm">İhtiyacınıza göre test ve belgeler</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors text-lg"
            >
              💬 Özel Çözüm Talep Et
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ürün Teklifi ve Fiyat Bilgisi
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ürünlerimiz hakkında detaylı bilgi almak ve fiyat teklifi için iletişime geçin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:02123456789"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              📞 Telefon: 0212 XXX XX XX
            </a>
            <a 
              href="https://wa.me/905551234567"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              📱 WhatsApp Teklif Al
            </a>
            <a 
              href="mailto:info@nevays.com"
              className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              ✉️ E-posta Gönder
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}