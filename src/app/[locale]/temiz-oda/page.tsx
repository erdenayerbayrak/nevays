import { redirect } from 'next/navigation';

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function TemizOdaPage({ params }: Props) {
  const { locale } = await params;
  // Redirect to new bilgi-merkezi page
  redirect(`/${locale}/bilgi-merkezi`);
}