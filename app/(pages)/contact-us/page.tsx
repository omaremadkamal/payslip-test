import Navbar from "@/app/components/Navbar";
import ContactHero from "@/app/components/ContactHero";
import ContactForm from "@/app/components/ContactForm";
import ContactFAQ from "@/app/components/ContactFAQ";
import Footer from "@/app/components/Footer";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      <Navbar />
      <ContactHero />
      <ContactForm />
      <ContactFAQ />
      <Footer />
    </main>
  );
}
