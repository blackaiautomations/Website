"use client";

import React from "react";
import { useI18n } from "@/lib/i18n";
import { PageHero, Reveal, CtaBand, Shell } from "@/components/ui";

const CASES = [
  {
    img: "/imgs/cases/horizon-tech.png",
    alt: "Horizon Tech Solutions",
    meta: "cs.meta1",
    title: "cs.h1",
    challenge: "cs.ch1",
    solution: "cs.sol1",
    result: "cs.res1",
    metrics: ["cs.k1a", "cs.k1b", "cs.k1c"],
    flip: false,
  },
  {
    img: "/imgs/cases/cc-smart-clinic.png",
    alt: "CC Smart Clinic",
    meta: "cs.meta2",
    title: "cs.h2",
    challenge: "cs.ch2",
    solution: "cs.sol2",
    result: "cs.res2",
    metrics: ["cs.k2a", "cs.k2b", "cs.k2c"],
    flip: true,
  },
] as const;

export function WorkView() {
  const { t } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t("cs.eyebrow")}
        title={t("cs.title")}
        lead={t("cs.lead")}
        code="BA / 02 — CASE STUDIES"
      />

      <section className="bg-paper py-24 md:py-32">
        <Shell className="flex flex-col gap-24 md:gap-32">
          {CASES.map((item) => (
            <Reveal key={item.alt}>
              <article className="grid items-start gap-10 lg:grid-cols-5">
                <div
                  className={`lg:col-span-2 lg:sticky lg:top-32 ${
                    item.flip ? "lg:order-2" : ""
                  }`}
                >
                  <div className="flex h-44 items-center justify-center rounded-[1.6rem] bg-ink px-8 ring-1 ring-black/20">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="max-h-24 w-auto max-w-full object-contain"
                    />
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="rounded-full border border-gold/50 bg-gold/15 px-3.5 py-1.5 font-mono text-[11px] text-ink"
                      >
                        {t(metric)}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className={`lg:col-span-3 ${item.flip ? "lg:order-1" : ""}`}
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/65">
                    {t(item.meta)}
                  </p>
                  <h2 className="mt-4 font-display text-2xl leading-[1.15] tracking-tight text-ink md:text-3xl">
                    {t(item.title)}
                  </h2>
                  <dl className="mt-8 flex flex-col gap-7">
                    {(
                      [
                        ["cs.lblCh", item.challenge],
                        ["cs.lblSol", item.solution],
                        ["cs.lblRes", item.result],
                      ] as const
                    ).map(([label, body]) => (
                      <div
                        key={label}
                        className="border-s-2 border-gold/60 ps-5"
                      >
                        <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
                          {t(label).replace(":", "")}
                        </dt>
                        <dd className="mt-2 leading-relaxed text-ink/75">
                          {t(body)}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </Shell>
      </section>

      <CtaBand
        eyebrow={t("cs.cta.eyebrow")}
        title={t("cs.cta.title")}
        lead={t("cs.cta.lead")}
        primaryHref="/about"
        primaryLabel={t("cs.cta.btn")}
      />
    </>
  );
}
