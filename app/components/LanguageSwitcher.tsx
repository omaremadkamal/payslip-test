"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitcher({
  variant = "default",
}: {
  variant?: "default" | "ar-style";
}) {
  const { language, setLanguage, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (lang: "en" | "ar") => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex items-center gap-2 rounded-md transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-1 select-none ${
          variant === "ar-style"
            ? "bg-gray-50 px-3.5 py-2 border border-gray-200 text-sm font-semibold hover:bg-gray-100 text-gray-700"
            : "bg-gray-100/90 px-3 py-2 text-xs font-bold text-gray-700 hover:bg-gray-200 border border-gray-200/60"
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        title={language === "ar" ? "تغيير اللغة" : "Change Language"}
      >
        {language === "ar" ? (
          <img
            src="https://flagcdn.com/w20/eg.png"
            alt="Egypt Flag"
            className="w-4 h-auto rounded-xs object-cover shrink-0 shadow-2xs"
          />
        ) : (
          <svg
            className="w-4 h-4 text-gray-500 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
        )}

        <span className="font-semibold uppercase tracking-wide">
          {language === "ar" ? "AR" : "EN"}
        </span>

        {/* Chevron Icon */}
        <svg
          className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-orange-500" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute mt-2 w-44 rounded-xl bg-white shadow-xl ring-1 ring-black/5 border border-gray-100 z-50 py-1.5 transition-all animate-in fade-in duration-150 ${
            isRTL ? "left-0" : "right-0"
          }`}
          role="menu"
          aria-orientation="vertical"
        >
          {/* English Option */}
          <button
            type="button"
            onClick={() => handleSelect("en")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 text-sm transition-colors text-left cursor-pointer ${
              language === "en"
                ? "bg-orange-50 font-bold text-orange-600"
                : "text-gray-700 hover:bg-gray-50 font-medium"
            }`}
            role="menuitem"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-base leading-none">🇬🇧</span>
              <span>English</span>
              <span className="text-xs text-gray-400 font-normal">(EN)</span>
            </div>
            {language === "en" && (
              <svg
                className="w-4 h-4 text-orange-600 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </button>

          {/* Arabic Option */}
          <button
            type="button"
            onClick={() => handleSelect("ar")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 text-sm transition-colors text-right cursor-pointer ${
              language === "ar"
                ? "bg-orange-50 font-bold text-orange-600"
                : "text-gray-700 hover:bg-gray-50 font-medium"
            }`}
            role="menuitem"
          >
            <div className="flex items-center gap-2.5">
              <img
                src="https://flagcdn.com/w20/eg.png"
                alt="Egypt"
                className="w-4 h-auto rounded-xs object-cover shrink-0"
              />
              <span className="font-semibold">العربية</span>
              <span className="text-xs text-gray-400 font-normal">(AR)</span>
            </div>
            {language === "ar" && (
              <svg
                className="w-4 h-4 text-orange-600 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
