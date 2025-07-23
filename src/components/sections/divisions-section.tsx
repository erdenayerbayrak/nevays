import { useTranslations, useLocale } from 'next-intl';
import Section from '@/components/ui/section';
import DivisionCard from '@/components/ui/division-card';

const divisions = [
  {
    key: 'airHandling',
    href: '/solutions/air-handling',
    imageSrc: '/images/divisions/air-handling.jpg',
  },
  {
    key: 'cleanRoom',
    href: '/solutions/clean-room',
    imageSrc: '/images/divisions/clean-room.jpg',
  },
  {
    key: 'engineering',
    href: '/solutions/engineering',
    imageSrc: '/images/divisions/engineering.jpg',
  },
];

export default function DivisionsSection() {
  const t = useTranslations('divisions');
  const locale = useLocale();

  return (
    <Section background="light" id="solutions">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-heading text-gray-900 mb-4">
          {t('title')}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {divisions.map((division) => (
          <DivisionCard
            key={division.key}
            title={t(`${division.key}.title`)}
            description={t(`${division.key}.description`)}
            href={`/${locale}${division.href}`}
            imageSrc={division.imageSrc}
            imageAlt={t(`${division.key}.title`)}
            className="animate-fade-in"
          />
        ))}
      </div>
    </Section>
  );
}