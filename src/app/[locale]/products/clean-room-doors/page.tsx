import { Metadata } from 'next';
import { MainLayout } from '@/components/layout';
import SolutionHero from '@/components/sections/solution-hero';
import ProductContent from '@/components/sections/product-content';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Temiz Oda Kapıları | NEVAYS',
    description: 'Hermetic seal özelliği ile pressure difference koruyabilen özel temiz oda kapıları. Manuel ve otomatik açılım seçenekleri.',
    keywords: 'temiz oda kapısı, hermetic door, sliding door, cleanroom door, pressure resistant',
  };
}

export default function CleanRoomDoorsPage() {
  return (
    <MainLayout>
      <SolutionHero
        title="Temiz Oda Kapıları"
        subtitle="Hermetic Seal ve Pressure Control"
        description="Temiz odalar arası geçişlerde pressure difference koruyan, hermetic seal özellikli özel kapı sistemleri."
        imageSrc="/images/products/cleanroom-doors-hero.jpg"
        catalogUrl="/catalogs/cleanroom-doors.pdf"
      />
      <ProductContent 
        productName="Temiz Oda Kapıları"
        description="Temiz oda kapısı sistemlerimiz, temiz odalar arası pressure difference korumak için hermetic seal teknolojisi kullanır. Manuel ve otomatik açılım seçenekleri ile her türlü uygulamaya uygun çözümler sunar."
        features={[
          'Hermetic Seal Teknolojisi',
          'Pressure Resistant Yapı', 
          'Glass Window Opsiyonu',
          'Emergency Exit Özelliği'
        ]}
        specifications={[
          'Genişlik: 800mm - 1200mm',
          'Yükseklik: 2000mm - 2500mm',
          'Material: Sac Metal/HPL',
          'Açılım: Manuel/Otomatik'
        ]}
        applications={[
          'Pharmaceutical Cleanrooms',
          'Hospital Isolation Rooms',
          'Laboratory Entrances',
          'Manufacturing Areas'
        ]}
      />
    </MainLayout>
  );
}