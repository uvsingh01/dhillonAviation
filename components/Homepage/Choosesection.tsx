import React from "react";
import Image from "next/image";
const Choosesection = () => {
  return (
    <section className="flex flex-col 2xl:flex-row shadow-xl">
      <div className=" text-sm md:text-lg lg:text-xl p-10 lg:p-20  2xl:w-1/2 flex flex-col content-center bg-[url('/static/cloudbg.jpg')] bg-fixed">
        <h3 className="text-manualgrey text-xl leading-loose underline underline-offset-8 decoration-manuallightgrey md:text-xl lg:text-3xl font-extrabold tracking-[0.25em] mb-5">
          WHY CHOOSE US
        </h3>
        <h1 className="text-3xl slg:text-4xl xl:text-5xl text-manualyellow font-extrabold mb-5 lg:mb-10">
          Strong Sense of Commitment
        </h1>
        <div>
          For an extensive range of charter services,
          client-centered approach, innovative strategies, high-quality
          solutions, scalability, proven expertise, and a track record of
          success.By choosing us, you can be confident that you are partnering with an organization that upholds the highest level of accountability in all aspects of our business.
        </div>
      </div>
      <div className="relative sm:max-sm:h-96 md:max-lg:h-[32rem] xl:max-xl:h-[32rem] 2xl:w-1/2 text-white">
        <Image
          src="/static/editphoto.jpg"
          height="100"
          width="100"
          alt="d"
          className="h-[32rem] 2xl:h-full w-full "
        />

        <div className="absolute top-0 inset-x-0 bottom-0 bg-black bg-opacity-90 text-sm md:text-lg lg:text-xl 2xl:text-md sm:max-slg:py-10 sm:max-slg:pl-10 sm:max-slg:pr-5 slg:p-20 2xl:pl-20">
          <div className="flex flex-col sm:max-lg:gap-3 gap-4 h-full justify-center slg:max-2xl:items-center 2xl:items-start  ">
          <div className="">
            <span className="text-red-500 ">Experience:</span> 15+
            years of industry expertise.
          </div>
          <div className="">
            <span className="text-red-500  ">Quality:</span>{" "}
            Commitment to delivering high-quality services.
          </div>
          <div className="">
            <span className="text-red-500  ">Expert Team:</span>{" "}
            Skilled professionals dedicated to your success.
          </div>
          <div className="">
            <span className="text-red-500  ">Custom Solutions:</span>{" "}
            Tailored services to meet your unique needs.
          </div>
          <div className="">
            <span className="text-red-500  ">Reliable:</span>{" "}
            Consistent and dependable service delivery.
          </div>

          <div className="">
            <span className="text-red-500  ">
              Client Satisfaction:
            </span>{" "}
            A track record of satisfied customers.
          </div>
          <div className="">
            <span className="text-red-500  ">Trusted Partner:</span>{" "}
            Building long-term relationships based on trust.
          </div>
          <div className="">

            <span className="text-red-500  ">Timely Delivery:</span>{" "}
            Prompt and efficient project completion.
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choosesection;
