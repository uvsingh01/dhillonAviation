"use client";
import Image from "next/image";
import React from "react";

const Aboutsection = () => {
  return (
    <div className="bg-white flex flex-col xl:flex-row h-auto ">
      <Image
        src="/static/editedheli.png"
        height="500"
        width="500"
        alt="Dhillon Aviation"
        className="hidden xl:block"
      />
      <div className="flex flex-col text-sm sm:max-md:text-center md:text-lg lg:text-xl mx-10 my-10 lg:my-20">
        <div className="text-cyan-700 text-md font-extrabold tracking-[0.25em] mb-5">
          WHO WE ARE
        </div>
        <div className="text-2xl lg:text-3xl text-manualyellow font-extrabold mb-5 lg:mb-10">
          Where Safety And Excellence Takes Flight.
        </div>
        <div className="lg:mr-5">
          We are a distinguished aviation service provider with a specialization
          in delivering exceptional services,
          <span className="font-semibold ">
            backed by our extensive experience of over 15+ years
          </span>
          . Our seasoned expertise allows us to navigate the intricacies of the
          industry with confidence, offering you unparalleled knowledge and
          insights. As a trusted partner, we bring a wealth of experience to the
          table, ensuring that your charter needs are met with utmost
          professionalism and expertise. From conceptualization to execution, we
          are committed to delivering the highest standards of service and
          exceeding your expectations at every step of the journey.
        </div>
      </div>
    </div>
  );
};

export default Aboutsection;
