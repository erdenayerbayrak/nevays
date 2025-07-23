import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import { HeroReferences } from '@/components/sections/hero-references';
import FilterableProjects from '@/components/sections/filterable-projects';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'navigation' });

  return {
    title: t('projects'),
    description: 'NEVAYS başarılı proje portfolyosu ve referansları',
  };
}

export default function ProjectsPage() {
  return (
    <MainLayout>
      <HeroReferences
        title="Başarılı Projelerimiz"
        description="Gerçekleştirdiğimiz başarılı projeler ve müşteri memnuniyeti odaklı çözümlerimizle sektörde güvenilir iş ortağınızız."
      />
      <FilterableProjects />
    </MainLayout>
  );
}