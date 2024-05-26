import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [session, setsession] = useState(false);
  // btn.addEventListener("click", () => {
  // btn.classList.toggle("open");
  // nav.classList.toggle(`flex`);
  // nav.classList.toggle(`hidden`);
  const btn = useState(false);

  {
    session ? User() : Guest();
  }

  function Guest() {
    return (
      <nav className="relative container mx-auto ">
        <div className="flex items-center justify-between">
          <div className=" ">
            <Link href="/">
              <img src="logo.svg" className=" w-146 h-24" />
            </Link>
          </div>
          <div className="hidden md:flex space-x-12">
            <Link href="/" className="hover:text-darkGrayishBlue font-semibold">
              Home
            </Link>
            <Link
              href="/price"
              className="hover:text-darkGrayishBlue font-semibold"
            >
              Pricing
            </Link>
            <Link
              href="/partner"
              className="hover:text-darkGrayishBlue font-semibold"
            >
              Become a Partner
            </Link>
            <Link
              href="/contact"
              className="hover:text-darkGrayishBlue font-semibold"
            >
              Contact Us
            </Link>
          </div>
          <Link
            href="/login"
            className="hidden p-2 px-6 pt-2 text-white bg-green-400 rounded-full baseline hover:bg-gray-200  hover:text-[#6bf86b]  md:block"
          >
            Get Started
          </Link>
          <button
            id="menu-btn"
            class=" open block hamburger md:hidden focus:outline-none"
          >
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div class="md:hidden">
          <div
            id="menu"
            class="absolute  flex-col items-center hidden  self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <Link href="/">Home</Link>
            {/* <a href="/">Home</a> */}
            <Link href="/price">Pricing</Link>
            {/* <a href="/price">Pricing</a> */}
            <Link href="/partner">Become a Partner</Link>
            {/* <a href="/partner">Become a Partner</a> */}
            <a href="#">Careers</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </nav>
    );
  }

  function User() {
    return (
      <nav className="relative container mx-auto ">
        <div className="flex items-center justify-between">
          <div className=" ">
            <Link href="/">
              <img src="logo.svg" className=" w-146 h-24" />
            </Link>
          </div>
          <div className="hidden md:flex space-x-12">
            <Link href="/" className="hover:text-darkGrayishBlue font-semibold">
              Home
            </Link>
            <Link
              href="/price"
              className="hover:text-darkGrayishBlue font-semibold"
            >
              Pricing
            </Link>
            <Link href="#" className="hover:text-darkGrayishBlue font-semibold">
              Become a Partner
            </Link>
            <Link href="#" className="hover:text-darkGrayishBlue font-semibold">
              Contact Us
            </Link>
          </div>
          <div className=" details">
            <h5>Unknown</h5>
            <h5>Unknown</h5>
          </div>

          <Link
            href="/login"
            className="hidden p-2 px-6 pt-2 text-white bg-green-400 rounded-full baseline hover:bg-gray-200  hover:text-[#6bf86b]  md:block"
          >
            Sign Out
          </Link>
          <button
            id="menu-btn"
            class=" open block hamburger md:hidden focus:outline-none"
          >
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div class="md:hidden">
          <div
            id="menu"
            class="absolute  flex-col items-center hidden  self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <a href="#">Home</a>
            <a href="#">Pricing</a>
            <a href="#">Become a Partner</a>
            <a href="#">Careers</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </nav>
    );
  }
};

export default Menu;
// // components/Menu.jsx
// import Link from "next/link";

// const Menu = ({ session }) => {
//   return (
//     <nav className="relative container mx-auto">
//       <div className="flex items-center justify-between">
//         <div className="">
//           <Link href="/">
//             <img src="logo.svg" className="w-146 h-24" />
//           </Link>
//         </div>
//         <div className="hidden md:flex space-x-12">
//           <Link href="/" className="hover:text-darkGrayishBlue font-semibold">
//             Home
//           </Link>
//           <Link
//             href="/price"
//             className="hover:text-darkGrayishBlue font-semibold"
//           >
//             Pricing
//           </Link>
//           <Link
//             href="/partner"
//             className="hover:text-darkGrayishBlue font-semibold"
//           >
//             Become a Partner
//           </Link>
//           <Link
//             href="/contact"
//             className="hover:text-darkGrayishBlue font-semibold"
//           >
//             Contact Us
//           </Link>
//         </div>
//         {session ? (
//           <div className="details">
//             <h5>Unknown</h5>
//             <h5>Unknown</h5>
//           </div>
//         ) : (
//           <Link
//             href="/login"
//             className="hidden p-2 px-6 pt-2 text-white bg-green-400 rounded-full baseline hover:bg-gray-200  hover:text-[#6bf86b] md:block"
//           >
//             Get Started
//           </Link>
//         )}
//         <button
//           id="menu-btn"
//           className="open block hamburger md:hidden focus:outline-none"
//         >
//           <span className="hamburger-top"></span>
//           <span className="hamburger-middle"></span>
//           <span className="hamburger-bottom"></span>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div className="md:hidden">
//         <div
//           id="menu"
//           className="absolute  flex-col items-center hidden  self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
//         >
//           <Link href="/">Home</Link>
//           <Link href="/price">Pricing</Link>
//           <Link href="/partner">Become a Partner</Link>
//           <Link href="#">Careers</Link>
//           <Link href="#">Contact Us</Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Menu;
