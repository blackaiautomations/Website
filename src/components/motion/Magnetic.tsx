"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

/* Wraps an interactive element so it leans toward the cursor, then
   springs back on leave. Fine-pointer + motion-safe only. */
export function Magnetic({
  children,
  strength = 0.4,
  className = "",
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();

  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const x = useSpring(mvX, { stiffness: 220, damping: 16, mass: 0.3 });
  const y = useSpring(mvY, { stiffness: 220, damping: 16, mass: 0.3 });

  if (reduce) {
    return <span className={`inline-flex ${className}`}>{children}</span>;
  }

  const handleMove = (event: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mvX.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    mvY.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const reset = () => {
    mvX.set(0);
    mvY.set(0);
  };

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x, y }}
      className={`inline-flex [@media(hover:none)]:!translate-x-0 [@media(hover:none)]:!translate-y-0 ${className}`}
    >
      {children}
    </motion.span>
  );
}
