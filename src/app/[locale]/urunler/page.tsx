import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import PageHero from '@/components/ui/page-hero';
import { Package, Shield, FileText, Download, Lock, Users } from 'lucide-react';
import Link from 'next/link';
import dynamicImport from 'next/dynamic';

export const dynamic = 'force-dynamic';

const ProductsGrid = dynamicImport(() => import('@/components/sections/products-grid'), {
  ssr: false,
  loading: () => <div className="py-20 bg-gray-50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">Loading...</div></div>
});

export const metadata: Metadata = {
  title: 'Sistem Bileşenleri - Temiz Oda Paneli, Kapısı, Pass Box | NEVAYS',
  description: 'Temiz oda paneli, temiz oda kapısı, pass box ve temiz oda tulum sistemlerinde yüksek standartlı bileşenler. Kusursuz sistem entegrasyonu.',
  openGraph: {
    title: 'Sistem Bileşenleri - Temiz Oda Paneli, Kapısı, Pass Box | NEVAYS',
    description: 'Temiz oda paneli, temiz oda kapısı, pass box ve temiz oda tulum sistemlerinde yüksek standartlı bileşenler. Kusursuz sistem entegrasyonu.',
    url: 'https://nevays.com/tr/urunler',
    type: 'website',
  },
};



export default function ProductsPage() {

  return (
    <MainLayout>
      {/* Hero Section */}
      <PageHero
        title="Sistem Bileşenleri ve Ekipmanlar"
        subtitle="Kusursuz bir bütün, ancak en yüksek standartlardaki parçalarla mümkündür."
        breadcrumbs={[
          { label: 'Ürünler' }
        ]}
      />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Kullandığımız ve Güvendiğimiz Yüksek Standartlı Bileşenler
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            NEVAYS olarak, projelerimizde kullandığımız tüm sistem bileşenlerinde kendi mühendislik 
            ve kalite anlayışımızı yansıtıyoruz. Bu ürünler satılık değil; güvendiğimiz ve 
            projelerimizin temelini oluşturan kritik bileşenlerdir.
          </p>
        </div>
      </section>

      {/* System Components Grid */}
      <ProductsGrid />

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