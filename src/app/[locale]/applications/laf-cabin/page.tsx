import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import SolutionHero from '@/components/sections/solution-hero';
import LafCabinContent from '@/components/sections/laf-cabin-content';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  return {
    title: 'LAF Kabin Sistemleri | NEVAYS',
    description: 'Laminar Air Flow cabinet sistemleri tasarımı ve imalatı. Sterile çalışma ortamları için portable ve sabit kabin çözümleri.',
    keywords: 'LAF kabin, laminar air flow, sterile kabin, biosafety cabinet, temiz hava akışı',
  };
}

export default function LafCabinPage() {
  return (
    <MainLayout>
      <SolutionHero
        title="LAF Kabin Sistemleri"
        subtitle="Laminar Air Flow Teknolojisi"
        description="Sterile çalışma ortamları için portable ve sabit LAF kabin sistemleri tasarımı ve imalatı."
        imageSrc="/images/applications/laf-cabin-hero.jpg"
        catalogUrl="/catalogs/laf-cabin-systems.pdf"
      />
      <LafCabinContent />
    </MainLayout>
  );
}