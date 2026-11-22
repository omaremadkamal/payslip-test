"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function PayrollRunStatus() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs flex flex-col justify-between h-full">
      <h3 className="text-base font-bold text-gray-900 mb-4">
        {isAr ? "حالة تشغيل الرواتب" : "Payroll Run Status"}
      </h3>

      <div className="bg-gray-50/70 rounded-xl p-5 border border-gray-100 flex flex-col gap-4">
        {/* Last Run Title */}
        <div className="text-xs">
          <span className="text-gray-400">
            {isAr ? "آخر تشغيل: " : "Last Run: "}
          </span>
          <span className="font-extrabold text-gray-900 text-sm">
            {isAr ? "ديسمبر 2025" : "December 2025"}
          </span>
        </div>

        {/* Status Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100/60 w-fit text-xs font-bold">
          <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
          <span>{isAr ? "اكتمل التشغيل" : "Run Completed"}</span>
        </div>

        {/* Total Employees */}
        <div className="flex items-center justify-between text-xs pt-3 border-t border-gray-200/60">
          <span className="text-gray-400">
            {isAr ? "إجمالي الموظفين:" : "Total Employees:"}
          </span>
          <span className="font-extrabold text-gray-900 text-sm">
            32
          </span>
        </div>

        {/* Run Date */}
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-400">
            {isAr ? "تاريخ التشغيل:" : "Run Date:"}
          </span>
          <span className="font-bold text-gray-800">
            {isAr ? "28 ديسمبر 2025" : "Dec 28, 2025"}
          </span>
        </div>
      </div>
    </div>
  );
}
