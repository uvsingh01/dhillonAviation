"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface prop {
  title: string;
  description: string;
  path: string;
}

const Row = ({ title, description, path }: prop) => {
  return (
    <>
      <div className="p-5  border-manualLIGHTGREY border-4 rounded-3xl mb-10 flex flex-col justify-center items-center">
        <Image src={`${path}`} height="100" width="100" alt="Dhillon Aviation"  />
        <div className="text-manualyellow text-center font-semibold text-xl mx-2 ">{title}</div>
        {/* <div className="text-sm ">{description}</div> */}
      </div>
    </>
  );
};

const Servicesection = () => {
  const data = [
    {
      title: "Aerial Filming",
      description:
        "We specialize in capturing stunning aerial footage for various purposes such as film production, documentaries, commercials, and promotional videos. Our skilled pilots and state-of-the-art equipment ensure high-quality and visually captivating aerial filming.",
      path: "/static/services/blogo/camera.svg",
    },

    {
      title: "Disaster Relief",
      description:
        "During times of crisis, we stand ready to provide immediate assistance through our disaster relief services. Our aviation capabilities enable us to swiftly transport essential personnel, supplies, and equipment to affected areas, supporting relief efforts effectively.",
      path: "/static/services/blogo/earth.svg",
    },
    {
      title: "Political Flying",
      description:
        " We offer political flying services tailored to the unique requirements of political campaigns and events. Whether it's campaign tours, aerial advertising, or VIP transport, our experienced team ensures smooth and efficient operations to support political activities.",
      path: "/static/services/blogo/speech.svg",
    },
    {
      title: "Aerial Survey",
      description:
        "Our specialized aerial survey services capture precise and detailed data for mapping, remote sensing, infrastructure inspection, land surveys, and environmental monitoring. Our advanced technology and experienced team deliver reliable and actionable insights for various industries.",
      path: "/static/services/blogo/research.svg",
    },
    
    {
      title: "Supply Droppings",
      description:
        "Our expertise extends to supply droppings in remote or challenging terrains. With precision and efficiency, we ensure the safe and accurate delivery of essential supplies, providing logistical support in demanding situations.",
      path: "/static/services/blogo/supply-chain.svg",
    },
    {
      title: "Maintenance",
      description:
        "We offer comprehensive maintenance services to ensure the airworthiness and safety of your aircraft. Our skilled technicians and meticulous approach guarantee top-notch maintenance and upkeep, keeping your aircraft in optimal condition.",
      path: "/static/services/blogo/maintenance.svg",
    },
    {
      title: "Joy Rides",
      description:
        "Experience the thrill of soaring through the skies with our joy ride services. Whether you're looking to celebrate a special occasion or simply want to enjoy an unforgettable adventure, our skilled pilots will take you on a mesmerizing aerial journey.",
      path: "/static/services/blogo/happiness.svg",
    },
    
    {
      title: "Aviation Consultancy",
      description:
        "Rely on our in-depth industry knowledge and experience for aviation consultancy services. Whether you need guidance on aviation regulations, strategic planning, or operational optimization, our consultants provide valuable insights and recommendations.",
      path: "/static/services/blogo/meeting.svg",
    },
    
    {
      title: "Corporate Flying",
      description:
        "Our corporate flying services cater to the specific needs of businesses. We provide reliable and convenient transportation solutions for corporate executives, facilitating efficient travel to meetings, conferences, and other corporate engagements.",
      path: "/static/services/blogo/corporate.svg",
    },
    {
      title: "Bulk Charter",
      description:
        "Our bulk charter services provide efficient and customized transportation solutions for large groups, corporate teams, and special events. With a well-maintained fleet and experienced crew, we ensure seamless logistics and flexible scheduling to meet your group travel needs. Enjoy a hassle-free travel experience with our reliable bulk charter services.",
      path: "/static/services/blogo/crowd.svg",
    },
  ];
  return (
    <section className="bg-[#0E214E] text-white items-center flex flex-col px-10 py-10 lg:py-20 md:px-16 ">
      <div className=" text-3xl font-extrabold mb-16 underline underline-offset-8 decoration-manualyellow leading-relaxed lg:text-5xl">
        OUR SERVICES
      </div>
      <div className="grid gap-4 sm:grid-cols-2 sm:grid-rows-5 md:grid-cols-3 md:grid-rows-3  xl:grid-cols-5 xl:grid-rows-2">
        {data.map((el, i) => (
          <Row
            key={i}
            title={el.title}
            description={el.description}
            path={el.path}
          />
        ))}
      </div>
      <Link href="/services">
      <div className="text-xl p-2 font-semibold hover:scale-110 hover:bg-white hover:text-black hover:rounded-xl ease-in-out duration-300  ">Know More</div>          
      </Link>
      
    </section>
  );
};

export default Servicesection;
