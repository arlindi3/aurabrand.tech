import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  const getRoutePath = (navId) => {
    switch (navId) {
      case "home":
        return "/";
      case "business":
        return "/sherbimet";
      case "services":
        return "/cmimet";
      case "clients":
        return "/klientet";
      case "contact":
        return "/kontakti";
      default:
        return "/";
    }
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link to="/">
        <img src={logo} alt="AuraBrand" className="w-[200px] h-[200px]" />
      </Link>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              i === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white mr-10`}
          >
            <Link
              to={getRoutePath(nav.id)}
              className={`transition-colors ${
                location.pathname === getRoutePath(nav.id)
                  ? "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent"
                  : ""
              } hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-700 hover:bg-clip-text hover:text-transparent`}
            >
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, i) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  i === navLinks.length - 1 ? "mb-0" : "mb-4"
                } text-white`}
              >
                <Link
                  to={getRoutePath(nav.id)}
                  onClick={() => setToggle(false)}
                  className={`transition-colors ${
                    location.pathname === getRoutePath(nav.id)
                      ? "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent"
                      : ""
                  } hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-700 hover:bg-clip-text hover:text-transparent`}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
