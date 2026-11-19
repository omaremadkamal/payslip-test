import React from "react";

const comparisonData = [
  {
    id: 1,
    oldTitle: "Constant Changes in Tax & Insurance Laws",
    oldDesc: "Even small regulation changes can cause major payroll errors.",
    newTitle: "Smart Equation Engine",
    newDesc: "Automatically updates tax and insurance calculations.",
  },
  {
    id: 2,
    oldTitle: "Manual Net & Gross Calculations",
    oldDesc: "Time-consuming and prone to mistakes.",
    newTitle: "Accurate Net & Gross Calculations",
    newDesc: "Results aligned with official regulations.",
  },
  {
    id: 3,
    oldTitle: "Excel Doesn't Scale",
    oldDesc: "Hard to manage growing teams or multiple companies.",
    newTitle: "Multi-Company Payroll Management",
    newDesc: "Manage one or many companies from one place.",
  },
  {
    id: 4,
    oldTitle: "Manual Payslips & Emails",
    oldDesc: "Extra work and human errors.",
    newTitle: "Automated Payslips & Emails",
    newDesc: "Generate and send payslips in one click.",
  },
  {
    id: 5,
    oldTitle: "No Clear Cost Forecasting",
    oldDesc: "Unclear total payroll and tax costs.",
    newTitle: "Payroll Forecasting Tool",
    newDesc: "Estimate payroll costs before running payroll.",
  },
];

export default function Challenges() {
  return (
    <section className="w-full flex justify-center py-20 px-4 bg-white">
      <div className="w-full max-w-[1200px] flex flex-col items-center">
        <div className="text-center flex flex-col gap-3">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Payroll Is Harder Than It Should Be
          </h2>
          <p className="text-gray-600 text-[1.1rem]">
            One smart system makes payroll simple and accurate.
          </p>
        </div>

        <div className="relative w-full mt-[68px] flex flex-col gap-12 md:gap-16">
          <div className="hidden md:block absolute left-1/2 top-2 bottom-2 w-[2px] bg-orange-500 -translate-x-1/2 z-0"></div>

          {comparisonData.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col md:flex-row justify-between items-start w-full gap-8 md:gap-0 z-10"
            >
              <div className="w-full md:w-[45%] flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-red-500 shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h4 className="text-[1.1rem] font-bold text-gray-900">
                    {item.oldTitle}
                  </h4>
                </div>
                <p className="text-sm text-gray-500 ml-8 leading-relaxed">
                  {item.oldDesc}
                </p>
              </div>

              <div className="hidden md:flex absolute left-1/2 top-1 -translate-x-1/2 w-6 h-6 rounded-full bg-orange-500 border-4 border-white shrink-0"></div>

              <div className="w-full md:w-[45%] flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-green-500 shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h4 className="text-[1.1rem] font-bold text-gray-900">
                    {item.newTitle}
                  </h4>
                </div>
                <p className="text-sm text-gray-500 ml-8 leading-relaxed">
                  {item.newDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
