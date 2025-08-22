import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { useState, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const basePerks = [
  { category: "Dining", reward: 5, color: "#ef4444" },
  { category: "Tech", reward: 3, color: "#3b82f6" },
  { category: "Travel", reward: 4, color: "#22c55e" },
];

export const PerkBuilder = () => {
  const [inputValue, setInputValue] = useState("I want extra rewards for coffee shops and tech purchases");
  const [coffeeReward, setCoffeeReward] = useState(5);

  const perks = useMemo(() => {
    return [
      ...basePerks,
      { category: "Coffee", reward: coffeeReward, color: "#eab308" },
    ];
  }, [coffeeReward]);
  
  return (
    <section id="perk-builder" className="py-24 relative section-angled">
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
            
            {/* Slider Control */}
            <Card className="card-premium p-6">
              <h4 className="font-semibold mb-4">Adjust Coffee Rewards (%)</h4>
              <div className="space-y-6">
                <Slider
                  defaultValue={[coffeeReward]}
                  max={10}
                  step={1}
                  min={0}
                  onValueChange={(val) => setCoffeeReward(val[0])}
                />
                <div className="text-center text-lg font-medium">
                  {coffeeReward}% back at coffee shops
                </div>
              </div>
            </Card>

            {/* Rewards Bar Chart */}
            <Card className="card-premium p-6">
              <h4 className="font-semibold mb-4">Reward Breakdown</h4>
              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={perks}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="category" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip />
                    <Bar dataKey="reward" fill="url(#grad)" />
                    <defs>
                      <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--accent))" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};