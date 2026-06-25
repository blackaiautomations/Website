"use client";

import React from "react";
import { Mail, Phone, MapPin, AtSign, Plus } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import {
  PageHero,
  SectionHeading,
  Reveal,
  BezelCard,
  Shell,
} from "@/components/ui";

export function ContactView() {
  const { t } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t("ct.eyebrow")}
        title={t("ct.title")}
        lead={t("ct.lead")}
        code="BA / 04 — CONTACT"
      />

      {/* Contact channels */}
      <section className="bg-ink pb-24 md:pb-32">
        <Shell>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal>
              <BezelCard className="h-full">
                <Mail className="h-5 w-5 text-gold" strokeWidth={1.5} />
                <h2 className="mt-5 font-display text-lg tracking-tight text-cream">
                  {t("ct.h1")}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  <span className="text-cream/60">{t("ct.lblGeneral")} </span>
                  <a
                    href="mailto:blackaiautomations@gmail.com"
                    dir="ltr"
                    className="break-all text-cream underline decoration-gold/40 underline-offset-4 transition-colors duration-200 hover:decoration-gold"
                  >
                    blackaiautomations@gmail.com
                  </a>
                </p>
              </BezelCard>
            </Reveal>

            <Reveal delay={0.06}>
              <BezelCard className="h-full">
                <Phone className="h-5 w-5 text-gold" strokeWidth={1.5} />
                <h2 className="mt-5 font-display text-lg tracking-tight text-cream">
                  {t("ct.h2")}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  <span className="text-cream/60">{t("ct.lblMain")} </span>
                  <a
                    href="tel:07722099055"
                    dir="ltr"
                    className="text-cream underline decoration-gold/40 underline-offset-4 transition-colors duration-200 hover:decoration-gold"
                  >
                    0772 209 9055
                  </a>
                </p>
              </BezelCard>
            </Reveal>

            <Reveal delay={0.12}>
              <BezelCard className="h-full">
                <MapPin className="h-5 w-5 text-gold" strokeWidth={1.5} />
                <h2 className="mt-5 font-display text-lg tracking-tight text-cream">
                  {t("ct.h3")}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  <span className="text-cream/60">{t("ct.lblCompany")} </span>
                  Empire Avenue complex B
                </p>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  <span className="text-cream/60">{t("ct.lblBooking")} </span>
                  <a
                    href="mailto:blackaiautomations@gmail.com"
                    dir="ltr"
                    className="break-all text-cream underline decoration-gold/40 underline-offset-4 transition-colors duration-200 hover:decoration-gold"
                  >
                    blackaiautomations@gmail.com
                  </a>
                </p>
              </BezelCard>
            </Reveal>

            <Reveal delay={0.18}>
              <BezelCard className="h-full">
                <AtSign className="h-5 w-5 text-gold" strokeWidth={1.5} />
                <h2 className="mt-5 font-display text-lg tracking-tight text-cream">
                  {t("ct.h4")}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/company/black-automation"
                    target="_blank"
                    rel="noopener noreferrer"
                    dir="ltr"
                    className="text-cream underline decoration-gold/40 underline-offset-4 transition-colors duration-200 hover:decoration-gold"
                  >
                    black-automation
                  </a>
                </p>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  Facebook:{" "}
                  <a
                    href="https://www.facebook.com/profile.php?id=61589529763291"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream underline decoration-gold/40 underline-offset-4 transition-colors duration-200 hover:decoration-gold"
                  >
                    Black Automation
                  </a>
                </p>
              </BezelCard>
            </Reveal>
          </div>
        </Shell>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-paper py-24 md:py-32">
        <Shell className="grid items-start gap-14 lg:grid-cols-[2fr_3fr]">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              eyebrow={t("fq.eyebrow")}
              title={t("fq.title")}
              lead={t("fq.lead")}
              dark={false}
            />
          </div>
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-3">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <details
                  key={n}
                  className="faq-item group rounded-[1.2rem] bg-cream ring-1 ring-black/10 transition-colors duration-200 open:ring-gold/60"
                  open={n === 1}
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-5">
                    <span className="font-semibold text-ink">
                      {t(`fq.q${n}`)}
                    </span>
                    <span className="faq-chevron flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink/5">
                      <Plus className="h-4 w-4 text-ink" strokeWidth={1.5} />
                    </span>
                  </summary>
                  <p className="px-6 pb-6 text-sm leading-relaxed text-ink/65">
                    {t(`fq.a${n}`)}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </Shell>
      </section>
    </>
  );
}
