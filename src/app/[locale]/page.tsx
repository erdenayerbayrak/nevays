import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import HeroSection from '@/components/sections/hero-section';
import ReferencesMarquee from '@/components/sections/references-marquee';
import CleanroomExpertise from '@/components/sections/cleanroom-expertise';
import EngineeringApproach from '@/components/sections/engineering-approach';
import DivisionsSection from '@/components/sections/divisions-section';
import StatsSection from '@/components/sections/stats-section';
import ClientsSection from '@/components/sections/clients-section';
import WorldMapSection from '@/components/sections/world-map-section';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'hero' });

  return {
    title: t('title'),
    description: t('subtitle'),
    openGraph: {
      title: t('title'),
      description: t('subtitle'),
      locale: locale,
      type: 'website',
    },
  };
}

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <ReferencesMarquee />
      <CleanroomExpertise />
      <EngineeringApproach />
      <DivisionsSection />
      <StatsSection />
      <ClientsSection />
      <WorldMapSection />
    </MainLayout>
  );
}