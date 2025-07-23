'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Phone, MessageCircle } from 'lucide-react';
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
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 w-full h-full">
        {/* Clean Room Engineering Background Images */}
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

        {/* Clean Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/75 via-blue-900/60 to-slate-900/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        
        {/* Simple Badge */}
        <div className="inline-flex items-center px-4 py-2 mb-6 bg-white/10 backdrop-blur-sm rounded-full border border-white/30">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
          <span className="text-sm font-medium text-white/90">25+ Yıl Deneyim</span>
        </div>

        {/* SEO Optimized Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="block text-white">
            Profesyonel
          </span>
          <span className="block bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Temiz Oda Sistemleri
          </span>
        </h1>
        
        <p className="text-lg md:text-xl mb-10 text-white/80 max-w-3xl mx-auto leading-relaxed">
          İlaç, sağlık ve elektronik sektörlerinde GMP uyumlu temiz oda sistemleri tasarlıyor ve kuruyoruz.
        </p>

        {/* CTA Buttons */}
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
            href="https://wa.me/905123456789?text=Merhaba, temiz oda sistemleri hakkında bilgi almak istiyorum." 
            target="_blank" 
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-green-600 hover:bg-green-700 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px]"
          >
            <div className="flex items-center justify-center">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </div>
          </a>
        </div>
      </div>

      {/* Simple Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-50">
        {cleanRoomImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white shadow-lg' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
    </section>
  );
}