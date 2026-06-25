"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react";
import { DICTS, type Lang } from "./dictionaries";

const RTL_LANGS: Lang[] = ["ar", "ckb"];
const STORAGE_KEY = "ba-lang";

/* ---- Tiny external store: language lives outside React, localStorage-backed ---- */

let currentLang: Lang = "en";
let initialized = false;
const listeners = new Set<() => void>();

function isLang(value: string | null): value is Lang {
  return value === "en" || value === "ar" || value === "ckb";
}

function detectInitial(): Lang {
  try {
    const param = new URLSearchParams(window.location.search).get("lang");
    if (isLang(param)) return param;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLang(stored)) return stored;
    const nav = window.navigator.language.toLowerCase();
    if (nav.startsWith("ar")) return "ar";
    if (nav.startsWith("ckb") || nav.startsWith("ku")) return "ckb";
  } catch {
    // storage unavailable — stay with English
  }
  return "en";
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getLangSnapshot(): Lang {
  if (!initialized) {
    initialized = true;
    currentLang = detectInitial();
  }
  return currentLang;
}

function getServerLangSnapshot(): Lang {
  return "en";
}

function setStoredLang(next: Lang) {
  currentLang = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // private mode — non-fatal
  }
  listeners.forEach((listener) => listener());
}

/* ---- React bindings ---- */

type I18nValue = {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nValue>({
  lang: "en",
  dir: "ltr",
  setLang: () => {},
  t: (key) => DICTS.en[key] ?? key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(
    subscribe,
    getLangSnapshot,
    getServerLangSnapshot,
  );

  const dir: "ltr" | "rtl" = RTL_LANGS.includes(lang) ? "rtl" : "ltr";

  // Sync the document element (external system) with the active language.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const t = useCallback(
    (key: string) => DICTS[lang][key] ?? DICTS.en[key] ?? key,
    [lang],
  );

  return (
    <I18nContext.Provider value={{ lang, dir, setLang: setStoredLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
