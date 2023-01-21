import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { GetStartBtn } from "./GetStartBtn";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  function openMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="container relative mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src={Logo} alt="" />
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-darkBluePale">
            Pricing
          </a>
          <a href="/" className="hover:text-darkBluePale">
            Product
          </a>
          <a href="/" className="hover:text-darkBluePale">
            About Us
          </a>
          <a href="/" className="hover:text-darkBluePale">
            Careers
          </a>
          <a href="/" className="hover:text-darkBluePale">
            Community
          </a>
        </div>

        <div className="hidden md:flex space-x-6">
          <GetStartBtn></GetStartBtn>
        </div>
        <div className="pt-1">
          <button
            onClick={openMenu}
            id="menu"
            className={`${
              isOpen ? "open" : ""
            } btn block hamburger md:hidden focus:outline-none`}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </div>
      <div className="md:hidden">
        <div
          id="menu"
          className={`${
            isOpen ? "" : "hidden"
          } absolute flex flex-col items-center self-end md:hidden py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
        >
          <a href="" className="hover:text-darkBluePale">
            Pricing
          </a>
          <a href="" className="hover:text-darkBluePale">
            Product
          </a>
          <a href="" className="hover:text-darkBluePale">
            About Us
          </a>
          <a href="" className="hover:text-darkBluePale">
            Careers
          </a>
          <a href="" className="hover:text-darkBluePale">
            Community
          </a>
        </div>
      </div>
    </nav>
  );
};
