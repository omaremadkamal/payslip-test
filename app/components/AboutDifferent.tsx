"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function AboutDifferent() {
  const { dict } = useLanguage();

  return (
    <section className="w-full flex justify-center py-24 px-6 bg-gray-50 min-h-[597px] items-center">
      <div className="w-full max-w-[1200px] flex flex-col items-center gap-16">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center gap-3">
          <span className="text-[#f97316] font-bold text-xs tracking-[0.2em] uppercase">
            {dict.about.whyChooseUs}
          </span>
          <h2 className="text-3xl md:text-[38px] font-extrabold text-gray-900 tracking-tight">
            {dict.about.makesUsDifferent}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Card 1: Dynamic Engine */}
          <div className="bg-white rounded-2xl p-8 flex flex-col gap-6 shadow-xs border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center text-[#f97316] shrink-0">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-[18px] font-bold text-gray-900 mb-3">
                {dict.about.dynamicEngine}
              </h3>
              <p className="text-[14px] text-gray-500 leading-[1.8]">
                {dict.about.dynamicEngineDesc}
              </p>
            </div>
          </div>

          {/* Card 2: Compliance & Trust */}
          <div className="bg-white rounded-2xl p-8 flex flex-col gap-6 shadow-xs border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center text-[#f97316] shrink-0">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-[18px] font-bold text-gray-900 mb-3">
                {dict.about.complianceTrust}
              </h3>
              <p className="text-[14px] text-gray-500 leading-[1.8]">
                {dict.about.complianceTrustDesc}
              </p>
            </div>
          </div>

          {/* Card 3: Built for Egypt */}
          <div className="bg-white rounded-2xl p-8 flex flex-col gap-6 shadow-xs border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center text-[#f97316] shrink-0">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-[18px] font-bold text-gray-900 mb-3">
                {dict.about.builtForEgypt}
              </h3>
              <p className="text-[14px] text-gray-500 leading-[1.8]">
                {dict.about.builtForEgyptDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
