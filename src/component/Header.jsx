import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import logo from "../assets/images/logo.png"


function Header() {

    const links = [
        {
            id:0,
            name:"Home",
        },
        {
            id:1,
            name:"About",
        },
        {
            id:2,
            name:"Properties",
        },
        {
            id:3,
            name:"Services",
        },
        {
            id:4,
            name:"Testimorials",
        },
        {
            id:5,
            name:"Contact",
        },

    ]
  return (
    <>
      <div className="fixed z-40 w-full bg-[#F3F3F3] font-sans shadow-md grid lg:grid-cols-[1fr_2fr_1fr] grid-cols-1 lg:px-[80px]">
        <div className="lg:h-[100px]">
          <div className="lg:h-[80px] lg:w-[150px] h-[60px] w-[100%] flex justify-center items-center">
            <img className="h-full" src={logo} alt="logo" />
          </div>
        </div>
        <ul className="uppercase flex items-center justify-evenly flex-wrap lg:font-medium lg:text-[16px] text-[12px] mt-2">
          {links.map((link) => {
            return (
              <li className="link cursor-pointer" key={link.id}>
                {link.name}
              </li>
            );
          })}
        </ul>
        <div className="flex items-center justify-center font-semibold lg:text-xl text-md">
          <FaPhoneAlt className="text-red-600" />
          <p className="px-[15px]">888-908-9102</p>
          <FaRegUserCircle className="text-red-600 lg:text-3xl" />
        </div>
      </div>
    </>
  );
}

export default Header;
