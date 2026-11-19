"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function UsersBanner() {
  const { dict, language } = useLanguage();

  return (
    <section className="relative w-full flex justify-center bg-[#13171f] min-h-[425px] items-center px-6 overflow-hidden">
      <div
        className="absolute top-1/2 -translate-y-1/2 right-[-10%] w-[500px] md:w-[650px] h-[400px] pointer-events-none opacity-20 blur-[100px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(249, 115, 22, 0.75) 0%, rgba(249, 115, 22, 0) 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1440px] flex flex-col items-center text-center gap-4">
        <h2 className="text-3xl md:text-[42px] font-extrabold text-white tracking-tight leading-[1.25] max-w-[700px]">
          {language === "ar"
            ? "مصمم للشركات المصرية الطموحة وسريعة النمو"
            : "Designed for Growing Egyptian Companies"}
        </h2>

        <p className="text-gray-400 text-[15px] md:text-[16.5px] leading-[1.8] max-w-[720px] mt-1">
          {language === "ar"
            ? "صُمم Payroll Slips خصيصاً للشركات التي تعمل في مصر – يتكيف فورياً مع القوانين المحلية ويتوسع مع نمو فريقك خطوة بخطوة."
            : "Payroll Slips is built specifically for organizations operating in Egypt – adapting to local regulations and scaling with your team as you grow."}
        </p>
      </div>
    </section>
  );
}
