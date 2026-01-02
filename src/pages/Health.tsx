import { CheckCircle2, RefreshCw, Server, Database, Globe } from 'lucide-react';
import { GlassCard } from '@/components/common/GlassCard';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface ServiceStatus {
  name: string;
  icon: React.ElementType;
  status: 'operational' | 'degraded' | 'down';
}

const services: ServiceStatus[] = [
  { name: 'API Gateway', icon: Globe, status: 'operational' },
  { name: 'Database', icon: Database, status: 'operational' },
  { name: 'Core Services', icon: Server, status: 'operational' },
];

export default function Health() {
  const [lastChecked, setLastChecked] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simulate health check
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLastChecked(new Date());
    setIsRefreshing(false);
  };

  // Auto-refresh simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLastChecked(new Date());
    }, 30000); // Update timestamp every 30s

    return () => clearInterval(interval);
  }, []);

  const statusColors = {
    operational: 'text-status-done bg-status-done/10',
    degraded: 'text-status-progress bg-status-progress/10',
    down: 'text-status-critical bg-status-critical/10',
  };

  const allOperational = services.every(s => s.status === 'operational');

  return (
    <div className="min-h-screen pt-20 pb-12 page-enter">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Main status card */}
          <GlassCard className="text-center py-12">
            <div className={cn(
              'w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center',
              allOperational ? 'bg-status-done/20' : 'bg-status-progress/20'
            )}>
              <CheckCircle2 className={cn(
                'h-10 w-10',
                allOperational ? 'text-status-done' : 'text-status-progress'
              )} />
            </div>

            <h1 className="text-2xl font-bold mb-2">
              System Health (Demo)
            </h1>
            
            <p className="text-muted-foreground mb-6">
              All systems operational — demo values only.
            </p>

            <Button
              variant="outline"
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="gap-2"
            >
              <RefreshCw className={cn('h-4 w-4', isRefreshing && 'animate-spin')} />
              {isRefreshing ? 'Checking...' : 'Refresh Status'}
            </Button>
          </GlassCard>

          {/* Service status list */}
          <GlassCard>
            <h2 className="font-semibold mb-4">Service Status</h2>
            <div className="space-y-3">
              {services.map(service => {
                const Icon = service.icon;
                return (
                  <div 
                    key={service.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                        <Icon className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <span className="font-medium">{service.name}</span>
                    </div>
                    <div className={cn(
                      'flex items-center gap-2 px-3 py-1.5 rounded-full text-sm',
                      statusColors[service.status]
                    )}>
                      <div className={cn(
                        'w-2 h-2 rounded-full',
                        service.status === 'operational' && 'bg-status-done',
                        service.status === 'degraded' && 'bg-status-progress',
                        service.status === 'down' && 'bg-status-critical'
                      )} />
                      <span className="capitalize">{service.status}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </GlassCard>

          {/* Info card */}
          <GlassCard className="text-center py-6">
            <p className="text-sm text-muted-foreground mb-2">
              This page will connect to real backend health checks later.
            </p>
            <p className="text-xs text-muted-foreground/60 italic">
              This data is simulated for now.
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
