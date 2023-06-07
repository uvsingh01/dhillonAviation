//@ts-nocheck
"use client";

import React,{useEffect} from "react";

const Formsection = () => {

  return (
    <section className="bg-manualblack p-10 lg:p-20 ">
      <h1 className='text-white text-center text-3xl slg:text-4xl xl:text-5xl leading-loose underline underline-offset-8 decoration-manuallightgrey font-extrabold  mb-5 lg:mb-10'> Contact Us for Further Inquiries</h1>
      <h3 className='text-manuallightgrey text-center text-xl  font-extrabold  mb-14'>We are at Your Service to Support Your Business. Feel free to reach out to us by filling below form</h3>
      <div>
        <form className='flex flex-col items-center'>
            <input type="text" id="fname" name="fname" placeholder="Name" className="h-12 lg:h-16 w-4/5 2xl:w-[50rem] lg:text-2xl pl-5 rounded-lg"></input><br></br>
            <input type="text" id="email" name="email" placeholder="Email Address" className="h-12 lg:h-16 w-4/5 2xl:w-[50rem] lg:text-2xl pl-5 rounded-lg"></input><br></br>
            <input type="text" id="subject" name="subject" placeholder="Subject" className="h-12  lg:h-16 w-4/5 2xl:w-[50rem] lg:text-2xl pl-5 rounded-lg"></input><br></br>
            <input type="text" id="message" name="message" placeholder="Message" className="h-32 lg:h-80 w-4/5 2xl:w-[50rem] lg:text-2xl pl-5 rounded-lg "></input><br></br>
            <button className="px-8 py-4 text-white border-2 border-white hover:bg-white hover:text-black rounded-full lg:text-xl hover:scale-105 ease-in-out duration-300">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Formsection
