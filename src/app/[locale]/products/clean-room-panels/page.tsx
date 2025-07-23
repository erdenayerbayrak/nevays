import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import SolutionHero from '@/components/sections/solution-hero';
import ProductContent from '@/components/sections/product-content';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Temiz Oda Panelleri | NEVAYS',
    description: 'HPL ve sac metal yüzeyler ile antibakteriyel özellikli temiz oda panelleri. GMP uyumlu duvar ve tavan panelleri.',
    keywords: 'temiz oda paneli, HPL panel, antibakteriyel panel, duvar paneli, tavan paneli',
  };
}

export default function CleanRoomPanelsPage() {
  return (
    <MainLayout>
      <SolutionHero
        title="Temiz Oda Panelleri"
        subtitle="Antibakteriyel Yüzeyler ve GMP Uyumluluk"
        description="HPL ve sac metal yüzeyler ile antibakteriyel özellikli duvar ve tavan panelleri. Kolay temizlenebilir ve GMP uyumlu çözümler."
        imageSrc="/images/products/cleanroom-panels-hero.jpg"
        catalogUrl="/catalogs/cleanroom-panels.pdf"
      />
      <ProductContent 
        productName="Temiz Oda Panelleri"
        description="Temiz oda paneli sistemlerimiz, HPL (High Pressure Laminate) ve sac metal yüzeyler ile üretilir. Antibakteriyel özelliği sayesinde mikroorganizma üremesini engelleyerek maksimum hijyen sağlar."
        features={[
          'Antibakteriyel HPL Yüzey',
          'Oval Süpürgelik Detayları', 
          'Kolay Montaj Sistemi',
          'GMP Uyumlu Malzemeler'
        ]}
        specifications={[
          'Kalınlık: 50mm, 75mm, 100mm',
          'Yüzey: HPL, Sac Metal',
          'Çekirdek: Mineral Yün, PU',
          'Kenar: Alüminyum Profil'
        ]}
        applications={[
          'Pharmaceutical Manufacturing',
          'Hospital Operating Rooms',
          'Food Processing Plants',
          'Electronics Manufacturing'
        ]}
      />
    </MainLayout>
  );
}