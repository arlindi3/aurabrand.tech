import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <a href="/">
        <img src={logo} alt="AuraBrand" className="w-[200px] h-[200px]" />
      </a>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              i === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white mr-10`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {!toggle && (
          <img
            src={menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(true)}
          />
        )}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar flex-col`}
        >
          <div className="w-full flex justify-end mb-4">
            <img
              src={close}
              alt="close"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(false)}
            />
          </div>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, i) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  i === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white mr-10`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
