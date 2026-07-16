"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const duration = 1600;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 350);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    document.body.style.overflow = done ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(59,168,255,0.15), transparent 60%)",
            }}
          />

          <motion.div
            className="relative flex h-24 w-24 items-center justify-center"
            style={{ perspective: 600 }}
          >
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-neon-blue/40"
              animate={{ rotateY: 360, rotateX: 360 }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ transformStyle: "preserve-3d" }}
            />
            <motion.div
              className="absolute inset-2 rounded-2xl border border-neon-purple/50"
              animate={{ rotateY: -360, rotateZ: 180 }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ transformStyle: "preserve-3d" }}
            />
            <span className="font-heading text-2xl font-bold text-gradient">
              SS
            </span>
          </motion.div>

          <div className="mt-8 w-56">
            <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-3 text-center font-mono-code text-xs tracking-widest text-muted">
              LOADING {progress}%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
