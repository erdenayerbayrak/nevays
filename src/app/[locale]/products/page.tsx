import { Metadata } from 'next';
import { MainLayout } from '@/components/layout';
import { HeroProducts } from '@/components/sections/hero-products';
import ProductsOverview from '@/components/sections/products-overview';


interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;  return {
    title: 'Ürünler | NEVAYS',
    description: 'Temiz oda panelleri, kapıları, pass box sistemleri ve temiz oda kıyafetleri. Profesyonel temiz oda ekipmanları ve aksesuarları.',
    keywords: 'temiz oda paneli, temiz oda kapısı, pass box, temiz oda tulum, ESD tulum, cleanroom products',
  };
}

export default function ProductsPage() {
  return (
    <MainLayout>
      <HeroProducts
        title="Profesyonel Temiz Oda Ekipmanları"
        description="Temiz oda sistemleri için gerekli tüm ürün gruplarında kaliteli, standartlara uygun ve güvenilir çözümler sunuyoruz."
      />
      <ProductsOverview />
    </MainLayout>
  );
}