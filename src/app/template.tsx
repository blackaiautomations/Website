"use client";

import { motion, useReducedMotion } from "framer-motion";

/* Remounts on every navigation (Next template convention), so the page
   content fades in each time. Opacity-only — no transform — to avoid
   creating a containing block that would break sticky descendants. */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: 0.18 }}
    >
      {children}
    </motion.div>
  );
}
