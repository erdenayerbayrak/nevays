'use client';

import { Phone, MessageCircle, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from './button';

export default function StickyContactBar() {
  const t = useTranslations('stickyBar');

  const handleCall = () => {
    window.open('tel:+902121234567', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/902121234567', '_blank');
  };

  const handleQuote = () => {
    // Scroll to contact form or open contact modal
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky-contact-bar md:hidden">
      <Button
        variant="ghost"
        size="sm"
        onClick={handleCall}
        className="flex flex-col items-center justify-center text-xs text-gray-700 hover:text-brand-primary hover:bg-brand-primary/10"
      >
        <Phone className="h-4 w-4 mb-1" />
        {t('call')}
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={handleWhatsApp}
        className="flex flex-col items-center justify-center text-xs text-gray-700 hover:text-brand-secondary hover:bg-brand-secondary/10"
      >
        <MessageCircle className="h-4 w-4 mb-1" />
        {t('whatsapp')}
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={handleQuote}
        className="flex flex-col items-center justify-center text-xs text-gray-700 hover:text-brand-primary hover:bg-brand-primary/10"
      >
        <Mail className="h-4 w-4 mb-1" />
        {t('quote')}
      </Button>
    </div>
  );
}