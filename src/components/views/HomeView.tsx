"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  Bot,
  Workflow,
  Cable,
  Gauge,
  Users,
  Layers,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { ParticleHero } from "@/components/ParticleHero";
import {
  Reveal,
  CountUp,
  SectionHeading,
  PrimaryCta,
  BezelCard,
  CodeChip,
  Shell,
} from "@/components/ui";

const EASE = [0.23, 1, 0.32, 1] as const;

const STATS = [
  { value: 80, suffix: "%", key: "stats.s1" },
  { value: 85, suffix: "%", key: "stats.s2" },
  { value: 10, prefix: "+", key: "stats.s3" },
  { value: 12, suffix: "×", key: "stats.s4" },
] as const;

const SOLUTIONS = [
  { code: "AGT", title: "hs.c1t", body: "hs.c1b", span: "md:col-span-7", icon: Bot, feature: true },
  { code: "WFL", title: "hs.c2t", body: "hs.c2b", span: "md:col-span-5", icon: Workflow, feature: false },
  { code: "INT", title: "hs.c3t", body: "hs.c3b", span: "md:col-span-5", icon: Cable, feature: false },
  { code: "DSH", title: "hs.c4t", body: "hs.c4b", span: "md:col-span-7", icon: Gauge, feature: false },
  { code: "CRM", title: "hs.c5t", body: "hs.c5b", span: "md:col-span-6", icon: Users, feature: false },
  { code: "OPS", title: "hs.c6t", body: "hs.c6b", span: "md:col-span-6", icon: Layers, feature: false },
] as const;

const PROCESS = ["s1", "s2", "s3", "s4"] as const;

const MODELS = [
  { key: "intake", status: "status.ready" },
  { key: "ops", status: "status.ready" },
  { key: "insight", status: "status.concept" },
  { key: "support", status: "status.draft" },
  { key: "lead", status: "status.concept" },
] as const;

/* Live pipeline — the old site's status chips, resurrected as a heartbeat */
function AgentPipeline() {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const chips = ["home.chipIntake", "home.chipRouting", "home.chipSync"];

  return (
    <div
      className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/10 pt-5"
      aria-hidden="true"
    >
      {chips.map((chip, index) => (
        <React.Fragment key={chip}>
          <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[10px] text-cream/70">
            <motion.span
              className="inline-block h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(245,180,0,0.9)]"
              animate={
                reduce
                  ? { opacity: 0.9 }
                  : { opacity: [0.25, 1, 0.25], scale: [1, 1.3, 1] }
              }
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: index * 0.8,
                ease: "easeInOut",
              }}
            />
            {t(chip)}
          </span>
          {index < chips.length - 1 ? (
            <ChevronRight
              className="h-3.5 w-3.5 text-gold/50 rtl:-scale-x-100"
              strokeWidth={1.5}
            />
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
}

function MarqueeRow() {
  const { t } = useI18n();
  const items = [
    "Slack",
    "Notion",
    "Gmail",
    "WhatsApp",
    "Google Sheets",
    t("mq.crm"),
    t("mq.payments"),
    t("mq.forms"),
    t("mq.dashboards"),
    t("mq.databases"),
    t("mq.webhooks"),
    "APIs",
  ];
  const group = (hidden: boolean) => (
    <div
      aria-hidden={hidden}
      className="flex shrink-0 items-center gap-10 pe-10"
    >
      {items.map((item, index) => (
        <React.Fragment key={`${item}-${index}`}>
          <span className="whitespace-nowrap font-display text-xl text-cream/55 transition-colors duration-300 hover:text-gold md:text-2xl">
            {item}
          </span>
          <span className="font-display text-sm text-gold/50">Λ</span>
        </React.Fragment>
      ))}
    </div>
  );
  return (
    <div className="marquee py-2">
      <div className="marquee-inner">
        {group(false)}
        {group(true)}
      </div>
    </div>
  );
}

/* Model console — terminal chrome, animated panel swaps, processing lines */
function ModelShowcase() {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const [active, setActive] = useState<(typeof MODELS)[number]["key"]>("intake");
  const current = MODELS.find((model) => model.key === active)!;

  return (
    <div className="grid items-start gap-14 lg:grid-cols-2">
      <SectionHeading
        eyebrow={t("hm.eyebrow")}
        title={t("hm.title")}
        lead={t("hm.lead")}
      />
      <Reveal delay={0.1}>
        <div className="flex flex-wrap gap-2" role="tablist">
          {MODELS.map((model) => (
            <button
              key={model.key}
              type="button"
              role="tab"
              aria-selected={active === model.key}
              onClick={() => setActive(model.key)}
              className={`inline-flex min-h-[44px] cursor-pointer items-center rounded-full border px-4 font-mono text-xs transition-colors duration-200 active:scale-[0.98] ${
                active === model.key
                  ? "border-gold bg-gold text-ink"
                  : "border-white/15 text-cream/65 hover:border-white/30 hover:text-cream"
              }`}
            >
              {t(`mdl.${model.key}.t`)}
            </button>
          ))}
        </div>

        <BezelCard className="mt-5" innerClassName="!p-0 overflow-hidden">
          {/* Console chrome */}
          <div
            className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-5 py-3"
            dir="ltr"
            aria-hidden="true"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
            <span className="ms-auto font-mono text-[10px] uppercase tracking-[0.2em] text-cream/35">
              ba-models / live
            </span>
          </div>

          <div className="p-7 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.key}
                initial={
                  reduce ? { opacity: 0 } : { opacity: 0, y: 10, filter: "blur(3px)" }
                }
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: EASE }}
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
                    {t(current.status)}
                    <motion.span
                      aria-hidden="true"
                      className="inline-block h-3 w-[6px] bg-gold/80"
                      animate={reduce ? { opacity: 1 } : { opacity: [1, 0] }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 0.55,
                      }}
                    />
                  </p>
                  <CodeChip code={`M-0${MODELS.indexOf(current) + 1}`} />
                </div>
                <h3 className="mt-5 font-display text-2xl tracking-tight text-cream">
                  {t(`mdl.${current.key}.t`)}
                </h3>
                <p className="mt-4 leading-relaxed text-mist">
                  {t(`mdp.${current.key}.b`)}
                </p>
                <p className="mt-5 border-t border-white/10 pt-5 text-sm leading-relaxed text-cream/70">
                  <span className="font-semibold text-gold">
                    {t("mdp.useLbl")}{" "}
                  </span>
                  {t(`mdp.${current.key}.use`)}
                </p>
                {/* Processing lines */}
                <div className="mt-6 space-y-2.5" aria-hidden="true">
                  {[78, 56, 38].map((width) => (
                    <div
                      key={width}
                      style={{ width: `${width}%` }}
                      className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]"
                    >
                      <div className="animate-shimmer h-full w-1/3 rounded-full bg-gold/35" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </BezelCard>

        <Link
          href="/solutions#models"
          className="mt-6 inline-block text-sm font-medium text-gold transition-colors duration-200 hover:text-gold-soft"
        >
          {t("hm.link")} →
        </Link>
      </Reveal>
    </div>
  );
}

export function HomeView() {
  const { t } = useI18n();
  const reduce = useReducedMotion();

  return (
    <>
      <ParticleHero />

      {/* Proof — stats band */}
      <section id="proof" className="relative overflow-hidden bg-paper py-24 md:py-32">
        <div
          aria-hidden="true"
          className="bg-dots-light pointer-events-none absolute inset-0 [mask-image:radial-gradient(75%_85%_at_50%_0%,black,transparent)]"
        />
        <Shell className="relative">
          <div className="grid grid-cols-2 gap-x-8 gap-y-14 lg:grid-cols-4">
            {STATS.map((stat, index) => (
              <Reveal key={stat.key} delay={index * 0.08}>
                <p
                  className="font-display text-6xl tracking-tight text-ink md:text-7xl"
                  dir="ltr"
                >
                  {"prefix" in stat ? (
                    <span className="text-gold">{stat.prefix}</span>
                  ) : null}
                  <CountUp value={stat.value} />
                  {"suffix" in stat ? (
                    <span className="text-gold">{stat.suffix}</span>
                  ) : null}
                </p>
                <motion.span
                  aria-hidden="true"
                  className="mt-4 block h-px w-16 origin-left bg-gradient-to-r from-gold to-transparent rtl:origin-right rtl:bg-gradient-to-l"
                  initial={{ scaleX: reduce ? 1 : 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.08, ease: EASE }}
                />
                <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-ink/60">
                  {t(stat.key)}
                </p>
              </Reveal>
            ))}
          </div>
        </Shell>
      </section>

      {/* Integration marquee */}
      <section className="border-y border-white/10 bg-ink py-14">
        <p className="eyebrow mb-8 text-center">{t("mq.label")}</p>
        <MarqueeRow />
      </section>

      {/* Solutions bento */}
      <section className="relative overflow-hidden bg-ink py-24 md:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -end-40 h-[560px] w-[560px] rounded-full bg-gold/[0.06] blur-[140px]"
        />
        <Shell className="relative">
          <SectionHeading
            eyebrow={t("hs.eyebrow")}
            title={t("hs.title")}
            lead={t("hs.lead")}
          />
          <div className="mt-16 grid gap-4 md:grid-cols-12">
            {SOLUTIONS.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Reveal
                  key={solution.code}
                  delay={index * 0.06}
                  className={solution.span}
                >
                  <Link href="/solutions" className="block h-full">
                    <BezelCard className="h-full">
                      <div className="flex h-full flex-col">
                        <div className="flex items-start justify-between gap-4">
                          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/25 bg-gold/10">
                            <Icon
                              className="h-5 w-5 text-gold"
                              strokeWidth={1.25}
                            />
                          </span>
                          <CodeChip code={solution.code} />
                        </div>
                        <h3 className="mt-6 font-display text-xl tracking-tight text-cream md:text-2xl">
                          {t(solution.title)}
                        </h3>
                        <p className="mt-3 max-w-xl leading-relaxed text-mist">
                          {t(solution.body)}
                        </p>
                        {solution.feature ? <AgentPipeline /> : null}
                      </div>
                    </BezelCard>
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={0.2} className="mt-10">
            <Link
              href="/solutions"
              className="text-sm font-medium text-gold transition-colors duration-200 hover:text-gold-soft"
            >
              {t("home.cta1")} →
            </Link>
          </Reveal>
        </Shell>
      </section>

      {/* Process — a real sequence: the line draws, the steps follow */}
      <section className="relative overflow-hidden bg-paper py-24 md:py-36">
        <div
          aria-hidden="true"
          className="bg-dots-light pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_80%_at_85%_100%,black,transparent)]"
        />
        <Shell className="relative">
          <SectionHeading
            eyebrow={t("v2.proc.eyebrow")}
            title={t("v2.proc.title")}
            dark={false}
          />
          <div className="relative mt-20">
            <motion.div
              aria-hidden="true"
              className="absolute top-1 hidden h-px w-full origin-left bg-gradient-to-r from-gold/70 via-gold/30 to-transparent md:block rtl:origin-right rtl:bg-gradient-to-l"
              initial={{ scaleX: reduce ? 1 : 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.6, ease: EASE }}
            />
            <div className="grid gap-12 md:grid-cols-4 md:gap-6">
              {PROCESS.map((step, index) => (
                <Reveal key={step} delay={0.25 + index * 0.15}>
                  <div className="group relative border-s-2 border-gold/30 ps-5 md:border-s-0 md:ps-0 md:pt-10">
                    <span
                      aria-hidden="true"
                      className="absolute top-0 hidden h-2 w-2 rounded-full bg-gold ring-4 ring-gold/15 md:block"
                    />
                    <p
                      aria-hidden="true"
                      className="ghost-stroke-dark select-none font-display text-6xl leading-none"
                      dir="ltr"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-4 font-display text-lg tracking-tight text-ink transition-colors duration-300 group-hover:text-[#a87b00]">
                      {t(`v2.proc.${step}t`)}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/60">
                      {t(`v2.proc.${step}b`)}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Shell>
      </section>

      {/* Model showcase */}
      <section className="relative overflow-hidden bg-ink py-24 md:py-36">
        <div
          aria-hidden="true"
          className="bg-dots-dark pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_70%_at_80%_30%,black,transparent)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/4 -start-40 h-[480px] w-[480px] rounded-full bg-gold/[0.05] blur-[130px]"
        />
        <Shell className="relative">
          <ModelShowcase />
        </Shell>
      </section>

      {/* Case studies preview */}
      <section className="bg-paper py-24 md:py-36">
        <Shell>
          <SectionHeading
            eyebrow={t("hc.eyebrow")}
            title={t("hc.title")}
            lead={t("hc.lead")}
            dark={false}
          />
          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {(
              [
                {
                  img: "/imgs/cases/horizon-tech.png",
                  alt: "Horizon Tech Solutions",
                  meta: "hc.m1",
                  title: "hc.h1",
                  body: "hc.b1",
                  metrics: ["cs.k1a", "cs.k1b", "cs.k1c"],
                },
                {
                  img: "/imgs/cases/cc-smart-clinic.png",
                  alt: "CC Smart Clinic",
                  meta: "hc.m2",
                  title: "hc.h2",
                  body: "hc.b2",
                  metrics: ["cs.k2a", "cs.k2b", "cs.k2c"],
                },
              ] as const
            ).map((item, index) => (
              <Reveal key={item.alt} delay={index * 0.1}>
                <Link href="/work" className="block h-full">
                  <BezelCard dark={false} className="h-full">
                    <div className="flex h-28 items-center justify-center rounded-xl bg-ink px-6 ring-1 ring-transparent transition-[box-shadow] duration-500 group-hover/card:ring-gold/40">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.img}
                        alt={item.alt}
                        className="max-h-16 w-auto max-w-full object-contain"
                      />
                    </div>
                    <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/65">
                      {t(item.meta)}
                    </p>
                    <h3 className="mt-3 font-display text-xl tracking-tight text-ink">
                      {t(item.title)}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/65">
                      {t(item.body)}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="rounded-full border border-ink/15 bg-ink/[0.04] px-3 py-1 font-mono text-[10px] text-ink/70"
                        >
                          {t(metric)}
                        </span>
                      ))}
                    </div>
                    <span
                      aria-hidden="true"
                      className="mt-5 inline-flex h-8 w-8 -translate-x-1 items-center justify-center rounded-full bg-ink/[0.06] opacity-0 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/card:translate-x-0 group-hover/card:opacity-100 rtl:translate-x-1 rtl:group-hover/card:translate-x-0"
                    >
                      <ArrowRight
                        className="h-4 w-4 text-ink rtl:-scale-x-100"
                        strokeWidth={1.5}
                      />
                    </span>
                  </BezelCard>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-12">
            <PrimaryCta href="/work" dark>
              {t("hc.btn")}
            </PrimaryCta>
          </Reveal>
        </Shell>
      </section>

      {/* Contact CTA */}
      <section className="bg-ink py-24 md:py-36">
        <Shell>
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-gold-soft via-gold to-[#d79d00] px-8 py-16 md:px-16 md:py-24">
              <span
                aria-hidden="true"
                dir="ltr"
                className="pointer-events-none absolute -bottom-24 -end-6 select-none font-display text-[16rem] leading-none text-ink/[0.07] md:text-[22rem]"
              >
                Λ
              </span>
              <div className="relative max-w-2xl">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink/60">
                  {t("cta.eyebrow")}
                </p>
                <h2 className="mt-5 font-display text-3xl leading-[1.1] tracking-tight text-ink md:text-5xl">
                  {t("cta.title")}
                </h2>
                <p className="mt-6 text-base leading-relaxed text-ink/70 md:text-lg">
                  {t("cta.lead")}
                </p>
                <div className="mt-10">
                  <PrimaryCta href="/contact" dark>
                    {t("cta.btn")}
                  </PrimaryCta>
                </div>
              </div>
            </div>
          </Reveal>
        </Shell>
      </section>
    </>
  );
}
