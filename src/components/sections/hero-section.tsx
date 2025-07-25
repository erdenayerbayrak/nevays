'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

export default function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const cleanRoomImages = [
    'https://images.unsplash.com/photo-1576671081837-49000212a370?w=1920&h=1080&fit=crop&crop=center', // Pharmaceutical cleanroom manufacturing
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&h=1080&fit=crop&crop=center', // Sterile laboratory environment
    'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1920&h=1080&fit=crop&crop=center'  // Clean manufacturing facility
  ];

  const handleIndicatorClick = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % cleanRoomImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [cleanRoomImages.length, isPaused]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Professional Project Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Professional Clean Room Engineering Background Images */}
        <div className="relative w-full h-full">
          {cleanRoomImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full bg-center bg-cover transition-all duration-1000 ${
                index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
              style={{
                backgroundImage: `url('${image}')`
              }}
            />
          ))}
        </div>

        {/* Professional Blue Gradient Overlay - Updated Color Scheme */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-primary-900/80" />
      </div>

      {/* Professional Hero Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        
        {/* Simplified Professional Badge */}
        <div className="inline-flex items-center px-6 py-3 mb-8 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-fade-in-up">
          <div className="w-2 h-2 bg-accent-400 rounded-full mr-3 animate-pulse"></div>
          <span className="text-sm font-semibold text-white/95">ISO 14644 Sertifikalı</span>
        </div>

        {/* Main Professional Headline - Based on Strategic Recommendations */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in-up">
          <span className="block text-white mb-2">
            Temiz Oda Sistemleri
          </span>
          <span className="block bg-gradient-to-r from-accent-400 via-accent-300 to-secondary-400 bg-clip-text text-transparent">
            
          </span>
        </h1>
        
        {/* Professional Subheading */}
        <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed font-medium animate-fade-in-up">
          GMP uyumlu, anahtar teslim temiz oda çözümleri sunuyoruz
        </p>

        {/* Professional CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up">
          <Link 
            href={`/${locale}/solutions`}
            className="group px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[220px] shadow-lg"
          >
            <div className="flex items-center justify-center">
              <span className="mr-2">Çözümlerimizi Keşfedin</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link 
            href={`/${locale}/contact`}
            className="group px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 min-w-[220px]"
          >
            <div className="flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              İletişime Geçin
            </div>
          </Link>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <ChevronDown className="h-6 w-6 text-white/70" />
      </div>

      {/* Professional Image Indicators */}
      <div className="absolute bottom-16 right-8 flex flex-col space-y-3 z-50">
        {cleanRoomImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-accent-400 shadow-lg scale-125' 
                : 'bg-white/40 hover:bg-white/60 hover:scale-110'
            }`}
            onClick={() => handleIndicatorClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}