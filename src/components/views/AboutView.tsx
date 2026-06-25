"use client";

import React from "react";
import { useI18n } from "@/lib/i18n";
import {
  PageHero,
  SectionHeading,
  Reveal,
  BezelCard,
  CtaBand,
  Shell,
} from "@/components/ui";

const TEAM = [
  {
    kind: "photo",
    img: "/imgs/founders/zrng-kak-amin-mawlood.png",
    name: "Zrng Kak Amin Mawlood",
    role: "ab.role1",
  },
  {
    kind: "photo",
    img: "/imgs/founders/mohamad-haitham-rabee.jpeg",
    name: "Mohamad Haitham Rabee",
    role: "ab.role2",
  },
  {
    kind: "signature",
    first: "Shahla",
    rest: "Hamed Mahamad",
    initials: "SH",
    name: "Shahla Hamed Mahamad",
    role: "ab.role3",
  },
] as const;

export function AboutView() {
  const { t } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t("ab.eyebrow")}
        title={t("ab.title")}
        lead={t("ab.lead")}
        code="BA / 03 — ABOUT"
      />

      {/* Company philosophy */}
      <section className="bg-paper py-24 md:py-32">
        <Shell className="grid items-start gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow={t("ab.coEyebrow")}
            title={t("ab.coTitle")}
            dark={false}
          />
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-6 text-base leading-relaxed text-ink/75 md:text-lg">
              <p>{t("ab.coP1")}</p>
              <p className="border-s-2 border-gold ps-5 text-ink/65">
                {t("ab.coP2")}
              </p>
            </div>
          </Reveal>
        </Shell>
      </section>

      {/* Team */}
      <section className="bg-ink py-24 md:py-36">
        <Shell>
          <SectionHeading
            eyebrow={t("ab.teamEyebrow")}
            title={t("ab.teamTitle")}
            lead={t("ab.teamLead")}
          />
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.08}>
                <BezelCard className="h-full" innerClassName="!p-4">
                  {member.kind === "signature" ? (
                    <div className="relative flex aspect-[4/4.6] flex-col items-center justify-center overflow-hidden rounded-[1.1rem] bg-[radial-gradient(circle_at_50%_32%,#1a1813,#080806)] px-5 text-center">
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-7 -end-2 select-none font-display text-[7rem] leading-none text-gold/[0.06]"
                        dir="ltr"
                      >
                        Λ
                      </span>
                      <span
                        className="absolute end-4 top-4 font-mono text-[10px] tracking-[0.25em] text-cream/25"
                        dir="ltr"
                      >
                        {member.initials}
                      </span>
                      <p
                        className="font-signature text-5xl leading-[1.05] text-cream md:text-6xl"
                        dir="ltr"
                      >
                        {member.first}
                      </p>
                      <p
                        className="font-signature mt-0.5 text-3xl leading-[1.1] text-gold/90 md:text-4xl"
                        dir="ltr"
                      >
                        {member.rest}
                      </p>
                      <span
                        aria-hidden="true"
                        className="mt-4 block h-px w-14 bg-gold/45"
                      />
                    </div>
                  ) : (
                    <div className="overflow-hidden rounded-[1.1rem]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={member.img}
                        alt={member.name}
                        className="aspect-[4/4.6] w-full object-cover grayscale transition-[filter,transform] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.03] hover:grayscale-0"
                      />
                    </div>
                  )}
                  <div className="px-3 pb-2 pt-5">
                    <h3 className="font-display text-base tracking-tight text-cream">
                      {member.name}
                    </h3>
                    <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-gold">
                      {t(member.role)}
                    </p>
                  </div>
                </BezelCard>
              </Reveal>
            ))}
          </div>
        </Shell>
      </section>

      {/* Backers & partners */}
      <section className="bg-paper py-24 md:py-32">
        <Shell>
          <SectionHeading
            eyebrow={t("ab.bkEyebrow")}
            title={t("ab.bkTitle")}
            lead={t("ab.bkLead")}
            dark={false}
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            <Reveal>
              <a
                href="https://www.ccsc-iq.com/#services"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit CC Smart Clinic services"
                className="block h-full"
              >
                <BezelCard dark={false} className="h-full">
                  <div className="flex h-32 items-center justify-center rounded-xl bg-ink px-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/imgs/backers/cc-smart-clinic.png"
                      alt="CC Smart Clinic"
                      className="max-h-20 w-auto object-contain"
                    />
                  </div>
                  <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-ink/65">
                    CC Smart Clinic
                  </p>
                </BezelCard>
              </a>
            </Reveal>
            <Reveal delay={0.08}>
              <BezelCard dark={false} className="h-full">
                <div className="flex h-32 items-center justify-center rounded-xl bg-ink px-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/imgs/backers/horizon-tech-solutions.png"
                    alt="Horizon Tech Solutions"
                    className="max-h-20 w-auto object-contain"
                  />
                </div>
                <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-ink/55">
                  Horizon Tech Solutions
                </p>
              </BezelCard>
            </Reveal>
          </div>
        </Shell>
      </section>

      <CtaBand
        eyebrow={t("ab.cta.eyebrow")}
        title={t("ab.cta.title")}
        lead={t("ab.cta.lead")}
        primaryHref="/contact#faq"
        primaryLabel={t("ab.cta.btn1")}
        secondaryHref="/contact"
        secondaryLabel={t("ab.cta.btn2")}
      />
    </>
  );
}
