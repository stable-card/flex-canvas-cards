import { useState } from "react";

export const InteractiveCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="relative group perspective-1000">
      {/* Card glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/40 to-accent/40 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Card container */}
      <div 
        className={`relative w-80 h-48 card-3d cursor-pointer ${isHovered ? 'transform-gpu' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transformStyle: 'preserve-3d',
          transform: isHovered 
            ? 'rotateY(15deg) rotateX(5deg) translateZ(20px)' 
            : 'rotateY(0deg) rotateX(0deg) translateZ(0px)'
        }}
      >
        {/* Card face */}
        <div className="w-full h-full rounded-2xl card-premium relative overflow-hidden">
          {/* Card gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/60"></div>
          
          {/* Animated mesh pattern */}
          <div className="absolute inset-0 bg-mesh opacity-30 animate-mesh-rotate"></div>
          
          {/* Card content */}
          <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
            {/* Card header */}
            <div className="flex justify-between items-start">
              <div>
                <div className="text-xs font-medium opacity-80">FLEX PERKS</div>
                <div className="text-lg font-bold">THE UNCARD</div>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-white animate-glow"></div>
              </div>
            </div>
            
            {/* Card number */}
            <div className="font-mono text-lg tracking-wider">
              •••• •••• •••• 2024
            </div>
            
            {/* Card footer */}
            <div className="flex justify-between items-end">
              <div>
                <div className="text-xs opacity-80">CARDHOLDER</div>
                <div className="font-semibold">YOUR DESIGN</div>
              </div>
              <div className="text-xs opacity-80">∞</div>
            </div>
          </div>
          
          {/* Holographic shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-gradient-x"></div>
        </div>
      </div>
    </div>
  );
};