import React from "react";
import { assets } from "../assets/assets.js";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closerMenu = () => {
    sideMenuRef.current.style.transform = " translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <nav
        className={`flex items-center justify-between w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 z-50 ${
          isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg" : ""
        }`}
      >
        <a href="#top">
          <img src={assets.logo} alt="" className="w-28 cursor-pointer mr-4" />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "bg-white shadow-sm bg-opacity-50"
          } `}
        >
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">My work</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button>
            <img src={assets.moon_icon} alt="" className="w-6" />
          </button>

          <a
            href="#contact"
            className="hidden md:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 hover:shadow-black duration-300"
          >
            Contact <img src={assets.arrow_icon} alt="" className="w-3" />
          </a>

          <button className="block md:hidden ml-3 " onClick={openMenu}>
            <img src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* menu-mobile */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64  z-50 h-screen bg-white   transition  duration-500"
        >
          <div className="absolute  right-6 top-6" onClick={closerMenu}>
            <img
              src={assets.close_black}
              alt=""
              className="cursor-pointer w-5"
            />
          </div>

          <li onClick={closerMenu}>
            <a href="#top">Home</a>
          </li>
          <li onClick={closerMenu}>
            <a href="#about">About me</a>
          </li>
          <li onClick={closerMenu}>
            <a href="#services">Services</a>
          </li>
          <li onClick={closerMenu}>
            <a href="#work">My work</a>
          </li>
          <li onClick={closerMenu}>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
