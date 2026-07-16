"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Download, Mail, Rocket, ChevronDown } from "lucide-react";
import { personal } from "@/data/content";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useScrollTo } from "@/hooks/useScrollTo";
import MagneticButton from "@/components/ui/MagneticButton";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-2 border-neon-blue/30 border-t-neon-blue" />
    </div>
  ),
});

export default function Hero() {
  const typed = useTypewriter(personal.roles);
  const scrollTo = useScrollTo();

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 order-2 lg:order-1"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-neon-cyan"
          >
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-neon-cyan" />
            Available for opportunities
          </motion.span>

          <h1 className="font-heading mt-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Hello, I&apos;m
            <br />
            <span className="text-gradient">{personal.name}</span>
          </h1>

          <p className="font-heading mt-3 text-xl text-muted sm:text-2xl">
            {personal.role}
          </p>

          <div className="mt-4 flex h-8 items-center font-mono-code text-base text-neon-blue sm:text-lg">
            <span>{typed}</span>
            <span className="ml-1 inline-block h-5 w-[2px] animate-pulse-glow bg-neon-blue" />
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <MagneticButton onClick={() => scrollTo("#projects")}>
              <Rocket size={16} /> View Projects
            </MagneticButton>
            <MagneticButton variant="ghost" href="/resume.pdf" download>
              <Download size={16} /> Download Resume
            </MagneticButton>
            <MagneticButton variant="ghost" onClick={() => scrollTo("#contact")}>
              <Mail size={16} /> Contact Me
            </MagneticButton>
          </div>
        </motion.div>

        {/* Right - 3D scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
          className="relative order-1 h-[380px] sm:h-[460px] lg:order-2 lg:h-[620px]"
        >
          <HeroScene />
        </motion.div>
      </div>

      <motion.button
        data-cursor-hover
        onClick={() => scrollTo("#about")}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted sm:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-mono-code text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <ChevronDown size={18} />
      </motion.button>
    </section>
  );
}
