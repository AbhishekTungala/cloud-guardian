import { cn } from '@/lib/utils';
import { TaskStatus, TaskPriority } from '@/data/mockData';

interface StatusBadgeProps {
  status: TaskStatus;
  className?: string;
}

// Status badge component with semantic colors
export function StatusBadge({ status, className }: StatusBadgeProps) {
  const statusConfig: Record<TaskStatus, { label: string; className: string }> = {
    'pending': {
      label: 'Pending',
      className: 'bg-muted text-muted-foreground',
    },
    'in-progress': {
      label: 'In Progress',
      className: 'bg-status-progress/15 text-status-progress',
    },
    'done': {
      label: 'Done',
      className: 'bg-status-done/15 text-status-done',
    },
  };

  const config = statusConfig[status];

  return (
    <span 
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}

interface PriorityIndicatorProps {
  priority: TaskPriority;
  showLabel?: boolean;
  className?: string;
}

// Priority indicator with color-coded dot
export function PriorityIndicator({ 
  priority, 
  showLabel = false,
  className 
}: PriorityIndicatorProps) {
  const priorityConfig: Record<TaskPriority, { label: string; className: string }> = {
    'low': {
      label: 'Low',
      className: 'bg-priority-low',
    },
    'medium': {
      label: 'Medium',
      className: 'bg-priority-medium',
    },
    'high': {
      label: 'High',
      className: 'bg-priority-high',
    },
    'critical': {
      label: 'Critical',
      className: 'bg-priority-critical',
    },
  };

  const config = priorityConfig[priority];

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span className={cn('w-2 h-2 rounded-full', config.className)} />
      {showLabel && (
        <span className="text-xs text-muted-foreground">{config.label}</span>
      )}
    </div>
  );
}
