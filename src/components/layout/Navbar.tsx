import { Link, useLocation } from 'react-router-dom';
import { Cloud, Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { useTheme } from '@/components/theme-provider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/admin', label: 'Admin' },
  { href: '/health', label: 'Health' },
];

export function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setTheme } = useTheme();

  // Don't show navbar on dashboard (has its own sidebar)
  if (location.pathname === '/dashboard') {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card rounded-none border-x-0 border-t-0 h-14 flex items-center">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="p-1.5 rounded-md gradient-bg transition-transform duration-300 group-hover:scale-105">
              <Cloud className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-base tracking-tight">CloudHeal</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1.5">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'px-3.5 py-1.5 rounded-md text-[13px] font-medium transition-all duration-200',
                  location.pathname === link.href
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="sm" className="text-[13px] h-8 px-3 text-muted-foreground">
              Sign In
            </Button>
            <Button size="sm" className="text-[13px] h-8 px-4 rounded-md shadow-sm">
              Get Started
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden py-3 border-t border-border/50 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'px-3 py-2 rounded-md text-[13px] font-medium transition-colors',
                    location.pathname === link.href
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-muted/50'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-2 pt-2 border-t border-border/50 mt-1">
                <Button variant="ghost" size="sm" className="flex-1 h-8 text-[13px]">
                  Sign In
                </Button>
                <Button size="sm" className="flex-1 h-8 text-[13px]">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
