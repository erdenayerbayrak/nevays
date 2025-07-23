'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DivisionCardProps {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

export default function DivisionCard({
  title,
  description,
  href,
  imageSrc,
  imageAlt,
  className,
}: DivisionCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className={cn(
        'group relative block overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl',
        'transform hover:scale-103',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={cn(
            'object-cover transition-transform duration-500',
            isHovered ? 'scale-110' : 'scale-100'
          )}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Gradient Overlay */}
        <div
          className={cn(
            'absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300',
            isHovered ? 'opacity-80' : 'opacity-60'
          )}
        />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-display font-heading mb-2">
                {title}
              </h3>
              <p className="text-sm text-white/90 line-clamp-2">
                {description}
              </p>
            </div>
            <ArrowRight
              className={cn(
                'h-5 w-5 transition-transform duration-300',
                isHovered ? 'translate-x-1' : 'translate-x-0'
              )}
            />
          </div>
        </div>
      </div>

      {/* Bottom section with brand accent */}
      <div className="p-4 bg-gradient-to-r from-brand-primary to-brand-secondary">
        <div className="h-1 w-12 bg-white/30 rounded-full mx-auto" />
      </div>
    </Link>
  );
}