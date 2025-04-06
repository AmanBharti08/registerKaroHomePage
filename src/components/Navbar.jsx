import React, { useState } from "react";
import logo from "../assets/logo-w-n.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleBurger = () => {
    setOpen(!open);
  };

  return (
    <div className="z-50 w-[90%] p-3 bg-white flex justify-between items-center fixed rounded shadow-md shadow-[#FFA229]">
      <div className="w-[50%]">
        <img src={logo} alt="" />
      </div>
      <div className="shadow-sm shadow-gray-500/50 p-2 flex items-center justify-center cursor-pointer relative">
        <RxHamburgerMenu onClick={handleBurger} />
        {open && (
          <div className="absolute top-14 bg-white shadow-md p-3 right-0 w-56">
            <ul className="flex flex-col gap-4 font-semibold">
              <li>Startup</li>
              <li>Blog</li>
              <li>Contact Us</li>
              <li>About Us</li>
              <li className="bg-[#FFA229] p-1 flex justify-center rounded-lg">
                <FaPhoneAlt />
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
