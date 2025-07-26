import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import MainLayout from '@/components/layout/main-layout';
import { Calendar, Award, Users, Building2, CheckCircle, TrendingUp } from 'lucide-react';
import Image from 'next/image';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'about' });
  
  const title = locale === 'tr' 
    ? 'Hakkımızda - NEVAYS Temiz Oda Mühendislik'
    : 'About Us - NEVAYS Cleanroom Engineering';
    
  const description = locale === 'tr'
    ? '20+ yıl deneyim ile temiz oda mühendisliğinde öncü. GMP ve ISO 14644 standartlarında anahtar teslim projeler.'
    : '20+ years experience leading in cleanroom engineering. Turnkey projects in GMP and ISO 14644 standards.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://nevays.com/${locale}/hakkimizda`,
      siteName: 'NEVAYS',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      type: 'website',
    },
  };
}

const milestones = [
  {
    year: '2003',
    title: 'Kuruluş',
    description: 'NEVAYS temiz oda mühendisliği alanında kuruldu'
  },
  {
    year: '2008',
    title: 'İlk Büyük Proje',
    description: 'İlaç sektöründe ilk GMP uyumlu temiz oda kurulumu'
  },
  {
    year: '2015',
    title: 'Uluslararası Genişleme',
    description: 'Avrupa pazarına açılım ve CE sertifikasyonları'
  },
  {
    year: '2020',
    title: '100+ Proje',
    description: 'Başarıyla tamamlanan proje sayısı 100ü aştı'
  },
  {
    year: '2024',
    title: 'Teknoloji Lideri',
    description: 'Sektörde öncü teknolojiler ve sürdürülebilir çözümler'
  }
];

const values = [
  {
    icon: Award,
    title: 'Kalite Önceliği',
    description: 'Her projede en yüksek kalite standartlarını hedefliyoruz'
  },
  {
    icon: Users,
    title: 'Müşteri Odaklılık',
    description: 'Müşteri ihtiyaçlarını anlayıp özelleştirilmiş çözümler sunuyoruz'
  },
  {
    icon: CheckCircle,
    title: 'Güvenilirlik',
    description: 'Zamanında teslimat ve kaliteli hizmet garantisi'
  },
  {
    icon: TrendingUp,
    title: 'İnovasyon',
    description: 'Sürekli AR-GE ile teknolojik gelişmeleri takip ediyoruz'
  }
];

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hakkımızda
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              20+ yıl deneyim ile temiz oda mühendisliğinde öncü, GMP ve ISO 14644 standartlarında uzman ekip
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                NEVAYS Kimdir?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                2003 yılından bu yana temiz oda teknolojileri alanında faaliyet gösteren NEVAYS, 
                farmasötik, elektronik, gıda ve medikal cihaz sektörlerinde anahtar teslim projeler gerçekleştirmektedir.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                ISO 14644 ve GMP standartlarına uygun olarak tasarlanan sistemlerimizle, 
                müşterilerimizin en yüksek kalite gereksinimlerini karşılıyoruz.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">150+</div>
                  <div className="text-gray-600">Tamamlanan Proje</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">20+</div>
                  <div className="text-gray-600">Yıl Deneyim</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                  <div className="text-gray-600">Referans Firma</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
                  <div className="text-gray-600">Müşteri Memnuniyeti</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid gap-6">
                {/* Main company facility image */}
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center"
                    alt="NEVAYS modern ofis binası ve üretim tesisi"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold text-lg">NEVAYS Merkez Ofis</p>
                    <p className="text-sm opacity-90">Modern üretim tesisi ve mühendislik merkezi</p>
                  </div>
                </div>
                
                {/* Two smaller images in a grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative h-40 rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center"
                      alt="NEVAYS mühendislik ekibi proje geliştirme sürecinde"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="relative h-40 rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=center"
                      alt="NEVAYS kalite kontrol laboratuvarı ve test ekipmanları"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tarihçemiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              20 yılı aşkın sürede kaydettiğimiz önemli kilometre taşları
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-primary-300"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 mb-3`}>
                        <Calendar className="w-4 h-4 mr-1" />
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Değerlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İş yapış şeklimizi belirleyen temel değerler ve yaklaşımlarımız
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                    <Icon className="h-10 w-10 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Projeniz İçin Bizimle İletişime Geçin
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            20+ yıl deneyimimizle projenizi başarıyla tamamlayalım
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
              ✉️ E-posta Gönder
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}