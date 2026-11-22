"use client";

import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function PayrollTrend() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const [timeRange, setTimeRange] = useState("Last 6 Months");

  // Trend data points matching the graph in the screenshot:
  // Points across: Nov, Dec, Jan, Feb, Apr (with point on Apr at 216,500)
  // Value range: 0 -> 200,000+
  const months = isAr
    ? ["نوفمبر", "ديسمبر", "يناير", "فبراير", "أبريل"]
    : ["Nov", "Dec", "Jan", "Feb", "Apr"];

  // Coordinates inside 460 x 180 SVG:
  // Y-axis levels: 200,000 EGP (y=30), 150,000 EGP (y=70), 100,000 EGP (y=110), 50,000 EGP (y=150)
  // Nov: ~105,000 -> x=30, y=106
  // Dec: ~105,000 -> x=135, y=106
  // Jan: ~135,000 -> x=235, y=82
  // Feb: ~145,000 -> x=335, y=74
  // Apr: ~155,000 -> x=430, y=66

  const points = [
    { x: 30, y: 106, val: "105,000" },
    { x: 135, y: 106, val: "105,000" },
    { x: 235, y: 82, val: "135,000" },
    { x: 335, y: 74, val: "145,000" },
    { x: 430, y: 66, val: "216,500" },
  ];

  const pathD = `M ${points[0].x} ${points[0].y} C 80 106, 95 106, ${points[1].x} ${points[1].y} C 175 106, 195 85, ${points[2].x} ${points[2].y} C 275 80, 295 75, ${points[3].x} ${points[3].y} C 375 73, 395 68, ${points[4].x} ${points[4].y}`;

  const areaD = `${pathD} L ${points[4].x} 170 L ${points[0].x} 170 Z`;

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs flex flex-col justify-between h-full">
      {/* Header with Title and Dropdown */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-bold text-gray-900">
          {isAr ? "اتجاه الرواتب الشهري" : "Monthly Payroll Trend"}
        </h3>

        <div className="relative">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="text-xs font-semibold text-gray-600 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 pr-7 appearance-none cursor-pointer hover:bg-gray-100 transition-colors focus:outline-none"
          >
            <option value="Last 6 Months">
              {isAr ? "آخر 6 أشهر" : "Last 6 Months"}
            </option>
            <option value="Last 12 Months">
              {isAr ? "آخر 12 شهر" : "Last 12 Months"}
            </option>
            <option value="This Year">
              {isAr ? "العام الحالي" : "This Year"}
            </option>
          </select>
          <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Top right highlighted badge (216,500 EGP) */}
      <div className="flex justify-end mb-1">
        <span className="text-[11px] font-bold text-gray-800 bg-gray-100 border border-gray-200/60 px-2.5 py-0.5 rounded-md shadow-2xs">
          216,500 {isAr ? "ج.م" : "EGP"}
        </span>
      </div>

      {/* Line Chart Area */}
      <div className="relative w-full h-48 mt-2">
        {/* Y-axis grid labels */}
        <div className="absolute left-0 top-0 bottom-6 w-16 flex flex-col justify-between text-[10px] text-gray-400 select-none">
          <span>200,000 {isAr ? "ج.م" : "EGP"}</span>
          <span>150,000 {isAr ? "ج.م" : "EGP"}</span>
          <span>100,000 {isAr ? "ج.م" : "EGP"}</span>
          <span>50,000 {isAr ? "ج.م" : "EGP"}</span>
        </div>

        {/* Chart SVG with gridlines */}
        <div className="ml-16 h-full relative">
          <svg className="w-full h-[150px] overflow-visible" viewBox="0 0 460 180" preserveAspectRatio="none">
            <defs>
              <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Horizontal Gridlines */}
            <line x1="0" y1="30" x2="460" y2="30" stroke="#f3f4f6" strokeDasharray="3 3" />
            <line x1="0" y1="70" x2="460" y2="70" stroke="#f3f4f6" strokeDasharray="3 3" />
            <line x1="0" y1="110" x2="460" y2="110" stroke="#f3f4f6" strokeDasharray="3 3" />
            <line x1="0" y1="150" x2="460" y2="150" stroke="#f3f4f6" strokeDasharray="3 3" />

            {/* Gradient Fill under the curve */}
            <path d={areaD} fill="url(#trendGradient)" />

            {/* Main Trend Line */}
            <path
              d={pathD}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Dot circles for each month */}
            {points.map((pt, i) => (
              <circle
                key={i}
                cx={pt.x}
                cy={pt.y}
                r="4.5"
                fill="#ffffff"
                stroke="#3b82f6"
                strokeWidth="2"
                className="hover:r-6 transition-all cursor-pointer"
              />
            ))}
          </svg>

          {/* X-axis Month Labels */}
          <div className="flex justify-between text-[11px] font-medium text-gray-400 mt-2 px-4 select-none">
            {months.map((m, idx) => (
              <span key={idx}>{m}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
