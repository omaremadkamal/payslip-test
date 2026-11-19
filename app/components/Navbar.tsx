"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { dict, isRTL, language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const homeHref = language === "ar" ? "/ar" : "/";

  return (
    <nav
      dir={isRTL ? "rtl" : "ltr"}
      className="w-full bg-white border-b border-gray-100 sticky top-0 z-40 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href={homeHref}
          className="text-orange-500 font-bold text-xl tracking-wide shrink-0 hover:opacity-90 transition-opacity"
        >
          {dict.nav.brand}
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-[15px] font-bold text-gray-800">
          <Link
            href={homeHref}
            className="hover:text-orange-500 transition-colors"
          >
            {dict.nav.home}
          </Link>

          <Link
            href="/our-users"
            className="hover:text-orange-500 transition-colors"
          >
            {dict.nav.ourUsers}
          </Link>

          <Link
            href="/about"
            className="hover:text-orange-500 transition-colors"
          >
            {dict.nav.about}
          </Link>

          <Link
            href="/contact-us"
            className="hover:text-orange-500 transition-colors"
          >
            {dict.nav.contactUs}
          </Link>
        </div>

        {/* Desktop Action Buttons & Language Switcher */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            type="button"
            className="bg-orange-500 text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-orange-600 transition-all shadow-xs cursor-pointer"
          >
            {dict.nav.getStarted}
          </button>

          <button
            type="button"
            className="border-2 border-orange-500 text-orange-500 px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-orange-50 transition-colors cursor-pointer"
          >
            {dict.nav.signIn}
          </button>

          {/* Interactive Language Switcher */}
          <LanguageSwitcher />
        </div>

        {/* Mobile Hamburger & Language Switcher */}
        <div className="flex lg:hidden items-center gap-3">
          <LanguageSwitcher />

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-gray-100 focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-5 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-3 font-semibold text-gray-800 text-[15px]">
            <Link
              href={homeHref}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-orange-500 transition-colors"
            >
              {dict.nav.home}
            </Link>
            <Link
              href="/our-users"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-orange-500 transition-colors"
            >
              {dict.nav.ourUsers}
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-orange-500 transition-colors"
            >
              {dict.nav.about}
            </Link>
            <Link
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-orange-500 transition-colors"
            >
              {dict.nav.contactUs}
            </Link>
          </div>

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
            <button
              type="button"
              className="w-full bg-orange-500 text-white py-2.5 rounded-md font-semibold text-sm hover:bg-orange-600 transition-colors cursor-pointer"
            >
              {dict.nav.getStarted}
            </button>
            <button
              type="button"
              className="w-full border-2 border-orange-500 text-orange-500 py-2.5 rounded-md font-semibold text-sm hover:bg-orange-50 transition-colors cursor-pointer"
            >
              {dict.nav.signIn}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
