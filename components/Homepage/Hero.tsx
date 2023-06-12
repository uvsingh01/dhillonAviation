//@ts-nocheck
"use client";
import React,{useEffect} from "react";
// import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  return (
      <div className="relative h-[100vh] bg-black  justify-center items-center flex ">
        <div className="mt-10 h-4/5 w-screen mask" >
        <video src="/static/hero.mp4" className=" absolute h-full w-full object-fill"  autoPlay loop muted />
        </div>
        {/* <Image
          priority={true}
          src="/static/herogif.gif"
          height="100"
          width="100"
          className="w-full h-80 md:h-[60vh] slg:h-[75vh] xl:h-[100vh] "
          alt="VT_ZIN"
        /> */}
        {/* <div  className="absolute top-0 inset-x-0 bottom-0 bg-black  bg-opacity-20 font-bold flex justify-center items-end text-xl pb-12  md:text-4xl md:pb-20 lg:pb-24 lg:text-5xl xl:text-7xl text-white">
        <div data-aos="fade-up">HELPING BUSINESS BECOME GREAT.</div>
        </div> */}
      </div>

  );
};

export default Hero;
