"use client";
import Logo from "./Logo";
import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt4, HiOutlineX } from "react-icons/hi";
function Nav() {
  const [menuState, setMenuState] = useState(false);
  const toggleMenu = () => {
    setMenuState(!menuState);
  };
  return (
    <div className="navContainer w-full grid place-items-center">

      <nav className="absolute top-0 grid place-self-center grid-flow-col items-center w-full p-5 md:text-lg">
        <Logo size={6} />
        <button onClick={toggleMenu} className="lg:hidden p-8">
          {menuState ? <HiOutlineX size={32} /> : <HiMenuAlt4 size={32} />}
        </button>




        {/* Desktop Nav */}
        <div className="hidden lg:flex navMenu w-full max-w-md justify-around md:mx-5 place-self-center">
          <Link href="/" className="ms-2 md:p-2 md:m-1">
            Home
          </Link>
          <Link href="/about-us" className="ms-2 md:p-2 md:m-1">
            About Us
          </Link>
          <Link href="/corporate" className="ms-2 md:p-2 md:m-1">
            Corporate
          </Link>
          <Link href="/contact-us" className="ms-2 md:p-2 md:m-1">
            Contact Us
          </Link>
        </div>




        {/* Mobile Nav */}
        <div
          className={`lg:hidden top-32 grid w-11/12 border-2 border-r-0 border-accent border-opacity-50 right-0 origin-top-right absolute rounded-s-2xl text-white text-4xl font-semibold bg-bg bg-opacity-80 backdrop-blur-sm transition-all duration-500 ${menuState ? "" : "scale-x-95 opacity-0"
            } `}
        >
          <Link href="/" className="p-4 my-4 text-center">
            Home
          </Link>
          <Link href="/about-us" className="p-4 my-4 text-center">
            About Us
          </Link>
          <Link href="/corporate" className="p-4 my-4 text-center">
            Corporate
          </Link>
          <Link href="/contact-us" className="p-4 my-4 text-center">
            Contact Us
          </Link>
        </div>
        <div className="hidden lg:block md:w-32"></div>
        {/*width 128px */}
      </nav>
    </div>
  );
}
export default Nav;
