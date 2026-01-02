import { useState, useCallback } from 'react';
import { Task, TaskPriority, TaskStatus, initialTasks } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

// Custom hook for task management with local state
// Designed to be easily swapped for API calls later
export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Add a new task
  const addTask = useCallback((
    title: string,
    description: string,
    priority: TaskPriority
  ) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      priority,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    setTasks(prev => [newTask, ...prev]);
    toast({
      title: 'Task created',
      description: `"${title}" has been added to your tasks.`,
    });
    
    return newTask;
  }, [toast]);

  // Update task status
  const updateTaskStatus = useCallback((taskId: string, status: TaskStatus) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === taskId 
          ? { ...task, status, updatedAt: new Date() }
          : task
      )
    );

    const statusLabels: Record<TaskStatus, string> = {
      'pending': 'Pending',
      'in-progress': 'In Progress',
      'done': 'Done',
    };

    toast({
      title: 'Task updated',
      description: `Status changed to ${statusLabels[status]}.`,
    });
  }, [toast]);

  // Update task details
  const updateTask = useCallback((
    taskId: string,
    updates: Partial<Pick<Task, 'title' | 'description' | 'priority'>>
  ) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === taskId 
          ? { ...task, ...updates, updatedAt: new Date() }
          : task
      )
    );

    toast({
      title: 'Task updated',
      description: 'Your changes have been saved.',
    });
  }, [toast]);

  // Delete a task
  const deleteTask = useCallback((taskId: string) => {
    const task = tasks.find(t => t.id === taskId);
    setTasks(prev => prev.filter(t => t.id !== taskId));

    toast({
      title: 'Task deleted',
      description: task ? `"${task.title}" has been removed.` : 'Task removed.',
      variant: 'destructive',
    });
  }, [tasks, toast]);

  // Simulate loading state (for demo purposes)
  const refreshTasks = useCallback(async () => {
    setIsLoading(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    setIsLoading(false);
  }, []);

  return {
    tasks,
    isLoading,
    addTask,
    updateTask,
    updateTaskStatus,
    deleteTask,
    refreshTasks,
  };
}
