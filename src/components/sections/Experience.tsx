"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="Where I've worked" title="Experience" />

        <div className="relative mt-16">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-[19px] top-2 h-full w-[2px] bg-gradient-to-b from-neon-cyan via-neon-blue to-neon-purple sm:left-1/2 sm:-translate-x-1/2"
          />

          <div className="flex flex-col gap-16">
            {experience.map((item, i) => (
              <div
                key={item.company}
                className="relative flex flex-col gap-6 sm:flex-row sm:items-start"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="animate-pulse-glow relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-neon-cyan via-neon-blue to-neon-purple sm:absolute sm:left-1/2 sm:-translate-x-1/2"
                >
                  <Briefcase size={16} className="text-black" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className={`sm:w-1/2 ${
                    i % 2 === 0
                      ? "sm:pr-10 sm:ml-0"
                      : "sm:pl-10 sm:ml-auto sm:text-right"
                  } pl-14 sm:pl-0`}
                >
                  <GlassCard className="p-6">
                    <p className="font-mono-code text-xs uppercase tracking-widest text-neon-cyan">
                      {item.duration}
                    </p>
                    <h3 className="font-heading mt-2 text-xl font-bold">
                      {item.role}
                    </h3>
                    <p className="text-muted">{item.company}</p>

                    <ul className="mt-4 space-y-2 text-sm text-muted">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>

                    <div
                      className={`mt-5 flex flex-wrap gap-2 ${
                        i % 2 !== 0 ? "sm:justify-end" : ""
                      }`}
                    >
                      {item.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-neon-blue/30 bg-neon-blue/5 px-3 py-1 text-xs text-neon-cyan"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
