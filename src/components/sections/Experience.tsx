"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { experience } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

function getInitials(name: string) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return initials || null;
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="Where I've worked" title="Experience" />

        <div className="mt-16 flex flex-col gap-8">
          {experience.map((item, i) => {
            const initials = getInitials(item.company);

            return (
              <motion.div
                key={`${item.role}-${item.duration}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <GlassCard
                  strong
                  className="relative overflow-hidden p-8 sm:p-10"
                >
                  <span
                    aria-hidden
                    className="font-heading pointer-events-none absolute -right-4 -top-6 select-none text-[7rem] font-extrabold leading-none text-white/5 sm:text-[9rem]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-5">
                      <div className="glow-blue flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-cyan via-neon-blue to-neon-purple">
                        {initials ? (
                          <span className="font-heading text-xl font-bold text-black">
                            {initials}
                          </span>
                        ) : (
                          <Briefcase size={26} className="text-black" />
                        )}
                      </div>

                      <div>
                        <h3 className="font-heading text-xl font-bold sm:text-2xl">
                          {item.role}
                        </h3>
                        {item.company && (
                          <p className="mt-1 text-muted">{item.company}</p>
                        )}
                      </div>
                    </div>

                    <span className="font-mono-code inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-neon-blue/30 bg-neon-blue/5 px-4 py-1.5 text-xs uppercase tracking-widest text-neon-cyan">
                      <Calendar size={13} />
                      {item.duration}
                    </span>
                  </div>

                  <ul className="relative mt-6 space-y-2.5 text-sm leading-relaxed text-muted">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-cyan" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="relative mt-6 flex flex-wrap gap-2">
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
