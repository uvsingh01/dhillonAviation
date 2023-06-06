//@ts-nocheck
"use client";
import React,{useEffect} from "react";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration : 500,
    });
  }, [])
  return (
      <div className="relative w-full ">
        <Image
          priority={true}
          src="/static/hero.jpg"
          height="100"
          width="100"
          className="w-full h-80 md:h-[60vh] slg:h-[75vh] xl:h-[100vh] "
          alt="VT_ZIN"
        />
        <div  className="absolute top-0 inset-x-0 bottom-0 bg-black bg-opacity-20 font-bold flex items-end text-xl pb-12 ps-8 md:text-4xl md:pb-20 lg:pb-24 lg:text-5xl lg:ps-32 xl:text-7xl text-white">
        <div data-aos="fade-up">HELPING BUSINESS BECOME GREAT.</div>
        </div>
      </div>

  );
};

export default Hero;
