import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const samplePerks = [
  { category: "카페", reward: "8%", color: "bg-accent", pulse: "animate-rebel-pulse" },
  { category: "테크", reward: "5%", color: "bg-primary", pulse: "animate-chaos-float" },
  { category: "여행", reward: "6%", color: "bg-electric", pulse: "animate-rebel-pulse" },
  { category: "쇼핑", reward: "4%", color: "bg-accent", pulse: "animate-chaos-float" }
];

const metrics = [
  { label: "월간 리워드", value: "₩187,000", trend: "+34%", color: "text-electric" },
  { label: "활성 카테고리", value: "12", trend: "+5", color: "text-primary" },
  { label: "최적화 점수", value: "97%", trend: "+18%", color: "text-accent" }
];

export const PerkBuilder = () => {
  const [inputValue, setInputValue] = useState("커피숍과 테크 구매에서 더 많은 리워드를 원해요");
  
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Chaos background effects */}
      <div className="absolute inset-0 bg-chaos opacity-5 animate-chaos-rotate"></div>
      <div className="absolute top-1/4 left-0 w-full h-px bg-electric animate-electric-slide"></div>
      <div className="absolute bottom-3/4 right-0 w-1/2 h-px bg-primary animate-electric-slide" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Revolutionary Content */}
          <div className="space-y-10">
            <div>
              <Badge variant="outline" className="glass-rebel border-primary/30 mb-6 px-4 py-2 font-bold uppercase tracking-wider">
                PERK BUILDER
              </Badge>
              <h2 className="text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
                <span className="glitch" data-text="SPEAK YOUR">SPEAK YOUR</span>
                <br />
                <span className="text-electric">REWARDS INTO</span>
                <br />
                <span className="text-accent">EXISTENCE</span>
              </h2>
              <p className="text-xl font-medium text-muted-foreground leading-relaxed">
                그냥 말하세요. <span className="text-electric font-bold">AI가 스마트 컨트랙트 정책을 만들어</span> 
                당신의 소비 패턴에 따라 자동으로 리워드를 최적화합니다.
              </p>
            </div>
            
            {/* Revolutionary Features */}
            <div className="space-y-6">
              {[
                { title: "자연어 처리", desc: "평범한 한국어로 이상적인 리워드를 설명하세요", icon: "🧠" },
                { title: "스마트 컨트랙트 자동화", desc: "약관이 아닌 블록체인이 정책을 강제합니다", icon: "⚡" },
                { title: "실시간 최적화", desc: "당신의 혜택이 소비 습관과 함께 진화합니다", icon: "🚀" }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="text-3xl animate-chaos-float" style={{animationDelay: `${index * 0.2}s`}}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-black uppercase tracking-wider mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="btn-rebel text-xl px-10 py-6 font-black uppercase tracking-wider">
              PERK BUILDER 체험하기
            </Button>
          </div>
          
          {/* Brutal Demo Interface */}
          <div className="space-y-8">
            {/* Input Interface */}
            <Card className="card-rebel p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-electric opacity-50"></div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-4 h-4 bg-electric rounded-full animate-rebel-pulse"></div>
                  <span className="font-black uppercase tracking-wider text-lg">AI PERK GENERATOR</span>
                </div>
                
                <div className="space-y-4">
                  <label className="font-bold uppercase tracking-wider text-sm text-electric">
                    이상적인 리워드를 설명하세요:
                  </label>
                  <Input 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="glass-rebel border-2 border-primary/30 focus:border-electric bg-black/20 text-white font-medium p-4 text-lg"
                    placeholder="원하는 혜택을 자유롭게 말해보세요..."
                  />
                  <Button className="btn-rebel w-full text-lg font-black uppercase tracking-wider py-4">
                    AI 혜택 생성
                  </Button>
                </div>
              </div>
            </Card>
            
            {/* Generated Perks */}
            <Card className="card-rebel p-8">
              <div className="absolute top-0 left-0 w-full h-2 bg-primary opacity-50"></div>
              
              <h4 className="font-black uppercase tracking-wider text-lg mb-6 text-electric">당신만의 커스텀 혜택</h4>
              <div className="grid grid-cols-2 gap-4">
                {samplePerks.map((perk, index) => (
                  <div key={index} className="glass-rebel p-4 rounded-2xl border border-primary/20 relative overflow-hidden group">
                    <div className={`absolute top-0 left-0 w-full h-1 ${perk.color} opacity-60`}></div>
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full ${perk.color} ${perk.pulse}`}></div>
                      <div className="flex-1">
                        <div className="font-black text-sm">{perk.category}</div>
                        <div className="text-xs text-muted-foreground font-mono">{perk.reward} 리워드</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Brutal Metrics */}
            <Card className="card-rebel p-8">
              <div className="absolute top-0 left-0 w-full h-2 bg-accent opacity-50"></div>
              
              <h4 className="font-black uppercase tracking-wider text-lg mb-6 text-electric">예상 임팩트</h4>
              <div className="space-y-4">
                {metrics.map((metric, index) => (
                  <div key={index} className="flex justify-between items-center p-3 glass-rebel rounded-xl border border-primary/10">
                    <span className="font-bold text-sm">{metric.label}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-black text-xl">{metric.value}</span>
                      <span className={`text-sm font-bold ${metric.color}`}>{metric.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};