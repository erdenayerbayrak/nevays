import { notFound } from 'next/navigation';

// Static locale configuration for static export
const locales = ['tr', 'en'] as const;

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params: { locale }
}: Props) {
  if (!locales.includes(locale as any)) {
    notFound();
  }

  return (
    <div data-locale={locale}>
      {children}
    </div>
  );
}