import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Extreme chaos background */}
      <div className="absolute inset-0 bg-chaos opacity-20 animate-chaos-rotate"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-electric opacity-5 animate-electric-slide"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-primary/30 rounded-full blur-2xl animate-chaos-float"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-accent/40 rounded-full blur-xl float-chaos"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric/20 rounded-full blur-3xl animate-rebel-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <Card className="card-rebel max-w-6xl mx-auto p-16 text-center relative overflow-hidden">
          {/* Extreme effects */}
          <div className="absolute inset-0 bg-chaos opacity-10 animate-chaos-rotate"></div>
          <div className="absolute top-0 left-0 w-full h-4 bg-electric"></div>
          <div className="absolute bottom-0 left-0 w-full h-4 bg-accent"></div>
          <div className="absolute left-0 top-0 w-4 h-full bg-primary"></div>
          <div className="absolute right-0 top-0 w-4 h-full bg-electric"></div>
          
          {/* Floating corner elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-electric rounded-full animate-chaos-spin"></div>
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-rebel-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-accent rounded-full float-chaos"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-electric rounded-full animate-chaos-float"></div>
          
          <div className="relative z-10 space-y-12">
            {/* Brutal title */}
            <div className="space-y-6">
              <h2 className="text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none">
                <span className="glitch" data-text="READY TO">READY TO</span>
                <br />
                <span className="text-electric text-6xl lg:text-7xl -mt-4 block">UNCARD?</span>
              </h2>
              
              <div className="w-32 h-2 bg-electric mx-auto animate-electric-slide"></div>
            </div>
            
            <p className="text-2xl font-medium text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              혁명에 동참하세요. <span className="text-electric font-bold">완벽한 카드를 디자인하고,</span> 
              이상적인 리워드를 프로그래밍하고, <span className="text-accent font-bold">진정으로 개인화된 금융 경험을 소유하세요.</span>
            </p>
            
            {/* Brutal CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Button size="lg" className="btn-rebel text-2xl px-16 py-8 font-black uppercase tracking-wider relative group">
                <div className="absolute -inset-2 bg-electric/20 rounded-2xl blur animate-rebel-pulse group-hover:animate-chaos-spin"></div>
                <span className="relative z-10">지금 UNCARD 생성하기</span>
              </Button>
              <div className="text-center space-y-2">
                <div className="font-bold text-muted-foreground">
                  수수료 없음 • 즉시 설정 • 무제한 커스터마이징
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-electric rounded-full animate-rebel-pulse"></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-chaos-float"></div>
                  <div className="w-2 h-2 bg-accent rounded-full animate-rebel-pulse"></div>
                </div>
              </div>
            </div>
            
            {/* Brutal Stats */}
            <div className="grid md:grid-cols-3 gap-12 mt-16 pt-12 border-t-4 border-electric">
              <div className="text-center space-y-4">
                <div className="text-8xl font-black text-electric animate-chaos-spin">∞</div>
                <div className="font-black uppercase tracking-wider text-lg">디자인 가능성</div>
              </div>
              <div className="text-center space-y-4">
                <div className="text-8xl font-black text-primary animate-rebel-pulse">100%</div>
                <div className="font-black uppercase tracking-wider text-lg">커스터마이징 가능 리워드</div>
              </div>
              <div className="text-center space-y-4">
                <div className="text-8xl font-black text-accent animate-chaos-float">0</div>
                <div className="font-black uppercase tracking-wider text-lg">숨겨진 수수료</div>
              </div>
            </div>
            
            {/* Final chaos element */}
            <div className="flex justify-center">
              <div className="w-64 h-1 bg-gradient-to-r from-primary via-electric to-accent animate-electric-slide rounded-full"></div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};