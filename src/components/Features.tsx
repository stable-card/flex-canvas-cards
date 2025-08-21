import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    number: "01",
    title: "DESIGN\nANYTHING",
    description: "재료부터 색상, 패턴, 각인까지. 당신의 카드가 곧 캔버스입니다. AI 생성 아트워크부터 NFT 연동까지.",
    features: ["AI 생성 아트워크", "아티스트 콜라보", "NFT 통합", "LED 커스터마이징"],
    gradient: "from-primary via-accent to-primary"
  },
  {
    number: "02", 
    title: "PROGRAM\nYOUR PERKS",
    description: "자연어로 맞춤 리워드 정책을 생성하세요. AI가 당신의 취향을 스마트 컨트랙트로 번역합니다.",
    features: ["자연어 입력", "스마트 컨트랙트", "실시간 최적화", "즉시 리워드"],
    gradient: "from-accent via-primary to-accent"
  },
  {
    number: "03",
    title: "OWN YOUR\nEXPERIENCE", 
    description: "실시간 업데이트되는 디지털 우선 카드. 원할 때마다 실물 버전을 민팅하세요.",
    features: ["실시간 업데이트", "Apple/Google Pay", "실물 민팅", "완전한 소유권"],
    gradient: "from-primary/80 via-accent/60 to-primary/80"
  }
];

export const Features = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Chaos background */}
      <div className="absolute inset-0 bg-rebel opacity-10"></div>
      <div className="absolute top-1/3 left-0 w-full h-px bg-electric animate-electric-slide"></div>
      <div className="absolute bottom-1/3 left-0 w-full h-px bg-electric animate-electric-slide" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Revolutionary title */}
        <div className="text-center mb-20">
          <div className="mb-8">
            <h2 className="text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none">
              <span className="glitch" data-text="THREE STEPS">THREE STEPS</span>
            </h2>
            <div className="text-6xl lg:text-7xl font-black uppercase tracking-tighter text-electric -mt-4">
              TO FREEDOM
            </div>
          </div>
          <p className="text-xl font-medium text-muted-foreground max-w-3xl mx-auto">
            쿠키커터 금융 상품에서 벗어나세요. <span className="text-electric font-bold">당신만의 것을 창조하세요.</span>
          </p>
        </div>
        
        {/* Brutal feature cards */}
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              {/* Floating number */}
              <div className="absolute -top-8 -left-4 text-8xl font-black text-primary/20 animate-chaos-float z-0">
                {feature.number}
              </div>
              
              <Card className="card-rebel p-10 group-hover:scale-105 transition-all duration-500 relative overflow-hidden h-full">
                {/* Chaos overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Electric border effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-electric opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 space-y-8">
                  {/* Title */}
                  <h3 className="text-3xl font-black uppercase tracking-wider leading-tight whitespace-pre-line">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed font-medium">
                    {feature.description}
                  </p>
                  
                  {/* Feature list */}
                  <div className="space-y-4">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-electric rounded-full animate-rebel-pulse"></div>
                        <span className="font-bold">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full glass-rebel border-primary/30 font-bold uppercase tracking-wider group-hover:btn-rebel transition-all duration-300">
                    UNLEASH {feature.title.split('\n')[0]}
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};