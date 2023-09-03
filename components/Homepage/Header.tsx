"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState,useEffect } from "react";

const Header = () => {
    const [navbar, setNavbar] = useState(false);
  const [show, setshow] = useState(false);

  const transitionNavBar=()=>{
    if(window.scrollY>70){
      setshow(true);
    }else{
      setshow(false);
    }
  }
   
  useEffect(()=>{
    window.addEventListener('scroll',transitionNavBar);
    
    return ()=> window.removeEventListener('scroll',transitionNavBar);
  },[]);
  return (
    <nav className={`flex z-50 top-0 inset-x-0 pb-4 pt-2 px-3 fixed max-h-24 ease-in-out duration-500 ${show?"bg-white shadow-lg bg-opacity-95 ":"bg:tranparent "}`}>
      <div className="flex w-full items-end justify-between mx-3">
        <div className="flex justify-center">
          <Link href="/">
            <Image
              height={70}
              width={120}
              src={"/static/nav/oldlogoresized.png"}
              className="h-10 w-12 md:h-11 md:w-16 lg:h-14 lg:w-20 xl:h-14 xl:w-20"
              alt={"Dhillon Aviation"}
            />
          </Link>
          <Link href="/">
          <Image
            className=" ml-3 h-10 w-48 md:h-11 md:w-72 lg:h-14 lg:w-72 xl:h-14 xl:w-72"
            height={50}
            width={280}
            src={`${show?"/static/nav/brandfinalgapcropped.svg":"/static/nav/brandfinalgapcroppedwhite.svg"}`}
            alt=""
          />
          </Link>
          
        </div>
        <button
          onClick={() => setNavbar(true)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center text-sm text-black rounded-lg lg:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          {/* <span className="sr-only">Open main menu</span> */}
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="#3E497A"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full text-lg mt-3 pr-4 lg:block lg:w-auto lg:align lg:text-lg xl:text-xl">
          <ul className="font-semibold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link
                href="#"
                className={`block py-2 pl-3 pr-4 ${show?"text-black":"text-white"} rounded md:bg-transparent md:p-0  md:text-manualyellow`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={`block py-2 pl-3 pr-4 ${show?"text-black":"text-white"}  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-manualyellow md:p-0`}
              >
                Fleet
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={`block py-2 pl-3 pr-4 ${show?"text-black":"text-white"}  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-manualyellow md:p-0`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={`block py-2 pl-3 pr-4 ${show?"text-black":"text-white"}  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-manualyellow md:p-0`}
              >
                Clients
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`block py-2 pl-3 pr-4 ${show?"text-black":"text-white"}  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-manualyellow md:p-0`}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <ul
        className={` font-semibold fixed flex lg:hidden flex-col gap-6 top-0 bottom-0 right-0 w-80 text-center bg-white ease-in-out duration-300 ${
          navbar ? "translate-x-0 shadow-[-2px_0px_20px_1px_#aaaaaa]" : "translate-x-full"
        }`}
      >
        <li className="flex justify-center items-center ml-4">
          <Link href="/">
            <Image
              height={70}
              width={120}
              src={"/static/nav/brandfinalgapcropped.svg"}
              className="h-20 w-60"
              alt={"Dhillon Aviation"}
            />
          </Link>
          <svg
            onClick={()=>setNavbar(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill=""
            viewBox="0 0 24 24"
            strokeWidth={4}
            stroke="RGB(107, 114, 128)"
            className="w-6 h-6 ml-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </li>
        <li className="">
          <Link
            href="#"
            className="block py-2 pl-3 pr-4  text-white bg-manualgrey rounded lg:bg-transparent lg:text-manualgrey lg:p-0  lg:dark:text-blue-500"
            aria-current="page"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="block py-2 pl-3 pr-4 text-manualyellow rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-manualyellow lg:p-0  lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
          >
            Fleet
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="block py-2 pl-3 pr-4 text-manualyellow rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-manualyellow lg:p-0  lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="block py-2 pl-3 pr-4 text-manualyellow rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-manualyellow lg:p-0  lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
          >
            Clients
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="block py-2 pl-3 pr-4 text-manualyellow rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-manualyellow lg:p-0  lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
