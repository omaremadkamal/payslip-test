import React from "react";

const comparisonData = [
  {
    id: 1,
    newTitle: "محرك معادلات ديناميكي",
    newDesc: "تحديث فوري لمعادلات الضرائب والتأمينات مع أي تغيير في القوانين.",
    oldTitle: "تغيّر قوانين الضرائب والتأمينات باستمرار",
    oldDesc: "أي تعديل بسيط في القوانين ممكن يسبب أخطاء كبيرة في الحسابات.",
  },
  {
    id: 2,
    newTitle: "حسابات دقيقة Net و Gross",
    newDesc: "نتائج مطابقة للقوانين المعتمدة بدون أي اختلافات.",
    oldTitle: "حساب Net و Gross يدوياً",
    oldDesc: "حسابات مرهقة، اختلافات متكررة، وعدم تطابق مع الجهات الرسمية.",
  },
  {
    id: 3,
    newTitle: "إدارة رواتب متعددة الشركات",
    newDesc: "نظام واحد يخدم شركة واحدة أو عدة شركات بكل سهولة.",
    oldTitle: "غير قابل للتوسع Excel",
    oldDesc: "صعب تدير عدد كبير من الموظفين أو أكثر من شركة في نفس الوقت.",
  },
  {
    id: 4,
    newTitle: "كشوف مرتبات ورسائل تلقائية",
    newDesc: "توليد Payslips PDF وإرسالها للموظفين بضغطة واحدة.",
    oldTitle: "ورسائل يدوية Payslips",
    oldDesc: "وقت ضايع، مجهود إضافي، وأخطاء بشرية متكررة.",
  },
  {
    id: 5,
    newTitle: "حاسبة رواتب للتوقعات",
    newDesc: "احسب وتوقع تكاليف الرواتب بدون التأثير على بيانات شركتك.",
    oldTitle: "مفيش رؤية مستقبلية لتكاليف الرواتب",
    oldDesc: "صعب تتوقع إجمالي المرتبات، الضرائب، أو التأمينات.",
  },
];

export default function ChallengesAR() {
  return (
    <section
      dir="rtl"
      className="w-full flex justify-center py-24 px-4 bg-white"
    >
      {/* حاوية 1200 بكسل للتطابق مع Figma */}
      <div className="w-full max-w-[1200px] flex flex-col items-center">
        {/* قسم العنوان */}
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-3xl md:text-[38px] font-bold text-gray-900 tracking-tight">
            إدارة الرواتب بقت أسهل مما تتخيل
          </h2>
          <p className="text-gray-500 text-[16px]">
            نظام رواتب ذكي يريحك ويحسب كل حاجة صح من أول مرة.
          </p>
        </div>

        {/* شبكة المقارنة (الخط الزمني) */}
        <div className="relative w-full mt-16 flex flex-col gap-12 md:gap-14">
          {/* الخط البرتقالي في المنتصف للشاشات الكبيرة */}
          <div className="hidden md:block absolute left-1/2 top-2 bottom-2 w-[2px] bg-[#f97316] -translate-x-1/2 z-0"></div>

          {comparisonData.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col md:flex-row justify-between items-start w-full gap-10 md:gap-0 z-10"
            >
              {/* الجانب الأيمن (الحل الجديد - الأخضر) */}
              <div className="w-full md:w-[45%] flex flex-col gap-1.5">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#22c55e] shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h4 className="text-[17px] font-bold text-gray-900">
                    {item.newTitle}
                  </h4>
                </div>
                <p className="text-[14px] text-gray-500 pr-8 leading-[1.8]">
                  {item.newDesc}
                </p>
              </div>

              {/* النقطة البرتقالية في المنتصف */}
              <div className="hidden md:flex absolute left-1/2 top-1 -translate-x-1/2 w-5 h-5 rounded-full bg-[#f97316] border-[4px] border-white shrink-0 shadow-sm"></div>

              {/* الجانب الأيسر (المشكلة القديمة - الأحمر) - تم تعديل المحاذاة هنا */}
              <div className="w-full md:w-[45%] flex flex-col gap-1.5">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#ef4444] shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h4 className="text-[17px] font-bold text-gray-900">
                    {item.oldTitle}
                  </h4>
                </div>
                <p className="text-[14px] text-gray-500 pr-8 leading-[1.8]">
                  {item.oldDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
