"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { Shell } from "@/components/ui";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="relative overflow-hidden bg-ink">
      {/* Gradient hairline instead of a flat border */}
      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent"
      />
      {/* Brand sign-off — the real wordmark, centered */}
      <div className="flex justify-center px-6 pt-16 pb-6">
        <Link
          href="/"
          aria-label="Black Automation home"
          className="transition-opacity duration-300 hover:opacity-80"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/imgs/logo/main.png"
            alt="Black Automation"
            className="h-16 w-auto md:h-20"
          />
        </Link>
      </div>
      <Shell className="relative grid gap-14 pb-20 pt-10 md:grid-cols-[1.6fr_1fr_1.2fr]">
        <div>
          <p className="max-w-sm text-sm leading-relaxed text-mist">
            {t("footer.blurb")}
          </p>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
            {t("footer.tagline")}
          </p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-col gap-3">
          <Link
            href="/solutions"
            className="text-sm text-cream/65 transition-colors duration-200 hover:text-cream"
          >
            {t("nav.solutions")}
          </Link>
          <Link
            href="/work"
            className="text-sm text-cream/65 transition-colors duration-200 hover:text-cream"
          >
            {t("footer.cases")}
          </Link>
          <Link
            href="/contact#faq"
            className="text-sm text-cream/65 transition-colors duration-200 hover:text-cream"
          >
            {t("footer.faq")}
          </Link>
          <Link
            href="/contact"
            className="text-sm text-cream/65 transition-colors duration-200 hover:text-cream"
          >
            {t("footer.contact")}
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-cream/65 transition-colors duration-200 hover:text-cream"
          >
            {t("footer.privacy")}
          </Link>
          <Link
            href="/terms"
            className="text-sm text-cream/65 transition-colors duration-200 hover:text-cream"
          >
            {t("footer.terms")}
          </Link>
        </nav>

        <div className="flex flex-col gap-3 text-sm text-cream/65">
          <a
            href="mailto:blackaiautomations@gmail.com"
            className="transition-colors duration-200 hover:text-cream"
            dir="ltr"
          >
            blackaiautomations@gmail.com
          </a>
          <a
            href="tel:07722099055"
            className="transition-colors duration-200 hover:text-cream"
            dir="ltr"
          >
            0772 209 9055
          </a>
          <p>Empire Avenue complex B</p>
          <div className="mt-2 flex gap-4">
            <a
              href="https://www.linkedin.com/company/black-automation"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-gold"
            >
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61589529763291"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-gold"
            >
              Facebook
            </a>
          </div>
        </div>
      </Shell>

      <div className="border-t border-white/10">
        <Shell className="flex flex-wrap items-center justify-between gap-3 py-6">
          <p
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/40"
            dir="ltr"
          >
            © 2026 Black Automation — Erbil, Iraq
          </p>
          <p
            className="font-display text-sm text-gold/70"
            aria-hidden="true"
            dir="ltr"
          >
            Λ
          </p>
        </Shell>
      </div>
    </footer>
  );
}
