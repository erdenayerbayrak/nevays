import { PenTool, Calendar, User, Tag } from 'lucide-react';
import Section from '@/components/ui/section';

const blogStats = [
  { icon: PenTool, label: 'Makale', value: '120+' },
  { icon: User, label: 'Uzman Yazar', value: '15+' },
  { icon: Tag, label: 'Kategori', value: '8' },
  { icon: Calendar, label: 'Haftalık Yayın', value: '3' },
];

export default function BlogHero() {
  return (
    <Section className="bg-gradient-to-br from-brand-dark to-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_white_1px,_transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <PenTool className="h-16 w-16 text-brand-secondary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-heading mb-6 leading-tight">
            NEVAYS Blog
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Temiz oda teknolojileri, sektör trendleri ve uzman görüşleri ile 
            bilginizi güncel tutun.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogStats.map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10">
              <stat.icon className="h-8 w-8 text-brand-secondary mx-auto mb-3" />
              <div className="text-3xl font-display font-heading text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}