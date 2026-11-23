"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function PayrollBreakdown() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const total = "216,500";
  const currency = isAr ? "ج.م" : "EGP";

  const items = [
    {
      label: isAr ? "صافي الرواتب" : "Net Salaries",
      amount: "118,450",
      color: "bg-[#2563eb]", // royal blue
    },
    {
      label: isAr ? "الضرائب" : "Taxes",
      amount: "52,100",
      color: "bg-[#f97316]", // orange
    },
    {
      label: isAr ? "التأمينات" : "Insurance",
      amount: "43,500",
      color: "bg-[#14b8a6]", // teal
    },
  ];

  // Donut chart stroke math
  // Circumference = 2 * PI * 68 ~= 427.26
  // Net Salaries: 118,450 / 216,500 = 54.7% => 233.7
  // Taxes: 52,100 / 216,500 = 24.1% => 102.9
  // Insurance: 43,500 / 216,500 = 20.1% => 85.9
  const radius = 68;
  const circumference = 2 * Math.PI * radius; // 427.2566

  const netSalariesPct = 118450 / 216500; // 0.5471
  const taxesPct = 52100 / 216500; // 0.2406
  const insurancePct = 43500 / 216500; // 0.2009

  const netStroke = circumference * netSalariesPct;
  const taxesStroke = circumference * taxesPct;
  const insuranceStroke = circumference * insurancePct;

  // Offsets for stacked ring (starting from top, i.e. rotate -90)
  // Segment 1 (Blue): start offset = 0
  // Segment 2 (Orange): start offset = -netStroke
  // Segment 3 (Teal): start offset = -(netStroke + taxesStroke)
  const offsetNet = 0;
  const offsetTaxes = -netStroke;
  const offsetInsurance = -(netStroke + taxesStroke);

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs flex flex-col justify-between h-full">
      <h3 className="text-base font-bold text-gray-900 mb-6">
        {isAr ? "تفصيل الرواتب" : "Payroll Breakdown"}
      </h3>

      <div className="flex flex-col sm:flex-row items-center justify-around gap-6 my-auto">
        {/* Donut Chart */}
        <div className="relative w-48 h-48 flex items-center justify-center shrink-0">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
            {/* Background track circle */}
            <circle
              cx="80"
              cy="80"
              r={radius}
              className="stroke-gray-100"
              strokeWidth="16"
              fill="transparent"
            />
            {/* Segment 1: Net Salaries (Blue) */}
            <circle
              cx="80"
              cy="80"
              r={radius}
              stroke="#2563eb"
              strokeWidth="16"
              fill="transparent"
              strokeDasharray={`${netStroke} ${circumference - netStroke}`}
              strokeDashoffset={offsetNet}
              strokeLinecap="round"
              className="transition-all duration-700 ease-out"
            />
            {/* Segment 2: Taxes (Orange) */}
            <circle
              cx="80"
              cy="80"
              r={radius}
              stroke="#f97316"
              strokeWidth="16"
              fill="transparent"
              strokeDasharray={`${taxesStroke} ${circumference - taxesStroke}`}
              strokeDashoffset={offsetTaxes}
              strokeLinecap="round"
              className="transition-all duration-700 ease-out"
            />
            {/* Segment 3: Insurance (Teal) */}
            <circle
              cx="80"
              cy="80"
              r={radius}
              stroke="#14b8a6"
              strokeWidth="16"
              fill="transparent"
              strokeDasharray={`${insuranceStroke} ${circumference - insuranceStroke}`}
              strokeDashoffset={offsetInsurance}
              strokeLinecap="round"
              className="transition-all duration-700 ease-out"
            />
          </svg>

          {/* Center text in donut */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-lg md:text-xl font-extrabold text-gray-900 tracking-tight">
              {total}
            </span>
            <span className="text-[11px] font-semibold text-gray-400">
              {currency}
            </span>
          </div>
        </div>

        {/* Legend & Breakdown values */}
        <div className="flex flex-col gap-4 w-full sm:w-auto min-w-[190px]">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full shrink-0 ${item.color}`} />
                <span className="font-semibold text-gray-700">{item.label}</span>
              </div>
              <span className="font-bold text-gray-900">
                {item.amount} {currency}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
