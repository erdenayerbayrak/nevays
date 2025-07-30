import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import PageHero from '@/components/ui/page-hero';
import Image from 'next/image';
import { Factory, Shield, Settings, CheckCircle, Award, Target, Zap, Globe } from 'lucide-react';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;  const title = locale === 'tr' 
    ? 'Üretim - Temiz Oda Paneli Üretimi | NEVAYS'
    : 'Production - Cleanroom Panel Manufacturing | NEVAYS';
    
  const description = locale === 'tr'
    ? 'NEVAYS temiz oda paneli üretimi: Hijyen panel, temiz oda duvar paneli, temiz oda tavan paneli üretimi. Oval süpürgelik ve hijyen süpürgelik sistemleri ile GMP uyumlu çözümler.'
    : 'NEVAYS cleanroom panel production: Hygiene panel, cleanroom wall panel, cleanroom ceiling panel manufacturing. GMP compliant solutions with oval skirting and hygiene skirting systems.';

  return {
    title,
    description,
    keywords: 'temiz oda paneli, hijyen panel, temiz oda duvar paneli, temiz oda tavan paneli, oval süpürgelik, hijyen süpürgelik',
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
      <PageHero
        title="Temiz Oda Paneli Üretimi"
        subtitle="Ortaklık kurduğumuz firma ile GMP uyumlu temiz oda paneli sistemleri üretiyoruz."
        breadcrumbs={[
          { label: 'Üretim' }
        ]}
      />

      {/* SEO Odaklı Giriş */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              NEVAYS Temiz Oda Paneli Üretimi
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ortaklık kurduğumuz güvenilir firma ile <strong>temiz oda paneli</strong>, <strong>hijyen panel</strong> ve 
              <strong>temiz oda duvar paneli</strong> üretimi gerçekleştiriyoruz. <strong>Temiz oda tavan paneli</strong>, 
              <strong>oval süpürgelik</strong> ve <strong>hijyen süpürgelik</strong> sistemlerinde mühendislik odaklı çözümler sunuyoruz.
            </p>
          </div>
          
          {/* Üretim Kapsamı */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <Factory className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Panel Üretimi</h3>
              <p className="text-gray-600 text-sm">Temiz oda duvar ve tavan panelleri</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <Shield className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hijyen Sistemleri</h3>
              <p className="text-gray-600 text-sm">Antibakteriyel yüzey kaplamaları</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <Settings className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Süpürgelik Sistemleri</h3>
              <p className="text-gray-600 text-sm">Oval ve hijyen süpürgelik çözümleri</p>
            </div>
          </div>
        </div>
      </section>

      {/* Panel Ürün Grupları */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Temiz Oda Paneli Ürün Grupları
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              GMP uyumlu, antibakteriyel ve sızdırmaz <strong>hijyen panel</strong> sistemlerimiz
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Duvar Panelleri */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/temizodamalzeme.webp"
                  alt="Temiz oda duvar paneli - NEVAYS üretimi"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-600/80" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Temiz Oda Duvar Paneli</h3>
                  <p className="text-sm opacity-90">Antibakteriyel HPL kaplama</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                    <span>Kimyasal ve darbe dayanımı</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                    <span>Antibakteriyel yüzey kaplaması</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                    <span>Sızdırmaz kilit sistemi</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                    <span>Kolay panel değişimi</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tavan Panelleri */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/temizodasistemcard.webp"
                  alt="Temiz oda tavan paneli - NEVAYS üretimi"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-600/80" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Temiz Oda Tavan Paneli</h3>
                  <p className="text-sm opacity-90">HEPA filtre entegrasyonu</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                    <span>HEPA filtre ve ışık entegrasyonu</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                    <span>Yüksek nem dayanımı</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                    <span>Ses ve ısı yalıtımı</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                    <span>X, Y, Z eksen uyumluluğu</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teknik Özellikler */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Hijyen Panel Teknik Özellikleri
            </h2>
          </div>
            
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Panel Kalınlığı</h3>
              <p className="text-gray-600 text-sm">3mm veya 4mm compact laminate</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Yüzey Özelliği</h3>
              <p className="text-gray-600 text-sm">Antibakteriyel HPL kaplama</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Settings className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Montaj Sistemi</h3>
              <p className="text-gray-600 text-sm">Esnek birleşim ve değişim</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Sertifikasyon</h3>
              <p className="text-gray-600 text-sm">GMP ve ISO 14644 uyumlu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Süpürgelik Sistemleri */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Oval Süpürgelik ve Hijyen Süpürgelik Sistemleri
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Partikül birikimini önleyen aerodinamik <strong>oval süpürgelik</strong> ve <strong>hijyen süpürgelik</strong> çözümleri
            </p>
          </div>
            
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/hvac.webp"
                  alt="Oval süpürgelik sistemi - NEVAYS üretimi"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-green-600/80" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Oval Süpürgelik</h3>
                  <p className="text-sm opacity-90">Aerodinamik tasarım</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Oval Süpürgelik Avantajları</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    <span>%95 partikül birikimi azaltma</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    <span>Kolay temizlik ve bakım</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    <span>Kimyasal dayanıklılık</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    <span>Panel sistemi entegrasyonu</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/laminerhavaakış.webp"
                  alt="Hijyen süpürgelik sistemi - NEVAYS üretimi"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-blue-600/80" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Hijyen Süpürgelik</h3>
                  <p className="text-sm opacity-90">Steril ortam uyumlu</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Hijyen Süpürgelik Özellikleri</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    <span>Farmasötik alan uyumluluğu</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    <span>Steril oda standartları</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    <span>Dezenfektan direnci</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    <span>Bakteriyel büyüme engeli</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Üretim Ortaklığı */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Neden NEVAYS Temiz Oda Paneli Üretimi?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ortaklık kurduğumuz firma ile modern üretim teknolojisi ve mühendislik uzmanlığını birleştiriyoruz
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mühendislik Odaklı</h3>
              <p className="text-gray-600 text-sm">Projeye özel tasarım ve üretim çözümleri</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tam Entegrasyon</h3>
              <p className="text-gray-600 text-sm">Üretimden kuruluma tek elden yönetim</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kalite Garantisi</h3>
              <p className="text-gray-600 text-sm">Çoklu kalite kontrol ve test protokolleri</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold mb-4">
              Teknik Katalog ve Detaylı Bilgi İçin Ulaşın
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Projenize özel <strong>temiz oda paneli</strong> çözümleri ve teknik danışmanlık için uzman ekibimizle görüşün
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:02123456789"
                className="bg-white text-primary-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                📞 Hemen Arayın: 0212 XXX XX XX
              </a>
              <a 
                href="https://wa.me/905551234567"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                📱 WhatsApp Teknik Bilgi
              </a>
              <a 
                href="mailto:info@nevays.com"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                ✉️ Katalog Talep Et
              </a>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}