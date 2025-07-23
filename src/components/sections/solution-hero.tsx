'use client';

import Image from 'next/image';
import { Download, Phone, MessageCircle } from 'lucide-react';
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
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-slate-900/80" />
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-teal-400/20 to-transparent rounded-full translate-y-40 -translate-x-40"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        
        {/* Premium Badge */}
        <div className="inline-flex items-center px-6 py-2 mb-6 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
          <span className="text-sm font-medium text-white/90">{subtitle}</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="block bg-gradient-to-r from-white via-blue-100 to-teal-200 bg-clip-text text-transparent">
            {title}
          </span>
        </h1>
        
        {/* Description */}
        {description && (
          <p className="text-lg md:text-xl mb-10 text-white/80 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="tel:+905123456789"
            className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px]"
          >
            <div className="flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Bizi Arayın
            </div>
          </a>

          <a 
            href="https://wa.me/905123456789?text=Merhaba, proje hakkında bilgi almak istiyorum." 
            target="_blank" 
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-green-600 hover:bg-green-700 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px]"
          >
            <div className="flex items-center justify-center">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </div>
          </a>

          {catalogUrl && (
            <a 
              href={catalogUrl} 
              download
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 min-w-[200px]"
            >
              <div className="flex items-center justify-center">
                <Download className="mr-2 h-5 w-5" />
                Katalog İndir
              </div>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}