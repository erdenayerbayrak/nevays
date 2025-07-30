import { Metadata } from 'next';
import { MainLayout } from '@/components/layout';
import SolutionHero from '@/components/sections/solution-hero';
import ProductContent from '@/components/sections/product-content';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Pass Box Sistemleri | NEVAYS',
    description: 'Temiz odalar arası güvenli materyal transferi için UV sterilizasyon ve interlock sistemli pass box çözümleri.',
    keywords: 'pass box, material transfer, UV sterilization, interlock system, cleanroom transfer',
  };
}

export default function PassBoxPage() {
  return (
    <MainLayout>
      <SolutionHero
        title="Pass Box Sistemleri"
        subtitle="Güvenli Materyal Transferi"
        description="Temiz odalar arası contamination riski olmaksızın materyal transferi için UV sterilizasyon ve interlock sistemli çözümler."
        imageSrc="/images/products/pass-box-hero.jpg"
        catalogUrl="/catalogs/pass-box.pdf"
      />
      <ProductContent 
        productName="Pass Box Sistemleri"
        description="Pass box sistemlerimiz, temiz odalar arası güvenli materyal transferi sağlar. UV sterilizasyon ve interlock sistemleri ile contamination riskını minimize eder. HEPA filtrasyon ile temiz hava akışı sağlanır."
        features={[
          'UV Sterilizasyon Sistemi',
          'Interlock Güvenlik Sistemi', 
          'HEPA Filter Entegrasyonu',
          'Farklı Boyut Seçenekleri'
        ]}
        specifications={[
          'Boyutlar: 400x400 - 800x800mm',
          'Derinlik: 300mm - 600mm',
          'UV Lamp: 254nm dalga boyu',
          'HEPA: %99.97 verimlilik'
        ]}
        applications={[
          'Pharmaceutical Transfer',
          'Laboratory Sample Transfer',
          'Sterile Material Handling',
          'Food Processing'
        ]}
      />
    </MainLayout>
  );
}