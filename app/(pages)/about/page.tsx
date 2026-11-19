import Navbar from "@/app/components/Navbar";
import AboutHero from "@/app/components/AboutHero";
import AboutMission from "@/app/components/AboutMission";
import AboutDifferent from "@/app/components/AboutDifferent";
import AboutVision from "@/app/components/AboutVision";
import AboutCTA from "@/app/components/AboutCTA";
import AboutFooter from "@/app/components/AboutFooter";

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      <Navbar />
      <AboutHero />
      <AboutMission />
      <AboutDifferent />
      <AboutVision />
      <AboutCTA />
      <AboutFooter />
    </main>
  );
}
