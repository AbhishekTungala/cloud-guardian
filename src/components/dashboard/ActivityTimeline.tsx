import { GlassCard } from '@/components/common/GlassCard';
import { ActivitySkeleton } from '@/components/common/SkeletonLoader';
import { mockActivity } from '@/data/mockData';
import { formatDistanceToNow } from 'date-fns';
import { 
  CheckCircle2, 
  RefreshCw, 
  Activity, 
  AlertTriangle,
  Clock
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Map activity types to icons and colors
const activityConfig = {
  task_created: { 
    icon: Clock, 
    color: 'text-primary bg-primary/10' 
  },
  task_updated: { 
    icon: RefreshCw, 
    color: 'text-status-progress bg-status-progress/10' 
  },
  task_completed: { 
    icon: CheckCircle2, 
    color: 'text-status-done bg-status-done/10' 
  },
  incident: { 
    icon: AlertTriangle, 
    color: 'text-priority-high bg-priority-high/10' 
  },
  system: { 
    icon: Activity, 
    color: 'text-muted-foreground bg-muted' 
  },
};

interface ActivityTimelineProps {
  isLoading?: boolean;
}

export function ActivityTimeline({ isLoading = false }: ActivityTimelineProps) {
  if (isLoading) {
    return (
      <GlassCard>
        <h3 className="font-semibold mb-4">Recent Activity</h3>
        <ActivitySkeleton />
      </GlassCard>
    );
  }

  return (
    <GlassCard>
      <h3 className="font-semibold mb-4">Recent Activity</h3>
      
      <div className="space-y-4">
        {mockActivity.map((item, index) => {
          const config = activityConfig[item.type];
          const Icon = config.icon;

          return (
            <div key={item.id} className="flex gap-3">
              {/* Icon */}
              <div className={cn(
                'w-8 h-8 rounded-full flex items-center justify-center shrink-0',
                config.color
              )}>
                <Icon className="h-4 w-4" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm">{item.message}</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {formatDistanceToNow(item.timestamp, { addSuffix: true })}
                </p>
              </div>

              {/* Timeline line */}
              {index < mockActivity.length - 1 && (
                <div className="absolute left-[18px] top-10 w-px h-[calc(100%-2.5rem)] bg-border" />
              )}
            </div>
          );
        })}
      </div>

      {/* Show more placeholder */}
      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-xs text-center text-muted-foreground">
          More activity history coming soon
        </p>
      </div>
    </GlassCard>
  );
}
