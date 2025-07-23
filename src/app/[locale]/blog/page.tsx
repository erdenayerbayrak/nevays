import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import BlogHero from '@/components/sections/blog-hero';
import BlogGrid from '@/components/sections/blog-grid';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'navigation' });

  return {
    title: t('blog'),
    description: 'NEVAYS blog: Temiz oda teknolojileri, sektör haberleri ve uzman görüşleri',
  };
}

export default function BlogPage() {
  return (
    <MainLayout>
      <BlogHero />
      <BlogGrid />
    </MainLayout>
  );
}