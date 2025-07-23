'use client';

import { useState, useEffect } from 'react';
import { Cookie, X, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    
    localStorage.setItem('cookie-consent', JSON.stringify(newPreferences));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
    
    // Enable analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
      });
    }
  };

  const handleRejectAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    
    localStorage.setItem('cookie-consent', JSON.stringify(newPreferences));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
    
    // Update consent
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: preferences.analytics ? 'granted' : 'denied',
        ad_storage: preferences.marketing ? 'granted' : 'denied',
      });
    }
  };

  const handlePreferenceChange = (key: keyof CookiePreferences, value: boolean) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="container mx-auto px-4 py-6">
        {!showDetails ? (
          // Simple consent banner
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-start">
              <Cookie className="h-6 w-6 text-brand-primary mr-3 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Çerez Kullanımı
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Web sitemizde deneyiminizi iyileştirmek için çerezler kullanıyoruz. 
                  Siteyi kullanmaya devam ederek çerez kullanımını kabul etmiş olursunuz.
                  {' '}
                  <button
                    onClick={() => setShowDetails(true)}
                    className="text-brand-primary hover:underline"
                  >
                    Detayları görüntüle
                  </button>
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={handleRejectAll}
              >
                Reddet
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowDetails(true)}
              >
                <Settings className="h-4 w-4 mr-2" />
                Özelleştir
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={handleAcceptAll}
              >
                Tümünü Kabul Et
              </Button>
            </div>
          </div>
        ) : (
          // Detailed preferences
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Cookie className="h-5 w-5 mr-2 text-brand-primary" />
                Çerez Tercihleri
              </h3>
              <button
                onClick={() => setShowDetails(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Necessary Cookies */}
              <div className="flex items-start justify-between">
                <div className="flex-1 mr-4">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Gerekli Çerezler
                  </h4>
                  <p className="text-sm text-gray-600">
                    Web sitesinin temel işlevleri için gerekli çerezler. 
                    Bu çerezler devre dışı bırakılamaz.
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 mr-2">Zorunlu</span>
                  <div className="w-10 h-6 bg-brand-primary rounded-full relative">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start justify-between">
                <div className="flex-1 mr-4">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Analitik Çerezler
                  </h4>
                  <p className="text-sm text-gray-600">
                    Web site kullanımını anlamamıza yardımcı olan çerezler. 
                    Bu bilgiler anonim olarak toplanır.
                  </p>
                </div>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => handlePreferenceChange('analytics', e.target.checked)}
                    className="sr-only"
                  />
                  <div className={cn(
                    'w-10 h-6 rounded-full transition-colors duration-200',
                    preferences.analytics ? 'bg-brand-primary' : 'bg-gray-300'
                  )}>
                    <div className={cn(
                      'w-4 h-4 bg-white rounded-full transition-transform duration-200 mt-1',
                      preferences.analytics ? 'translate-x-5' : 'translate-x-1'
                    )} />
                  </div>
                </label>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between">
                <div className="flex-1 mr-4">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Pazarlama Çerezleri
                  </h4>
                  <p className="text-sm text-gray-600">
                    Size daha uygun reklamlar göstermek için kullanılan çerezler.
                  </p>
                </div>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => handlePreferenceChange('marketing', e.target.checked)}
                    className="sr-only"
                  />
                  <div className={cn(
                    'w-10 h-6 rounded-full transition-colors duration-200',
                    preferences.marketing ? 'bg-brand-primary' : 'bg-gray-300'
                  )}>
                    <div className={cn(
                      'w-4 h-4 bg-white rounded-full transition-transform duration-200 mt-1',
                      preferences.marketing ? 'translate-x-5' : 'translate-x-1'
                    )} />
                  </div>
                </label>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
              <Button
                variant="outline"
                onClick={handleRejectAll}
              >
                Tümünü Reddet
              </Button>
              <Button
                variant="primary"
                onClick={handleSavePreferences}
              >
                Tercihleri Kaydet
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}