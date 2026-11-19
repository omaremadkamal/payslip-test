"use client";

import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ContactForm() {
  const { dict, isRTL, language } = useLanguage();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [notification, setNotification] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleValidationAndSend = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // 1. Validate that all inputs are filled
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setNotification({
        type: "error",
        text: dict.contact.toastIncomplete,
      });
      return;
    }

    // 2. Validate email format
    if (!emailRegex.test(formData.email.trim())) {
      setNotification({
        type: "error",
        text: dict.contact.toastInvalidEmail,
      });
      return;
    }

    // 3. Success: Show success toast and empty all inputs
    setNotification({
      type: "success",
      text: dict.contact.toastSuccess,
    });

    // Empty the inputs
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });

    // Auto-dismiss toast after 5 seconds
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative w-full flex justify-center py-16 px-6 lg:px-12 bg-[#fffaf5] min-h-[792px] items-center"
    >
      {/* Floating Success / Error Toast Notification */}
      {notification && (
        <div
          role="alert"
          className={`fixed top-8 z-[999999] flex items-center justify-between gap-4 px-6 py-4 rounded-2xl shadow-2xl border-2 transition-all duration-300 animate-in slide-in-from-top-4 max-w-md ${
            isRTL ? "left-6 md:left-8" : "right-6 md:right-8"
          } ${
            notification.type === "success"
              ? "bg-green-50 border-green-500 text-green-950 shadow-green-500/10"
              : "bg-red-50 border-red-500 text-red-950 shadow-red-500/10"
          }`}
        >
          <div className="flex items-center gap-3.5">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-white font-bold text-base shadow-sm ${
                notification.type === "success" ? "bg-green-600" : "bg-red-600"
              }`}
            >
              {notification.type === "success" ? "✓" : "✕"}
            </div>
            <div>
              <h4 className="text-[15px] font-bold">
                {notification.type === "success"
                  ? language === "ar"
                    ? "تم الإرسال بنجاح"
                    : "Message Sent Successfully"
                  : language === "ar"
                    ? "خطأ في البيانات"
                    : "Validation Error"}
              </h4>
              <p className="text-[13px] opacity-90 leading-snug">
                {notification.text}
              </p>
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            type="button"
            onClick={() => setNotification(null)}
            className="text-gray-400 hover:text-gray-700 p-1 rounded-md transition-colors cursor-pointer"
            aria-label="Close notification"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}

      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
        {/* Contact Info Column */}
        <div className="w-full lg:w-[45%] flex flex-col gap-10 pt-4">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
              {language === "ar" ? "معلومات التواصل" : "Contact Information"}
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed max-w-[420px]">
              {language === "ar"
                ? "سواء كنت عميلاً حالياً أو ترغب في معرفة المزيد عن حلولنا، يسعدنا دائماً التحدث معك."
                : "Whether you're a current customer or just interested in learning more, we'd love to hear from you."}
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {/* Sales Chat */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="text-[15px] font-bold text-gray-900">
                  {language === "ar" ? "تواصل مع المبيعات" : "Chat with Sales"}
                </h4>
                <p className="text-[13.5px] text-gray-500 mb-1">
                  {language === "ar"
                    ? "تحدث مباشرة مع فريقنا."
                    : "Speak to our friendly team."}
                </p>
                <a
                  href="mailto:sales@payrollslips.com"
                  className="text-[#f97316] font-semibold text-[14px] hover:underline"
                >
                  sales@payrollslips.com
                </a>
              </div>
            </div>

            {/* Office */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-[#f97316] shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="text-[15px] font-bold text-gray-900">
                  {language === "ar" ? "مقر الشركة" : "Visit us"}
                </h4>
                <p className="text-[13.5px] text-gray-500 mb-1">
                  {language === "ar"
                    ? "شرفنا بزيارة مقرنا الرئيسي."
                    : "Visit our office HQ."}
                </p>
                <p className="text-[#f97316] font-semibold text-[14px] leading-snug">
                  {language === "ar"
                    ? "مجمع الأعمال، القاهرة الجديدة، مصر"
                    : "123 Business Park, New Cairo, Egypt"}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-500 shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="text-[15px] font-bold text-gray-900">
                  {language === "ar" ? "اتصل بنا" : "Call us"}
                </h4>
                <p className="text-[13.5px] text-gray-500 mb-1">
                  {language === "ar"
                    ? "الأحد - الخميس من 9 صباحاً حتى 5 مساءً."
                    : "Sun-Thu from 9am to 5pm."}
                </p>
                <p className="text-[#f97316] font-bold text-[15px]">12345</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="w-full lg:w-[55%] bg-white rounded-3xl p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-gray-900">
                  {dict.contact.firstName}
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder={dict.contact.firstNamePlaceholder}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-800 focus:outline-none focus:border-orange-500 transition"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-gray-900">
                  {dict.contact.lastName}
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder={dict.contact.lastNamePlaceholder}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-800 focus:outline-none focus:border-orange-500 transition"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-gray-900">
                {dict.contact.email}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={dict.contact.emailPlaceholder}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-800 focus:outline-none focus:border-orange-500 transition"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-gray-900">
                {dict.contact.subject}
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder={dict.contact.subjectPlaceholder}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-800 focus:outline-none focus:border-orange-500 transition font-medium"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-gray-900">
                {dict.contact.message}
              </label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={dict.contact.messagePlaceholder}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-800 focus:outline-none focus:border-orange-500 transition resize-none"
              ></textarea>
            </div>

            <button
              type="button"
              onClick={handleValidationAndSend}
              className="w-full bg-[#f97316] text-white py-3.5 rounded-xl font-bold text-[15px] hover:bg-orange-600 transition shadow-lg shadow-orange-500/20 mt-2 cursor-pointer"
            >
              {dict.contact.sendMessage}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
