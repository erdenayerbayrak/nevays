'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export default function Timeline({ items, className }: TimelineProps) {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const newSet = new Set([...prev, index]);
              return Array.from(newSet);
            });
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <div className={cn('relative', className)}>
      {/* Vertical Line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-primary" />

      <div className="space-y-8">
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className={cn(
              'relative pl-12 opacity-0 translate-y-4 transition-all duration-700 delay-200',
              visibleItems.includes(index) && 'opacity-100 translate-y-0'
            )}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            {/* Timeline Node */}
            <div className="absolute left-2.5 w-3 h-3 bg-brand-primary rounded-sm transform -translate-x-1/2 timeline-node" />

            {/* Content */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-3">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-primary bg-brand-primary/10 rounded-full">
                  {item.year}
                </span>
              </div>
              <h3 className="text-lg font-display font-heading text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}