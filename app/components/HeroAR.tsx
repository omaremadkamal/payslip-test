import React from "react";
import Link from "next/link";

export default function HeroAR() {
  return (
    <section className="w-full flex justify-center py-16 px-6 bg-white">
      {/* الحاوية الرئيسية بعرض 1187 بكسل */}
      <div className="w-full max-w-[1187px] min-h-[496px] flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* قسم النصوص */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-5 text-right">
          <h1 className="text-3xl md:text-[38px] font-bold text-gray-900 leading-[1.5]">
            إدارة رواتب متوافقة 100% مع
            <br />
            قوانين الضرائب والتأمينات
            <br />
            في مصر
          </h1>
          <p className="text-gray-500 text-[15px] leading-[1.8] max-w-[90%]">
            نظام رواتب ذكي يحسب المرتبات، الضرائب، والتأمينات تلقائياً
            <br />
            مع تحديث فوري لأي تغيير في القوانين – بدون أخطاء أو مجهود يدوي.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-[#f97316] text-white px-8 py-3 rounded-md text-[15px] font-bold hover:bg-orange-600 transition-colors mt-4 shadow-sm"
          >
            ابدأ الآن
          </Link>
        </div>

        {/* قسم الصورة (تم إزالة الإطار والخلفية) */}
        <div className="w-full lg:w-1/2 flex justify-end shrink-0">
          <div className="w-full max-w-[550px] aspect-video flex items-center justify-center">
            <span className="text-gray-400 text-sm">
              <img
                src="/hero-illustration.png.png"
                alt="Payroll Dashboard Illustration"
                className="w-full max-w-lg object-contain"
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
