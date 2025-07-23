'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { useState } from 'react';

export default function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          onLoadedData={() => setVideoLoaded(true)}
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/facility-360.mp4" type="video/mp4" />
          {/* Fallback image */}
          <div className="w-full h-full bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 bg-center bg-cover bg-[url('/images/hero-fallback.jpg')]" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-heading mb-6 leading-tight">
            <span className="block text-gradient bg-gradient-to-r from-white to-brand-secondary bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="primary"
              size="cta"
              asChild
              className="group min-w-[200px]"
            >
              <Link href={`/${locale}/contact`}>
                {t('cta')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>

            <Button
              variant="ghostButton"
              size="cta"
              className="group min-w-[200px]"
              onClick={() => {
                // Play intro video or scroll to about section
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              {t('videoButton')}
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Loading overlay */}
      {!videoLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
          <div className="text-center text-white">
            <div className="loading-shimmer w-16 h-16 rounded-full mx-auto mb-4" />
            <p className="text-lg opacity-80">Yükleniyor...</p>
          </div>
        </div>
      )}
    </section>
  );
}