import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import MainLayout from '@/components/layout/main-layout';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'production' });
  
  const title = locale === 'tr' 
    ? 'Üretim - Temiz Oda Paneli Üretimi | NEVAYS'
    : 'Production - Cleanroom Panel Manufacturing | NEVAYS';
    
  const description = locale === 'tr'
    ? 'ISO standartlarında temiz oda paneli, hijyen panel ve modüler duvar paneli üretimi. Kendi üretim tesisimizde kaliteli çözümler.'
    : 'Cleanroom panel, hygiene panel and modular wall panel production in ISO standards. Quality solutions in our own production facility.';

  return {
    title,
    description,
    keywords: 'temiz oda paneli, hijyen panel, temiz oda duvar paneli, sandwich panel, modüler panel, cleanroom panel',
    openGraph: {
      title,
      description,
      url: `https://nevays.com/${locale}/uretim`,
      siteName: 'NEVAYS',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      type: 'website',
    },
  };
}

export default function ProductionPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Temiz Oda Paneli Üretimi
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              ISO standartlarında kalite, 20+ yıl deneyim ve modern üretim teknolojileri
            </p>
          </div>
        </div>
      </section>

      {/* Production Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Üretim Merkezimiz
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  NEVAYS olarak, <strong>temiz oda paneli</strong> üretiminde 20+ yıllık deneyimimizle 
                  Türkiye'nin önde gelen üreticilerinden biriyiz. Modern üretim tesisimizde, 
                  <strong>hijyen panel</strong> sistemlerinden <strong>temiz oda duvar paneli</strong> 
                  çözümlerine kadar geniş bir ürün yelpazesi sunuyoruz.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900">15.000 m²</h4>
                    <p className="text-sm text-gray-600">Üretim Tesisi</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900">200 m²/gün</h4>
                    <p className="text-sm text-gray-600">Üretim Kapasitesi</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Üretim Tesisi Görseli</p>
              </div>
            </div>

            {/* Product Types */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Ürün Çeşitlerimiz
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-4">Sandwich Panel Sistemleri</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 0.6mm DKP sac, elektrostatik boyalı</li>
                    <li>• PIR/PUR köpük dolgum</li>
                    <li>• PVC köşe profili</li>
                    <li>• 50mm, 75mm, 100mm kalınlık</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-4">Hijyen Panel Sistemleri</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Antibakteriyel yüzey kaplama</li>
                    <li>• Pürüzsüz yüzey</li>
                    <li>• Kimyasal madde dayanımı</li>
                    <li>• FDA onaylı malzeme</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-4">Modüler Duvar Paneli</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Hızlı montaj sistemi</li>
                    <li>• Demonte edilebilir yapı</li>
                    <li>• 600mm, 1200mm genişlik</li>
                    <li>• Entegre kablo kanalları</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-gray-50 rounded-lg p-8 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Teknik Özellikler
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Özellik</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Değer</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Test Standardı</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Yoğunluk</td>
                      <td className="border border-gray-300 px-4 py-2">42 kg/m³</td>
                      <td className="border border-gray-300 px-4 py-2">EN 1602</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Isı İletkenlik</td>
                      <td className="border border-gray-300 px-4 py-2">0.022 W/mK</td>
                      <td className="border border-gray-300 px-4 py-2">EN 12667</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Yangın Dayanımı</td>
                      <td className="border border-gray-300 px-4 py-2">B-s1,d0</td>
                      <td className="border border-gray-300 px-4 py-2">EN 13501-1</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Basma Dayanımı</td>
                      <td className="border border-gray-300 px-4 py-2">300 kPa</td>
                      <td className="border border-gray-300 px-4 py-2">EN 826</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quality Standards */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Kalite Standartlarımız
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">ISO</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">ISO 9001:2015</h3>
                  <p className="text-sm text-gray-600">Kalite Yönetim Sistemi</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-green-600">CE</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">CE Sertifikası</h3>
                  <p className="text-sm text-gray-600">Uygunluk Belgesi</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-red-600">TSE</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">TSE Standardı</h3>
                  <p className="text-sm text-gray-600">Türk Standartları</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-purple-600">GMP</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">GMP Uyumlu</h3>
                  <p className="text-sm text-gray-600">İyi Üretim Uygulamaları</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Özel Projeleriniz İçin Ücretsiz Keşif
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Temiz oda paneli ihtiyaçlarınız için uzmanlarımızla görüşün
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
              📱 WhatsApp Mesaj
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