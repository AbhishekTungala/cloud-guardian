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
    <div className="min-h-screen page-enter">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 animated-gradient-bg opacity-10" />
        
        {/* Floating shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl float" style={{ animationDelay: '-2s' }} />
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary/5 rounded-full blur-2xl float" style={{ animationDelay: '-4s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20">
              <Sparkles className="h-4 w-4" />
              <span>Intelligent Cloud Operations Platform</span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent gradient-bg">
                Automated Monitoring.
              </span>
              <br />
              <span>Self-Healing Systems.</span>
              <br />
              <span className="text-muted-foreground">Zero Panic.</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Let your infrastructure heal itself. Our AI-powered platform detects issues, 
              diagnoses root causes, and applies fixes automatically—before your users notice.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="gradient-bg hover:glow transition-all duration-300 text-lg px-8 h-14 group"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <span>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="text-lg px-8 h-14 opacity-60 cursor-not-allowed"
                      disabled
                    >
                      View Dashboard
                    </Button>
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Login required to access dashboard</p>
                </TooltipContent>
              </Tooltip>
            </div>

            {/* Social proof placeholder */}
            <div className="mt-16 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">
                Trusted by innovative teams worldwide
              </p>
              <div className="flex items-center justify-center gap-8 opacity-40">
                {[1, 2, 3, 4].map(i => (
                  <div 
                    key={i} 
                    className="h-8 w-24 bg-muted-foreground/20 rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need for{' '}
              <span className="bg-clip-text text-transparent gradient-bg">
                resilient systems
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From real-time monitoring to automated incident resolution, 
              CloudHeal keeps your infrastructure healthy 24/7.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon] || Cloud;
              return (
                <GlassCard 
                  key={feature.title} 
                  hover 
                  className="text-center group"
                >
                  <div 
                    className="w-14 h-14 mx-auto mb-4 rounded-xl gradient-bg flex items-center justify-center group-hover:glow transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <GlassCard className="max-w-3xl mx-auto text-center py-12 px-8">
            <Cloud className="h-12 w-12 mx-auto mb-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to stop firefighting?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Join the teams who've automated their incident response. 
              Start with our free tier—no credit card required.
            </p>
            <Button 
              size="lg" 
              className="gradient-bg hover:glow transition-all duration-300"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
