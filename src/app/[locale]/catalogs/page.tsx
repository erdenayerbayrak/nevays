import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import { HeroCatalogs } from '@/components/sections/hero-catalogs';
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
      <HeroCatalogs
        title="Teknik Kataloglar ve Dokümantasyon"
        description="Temiz oda sistemleri, ürünleri ve uygulamaları hakkında detaylı bilgiler içeren kataloglarımızı PDF formatında indirebilirsiniz."
      />
      <CatalogsContent />
    </MainLayout>
  );
}