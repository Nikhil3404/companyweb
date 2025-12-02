import { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'fade-in';
  delay?: number;
  className?: string;
}

export const AnimatedSection = ({
  children,
  animation = 'fade-in-up',
  delay = 0,
  className = ''
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`${className} ${!isVisible ? 'opacity-0' : `animate-${animation}`}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
