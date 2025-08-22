import { useState, useEffect } from "react";
import clsx from "clsx";

export const HeroCardSlider = () => {
  const designs = [0, 1, 2, 3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % designs.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-80 h-48 md:w-96 md:h-56 perspective-1000 select-none">
      {designs.map((i) => (
        <div
          key={i}
          className={clsx(
            "absolute inset-0 rounded-xl shadow-xl transition-all duration-700 ease-in-out origin-center",
            index === i
              ? "opacity-100 scale-100 rotate-0 z-20"
              : "opacity-0 scale-90 rotate-6 z-10"
          )}
          style={{
            background:
              i === 0
                ? "linear-gradient(135deg,hsl(250 100% 98%),hsl(280 100% 95%))" // light
                : i === 1
                ? "linear-gradient(135deg,hsl(240 4% 18%),hsl(240 4% 12%))" // dark
                : i === 2
                ? "linear-gradient(135deg,hsl(42 100% 90%),hsl(42 100% 85%))" // gold
                : "linear-gradient(135deg,hsl(0 0% 100% /0.4),hsl(220 100% 97% /0.4))", // glass
            color:
              i === 0
                ? "hsl(240 5% 10%)"
                : i === 1
                ? "white"
                : i === 2
                ? "hsl(42 20% 20%)"
                : "hsl(240 5% 10%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "1rem 1.25rem",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Content differs per design */}
          {i === 0 ? (
            <>
              <div style={{ fontSize: 10, opacity: 0.7 }}>FLEX PERKS</div>
              <div style={{ fontSize: 26, fontWeight: 700 }}>THE UNCARD</div>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 14 }}>
                •••• •••• •••• 2024
              </div>
              <div style={{ fontSize: 10, opacity: 0.7, alignSelf: "flex-end" }}>∞</div>
            </>
          ) : i === 1 ? (
            <>
              <div style={{ fontSize: 10, opacity: 0.8, color: "hsl(180 100% 75%)" }}>
                FLEX PERKS
              </div>
              <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: 1, color: "hsl(180 100% 80%)" }}>
                UNCARD X
              </div>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 14 }}>
                2024 ••••
              </div>
              <div style={{ fontSize: 10, opacity: 0.8, alignSelf: "flex-end" }}>∞</div>
            </>
          ) : i === 2 ? (
            <>
              <div style={{ fontSize: 10, opacity: 0.8 }}>FLEX PERKS</div>
              <div style={{ fontSize: 26, fontWeight: 700 }}>GOLD EDITION</div>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 14 }}>
                •••• 5678 2024
              </div>
              <div style={{ fontSize: 10, opacity: 0.8, alignSelf: "flex-end" }}>∞</div>
            </>
          ) : (
            <>
              <div style={{ fontSize: 10, opacity: 0.8 }}>FLEX PERKS</div>
              <div style={{ fontSize: 26, fontWeight: 700 }}>GLASS</div>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 14 }}>
                •••• •••• 9999
              </div>
              <div style={{ fontSize: 10, opacity: 0.8, alignSelf: "flex-end" }}>∞</div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};
