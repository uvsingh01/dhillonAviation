//@ts-nocheck
"use client";
import React,{useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';
import  Carousel  from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Clientsection = () => {
  useEffect(() => {
    AOS.init(
      {
        once:true,
        duration : 500,
      }
    );
  }, [])
  const clientImages = [
    '/static/client/bjp.png',
    '/static/client/reservebank.png',
    '/static/client/crpf.png',
    '/static/client/gail.png',
    '/static/client/powergrid.png',
    '/static/client/cp.png',
    '/static/client/ch.webp'
  ];

  const carouselSettings = {
    responsive: {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3,
        partialVisibilityGutter: 40
      },
      tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 3,
        partialVisibilityGutter: 30
      },
      mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 2,
        slidesToSlide: 2,
        partialVisibilityGutter: 20
      }
    },
    showDots: false,
    infinite: true,
    autoPlay: true,
    autoPlaySpeed: 3000, // Adjust the interval time (in milliseconds) as needed
    arrows: false
  };

  return (
    <section className="flex flex-col text-center justify-between  p-10 xl:p-20 ">
      <div>
        <h1 className="text-manualyellow text-3xl slg:text-4xl xl:text-5xl  leading-loose underline underline-offset-8 decoration-manuallightgrey font-extrabold  mb-5 lg:mb-10">
          OUR CLIENTS
        </h1>
        <h3 className='text-manualgrey text-xl  md:text-xl lg:text-3xl font-extrabold tracking-[0.25em] mb-5'>TRUSTED BY INDIAN GOVERNMENT</h3>
      </div>

      <Carousel {...carouselSettings}>
        {clientImages.map((image, index) => (
          <div key={index} data-aos="fade-up" className="flex justify-center cursor-pointer  h-auto w-full">
            <img
              src={image}
              alt={`Client Logo ${index + 1}`}
              className="h-auto w-32 md:w-48 lg:w-60 xl:w-72 2xl:w-80 hover:scale-105 p-5 ease-in-out duration-300"
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Clientsection;
