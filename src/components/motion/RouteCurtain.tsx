"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

const SWEEP = [0.76, 0, 0.24, 1] as const;
const EASE = [0.23, 1, 0.32, 1] as const;
const TOTAL = 1.05;

/* Two-layer curtain (gold leads, ink follows) that sweeps up to cover the
   screen, holds on the white mark, then lifts away to reveal the new route.
   One keyframed pass — cover, hold, reveal — per navigation. */
export function RouteCurtain() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [prev, setPrev] = useState(pathname);
  const [active, setActive] = useState<string | null>(null);

  // Adjust state during render (React-recommended) — no setState-in-effect
  if (pathname !== prev) {
    setPrev(pathname);
    if (!reduce) setActive(pathname);
  }

  useEffect(() => {
    if (!active) return;
    const timer = setTimeout(() => setActive(null), TOTAL * 1000 + 60);
    return () => clearTimeout(timer);
  }, [active]);

  if (!active) return null;

  return (
    <div key={active} aria-hidden="true" className="fixed inset-0 z-[90]">
      {/* Gold layer — leads in, exits first */}
      <motion.div
        className="absolute inset-0 bg-gold"
        initial={{ y: "100%" }}
        animate={{ y: ["100%", "0%", "0%", "-100%"] }}
        transition={{ duration: TOTAL, times: [0, 0.34, 0.5, 0.92], ease: SWEEP }}
      />
      {/* Ink layer — trails in, holds the mark, exits last */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-ink"
        initial={{ y: "100%" }}
        animate={{ y: ["100%", "0%", "0%", "-100%"] }}
        transition={{ duration: TOTAL, times: [0, 0.42, 0.56, 1], ease: SWEEP }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.82 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.82, 1, 1, 1.06] }}
          transition={{ duration: TOTAL, times: [0.12, 0.44, 0.62, 0.96], ease: EASE }}
          className="flex flex-col items-center gap-4"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/imgs/logo/white.png"
            alt=""
            className="h-16 w-auto md:h-20"
          />
          <motion.span
            className="h-px w-16 origin-center bg-gold/60"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: [0, 1, 1, 0] }}
            transition={{ duration: TOTAL, times: [0.2, 0.5, 0.64, 0.9], ease: EASE }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
