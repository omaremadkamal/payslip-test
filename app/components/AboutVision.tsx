"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function AboutVision() {
  const { dict, language } = useLanguage();

  return (
    <section className="w-full flex justify-center py-20 px-6 lg:px-12 bg-white min-h-[554px] items-center">
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left Column: Who We Serve */}
        <div className="w-full lg:w-1/2 flex flex-col items-start pr-0 lg:pr-10">
          <span className="text-[#f97316] font-bold text-xs tracking-[0.15em] uppercase mb-3">
            {dict.about.whoWeServe}
          </span>
          <h2 className="text-3xl md:text-[38px] font-extrabold text-gray-900 tracking-tight mb-8">
            {dict.about.builtForTitle}
          </h2>

          <div className="flex flex-col gap-6">
            {dict.about.audiences.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center text-[#f97316] shrink-0 mt-1">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-gray-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[14px] text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Vision Card */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end shrink-0">
          <div className="relative w-full max-w-[520px] bg-[#1c2127] rounded-3xl p-10 overflow-hidden shadow-2xl">
            <div className="absolute top-[-20%] right-[-20%] w-[350px] h-[350px] bg-[#f97316] opacity-15 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#f97316] mb-6 backdrop-blur-sm">
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
                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                  />
                </svg>
              </div>

              <h3 className="text-white text-2xl font-bold mb-4">
                {language === "ar" ? "رؤيتنا" : "Our Vision"}
              </h3>
              <p className="text-gray-300 text-[15px] leading-[1.8] mb-5">
                {language === "ar"
                  ? "نسعى لأن نكون المنصة الرائدة في إدارة الرواتب لكافة الشركات في مصر، واضعين معايير جديدة للدقة، الموثوقية، وسهولة الاستخدام."
                  : "We aim to become the leading payroll platform for Egyptian businesses – setting a new standard for compliance, reliability, and ease of use."}
              </p>
              <p className="text-gray-300 text-[15px] leading-[1.8]">
                {language === "ar"
                  ? "ومع تطور القوانين واللوائح، يتطور Payroll Slips باستمرار ليواكبها، لكي يركز عملاؤنا على تنمية أعمالهم وتطوير فرقهم."
                  : "As regulations evolve, Payroll Slips will continue to evolve with them, so our customers can focus on growing their business, not fixing payroll issues."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
