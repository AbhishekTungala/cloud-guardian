import { Cloud } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Footer() {
  const location = useLocation();

  // Hide footer on dashboard
  if (location.pathname === '/dashboard') {
    return null;
  }

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg gradient-bg">
              <Cloud className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold">CloudHeal</span>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground text-center">
            Automated monitoring and incident resolution for modern cloud infrastructure.
          </p>

          {/* Links */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/dashboard" className="hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <span className="text-border">|</span>
            <span>© 2026 CloudHeal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
