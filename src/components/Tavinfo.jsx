import React, { useState } from "react";
import { SiTicktick } from "react-icons/si";

import logo from "../assets/logo.webp";
import dots from "../assets/dots.svg";

const Tavinfo = () => {
  const [whyUs, setWhyUs] = useState(true);
  const [services, setServices] = useState(false);
  const [stats, setStats] = useState(false);

  const handleWhyUs = () => {
    setWhyUs(true);
    setServices(false);
    setStats(false);
  };
  const handleServices = () => {
    setWhyUs(false);
    setServices(true);
    setStats(false);
  };
  const handleStats = () => {
    setWhyUs(false);
    setServices(false);
    setStats(true);
  };

  return (
    <div className=" w-[90%] h-[70vh] flex flex-col justify-between items-center">
      <div className=" w-full h-full">
        <div className="w-full h-full ">
          {whyUs && (
            <div className="relative  w-full h-full flex justify-center items-center ">
              <img src={dots} alt="" className="absolute bottom-10 right-1" />
              <img src={logo} alt="" />
              <div className="absolute py-2 flex items-center justify-center gap-2 shadow-md top-36 left-1 text-center bg-white w-[180px] text-sm  shadow-[#FFA229]">
                <SiTicktick className="text-[#FFA229]" />
                <h1>Affordable</h1>
              </div>
              <div className="absolute py-2 flex items-center justify-center gap-2 shadow-md  top-5 left-10 bg-white w-[200px] text-[15px] text-center  shadow-[#FFA229]">
                <SiTicktick className="text-[#FFA229]" />
                <h1>Compliance Ensured</h1>
              </div>
              <div className="absolute animate-bounce flex items-center justify-center gap-2 shadow-md py-2 bottom-[100px] right-2 bg-white w-[180px] text-[15px] text-center  shadow-[#FFA229]">
                <SiTicktick className="text-[#FFA229]" />
                <h1>Simplified Process</h1>
              </div>
              <div className="absolute flex items-center justify-center gap-2 shadow-md py-2 bottom-36 left-1 bg-white w-[180px] text-center text-[15px]  shadow-[#FFA229]">
                <SiTicktick className="text-[#FFA229]" />
                <h1>On-time Service</h1>
              </div>
              <div className="absolute flex items-center justify-center gap-2 shadow-md py-2 top-24 right-2 bg-white w-[180px] text-center text-[15px] shadow-[#FFA229]">
                <SiTicktick className="text-[#FFA229]" />
                <h1>Instant Response</h1>
              </div>
              <div className="absolute flex items-center justify-center gap-2 shadow-md py-2 bottom-12 bg-white w-[180px] text-center text-[15px] shadow-[#FFA229]">
                <SiTicktick className="text-[#FFA229]" />
                <h1>Industry Experts</h1>
              </div>
            </div>
          )}
          {services && (
            <div className="relative  w-full h-full flex justify-center items-center ">
              <img src={dots} alt="" className="absolute bottom-30 left-1" />
              <img src={logo} alt="" />
              <div className="absolute  shadow-md p-2 top-5 left-10 bg-white w-[200px] text-[12px] text-center  shadow-[#FFA229]">
                <h1>Company Secretarial Services</h1>
              </div>{" "}
              <div className="absolute animate-bounce  shadow-md p-2 bottom-36 left-1 bg-white w-[180px] text-center text-[12px]  shadow-[#FFA229]">
                <h1>Annual Compliance Services</h1>
              </div>
              <div className="absolute  shadow-md p-2 bottom-32 right-2 bg-white w-[180px] text-[12px] text-center  shadow-[#FFA229]">
                <h1>Virtual Office Address</h1>
              </div>
              <div className="absolute  shadow-md p-2 top-20 right-2 bg-white w-[180px] text-center text-[12px] shadow-[#FFA229]">
                <h1>VAT Registration, Preparation & Filing</h1>
              </div>
              <div className="absolute shadow-md p-2 left-2 bottom-12 bg-white w-[180px] text-center text-[12px] shadow-[#FFA229]">
                <h1>Payroll Services</h1>
              </div>
              <div className="absolute shadow-md p-2 bottom-16 right-1 bg-white w-[180px] text-center text-[12px] shadow-[#FFA229]">
                <h1>Live Online Webinars & Workshops</h1>
              </div>
              <div className="absolute  shadow-md p-2 top-36 left-1 text-center bg-white w-[180px] text-md text-[12px]  shadow-[#FFA229]">
                <h1>Company Formation</h1>
              </div>
              <div className="absolute shadow-md p-2 bottom-60 right-2 bg-white w-[180px] text-center text-[12px] shadow-[#FFA229]">
                <h1>Bookkeeping Services</h1>
              </div>
            </div>
          )}
          {stats && (
            <div className="relative  w-full h-full flex justify-center items-center ">
              <img src={dots} alt="" className="absolute" />
              <img src={logo} alt="" />
              <div className="animate-bounce absolute flex items-center justify-center gap-2 shadow-sm p-2 top-32 left-1 text-center bg-white w-[180px] text-sm  shadow-[#FFA229]">
                <h1>20,000+</h1>
                <p>Clients all over India</p>
              </div>
              <div className="absolute flex items-center justify-center gap-2 shadow-sm p-2 top-10 left-20 bg-white w-[200px] text-[15px] text-center  shadow-[#FFA229]">
                <h1>250+</h1>
                <p>Professionals Network</p>
              </div>
              <div className=" absolute flex items-center justify-center gap-2 shadow-sm p-2 bottom-20 right-2 bg-white w-[180px] text-[15px] text-center  shadow-[#FFA229]">
                <h1>500+</h1>
                <p>Businesses Incorporated Every Month</p>
              </div>
              <div className="absolute flex items-center justify-center gap-2 shadow-sm p-2 bottom-36 left-1 bg-white w-[180px] text-center text-[15px]  shadow-[#FFA229]">
                <h1>100+</h1>
                <p>Ratings</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex w-full justify-between gap-1">
        <div
          className={`basis-[100/3]  text-center w-full p-1 rounded ${
            whyUs ? "bg-[#FFA229] text-[#FFFFFF]" : "bg-[#FFD9A0] text-[#888]"
          }`}
          onClick={handleWhyUs}
        >
          <h1>Why Us</h1>
        </div>
        <div
          className={`basis-[100/3]  text-center w-full p-1 rounded ${
            services
              ? "bg-[#FFA229] text-[#FFFFFF]"
              : "bg-[#FFD9A0] text-[#888]"
          }`}
          onClick={handleServices}
        >
          <h1>Services</h1>
        </div>
        <div
          className={`basis-[100/3]  text-center w-full p-1 rounded ${
            stats ? "bg-[#FFA229] text-[#FFFFFF]" : "bg-[#FFD9A0] text-[#888]"
          }`}
          onClick={handleStats}
        >
          <h1>Stats</h1>
        </div>
      </div>
    </div>
  );
};

export default Tavinfo;
