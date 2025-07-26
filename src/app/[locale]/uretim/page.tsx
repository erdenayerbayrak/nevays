import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import MainLayout from '@/components/layout/main-layout';
import PageHero from '@/components/ui/page-hero';
import Image from 'next/image';
import { Factory, Shield, Settings, CheckCircle, Award, Target, Zap, Globe } from 'lucide-react';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'production' });
  
  const title = locale === 'tr' 
    ? 'Üretim - Temiz Oda Paneli Üretimi | NEVAYS'
    : 'Production - Cleanroom Panel Manufacturing | NEVAYS';
    
  const description = locale === 'tr'
    ? 'Temiz oda paneli, hijyen panel ve temiz oda duvar paneli üretiminde mühendislik odaklı çözümler. Oval süpürgelik ve hijyen süpürgelik sistemleri.'
    : 'Engineering-focused solutions in cleanroom panel, hygiene panel and cleanroom wall panel production. Oval skirting and hygiene skirting systems.';

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
        title="Üretim Kabiliyetlerimiz"
        subtitle="Mühendislik hassasiyetini, son teknoloji üretimle birleştiriyoruz."
        breadcrumbs={[
          { label: 'Üretim' }
        ]}
      />

      {/* Main Content Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Sadece bir panel satıcısı değiliz. NEVAYS olarak, projenizin temelini oluşturan kritik bileşenleri 
              kendi kontrolümüzde, yüksek mühendislik standartlarıyla üretiyoruz. 
              Üretim kabiliyetimiz, kaliteye ve detaya verdiğimiz önemin en büyük kanıtıdır.
            </p>
          </div>

          {/* International Standards Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Uluslararası Standartlarda Temiz Oda Duvar ve Tavan Panelleri
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                GMP uyumlu, mühendislik odaklı <strong className="text-primary-700">temiz oda paneli</strong> sistemlerimiz
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <CheckCircle className="w-4 h-4 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Pürüzsüz Antibakteriyel Yüzeyler</h3>
                      <p className="text-gray-600">FDA onaylı malzemeler ile üretilen <strong>hijyen panel</strong> yüzeyleri, bakterilerin yaşamasını engelleyen özel kaplama teknolojisi</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <Shield className="w-4 h-4 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Sızdırmaz Kilit Sistemi</h3>
                      <p className="text-gray-600">Patentli birleşim teknolojisi ile <strong>temiz oda duvar paneli</strong> eklemlerinde %100 hava sızdırmazlığı</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <Settings className="w-4 h-4 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Çok Çeşitli Malzeme Seçeneği</h3>
                      <p className="text-gray-600"><strong>Temiz oda tavan paneli</strong> ve duvar sistemlerinde HPL, PVC, galvaniz çelik kaplama alternatifleri</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <Award className="w-4 h-4 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">GMP ve ISO 14644 Uyumluluğu</h3>
                      <p className="text-gray-600">Farmasötik ve elektronik sektörü gereksinimlerine tam uyumlu üretim standartları</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Main panel system image */}
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=500&fit=crop&crop=center"
                    alt="Temiz oda panel sistemleri - NEVAYS üretim hattı"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-900/40" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold text-lg">Temiz Oda Panel Üretimi</p>
                    <p className="text-sm opacity-90">GMP uyumlu panel sistemleri</p>
                  </div>
                </div>
                
                {/* Technical details grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-28 rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=200&fit=crop&crop=center"
                      alt="Panel birleşim sistemleri ve sızdırmazlık detayları"
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                  <div className="relative h-28 rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=200&fit=crop&crop=center"
                      alt="Antibakteriyel yüzey kaplamalari ve kalite kontrol"
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hygiene Skirting Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Mükemmelliği Tamamlayan Detaylar: Hijyenik Süpürgelikler
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Temiz odalarda partikül birikimini önleyen, kolay temizlenebilir süpürgelik sistemleri
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {/* Main skirting system image */}
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&crop=center"
                    alt="Oval süpürgelik sistemleri - Hijyenik detaylar ve montaj"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/30" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold text-lg">Oval Süpürgelik Sistemleri</p>
                    <p className="text-sm opacity-90">Partikül birikimini önleyen aerodinamik tasarım</p>
                  </div>
                </div>
                
                {/* Comparison and detail images */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="relative h-20 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=150&fit=crop&crop=center"
                      alt="Oval süpürgelik temizlik kolaylığı"
                      fill
                      className="object-cover"
                      sizes="16vw"
                    />
                  </div>
                  <div className="relative h-20 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=150&fit=crop&crop=center"
                      alt="Panel entegrasyon detayları"
                      fill
                      className="object-cover"
                      sizes="16vw"
                    />
                  </div>
                  <div className="relative h-20 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1583912267550-3ac9a5dfe1a3?w=300&h=150&fit=crop&crop=center"
                      alt="FDA onaylı malzeme sertifikaları"
                      fill
                      className="object-cover"
                      sizes="16vw"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Oval Süpürgelik Avantajları</h3>
                    <p className="text-gray-600 mb-4">
                      Geleneksel köşeli süpürgeliklerin aksine, <strong>oval süpürgelik</strong> sistemimiz 
                      partikül birikimini %95 oranında azaltır ve temizlik süreçlerini kolaylaştırır.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-3" />
                        Partikül birikimini önleyen aerodinamik tasarım
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-3" />
                        Kolay temizlik için pürüzsüz yüzey
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-3" />
                        Kimyasal dezenfektanlara dayanıklılık
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-3" />
                        Panel sistemleriyle mükemmel entegrasyon
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Hijyen Süpürgelik Uygulamaları</h3>
                    <p className="text-gray-600">
                      <strong>Hijyen süpürgelik</strong> sistemlerimiz, farmasötik üretim alanları, 
                      steril odalar ve laboratuvarlarda kritik temizlik standartlarını karşılar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose NEVAYS Production Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Neden NEVAYS Üretimini Tercih Etmelisiniz?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mühendislik Odaklı Üretim</h3>
                <p className="text-gray-600">Her panel, projenizin teknik gereksinimlerine özel olarak tasarlanır ve üretilir</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tam Entegrasyon</h3>
                <p className="text-gray-600">Panel üretiminden kuruluma kadar tüm süreçleri tek elden yönetiyoruz</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Üstün Kalite Kontrol</h3>
                <p className="text-gray-600">Her üretim aşamasında çoklu kalite kontrol noktaları ve test protokolleri</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Settings className="h-10 w-10 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Esneklik ve Hız</h3>
                <p className="text-gray-600">Özel boyut ve malzeme taleplerini hızla karşılayan esnek üretim kapasitesi</p>
              </div>
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