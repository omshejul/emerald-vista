import React from "react";
import Image from 'next/image';
import { Fahkwang } from "next/font/google";



const fahkwang = Fahkwang({
  subsets: ["latin"],
  weight: "400",
});
const Hero = () => {
  return (
    // <div className="heroSection bg-[url('/hero/hero-image.png')] flex flex-col justify-center w-full max-w-screen-xl h-screen bg-cover bg-center">
    <div className="heroSection flex flex-col justify-center w-full  h-screen">
      <div className="absolute top-0 left-0 w-full h-full  z-[-1]">
      <Image
          src="/hero/hero-image.png"
          alt="Hero"
          fill
          className="w-full h-full object-cover"
          priority // Keep priority for preloading important images
        />
      </div>
      <p className=" p-2 text-center text-4xl font-thin">Welcome to</p>
      <div className={fahkwang.className}>
        <p className=" p-2 text-6xl leading-none text-center">
          EMERALD <br /> VISTA
        </p>
      </div>
      <p className=" p-2 text-center text-4xl font-thin">Luxury Suites</p>
    </div>
  );
};

export default Hero;
