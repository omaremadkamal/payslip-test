"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function AboutCTA() {
  const { dict } = useLanguage();

  return (
    <section className="w-full flex justify-center bg-[#fff9f4] min-h-[338px] items-center px-6">
      <div className="w-full max-w-[1440px] flex flex-col items-center text-center gap-5">
        <h2 className="text-3xl md:text-[34px] font-extrabold text-gray-900 tracking-tight">
          {dict.about.readyCTA}
        </h2>

        <p className="text-gray-500 text-[16px]">{dict.about.joinCTA}</p>

        <div className="flex items-center gap-4 mt-4">
          <button
            type="button"
            className="bg-[#f97316] text-white px-8 py-3.5 rounded-lg font-bold text-[15px] hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/25 cursor-pointer"
          >
            {dict.about.getStartedNow}
          </button>

          <button
            type="button"
            className="bg-white text-gray-800 px-8 py-3.5 rounded-lg font-bold text-[15px] hover:bg-gray-50 transition-colors shadow-xs border border-gray-100 cursor-pointer"
          >
            {dict.about.contactSales}
          </button>
        </div>
      </div>
    </section>
  );
}
