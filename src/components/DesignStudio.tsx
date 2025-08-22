import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const designOptions = [
  { name: "Midnight", gradient: "from-slate-900 to-slate-700", active: true },
  { name: "Aurora", gradient: "from-purple-500 to-pink-500", active: false },
  { name: "Ocean", gradient: "from-blue-600 to-cyan-400", active: false },
  { name: "Sunset", gradient: "from-orange-500 to-red-500", active: false }
];

const materials = [
  { name: "Premium Metal", price: "Free", selected: true },
  { name: "Carbon Fiber", price: "+$15", selected: false },
  { name: "Recycled Ocean Plastic", price: "+$5", selected: false },
  { name: "Transparent Crystal", price: "+$25", selected: false }
];

const artworks = [
  { name: "Geometric Waves", type: "AI Generated", preview: "🌊" },
  { name: "Digital Cosmos", type: "Artist Edition", preview: "✨" },
  { name: "Minimal Lines", type: "Classic", preview: "📐" },
  { name: "Your NFT", type: "Import", preview: "🖼️" }
];

export const DesignStudio = () => {
  const [selectedDesign, setSelectedDesign] = useState(0);
  
  return (
    <section id="design-studio" className="py-24 relative bg-gradient-to-b from-background to-secondary/20 section-alt section-angled">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Design Interface */}
          <div className="space-y-6 order-2 lg:order-1">
            {/* Material Selection */}
            <Card className="card-premium p-6">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow"></div>
                Material
              </h4>
              <div className="space-y-3">
                {materials.map((material, index) => (
                  <div key={index} className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    material.selected ? 'border-primary bg-primary/5' : 'border-border glass'
                  }`}>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{material.name}</span>
                      <span className="text-sm text-primary">{material.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Color Selection */}
            <Card className="card-premium p-6">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow animation-delay-200"></div>
                Color & Finish
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {designOptions.map((option, index) => (
                  <div 
                    key={index}
                    onClick={() => setSelectedDesign(index)}
                    className={`h-16 rounded-lg bg-gradient-to-br ${option.gradient} cursor-pointer border-2 transition-all ${
                      selectedDesign === index ? 'border-primary scale-105' : 'border-transparent'
                    }`}
                  >
                    <div className="h-full flex items-end p-2">
                      <span className="text-xs font-medium text-white">{option.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Artwork Selection */}
            <Card className="card-premium p-6">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow animation-delay-400"></div>
                Artwork & Pattern
              </h4>
              <div className="space-y-3">
                {artworks.map((artwork, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg glass cursor-pointer hover:bg-primary/5 transition-colors">
                    <div className="text-2xl">{artwork.preview}</div>
                    <div className="flex-1">
                      <div className="font-medium">{artwork.name}</div>
                      <div className="text-xs text-muted-foreground">{artwork.type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            <Button className="w-full btn-glow" onClick={() => toast({ title: "Mint", description: "카드를 민팅합니다 (mock)" })}>
              Mint This Design
            </Button>
          </div>
          
          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <Badge variant="outline" className="glass mb-4">
                Design Studio
              </Badge>
              <h2 className="text-5xl font-bold mb-6">
                Your <span className="text-gradient">Identity</span>, Materialized
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Every card tells a story. Make yours unforgettable with materials, 
                colors, and artwork that reflect who you are. From AI-generated art 
                to your own NFTs.
              </p>
            </div>
            
            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <div className="w-3 h-3 rounded-full bg-primary animate-glow"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Real-time 3D Preview</h4>
                  <p className="text-sm text-muted-foreground">See every change instantly in photorealistic detail</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <div className="w-3 h-3 rounded-full bg-primary animate-glow animation-delay-200"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Premium Materials</h4>
                  <p className="text-sm text-muted-foreground">Metal, carbon fiber, recycled plastics, and more</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <div className="w-3 h-3 rounded-full bg-primary animate-glow animation-delay-400"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Digital-First Updates</h4>
                  <p className="text-sm text-muted-foreground">Change your design anytime, mint when perfect</p>
                </div>
              </div>
            </div>
            
            {/* Live Preview Card */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/40 to-accent/40 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className={`relative w-64 h-40 rounded-xl bg-gradient-to-br ${designOptions[selectedDesign].gradient} p-4 text-white shadow-xl`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-xs opacity-80">FLEX PERKS</div>
                    <div className="font-bold">THE UNCARD</div>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white animate-glow"></div>
                  </div>
                </div>
                <div className="font-mono text-sm mb-4">•••• •••• •••• 2024</div>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-xs opacity-80">YOUR NAME</div>
                    <div className="text-sm font-semibold">LIVE PREVIEW</div>
                  </div>
                  <div className="text-xs opacity-80">∞</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};