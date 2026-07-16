"use client";

import { useCallback } from "react";
import { useLenis } from "@/components/providers/SmoothScroll";

export function useScrollTo() {
  const lenis = useLenis();

  return useCallback(
    (target: string) => {
      const el = document.querySelector(target);
      if (!el) return;

      if (lenis) {
        lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.4 });
      } else {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [lenis]
  );
}
