"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function UsersAlignment() {
  const { language, isRTL } = useLanguage();

  const alignmentCards = [
    {
      title:
        language === "ar"
          ? "فرق الموارد البشرية تنجز أسرع"
          : "HR teams work faster",
      desc:
        language === "ar"
          ? "أخطاء أقل وعمل يدوي منعدم"
          : "Fewer errors, less manual work",
      icon: (
        <svg
          className="w-5 h-5 text-[#f97316]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title:
        language === "ar"
          ? "الإدارة تكتسب وضوحاً كاملاً"
          : "Admins gain visibility",
      desc:
        language === "ar"
          ? "ثقة تامة في كل رقم ومعاملة"
          : "Confidence in every number",
      icon: (
        <svg
          className="w-5 h-5 text-[#f97316]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
    },
    {
      title:
        language === "ar" ? "الموظفون راضون ومطمئنون" : "Employees are happy",
      desc:
        language === "ar"
          ? "كشوف رواتب واضحة ودقيقة دائماً"
          : "Clear, consistent payslips",
      icon: (
        <svg
          className="w-5 h-5 text-[#f97316]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="w-full flex justify-center py-24 px-6 lg:px-12 bg-white min-h-[500px] items-center"
    >
      <div className="w-full max-w-[1280px] flex flex-col items-center text-center">
        <span className="text-[#f97316] font-extrabold text-[12px] tracking-[0.18em] uppercase mb-3">
          {language === "ar" ? "التوافق والانسجام" : "ORGANIZATIONAL ALIGNMENT"}
        </span>

        <h2 className="text-3xl md:text-[38px] font-extrabold text-gray-900 tracking-tight leading-[1.25] max-w-[700px] mb-4">
          {language === "ar"
            ? "نظام واحد يجمع بين الموارد البشرية، الإدارة، والموظفين"
            : "One System That Connects HR, Management, and Employees"}
        </h2>

        <p className="text-gray-500 text-[15px] md:text-[16px] leading-[1.8] max-w-[620px] mb-16">
          {language === "ar"
            ? "عندما يعمل الجميع من خلال مصدر موحد ودقيق لبيانات الرواتب، يختفي الشك ويتحقق الانسجام الكامل داخل المؤسسة."
            : "When everyone operates from a single source of truth for payroll, friction disappears and alignment is effortless."}
        </p>

        {/* 3 Alignment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {alignmentCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#fffaf5] border border-[#faede1]/80 rounded-2xl p-8 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-2xl bg-orange-100/70 flex items-center justify-center shrink-0">
                {card.icon}
              </div>
              <h3 className="text-[17px] font-bold text-gray-900">
                {card.title}
              </h3>
              <p className="text-[14px] text-gray-500">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
