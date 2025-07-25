'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface EnhancedButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  animate?: boolean;
  href?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function EnhancedButton({
  variant = 'primary',
  size = 'md',
  children,
  icon: Icon,
  iconPosition = 'right',
  loading = false,
  animate = true,
  href,
  className,
  disabled,
  onClick,
  type = 'button'
}: EnhancedButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white shadow-lg hover:shadow-xl focus:ring-primary-500',
    secondary: 'bg-gradient-to-r from-secondary-600 to-secondary-700 hover:from-secondary-700 hover:to-secondary-800 text-white shadow-lg hover:shadow-xl focus:ring-secondary-500',
    accent: 'bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white shadow-lg hover:shadow-xl focus:ring-accent-500',
    outline: 'border-2 border-primary-600 text-primary-700 hover:bg-primary-50 hover:border-primary-700 focus:ring-primary-500',
    ghost: 'text-primary-700 hover:bg-primary-50 hover:text-primary-800 focus:ring-primary-500'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  // Enhanced hover effects without framer-motion
  const hoverClasses = animate ? 'hover:scale-105 hover:-translate-y-1 active:scale-95' : '';

  const buttonClasses = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    hoverClasses,
    className
  );

  const content = (
    <>
      {loading && (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      
      {Icon && iconPosition === 'left' && !loading && (
        <Icon className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
      )}
      
      <span>{children}</span>
      
      {Icon && iconPosition === 'right' && !loading && (
        <Icon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={cn(buttonClasses, 'group')}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={cn(buttonClasses, 'group')}
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
    >
      {content}
    </button>
  );
}

// Floating Action Button variant
interface FloatingButtonProps {
  icon: LucideIcon;
  onClick?: () => void;
  variant?: 'primary' | 'accent' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  ariaLabel?: string;
}

export function FloatingButton({
  icon: Icon,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  ariaLabel,
}: FloatingButtonProps) {
  const variants = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg',
    accent: 'bg-accent-500 hover:bg-accent-600 text-white shadow-lg',
    white: 'bg-white hover:bg-neutral-50 text-neutral-700 shadow-lg border border-neutral-200'
  };

  const sizes = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-14 h-14'
  };

  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        'fixed bottom-6 right-6 z-50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
        variants[variant],
        sizes[size],
        className
      )}
      aria-label={ariaLabel}
    >
      <Icon className={iconSizes[size]} />
    </button>
  );
}