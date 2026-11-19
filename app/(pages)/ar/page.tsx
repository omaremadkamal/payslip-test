"use client";

import { useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import HeroAR from "@/app/components/HeroAR";
import FeaturesAR from "@/app/components/FeaturesAR";
import ChallengesAR from "@/app/components/ChallengesAR";
import FooterAR from "@/app/components/FooterAR";
import { useLanguage } from "@/app/context/LanguageContext";

export default function HomeAR() {
  const { setLanguage } = useLanguage();

  useEffect(() => {
    setLanguage("ar");
  }, [setLanguage]);

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden"
    >
      <Navbar />
      <HeroAR />
      <FeaturesAR />
      <ChallengesAR />
      <FooterAR />
    </main>
  );
}
