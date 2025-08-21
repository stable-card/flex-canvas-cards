import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass backdrop-blur-xl border-b border-border/50' : ''
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <div className="w-4 h-4 rounded-sm bg-white animate-glow"></div>
            </div>
            <span className="text-xl font-bold">
              Flex<span className="text-gradient">Perks</span>
            </span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#perk-builder" className="text-muted-foreground hover:text-foreground transition-colors">
              Perk Builder
            </a>
            <a href="#design-studio" className="text-muted-foreground hover:text-foreground transition-colors">
              Design Studio
            </a>
            <a href="#community" className="text-muted-foreground hover:text-foreground transition-colors">
              Community
            </a>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="outline" className="glass hidden sm:flex">
              Sign In
            </Button>
            <Button className="btn-glow">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};