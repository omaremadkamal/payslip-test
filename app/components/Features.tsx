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
    title: "All-in-One Payroll Platform",
    description:
      "A single system to manage salaries, taxes, and social insurance in full compliance.",
    icon: (
      <Image
        src={cashStack}
        alt="All-in-One Payroll Platform"
        width={36}
        height={36}
        className="w-9 h-9 shrink-0"
      />
    ),
  },
  {
    id: 2,
    title: "Easy Employee Management",
    description:
      "Add employees manually or import via Excel with complete data control.",
    icon: (
      <Image
        src={people}
        alt="Easy Employee Management"
        width={36}
        height={36}
        className="w-9 h-9 shrink-0"
      />
    ),
  },
  {
    id: 3,
    title: "Dynamic Equation Engine",
    description:
      "Instant updates for tax and insurance regulations - no manual adjustments.",
    icon: (
      <Image
        src={aggregatorRecalculation}
        alt="Dynamic Equation Engine"
        width={36}
        height={36}
        className="w-9 h-9 shrink-0"
      />
    ),
  },
  {
    id: 4,
    title: "Security & Full Control",
    description:
      "Role-based access, secure data storage, and detailed audit logs.",
    icon: (
      <Image
        src={securityLock}
        alt="Security & Full Control"
        width={36}
        height={36}
        className="w-9 h-9 shrink-0"
      />
    ),
  },
  {
    id: 5,
    title: "Automated PDF Payslips",
    description: "Generate and send payslips to employees in one click.",
    icon: (
      <Image
        src={fileTypePdf}
        alt="Automated PDF Payslips"
        width={36}
        height={36}
        className="w-9 h-9 shrink-0"
      />
    ),
  },
  {
    id: 6,
    title: "Payroll Sandbox Calculator",
    description:
      "Forecast payroll costs without affecting live company data.",
    icon: (
      <Image
        src={moneyCalculator}
        alt="Payroll Sandbox Calculator"
        width={36}
        height={36}
        className="w-9 h-9 shrink-0"
      />
    ),
  },
];

export default function Features() {
  return (
    <section className="w-full flex justify-center py-20 px-4">
      <div className="w-full max-w-[1200px] flex flex-col items-center gap-[68px]">
        {/* Header Section */}
        <div className="text-center max-w-[800px] flex flex-col gap-4">
          <h2 className="text-4xl font-extrabold text-[#1a1a1a]">
            A Smart Payroll System Built for Every Company
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            An all-in-one payroll solution designed for Egyptian businesses
            accurately calculating salaries, taxes, and social insurance – at
            any scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#fcf5ed] rounded-xl p-8 flex flex-col gap-4 shadow-md shadow-orange-500/15 hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 border border-orange-500/5"
            >
              <div className="flex items-start gap-4">
                {feature.icon}
                <h3 className="text-[1.15rem] font-bold text-gray-900 leading-snug pt-1">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
