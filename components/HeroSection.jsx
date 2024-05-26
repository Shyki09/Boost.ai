import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
const HeroSection = () => {
  const { data: session } = useSession();
  function handleSignOut() {
    signOut();
  }
  // btn.addEventListener("click", () => {
  // btn.classList.toggle("open");
  // nav.classList.toggle(`flex`);
  // nav.classList.toggle(`hidden`);
  const btn = useState(false);

  return <div>{session ? User({ session, handleSignOut }) : Guest()}</div>;
};

function Guest() {
  return (
    <div className=" container flex flex-col-reverse items-center px-20 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
      {/* Left Item */}
      <div className=" flex  flex-col mb-32 space-y-12 md:w-1/2">
        <h1 className=" max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
          AI POWERED ADVERTISING MANAGEMENT
        </h1>
        <p className="  max-w-sm text-center text-darkGrayishBlue md:text-left font-medium">
          The Future of Advertising Management Design, Plan, Automate and post
          or schedule your Advertising posts in one place.
        </p>
        <div className=" flex justify-center md:justify-start">
          <Link
            href="/login"
            className=" p-2 px-6 pt-2 text-white  bg-green-400 rounded-full baseline hover:bg-gray-200  hover:text-[#6bf86b] "
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="md:w-1/2">
        <img src="Hero1.svg" className="" />
      </div>
    </div>
  );
}

function User({ session, handleSignOut }) {
  return null;
}

export default HeroSection;
