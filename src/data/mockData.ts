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
    description: 'Set up real-time monitoring alerts for critical system metrics',
    priority: 'high',
    status: 'in-progress',
    createdAt: new Date(Date.now() - 86400000 * 2),
    updatedAt: new Date(Date.now() - 3600000),
  },
  {
    id: '2',
    title: 'Review auto-fix policies',
    description: 'Audit and update automated incident resolution policies',
    priority: 'medium',
    status: 'pending',
    createdAt: new Date(Date.now() - 86400000),
    updatedAt: new Date(Date.now() - 86400000),
  },
  {
    id: '3',
    title: 'Deploy health check endpoints',
    description: 'Implement /health and /ready endpoints for all microservices',
    priority: 'critical',
    status: 'pending',
    createdAt: new Date(Date.now() - 43200000),
    updatedAt: new Date(Date.now() - 43200000),
  },
  {
    id: '4',
    title: 'Update documentation',
    description: 'Document the new self-healing workflow procedures',
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
    type: 'task_completed',
    message: 'Documentation update completed',
    timestamp: new Date(Date.now() - 86400000),
  },
  {
    id: 'a2',
    type: 'task_updated',
    message: 'Monitoring alerts task moved to In Progress',
    timestamp: new Date(Date.now() - 3600000),
  },
  {
    id: 'a3',
    type: 'system',
    message: 'System health check passed',
    timestamp: new Date(Date.now() - 7200000),
  },
  {
    id: 'a4',
    type: 'incident',
    message: 'Minor latency spike detected and auto-resolved',
    timestamp: new Date(Date.now() - 14400000),
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
