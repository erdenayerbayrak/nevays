import { useTranslations, useLocale } from 'next-intl';
import Section from '@/components/ui/section';
import DivisionCard from '@/components/ui/division-card';

const divisions = [
  {
    key: 'airHandling',
    href: '/solutions/air-handling',
    imageSrc: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop&crop=center',
  },
  {
    key: 'cleanRoom',
    href: '/solutions/clean-room',
    imageSrc: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&h=600&fit=crop&crop=center',
  },
  {
    key: 'engineering',
    href: '/solutions/engineering',
    imageSrc: 'https://images.unsplash.com/photo-1581091870627-21ca045f4e8b?w=800&h=600&fit=crop&crop=center',
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