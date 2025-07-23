import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import ContactHero from '@/components/sections/contact-hero';
import ContactForm from '@/components/sections/contact-form';
import ContactInfo from '@/components/sections/contact-info';
import ContactMap from '@/components/sections/contact-map';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'navigation' });

  return {
    title: t('contact'),
    description: 'NEVAYS ile iletişime geçin. Temiz oda ve hava teknolojileri projeleriniz için uzman desteği.',
  };
}

export default function ContactPage() {
  return (
    <MainLayout>
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <ContactMap />
        <div className="flex flex-col">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </MainLayout>
  );
}