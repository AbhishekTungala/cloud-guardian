import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

// Reusable glassmorphism card component
export function GlassCard({ 
  children, 
  className,
  hover = false,
  glow = false,
}: GlassCardProps) {
  return (
    <div 
      className={cn(
        'glass-card p-6',
        hover && 'transition-all duration-300 hover:scale-[1.02] hover:shadow-lg',
        glow && 'glow',
        className
      )}
    >
      {children}
    </div>
  );
}
