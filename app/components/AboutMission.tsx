"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function AboutMission() {
  const { dict, isRTL, language } = useLanguage();

  return (
    <section className="w-full flex justify-center py-20 px-6 lg:px-12 bg-white min-h-[596px] items-center">
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
        {/* Graphic Card */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start">
          <div className="absolute inset-0 bg-[#fff5ec] rounded-3xl transform -rotate-3 scale-105 z-0"></div>

          <div className="relative z-10 w-full max-w-[500px] bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-8 flex flex-col gap-10 border border-gray-50">
            {/* The Old Way */}
            <div className="flex flex-col gap-4 opacity-70">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-500 shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-gray-900">
                    {dict.about.oldWay}
                  </h4>
                  <p className="text-[13px] text-gray-500">
                    {dict.about.oldWayDesc}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 mt-2 px-2">
                <div className="h-1.5 w-full bg-gray-100 rounded-full"></div>
                <div className="h-1.5 w-[85%] bg-gray-100 rounded-full"></div>
                <div className="h-1.5 w-[60%] bg-gray-100 rounded-full"></div>
              </div>
            </div>

            {/* The Payroll Slips Way */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-500 shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-gray-900">
                    {dict.about.newWay}
                  </h4>
                  <p className="text-[13px] text-gray-500">
                    {dict.about.newWayDesc}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 mt-2 px-2">
                <div className="h-1.5 w-full bg-green-50 rounded-full"></div>
                <div className="h-1.5 w-[90%] bg-green-50 rounded-full"></div>
                <div className="h-1.5 w-[65%] bg-green-50 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Text & Mission Card */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-6">
          <h2 className="text-3xl md:text-[34px] font-extrabold text-gray-900 leading-[1.3] tracking-tight">
            {language === "ar" ? (
              <>
                إدارة الرواتب لا يجب أن تكون
                <br /> معقدة، مرهقة، أو محفوفة بالمخاطر.
              </>
            ) : (
              <>
                Managing payroll shouldn't be
                <br /> complicated, risky, or manual.
              </>
            )}
          </h2>
          <p className="text-gray-500 text-[16px] leading-[1.8]">
            {language === "ar"
              ? "لهذا السبب طورنا Payroll Slips: لاستبدال الأخطاء والحيرة والعمل اليدوي المتكرر بالوضوح والدقة والتحكم الكامل."
              : "That's why we built Payroll Slips: to replace errors, uncertainty, and repetitive work with clarity and control."}
          </p>

          {/* Mission Card */}
          <div className="bg-[#f9fafb] w-full rounded-2xl p-8 md:p-10 mt-4">
            <div className="flex items-center gap-2 text-[#f97316] font-bold text-[15px] mb-4">
              <svg
                className="w-5 h-5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
              <span>{dict.about.missionBadge}</span>
            </div>
            <h3 className="text-xl md:text-[22px] font-bold text-gray-900 leading-[1.5] mb-4">
              {dict.about.missionTitle}
            </h3>
            <p className="text-gray-500 text-[14.5px] leading-[1.8]">
              {dict.about.missionDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
