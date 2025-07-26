import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import HeroSection from '@/components/sections/hero-section';
import TrustBand from '@/components/sections/trust-band';
import SolutionsOverview from '@/components/sections/solutions-overview';
import WhyNevays from '@/components/sections/why-nevays';
import ReferencesMarquee from '@/components/sections/references-marquee';
import CleanroomInfoCards from '@/components/sections/cleanroom-info-cards';
import CleanroomExpertise from '@/components/sections/cleanroom-expertise';
import EngineeringApproach from '@/components/sections/engineering-approach';
import SectorSolutions from '@/components/sections/sector-solutions';
import { StatsSection } from '@/components/ui/counter-animation';
import PartnersMarquee from '@/components/sections/partners-marquee';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'hero' });
  
  const title = locale === 'tr' 
    ? 'NEVAYS - Temiz Oda Sistemleri ve Cleanroom Kurulumu | GMP Uyumlu Çözümler'
    : 'NEVAYS - Cleanroom Systems & Installation | GMP Compliant Solutions';
    
  const description = locale === 'tr'
    ? '25+ yıl deneyimle temiz oda kurulumu, laboratuvar sistemleri ve HVAC uygulamaları. İlaç, sağlık, elektronik sektörlerinde GMP uyumlu temiz oda panelleri ve modüler cleanroom çözümleri.'
    : '25+ years experience in cleanroom installation, laboratory systems and HVAC applications. GMP compliant cleanroom panels and modular cleanroom solutions for pharmaceutical, healthcare, electronics sectors.';

  return {
    title,
    description,
    keywords: locale === 'tr' 
      ? 'temiz oda, temiz oda kurulumu, temiz oda sistemleri, temiz oda panelleri, cleanroom, GMP, ISO 14644, laboratuvar kurulum, modüler temiz oda, steril oda'
      : 'cleanroom, cleanroom installation, cleanroom systems, cleanroom panels, GMP, ISO 14644, laboratory installation, modular cleanroom, sterile room',
    authors: [{ name: 'NEVAYS Cleanroom Systems' }],
    creator: 'NEVAYS',
    publisher: 'NEVAYS',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://nevays.com/${locale}`,
      siteName: 'NEVAYS Cleanroom Systems',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: locale === 'tr' ? 'NEVAYS Temiz Oda Sistemleri' : 'NEVAYS Cleanroom Systems',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.jpg'],
    },
    alternates: {
      canonical: `https://nevays.com/${locale}`,
      languages: {
        'tr': 'https://nevays.com/tr',
        'en': 'https://nevays.com/en',
      },
    },
  };
}

export default function HomePage() {
  return (
    <MainLayout>
      {/* New Professional Homepage Structure Based on Wireframe */}
      <HeroSection />
      <PartnersMarquee />
      <SolutionsOverview />
      <WhyNevays />
      
      {/* Keep some existing sections for content richness */}
      <CleanroomExpertise />
      <SectorSolutions />
    </MainLayout>
  );
}