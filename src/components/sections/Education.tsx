"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

export default function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Academic background" title="Education" />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
            >
              <GlassCard className="h-full p-7">
                <div className="glow-blue flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-cyan via-neon-blue to-neon-purple">
                  <GraduationCap size={22} className="text-black" />
                </div>
                <h3 className="font-heading mt-5 text-xl font-bold">
                  {item.degree}
                </h3>
                <p className="mt-1 text-muted">{item.institution}</p>
                <p className="mt-1 text-sm text-muted">{item.detail}</p>
                <span className="mt-4 inline-block rounded-full border border-neon-blue/30 bg-neon-blue/5 px-3 py-1 text-xs text-neon-cyan">
                  {item.duration}
                </span>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
