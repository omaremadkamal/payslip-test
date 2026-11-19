"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function AboutHero() {
  const { dict } = useLanguage();

  return (
    <section className="w-full flex justify-center px-6 pt-28 pb-24 bg-gradient-to-b from-[#fff7f0] to-white min-h-[650px] items-center">
      <div className="w-full max-w-[1440px] flex flex-col items-center text-center gap-6">
        <h1 className="text-5xl md:text-[64px] font-extrabold text-gray-900 tracking-tight leading-[1.15]">
          {dict.about.heroTitle1}{" "}
          <span className="text-[#f97316]">{dict.about.heroTitleSpan1}</span>
          <br />
          {dict.about.heroTitle2}{" "}
          <span className="text-[#f97316]">{dict.about.heroTitleSpan2}</span>
        </h1>

        <p className="text-gray-500 text-[17px] md:text-[18px] leading-[1.8] max-w-[850px] mt-2">
          {dict.about.heroDesc}
        </p>

        <button
          type="button"
          className="mt-6 bg-[#f97316] text-white px-10 py-4 rounded-full font-bold text-[16px] hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30 cursor-pointer"
        >
          {dict.about.startTrial}
        </button>
      </div>
    </section>
  );
}
