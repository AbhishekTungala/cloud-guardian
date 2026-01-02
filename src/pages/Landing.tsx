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
              <span>New Background</span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-10 leading-[1.1] tracking-tight text-foreground">
              Minimal plasma waves<br />
              that soothe the eyes
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button 
                size="sm" 
                className="bg-foreground text-background hover:bg-foreground/90 text-[13px] px-8 h-10 rounded-full font-medium"
              >
                Get Started
              </Button>
              
              <Button 
                size="sm" 
                variant="outline"
                className="bg-muted/10 border-border/40 text-muted-foreground hover:text-foreground text-[13px] px-8 h-10 rounded-full font-medium backdrop-blur-sm"
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
