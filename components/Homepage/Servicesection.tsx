//@ts-nocheck
"use client";
import Image from "next/image";
import Link from "next/link";
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

interface prop {
  title: string;
  description: string;
  path: string;
  short:string;
  hidden:boolean;
}

const Row = ({ title, description, path, short,hidden }: prop) => {
  return (
    <>
      <div data-aos="zoom-in" className={`p-5 border-manuallightgrey border-4 rounded-3xl mb-10 flex flex-col items-center ${hidden?"max-xl:hidden":"visible"} `}>
        <Image src={`${path}`} height="100" width="100" alt="Dhillon Aviation" className="h-10 w-10 mb-2" />
        <div className="text-manualyellow text-center font-semibold text-lg lg:text-xl mx-2 mb-2 ">{title}</div>
        <div className="text-sm text-center">{short}</div>
      </div>
    </>
  );
};

const Servicesection = () => {
  useEffect(() => {
    AOS.init({
      once:true,
      duration : 500,
    });
  }, [])
  const data = [
    {
      title: "Aerial Filming",
      description:
        "We specialize in capturing stunning aerial footage for various purposes such as film production, documentaries, commercials, and promotional videos. Our skilled pilots and state-of-the-art equipment ensure high-quality and visually captivating aerial filming.",
      path: "/static/services/blogo/camera.svg",
      short:"Captivating aerial footage for films, documentaries, and commercials."
    },

    {
      title: "Disaster Relief",
      description:
        "During times of crisis, we stand ready to provide immediate assistance through our disaster relief services. Our aviation capabilities enable us to swiftly transport essential personnel, supplies, and equipment to affected areas, supporting relief efforts effectively.",
      path: "/static/services/blogo/earth.svg",
      short:"Swift transportation of personnel, supplies, and equipment during crisis."
    },
    {
      title: "Political Flying",
      description:
        " We offer political flying services tailored to the unique requirements of political campaigns and events. Whether it's campaign tours, aerial advertising, or VIP transport, our experienced team ensures smooth and efficient operations to support political activities.",
      path: "/static/services/blogo/speech.svg",
      short:"Campaign tours, aerial advertising, and VIP transport for political events."
    },
    {
      title: "Aerial Survey",
      description:
        "Our specialized aerial survey services capture precise and detailed data for mapping, remote sensing, infrastructure inspection, land surveys, and environmental monitoring. Our advanced technology and experienced team deliver reliable and actionable insights for various industries.",
      path: "/static/services/blogo/research.svg",
      short:"Precise data capture for mapping, remote sensing, and infrastructure inspection."
    },
    
    {
      title: "Maintenance",
      description:
        "We offer comprehensive maintenance services to ensure the airworthiness and safety of your aircraft. Our skilled technicians and meticulous approach guarantee top-notch maintenance and upkeep, keeping your aircraft in optimal condition.",
      path: "/static/services/blogo/maintenance.svg",
      short:"Comprehensive aircraft maintenance services for safety and airworthiness."
    },
    {
      title: "Supply Droppings",
      description:
        "Our expertise extends to supply droppings in remote or challenging terrains. With precision and efficiency, we ensure the safe and accurate delivery of essential supplies, providing logistical support in demanding situations.",
      path: "/static/services/blogo/supply-chain.svg",
      short:"Safe and accurate delivery of essential supplies in challenging terrains."
    },
    {
      title: "Joy Rides",
      description:
        "Experience the thrill of soaring through the skies with our joy ride services. Whether you're looking to celebrate a special occasion or simply want to enjoy an unforgettable adventure, our skilled pilots will take you on a mesmerizing aerial journey.",
      path: "/static/services/blogo/happiness.svg",
      short:"Thrilling aerial adventures for special occasions and unforgettable experiences."
    },
    
    {
      title: "Aviation Consultancy",
      description:
        "Rely on our in-depth industry knowledge and experience for aviation consultancy services. Whether you need guidance on aviation regulations, strategic planning, or operational optimization, our consultants provide valuable insights and recommendations.",
      path: "/static/services/blogo/meeting.svg",
      short:"Expert guidance on regulations, strategic planning, and optimization."
    },
    
    {
      title: "Corporate Flying",
      description:
        "Our corporate flying services cater to the specific needs of businesses. We provide reliable and convenient transportation solutions for corporate executives, facilitating efficient travel to meetings, conferences, and other corporate engagements.",
      path: "/static/services/blogo/corporate.svg",
      short:"Reliable and convenient transportation for corporate executives."
    },
    {
      title: "Bulk Charter",
      description:
        "Our bulk charter services provide efficient and customized transportation solutions for large groups, corporate teams, and special events. With a well-maintained fleet and experienced crew, we ensure seamless logistics and flexible scheduling to meet your group travel needs. Enjoy a hassle-free travel experience with our reliable bulk charter services.",
      path: "/static/services/blogo/crowd.svg",
      short:"Customized transportation solutions for large groups and special events."
    },
  ];
  return (
    <section className="bg-manualblack text-white flex flex-col items-center px-10 py-10 lg:py-20 md:px-16 ">
      <div className=" text-3xl font-extrabold mb-16 underline underline-offset-8 decoration-manualyellow leading-relaxed slg:text-4xl xl:text-5xl">
        OUR SERVICES
      </div>
      <div className="grid gap-4 content-start sm:grid-cols-1 sm:grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 xl:grid-cols-5 xl:grid-rows-2">
        {data.map((el, i) => {
          if(i>5){
            return <Row
            key={i}
            title={el.title}
            description={el.description}
            path={el.path}
            short={el.short}
            hidden={true}
          />
          }
          else{
            return <Row
            key={i}
            title={el.title}
            description={el.description}
            path={el.path}
            short={el.short}
            hidden={false}
          />
          }
})}
      </div>
      <Link href="/services">
      <div className="text-xl p-2.5 border-2 rounded-xl border-white font-semibold hover:scale-110 hover:bg-white hover:text-black hover:rounded-xl ease-in-out duration-300  ">Know More</div>          
      </Link>
      
    </section>
  );
};

export default Servicesection;
