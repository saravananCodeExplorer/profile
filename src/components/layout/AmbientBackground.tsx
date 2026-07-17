"use client";

import dynamic from "next/dynamic";

const AmbientShapes = dynamic(() => import("@/components/three/AmbientShapes"), {
  ssr: false,
});

export default function AmbientBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)]" />

      <div className="animate-blob absolute -left-40 top-[-10%] h-[36rem] w-[36rem] rounded-full bg-neon-blue/25 blur-[120px]" />
      <div
        className="animate-blob absolute right-[-10%] top-[20%] h-[32rem] w-[32rem] rounded-full bg-neon-purple/25 blur-[120px]"
        style={{ animationDelay: "-4s" }}
      />
      <div
        className="animate-blob absolute bottom-[-15%] left-[20%] h-[30rem] w-[30rem] rounded-full bg-neon-cyan/15 blur-[130px]"
        style={{ animationDelay: "-9s" }}
      />

      <div className="absolute inset-0 hidden sm:block">
        <AmbientShapes />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
