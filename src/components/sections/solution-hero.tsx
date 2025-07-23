import Image from 'next/image';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SolutionHeroProps {
  title: string;
  subtitle: string;
  description?: string;
  imageSrc: string;
  catalogUrl?: string;
}

export default function SolutionHero({
  title,
  subtitle,
  description,
  imageSrc,
  catalogUrl,
}: SolutionHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-white">
          {/* Division Badge */}
          <div className="inline-block px-4 py-2 bg-brand-primary/20 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="text-sm font-medium">{subtitle}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-heading mb-6 leading-tight">
            {title}
          </h1>
          
          {description && (
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            {catalogUrl && (
              <Button
                variant="primary"
                size="cta"
                asChild
                className="group"
              >
                <a href={catalogUrl} download>
                  <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                  Katalog İndir
                </a>
              </Button>
            )}
            
            <Button
              variant="ghostButton"
              size="cta"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Teklif Al
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}