'use client';

import { Phone, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function StickyContactBar() {
  const t = useTranslations('stickyBar');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsVisible(scrollPosition > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 h-14 bg-white/95 backdrop-blur-md border-t border-gray-200 flex items-center justify-around z-50 shadow-lg">
      <Link
        href="tel:+902164720612"
        className="flex-1 h-full flex items-center justify-center gap-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
      >
        <Phone className="h-4 w-4" />
        <span>{t('call')}</span>
      </Link>
      
      <div className="w-px h-8 bg-gray-200" />
      
      <Link
        href="https://wa.me/905301234567"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 h-full flex items-center justify-center gap-2 text-sm font-medium text-green-600 hover:bg-green-50 transition-colors"
      >
        <MessageSquare className="h-4 w-4" />
        <span>{t('whatsapp')}</span>
      </Link>
      
      <div className="w-px h-8 bg-gray-200" />
      
      <Link
        href="/contact"
        className="flex-1 h-full flex items-center justify-center gap-2 text-sm font-medium text-brand-primary hover:bg-brand-primary/5 transition-colors"
      >
        <span>{t('quote')}</span>
      </Link>
    </div>
  );
}