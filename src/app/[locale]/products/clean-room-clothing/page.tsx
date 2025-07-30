import { Metadata } from 'next';
import { MainLayout } from '@/components/layout';
import SolutionHero from '@/components/sections/solution-hero';
import ProductContent from '@/components/sections/product-content';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Temiz Oda Kıyafetleri | NEVAYS',
    description: 'Antistatic ve particle-free özellikli temiz oda tulumları, ayakkabıları ve aksesuarları. ESD korumalı ürün seçenekleri.',
    keywords: 'temiz oda tulum, ESD tulum, antistatic clothing, cleanroom garments, particle-free',
  };
}

export default function CleanRoomClothingPage() {
  return (
    <MainLayout>
      <SolutionHero
        title="Temiz Oda Kıyafetleri"
        subtitle="ESD Korumalı ve Particle-Free"
        description="Antistatic ve particle-free özellikli temiz oda tulumları, ayakkabıları ve aksesuarları ile personel güvenliği sağlanır."
        imageSrc="/images/products/cleanroom-clothing-hero.jpg"
        catalogUrl="/catalogs/cleanroom-clothing.pdf"
      />
      <ProductContent 
        productName="Temiz Oda Kıyafetleri"
        description="Temiz oda tulum ve aksesuarlarımız, ESD korumalı ve particle-free özelliklere sahiptir. Antistatic malzemeler ile üretilen kıyafetlerimiz, temiz oda standartlarına tam uyum sağlar."
        features={[
          'ESD Korumalı Malzeme',
          'Particle-Free Yapı', 
          'Tek Kullanımlık Seçenekleri',
          'Çeşitli Beden Seçenekleri'
        ]}
        specifications={[
          'Malzeme: Polyester/Carbon Fiber',
          'ESD: 10⁶ - 10⁹ ohm',
          'Bedenler: XS - 3XL',
          'Renk: Beyaz, Mavi, Yeşil'
        ]}
        applications={[
          'Electronics Manufacturing',
          'Pharmaceutical Production',
          'Semiconductor Facilities',
          'Research Laboratories'
        ]}
      />
    </MainLayout>
  );
}