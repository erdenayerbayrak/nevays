import { useTranslations } from 'next-intl';
import Section from '@/components/ui/section';
import StatisticBlock from '@/components/ui/statistic-block';

const stats = [
  { key: 'years', value: 25, suffix: '+' },
  { key: 'countries', value: 45 },
  { key: 'employees', value: 150, suffix: '+' },
  { key: 'projects', value: 500, suffix: '+' },
];

export default function StatsSection() {
  const t = useTranslations('stats');

  return (
    <Section background="default" className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#0099CC_1px,_transparent_1px)] bg-[length:24px_24px]" />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-heading text-gray-900 mb-4">
            Rakamlarla NEVAYS
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            25 yıllık deneyimimiz ve global uzmanlığımızla, dünya çapında güvenilir çözümler sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatisticBlock
              key={stat.key}
              value={stat.value}
              suffix={stat.suffix}
              label={t(stat.key)}
              className="transform hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}