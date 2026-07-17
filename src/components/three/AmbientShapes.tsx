"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

type ShapeConfig = {
  position: [number, number, number];
  geometry: "box" | "icosahedron" | "octahedron" | "torus";
  size: number;
  color: string;
  rotationSpeed: number;
  floatSpeed: number;
};

const shapes: ShapeConfig[] = [
  { position: [-7, 3.5, -2], geometry: "icosahedron", size: 0.9, color: "#3ba8ff", rotationSpeed: 0.15, floatSpeed: 1.1 },
  { position: [7.5, 2, -3], geometry: "box", size: 0.7, color: "#a855f7", rotationSpeed: 0.2, floatSpeed: 0.9 },
  { position: [-6.5, -3, -1], geometry: "octahedron", size: 0.8, color: "#22d3ee", rotationSpeed: 0.12, floatSpeed: 1.3 },
  { position: [8, -2.5, -2], geometry: "torus", size: 0.6, color: "#3ba8ff", rotationSpeed: 0.25, floatSpeed: 1.0 },
  { position: [-3, 5.2, -4], geometry: "box", size: 0.5, color: "#22d3ee", rotationSpeed: 0.18, floatSpeed: 1.2 },
  { position: [4.5, 4.6, -3], geometry: "icosahedron", size: 0.6, color: "#a855f7", rotationSpeed: 0.14, floatSpeed: 0.8 },
  { position: [0.5, -5.2, -5], geometry: "octahedron", size: 0.7, color: "#3ba8ff", rotationSpeed: 0.16, floatSpeed: 1.4 },
  { position: [-8.5, 0, -3], geometry: "torus", size: 0.55, color: "#a855f7", rotationSpeed: 0.22, floatSpeed: 1.1 },
];

function ShapeMesh({ config }: { config: ShapeConfig }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * config.rotationSpeed;
    ref.current.rotation.y += delta * config.rotationSpeed * 0.7;
  });

  return (
    <Float speed={config.floatSpeed} rotationIntensity={0.4} floatIntensity={1.4}>
      <mesh ref={ref} position={config.position}>
        {config.geometry === "box" && (
          <boxGeometry args={[config.size, config.size, config.size]} />
        )}
        {config.geometry === "icosahedron" && (
          <icosahedronGeometry args={[config.size, 0]} />
        )}
        {config.geometry === "octahedron" && (
          <octahedronGeometry args={[config.size, 0]} />
        )}
        {config.geometry === "torus" && (
          <torusGeometry args={[config.size, config.size * 0.35, 8, 24]} />
        )}
        <meshBasicMaterial color={config.color} wireframe transparent opacity={0.22} />
      </mesh>
    </Float>
  );
}

export default function AmbientShapes() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 10], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: "none" }}
    >
      {shapes.map((config, i) => (
        <ShapeMesh key={i} config={config} />
      ))}
    </Canvas>
  );
}
