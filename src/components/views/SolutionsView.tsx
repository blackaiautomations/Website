"use client";

import React from "react";
import { Bot, Workflow, Cable, Gauge, Users, Layers } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import {
  PageHero,
  SectionHeading,
  Reveal,
  BezelCard,
  CodeChip,
  CtaBand,
  Shell,
} from "@/components/ui";

const SOLUTIONS = [
  { code: "AGT", n: 1, span: "md:col-span-7", icon: Bot },
  { code: "WFL", n: 2, span: "md:col-span-5", icon: Workflow },
  { code: "CRM", n: 3, span: "md:col-span-5", icon: Users },
  { code: "DSH", n: 4, span: "md:col-span-7", icon: Gauge },
  { code: "OPS", n: 5, span: "md:col-span-6", icon: Layers },
  { code: "INT", n: 6, span: "md:col-span-6", icon: Cable },
] as const;

const MODELS = [
  { key: "intake", status: "status.ready" },
  { key: "ops", status: "status.ready" },
  { key: "insight", status: "status.concept" },
  { key: "support", status: "status.draft" },
  { key: "lead", status: "status.concept" },
] as const;

export function SolutionsView() {
  const { t } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t("sol.eyebrow")}
        title={t("sol.title")}
        lead={t("sol.lead")}
        code="BA / 01 — SOLUTIONS"
      />

      {/* Solution categories */}
      <section className="bg-ink pb-24 md:pb-36">
        <Shell>
          <div className="grid gap-4 md:grid-cols-12">
            {SOLUTIONS.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Reveal
                  key={solution.code}
                  delay={index * 0.06}
                  className={solution.span}
                >
                  <BezelCard className="h-full">
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/25 bg-gold/10">
                        <Icon className="h-5 w-5 text-gold" strokeWidth={1.25} />
                      </span>
                      <CodeChip code={solution.code} />
                    </div>
                    <h2 className="mt-6 font-display text-xl tracking-tight text-cream md:text-2xl">
                      {t(`sol.c${solution.n}t`)}
                    </h2>
                    <p className="mt-3 max-w-xl leading-relaxed text-mist">
                      {t(`sol.c${solution.n}b`)}
                    </p>
                  </BezelCard>
                </Reveal>
              );
            })}
          </div>
        </Shell>
      </section>

      {/* Integration categories */}
      <section className="bg-paper py-24 md:py-36">
        <Shell>
          <SectionHeading
            eyebrow={t("ig.eyebrow")}
            title={t("ig.title")}
            lead={t("ig.lead")}
            dark={false}
          />
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((n, index) => (
              <Reveal key={n} delay={index * 0.05}>
                <BezelCard dark={false} className="h-full">
                  <p
                    aria-hidden="true"
                    className="ghost-stroke-dark select-none font-display text-5xl leading-none"
                    dir="ltr"
                  >
                    {String(n).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-display text-lg tracking-tight text-ink">
                    {t(`ig.c${n}t`)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">
                    {t(`ig.c${n}b`)}
                  </p>
                </BezelCard>
              </Reveal>
            ))}
          </div>
        </Shell>
      </section>

      {/* Model showcase */}
      <section id="models" className="bg-ink py-24 md:py-36">
        <Shell>
          <SectionHeading
            eyebrow={t("mdp.eyebrow")}
            title={t("mdp.title")}
            lead={t("mdp.lead")}
          />
          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {MODELS.map((model, index) => (
              <Reveal key={model.key} delay={index * 0.06}>
                <BezelCard className="h-full">
                  <div className="flex items-center justify-between gap-4">
                    <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
                      {t(model.status)}
                    </p>
                    <CodeChip code={`M-0${index + 1}`} />
                  </div>
                  <h3 className="mt-5 font-display text-xl tracking-tight text-cream">
                    {t(`mdl.${model.key}.t`)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">
                    {t(`mdp.${model.key}.b`)}
                  </p>
                  <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-relaxed text-cream/70">
                    <span className="font-semibold text-gold">
                      {t("mdp.useLbl")}{" "}
                    </span>
                    {t(`mdp.${model.key}.use`)}
                  </p>
                </BezelCard>
              </Reveal>
            ))}
          </div>
        </Shell>
      </section>

      <CtaBand
        eyebrow={t("mdp.cta.eyebrow")}
        title={t("mdp.cta.title")}
        lead={t("mdp.cta.lead")}
        primaryHref="/work"
        primaryLabel={t("mdp.cta.btn")}
      />
    </>
  );
}
