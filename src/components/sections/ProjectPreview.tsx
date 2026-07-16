"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ShoppingCart, BarChart3 } from "lucide-react";

const barVariants = {
  animate: (i: number) => ({
    scaleY: [0.4, 1, 0.6, 0.9, 0.5][i % 5],
    transition: {
      duration: 2 + i * 0.15,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const,
    },
  }),
};

function IamPreview() {
  return (
    <div className="relative flex h-full w-full flex-col justify-between p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-neon-cyan">
          <ShieldCheck size={16} /> Access Dashboard
        </div>
        <span className="h-2 w-2 animate-pulse-glow rounded-full bg-neon-cyan" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {["Admin", "Editor", "Viewer"].map((role, i) => (
          <div key={role} className="glass rounded-xl p-2.5 text-center">
            <p className="text-[10px] text-muted">{role}</p>
            <motion.p
              className="font-heading text-sm font-bold text-gradient"
              initial={{ opacity: 0.4 }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
            >
              {[128, 42, 310][i]}
            </motion.p>
          </div>
        ))}
      </div>
      <div className="flex items-end gap-1.5 h-16">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <motion.div
            key={i}
            custom={i}
            variants={barVariants}
            animate="animate"
            style={{ transformOrigin: "bottom" }}
            className="h-full flex-1 rounded-sm bg-gradient-to-t from-neon-blue to-neon-purple"
          />
        ))}
      </div>
    </div>
  );
}

function EcommercePreview() {
  return (
    <div className="relative flex h-full w-full flex-col justify-between p-5">
      <div className="flex items-center gap-2 text-xs text-neon-cyan">
        <ShoppingCart size={16} /> Storefront
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="glass aspect-square rounded-xl bg-gradient-to-br from-neon-purple/20 to-neon-blue/20"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.25 }}
          />
        ))}
      </div>
      <motion.div
        className="glass flex items-center justify-between rounded-xl px-3 py-2"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <span className="text-[11px] text-muted">Cart total</span>
        <span className="font-heading text-sm font-bold text-gradient">
          $248.00
        </span>
      </motion.div>
    </div>
  );
}

function TestPlatformPreview() {
  return (
    <div className="relative flex h-full w-full flex-col justify-between p-5">
      <div className="flex items-center gap-2 text-xs text-neon-cyan">
        <BarChart3 size={16} /> Result Analytics
      </div>
      <div className="flex items-center justify-center">
        <svg width="90" height="90" viewBox="0 0 36 36" className="-rotate-90">
          <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
          <motion.circle
            cx="18"
            cy="18"
            r="15.5"
            fill="none"
            stroke="url(#gradTest)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="97.4"
            initial={{ strokeDashoffset: 97.4 }}
            whileInView={{ strokeDashoffset: 22 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="gradTest" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex justify-between text-[11px] text-muted">
        <span>Pass rate</span>
        <span className="font-semibold text-neon-cyan">78%</span>
      </div>
    </div>
  );
}

export default function ProjectPreview({
  variant,
}: {
  variant: "iam" | "ecommerce" | "testplatform";
}) {
  if (variant === "iam") return <IamPreview />;
  if (variant === "ecommerce") return <EcommercePreview />;
  return <TestPlatformPreview />;
}
