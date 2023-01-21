import React from "react";
import Facebook from "../../src/assets/icon-facebook.svg";
import Instagram from "../../src/assets/icon-instagram.svg";
import PInterest from "../../src/assets/icon-pinterest.svg";
import Twitter from "../../src/assets/icon-twitter.svg";
import Youtube from "../../src/assets/icon-youtube.svg";
import LogoWhite from "../../src/assets/logo.svg";

export const Footer = () => {
  return (
    <footer className="bg-darkBlue1">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>
          <div>
            <img src={LogoWhite} className="h-8" alt="" />
          </div>
          <div className="flex justify-center space-x-4">
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <img src={Facebook} alt="" className="h-8" />
            </a>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <img src={Youtube} alt="" className="h-8" />
            </a>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <img src={Twitter} alt="" className="h-8" />
            </a>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <img src={PInterest} alt="" className="h-8" />
            </a>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <img src={Instagram} alt="" className="h-8" />
            </a>
          </div>
        </div>
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
              }}
              className="hover:text-red0"
            >
              Home
            </a>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
              }}
              className="hover:text-red0"
            >
              Pricing
            </a>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
              }}
              className="hover:text-red0"
            >
              Products
            </a>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
              }}
              className="hover:text-red0"
            >
              About
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
              }}
              className="hover:text-red0"
            >
              Careers
            </a>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
              }}
              className="hover:text-red0"
            >
              Community
            </a>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
              }}
              className="hover:text-red0"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button
                className="px-6 py-2 text-white rounded-full bg-red0 hover:bg-red1 focus:outline-none"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};
