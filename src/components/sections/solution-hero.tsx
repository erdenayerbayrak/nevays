'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';

interface SolutionHeroProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  catalogUrl: string;
}

export default function SolutionHero({
  title,
  subtitle,
  description,
  imageSrc,
  catalogUrl
}: SolutionHeroProps) {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary-900 to-primary-800 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-primary-900/40 to-primary-800/40 absolute z-10"></div>
        {/* Use a fallback background color if image fails */}
        <div className="w-full h-full bg-primary-800"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-accent-300 mb-6 font-semibold">
              {subtitle}
            </p>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span className="mr-2">Teklif Al</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <a
                href={catalogUrl}
                download
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Download className="h-5 w-5 mr-2" />
                <span>Katalog İndir</span>
              </a>
            </div>
          </div>

          {/* Visual/Stats */}
          <div className="lg:text-right">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-accent-300 mb-2">ISO 14644</div>
                <div className="text-white/80">Uyumlu</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-accent-300 mb-2">GMP</div>
                <div className="text-white/80">Sertifikalı</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-accent-300 mb-2">24/7</div>
                <div className="text-white/80">Destek</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-accent-300 mb-2">15+</div>
                <div className="text-white/80">Yıl Deneyim</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}