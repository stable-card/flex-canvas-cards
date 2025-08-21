import { Button } from "@/components/ui/button";
import { InteractiveCard } from "./InteractiveCard";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated mesh background */}
      <div className="absolute inset-0 bg-mesh animate-mesh-rotate opacity-10"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              Your Card,{" "}
              <span className="text-gradient">Your Rules</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Design everything. Program your perks. Own your financial experience. 
              Welcome to the world's first fully programmable card platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-glow text-lg px-8 py-6">
                Create Your Uncard
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 glass">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow"></div>
                <span>100% Customizable</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow animation-delay-200"></div>
                <span>Instant Rewards</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow animation-delay-400"></div>
                <span>Your Design</span>
              </div>
            </div>
          </div>
          
          {/* Interactive Card */}
          <div className="flex justify-center lg:justify-end">
            <InteractiveCard />
          </div>
        </div>
      </div>
    </section>
  );
};