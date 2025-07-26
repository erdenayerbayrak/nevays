'use client';

import MainLayout from '@/components/layout/main-layout';
import { Package, Shield, FileText, Download, Lock, Users, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Head from 'next/head';



const systemComponents = [
  {
    title: 'Temiz Oda Panelleri',
    description: 'Projelerimizin temelini oluşturan temiz oda paneli sistemlerimiz, yüksek sızdırmazlık ve hijyen standartları sunar. Panel sistemleriyle tam entegre çalışan modüler çözümler.',
    detailText: 'Detaylı teknik bilgi ve üretim sürecimiz için "Üretim" sayfamızı inceleyebilirsiniz.',
    icon: Shield,
    catalogPdf: '/kataloglar/temiz-oda-panelleri.pdf',
    image: '/images/products/temiz-oda-panelleri.jpg'
  },
  {
    title: 'Temiz Oda Kapıları', 
    description: 'Sistem bütünlüğü ve sızdırmazlık için kritik olan temiz oda kapısı ürünlerimiz, panel sistemleriyle tam entegre çalışır. Hermetik kapatma ve otomatik kontrol seçenekleri.',
    detailText: 'Elektromanyetik kilit sistemleri ve özel cam panel seçenekleri ile projenize uygun çözümler.',
    icon: Lock,
    catalogPdf: '/kataloglar/temiz-oda-kapilari.pdf', 
    image: '/images/products/temiz-oda-kapilari.jpg'
  },
  {
    title: 'Pass Box Sistemleri',
    description: 'Kontrollü alanlar arasında malzeme transferini güvenli hale getiren pass box ünitelerimiz, çapraz bulaşma riskini ortadan kaldırır. HEPA filtrasyon ve UV sterilizasyon seçenekleri.',
    detailText: 'Statik, dinamik ve özel boyut seçenekleri ile her proje ihtiyacına uygun çözümler.',
    icon: Package,
    catalogPdf: '/kataloglar/pass-box-sistemleri.pdf',
    image: '/images/products/pass-box-sistemleri.jpg'
  },
  {
    title: 'Tamamlayıcı Sarf Malzemeleri - Temiz Oda Kıyafetleri',
    description: 'Personel kaynaklı partikül kontaminasyonunu önlemek için kritik olan temiz oda tulum ve ESD tulum çözümlerimiz. NEVAYS proje müşterilerine standartlara uygun tamamlayıcı malzemeler.',
    detailText: 'Anti-statik özellikli, nefes alabilir kumaşlar ile uzun süreli kullanım konforu.',
    icon: Users,
    catalogPdf: '/kataloglar/temiz-oda-kiyafetleri.pdf',
    image: '/images/products/temiz-oda-kiyafetleri.jpg'
  }
];

interface ProductModalProps {
  component: typeof systemComponents[0];
  isOpen: boolean;
  onClose: () => void;
}

function ProductModal({ component, isOpen, onClose }: ProductModalProps) {
  if (!isOpen) return null;
  
  const Icon = component.icon;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
              <Icon className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">{component.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {/* Product Image */}
          <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mb-6 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Icon className="h-16 w-16 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500 font-medium text-sm">
                  {component.title} - Ürün Görseli
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              {component.description}
            </p>
            <p className="text-gray-600 text-sm">
              {component.detailText}
            </p>
          </div>

          {/* Download Button */}
          <div className="pt-4 border-t border-gray-200">
            <a
              href={component.catalogPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Kataloğu İndir
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const [selectedComponent, setSelectedComponent] = useState<typeof systemComponents[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (component: typeof systemComponents[0]) => {
    setSelectedComponent(component);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedComponent(null);
  };

  return (
    <>
      <Head>
        <title>Sistem Bileşenleri - Temiz Oda Paneli, Kapısı, Pass Box | NEVAYS</title>
        <meta 
          name="description" 
          content="Temiz oda paneli, temiz oda kapısı, pass box ve temiz oda tulum sistemlerinde yüksek standartlı bileşenler. Kusursuz sistem entegrasyonu." 
        />
        <meta property="og:title" content="Sistem Bileşenleri - Temiz Oda Paneli, Kapısı, Pass Box | NEVAYS" />
        <meta property="og:description" content="Temiz oda paneli, temiz oda kapısı, pass box ve temiz oda tulum sistemlerinde yüksek standartlı bileşenler. Kusursuz sistem entegrasyonu." />
        <meta property="og:url" content="https://nevays.com/tr/urunler" />
        <meta property="og:type" content="website" />
      </Head>
      <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Package className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">Yüksek Standartlı Bileşenler</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Sistem<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary-200">
                Bileşenleri
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Başarılı bir temiz oda, en küçük bileşeninin bile en yüksek standartlarda olmasını gerektirir.
              Kusursuz bir sistemin parçaları olarak mühendislik kalitemizi yansıtan çözümler.
            </p>
          </div>
        </div>
      </section>

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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {systemComponents.map((component, index) => {
              const Icon = component.icon;
              return (
                <div
                  key={component.title}
                  onClick={() => openModal(component)}
                  className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer hover:scale-[1.02]"
                >
                  {/* Product Image Header */}
                  <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Icon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500 font-medium text-sm">
                          {component.title} - Stüdyo Fotoğrafı
                        </p>
                      </div>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Package className="h-12 w-12 mx-auto mb-2" />
                        <p className="font-semibold">Katalog ve Detaylar</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors">
                      {component.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">
                      {component.description}
                    </p>

                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <div className="flex items-center text-primary-600 text-sm font-semibold">
                        <span>Katalog ve Detaylar</span>
                        <Download className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedComponent && (
        <ProductModal
          component={selectedComponent}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}

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
    </>
  );
}