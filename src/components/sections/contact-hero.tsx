import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import Section from '@/components/ui/section';

export default function ContactHero() {
  return (
    <Section className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,_white_1px,_transparent_1px)] bg-[length:36px_36px]" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <MessageCircle className="h-16 w-16 text-brand-secondary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-heading mb-6 leading-tight">
            İletişime Geçin
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Temiz oda ve hava teknolojileri projeleriniz için uzman ekibimizden 
            profesyonel destek alın.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <Phone className="h-8 w-8 text-brand-secondary mx-auto mb-3" />
            <div className="text-sm text-white/80 mb-1">Telefon</div>
            <div className="text-lg font-semibold">+90 212 123 45 67</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <Mail className="h-8 w-8 text-brand-secondary mx-auto mb-3" />
            <div className="text-sm text-white/80 mb-1">E-posta</div>
            <div className="text-lg font-semibold">info@nevays.com</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <MessageCircle className="h-8 w-8 text-brand-secondary mx-auto mb-3" />
            <div className="text-sm text-white/80 mb-1">WhatsApp</div>
            <div className="text-lg font-semibold">+90 532 123 45 67</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <MapPin className="h-8 w-8 text-brand-secondary mx-auto mb-3" />
            <div className="text-sm text-white/80 mb-1">Adres</div>
            <div className="text-lg font-semibold">İstanbul, Türkiye</div>
          </div>
        </div>
      </div>
    </Section>
  );
}