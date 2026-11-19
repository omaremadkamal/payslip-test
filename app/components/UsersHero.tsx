"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function UsersHero() {
  const { dict } = useLanguage();

  return (
    <section className="relative w-full flex justify-center pt-32 pb-24 px-6 bg-[#fffaf5] items-center overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[350px] pointer-events-none opacity-40 blur-3xl rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(249, 115, 22, 0.22) 0%, rgba(255, 250, 245, 0) 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1280px] flex flex-col items-center text-center gap-6">
        <h1 className="text-4xl md:text-[46px] font-extrabold text-gray-900 tracking-tight leading-[1.2] max-w-[700px]">
          {dict.users.heroTitle}
        </h1>

        <p className="text-gray-500 text-[16px] md:text-[17px] leading-[1.8] max-w-[850px]">
          {dict.users.heroDesc}
        </p>
      </div>
    </section>
  );
}
