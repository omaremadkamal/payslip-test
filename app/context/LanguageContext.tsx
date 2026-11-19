"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Locale, TranslationType } from "../i18n/translations";
import { useRouter, usePathname } from "next/navigation";

interface LanguageContextType {
  language: Locale;
  setLanguage: (lang: Locale) => void;
  toggleLanguage: () => void;
  dir: "ltr" | "rtl";
  isRTL: boolean;
  t: (path: string) => any;
  dict: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  const router = useRouter();
  const pathname = usePathname();

  // Consistent initial state for SSR and client initial hydration:
  // Derived only from pathname or initialLocale. Never branch on window/localStorage here.
  const isArPath = pathname?.startsWith("/ar");
  const startingLang: Locale = initialLocale || (isArPath ? "ar" : "en");

  const [language, setLanguageState] = useState<Locale>(startingLang);

  // Sync client state in useEffect (runs ONLY after initial hydration finishes)
  useEffect(() => {
    if (pathname?.startsWith("/ar")) {
      setLanguageState("ar");
      document.documentElement.lang = "ar";
      document.documentElement.dir = "rtl";
      localStorage.setItem("payroll_lang", "ar");
    } else {
      const saved = localStorage.getItem("payroll_lang") as Locale;
      if (saved && (saved === "ar" || saved === "en")) {
        setLanguageState(saved);
        document.documentElement.lang = saved;
        document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
      } else {
        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";
      }
    }
  }, [pathname]);

  const setLanguage = (newLang: Locale) => {
    if (newLang === language) return;
    setLanguageState(newLang);
    localStorage.setItem("payroll_lang", newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";

    // Handle route sync between / and /ar
    if (pathname === "/ar" && newLang === "en") {
      router.push("/");
    } else if (pathname === "/" && newLang === "ar") {
      router.push("/ar");
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  const t = (path: string): any => {
    const keys = path.split(".");
    let current: any = translations[language];
    for (const key of keys) {
      if (current === undefined || current === null) return path;
      current = current[key];
    }
    return current ?? path;
  };

  const dict = translations[language] || translations.en;
  const dir = language === "ar" ? "rtl" : "ltr";
  const isRTL = language === "ar";

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        dir,
        isRTL,
        t,
        dict,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
