"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  ShoppingCart,
  BarChart3,
  Search,
  Users,
  Wind,
  Zap,
  Ship,
  Thermometer,
  Droplets,
} from "lucide-react";

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

const leadStatuses: { label: string; color: string }[] = [
  { label: "New", color: "#22d3ee" },
  { label: "Contacted", color: "#3ba8ff" },
  { label: "Won", color: "#a855f7" },
];

function ErpPreview() {
  return (
    <div className="relative flex h-full w-full flex-col justify-between p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-neon-cyan">
          <Users size={16} /> Lead Management
        </div>
        <Search size={14} className="text-muted" />
      </div>

      <div className="flex flex-col gap-1.5">
        {leadStatuses.map((status, i) => (
          <motion.div
            key={status.label}
            className="glass flex items-center justify-between rounded-lg px-3 py-2"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
          >
            <div className="flex items-center gap-2">
              <span className="h-6 w-6 rounded-full bg-white/10" />
              <span className="h-1.5 w-14 rounded-full bg-white/15" />
            </div>
            <span
              className="rounded-full px-2 py-0.5 text-[9px] font-semibold"
              style={{
                color: status.color,
                backgroundColor: `${status.color}1a`,
                border: `1px solid ${status.color}55`,
              }}
            >
              {status.label}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-between text-[10px] text-muted">
        <span>Page 1 of 4</span>
        <div className="flex gap-1">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${
                i === 0 ? "bg-neon-cyan" : "bg-white/15"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function WindmillPreview() {
  return (
    <div className="relative flex h-full w-full flex-col justify-between p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-neon-cyan">
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="inline-flex"
          >
            <Wind size={16} />
          </motion.span>
          Turbine Monitor
        </div>
        <span className="flex items-center gap-1 text-[10px] text-neon-cyan">
          <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-neon-cyan" />
          Online
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="glass rounded-xl p-2.5">
          <p className="text-[10px] text-muted">Wind Speed</p>
          <p className="font-heading text-sm font-bold text-gradient">
            18.4 km/h
          </p>
        </div>
        <div className="glass flex items-center justify-between rounded-xl p-2.5">
          <div>
            <p className="text-[10px] text-muted">Output</p>
            <p className="font-heading text-sm font-bold text-gradient">
              2.3 MW
            </p>
          </div>
          <Zap size={14} className="text-neon-cyan" />
        </div>
      </div>

      <div className="flex items-end gap-1 h-12">
        {[0.5, 0.8, 0.4, 0.9, 0.6, 1, 0.7, 0.5, 0.85].map((h, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0.2 }}
            animate={{ scaleY: [0.2, h, 0.3, h * 0.8, 0.2] }}
            transition={{
              duration: 2.6 + i * 0.1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "bottom" }}
            className="h-full flex-1 rounded-sm bg-gradient-to-t from-neon-blue to-neon-cyan"
          />
        ))}
      </div>
    </div>
  );
}

const shipMetrics: { label: string; value: string; icon: typeof Thermometer }[] = [
  { label: "Temp", value: "24.6°C", icon: Thermometer },
  { label: "Water Quality", value: "Good", icon: Droplets },
];

function ShipPreview() {
  return (
    <div className="relative flex h-full w-full flex-col justify-between p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-neon-cyan">
          <Ship size={16} /> Environmental Monitor
        </div>
        <span className="flex items-center gap-1 text-[10px] text-neon-cyan">
          <ShieldCheck size={12} />
          Compliant
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {shipMetrics.map(({ label, value, icon: Icon }, i) => (
          <motion.div
            key={label}
            className="glass flex items-center justify-between rounded-xl p-2.5"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
          >
            <div>
              <p className="text-[10px] text-muted">{label}</p>
              <p className="font-heading text-sm font-bold text-gradient">
                {value}
              </p>
            </div>
            <Icon size={14} className="text-neon-cyan" />
          </motion.div>
        ))}
      </div>

      <div className="relative h-12 overflow-hidden rounded-lg">
        <svg viewBox="0 0 200 48" className="h-full w-full" preserveAspectRatio="none">
          <motion.path
            d="M0,32 C20,10 40,44 60,26 C80,8 100,40 120,24 C140,8 160,36 180,20 C190,12 195,18 200,14"
            fill="none"
            stroke="url(#gradShip)"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="gradShip" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default function ProjectPreview({
  variant,
}: {
  variant: "iam" | "ecommerce" | "testplatform" | "erp" | "windmill" | "ship";
}) {
  if (variant === "iam") return <IamPreview />;
  if (variant === "ecommerce") return <EcommercePreview />;
  if (variant === "erp") return <ErpPreview />;
  if (variant === "ship") return <ShipPreview />;
  if (variant === "windmill") return <WindmillPreview />;
  return <TestPlatformPreview />;
}
