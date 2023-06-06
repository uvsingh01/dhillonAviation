import Image from "next/image";
import Link from "next/link";
import React from "react";

const Newsection = () => {
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
      <div className="flex justify-between gap-4 ">
        <Link href="https://www.tribuneindia.comnews/archive/chandigarh/rose-fest-chopper-ride-to-cost-rs-2-310-732841" 
        className="hover:scale-105 ease-in-out duration-300">
        <div>
          <Image
            src="/static/news/tt.jpg"
            height="100"
            width="100"
            alt="d"
            className="h-auto w-32 md:w-48 lg:w-60 xl:w-72 2xl:w-80"
          />
        </div>
        </Link>
        <Link href="https://timesofindia.indiatimes.com/city/chandigarh/33rd-spring-fest-begins-today-in-panchkula/articleshow/68330063.cms" className="self-center hover:scale-105 ease-in-out duration-300">
        <div >
          <Image
            src="/static/news/toi.svg"
            height="100"
            width="100"
            alt="d"
            className="h-6 md:h-9 lg:h-14 xl:h-16 2xl:h-20 w-32 md:w-48 lg:w-60 xl:w-72 2xl:w-96"
          />
        </div>
        </Link>
        <Link href="https://www.india.com/news/india/anti-naxal-operations-crpf-hires-two-private-choppers-for-military-sorties-300867/"
        className="hover:scale-105 ease-in-out duration-300">
        <div>
          <Image
            src="/static/news/india.png"
            height="100"
            width="100"
            alt="d"
            className="h-auto w-32 md:w-48 lg:w-60 xl:w-72 2xl:w-80"
          />
        </div>
        </Link>
      </div>
    </section>
  );
};

export default Newsection;
