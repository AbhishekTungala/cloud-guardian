import { Lock, Bell, Settings } from 'lucide-react';
import { GlassCard } from '@/components/common/GlassCard';
import { Button } from '@/components/ui/button';

export default function Admin() {
  return (
    <div className="min-h-screen pt-20 pb-12 page-enter">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <GlassCard className="text-center py-16">
            {/* Lock icon */}
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl gradient-bg flex items-center justify-center">
              <Lock className="h-10 w-10 text-primary-foreground" />
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold mb-3">Admin Area Coming Soon</h1>
            
            {/* Description */}
            <p className="text-muted-foreground max-w-md mx-auto mb-8">
              Advanced monitoring, incident logs, cost insights, and system configuration 
              will be available here once you're authenticated.
            </p>

            {/* Features preview */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-lg bg-muted/50">
                <Settings className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Monitoring</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <Bell className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Incident Logs</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <svg className="h-6 w-6 mx-auto mb-2 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                <p className="text-sm font-medium">Cost Insights</p>
              </div>
            </div>

            {/* Notify button */}
            <Button 
              variant="outline" 
              className="gap-2"
              onClick={() => {
                // Placeholder - would trigger notification signup
              }}
            >
              <Bell className="h-4 w-4" />
              Notify Me When Ready
            </Button>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
