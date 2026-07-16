"use client";

import { type ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

type ButtonProps = CommonProps &
  Omit<
    React.ComponentProps<"button">,
    | "onDrag"
    | "onDragStart"
    | "onDragEnd"
    | "onAnimationStart"
    | "onAnimationEnd"
    | "onAnimationIteration"
  > & { href?: undefined };

type AnchorProps = CommonProps &
  Omit<
    React.ComponentProps<"a">,
    | "onDrag"
    | "onDragStart"
    | "onDragEnd"
    | "onAnimationStart"
    | "onAnimationEnd"
    | "onAnimationIteration"
  > & { href: string };

type MagneticButtonProps = ButtonProps | AnchorProps;

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-neon-blue focus-visible:outline-offset-2 disabled:opacity-60";

const variants = {
  primary:
    "text-black bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple shadow-[0_0_30px_-6px_rgba(59,168,255,0.65)] hover:shadow-[0_0_45px_-4px_rgba(168,85,247,0.75)]",
  ghost:
    "text-foreground glass hover:border-neon-blue/50 hover:text-neon-cyan",
};

export default function MagneticButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const sharedProps = {
    "data-cursor-hover": true,
    style: { x: springX, y: springY },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    whileTap: { scale: 0.94 },
    className: `${base} ${variants[variant]} ${className}`,
  };

  if ("href" in props && props.href) {
    const { href, ...rest } = props as AnchorProps;
    return (
      <motion.a
        ref={ref}
        href={href}
        {...sharedProps}
        {...rest}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      {...sharedProps}
      {...(props as ButtonProps)}
    >
      {children}
    </motion.button>
  );
}
