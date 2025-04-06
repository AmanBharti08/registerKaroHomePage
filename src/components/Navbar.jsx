import React from "react";
import logo from "../assets/logo-w-n.png";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="z-50 w-[90%] p-3 bg-white flex justify-between items-center fixed rounded shadow-md shadow-[#FFA229]">
      <div className="w-[50%]">
        <img src={logo} alt="" />
      </div>
      <div className="shadow-sm shadow-gray-500/50 p-2 flex items-center justify-center cursor-pointer">
        <RxHamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;