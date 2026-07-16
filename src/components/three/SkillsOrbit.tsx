"use client";

import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Icosahedron } from "@react-three/drei";
import * as THREE from "three";
import { skills } from "@/data/content";

function Core() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.15;
    ref.current.rotation.x = state.clock.elapsedTime * 0.08;
  });

  return (
    <group>
      <Icosahedron ref={ref} args={[1.15, 1]}>
        <meshBasicMaterial color="#3ba8ff" wireframe transparent opacity={0.5} />
      </Icosahedron>
      <pointLight color="#a855f7" intensity={5} distance={8} />
      <pointLight color="#22d3ee" intensity={4} distance={8} position={[2, -1, 2]} />
    </group>
  );
}

function SkillBadge({
  label,
  radius,
  theta,
  phi,
  speed,
}: {
  label: string;
  radius: number;
  theta: number;
  phi: number;
  speed: number;
}) {
  const ref = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + theta;
    ref.current.position.x = radius * Math.sin(phi) * Math.cos(t);
    ref.current.position.z = radius * Math.sin(phi) * Math.sin(t);
    ref.current.position.y = radius * Math.cos(phi) * 0.75;
  });

  return (
    <group ref={ref}>
      <Html center distanceFactor={8.5} style={{ pointerEvents: "auto" }}>
        <div
          data-cursor-hover
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="glass select-none"
          style={{
            padding: hovered ? "10px 20px" : "7px 15px",
            borderRadius: 999,
            fontFamily: "var(--font-sora), sans-serif",
            fontSize: hovered ? 15 : 12.5,
            fontWeight: 700,
            color: hovered ? "#22d3ee" : "#f5f5f7",
            whiteSpace: "nowrap",
            transition: "all 0.25s ease",
            border: hovered
              ? "1px solid rgba(34,211,238,0.7)"
              : "1px solid rgba(255,255,255,0.1)",
            boxShadow: hovered ? "0 0 26px -2px rgba(34,211,238,0.7)" : "none",
            cursor: "pointer",
          }}
        >
          {label}
        </div>
      </Html>
    </group>
  );
}

export default function SkillsOrbit() {
  const items = skills.map((label, i) => {
    const phi = Math.acos(1 - (2 * (i + 0.5)) / skills.length);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;
    return {
      label,
      radius: 3.1,
      theta,
      phi,
      speed: 0.08,
    };
  });

  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.5, 6.5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <Core />
        {items.map((item) => (
          <SkillBadge key={item.label} {...item} />
        ))}
      </Suspense>
    </Canvas>
  );
}
