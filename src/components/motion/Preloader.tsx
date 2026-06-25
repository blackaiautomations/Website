"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const DRAWER = [0.32, 0.72, 0, 1] as const;
const EASE = [0.23, 1, 0.32, 1] as const;

/* First-load brand reveal — a self-assembling intro that hands off to the
   particle hero. Plays once per session; lifts instantly for repeat visits
   and reduced-motion. Stays mounted (off-screen) after lifting. */
export function Preloader() {
  const reduce = useReducedMotion();
  const [lifted, setLifted] = useState(false);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("ba-intro") === "1";
    } catch {
      seen = false;
    }
    const skip = seen || reduce === true;
    if (!skip) document.body.style.overflow = "hidden";
    const timer = setTimeout(
      () => {
        setInstant(skip);
        setLifted(true);
      },
      skip ? 0 : 2000,
    );
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [reduce]);

  useEffect(() => {
    if (lifted) {
      document.body.style.overflow = "";
      try {
        sessionStorage.setItem("ba-intro", "1");
      } catch {
        // private mode — non-fatal
      }
    }
  }, [lifted]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
      initial={false}
      animate={{ y: lifted ? "-100%" : "0%" }}
      transition={{ duration: instant ? 0 : 0.85, ease: DRAWER }}
      style={{ pointerEvents: lifted ? "none" : "auto" }}
      onClick={() => {
        setInstant(false);
        setLifted(true);
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute h-[420px] w-[420px] rounded-full bg-gold/[0.12] blur-[120px]"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.94, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
        className="relative"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/imgs/logo/main.png"
          alt="Black Automation"
          className="h-auto w-60 md:w-72"
        />
      </motion.div>

      <div className="relative mt-10 h-px w-44 overflow-hidden bg-white/10">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gold"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: EASE, delay: 0.25 }}
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative mt-5 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.32em] text-cream/40"
        dir="ltr"
      >
        Initializing systems
        <motion.span
          aria-hidden="true"
          className="inline-block h-3 w-[5px] bg-gold/70"
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.5 }}
        />
      </motion.p>
    </motion.div>
  );
}
