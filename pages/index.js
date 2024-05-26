import { signOut, useSession } from "next-auth/react";
import CTA from "../components/CTA";
import Features from "../components/Features";
import Footer from "../components/Footer";
import GeminiBody from "../components/GeminiBody";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Operations from "../components/Operations";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const { data: session } = useSession();
  function handleSignOut() {
    signOut();
  }
  return <div>{session ? User({ session, handleSignOut }) : Guest()}</div>;
}
function Guest() {
  return (
    <main className=" bg-white min-h-screen ">
      <Navbar />
      {/* <Sidebar /> */}
      <HeroSection />

      <Features />
      <Operations />
      <CTA />
      <Footer />
    </main>
  );
}

function User({ session, handleSignOut }) {
  return (
    <>
      <Navbar />
      <div className="flex contain">
        <Sidebar />
        <GeminiBody />
      </div>
    </>
  );
}
