"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import FooterAR from "./FooterAR";

export default function Footer() {
  const { language } = useLanguage();

  if (language === "ar") {
    return <FooterAR />;
  }

  return (
    <footer className="w-full flex justify-center pt-24 pb-12 px-8 bg-white">
      <div className="w-full max-w-[1440px] flex flex-col gap-[96px]">
        {/* Call to action section */}
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Ready to Put an End to Payroll Headaches?
          </h2>
          <p className="text-gray-600 text-[1.1rem] leading-relaxed">
            Get started with a smart payroll system built for accuracy,
            compliance, and ease of use. Our support team is always ready to
            help you every step of the way.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <button
              type="button"
              className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition shadow-md cursor-pointer"
            >
              Create Your Account
            </button>
            <button
              type="button"
              className="border border-orange-500 text-orange-500 px-6 py-3 rounded-md font-medium hover:bg-orange-50 transition cursor-pointer"
            >
              Contact Support
            </button>
          </div>
        </div>

        <div className="w-full h-px bg-orange-300"></div>

        {/* Footer links grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6">
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="text-orange-500 font-bold text-xl tracking-wide">
              Payroll SLips
            </div>
            <p className="text-gray-500 text-sm leading-relaxed pr-4">
              A smart payroll management system that helps companies automate
              salary calculations, ensure accuracy, and stay fully compliant
              with Egyptian tax and social insurance laws.
            </p>
            <div className="flex items-center gap-4 text-gray-700">
              <svg
                className="w-5 h-5 cursor-pointer hover:text-orange-500 transition"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <svg
                className="w-5 h-5 cursor-pointer hover:text-orange-500 transition"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 15.68a6.34 6.34 0 006.33 6.32 6.32 6.32 0 006.32-6.32V10a8.21 8.21 0 004.75 1.51V8.06a4.8 4.8 0 01-2.81-1.37z" />
              </svg>
              <svg
                className="w-5 h-5 cursor-pointer hover:text-orange-500 transition"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
              </svg>
              <svg
                className="w-5 h-5 cursor-pointer hover:text-orange-500 transition"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <svg
                className="w-5 h-5 cursor-pointer hover:text-orange-500 transition"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <svg
                className="w-5 h-5 cursor-pointer hover:text-orange-500 transition"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </div>
            <div className="mt-2">
              <p className="text-gray-500 text-xs mb-1">Hotline</p>
              <p className="text-orange-500 text-2xl font-bold">12345</p>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-bold text-gray-900 mb-2">Products</h4>
            <a
              href="#"
              className="text-gray-500 text-sm hover:text-orange-500 transition"
            >
              Payroll Management
            </a>
            <a
              href="#"
              className="text-gray-500 text-sm hover:text-orange-500 transition"
            >
              Tax & Insurance
            </a>
            <a
              href="#"
              className="text-gray-500 text-sm hover:text-orange-500 transition"
            >
              Payslips
            </a>
            <a
              href="#"
              className="text-gray-500 text-sm hover:text-orange-500 transition"
            >
              Payroll Calculator
            </a>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-bold text-gray-900 mb-2">Company</h4>
            <a
              href="/about"
              className="text-gray-500 text-sm hover:text-orange-500 transition"
            >
              About
            </a>
            <a
              href="/contact-us"
              className="text-gray-500 text-sm hover:text-orange-500 transition"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="text-gray-500 text-sm hover:text-orange-500 transition"
            >
              Careers
            </a>
            <a
              href="#"
              className="text-gray-500 text-sm hover:text-orange-500 transition"
            >
              Privacy Policy
            </a>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="font-bold text-gray-900 mb-2">Contact</h4>
            <p className="text-gray-500 text-sm">Cairo, Egypt</p>
            <p className="text-gray-500 text-sm">info@payrollslips.com</p>
            <p className="text-gray-500 text-sm">+20 100 000 0000</p>
          </div>
        </div>

        <div className="w-full h-px bg-gray-100"></div>

        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2026 Payroll Slips. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-orange-500 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
