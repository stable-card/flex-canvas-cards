import { Button } from "@/components/ui/button";
import { InteractiveCard } from "./InteractiveCard";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden perspective">
      {/* Chaotic background layers */}
      <div className="absolute inset-0 bg-chaos opacity-20"></div>
      
      {/* Electric slide effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 w-full h-px bg-electric animate-electric-slide"></div>
        <div className="absolute top-3/4 w-full h-px bg-electric animate-electric-slide" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Floating chaos elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-rebel rounded-full blur-xl animate-chaos-float"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary/30 rounded-full blur-2xl float-chaos" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-accent/40 rounded-full blur-lg animate-chaos-spin"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Revolutionary Hero Content */}
          <div className="space-y-10">
            {/* Glitch effect title */}
            <div className="space-y-4">
              <h1 className="text-8xl lg:text-9xl font-black leading-none tracking-tighter">
                <div className="glitch" data-text="BREAK">BREAK</div>
                <div className="text-electric text-7xl lg:text-8xl -mt-4">THE RULES</div>
              </h1>
            </div>
            
            <p className="text-2xl font-medium text-muted-foreground leading-relaxed max-w-xl">
              무엇이든 디자인하세요. <span className="text-electric font-bold">혜택을 프로그램하세요.</span> 
              당신만의 금융 경험을 소유하세요.
            </p>
            
            {/* Brutal CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mt-8">
              <Button size="lg" className="btn-rebel text-xl px-12 py-8 font-black uppercase tracking-wider">
                규칙을 깨뜨려라
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-xl px-12 py-8 font-bold glass-rebel border-2 border-primary/30 hover:border-primary"
              >
                혁명을 목격하라
              </Button>
            </div>
            
            {/* Chaos stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center space-y-2">
                <div className="text-6xl font-black text-electric">∞</div>
                <div className="text-sm font-mono uppercase tracking-wider">POSSIBILITIES</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-6xl font-black text-electric">100%</div>
                <div className="text-sm font-mono uppercase tracking-wider">YOUR CONTROL</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-6xl font-black text-electric">0</div>
                <div className="text-sm font-mono uppercase tracking-wider">COMPROMISES</div>
              </div>
            </div>
          </div>
          
          {/* Revolutionary Interactive Card */}
          <div className="flex justify-center lg:justify-end">
            <InteractiveCard />
          </div>
        </div>
        
        {/* Bottom chaos elements */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <div className="w-3 h-3 rounded-full bg-primary animate-rebel-pulse"></div>
          <div className="font-mono text-sm uppercase tracking-wider">SCROLL TO UNLEASH CHAOS</div>
          <div className="w-3 h-3 rounded-full bg-accent animate-rebel-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>
      </div>
    </section>
  );
};