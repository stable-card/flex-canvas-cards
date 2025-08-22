import { Button } from "@/components/ui/button";
import { HeroCardSlider } from "./HeroCardSlider";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

export const Hero = () => {
  // 배경 메쉬 그라디언트 회전을 마우스 움직임과 연동하기 위한 상태
  const [bgRotate, setBgRotate] = useState(0);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    // -0.5 ~ 0.5 범위
    const xRatio = (clientX - left) / width - 0.5;
    const yRatio = (clientY - top) / height - 0.5;

    // 배경 회전
    setBgRotate(xRatio * 30);
    // ThreeJS 카드용 포인터 저장 (x,y 그대로 전달)
    setPointer({ x: xRatio, y: yRatio });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated mesh background */}
      <div className="absolute inset-0 bg-mesh animate-mesh-rotate opacity-15"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              Your Card
              <br />
              <span className="text-gradient">Your Rules</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Design everything. Program your perks. Own your financial experience. 
              Welcome to the world's first fully programmable card platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="btn-glow text-lg px-8 py-6">
                <Link to="/design-studio">Create Your Uncard</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 glass" onClick={() => toast({ title: "Demo Video", description: "Demo 영상 재생 예정 (mock)" })}>
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow"></div>
                <span>100% Customizable</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow animation-delay-200"></div>
                <span>Instant Rewards</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow animation-delay-400"></div>
                <span>Your Design</span>
              </div>
            </div>
          </div>
          
          {/* 3D Interactive Card */}
          <div className="flex justify-center lg:justify-end">
            <HeroCardSlider />
          </div>
        </div>
      </div>
    </section>
  );
};