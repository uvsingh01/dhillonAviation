//@ts-nocheck
"use client";
import Image from "next/image";
import Link from "next/link";
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Newsection = () => {
  useEffect(() => {
    AOS.init({
      duration : 500,
    });
  }, [])
  return (
    <section className="flex flex-col text-center justify-between px-10 pb-10 xl:px-20 xl:pb-20 h-full">
      <div>
        <h1 className="text-manualgrey text-3xl slg:text-4xl xl:text-5xl leading-loose underline underline-offset-8 decoration-manuallightgrey font-extrabold  mb-5 lg:mb-10">
          IN THE NEWS
        </h1>
        <h3 className="text-manualyellow text-xl  md:text-xl lg:text-3xl font-extrabold tracking-[0.25em] mb-14">
          FOR THE RIGHT REASONS
        </h3>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between gap-4 ">
        <Link data-aos="fade-up" href="https://www.tribuneindia.comnews/archive/chandigarh/rose-fest-chopper-ride-to-cost-rs-2-310-732841" 
        className="hover:scale-105 ease-in-out duration-30 ">
          <Image
            src="/static/news/tt.jpg"
            height="100"
            width="100"
            alt="d"
            className="h-auto inline sm:max-md:w-4/6 md:w-60 lg:w-60 xl:w-72 2xl:w-80 self-center"
          />
        </Link>
        <Link data-aos="fade-up" href="https://timesofindia.indiatimes.com/city/chandigarh/33rd-spring-fest-begins-today-in-panchkula/articleshow/68330063.cms" className="self-center hover:scale-105 ease-in-out duration-300">

          <Image
            src="/static/news/toi.svg"
            height="100"
            width="100"
            alt="d"
            className="h-auto inline sm:max-md:w-4/6 md:h-14 lg:h-14 xl:h-16 2xl:h-20  md:w-48 lg:w-60 xl:w-72 2xl:w-96"
          />

        </Link>
        <Link data-aos="fade-up" href="https://www.india.com/news/india/anti-naxal-operations-crpf-hires-two-private-choppers-for-military-sorties-300867/"
        className="hover:scale-105 ease-in-out duration-300">

          <Image
            src="/static/news/india.png"
            height="100"
            width="100"
            alt="d"
            className="h-auto inline sm:max-md:w-4/6 md:w-60 lg:w-60 xl:w-72 2xl:w-80"
          />

        </Link>
      </div>
    </section>
  );
};

export default Newsection;
