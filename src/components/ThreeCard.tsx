import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, RoundedBox } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

interface CardMeshProps {
  pointer: { x: number; y: number };
}

const CardMesh = () => {
  const groupRef = useRef<THREE.Group>(null!);
  const mainRef = useRef<THREE.Mesh>(null!);
  const [hover, setHover] = useState(false);

  // auto spin, pause on hover
  useFrame(() => {
    if (!hover) {
      groupRef.current.rotation.y += 0.015; // ~12s per full turn
    }
  });

  return (
    <group
      ref={groupRef}
      scale={hover ? 1.02 : 1}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      {/* Metallic edge */}
      <RoundedBox args={[3.52, 2.22, 0.12]} radius={0.13} smoothness={3}>
        <meshStandardMaterial color="#d4d4d8" metalness={0.8} roughness={0.2} />
      </RoundedBox>

      {/* Main ceramic body */}
      <RoundedBox
        ref={mainRef}
        args={[3.5, 2.2, 0.1]}
        radius={0.12}
        smoothness={4}
      >
        <meshPhysicalMaterial
          color="#f8f9ff"
          metalness={0.1}
          roughness={0.25}
          clearcoat={0.6}
          clearcoatRoughness={0.1}
        />

        {/* Front HTML overlay */}
        <Html
          position={[0, 0, 0.051]}
          transform
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "0.6rem 1.1rem",
            boxSizing: "border-box",
            color: "hsl(240 5% 10%)",
            fontFamily: "Inter, sans-serif",
            background:
              "linear-gradient(135deg, hsl(250 100% 97%) 0%, hsl(280 100% 99%) 100%)",
            borderRadius: 14,
            mixBlendMode: "multiply",
            boxShadow: hover
              ? "inset 0 0 12px rgba(132, 94, 247, 0.4)"
              : "inset 0 0 6px rgba(132, 94, 247, 0.15)",
            transition: "box-shadow 0.4s ease",
          }}
        >
          <div style={{ fontSize: 10, opacity: 0.7 }}>FLEX PERKS</div>
          <div style={{ fontSize: 26, fontWeight: 700 }}>THE UNCARD</div>
          <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 15 }}>
            •••• •••• •••• 2024
          </div>
          <div style={{ fontSize: 10, opacity: 0.7, alignSelf: "flex-end" }}>∞</div>
        </Html>
      </RoundedBox>

      {/* Back side */}
      <RoundedBox
        args={[3.5, 2.2, 0.1]}
        radius={0.12}
        smoothness={4}
        rotation={[0, Math.PI, 0]}
      >
        <meshPhysicalMaterial
          color="#f8f9ff"
          metalness={0.1}
          roughness={0.25}
          clearcoat={0.6}
          clearcoatRoughness={0.1}
        />

        <Html
          position={[0, 0, 0.051]}
          transform
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "0.6rem 1.1rem",
            boxSizing: "border-box",
            fontFamily: "Inter, sans-serif",
            background:
              "linear-gradient(135deg, hsl(250 100% 97%) 0%, hsl(280 100% 99%) 100%)",
            borderRadius: 14,
            mixBlendMode: "multiply",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Magnetic strip */}
          <div
            style={{
              height: 32,
              background: "hsl(240 5% 20%)",
              borderRadius: 4,
              marginBottom: 16,
            }}
          />
          {/* Signature / CVV area */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div
              style={{
                height: 24,
                background: "hsl(0 0% 100%)",
                borderRadius: 3,
              }}
            />
            <div style={{ fontSize: 10, textAlign: "right", opacity: 0.5 }}>
              CVV • • •
            </div>
          </div>
        </Html>
      </RoundedBox>
    </group>
  );
};

export const ThreeCard = ({ pointer = { x: 0, y: 0 } }: { pointer?: { x: number; y: number } }) => {
  return (
    <div className="w-full h-80 md:h-96 lg:h-[28rem]">
      <Canvas
        shadows
        frameloop="always"
        dpr={window.devicePixelRatio > 1 ? 1.5 : 1}
        camera={{ position: [0, 0, 8], fov: 25 }}
        gl={{ powerPreference: "high-performance", antialias: false }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[3, 3, 6]} intensity={1.2} />
        <directionalLight position={[-3, 2, 4]} intensity={0.8} color="#e5e0ff" />

        <CardMesh pointer={pointer} />
      </Canvas>
    </div>
  );
};
