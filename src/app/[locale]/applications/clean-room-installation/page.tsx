import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import SolutionHero from '@/components/sections/solution-hero';
import CleanroomInstallationContent from '@/components/sections/cleanroom-installation-content';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  return {
    title: 'Temiz Oda Kurulumu | NEVAYS',
    description: 'GMP ve ISO 14644 standartlarında profesyonel temiz oda kurulumu. İlaç, sağlık ve elektronik sektörleri için kapsamlı mühendislik çözümleri.',
    keywords: 'temiz oda kurulumu, cleanroom installation, GMP, ISO 14644, pharmaceutical cleanroom',
  };
}

export default function CleanroomInstallationPage() {
  return (
    <MainLayout>
      <SolutionHero
        title="Temiz Oda Kurulumu"
        subtitle="GMP ve ISO 14644 Standartlarında"
        description="İlaç, sağlık ve elektronik sektörlerinde kritik üretim ortamları için profesyonel temiz oda sistemleri tasarımı ve kurulumu."
        imageSrc="/images/applications/cleanroom-installation-hero.jpg"
        catalogUrl="/catalogs/cleanroom-installation.pdf"
      />
      <CleanroomInstallationContent />
    </MainLayout>
  );
}