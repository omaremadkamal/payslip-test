"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function EmployeesStatus() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const totalEmployees = 32;

  const statuses = [
    {
      id: "active",
      label: isAr ? "نشط" : "Active",
      count: 29,
      percentage: (29 / totalEmployees) * 100, // ~90.6%
      barColor: "bg-[#2dd4bf]", // bright mint/turquoise
      iconBg: "bg-emerald-50 text-emerald-500",
      icon: (
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    {
      id: "resigned",
      label: isAr ? "مستقيل" : "Resigned",
      count: 2,
      percentage: (2 / totalEmployees) * 100, // ~6.2%
      barColor: "bg-[#f97316]", // orange
      iconBg: "bg-amber-50 text-amber-500",
      icon: (
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      id: "terminated",
      label: isAr ? "منهي خدمته" : "Terminated",
      count: 1,
      percentage: (1 / totalEmployees) * 100, // ~3.1%
      barColor: "bg-[#ef4444]", // red
      iconBg: "bg-rose-50 text-rose-500",
      icon: (
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs flex flex-col justify-between h-full">
      <h3 className="text-base font-bold text-gray-900 mb-6">
        {isAr ? "حالة الموظفين" : "Employees Status"}
      </h3>

      <div className="flex flex-col gap-6 my-auto">
        {statuses.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            {/* Icon + Label */}
            <div className="flex items-center gap-2.5 w-28 shrink-0">
              <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${item.iconBg}`}>
                {item.icon}
              </div>
              <span className="text-xs font-semibold text-gray-700">
                {item.label}
              </span>
            </div>

            {/* Progress Track */}
            <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden relative">
              <div
                className={`h-full rounded-full transition-all duration-700 ${item.barColor}`}
                style={{ width: `${item.percentage}%` }}
              />
            </div>

            {/* Count */}
            <span className="text-xs font-bold text-gray-900 w-6 text-right shrink-0">
              {item.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
