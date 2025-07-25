'use client';

import { useEffect, useRef } from 'react';

// Scroll-triggered animation hook
export function useScrollAnimation(threshold = 0.1) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('animate-fade-in-up');
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return elementRef;
}

// Stagger animation for multiple elements
export function useStaggerAnimation(delay = 100) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLElement[];
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-fade-in-up');
            }, index * delay);
          });
          observer.unobserve(container);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [delay]);

  return containerRef;
}

// Enhanced card hover effects
export const cardHoverClasses = `
  group cursor-pointer transition-all duration-500 ease-out
  hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl
  transform-gpu will-change-transform
`;

// Button press animation
export const buttonPressClasses = `
  transition-all duration-200 ease-out
  hover:scale-105 hover:-translate-y-1 hover:shadow-lg
  active:scale-95 active:translate-y-0
  transform-gpu will-change-transform
`;

// Smooth entrance animations
export const entranceAnimations = {
  fadeIn: 'animate-fade-in',
  fadeInUp: 'animate-fade-in-up',
  slideInLeft: 'animate-slide-in-left',
  slideInRight: 'animate-slide-in-right',
  scaleIn: 'animate-scale-in'
};

// Enhanced micro-interactions
export const microInteractions = {
  iconHover: 'transition-transform duration-300 hover:scale-110 hover:rotate-3',
  textHover: 'transition-colors duration-300 hover:text-primary-600',
  linkHover: 'group-hover:translate-x-1 transition-transform duration-300',
  pulseActive: 'animate-pulse',
  bounceOnce: 'animate-bounce-once'
};

// Performance-optimized animation utility
export function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fadeInUp',
  delay = 0 
}: {
  children: React.ReactNode;
  className?: string;
  animation?: keyof typeof entranceAnimations;
  delay?: number;
}) {
  const ref = useScrollAnimation();

  return (
    <div 
      ref={ref}
      className={`opacity-0 ${className}`}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </div>
  );
}

// Staggered children container
export function StaggerContainer({ 
  children, 
  className = '', 
  staggerDelay = 100 
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const ref = useStaggerAnimation(staggerDelay);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// Magnetic button effect
export function MagneticButton({ 
  children, 
  className = '',
  strength = 0.3 
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      button.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };

    const handleMouseLeave = () => {
      button.style.transform = 'translate(0, 0)';
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return (
    <button 
      ref={buttonRef}
      className={`transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </button>
  );
}

// Parallax scroll effect
export function useParallax(speed = 0.5) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * speed;
      
      element.style.transform = `translate3d(0, ${rate}px, 0)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return elementRef;
}

// Enhanced loading states
export const loadingAnimations = {
  skeleton: 'animate-pulse bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200',
  spinner: 'animate-spin h-5 w-5 border-2 border-primary-600 border-t-transparent rounded-full',
  dots: 'animate-bounce',
  shimmer: 'loading-shimmer'
};

// Global animation keyframes (to be added to CSS)
export const globalAnimationCSS = `
@keyframes bounce-once {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes scale-in {
  0% { 
    opacity: 0;
    transform: scale(0.8);
  }
  100% { 
    opacity: 1;
    transform: scale(1);
  }
}

.animate-bounce-once {
  animation: bounce-once 0.6s ease-out;
}

.animate-scale-in {
  animation: scale-in 0.5s ease-out;
}

/* Performance optimizations */
.transform-gpu {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

.will-change-transform {
  will-change: transform;
}
`;

export default {
  useScrollAnimation,
  useStaggerAnimation,
  AnimatedSection,
  StaggerContainer,
  MagneticButton,
  useParallax,
  cardHoverClasses,
  buttonPressClasses,
  microInteractions,
  loadingAnimations
};