"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Laptop from "./Laptop";
import TechOrbit from "./TechOrbit";
import ParticleField from "./ParticleField";

function MouseRig() {
  const target = useRef(new THREE.Vector3(0, 0.2, 0));

  useFrame((state) => {
    const targetX = state.pointer.x * 0.9;
    const targetY = state.pointer.y * 0.5 + 0.3;
    state.camera.position.x += (targetX - state.camera.position.x) * 0.04;
    state.camera.position.y += (targetY - state.camera.position.y) * 0.04;
    state.camera.lookAt(target.current);
  });

  return null;
}

function Lights() {
  const light = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (!light.current) return;
    light.current.position.x = Math.sin(state.clock.elapsedTime * 0.4) * 4;
    light.current.position.z = Math.cos(state.clock.elapsedTime * 0.4) * 4;
  });

  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 5, 3]} intensity={0.6} color="#ffffff" />
      <pointLight ref={light} position={[3, 2, 3]} intensity={6} color="#a855f7" distance={12} />
      <pointLight position={[-4, 1, -2]} intensity={5} color="#3ba8ff" distance={12} />
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.3, 7.5], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <Lights />
        <ParticleField count={400} />
        <Laptop />
        <TechOrbit />
        <MouseRig />
      </Suspense>
    </Canvas>
  );
}
