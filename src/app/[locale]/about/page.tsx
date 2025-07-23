import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import AboutHero from '@/components/sections/about-hero';
import CompanyOverview from '@/components/sections/company-overview';
import CompanyHistory from '@/components/sections/company-history';
import ManagementTeam from '@/components/sections/management-team';
import CTABanner from '@/components/sections/cta-banner';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'navigation' });

  return {
    title: t('about'),
    description: 'NEVAYS hakkında bilgi: Tarihçe, vizyon, misyon ve yönetim ekibi',
  };
}

export default function AboutPage() {
  return (
    <MainLayout>
      <AboutHero />
      <CompanyOverview />
      <CompanyHistory />
      <ManagementTeam />
      <CTABanner
        title="NEVAYS Ailesine Katılın"
        description="Dünya çapında projeler gerçekleştiren ekibimizde yerinizi alın."
        buttonText="Kariyer Fırsatları"
        buttonAction="contact"
      />
    </MainLayout>
  );
}