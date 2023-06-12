import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footersection = () => {
  return (
    <footer className="text-white bg-black p-10 lg:p-20">
      <div className="flex gap-6 lg:gap-16 flex-col slg:max-xl:justify-center 2xl:justify-between flex-wrap md:flex-row  ">
        <div className="flex flex-col w-1/3 gap-4">
          <Link href="/" className="min-w-max">
            <Image
              className=" h-11 w-52 lg:h-14 lg:w-72 xl:h-14 xl:w-72"
              height={50}
              width={280}
              src={"/static/nav/brandfinalgapcroppedwhite.svg"}
              alt=""
            />
          </Link>
          <h1 className=" hidden md:block text-md  ">
            Choose Dhillon Aviation for unmatched expertise, exceptional
            service, and a seamless flying experience. Elevate your travel with
            us and discover a world of convenience, comfort, and reliability.{" "}
          </h1>
        </div>
        {/* <div className="flex gap-16 flex-wrap"> */}
          <div className="flex flex-col  gap-4">
            <h1 className="text-manuallightgrey text-xl  md:text-xl lg:text-3xl  mb-5 leading-loose underline underline-offset-8 decoration-white">
              Contact Info
            </h1>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clip-rule="evenodd"
                />
              </svg>

              <h1 className="ml-3 text-md  md:text-lg lg:text-xl">Phone</h1>
            </div>
            <div className=" text-manualyellow text-md  md:text-lg lg:text-xl">
              0124-4019203{" "}
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>

              <h1 className="ml-3 text-md  md:text-lg lg:text-xl">Email</h1>
            </div>
            <div className="text-manualyellow text-md  md:text-lg lg:text-xl">
              info@dhillonaviation.com
            </div>
          </div>
          <div className="flex flex-col gap-4  ">
            <h1 className="text-manuallightgrey text-xl  md:text-xl lg:text-3xl  mb-5 leading-loose underline underline-offset-8 decoration-white">
              Quick Links
            </h1>
            <Link href="/" className="text-md  md:text-lg lg:text-xl hover:text-manualyellow  " aria-current="page">
              Contact Us
            </Link>
            <Link href="#" className="text-md  md:text-lg lg:text-xl hover:text-manualyellow " aria-current="page">
            Appreciations
            </Link>
            <Link href="#" className="text-md  md:text-lg lg:text-xl hover:text-manualyellow " aria-current="page">
            Terms & Conditions
            </Link>
            <Link href="#" className="text-md  md:text-lg lg:text-xl hover:text-manualyellow " aria-current="page">
              Privacy Policy
            </Link>
            <Link href="#" className="text-md  md:text-lg lg:text-xl hover:text-manualyellow " aria-current="page">
              Disclaimer  
            </Link>
            <Link href="#" className="text-md  md:text-lg lg:text-xl hover:text-manualyellow " aria-current="page">
              
            </Link>
            <Link href="#" className="text-md  md:text-lg lg:text-xl hover:text-manualyellow " aria-current="page">
              
            </Link>
          </div>
          <div className="flex flex-col  gap-4">
            <h1 className="text-manuallightgrey text-xl  md:text-xl lg:text-3xl  mb-5 leading-loose underline underline-offset-8 decoration-white">
              Follow us
            </h1>
            <div className="flex gap-4">
              <Link href="/">
                <Image
                  className="h-10 w-10"
                  height={50}
                  width={280}
                  src={"/static/insta.png"}
                  alt=""
                />
              </Link>
              <Link href="/">
                <Image
                  className="h-10 w-10"
                  height={50}
                  width={280}
                  src={"/static/facebook.png"}
                  alt=""
                />
              </Link>
              <Link href="/">
                <Image
                  className="h-10 w-10"
                  height={50}
                  width={280}
                  src={"/static/linkedin.png"}
                  alt=""
                />
              </Link>
              <Link href="/">
                <Image
                  className="h-10 w-10"
                  height={50}
                  width={280}
                  src={"/static/twitter.png"}
                  alt=""
                />
              </Link>
            </div>
          </div>
        {/* </div> */}
      </div>
    </footer>
  );
};

export default Footersection;
