'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Section from '@/components/ui/section';

interface CTABannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonAction: string;
  background?: 'primary' | 'secondary' | 'gradient';
}

export default function CTABanner({
  title,
  description,
  buttonText,
  buttonAction,
  background = 'gradient',
}: CTABannerProps) {
  const handleAction = () => {
    switch (buttonAction) {
      case 'configure-ahu':
        // Open configuration modal or form
        console.log('Opening AHU configuration');
        break;
      case 'contact':
        // Scroll to contact section
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      default:
        console.log('Unknown action:', buttonAction);
    }
  };

  const backgroundClass = {
    primary: 'bg-brand-primary',
    secondary: 'bg-brand-secondary',
    gradient: 'bg-gradient-to-r from-brand-primary to-brand-secondary',
  };

  return (
    <Section className={`${backgroundClass[background]} text-white relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_white_1px,_transparent_1px)] bg-[length:24px_24px]" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-heading mb-6 leading-tight">
          {title}
        </h2>
        
        <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        <Button
          variant="ghostButton"
          size="cta"
          onClick={handleAction}
          className="group bg-white/20 hover:bg-white/30 border-white/30 text-white min-w-[250px]"
        >
          {buttonText}
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
        </Button>
      </div>
    </Section>
  );
}