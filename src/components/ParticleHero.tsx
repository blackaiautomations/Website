"use client";

/* Hama's particle-network hero (AetherFlowHero), adapted for Black Automation:
   particles recolored from purple to brand gold, copy wired to i18n.
   The simulation — drift, mouse repulsion, distance-linked connections —
   is preserved exactly as designed. */

import React from "react";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Magnetic } from "@/components/motion/Magnetic";

const EASE = [0.23, 1, 0.32, 1] as const;

/* Masked word rise for the hero headline — one line per call, so the two
   lines can carry different gradients and start at staggered delays. */
const lineContainer: Variants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.08, delayChildren: delay },
  }),
};
const lineWord: Variants = {
  hidden: { y: "118%" },
  visible: { y: "0%", transition: { duration: 0.8, ease: EASE } },
};

function MaskWords({
  text,
  className,
  delay,
}: {
  text: string;
  className: string;
  delay: number;
}) {
  return (
    <motion.span
      className="block"
      variants={lineContainer}
      custom={delay}
      initial="hidden"
      animate="visible"
      aria-hidden="true"
    >
      {text.split(" ").map((w, i) => (
        <span
          key={`${w}-${i}`}
          className="inline-block overflow-hidden pb-[0.18em] -mb-[0.18em] align-bottom"
          style={{ marginInlineEnd: "0.26em" }}
        >
          {/* gradient lives on the word itself so bg-clip-text reaches the glyphs */}
          <motion.span
            className={`inline-block will-change-transform ${className}`}
            variants={lineWord}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export function ParticleHero() {
  const { t } = useI18n();
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;
    let particles: Particle[] = [];
    const mouse: { x: number | null; y: number | null; radius: number } = {
      x: null,
      y: null,
      radius: 200,
    };

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;

      constructor(
        x: number,
        y: number,
        directionX: number,
        directionY: number,
        size: number,
        color: string,
      ) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (!canvas) return;
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        // Mouse collision detection
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius + this.size) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            this.x -= forceDirectionX * force * 5;
            this.y -= forceDirectionY * force * 5;
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    function init() {
      if (!canvas) return;
      particles = [];
      const numberOfParticles = (canvas.height * canvas.width) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2 + 1;
        const x =
          Math.random() * (window.innerWidth - size * 2 - size * 2) + size * 2;
        const y =
          Math.random() * (window.innerHeight - size * 2 - size * 2) + size * 2;
        const directionX = Math.random() * 0.4 - 0.2;
        const directionY = Math.random() * 0.4 - 0.2;
        const color = "rgba(245, 180, 0, 0.8)"; // brand gold
        particles.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    const connect = () => {
      if (!ctx || !canvas) return;
      let opacityValue = 1;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const distance =
            (particles[a].x - particles[b].x) *
              (particles[a].x - particles[b].x) +
            (particles[a].y - particles[b].y) *
              (particles[a].y - particles[b].y);

          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - distance / 20000;

            const dxMouseA = particles[a].x - (mouse.x ?? 0);
            const dyMouseA = particles[a].y - (mouse.y ?? 0);
            const distanceMouseA = Math.sqrt(
              dxMouseA * dxMouseA + dyMouseA * dyMouseA,
            );

            if (mouse.x && distanceMouseA < mouse.radius) {
              ctx.strokeStyle = `rgba(255, 255, 255, ${opacityValue})`;
            } else {
              ctx.strokeStyle = `rgba(255, 212, 90, ${opacityValue * 0.55})`;
            }

            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const drawFrame = () => {
      if (!ctx) return;
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      connect();
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      drawFrame();
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
      if (reduceMotion) drawFrame();
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    if (!reduceMotion) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseout", handleMouseOut);
      animate();
    } else {
      // Static constellation for users who prefer reduced motion
      drawFrame();
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reduceMotion]);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2 + 0.5,
        duration: 0.8,
        ease: EASE,
      },
    }),
  };

  // Scroll parallax — content drifts up and fades as the hero leaves
  const heroRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : -130],
  );
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.6],
    [1, reduceMotion ? 1 : 0],
  );

  return (
    <div
      ref={heroRef}
      className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 h-full w-full"
        aria-hidden="true"
      />

      {/* Telemetry strip — decorative ops voice */}
      <div
        aria-hidden="true"
        dir="ltr"
        className="absolute top-24 z-10 flex w-full max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 font-mono text-[10px] uppercase tracking-[0.2em] text-cream/40 md:justify-between"
      >
        <span className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
          System online
        </span>
        <span>Erbil · Iraq</span>
        <span>EN · AR · CKB</span>
        <span>EST. 2026</span>
      </div>

      {/* Overlay content — Hama's structure, with scroll parallax */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 p-6 text-center"
      >
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-4 py-1.5 backdrop-blur-sm"
        >
          <Zap className="h-4 w-4 text-gold" strokeWidth={1.75} />
          <span className="text-sm font-medium text-cream/90">
            {t("footer.tagline")}
          </span>
        </motion.div>

        {reduceMotion ? (
          <h1 className="mx-auto mb-7 max-w-5xl font-display text-4xl leading-[1.06] tracking-tighter md:text-6xl lg:text-7xl">
            <span className="block bg-gradient-to-b from-white to-cream/60 bg-clip-text text-transparent">
              {t("home.t1")}
            </span>
            <span className="block bg-gradient-to-b from-gold-soft to-gold bg-clip-text text-transparent">
              {t("home.t2")}
            </span>
          </h1>
        ) : (
          <h1
            aria-label={`${t("home.t1")} ${t("home.t2")}`}
            className="mx-auto mb-7 max-w-5xl font-display text-4xl leading-[1.06] tracking-tighter md:text-6xl lg:text-7xl"
          >
            <MaskWords
              text={t("home.t1")}
              delay={0.5}
              className="bg-gradient-to-b from-white to-cream/60 bg-clip-text text-transparent"
            />
            <MaskWords
              text={t("home.t2")}
              delay={0.74}
              className="bg-gradient-to-b from-gold-soft to-gold bg-clip-text text-transparent"
            />
          </h1>
        )}

        <motion.p
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto mb-11 max-w-2xl text-base leading-relaxed text-mist md:text-lg"
        >
          {t("home.lead")}
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Magnetic strength={0.5}>
            <Link
              href="/solutions"
              className="group flex items-center gap-3 rounded-full bg-gold ps-7 pe-2 py-2 text-[15px] font-semibold text-ink shadow-[0_12px_50px_rgba(245,180,0,0.25)] transition-[transform,background-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-gold-soft active:scale-[0.97]"
            >
              <span>{t("home.cta1")}</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/10 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
                <ArrowRight
                  className="h-4 w-4 rtl:-scale-x-100"
                  strokeWidth={1.75}
                />
              </span>
            </Link>
          </Magnetic>
          <Magnetic strength={0.35}>
            <Link
              href="/contact"
              className="rounded-full border border-white/15 px-7 py-[1.05rem] text-[15px] font-medium text-cream transition-colors duration-200 hover:border-white/30 hover:bg-white/5 active:scale-[0.97]"
            >
              {t("home.cta2")}
            </Link>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#proof"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-7 z-10 flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-cream/40 transition-colors duration-200 hover:text-gold"
      >
        {t("home.scroll")}
        <span className="block h-8 w-px overflow-hidden bg-white/15">
          <motion.span
            aria-hidden="true"
            className="block h-3 w-px bg-gold"
            animate={reduceMotion ? {} : { y: [-12, 32] }}
            transition={{
              repeat: Infinity,
              duration: 1.6,
              ease: "easeInOut",
              repeatDelay: 0.4,
            }}
          />
        </span>
      </motion.a>
    </div>
  );
}
