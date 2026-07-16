"use client";

import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Html, RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { codeSnippetLines } from "@/data/content";

function CodeScreen() {
  const [visibleLines, setVisibleLines] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((v) =>
        v >= codeSnippetLines.length ? 1 : v + 1
      );
    }, 420);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: 300,
        height: 188,
        background:
          "linear-gradient(160deg, #0a0e1a 0%, #0d0f1e 60%, #10081f 100%)",
        borderRadius: 6,
        padding: "14px 16px",
        overflow: "hidden",
        fontFamily: "var(--font-jetbrains), monospace",
        fontSize: 11,
        lineHeight: 1.6,
        boxShadow: "inset 0 0 40px rgba(59,168,255,0.15)",
      }}
    >
      <div style={{ display: "flex", gap: 5, marginBottom: 8 }}>
        <span style={{ width: 7, height: 7, borderRadius: 99, background: "#ff5f56", display: "inline-block" }} />
        <span style={{ width: 7, height: 7, borderRadius: 99, background: "#ffbd2e", display: "inline-block" }} />
        <span style={{ width: 7, height: 7, borderRadius: 99, background: "#27c93f", display: "inline-block" }} />
      </div>
      {codeSnippetLines.slice(0, visibleLines).map((line, i) => (
        <div key={i} style={{ whiteSpace: "pre", color: i % 3 === 0 ? "#22d3ee" : i % 3 === 1 ? "#a855f7" : "#e5e7eb" }}>
          {line || " "}
        </div>
      ))}
      <span
        style={{
          display: "inline-block",
          width: 6,
          height: 12,
          background: "#3ba8ff",
          animation: "blink 1s steps(1) infinite",
        }}
      />
      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </div>
  );
}

export default function Laptop() {
  const group = useRef<THREE.Group>(null);
  const screenHinge = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.25) * 0.15 - 0.35;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.8}>
      <group ref={group} position={[0, -0.3, 0]} rotation={[0.15, -0.35, 0]}>
        {/* Base */}
        <RoundedBox args={[3.2, 0.14, 2.1]} radius={0.05} smoothness={4} position={[0, 0, 0]}>
          <meshStandardMaterial color="#15151d" metalness={0.7} roughness={0.35} />
        </RoundedBox>

        {/* Keyboard deck accent */}
        <mesh position={[0, 0.075, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[2.9, 1.75]} />
          <meshStandardMaterial color="#1d1d29" metalness={0.4} roughness={0.6} />
        </mesh>

        {/* Screen hinge group */}
        <group ref={screenHinge} position={[0, 0.07, -1.02]} rotation={[-1.65, 0, 0]}>
          <RoundedBox args={[3.2, 2.05, 0.09]} radius={0.06} smoothness={4} position={[0, 1, 0]}>
            <meshStandardMaterial color="#131319" metalness={0.6} roughness={0.4} />
          </RoundedBox>

          {/* Screen glow bezel */}
          <mesh position={[0, 1, 0.051]}>
            <planeGeometry args={[2.95, 1.85]} />
            <meshBasicMaterial color="#050a14" />
          </mesh>

          <Html
            position={[0, 1, 0.06]}
            transform
            occlude
            distanceFactor={1.85}
            style={{ pointerEvents: "none" }}
          >
            <CodeScreen />
          </Html>
        </group>

        {/* Ambient glow under laptop */}
        <pointLight color="#3ba8ff" intensity={4} distance={4} position={[0, 0.5, -0.5]} />
      </group>
    </Float>
  );
}
