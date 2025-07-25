import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
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
      <div className="py-16 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Temiz Oda Kurulumu</h1>
          <p className="text-xl text-white/90 mb-2">GMP ve ISO 14644 Standartlarında</p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            İlaç, sağlık ve elektronik sektörlerinde kritik üretim ortamları için profesyonel temiz oda sistemleri tasarımı ve kurulumu.
          </p>
        </div>
      </div>
      <CleanroomInstallationContent />
    </MainLayout>
  );
}