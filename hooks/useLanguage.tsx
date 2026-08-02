"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type Lang = "vi" | "zh";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  isVi: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("vi");

  const value = useMemo(
    () => ({ lang, setLang, isVi: lang === "vi" }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

export function t<T>(lang: Lang, dict: { vi: T; zh: T }): T {
  return dict[lang];
}
