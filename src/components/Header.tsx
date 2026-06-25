"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { ScrollProgress } from "@/components/ui";
import type { Lang } from "@/lib/dictionaries";

const NAV = [
  { href: "/", key: "nav.home" },
  { href: "/solutions", key: "nav.solutions" },
  { href: "/work", key: "nav.work" },
  { href: "/about", key: "nav.about" },
] as const;

const LANGS: { code: Lang; label: string; lang: string }[] = [
  { code: "en", label: "EN", lang: "en" },
  { code: "ar", label: "عربي", lang: "ar" },
  { code: "ckb", label: "کوردی", lang: "ckb" },
];

function LangSwitch({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useI18n();
  return (
    <div
      role="group"
      aria-label="Language"
      className={`flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1 ${
        compact ? "" : "ms-1"
      }`}
    >
      {LANGS.map((item) => (
        <button
          key={item.code}
          type="button"
          lang={item.lang}
          onClick={() => setLang(item.code)}
          aria-pressed={lang === item.code}
          className={`inline-flex min-h-[36px] cursor-pointer items-center rounded-full px-3.5 text-xs font-semibold transition-colors duration-200 ${
            lang === item.code
              ? "bg-gold text-ink"
              : "text-cream/60 hover:text-cream"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const { t } = useI18n();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the overlay on route change — adjust state during render, not in an effect
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  // Lock body scroll while the overlay is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <ScrollProgress />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-[70] focus:rounded-full focus:bg-gold focus:px-5 focus:py-2 focus:text-ink"
      >
        {t("ui.skip")}
      </a>

      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
        <nav
          aria-label="Primary navigation"
          className="flex w-full max-w-5xl items-center justify-between gap-2 rounded-full border border-white/10 bg-ink/70 py-2 ps-5 pe-2 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl"
        >
          <Link
            href="/"
            aria-label="Black Automation home"
            className="flex shrink-0 items-center gap-2.5"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/imgs/logo/white.png" alt="" className="h-6 w-auto" />
            <span className="font-display text-[13px] tracking-tight text-cream max-sm:hidden">
              Black Λutomation
            </span>
          </Link>

          <div className="hidden items-center gap-0.5 md:flex">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
                    active
                      ? "text-gold"
                      : "text-cream/65 hover:bg-white/5 hover:text-cream"
                  }`}
                >
                  {active ? (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-white/[0.07] ring-1 ring-white/10"
                      transition={{ type: "spring", duration: 0.55, bounce: 0.2 }}
                    />
                  ) : null}
                  <span className="relative">{t(item.key)}</span>
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <LangSwitch />
            <Link
              href="/contact"
              className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-gold-soft active:scale-[0.98]"
            >
              {t("nav.contact")}
            </Link>
          </div>

          {/* Mobile hamburger — two lines morphing into an X */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Close navigation" : "Open navigation"}
            className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.04] md:hidden"
          >
            <span
              className={`absolute h-[1.5px] w-4 bg-cream transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "rotate-45" : "-translate-y-[3.5px]"
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-4 bg-cream transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "-rotate-45" : "translate-y-[3.5px]"
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-ink/90 px-8 pb-10 pt-32 backdrop-blur-2xl md:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
              {[...NAV, { href: "/contact", key: "nav.contact" } as const].map(
                (item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, transform: "translateY(28px)" }}
                    animate={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{
                      delay: 0.08 + index * 0.06,
                      duration: 0.5,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      className={`block py-2 font-display text-3xl tracking-tight ${
                        pathname === item.href ? "text-gold" : "text-cream"
                      }`}
                    >
                      {t(item.key)}
                    </Link>
                  </motion.div>
                ),
              )}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="flex items-center justify-between gap-4"
            >
              <LangSwitch compact />
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/40">
                Erbil · Iraq
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
