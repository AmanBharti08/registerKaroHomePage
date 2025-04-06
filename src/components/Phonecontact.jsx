import React from "react";
import mobile from "../assets/mobile.webp";

const Phonecontact = () => {
  return (
    <div className=" mt-4 flex justify-center">
      <div className="w-[90%]  flex justify-between relative">
        <div className="animate-pulse ">
          <img src={mobile} alt="" className="aspect-9/16" />
        </div>
        <div className=" absolute top-28 text-center">
          <h1>
            Our Client Services Team is always happy to talk to you about what
            is best for your needs. Contact our team to find out if we are the
            right fit for you.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Phonecontact;
