"use client";

import React from "react";
import DashboardSidebar from "@/app/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/app/components/dashboard/DashboardHeader";
import StatCards from "@/app/components/dashboard/StatCards";
import PayrollBreakdown from "@/app/components/dashboard/PayrollBreakdown";
import PayrollTrend from "@/app/components/dashboard/PayrollTrend";
import EmployeesStatus from "@/app/components/dashboard/EmployeesStatus";
import PayrollRunStatus from "@/app/components/dashboard/PayrollRunStatus";
import { useLanguage } from "@/app/context/LanguageContext";

export default function DashboardPage() {
  const { isRTL, language } = useLanguage();

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="min-h-screen bg-[#f8fafc] text-gray-900 flex flex-col font-sans transition-all"
    >
      <DashboardHeader isRTL={isRTL} />

      <div className="flex-1 flex overflow-hidden">
        <DashboardSidebar isRTL={isRTL} />

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-6">
            <StatCards />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-5">
                <PayrollBreakdown />
              </div>
              <div className="lg:col-span-7">
                <PayrollTrend />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7">
                <EmployeesStatus />
              </div>
              <div className="lg:col-span-5">
                <PayrollRunStatus />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
