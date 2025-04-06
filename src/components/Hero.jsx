import React from "react";
import Navbar from "./Navbar";
import Tavinfo from "./Tavinfo";

const Hero = () => {
  return (
    <div className="flex items-center pt-5 flex-col bg-[#F5F5F5]">
      <Navbar />
      <div className="mt-20 px-5 text-center flex flex-col gap-4">
        <h1 className="font-bold text-xl">
          We take care of all your business compliance needs.
        </h1>
        <p className=" text-[16px] font-light">
          An online business compliance platform that helps entrepreneurs and
          other individuals with various, registrations, tax filings, and other
          legal matters.
        </p>
      </div>
      <Tavinfo />
    </div>
  );
};

export default Hero;
