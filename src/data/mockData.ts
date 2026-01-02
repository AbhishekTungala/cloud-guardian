// Mock data for Cloud Self-Heal Platform
// This will be replaced with real API calls once backend is connected

export type TaskPriority = 'low' | 'medium' | 'high' | 'critical';
export type TaskStatus = 'pending' | 'in-progress' | 'done';

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface ActivityItem {
  id: string;
  type: 'task_created' | 'task_updated' | 'task_completed' | 'incident' | 'system';
  message: string;
  timestamp: Date;
}

// Initial sample tasks
export const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Configure monitoring alerts',
    description: 'Create alert rules for CPU, memory, disk, and HTTP errors.',
    priority: 'high',
    status: 'in-progress',
    createdAt: new Date(Date.now() - 86400000 * 2),
    updatedAt: new Date(Date.now() - 3600000),
  },
  {
    id: '2',
    title: 'Add auto-fix scripts',
    description: 'Set up basic remediation scripts (restart service, clean disk, scale up).',
    priority: 'medium',
    status: 'pending',
    createdAt: new Date(Date.now() - 86400000),
    updatedAt: new Date(Date.now() - 86400000),
  },
  {
    id: '3',
    title: 'Deploy health endpoints',
    description: 'Expose /health and /ready endpoints for backend services.',
    priority: 'critical',
    status: 'pending',
    createdAt: new Date(Date.now() - 43200000),
    updatedAt: new Date(Date.now() - 43200000),
  },
  {
    id: '4',
    title: 'Update documentation',
    description: 'Explain how monitoring and auto-healing work in this project.',
    priority: 'low',
    status: 'done',
    createdAt: new Date(Date.now() - 86400000 * 3),
    updatedAt: new Date(Date.now() - 86400000),
  },
];

// Sample activity timeline
export const mockActivity: ActivityItem[] = [
  {
    id: 'a1',
    type: 'task_created',
    message: 'Created initial tasks',
    timestamp: new Date(Date.now() - 86400000),
  },
  {
    id: 'a2',
    type: 'task_updated',
    message: 'Updated monitoring task',
    timestamp: new Date(Date.now() - 3600000),
  },
  {
    id: 'a3',
    type: 'system',
    message: 'Added placeholder health page',
    timestamp: new Date(Date.now() - 7200000),
  },
];

// Feature items for landing page
export const features = [
  {
    icon: 'Activity',
    title: 'Real-time Monitoring',
    description: 'Track system health with instant alerts and live dashboards.',
  },
  {
    icon: 'Zap',
    title: 'Auto-Fix Incidents',
    description: 'Automated responses resolve issues before they escalate.',
  },
  {
    icon: 'BarChart3',
    title: 'System Insights',
    description: 'Deep analytics on performance, uptime, and resource usage.',
  },
  {
    icon: 'Shield',
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with 99.9% uptime guarantee.',
  },
];
