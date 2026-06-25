"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE = [0.23, 1, 0.32, 1] as const;

const container: Variants = {
  hidden: {},
  visible: (custom: { stagger: number; delay: number }) => ({
    transition: {
      staggerChildren: custom.stagger,
      delayChildren: custom.delay,
    },
  }),
};

const word: Variants = {
  hidden: { y: "118%" },
  visible: { y: "0%", transition: { duration: 0.75, ease: EASE } },
};

type Tag = "h1" | "h2" | "h3" | "p";

/* Words rise out from behind a clipping mask, staggered.
   Each word sits in its own overflow-hidden box; extra bottom padding
   (cancelled by negative margin) keeps descenders from clipping. */
export function TextReveal({
  text,
  as = "h2",
  className = "",
  stagger = 0.07,
  delay = 0.05,
}: {
  text: string;
  as?: Tag;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return React.createElement(as, { className }, text);
  }

  const MotionTag =
    as === "h1"
      ? motion.h1
      : as === "h3"
        ? motion.h3
        : as === "p"
          ? motion.p
          : motion.h2;

  const words = text.split(" ");

  return (
    <MotionTag
      className={className}
      variants={container}
      custom={{ stagger, delay }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          aria-hidden="true"
          className="inline-block overflow-hidden pb-[0.18em] -mb-[0.18em] align-bottom"
          style={{ marginInlineEnd: "0.26em" }}
        >
          <motion.span className="inline-block will-change-transform" variants={word}>
            {w}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
