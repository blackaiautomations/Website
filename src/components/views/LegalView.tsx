"use client";

import React from "react";
import { useI18n } from "@/lib/i18n";
import { PageHero, Reveal, Shell } from "@/components/ui";

export function LegalView({ prefix }: { prefix: "pv" | "tm" }) {
  const { t } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t(`${prefix}.eyebrow`)}
        title={t(`${prefix}.title`)}
        lead={t(`${prefix}.lead`)}
        code={prefix === "pv" ? "BA / LEGAL — PRIVACY" : "BA / LEGAL — TERMS"}
      />
      <section className="bg-paper py-24 md:py-32">
        <Shell>
          <Reveal>
            <div className="mx-auto max-w-3xl">
              {prefix === "pv" ? (
                <p className="mb-10 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/45">
                  {t("pv.updated")}
                </p>
              ) : null}
              <dl className="flex flex-col gap-10">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div key={n} className="border-s-2 border-gold/50 ps-6">
                    <dt className="font-display text-lg tracking-tight text-ink">
                      {t(`${prefix}.h${n}`)}
                    </dt>
                    <dd className="mt-3 leading-relaxed text-ink/70">
                      {t(`${prefix}.p${n}`)}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </Shell>
      </section>
    </>
  );
}
