import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import SolutionHero from '@/components/sections/solution-hero';
import ProductVariantsSection from '@/components/sections/product-variants-section';
import CTABanner from '@/components/sections/cta-banner';
import Section from '@/components/ui/section';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'navigation' });

  return {
    title: t('airHandling'),
    description: 'Yüksek performanslı AHU sistemleri ve havalandırma çözümleri',
  };
}

const productVariants = [
  {
    id: 'ahu-standard',
    name: 'AHU Standard Serisi',
    airflowRange: '1,000 - 50,000 m³/h',
    image: '/images/products/ahu-standard.jpg',
    badges: ['ISO 16890', 'ErP 2018', 'CE'],
    specs: [
      { label: 'Hava Debisi', value: '1,000 - 50,000 m³/h' },
      { label: 'Basınç', value: '250 - 2,500 Pa' },
      { label: 'Sıcaklık Aralığı', value: '-40°C / +70°C' },
      { label: 'Verimlilik', value: 'A+ Enerji Sınıfı' },
    ]
  },
  {
    id: 'ahu-compact',
    name: 'AHU Compact Serisi',
    airflowRange: '500 - 25,000 m³/h',
    image: '/images/products/ahu-compact.jpg',
    badges: ['Kompakt Tasarım', 'Düşük Ses', 'ErP 2018'],
    specs: [
      { label: 'Hava Debisi', value: '500 - 25,000 m³/h' },
      { label: 'Ses Seviyesi', value: '<45 dB(A)' },
      { label: 'Boyutlar', value: 'Optimum Kompaktlık' },
      { label: 'Montaj', value: 'Kolay Kurulum' },
    ]
  },
  {
    id: 'ahu-pharmaceutical',
    name: 'AHU Pharmaceutical',
    airflowRange: '2,000 - 100,000 m³/h',
    image: '/images/products/ahu-pharma.jpg',
    badges: ['GMP Uyumlu', 'Steril Ortam', 'FDA Onaylı'],
    specs: [
      { label: 'Hava Debisi', value: '2,000 - 100,000 m³/h' },
      { label: 'Filtrasyon', value: 'HEPA H14' },
      { label: 'Sterilizasyon', value: 'UV-C Entegreli' },
      { label: 'Validasyon', value: 'GMP Sertifikalı' },
    ]
  },
];

export default function AirHandlingPage() {
  return (
    <MainLayout>
      <SolutionHero
        title="Hava Teknolojileri"
        subtitle="Yüksek performanslı AHU sistemleri ve havalandırma çözümleri"
        description="Endüstriyel tesisler, hastaneler ve ilaç fabrikaları için özel olarak tasarlanmış hava işleme üniteleri ile mükemmel hava kalitesi sağlıyoruz."
        imageSrc="/images/solutions/air-handling-hero.jpg"
        catalogUrl="/downloads/air-handling-catalog.pdf"
      />
      
      <Section background="light">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-heading text-gray-900 mb-6">
            Neden NEVAYS Hava Teknolojileri?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-brand-primary rounded-sm"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Enerji Verimliliği</h3>
              <p className="text-gray-600">A+ enerji sınıfı ile %40'a varan tasarruf</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-brand-secondary rounded-sm"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">ModülerTasarım</h3>
              <p className="text-gray-600">Esnek konfigürasyon ve kolay genişletme</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-brand-primary rounded-sm"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Akıllı Kontrol</h3>
              <p className="text-gray-600">IoT entegrasyonu ve uzaktan monitoring</p>
            </div>
          </div>
        </div>
      </Section>

      <ProductVariantsSection 
        title="Ürün Serileri"
        products={productVariants}
      />

      <CTABanner
        title="AHU Sisteminizi Konfigüre Edin"
        description="İhtiyaçlarınıza özel hava işleme ünitesi çözümü için bizimle iletişime geçin."
        buttonText="Konfigürasyon Talebi"
        buttonAction="configure-ahu"
      />
    </MainLayout>
  );
}