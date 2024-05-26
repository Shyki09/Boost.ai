import Link from "next/link";

import { signOut, useSession } from "next-auth/react";
const CTA = () => {
  const { data: session } = useSession();
  function handleSignOut() {
    signOut();
  }
  return <div>{session ? User({ session, handleSignOut }) : Guest()}</div>;
};
function Guest() {
  return (
    <section className=" bg-green-400">
      <div className=" container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0 ">
        <h2 className=" text-5xl font-bold text-center text-white md:text-4xl md:max-w-xl md:text-left">
          Simplify Your Ad Reach Today
        </h2>
        <Link
          href="/login"
          className=" p-3 px-6 pt-2 text-green-400  bg-gray-100 rounded-full shadow-2xl baseline hover:bg-gray-300  hover:text-black"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}

function User({ session, handleSignOut }) {
  return null;
}

export default CTA;
