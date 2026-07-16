"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { heroTechOrbit } from "@/data/content";

function OrbitBadge({
  label,
  color,
  radiusX,
  radiusZ,
  yOffset,
  speed,
  offset,
}: {
  label: string;
  color: string;
  radiusX: number;
  radiusZ: number;
  yOffset: number;
  speed: number;
  offset: number;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + offset;
    ref.current.position.x = Math.cos(t) * radiusX;
    ref.current.position.z = Math.sin(t) * radiusZ;
    ref.current.position.y = yOffset + Math.sin(t * 1.6) * 0.35;
  });

  return (
    <group ref={ref}>
      <Html center distanceFactor={9} occlude={false} style={{ pointerEvents: "none" }}>
        <div
          className="glass"
          style={{
            padding: "6px 14px",
            borderRadius: 999,
            fontFamily: "var(--font-sora), sans-serif",
            fontSize: 13,
            fontWeight: 600,
            color: "#f5f5f7",
            whiteSpace: "nowrap",
            boxShadow: `0 0 18px -2px ${color}88`,
            border: `1px solid ${color}55`,
          }}
        >
          {label}
        </div>
      </Html>
    </group>
  );
}

export default function TechOrbit() {
  const items = heroTechOrbit.map((item, i) => {
    const angleGroup = (i / heroTechOrbit.length) * Math.PI * 2;
    return {
      ...item,
      radiusX: 3.4 + (i % 3) * 0.4,
      radiusZ: 2.6 + (i % 2) * 0.5,
      yOffset: Math.sin(angleGroup) * 1.6,
      speed: 0.12 + (i % 4) * 0.03,
      offset: angleGroup,
    };
  });

  return (
    <group>
      {items.map((item) => (
        <OrbitBadge key={item.label} {...item} />
      ))}
    </group>
  );
}
