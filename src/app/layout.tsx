import { Inter, IBM_Plex_Sans } from 'next/font/google';
import AnalyticsProvider from '@/components/analytics/analytics-provider';
import CookieConsent from '@/components/analytics/cookie-consent';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'optional'
});

const ibmPlex = IBM_Plex_Sans({ 
  weight: '600',
  subsets: ['latin'],
  variable: '--font-ibm-plex',
  display: 'optional'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NEVAYS Cleanroom Systems',
    alternateName: 'NEVAYS Temiz Oda Sistemleri',
    url: 'https://nevays.com',
    logo: 'https://nevays.com/logo.png',
    description: 'Profesyonel temiz oda sistemleri, cleanroom kurulumu ve laboratuvar sistemleri. 25+ yıl deneyim ile GMP uyumlu çözümler.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'TR',
      addressLocality: 'İstanbul'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+90-512-345-6789',
      contactType: 'customer service',
      availableLanguage: ['Turkish', 'English']
    },
    sameAs: [
      'https://linkedin.com/company/nevays'
    ],
    foundingDate: '1999',
    numberOfEmployees: '150',
    slogan: 'Profesyonel Temiz Oda Sistemleri',
    knowsAbout: [
      'Cleanroom Systems',
      'Temiz Oda Kurulumu',
      'Laboratory Installation',
      'HVAC Systems',
      'GMP Compliance',
      'ISO 14644',
      'Pharmaceutical Cleanrooms',
      'Modular Cleanrooms'
    ],
    serviceArea: {
      '@type': 'Country',
      name: ['Turkey', 'Europe', 'Middle East']
    }
  };

  return (
    <html className={`${inter.variable} ${ibmPlex.variable}`} lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <AnalyticsProvider
          gaId={process.env.NEXT_PUBLIC_GA_ID}
          plausibleDomain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
        >
          {children}
          <CookieConsent />
        </AnalyticsProvider>
      </body>
    </html>
  );
}