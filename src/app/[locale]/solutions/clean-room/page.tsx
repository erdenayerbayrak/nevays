import { Metadata } from 'next';
import Image from 'next/image';
import MainLayout from '@/components/layout/main-layout';
import SolutionHero from '@/components/sections/solution-hero';
import Section from '@/components/ui/section';
import CTABanner from '@/components/sections/cta-banner';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;  const title = locale === 'tr' 
    ? 'Temiz Oda Sistemleri - GMP Uyumlu Çözümler | NEVAYS'
    : 'Cleanroom Systems - GMP Compliant Solutions | NEVAYS';
    
  const description = locale === 'tr'
    ? 'GMP uyumlu temiz oda sistemleri ve kontaminasyon kontrolü. İlaç, hastane ve elektronik sektöründe en yüksek temizlik standartları.'
    : 'GMP compliant cleanroom systems and contamination control. Highest cleanliness standards in pharmaceutical, hospital and electronics sectors.';

  return {
    title,
    description,
  };
}

const cleanRoomComponents = [
  {
    name: 'Duvar Sistemleri',
    description: 'Modüler temiz oda duvar panelleri, özel köşe ve geçiş parçaları ile kolay montaj',
    image: '/images/cleanroom/walls.jpg',
    specs: [
      'Malzeme: Galvanizli çelik + RAL boyalı',
      'Kalınlık: 50mm - 100mm sandwich panel',
      'Fire rating: A1 - B1 sınıfı',
      'Temizlik: Antibakteriyel yüzey'
    ]
  },
  {
    name: 'Cam Sistemleri',
    description: 'Çift camlı temiz oda pencereleri ve gözlem panelleri',
    image: '/images/cleanroom/glazing.jpg',
    specs: [
      'Cam tipi: Lamine güvenlik camı',
      'Çerçeve: Anodize alüminyum',
      'Conta: FDA onaylı silikon',
      'Temizlik: Kolay bakım yüzeyi'
    ]
  },
  {
    name: 'Tavan Sistemleri',
    description: 'HEPA filtralı FFU üniteler ve temiz oda tavan modülleri',
    image: '/images/cleanroom/ceiling.jpg',
    specs: [
      'Filtrasyon: HEPA H13/H14',
      'Hava akış hızı: 0.45 m/s ±20%',
      'Gürültü seviyesi: <48 dB(A)',
      'LED aydınlatma entegreli'
    ]
  },
  {
    name: 'Kapı Sistemleri',
    description: 'Otomatik sürgülü kapılar ve personel geçiş hava kilitleri',
    image: '/images/cleanroom/doors.jpg',
    specs: [
      'Açılım: Otomatik sürgülü/menteşeli',
      'Conta: Çok katlı sızdırmazlık',
      'Güvenlik: Kart okuyucu entegreli',
      'Basınç dayanımı: ±500 Pa'
    ]
  },
  {
    name: 'Döşeme Sistemleri',
    description: 'Antistatik ve kimyasal dayanımlı temiz oda döşemeleri',
    image: '/images/cleanroom/flooring.jpg',
    specs: [
      'Malzeme: Epoksi/PVC/Vinyl',
      'Antistatik: 10⁶ - 10⁹ Ω',
      'Kimyasal dayanım: pH 1-14',
      'Temizlik: Seamless yüzey'
    ]
  }
];

export default function CleanRoomPage() {
  return (
    <MainLayout>
      <SolutionHero
        title="Temiz Oda Sistemleri"
        subtitle="Clean Room Solutions"
        description="GMP uyumlu temiz oda sistemleri ile ilaç, hastane ve elektronik sektöründe en yüksek temizlik standartlarını sağlıyoruz."
        imageSrc="/images/solutions/clean-room-hero.jpg"
        catalogUrl="/downloads/clean-room-catalog.pdf"
      />
      
      {/* Clean Room Standards */}
      <Section background="light">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-heading text-gray-900 mb-6">
            Temiz Oda Standartları
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            ISO 14644, EU GMP, FDA standartlarına uygun temiz oda çözümleri
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['ISO 5', 'ISO 6', 'ISO 7', 'ISO 8'].map((standard, index) => (
            <div key={standard} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="text-2xl font-display font-heading text-brand-primary mb-2">
                  {standard}
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  Class {Math.pow(10, index + 2).toLocaleString()}
                </div>
                <div className="text-xs text-gray-500">
                  ≤ {Math.pow(10, index + 2).toLocaleString()} parçacık/m³
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Clean Room Components */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-heading text-gray-900 mb-4">
            Temiz Oda Bileşenleri
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mx-auto" />
        </div>

        <div className="space-y-16">
          {cleanRoomComponents.map((component, index) => (
            <div
              key={component.name}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src={component.image}
                    alt={component.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <h3 className="text-2xl md:text-3xl font-display font-heading text-gray-900 mb-4">
                  {component.name}
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {component.description}
                </p>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Teknik Özellikler</h4>
                  <ul className="space-y-2">
                    {component.specs.map((spec, specIndex) => (
                      <li key={specIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Temiz Oda Projenizi Planlayın"
        description="GMP uyumlu temiz oda sistemleri için detaylı teknik bilgi ve teklif alın."
        buttonText="Proje Danışmanlığı"
        buttonAction="contact"
      />
    </MainLayout>
  );
}