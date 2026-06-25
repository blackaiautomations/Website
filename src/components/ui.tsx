"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useInView,
  useReducedMotion,
  animate,
  useScroll,
  useSpring,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TextReveal } from "@/components/motion/TextReveal";
import { Magnetic } from "@/components/motion/Magnetic";

const EASE = [0.23, 1, 0.32, 1] as const;

/* ---------- Scroll progress hairline ---------- */

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 30 });
  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gold"
      style={{ scaleX }}
    />
  );
}

/* ---------- Scroll reveal ---------- */

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={
        reduce
          ? { opacity: 0 }
          : { opacity: 0, transform: "translateY(28px)", filter: "blur(6px)" }
      }
      whileInView={
        reduce
          ? { opacity: 1 }
          : { opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" }
      }
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Count-up stat ---------- */

export function CountUp({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: EASE,
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  // Reduced motion (or pre-animation SSR) renders the final value directly
  const shown = reduce ? value : inView ? display : 0;

  return (
    <span ref={ref} dir="ltr" className="tabular-nums">
      {prefix}
      {shown}
      {suffix}
    </span>
  );
}

/* ---------- Section heading ---------- */

export function SectionHeading({
  eyebrow,
  title,
  lead,
  dark = true,
  className = "",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <Reveal>
        <p className="eyebrow mb-5">{eyebrow}</p>
      </Reveal>
      <TextReveal
        as="h2"
        text={title}
        className={`font-display text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.12] tracking-tight ${
          dark ? "text-cream" : "text-ink"
        }`}
      />
      {lead ? (
        <Reveal delay={0.15}>
          <p
            className={`mt-6 text-base md:text-lg leading-relaxed ${
              dark ? "text-mist" : "text-ink/65"
            }`}
          >
            {lead}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

/* ---------- Buttons ---------- */

export function PrimaryCta({
  href,
  children,
  dark = false,
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <Magnetic strength={0.45}>
      <Link
        href={href}
        className={`group inline-flex items-center gap-3 rounded-full ps-7 pe-2 py-2 font-semibold text-[15px] transition-[transform,background-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] ${
          dark
            ? "bg-ink text-cream hover:bg-coal"
            : "bg-gold text-ink hover:bg-gold-soft"
        }`}
      >
        <span>{children}</span>
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 ${
            dark ? "bg-white/10" : "bg-black/10"
          }`}
        >
          <ArrowRight className="h-4 w-4 rtl:-scale-x-100" strokeWidth={1.75} />
        </span>
      </Link>
    </Magnetic>
  );
}

export function GhostCta({
  href,
  children,
  dark = true,
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <Magnetic strength={0.3}>
      <Link
        href={href}
        className={`inline-flex items-center rounded-full border px-7 py-[1.05rem] text-[15px] font-medium transition-colors duration-200 active:scale-[0.97] ${
          dark
            ? "border-white/15 text-cream hover:bg-white/5 hover:border-white/25"
            : "border-black/15 text-ink hover:bg-black/5 hover:border-black/25"
        }`}
      >
        {children}
      </Link>
    </Magnetic>
  );
}

/* ---------- Double-bezel card with cursor spotlight ---------- */

export function BezelCard({
  children,
  dark = true,
  className = "",
  innerClassName = "",
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
  innerClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // CSS vars set directly on the element — no re-renders, no child recalc
  const handleMove = (event: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`group/card relative rounded-[1.6rem] p-1.5 transition-[box-shadow,transform] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-0.5 ${
        dark
          ? "bg-white/[0.03] ring-1 ring-white/10 hover:ring-gold/30 hover:shadow-[0_24px_70px_rgba(0,0,0,0.45)]"
          : "bg-black/[0.04] ring-1 ring-black/10 hover:ring-gold/60 hover:shadow-[0_24px_60px_rgba(5,5,5,0.12)]"
      } ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 rounded-[1.6rem] opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
        style={{
          background: dark
            ? "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(245,180,0,0.09), transparent 65%)"
            : "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(245,180,0,0.14), transparent 65%)",
        }}
      />
      <div
        className={`relative h-full rounded-[calc(1.6rem-0.375rem)] p-7 md:p-8 ${
          dark
            ? "bg-[#0e0d0a]/95 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]"
            : "bg-cream/95 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]"
        } ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
}

/* ---------- Mono code chip (AGT / WFL / ...) ---------- */

export function CodeChip({ code }: { code: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-gold">
      {code}
    </span>
  );
}

/* ---------- Inner page hero ---------- */

export function PageHero({
  eyebrow,
  title,
  lead,
  code,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  code?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden pt-44 pb-24 md:pt-52 md:pb-32">
      {/* Blueprint texture, faded radially so it reads as atmosphere */}
      <div
        aria-hidden="true"
        className="bg-dots-dark pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_75%_at_30%_15%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-44 start-1/4 h-[520px] w-[520px] rounded-full bg-gold/[0.08] blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 -end-32 h-[380px] w-[380px] rounded-full bg-cream/[0.04] blur-[110px]"
      />
      <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="max-w-3xl">
          <Reveal>
            {code ? (
              <p
                dir="ltr"
                className="mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/35"
              >
                {code}
              </p>
            ) : null}
            <p className="eyebrow mb-6">{eyebrow}</p>
          </Reveal>
          <TextReveal
            as="h1"
            text={title}
            stagger={0.06}
            className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.06] tracking-tight text-cream"
          />
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-mist">
              {lead}
            </p>
          </Reveal>
          <motion.div
            aria-hidden="true"
            className="mt-9 h-px w-28 origin-left bg-gradient-to-r from-gold to-transparent rtl:origin-right rtl:bg-gradient-to-l"
            initial={{ scaleX: reduce ? 1 : 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.4, ease: EASE }}
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Next-step CTA band ---------- */

export function CtaBand({
  eyebrow,
  title,
  lead,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gold px-8 py-14 md:px-14 md:py-20">
            <span
              aria-hidden="true"
              dir="ltr"
              className="pointer-events-none absolute -bottom-20 -end-4 select-none font-display text-[13rem] leading-none text-ink/[0.07] md:text-[18rem]"
            >
              Λ
            </span>
            <div className="relative max-w-2xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink/60">
                {eyebrow}
              </p>
              <h2 className="mt-5 font-display text-3xl leading-[1.12] tracking-tight text-ink md:text-4xl">
                {title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink/70">
                {lead}
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <PrimaryCta href={primaryHref} dark>
                  {primaryLabel}
                </PrimaryCta>
                {secondaryHref && secondaryLabel ? (
                  <GhostCta href={secondaryHref} dark={false}>
                    {secondaryLabel}
                  </GhostCta>
                ) : null}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Section shell ---------- */

export function Shell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 md:px-8 ${className}`}>
      {children}
    </div>
  );
}
