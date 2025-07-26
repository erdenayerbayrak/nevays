'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Phone, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Engineered Background - "Mühendislikte Hassasiyet" Concept */}
      <div className="absolute inset-0 w-full h-full">
        {/* Professional Blue Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900" />
        
        {/* Engineering Grid Pattern - Subtle Technical Aesthetic */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="engineering-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                {/* Main grid lines */}
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
                {/* Precision markers */}
                <circle cx="10" cy="10" r="1" fill="rgba(59, 130, 246, 0.4)"/>
                <circle cx="50" cy="50" r="1.5" fill="rgba(59, 130, 246, 0.6)"/>
                <circle cx="90" cy="90" r="1" fill="rgba(59, 130, 246, 0.4)"/>
                {/* Technical lines */}
                <path d="M 20 0 L 20 100 M 80 0 L 80 100" stroke="rgba(255,255,255,0.1)" strokeWidth="0.25"/>
                <path d="M 0 20 L 100 20 M 0 80 L 100 80" stroke="rgba(255,255,255,0.1)" strokeWidth="0.25"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#engineering-grid)" />
          </svg>
        </div>

        {/* Floating Geometric Elements - "Digital Twin" Inspiration */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Precision hexagons - representing cleanroom chambers */}
          <div className="absolute top-20 left-10 w-24 h-24 border border-accent-400/20 rotate-12 animate-pulse">
            <div className="w-full h-full border border-accent-400/30 rotate-45 rounded-lg"></div>
          </div>
          
          {/* HEPA filter representation */}
          <div className="absolute top-1/3 right-20 w-16 h-20 border-2 border-blue-400/20 rounded-sm animate-pulse delay-1000">
            <div className="w-full h-1 bg-blue-400/20 mt-2"></div>
            <div className="w-full h-1 bg-blue-400/20 mt-2"></div>
            <div className="w-full h-1 bg-blue-400/20 mt-2"></div>
            <div className="w-full h-1 bg-blue-400/20 mt-2"></div>
          </div>

          {/* Laminar flow representation */}
          <div className="absolute bottom-1/4 left-1/3 w-32 h-2 opacity-30">
            <div className="flex space-x-1">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-3 h-2 bg-accent-400/40 animate-pulse"
                  style={{ animationDelay: `${i * 200}ms` }}
                ></div>
              ))}
            </div>
          </div>

          {/* Technical corner brackets */}
          <div className="absolute top-10 right-10 w-8 h-8 border-l-2 border-t-2 border-white/20"></div>
          <div className="absolute bottom-10 left-10 w-8 h-8 border-r-2 border-b-2 border-white/20"></div>
        </div>

        {/* Subtle particle flow effect - "Air Flow Visualization" concept */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
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
            Mühendisliği
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

    </section>
  );
}