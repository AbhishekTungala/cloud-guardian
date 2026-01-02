import { useState } from 'react';
import { Plus, Search, Filter, RefreshCw } from 'lucide-react';
import { DashboardSidebar } from '@/components/layout/DashboardSidebar';
import { GlassCard } from '@/components/common/GlassCard';
import { TaskList } from '@/components/dashboard/TaskList';
import { TaskForm } from '@/components/dashboard/TaskForm';
import { ActivityTimeline } from '@/components/dashboard/ActivityTimeline';
import { PlaceholderSection } from '@/components/dashboard/PlaceholderSection';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useTasks } from '@/hooks/useTasks';
import { TaskStatus, TaskPriority } from '@/data/mockData';

export default function Dashboard() {
  const { tasks, isLoading, addTask, updateTaskStatus, deleteTask, refreshTasks } = useTasks();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<TaskStatus | 'all'>('all');
  const [priorityFilter, setPriorityFilter] = useState<TaskPriority | 'all'>('all');

  // Filter tasks based on search and filters
  const filteredTasks = tasks.filter(task => {
    const matchesSearch = 
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || task.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || task.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const handleAddTask = (title: string, description: string, priority: TaskPriority) => {
    addTask(title, description, priority);
    setDialogOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-6 lg:p-8 page-enter">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">
                Manage tasks and monitor system health
              </p>
            </div>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button className="gradient-bg hover:glow transition-all duration-300">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Task
                </Button>
              </DialogTrigger>
              <DialogContent className="glass-card border-0">
                <DialogHeader>
                  <DialogTitle>Create New Task</DialogTitle>
                </DialogHeader>
                <TaskForm onSubmit={handleAddTask} />
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Tasks */}
            <div className="lg:col-span-2 space-y-6">
              {/* Filters */}
              <GlassCard className="p-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search tasks..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select 
                    value={statusFilter} 
                    onValueChange={(v) => setStatusFilter(v as TaskStatus | 'all')}
                  >
                    <SelectTrigger className="w-full sm:w-36">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="done">Done</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select 
                    value={priorityFilter} 
                    onValueChange={(v) => setPriorityFilter(v as TaskPriority | 'all')}
                  >
                    <SelectTrigger className="w-full sm:w-36">
                      <SelectValue placeholder="Priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Priority</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="critical">Critical</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={refreshTasks}
                    className={isLoading ? 'animate-spin' : ''}
                  >
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
              </GlassCard>

              {/* Task List */}
              <TaskList
                tasks={filteredTasks}
                isLoading={isLoading}
                onStatusChange={updateTaskStatus}
                onDelete={deleteTask}
              />

              {/* Placeholder Sections */}
              <div className="grid sm:grid-cols-2 gap-4">
                <PlaceholderSection
                  icon="AlertTriangle"
                  title="Incidents"
                  description="Incident monitoring coming soon"
                />
                <PlaceholderSection
                  icon="History"
                  title="Auto-Fix History"
                  description="Resolution timeline coming soon"
                />
              </div>
            </div>

            {/* Right Column - Activity & Health */}
            <div className="space-y-6">
              <ActivityTimeline />
              
              <PlaceholderSection
                icon="Activity"
                title="System Health"
                description="Health metrics coming soon"
                showStatus
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
