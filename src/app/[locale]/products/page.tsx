import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import SolutionHero from '@/components/sections/solution-hero';
import ProductsOverview from '@/components/sections/products-overview';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  return {
    title: 'Ürünler | NEVAYS',
    description: 'Temiz oda panelleri, kapıları, pass box sistemleri ve temiz oda kıyafetleri. Profesyonel temiz oda ekipmanları ve aksesuarları.',
    keywords: 'temiz oda paneli, temiz oda kapısı, pass box, temiz oda tulum, ESD tulum, cleanroom products',
  };
}

export default function ProductsPage() {
  return (
    <MainLayout>
      <SolutionHero
        title="Ürünler"
        subtitle="Profesyonel Temiz Oda Ekipmanları"
        description="Temiz oda sistemleri için gerekli tüm ürün gruplarında kaliteli ve standartlara uygun çözümler sunuyoruz."
        imageSrc="/images/products/products-overview.jpg"
        catalogUrl="/catalogs/products-catalog.pdf"
      />
      <ProductsOverview />
    </MainLayout>
  );
}