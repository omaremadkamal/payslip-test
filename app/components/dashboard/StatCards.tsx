"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function StatCards() {
  const { isRTL, language } = useLanguage();

  const isAr = language === "ar";

  const cards = [
    {
      id: "payroll-cost",
      title: isAr ? "إجمالي تكلفة الرواتب" : "Total Payroll Cost",
      value: "216,500",
      currency: isAr ? "ج.م" : "EGP",
      trend: "5.2%",
      trendLabel: isAr ? "هذا الشهر مقارنة بالشهر السابق" : "This month vs last month",
      isPositive: true,
      iconBg: "bg-blue-50 text-blue-500",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: "taxes-paid",
      title: isAr ? "إجمالي الضرائب المسددة" : "Total Taxes Paid",
      value: "52,100",
      currency: isAr ? "ج.م" : "EGP",
      trend: "24.06%",
      trendLabel: isAr ? "معدل 18%" : "18%",
      isPositive: false,
      iconBg: "bg-amber-50 text-amber-500",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      id: "insurance-paid",
      title: isAr ? "إجمالي التأمينات المسددة" : "Total Insurance Paid",
      value: "43,500",
      currency: isAr ? "ج.م" : "EGP",
      trend: "20.0%",
      trendLabel: isAr ? "معدل 22.7%" : "22.7%",
      isPositive: true,
      iconBg: "bg-emerald-50 text-emerald-500",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: "total-employees",
      title: isAr ? "إجمالي الموظفين" : "Total Employees",
      value: "32",
      currency: "",
      subinfo: [
        { label: isAr ? "نشط" : "Active", count: "29" },
        { label: isAr ? "غير نشط" : "Inactive", count: "3" },
      ],
      iconBg: "bg-indigo-50 text-indigo-500",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
        >
          {/* Header with icon and title */}
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${card.iconBg}`}>
              {card.icon}
            </div>
            <span className="text-xs font-semibold text-gray-600">
              {card.title}
            </span>
          </div>

          {/* Value and currency */}
          <div className="flex items-baseline gap-1.5 mb-3">
            <span className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              {card.value}
            </span>
            {card.currency && (
              <span className="text-xs font-medium text-gray-400">
                {card.currency}
              </span>
            )}
          </div>

          {/* Footer note: trend or active breakdown */}
          <div className="text-xs flex items-center gap-2">
            {card.trend && (
              <span
                className={`flex items-center gap-1 font-bold ${
                  card.isPositive ? "text-emerald-500" : "text-rose-500"
                }`}
              >
                <svg
                  className={`w-3.5 h-3.5 transform ${card.isPositive ? "" : "rotate-180"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                {card.trend}
              </span>
            )}

            {card.trendLabel && (
              <span className="text-gray-400 font-normal">
                {card.trendLabel}
              </span>
            )}

            {card.subinfo && (
              <div className="flex items-center gap-3 text-gray-500">
                {card.subinfo.map((s, idx) => (
                  <span key={idx}>
                    <span className="font-medium text-gray-700">{s.label}: </span>
                    <strong className="text-gray-900">{s.count}</strong>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
