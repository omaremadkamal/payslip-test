import React from "react";
import Image from "next/image";
import cashStack from "@/public/cashStack.svg";
import people from "@/public/people.svg";
import aggregatorRecalculation from "@/public/aggregatorRecalculation.svg";
import securityLock from "@/public/securityLock.svg";
import fileTypePdf from "@/public/fileTypePdf.svg";
import moneyCalculator from "@/public/moneyCalculator.svg";

const featuresData = [
  {
    id: 1,
    title: "منصة رواتب متكاملة",
    description:
      "نظام واحد لإدارة المرتبات، الضرائب، والتأمينات الاجتماعية وفقًا لأحدث القوانين.",
    icon: (
      <Image
        src={cashStack}
        alt="منصة رواتب متكاملة"
        width={36}
        height={36}
        className="w-9 h-9 shrink-0"
      />
    ),
  },
  {
    id: 2,
    title: "إدارة الموظفين بسهولة",
    description:
      "إضافة الموظفين يدويًا أو من خلال Excel مع دعم كامل للبيانات الأساسية.",
    icon: (
      <Image
        src={people}
        alt="إدارة الموظفين بسهولة"
        width={36}
        height={36}
        className="w-9 h-9 shrink-0"
      />
    ),
  },
  {
    id: 3,
    title: "محرك معادلات ديناميكي",
    description:
      "تحديث فوري لأي تغيير في قوانين الضرائب أو التأمينات بدون تعديل يدوي.",
    icon: (
      <Image
        src={aggregatorRecalculation}
        alt="محرك معادلات ديناميكي"
        width={36}
        height={36}
        className="w-9 h-9 shrink-0"
      />
    ),
  },
  {
    id: 4,
    title: "أمان وتحكم كامل",
    description:
      "صلاحيات متعددة، حماية للبيانات، وسجلات مراجعة لكل عمليات الرواتب.",
    icon: (
      <Image
        src={securityLock}
        alt="أمان وتحكم كامل"
        width={36}
        height={36}
        className="w-9 h-9 shrink-0"
      />
    ),
  },
  {
    id: 5,
    title: "Payslips PDF تلقائيًا",
    description: "إصدار كشوف المرتبات وإرسالها للموظفين بضغطة واحدة.",
    icon: (
      <Image
        src={fileTypePdf}
        alt="Payslips PDF تلقائيًا"
        width={36}
        height={36}
        className="w-9 h-9 shrink-0"
      />
    ),
  },
  {
    id: 6,
    title: "حاسبة رواتب (Sandbox)",
    description: "احسب وتوقع تكاليف الرواتب بدون التأثير على بيانات شركتك.",
    icon: (
      <Image
        src={moneyCalculator}
        alt="حاسبة رواتب"
        width={36}
        height={36}
        className="w-9 h-9 shrink-0"
      />
    ),
  },
];

export default function FeaturesAR() {
  return (
    <section
      dir="rtl"
      className="w-full flex justify-center py-20 px-4 bg-white"
    >
      <div className="w-full max-w-[1200px] flex flex-col items-center gap-14">
        {/* قسم العنوان */}
        <div className="text-center max-w-[800px] flex flex-col gap-4">
          <h2 className="text-3xl md:text-[34px] font-bold text-gray-900 leading-tight">
            نظام رواتب ذكي يناسب كل شركة وكل فريق
          </h2>
          <p className="text-gray-500 text-[15px] leading-[1.8]">
            حل متكامل لإدارة الرواتب مصمم خصيصًا للشركات المصرية
            <br />
            يحسب المرتبات، الضرائب، والتأمينات بدقة – مهما كان حجم شركتك.
          </p>
        </div>

        {/* شبكة الكروت (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#fcf5ed] rounded-xl p-8 flex flex-col gap-4 hover:shadow-lg hover:shadow-orange-600/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                {feature.icon}
                <h3 className="text-[17px] font-bold text-gray-900 pt-1">
                  {feature.title}
                </h3>
              </div>
              <p className="text-[14px] text-gray-600 leading-[1.8] pl-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
