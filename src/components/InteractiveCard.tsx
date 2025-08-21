import { useState, useRef, useEffect } from "react";

export const InteractiveCard = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const rotateX = (e.clientY - centerY) / 10;
      const rotateY = (centerX - e.clientX) / 10;
      
      setRotation({ x: rotateX, y: rotateY });
    };
    
    const handleMouseLeave = () => {
      setRotation({ x: 0, y: 0 });
    };
    
    if (cardRef.current) {
      cardRef.current.addEventListener('mousemove', handleMouseMove);
      cardRef.current.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (cardRef.current) {
        cardRef.current.removeEventListener('mousemove', handleMouseMove);
        cardRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);
  
  return (
    <div className="relative perspective">
      {/* Extreme glow effects */}
      <div className="absolute -inset-10 bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 rounded-full blur-3xl opacity-60 animate-chaos-spin"></div>
      <div className="absolute -inset-6 bg-primary/30 rounded-2xl blur-2xl animate-rebel-pulse"></div>
      
      {/* Card container */}
      <div 
        ref={cardRef}
        className="relative w-96 h-60 cursor-none transform-3d"
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateZ(50px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* Main card */}
        <div className="w-full h-full rounded-3xl card-brutal relative overflow-hidden">
          {/* Chaotic background pattern */}
          <div className="absolute inset-0 bg-chaos animate-chaos-rotate opacity-20"></div>
          
          {/* Electric overlays */}
          <div className="absolute inset-0 bg-electric opacity-80"></div>
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-accent to-transparent animate-electric-slide"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-primary to-transparent animate-electric-slide" style={{animationDelay: '1s'}}></div>
          
          {/* Card content */}
          <div className="relative z-10 p-8 h-full flex flex-col justify-between text-black font-black">
            {/* Header */}
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <div className="font-mono text-xs uppercase tracking-[0.2em] opacity-80">FLEX PERKS</div>
                <div className="text-2xl font-black uppercase tracking-wider">THE UNCARD</div>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-black/20 flex items-center justify-center relative overflow-hidden">
                <div className="w-6 h-6 bg-black rounded-lg animate-chaos-spin"></div>
                <div className="absolute inset-0 bg-accent/30 animate-rebel-pulse"></div>
              </div>
            </div>
            
            {/* Card number */}
            <div className="font-mono text-2xl tracking-[0.3em] font-black">
              •••• •••• •••• 2024
            </div>
            
            {/* Footer */}
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <div className="font-mono text-xs uppercase tracking-wider opacity-80">CARDHOLDER</div>
                <div className="text-lg font-black uppercase tracking-wider">RULE BREAKER</div>
              </div>
              <div className="text-3xl font-black">∞</div>
            </div>
          </div>
          
          {/* Holographic chaos effects */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-black to-transparent animate-electric-slide"></div>
            <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-black to-transparent animate-electric-slide" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
        
        {/* Floating elements around card */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-chaos-float blur-sm"></div>
        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full float-chaos blur-sm"></div>
        <div className="absolute top-1/2 -right-8 w-4 h-4 bg-primary/60 rounded-full animate-rebel-pulse"></div>
      </div>
    </div>
  );
};