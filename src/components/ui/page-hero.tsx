'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  backgroundOverlay?: string;
  breadcrumbs?: Array<{
    label: string;
    href?: string;
  }>;
}

export default function PageHero({ 
  title, 
  subtitle, 
  backgroundImage,
  backgroundOverlay = 'from-primary-900/80 via-primary-800/70 to-primary-900/80',
  breadcrumbs = []
}: PageHeroProps) {
  const locale = useLocale();

  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden">
      
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
      )}
      
      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${backgroundOverlay}`} />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Page Title (H1) */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium">
            {subtitle}
          </p>
          
        </div>
      </div>
    </section>
  );
}