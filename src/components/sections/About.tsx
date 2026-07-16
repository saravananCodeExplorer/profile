"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, ShieldCheck, Sparkles } from "lucide-react";
import { personal, profileImage } from "@/data/content";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";

const highlights = [
  { icon: Code2, label: "Clean, scalable UI architecture" },
  { icon: ShieldCheck, label: "Secure full-stack applications" },
  { icon: Sparkles, label: "Modern React & Node ecosystems" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Get to know me" title="About Me" />

        <GlassCard
          strong
          className="mt-14 grid grid-cols-1 items-center gap-10 p-8 sm:p-12 md:grid-cols-[280px_1fr] md:gap-14"
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto"
          >
            <div className="relative h-56 w-56">
              <div className="animate-pulse-glow absolute -inset-3 rounded-full bg-gradient-to-br from-neon-cyan via-neon-blue to-neon-purple opacity-40 blur-2xl" />
              <div className="absolute inset-0 overflow-hidden rounded-full bg-gradient-to-br from-neon-cyan via-neon-blue to-neon-purple p-[3px]">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-background-alt">
                  <Image
                    src={profileImage}
                    alt={personal.name}
                    fill
                    sizes="224px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <motion.div
                aria-hidden
                className="absolute inset-[-10px] rounded-full border border-dashed border-neon-blue/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            <div className="flex flex-col gap-4">
              {personal.about.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {highlights.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="glass flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-foreground"
                >
                  <Icon size={18} className="text-neon-cyan" />
                  {label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </GlassCard>
      </div>
    </section>
  );
}
