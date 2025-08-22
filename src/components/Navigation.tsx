import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass backdrop-blur-xl border-b border-border/50' : ''
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <div className="w-4 h-4 rounded-sm bg-white animate-glow"></div>
            </div>
            <span className="text-xl font-bold">
              Flex<span className="text-gradient">Perks</span>
            </span>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/features" className={`${location.pathname==="/features"?"text-foreground":"text-muted-foreground"} hover:text-foreground transition-colors`}>Features</Link>
            <Link to="/perk-builder" className={`${location.pathname==="/perk-builder"?"text-foreground":"text-muted-foreground"} hover:text-foreground transition-colors`}>Perk Builder</Link>
            <Link to="/design-studio" className={`${location.pathname==="/design-studio"?"text-foreground":"text-muted-foreground"} hover:text-foreground transition-colors`}>Design Studio</Link>
            <Link to="/community" className={`${location.pathname==="/community"?"text-foreground":"text-muted-foreground"} hover:text-foreground transition-colors`}>Community</Link>
          </div>
          
          {/* CTA Buttons + Theme toggle */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="outline" className="glass hidden sm:flex" onClick={() => toast({ title: "Sign In", description: "로그인 기능은 곧 제공될 예정입니다 (mock)" })}>
              Sign In
            </Button>
            <Button className="btn-glow" onClick={() => toast({ title: "Get Started", description: "가입 플로우가 곧 시작됩니다 (mock)" })}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};