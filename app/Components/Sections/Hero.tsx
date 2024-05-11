"use client"
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import styles from './Hero.module.css'; // assuming you have a CSS module for styles

const Hero = () => {
  const images = [
    "/hero/hero-image1.png",
    "/hero/hero-image3.png",
    "/hero/hero-image4.png",
    "/hero/hero-image5.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="heroSection flex flex-col justify-center w-full h-screen">
      <div className={`absolute top-0 left-0 w-full h-full z-[-1] ${styles.slidingImages}`}>
        {images.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt="Hero"
            fill
            className={`w-full h-full object-cover ${index === currentImageIndex ? styles.active : ''}`}
            priority
          />
        ))}
      </div>
      <p className="p-2 text-center text-4xl font-thin">Welcome to</p>
      <div className="p-2 text-6xl leading-none text-center">
        <p>EMERALD <br /> VISTA</p>
      </div>
      <p className="p-2 text-center text-4xl font-thin">Luxury Suites</p>
    </div>
  );
};

export default Hero;
