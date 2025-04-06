import React from "react";
import mobile from "../assets/mobile.webp";
import bg from "../assets/why_bg.svg";

import pic1 from "../assets/1.png";
import adobe from "../assets/adobe.png";
import amazon from "../assets/amazon.png";
import amd from "../assets/amd.png";
import dell from "../assets/dell.png";
import google from "../assets/google.png";
import hp from "../assets/hp.png";
import huawei from "../assets/huawei.png";
import lee from "../assets/lee.png";
import slack from "../assets/slack.png";

const Phonecontact = () => {
  return (
    <div className=" mt-4 flex justify-center">
      <div className="w-[95%]  flex justify-between relative">
        <div className="animate-pulse -z-50">
          <img src={mobile} alt="" className="aspect-9/16" />
        </div>
        <div className="animate-bounce shadow-2xl absolute w-[50%] top-24  text-left bg-[#F5F5F5] p-3 rounded-lg z-50">
          <h1 className="text-xs">
            Our Client Services Team is always happy to talk to you about what
            is best for your needs. Contact our team to find out if we are the
            right fit for you.
          </h1>
        </div>
        <div className=" w-[40%] absolute right-0 top-9 flex flex-wrap gap-5">
          <div className="w-[50px] h-[50px] bg-white flex justify-center items-center z-50 rounded-md p-1" >
            <img src={pic1} alt="" className="w-20" />
          </div>{" "}
          <div className="w-[50px] h-[50px] bg-white flex justify-center items-center z-50 rounded-md p-1">
            <img src={adobe} alt="" className="w-20" />
          </div>{" "}
          <div className="w-[50px] h-[50px] bg-white flex justify-center items-center z-50 rounded-md p-1">
            <img src={amazon} alt="" className="w-20" />
          </div>{" "}
          <div className="w-[50px] h-[50px] bg-white flex justify-center items-center z-50 rounded-md p-1">
            <img src={amd} alt="" className="w-20" />
          </div>{" "}
          <div className="w-[50px] h-[50px] bg-white flex justify-center items-center z-50 rounded-md p-1">
            <img src={dell} alt="" className="w-20" />
          </div>{" "}
          <div className="w-[50px] h-[50px] bg-white flex justify-center items-center z-50 rounded-md p-1">
            <img src={google} alt="" className="w-20" />
          </div>{" "}
          <div className="w-[50px] h-[50px] bg-white flex justify-center items-center z-50 rounded-md p-1">
            <img src={huawei} alt="" className="w-20" />
          </div>
          <div className="w-[50px] h-[50px] bg-white flex justify-center items-center z-50 rounded-md p-1">
            <img src={hp} alt="" className="w-14" />
          </div>
          <div className="w-[50px] h-[50px] bg-white flex justify-center items-center z-50 rounded-md p-1">
            <img src={lee} alt="" className="w-20" />
          </div>
          <div className="w-[50px] h-[50px] bg-white flex justify-center items-center z-50 rounded-md p-1">
            <img src={slack} alt="" className="w-20" />
          </div>
        </div>
        <div className="bg-red-400 absolute right-0 w-[80%] -z-40">
          <h1>
            <img src={bg} alt="" className="absolute" />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Phonecontact;
