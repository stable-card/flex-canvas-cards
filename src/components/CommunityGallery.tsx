import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import heroImg from "@/assets/hero-card.jpg";

const mockDesigns = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  title: `Uncard #${100 + i}`,
  img: heroImg,
  likes: Math.floor(Math.random() * 1000),
}));

export const CommunityGallery = () => {
  const [designs, setDesigns] = useState(mockDesigns);

  const toggleLike = (id: number) => {
    setDesigns((prev) =>
      prev.map((d) => (d.id === id ? { ...d, likes: d.likes + 1 } : d))
    );
  };

  return (
    <section
      id="community"
      className="py-24 relative section-angled bg-gradient-to-b from-secondary/30 to-background"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="glass mb-4">
            Community
          </Badge>
          <h2 className="text-5xl font-bold mb-4">
            Explore the <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how others are expressing themselves with The Uncard and leave your
            own mark.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {designs.map((d) => (
            <Card key={d.id} className="card-premium overflow-hidden group">
              <img
                src={d.img}
                alt={d.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 flex justify-between items-center">
                <div>
                  <h4 className="font-medium">{d.title}</h4>
                </div>
                <button
                  onClick={() => toggleLike(d.id)}
                  aria-label="like design"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  ❤️ {d.likes}
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

