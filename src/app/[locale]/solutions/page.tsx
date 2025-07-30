import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import SolutionsLandingHero from '@/components/sections/solutions-landing-hero';
import SolutionsOverview from '@/components/sections/solutions-overview';
import TabSystem from '@/components/ui/tab-system';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  
  const title = locale === 'tr' 
    ? 'Çözümlerimiz - Temiz Oda ve Laboratuvar Sistemleri | NEVAYS'
    : 'Our Solutions - Cleanroom and Laboratory Systems | NEVAYS';
    
  const description = locale === 'tr'
    ? 'NEVAYS olarak temiz oda kurulumu, laboratuvar sistemleri, HVAC uygulamaları ve validasyon hizmetlerinde uzman çözümler sunuyoruz.'
    : 'NEVAYS provides expert solutions in cleanroom installation, laboratory systems, HVAC applications and validation services.';

  return {
    title,
    description,
  };
}

export default function SolutionsPage() {
  return (
    <MainLayout>
      <SolutionsLandingHero />
      <TabSystem />
    </MainLayout>
  );
}