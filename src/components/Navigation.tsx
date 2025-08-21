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
      isScrolled ? 'glass-rebel backdrop-blur-2xl border-b border-primary/20' : ''
    }`}>
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Revolutionary Logo */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-10 h-10 bg-electric rounded-2xl flex items-center justify-center animate-chaos-spin">
                <div className="w-5 h-5 bg-black rounded-lg"></div>
              </div>
              <div className="absolute inset-0 bg-primary/30 rounded-2xl blur animate-rebel-pulse"></div>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-2xl font-black uppercase tracking-wider">
                FLEX
              </span>
              <span className="text-2xl font-black uppercase tracking-wider text-electric">
                PERKS
              </span>
            </div>
          </div>
          
          {/* Brutal Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="font-bold uppercase tracking-wider text-sm hover:text-electric transition-colors relative group">
              FEATURES
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#perk-builder" className="font-bold uppercase tracking-wider text-sm hover:text-electric transition-colors relative group">
              PERK BUILDER
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#design-studio" className="font-bold uppercase tracking-wider text-sm hover:text-electric transition-colors relative group">
              DESIGN STUDIO
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#revolution" className="font-bold uppercase tracking-wider text-sm hover:text-electric transition-colors relative group">
              REVOLUTION
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric transition-all duration-300 group-hover:w-full"></div>
            </a>
          </div>
          
          {/* Brutal CTA Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="outline" className="glass-rebel border-primary/30 font-bold uppercase tracking-wider hidden sm:flex">
              SIGN IN
            </Button>
            <Button className="btn-rebel font-black uppercase tracking-wider px-6">
              JOIN REVOLUTION
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};