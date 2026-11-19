"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function UsersAdmins() {
  const { language, isRTL } = useLanguage();

  const adminFeatures = [
    {
      title:
        language === "ar"
          ? "نظرة شاملة وواضحة على الرواتب"
          : "Clear Payroll Overview",
      desc:
        language === "ar"
          ? "رؤية فورية لإجمالي تكاليف المرتبات، الضرائب، التأمينات، وأعداد الموظفين."
          : "Instantly see total payroll cost, taxes, insurance, and employee counts.",
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
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      title:
        language === "ar"
          ? "مسيرات رواتب خاضعة للرقابة"
          : "Controlled Payroll Runs",
      desc:
        language === "ar"
          ? "يتم حساب الرواتب ومراجعتها واعتمادها وفق مسارات عمل منظمة ومحمية."
          : "Payroll is calculated, reviewed, and approved through structured runs.",
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
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
    {
      title:
        language === "ar" ? "امتثال قانوني تلقائي" : "Compliance by Design",
      desc:
        language === "ar"
          ? "تتبع الحسابات معادلات الضرائب الرسمية بدقة، مما يقلل المخاطر القانونية والغرامات."
          : "Calculations follow approved tax equations, reducing legal risk.",
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title:
        language === "ar"
          ? "سجل تدقيق كامل ومحمي"
          : "Traceable Audit History",
      desc:
        language === "ar"
          ? "تتبع كل تعديل واعتماد مع تحديد دقيق لمن أجرى التغيير ومتى."
          : "Track every calculation and approval with timestamped audit records.",
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="w-full flex justify-center py-20 px-6 lg:px-12 bg-[#fafaf9] min-h-[829px] items-center border-y border-gray-100"
    >
      <div className="w-full max-w-[1280px] flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Column: Text & Features */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <span className="text-[#f97316] font-extrabold text-[12px] tracking-[0.18em] uppercase mb-3">
            {language === "ar"
              ? "لأصحاب الأعمال والمديرين"
              : "FOR BUSINESS OWNERS & ADMINS"}
          </span>

          <h2 className="text-3xl md:text-[38px] font-extrabold text-gray-900 leading-[1.25] tracking-tight mb-5">
            {language === "ar" ? (
              <>
                تحكم كامل ورؤية واضحة
                <br /> لمصروفات الرواتب والالتزام القانوني
              </>
            ) : (
              <>
                Total Visibility and Peace
                <br /> of Mind Over Company Payroll
              </>
            )}
          </h2>

          <p className="text-gray-500 text-[15px] leading-[1.8] mb-8 max-w-[540px]">
            {language === "ar"
              ? "يحتاج قادة الأعمال إلى راحة البال ومعرفة أن الرواتب تُصرف بدقة وفي موعدها دون التعرض لمخاطر الغرامات الضريبية أو التأمينية."
              : "Business owners and leadership teams need confidence that payroll is compliant, predictable, and free from regulatory surprises. Payroll Slips provides complete operational oversight."}
          </p>

          <div className="flex flex-col gap-5 w-full">
            {adminFeatures.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3.5">
                <div className="shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <h4 className="text-[15px] font-bold text-gray-900 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[13.5px] text-gray-500 leading-relaxed mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Result Card */}
          <div className="mt-8 w-full max-w-[560px] bg-[#fff7ed] border border-[#ffedd5] rounded-xl px-5 py-4 flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-[#f97316] text-white flex items-center justify-center shrink-0">
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
            <div className="text-[13.5px] leading-relaxed">
              <span className="font-extrabold text-[#c2410c] tracking-wide mx-2">
                {language === "ar" ? "النتيجة" : "RESULT"}
              </span>
              <span className="font-semibold text-[#9a3412]">
                {language === "ar"
                  ? "اطمئنان تام ووضوح مالي يمنع الغرامات ويضمن حقوق الشركة وموظفيها."
                  : "Leadership has full confidence in every number and complete regulatory safety."}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Image Card */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[530px] aspect-square rounded-[36px] bg-white p-8 md:p-10 flex items-center justify-center overflow-hidden border border-gray-200/80 shadow-md">
            <img
              src="/AdminDashboardView.png"
              alt="Admin Dashboard Preview"
              className="w-full max-w-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
