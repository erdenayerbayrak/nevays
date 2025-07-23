import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'light' | 'dark';
  id?: string;
}

export default function Section({ 
  children, 
  className, 
  background = 'default',
  id 
}: SectionProps) {
  const backgroundClasses = {
    default: 'bg-white',
    light: 'bg-neutral-light',
    dark: 'bg-brand-dark text-white',
  };

  return (
    <section 
      id={id}
      className={cn(
        'section-padding',
        backgroundClasses[background],
        className
      )}
    >
      <div className="container mx-auto container-padding">
        {children}
      </div>
    </section>
  );
}