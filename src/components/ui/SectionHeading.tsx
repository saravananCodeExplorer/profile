"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={align === "center" ? "text-center" : "text-left"}
    >
      <span className="font-mono-code text-xs uppercase tracking-[0.35em] text-neon-cyan">
        {eyebrow}
      </span>
      <h2 className="font-heading mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <div
        className={`section-heading-line mt-5 h-[3px] w-16 rounded-full ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
