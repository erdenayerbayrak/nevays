import { Award, Shield, CheckCircle, Globe } from 'lucide-react';
import Section from '@/components/ui/section';

const certificationStats = [
  { icon: Award, label: 'ISO Sertifikaları', value: '12+' },
  { icon: Shield, label: 'Kalite Standartları', value: '8+' },
  { icon: CheckCircle, label: 'Uygunluk Belgeleri', value: '25+' },
  { icon: Globe, label: 'Uluslararası Onaylar', value: '15+' },
];

export default function CertificatesHero() {
  return (
    <Section className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,_white_1px,_transparent_1px)] bg-[length:32px_32px]" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <Award className="h-16 w-16 text-brand-secondary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-heading mb-6 leading-tight">
            Kalite Sertifikalarımız
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Uluslararası standartlarda kalite ve güvenilirlik taahhüdümüzü belgeleyen 
            sertifikalar ve uygunluk onayları.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationStats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
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