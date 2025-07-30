import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import CleanroomInfoCards from '@/components/sections/cleanroom-info-cards';
import CleanroomFAQ from '@/components/sections/clean-room-faq';
import TagCloud from '@/components/ui/tag-cloud';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;  const title = locale === 'tr' 
    ? 'Bilgi Merkezi - Temiz Oda Teknolojileri Rehberi | NEVAYS'
    : 'Knowledge Center - Cleanroom Technologies Guide | NEVAYS';
    
  const description = locale === 'tr'
    ? 'Temiz oda teknolojileri, GMP standartları, HVAC sistemleri ve validasyon süreçleri hakkında kapsamlı bilgi merkezi.'
    : 'Comprehensive knowledge center about cleanroom technologies, GMP standards, HVAC systems and validation processes.';

  return {
    title,
    description,
  };
}

export default function KnowledgeCenterPage() {
  return (
    <MainLayout>
      <TagCloud />
    </MainLayout>
  );
}