import { MoreHorizontal, Trash2, CheckCircle2, Clock, Circle } from 'lucide-react';
import { Task, TaskStatus } from '@/data/mockData';
import { GlassCard } from '@/components/common/GlassCard';
import { StatusBadge, PriorityIndicator } from '@/components/common/StatusBadge';
import { TaskCardSkeleton } from '@/components/common/SkeletonLoader';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { formatDistanceToNow } from 'date-fns';
import { cn } from '@/lib/utils';

interface TaskListProps {
  tasks: Task[];
  isLoading: boolean;
  onStatusChange: (taskId: string, status: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

export function TaskList({ tasks, isLoading, onStatusChange, onDelete }: TaskListProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map(i => (
          <TaskCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <GlassCard className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
          <CheckCircle2 className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-medium mb-2">No tasks found</h3>
        <p className="text-muted-foreground text-sm">
          Add your first task to get started, or adjust your filters.
        </p>
      </GlassCard>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

interface TaskCardProps {
  task: Task;
  onStatusChange: (taskId: string, status: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

function TaskCard({ task, onStatusChange, onDelete }: TaskCardProps) {
  const statusActions: { status: TaskStatus; label: string; icon: React.ElementType }[] = [
    { status: 'pending', label: 'Mark Pending', icon: Circle },
    { status: 'in-progress', label: 'Mark In Progress', icon: Clock },
    { status: 'done', label: 'Mark Done', icon: CheckCircle2 },
  ];

  return (
    <GlassCard 
      hover 
      className={cn(
        'p-4 transition-all duration-300',
        task.status === 'done' && 'opacity-70'
      )}
    >
      <div className="flex items-start gap-4">
        {/* Priority indicator */}
        <PriorityIndicator priority={task.priority} className="mt-1.5" />

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 
              className={cn(
                'font-medium truncate',
                task.status === 'done' && 'line-through text-muted-foreground'
              )}
            >
              {task.title}
            </h3>
            <StatusBadge status={task.status} />
          </div>

          {task.description && (
            <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
              {task.description}
            </p>
          )}

          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="capitalize">{task.priority} priority</span>
            <span>•</span>
            <span>Updated {formatDistanceToNow(task.updatedAt, { addSuffix: true })}</span>
          </div>
        </div>

        {/* Actions */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="shrink-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            {statusActions.map(action => (
              <DropdownMenuItem
                key={action.status}
                onClick={() => onStatusChange(task.id, action.status)}
                disabled={task.status === action.status}
              >
                <action.icon className="h-4 w-4 mr-2" />
                {action.label}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => onDelete(task.id)}
              className="text-destructive focus:text-destructive"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete Task
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </GlassCard>
  );
}
