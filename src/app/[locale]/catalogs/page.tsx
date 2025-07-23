import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import SolutionHero from '@/components/sections/solution-hero';
import CatalogsContent from '@/components/sections/catalogs-content';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  return {
    title: 'Kataloglar | NEVAYS',
    description: 'Temiz oda sistemleri, ürünler ve uygulamalar için detaylı kataloglar. PDF formatında ücretsiz indirme imkanı.',
    keywords: 'katalog, temiz oda katalog, ürün katalogu, PDF download, technical documentation',
  };
}

export default function CatalogsPage() {
  return (
    <MainLayout>
      <SolutionHero
        title="Kataloglar"
        subtitle="Teknik Dokümantasyon ve Ürün Bilgileri"
        description="Temiz oda sistemleri, ürünleri ve uygulamaları hakkında detaylı bilgiler içeren kataloglarımızı PDF formatında indirebilirsiniz."
        imageSrc="/images/catalogs/catalogs-hero.jpg"
        catalogUrl="/catalogs/nevays-main-catalog.pdf"
      />
      <CatalogsContent />
    </MainLayout>
  );
}