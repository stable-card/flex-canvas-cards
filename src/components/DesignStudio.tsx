import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const designOptions = [
  { name: "미드나이트", gradient: "from-black via-gray-900 to-black", active: true },
  { name: "오로라", gradient: "from-purple-600 via-pink-500 to-purple-600", active: false },
  { name: "오션", gradient: "from-blue-700 via-cyan-400 to-blue-700", active: false },
  { name: "썬셋", gradient: "from-orange-600 via-red-500 to-orange-600", active: false }
];

const materials = [
  { name: "프리미엄 메탈", price: "무료", selected: true, icon: "🔥" },
  { name: "카본 파이버", price: "+₩22,000", selected: false, icon: "⚡" },
  { name: "재활용 바다 플라스틱", price: "+₩8,000", selected: false, icon: "🌊" },
  { name: "투명 크리스탈", price: "+₩35,000", selected: false, icon: "💎" }
];

const artworks = [
  { name: "지오메트릭 웨이브", type: "AI 생성", preview: "🌊", color: "text-electric" },
  { name: "디지털 코스모스", type: "아티스트 에디션", preview: "✨", color: "text-primary" },
  { name: "미니멀 라인", type: "클래식", preview: "📐", color: "text-accent" },
  { name: "당신의 NFT", type: "임포트", preview: "🖼️", color: "text-electric" }
];

export const DesignStudio = () => {
  const [selectedDesign, setSelectedDesign] = useState(0);
  
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Chaos background effects */}
      <div className="absolute inset-0 bg-rebel opacity-5"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-electric opacity-10 blur-3xl animate-chaos-float"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-primary opacity-10 blur-3xl float-chaos"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Brutal Design Interface */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Material Selection */}
            <Card className="card-rebel p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-electric"></div>
              
              <h4 className="font-black uppercase tracking-wider text-xl mb-6 flex items-center gap-3">
                <div className="w-3 h-3 bg-electric rounded-full animate-rebel-pulse"></div>
                MATERIAL
              </h4>
              <div className="space-y-4">
                {materials.map((material, index) => (
                  <div key={index} className={`p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    material.selected 
                      ? 'border-electric bg-electric/10 scale-105' 
                      : 'border-primary/20 glass-rebel hover:border-primary/40 hover:scale-102'
                  }`}>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <div className="text-2xl animate-chaos-float">{material.icon}</div>
                        <span className="font-black text-lg">{material.name}</span>
                      </div>
                      <span className="font-bold text-electric">{material.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Color Selection */}
            <Card className="card-rebel p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
              
              <h4 className="font-black uppercase tracking-wider text-xl mb-6 flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-chaos-float"></div>
                COLOR & FINISH
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {designOptions.map((option, index) => (
                  <div 
                    key={index}
                    onClick={() => setSelectedDesign(index)}
                    className={`h-20 rounded-2xl bg-gradient-to-br ${option.gradient} cursor-pointer border-4 transition-all duration-300 relative overflow-hidden ${
                      selectedDesign === index 
                        ? 'border-electric scale-110 rotate-3' 
                        : 'border-transparent hover:border-primary/40 hover:scale-105'
                    }`}
                  >
                    <div className="h-full flex items-end p-3">
                      <span className="text-sm font-black text-white uppercase tracking-wider">{option.name}</span>
                    </div>
                    {selectedDesign === index && (
                      <div className="absolute inset-0 bg-electric/20 animate-rebel-pulse"></div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Artwork Selection */}
            <Card className="card-rebel p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-accent"></div>
              
              <h4 className="font-black uppercase tracking-wider text-xl mb-6 flex items-center gap-3">
                <div className="w-3 h-3 bg-accent rounded-full animate-rebel-pulse"></div>
                ARTWORK & PATTERN
              </h4>
              <div className="space-y-4">
                {artworks.map((artwork, index) => (
                  <div key={index} className="flex items-center gap-6 p-4 rounded-2xl glass-rebel cursor-pointer hover:bg-primary/5 transition-all duration-300 border border-primary/10 hover:border-electric/30 group">
                    <div className="text-3xl animate-chaos-float" style={{animationDelay: `${index * 0.2}s`}}>
                      {artwork.preview}
                    </div>
                    <div className="flex-1">
                      <div className="font-black text-lg">{artwork.name}</div>
                      <div className={`text-sm font-bold ${artwork.color}`}>{artwork.type}</div>
                    </div>
                    <div className="w-2 h-8 bg-electric rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                ))}
              </div>
            </Card>
            
            <Button className="w-full btn-rebel text-xl py-6 font-black uppercase tracking-wider">
              이 디자인을 민팅하라
            </Button>
          </div>
          
          {/* Revolutionary Content */}
          <div className="space-y-10 order-1 lg:order-2">
            <div>
              <Badge variant="outline" className="glass-rebel border-accent/30 mb-6 px-4 py-2 font-bold uppercase tracking-wider">
                DESIGN STUDIO
              </Badge>
              <h2 className="text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
                <span className="glitch" data-text="YOUR">YOUR</span>
                <br />
                <span className="text-electric">IDENTITY,</span>
                <br />
                <span className="text-accent">MATERIALIZED</span>
              </h2>
              <p className="text-xl font-medium text-muted-foreground leading-relaxed">
                모든 카드는 이야기를 말합니다. <span className="text-electric font-bold">당신의 것을 잊을 수 없게 만드세요.</span> 
                AI 생성 아트부터 당신만의 NFT까지.
              </p>
            </div>
            
            {/* Revolutionary Features */}
            <div className="space-y-6">
              {[
                { title: "실시간 3D 미리보기", desc: "모든 변화를 즉시 사실적으로 확인하세요", icon: "🎮" },
                { title: "프리미엄 재료", desc: "메탈, 카본파이버, 재활용 플라스틱 등", icon: "⚡" },
                { title: "디지털 우선 업데이트", desc: "언제든 디자인 변경, 완벽할 때 민팅", icon: "🚀" }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="text-3xl animate-rebel-pulse" style={{animationDelay: `${index * 0.3}s`}}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-black uppercase tracking-wider mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Live Preview Card with extreme brutalism */}
            <div className="relative group perspective">
              <div className="absolute -inset-4 bg-electric/40 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity animate-rebel-pulse"></div>
              <div className={`relative w-80 h-48 rounded-3xl bg-gradient-to-br ${designOptions[selectedDesign].gradient} p-6 text-white shadow-brutal transform-3d transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                {/* Chaos overlay */}
                <div className="absolute inset-0 bg-chaos opacity-10 rounded-3xl animate-chaos-rotate"></div>
                
                {/* Electric borders */}
                <div className="absolute top-0 left-0 w-full h-1 bg-electric rounded-t-3xl"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-accent rounded-b-3xl"></div>
                
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-xs font-mono opacity-80 uppercase tracking-wider">FLEX PERKS</div>
                      <div className="font-black text-lg uppercase tracking-wider">THE UNCARD</div>
                    </div>
                    <div className="w-8 h-8 rounded-2xl bg-white/10 flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-lg animate-chaos-spin"></div>
                    </div>
                  </div>
                  
                  <div className="font-mono text-lg font-black tracking-wider">•••• •••• •••• 2024</div>
                  
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-xs opacity-80 font-mono uppercase tracking-wider">YOUR NAME</div>
                      <div className="text-sm font-black uppercase tracking-wider">LIVE PREVIEW</div>
                    </div>
                    <div className="text-2xl font-black animate-electric-slide">∞</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};