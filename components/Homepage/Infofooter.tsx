import Image from "next/image";
import Link from "next/link";
import React from "react";

const Infofooter = () => {
  return (
    <div className="bg-black border-solid border-t-2 border-manualgrey flex flex-col lg:flex-row justify-center lg:items-center p-4 gap-4  text-white text-sm">
      <div className="flex items-center">
        <Link href="/">
          <Image
            className="h-6 w-6 mr-2"
            height={50}
            width={280}
            src={"/static/copyright.png"}
            alt=""
          />
        </Link>
        2023 Dhillon Aviation Pvt. Ltd.  All rights reserved
      </div>
      <div>
      <Link href="/">
          Terms & Conditions
        </Link>
      </div>
      <div>
      <Link href="/">
          Privacy Policy
          </Link>
      </div>
      <div>
      <Link href="/">
          Disclaimer
          </Link>
      </div>
    </div>
  );
};

export default Infofooter;
