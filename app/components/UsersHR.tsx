"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function UsersHR() {
  const { language, isRTL } = useLanguage();

  const hrFeatures = [
    {
      title:
        language === "ar"
          ? "حسابات دقيقة للمرتبات"
          : "Accurate Salary Calculations",
      desc:
        language === "ar"
          ? "حساب تلقائي لصافي وإجمالي المرتب بناءً على أحدث لوائح الضرائب والتأمينات."
          : "Automatic net and gross calculations based on the latest tax and insurance rules.",
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
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title:
        language === "ar"
          ? "إدارة الموظفين بكل سهولة"
          : "Employee Management Made Easy",
      desc:
        language === "ar"
          ? "إضافة وتعديل واستيراد الموظفين دفعة واحدة مع متابعة حالة كل موظف."
          : "Add, update, or import employees in bulk with clear status tracking.",
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title:
        language === "ar"
          ? "كشوف المرتبات بضغطة زر"
          : "Payslips in One Click",
      desc:
        language === "ar"
          ? "إنشاء وإرسال Payslips للموظفين فورياً بدون إعادة حسابات يدوية."
          : "Generate and resend payslips instantly, without recalculating.",
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
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      ),
    },
    {
      title:
        language === "ar" ? "حاسبة تجريبية متطورة" : "Sandbox Calculator",
      desc:
        language === "ar"
          ? "تجربة سيناريوهات الرواتب وحساب الضرائب دون التأثير على بيانات الشركة الحقيقية."
          : "Test salary scenarios safely without affecting real data.",
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
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="w-full flex justify-center py-20 px-6 lg:px-12 bg-white min-h-[829px] items-center"
    >
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Column: Image Card */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[530px] aspect-square rounded-[36px] bg-[#fffaf5] p-8 md:p-10 flex items-center justify-center overflow-hidden border border-[#faede1]/60">
            <img
              src="/HappyHRProfessional.png"
              alt="HR Professional Illustration"
              className="w-full max-w-lg object-contain"
            />
          </div>
        </div>

        {/* Right Column: Text & Features */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <span className="text-[#f97316] font-extrabold text-[12px] tracking-[0.18em] uppercase mb-3">
            {language === "ar" ? "لفرق الموارد البشرية" : "FOR HR TEAMS"}
          </span>

          <h2 className="text-3xl md:text-[38px] font-extrabold text-gray-900 leading-[1.25] tracking-tight mb-5">
            {language === "ar" ? (
              <>
                حوّل إدارة الرواتب من عبء شهري
                <br /> إلى عملية سهلة ومؤتمتة
              </>
            ) : (
              <>
                Turn Payroll From a Monthly
                <br /> Burden Into a Simple Process
              </>
            )}
          </h2>

          <p className="text-gray-500 text-[15px] leading-[1.8] mb-8 max-w-[540px]">
            {language === "ar"
              ? "تواجه فرق الموارد البشرية ضغطاً شهرياً مستمراً: دقة المرتبات، استفسارات الموظفين، والتغييرات القانونية المستمرة. نظام Payroll Slips يرفع هذا العبء تماماً عن كاهلكم."
              : "HR teams deal with constant pressure: salary accuracy, employee questions, regulation changes, and tight deadlines. Payroll Slips removes the manual work and uncertainty from your day."}
          </p>

          <div className="flex flex-col gap-5 w-full">
            {hrFeatures.map((item, idx) => (
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
          <div className="mt-8 w-full max-w-[560px] bg-[#f0fdf4] border border-[#dcfce7] rounded-xl px-5 py-4 flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-[#22c55e] text-white flex items-center justify-center shrink-0">
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
              <span className="font-extrabold text-[#15803d] tracking-wide mx-2">
                {language === "ar" ? "النتيجة" : "RESULT"}
              </span>
              <span className="font-semibold text-[#166534]">
                {language === "ar"
                  ? "يقضي فريق الموارد البشرية وقتاً أقل في تصحيح الأخطاء ووقتاً أطول في دعم وتطوير الموظفين."
                  : "HR spends less time fixing mistakes and more time supporting people."}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
