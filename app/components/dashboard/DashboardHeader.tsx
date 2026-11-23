"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import LanguageSwitcher from "../LanguageSwitcher";

interface HeaderProps {
  isRTL?: boolean;
}

export default function DashboardHeader({ isRTL = false }: HeaderProps) {
  const { language, dict } = useLanguage();

  return (
    <header className="w-full bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between z-20">
      {/* Left side: logo/for + company identifier */}
      <div className="flex items-center gap-3 text-sm">
        <span className="text-orange-500 font-semibold text-xs tracking-wider uppercase">
          {language === "ar" ? "لوحة التحكم" : "for"}
        </span>

        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200/80 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
          <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-300 ring-2 ring-white shrink-0">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xs font-semibold text-gray-700 tracking-tight">
            /dliver.io/cairo b...
          </span>
          <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Right side: Language Switcher, Back to Site, Help */}
      <div className="flex items-center gap-4">
        <Link
          href={language === "ar" ? "/ar" : "/"}
          className="text-xs text-gray-500 hover:text-orange-500 font-medium transition-colors hidden sm:inline-block"
        >
          {language === "ar" ? "← العودة للموقع" : "← Back to Site"}
        </Link>

        <LanguageSwitcher />

        <button
          type="button"
          className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-gray-900 transition-colors"
        >
          <span>{language === "ar" ? "مساعدة" : "Help"}</span>
          <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>
    </header>
  );
}
