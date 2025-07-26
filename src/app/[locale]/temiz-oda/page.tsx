import { redirect } from 'next/navigation';

interface Props {
  params: { locale: string };
}

export default function TemizOdaPage({ params: { locale } }: Props) {
  // Redirect to new bilgi-merkezi page
  redirect(`/${locale}/bilgi-merkezi`);
}