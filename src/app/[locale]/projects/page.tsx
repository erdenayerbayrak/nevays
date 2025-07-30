import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import { HeroReferences } from '@/components/sections/hero-references';
import FilterableProjects from '@/components/sections/filterable-projects';
import ModernFilterSystem from '@/components/ui/modern-filter-system';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;  const title = locale === 'tr' ? 'Projeler' : 'Projects';
  
  return {
    title,
    description: locale === 'tr' 
      ? 'NEVAYS başarılı proje portfolyosu ve referansları'
      : 'NEVAYS successful project portfolio and references',
  };
}

export default function ProjectsPage() {
  return (
    <MainLayout>
      <ModernFilterSystem />
    </MainLayout>
  );
}