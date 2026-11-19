"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function AboutFooter() {
  const { dict, isRTL, language } = useLanguage();

  return (
    <footer
      dir={isRTL ? "rtl" : "ltr"}
      className="w-full flex justify-center py-16 px-6 lg:px-12 bg-white border-t border-gray-100"
    >
      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
        {/* Brand & info */}
        <div className="lg:col-span-4 flex flex-col gap-5">
          <div className="text-[#f97316] font-bold text-lg tracking-wide">
            {dict.nav.brand}
          </div>
          <p className="text-gray-500 text-[14px] leading-[1.8] pr-4">
            {dict.footer.brandDesc}
          </p>
          <div className="mt-2">
            <p className="text-gray-500 text-[13px] mb-1">
              {language === "ar" ? "الخط الساخن" : "Hotline"}
            </p>
            <p className="text-[#f97316] text-[26px] font-extrabold">12345</p>
          </div>
        </div>

        {/* Product Column */}
        <div className="lg:col-span-3 flex flex-col gap-3">
          <h4 className="font-bold text-gray-900 mb-2">
            {dict.footer.productTitle}
          </h4>
          {dict.footer.products.map((item, idx) => (
            <a
              key={idx}
              href="#"
              className="text-gray-500 text-[14px] hover:text-[#f97316] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Company Column */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          <h4 className="font-bold text-gray-900 mb-2">
            {dict.footer.companyTitle}
          </h4>
          {dict.footer.companies.map((item, idx) => (
            <a
              key={idx}
              href="#"
              className="text-gray-500 text-[14px] hover:text-[#f97316] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Contact info */}
        <div className="lg:col-span-3 flex flex-col gap-3 text-[14px] text-gray-500">
          <h4 className="font-bold text-gray-900 mb-2">
            {dict.footer.contactTitle}
          </h4>
          <p>{dict.footer.location}</p>
          <p>{dict.footer.email}</p>
          <p>{dict.footer.phone}</p>
        </div>
      </div>
    </footer>
  );
}
