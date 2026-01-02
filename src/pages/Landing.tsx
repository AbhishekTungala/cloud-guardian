import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Zap, BarChart3, Shield, Cloud, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/common/GlassCard';
import { features } from '@/data/mockData';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

// Map icon names to components
const iconMap: Record<string, React.ElementType> = {
  Activity,
  Zap,
  BarChart3,
  Shield,
};

export default function Landing() {
  return (
    <div className="min-h-screen page-enter flex flex-col items-center justify-center pt-20">
      {/* Hero Section */}
      <section className="relative w-full flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* New Background Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/30 text-muted-foreground text-[11px] font-medium mb-12 border border-border/40 backdrop-blur-sm">
              <Sparkles className="h-3 w-3" />
              <span>Intelligent Cloud Operations Platform</span>
            </div>

            {/* Main headline */}
            <div className="flex flex-col gap-2 mb-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight text-foreground">
                Automated Monitoring.
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight text-foreground">
                Self-Healing Systems.
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight text-muted-foreground">
                Zero Panic.
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-[14px] md:text-[15px] text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
              “Let your infrastructure take care of itself. This platform automatically detects failures, applies safe fixes, and keeps services stable while providing full visibility and control — without hype or magic.”
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button 
                size="sm" 
                className="bg-foreground text-background hover:bg-foreground/90 text-[13px] px-8 h-10 rounded-full font-medium"
                data-testid="button-get-started"
              >
                Get Started
              </Button>
              
              <Button 
                size="sm" 
                variant="outline"
                className="bg-muted/10 border-border/40 text-muted-foreground hover:text-foreground text-[13px] px-8 h-10 rounded-full font-medium backdrop-blur-sm"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
