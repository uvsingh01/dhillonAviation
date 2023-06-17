//@ts-nocheck
"use client";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import Link from "next/link";
import React,{useEffect} from "react";

const Aboutsection = () => {
  useEffect(() => {
    AOS.init(
      {
        once:true,
        duration : 500,
      }
    );
  }, [])
  return (
    <section className="bg-[url('/static/cloudbg.jpg')] bg-fixed flex flex-col items-center xl:flex-row h-auto ">
      <Image
        src="/static/editedheli.png"
        height="500"
        width="500"
        alt="Dhillon Aviation"
        className="hidden xl:block h-[31.25rem] w-[31.25rem]"
      />
      <div data-aos="fade-up" className="flex flex-col text-sm md:text-lg lg:text-xl px-10 py-10 md:px-16 lg:py-20">
        <div className="text-manualgrey text-xl leading-loose underline underline-offset-8 decoration-manuallightgrey md:text-xl lg:text-3xl font-extrabold tracking-[0.25em] mb-5">
          WHO WE ARE
        </div>
        <div data-aos="fade-up"  className="text-3xl slg:text-4xl xl:text-5xl text-manualyellow font-extrabold mb-5 lg:mb-10">
          Where Safety And Excellence Takes Flight.
        </div>
        <div data-aos="fade-up" className="lg:mr-5">
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
        <Link href="/about" className="self-center">
        <div className="mt-8 text-manualgrey rounded-xl p-2.5 border-2 border-manualyellow ease-in-out duration-300 hover:scale-110 hover:bg-manualyellow hover:text-black">Know more</div>
        </Link>
        </div>
    </section>
  );
};

export default Aboutsection;
