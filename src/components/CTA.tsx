import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <Card className="card-premium max-w-4xl mx-auto p-12 text-center relative overflow-hidden">
          {/* Card background effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-5xl lg:text-6xl font-bold">
              Ready to <span className="text-gradient">Uncard</span>?
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join the revolution. Design your perfect card, program your ideal rewards, 
              and own a truly personalized financial experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="btn-glow text-lg px-10 py-6" onClick={() => toast({ title: "Create Uncard", description: "Uncard 생성 플로우가 시작됩니다 (mock)" })}>
                Create Your Uncard Now
              </Button>
              <div className="text-sm text-muted-foreground">
                No fees • Instant setup • Unlimited customization
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">∞</div>
                <div className="text-sm text-muted-foreground">Design Possibilities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Customizable Rewards</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">0</div>
                <div className="text-sm text-muted-foreground">Hidden Fees</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};