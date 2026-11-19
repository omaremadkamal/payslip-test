"use client";

import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import HeroAR from "@/app/components/HeroAR";
import Features from "@/app/components/Features";
import FeaturesAR from "@/app/components/FeaturesAR";
import Challenges from "@/app/components/Challenges";
import ChallengesAR from "@/app/components/ChallengesAR";
import Footer from "@/app/components/Footer";
import FooterAR from "@/app/components/FooterAR";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Home() {
  const { language, isRTL } = useLanguage();

  return (
    <main
      dir={isRTL ? "rtl" : "ltr"}
      className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden transition-all"
    >
      <Navbar />
      {language === "ar" ? (
        <>
          <HeroAR />
          <FeaturesAR />
          <ChallengesAR />
          <FooterAR />
        </>
      ) : (
        <>
          <Hero />
          <Features />
          <Challenges />
          <Footer />
        </>
      )}
    </main>
  );
}
