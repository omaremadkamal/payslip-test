"use client";

import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ContactFAQ() {
  const { dict, isRTL } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="w-full flex justify-center py-20 px-6 lg:px-12 bg-white"
    >
      <div className="w-full max-w-[800px] flex flex-col items-center gap-12">
        <h2 className="text-3xl md:text-[34px] font-extrabold text-gray-900 tracking-tight text-center">
          {dict.contact.faqTitle}
        </h2>

        <div className="w-full flex flex-col gap-4">
          {dict.contact.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="w-full bg-[#f8fafc]/80 border border-gray-100 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                >
                  <span
                    className={`text-[15px] md:text-[16px] font-bold text-gray-900 ${
                      isRTL ? "pl-4 text-right" : "pr-4 text-left"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div className="shrink-0 text-gray-400">
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#f97316]" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div
                    className={`px-6 pb-6 text-gray-500 text-[14px] md:text-[15px] leading-relaxed border-t border-gray-100/60 pt-4 ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
