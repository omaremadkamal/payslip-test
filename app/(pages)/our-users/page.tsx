import Navbar from "@/app/components/Navbar";
import UsersHero from "@/app/components/UsersHero";
import UsersHR from "@/app/components/UsersHR";
import UsersAdmins from "@/app/components/UsersAdmins";
import UsersAlignment from "@/app/components/UsersAlignment";
import UsersBanner from "@/app/components/UsersBanner";
import Footer from "@/app/components/Footer";

export default function OurUsersPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      <Navbar />
      <UsersHero />
      <UsersHR />
      <UsersAdmins />
      <UsersAlignment />
      <UsersBanner />
      <Footer />
    </main>
  );
}
