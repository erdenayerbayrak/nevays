'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

interface AnalyticsProviderProps {
  children: React.ReactNode;
  gaId?: string;
  plausibleDomain?: string;
}

export default function AnalyticsProvider({ 
  children, 
  gaId,
  plausibleDomain 
}: AnalyticsProviderProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Google Analytics
    if (gaId && typeof window !== 'undefined') {
      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
      
      window.gtag('js', new Date());
      window.gtag('config', gaId, {
        anonymize_ip: true,
        cookie_flags: 'secure;samesite=strict',
      });

      // Load GA script
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      script.async = true;
      document.head.appendChild(script);
    }

    // Plausible Analytics
    if (plausibleDomain && typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.defer = true;
      script.src = 'https://plausible.io/js/script.js';
      script.dataset.domain = plausibleDomain;
      document.head.appendChild(script);
    }
  }, [gaId, plausibleDomain]);

  // Track page views
  useEffect(() => {
    if (gaId && typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', gaId, {
        page_path: pathname,
      });
    }
  }, [pathname, gaId]);

  return <>{children}</>;
}

// Analytics tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackConversion = (conversionId: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value: value,
    });
  }
};

export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submit', {
    form_name: formName,
  });
};

export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType,
  });
};

export const trackPageView = (pageName: string) => {
  trackEvent('page_view', {
    page_title: pageName,
  });
};