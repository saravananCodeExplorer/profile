"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code2,
  MapPin,
  PlayCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Briefcase,
} from "lucide-react";
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
            <div className="mb-5 flex flex-wrap gap-4 text-sm text-muted">
              <span className="flex items-center gap-1.5">
                <MapPin size={15} className="text-neon-cyan" />
                {personal.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Briefcase size={15} className="text-neon-cyan" />
                {personal.experienceYears} Experience
              </span>
            </div>

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

            <motion.a
              href={personal.youtube}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="glass group mt-4 flex items-center gap-4 rounded-2xl p-4 transition-colors duration-300 hover:border-neon-blue/50"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-neon-cyan via-neon-blue to-neon-purple text-black">
                <PlayCircle size={20} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-muted">
                  YouTube
                </span>
                <span className="block text-sm font-medium text-foreground group-hover:text-neon-cyan">
                  Learn ReactJS for Beginners — Full Course
                </span>
              </span>
            </motion.a>
          </motion.div>
        </GlassCard>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="h-full p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-neon-cyan to-neon-blue text-black">
                  <Target size={18} />
                </span>
                <h3 className="font-heading text-lg font-bold">
                  Short-Term Goal
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {personal.goals.shortTerm}
              </p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GlassCard className="h-full p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-neon-purple to-neon-blue text-black">
                  <Rocket size={18} />
                </span>
                <h3 className="font-heading text-lg font-bold">
                  Long-Term Goal
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {personal.goals.longTerm}
              </p>
            </GlassCard>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 flex flex-wrap justify-center gap-3"
        >
          {personal.strengths.map((strength) => (
            <span
              key={strength}
              className="rounded-full border border-neon-blue/30 bg-neon-blue/5 px-4 py-2 text-xs font-medium text-neon-cyan"
            >
              {strength}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
