'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface StatisticBlockProps {
  value: number;
  label: string;
  suffix?: string;
  className?: string;
  duration?: number;
}

export default function StatisticBlock({
  value,
  label,
  suffix = '',
  className,
  duration = 2000,
}: StatisticBlockProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          startCountAnimation();
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const startCountAnimation = () => {
    const startTime = Date.now();
    const startValue = 0;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (value - startValue) * easeOutQuart);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(updateCount);
  };

  return (
    <div
      ref={elementRef}
      className={cn(
        'text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300',
        className
      )}
    >
      <div className="text-3xl lg:text-4xl font-display font-heading text-brand-primary mb-2">
        {count.toLocaleString()}
        {suffix && <span className="text-brand-secondary">{suffix}</span>}
      </div>
      <div className="text-sm lg:text-base text-gray-600 font-medium">
        {label}
      </div>
    </div>
  );
}