"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certificates } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";

export default function Certificates() {
  return (
    <section id="certificates" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Verified credentials" title="Certificates" />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <TiltCard className="flex h-full items-center gap-5 p-7">
                <div className="glow-purple flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-purple to-neon-blue">
                  <Award size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
