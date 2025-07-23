import Section from '@/components/ui/section';
import StatisticBlock from '@/components/ui/statistic-block';

const projectStats = [
  { value: 500, suffix: '+', label: 'Tamamlanan Proje' },
  { value: 45, label: 'Ülke' },
  { value: 25, suffix: '+', label: 'Yıllık Deneyim' },
  { value: 98, suffix: '%', label: 'Müşteri Memnuniyeti' },
];

export default function ProjectsHero() {
  return (
    <Section className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,_white_1px,_transparent_1px)] bg-[length:32px_32px]" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-heading mb-6 leading-tight">
          Başarılı Projelerimiz
        </h1>
        
        <p className="text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
          Dünya çapında ilaç, hastane ve endüstriyel tesislerde gerçekleştirdiğimiz 
          projelerin hikayelerini keşfedin.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projectStats.map((stat, index) => (
          <StatisticBlock
            key={index}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white transform hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </Section>
  );
}