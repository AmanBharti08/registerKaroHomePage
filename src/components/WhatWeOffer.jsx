import React from "react";
import bg from "../assets/bg-blue.jpg";
import { FaArrowCircleRight } from "react-icons/fa";

const WhatWeOffer = () => {
  return (
    <div className="mt-5  relative bg-slate-800 flex justify-center items-center">
      <div className="text-black z-20 flex gap-1 absolute w-[95%]">
        <div className="bg-white rounded-lg text-center items-center p-2 w-1/4 flex flex-col gap-2 hover:animate-bounce">
          <p className="text-[12px] h-[50%] border-b-2">
            Small business & Startup Accounts
          </p>
          <p className="font-semibold text-xs">Number of employees 0 - 10</p>
          <button>
            <FaArrowCircleRight className="text-[#FFA229]" />
          </button>
        </div>
        <div className="bg-white rounded-lg text-center items-center p-2 w-1/4 flex flex-col gap-2">
          <p className="text-[12px] h-[50%] border-b-2">
            Growing Business Package
          </p>
          <p className="font-semibold text-xs">Number of employees 11 - 50</p>
          <button>
            <FaArrowCircleRight className="text-[#FFA229]" />
          </button>
        </div>
        <div className="bg-white rounded-lg text-center items-center p-2  w-1/4 flex flex-col gap-2">
          <p className="text-[12px] h-[50%] border-b-2">
            Scale-Up Company Offer
          </p>
          <p className="font-semibold text-xs">Number of employees 50 +</p>
          <button>
            <FaArrowCircleRight className="text-[#FFA229]" />
          </button>
        </div>
        <div className="bg-white rounded-lg text-center items-center p-2 w-1/4 flex flex-col gap-2">
          <p className="text-[12px] h-[50%] border-b-2">
            Setting up a business
          </p>
          <p className="font-semibold text-xs">Company Formation Services</p>
          <button className="">
            <FaArrowCircleRight className="text-[#FFA229]" />
          </button>
        </div>
      </div>
      <img src={bg} alt="" className="" />
    </div>
  );
};

export default WhatWeOffer;
