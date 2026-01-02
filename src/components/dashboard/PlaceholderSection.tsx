import { AlertTriangle, Activity, History, Lock, CheckCircle2 } from 'lucide-react';
import { GlassCard } from '@/components/common/GlassCard';
import { cn } from '@/lib/utils';

// Map icon names to components
const iconMap: Record<string, React.ElementType> = {
  AlertTriangle,
  Activity,
  History,
  Lock,
};

interface PlaceholderSectionProps {
  icon: string;
  title: string;
  description: string;
  showStatus?: boolean;
  className?: string;
}

export function PlaceholderSection({
  icon,
  title,
  description,
  showStatus = false,
  className,
}: PlaceholderSectionProps) {
  const Icon = iconMap[icon] || AlertTriangle;

  return (
    <GlassCard className={cn('text-center py-8', className)}>
      <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-muted flex items-center justify-center">
        <Icon className="h-6 w-6 text-muted-foreground" />
      </div>
      <h3 className="font-medium mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
      
      {showStatus && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center justify-center gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 text-status-done" />
            <span className="text-muted-foreground">All systems operational</span>
          </div>
        </div>
      )}
    </GlassCard>
  );
}
