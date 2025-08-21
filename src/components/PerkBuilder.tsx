import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const samplePerks = [
  { category: "Dining", reward: "5%", color: "bg-red-500" },
  { category: "Tech", reward: "3%", color: "bg-blue-500" },
  { category: "Travel", reward: "4%", color: "bg-green-500" },
  { category: "Coffee", reward: "8%", color: "bg-yellow-500" }
];

const metrics = [
  { label: "Monthly Rewards", value: "$127", trend: "+23%" },
  { label: "Active Categories", value: "8", trend: "+2" },
  { label: "Optimization Score", value: "94%", trend: "+12%" }
];

export const PerkBuilder = () => {
  const [inputValue, setInputValue] = useState("I want extra rewards for coffee shops and tech purchases");
  
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge variant="outline" className="glass mb-4">
                Perk Builder
              </Badge>
              <h2 className="text-5xl font-bold mb-6">
                Speak Your Rewards Into <span className="text-gradient">Existence</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Just tell us what you want. Our AI creates smart contract policies 
                that automatically optimize your rewards based on your spending patterns.
              </p>
            </div>
            
            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <div className="w-3 h-3 rounded-full bg-primary animate-glow"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Natural Language Processing</h4>
                  <p className="text-sm text-muted-foreground">Describe your ideal rewards in plain English</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <div className="w-3 h-3 rounded-full bg-primary animate-glow animation-delay-200"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Smart Contract Automation</h4>
                  <p className="text-sm text-muted-foreground">Policies enforced by blockchain, not fine print</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <div className="w-3 h-3 rounded-full bg-primary animate-glow animation-delay-400"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Real-time Optimization</h4>
                  <p className="text-sm text-muted-foreground">Your perks evolve with your spending habits</p>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="btn-glow">
              Try Perk Builder
            </Button>
          </div>
          
          {/* Demo Interface */}
          <div className="space-y-6">
            {/* Input Interface */}
            <Card className="card-premium p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-primary animate-glow"></div>
                  <span className="font-medium">Perk Builder</span>
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm text-muted-foreground">Describe your ideal rewards:</label>
                  <Input 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="glass border-primary/20 focus:border-primary"
                    placeholder="I want extra rewards for..."
                  />
                  <Button className="btn-glow w-full">
                    Generate Perks
                  </Button>
                </div>
              </div>
            </Card>
            
            {/* Generated Perks */}
            <Card className="card-premium p-6">
              <h4 className="font-semibold mb-4">Your Custom Perks</h4>
              <div className="grid grid-cols-2 gap-3">
                {samplePerks.map((perk, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg glass">
                    <div className={`w-3 h-3 rounded-full ${perk.color}`}></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{perk.category}</div>
                      <div className="text-xs text-muted-foreground">{perk.reward} rewards</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Metrics */}
            <Card className="card-premium p-6">
              <h4 className="font-semibold mb-4">Projected Impact</h4>
              <div className="space-y-3">
                {metrics.map((metric, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{metric.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{metric.value}</span>
                      <span className="text-xs text-primary">{metric.trend}</span>
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