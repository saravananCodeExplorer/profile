"use client";

import dynamic from "next/dynamic";
import SectionHeading from "@/components/ui/SectionHeading";

const SkillsOrbit = dynamic(() => import("@/components/three/SkillsOrbit"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-2 border-neon-purple/30 border-t-neon-purple" />
    </div>
  ),
});

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="What I work with" title="Skills" />
        <p className="mx-auto mt-4 max-w-lg text-center text-sm text-muted">
          Hover any orbiting skill to bring it into focus.
        </p>

        <div className="relative mt-8 h-[480px] w-full sm:h-[560px]">
          <SkillsOrbit />
        </div>
      </div>
    </section>
  );
}
