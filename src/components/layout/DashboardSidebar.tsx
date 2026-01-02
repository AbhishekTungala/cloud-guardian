import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Cloud,
  LayoutDashboard,
  ListTodo,
  AlertTriangle,
  Activity,
  History,
  Settings,
  ChevronLeft,
  ChevronRight,
  Lock,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface NavItem {
  icon: React.ElementType;
  label: string;
  href: string;
  disabled?: boolean;
  badge?: string;
}

const navItems: NavItem[] = [
  { icon: LayoutDashboard, label: 'Overview', href: '/dashboard' },
  { icon: ListTodo, label: 'Tasks', href: '/dashboard', badge: 'Active' },
  { icon: AlertTriangle, label: 'Incidents (locked)', href: '/dashboard', disabled: true },
  { icon: Activity, label: 'Health', href: '/health' },
  { icon: History, label: 'Auto-Fix History (locked)', href: '/dashboard', disabled: true },
  { icon: Settings, label: 'Admin (locked)', href: '/admin', disabled: true },
];

export function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside
      className={cn(
        'h-screen bg-sidebar text-sidebar-foreground border-r border-sidebar-border flex flex-col transition-all duration-300',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      {/* Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-sidebar-border">
        {!collapsed && (
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-1.5 rounded-lg gradient-bg group-hover:glow transition-all">
              <Cloud className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-bold">CloudHeal</span>
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            'text-sidebar-foreground hover:bg-sidebar-accent',
            collapsed && 'mx-auto'
          )}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-2 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href && !item.disabled;
          const Icon = item.icon;

          const linkContent = (
            <div
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200',
                isActive
                  ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent',
                item.disabled && 'opacity-50 cursor-not-allowed'
              )}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              {!collapsed && (
                <>
                  <span className="flex-1 text-sm font-medium">{item.label}</span>
                  {item.disabled && <Lock className="h-3.5 w-3.5" />}
                  {item.badge && !item.disabled && (
                    <span className="text-xs bg-sidebar-accent px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </div>
          );

          if (collapsed) {
            return (
              <Tooltip key={item.label} delayDuration={0}>
                <TooltipTrigger asChild>
                  {item.disabled ? (
                    <div>{linkContent}</div>
                  ) : (
                    <Link to={item.href}>{linkContent}</Link>
                  )}
                </TooltipTrigger>
                <TooltipContent side="right" className="flex items-center gap-2">
                  {item.label}
                  {item.disabled && <Lock className="h-3 w-3" />}
                </TooltipContent>
              </Tooltip>
            );
          }

          return item.disabled ? (
            <div key={item.label}>{linkContent}</div>
          ) : (
            <Link key={item.label} to={item.href}>
              {linkContent}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        {!collapsed ? (
          <div className="glass-card p-3 text-center">
            <p className="text-xs text-muted-foreground">
              All systems running in demo mode.
            </p>
          </div>
        ) : (
          <div className="h-2 w-2 mx-auto rounded-full bg-status-done" />
        )}
      </div>
    </aside>
  );
}
