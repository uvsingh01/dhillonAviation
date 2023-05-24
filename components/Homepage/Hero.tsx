"use client";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div>
      <div className="relative w-full ">
        <Image
          src="/static/hero.jpg"
          height="100"
          width="100"
          className="w-full h-80 md:h-[60vh] lg:h-[75vh] xl:h-[100vh] "
          alt="VT_ZIN"
        />
        <div className="absolute top-0 inset-x-0 bottom-0 bg-black bg-opacity-20 font-bold flex items-end text-md pb-12 ps-8 md:text-3xl md:pb-20 lg:pb-24 lg:text-5xl lg:ps-32 xl:text-7xl text-white">
          <Typewriter
            options={{
              strings: ["HELPING BUSINESS BECOME GREAT.","YOUR SUCCESS IS OUR BUSINESS. ",  "RELIABLE. EFFICIENT. COMFORT."],
              autoStart: true,
              loop: true,
              delay:0,
              deleteSpeed:20
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
