import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    step: "01",
    title: "Design Anything",
    description: "From materials to colors, patterns to engravings. Your card becomes your canvas with our Design Studio.",
    features: ["AI-Generated Artwork", "Artist Collaborations", "NFT Integration", "LED Customization"],
    color: "from-primary to-accent"
  },
  {
    step: "02", 
    title: "Program Your Perks",
    description: "Use natural language to create custom reward policies. Our AI translates your preferences into smart contracts.",
    features: ["Natural Language Input", "Smart Contract Automation", "Real-time Optimization", "Instant Rewards"],
    color: "from-accent to-primary"
  },
  {
    step: "03",
    title: "Own Your Experience", 
    description: "Digital-first cards that update in real-time. Mint physical versions whenever you want.",
    features: ["Real-time Updates", "Apple/Google Pay", "Physical Minting", "Complete Ownership"],
    color: "from-primary/80 to-accent/80"
  }
];

export const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Three Steps to <span className="text-gradient">Financial Freedom</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Break free from cookie-cutter financial products. Create something uniquely yours.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-premium p-8 group hover:scale-105 transition-all duration-500 relative overflow-hidden">
              {/* Feature gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Step number */}
              <div className="relative z-10 mb-6">
                <div className="text-6xl font-bold text-gradient opacity-50">
                  {feature.step}
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 space-y-6">
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Feature list */}
                <div className="space-y-3">
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary animate-glow"></div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full glass group-hover:btn-glow transition-all duration-300">
                  Explore {feature.title}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};