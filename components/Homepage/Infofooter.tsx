import Image from "next/image";
import Link from "next/link";
import React from "react";

const Infofooter = () => {
  return (
    <div className="bg-black border-solid border-t border-manuallightgrey flex flex-col md:flex-row justify-around p-4 gap-4  text-white text-sm">
      <div className="flex items-center">
        © 2023 Dhillon Aviation Pvt. Ltd. All rights reserved
      </div>
      {/* <div>
      Crafted with finesse by
        <Link href="https://www.linkedin.com/in/uvsingh01/" className="text-red-500"> Yuvraj Singh </Link>
        & 
        <Link href="/"className="text-red-500"> Vaibhav Sharma </Link>
      </div> */}
    </div>
  );
};

export default Infofooter;
