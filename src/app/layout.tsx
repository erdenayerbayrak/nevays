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
  return (
    <html className={`${inter.variable} ${ibmPlex.variable}`} lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" />
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