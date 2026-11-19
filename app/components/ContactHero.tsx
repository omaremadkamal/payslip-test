"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ContactHero() {
  const { dict } = useLanguage();

  return (
    <section className="relative w-full flex justify-center pt-28 pb-20 px-6 bg-[#fffaf5] items-center overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[250px] pointer-events-none opacity-30 blur-3xl rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(249, 115, 22, 0.18) 0%, rgba(255, 250, 245, 0) 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1440px] flex flex-col items-center text-center gap-4">
        <h1 className="text-4xl md:text-[46px] font-extrabold text-gray-900 tracking-tight leading-tight">
          {dict.contact.heroTitle}
        </h1>

        <p className="text-gray-500 text-[15px] md:text-[16px] leading-[1.7] max-w-[620px]">
          {dict.contact.heroDesc}
        </p>
      </div>
    </section>
  );
}
