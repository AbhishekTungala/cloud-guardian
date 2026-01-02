import { cn } from '@/lib/utils';

interface SkeletonLoaderProps {
  className?: string;
  variant?: 'text' | 'card' | 'avatar' | 'button';
}

// Skeleton loader for content placeholders
export function SkeletonLoader({ className, variant = 'text' }: SkeletonLoaderProps) {
  const variants = {
    text: 'h-4 w-full',
    card: 'h-32 w-full rounded-xl',
    avatar: 'h-10 w-10 rounded-full',
    button: 'h-10 w-24 rounded-lg',
  };

  return (
    <div 
      className={cn(
        'skeleton-shimmer rounded-md',
        variants[variant],
        className
      )}
    />
  );
}

// Pre-built skeleton for task card
export function TaskCardSkeleton() {
  return (
    <div className="glass-card p-4 space-y-3">
      <div className="flex items-start justify-between">
        <div className="space-y-2 flex-1">
          <SkeletonLoader className="h-5 w-3/4" />
          <SkeletonLoader className="h-4 w-1/2" />
        </div>
        <SkeletonLoader variant="button" className="w-16" />
      </div>
      <SkeletonLoader className="h-4 w-full" />
      <div className="flex items-center gap-2">
        <SkeletonLoader className="h-6 w-20 rounded-full" />
        <SkeletonLoader className="h-6 w-16 rounded-full" />
      </div>
    </div>
  );
}

// Skeleton for activity timeline
export function ActivitySkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map(i => (
        <div key={i} className="flex items-start gap-3">
          <SkeletonLoader variant="avatar" className="w-8 h-8" />
          <div className="flex-1 space-y-2">
            <SkeletonLoader className="h-4 w-full" />
            <SkeletonLoader className="h-3 w-24" />
          </div>
        </div>
      ))}
    </div>
  );
}
