'use client';

import Image from 'next/image';
import Section from '@/components/ui/section';

const clients = [
  { name: 'Pfizer', logo: '/images/clients/pfizer.png' },
  { name: 'Zoetis', logo: '/images/clients/zoetis.png' },
  { name: 'Novartis', logo: '/images/clients/novartis.png' },
  { name: 'Roche', logo: '/images/clients/roche.png' },
  { name: 'Bayer', logo: '/images/clients/bayer.png' },
  { name: 'Johnson & Johnson', logo: '/images/clients/jnj.png' },
  { name: 'AstraZeneca', logo: '/images/clients/astrazeneca.png' },
  { name: 'GSK', logo: '/images/clients/gsk.png' },
  { name: 'Merck', logo: '/images/clients/merck.png' },
  { name: 'Sanofi', logo: '/images/clients/sanofi.png' },
];

export default function ClientsSection() {
  return (
    <Section background="light">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-heading text-gray-900 mb-4">
          Güvenilen Partner
        </h2>
        <p className="text-lg text-gray-600">
          Dünya çapında lider firmaların tercihi
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee">
          {/* First set of logos */}
          {clients.map((client, index) => (
            <div
              key={`first-${index}`}
              className="flex-none w-48 h-24 mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={160}
                height={80}
                className="max-w-full max-h-full object-contain filter brightness-0 hover:brightness-100 transition-all duration-300"
              />
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {clients.map((client, index) => (
            <div
              key={`second-${index}`}
              className="flex-none w-48 h-24 mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={160}
                height={80}
                className="max-w-full max-h-full object-contain filter brightness-0 hover:brightness-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-neutral-light to-transparent z-10" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-neutral-light to-transparent z-10" />
      </div>

    </Section>
  );
}