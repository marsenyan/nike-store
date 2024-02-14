import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

export const Navbar: React.FC = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className="w-full h-24 flex flex-col justify-center items-center lg:bg-transparent bg-white lg:absolute fixed z-20">
      <div className="container mx-auto lg:px-6">
        <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between xl:items-baseline items-center text-[#12222E]">
          <div className="flex flex-col gap-y-4">
            <span
              className="flex items-center gap-x-2 font-bold text-2xl cursor-pointer"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              <img src="/nike-logo.svg" alt="" className="" />
            </span>
          </div>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            <a
              href="#home"
              className="font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline"
            >
              Home
            </a>
            <a
              href="#about-us"
              className="font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline"
            >
              About Us
            </a>
            <a
              href="#products"
              className="font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline"
            >
              Products
            </a>
            <a
              href="#contact-us"
              className="font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline"
            >
              Contact Us
            </a>
          </ul>

          {dropdown ? (
            <div
              className="lg:hidden text-[22px] cursor-pointer text-black "
              onClick={showDropdown}
            >
              <MdClose />
            </div>
          ) : (
            <div
              className="lg:hidden text-[22px] cursor-pointer text-black "
              onClick={showDropdown}
            >
              <HiMenuAlt3 />
            </div>
          )}
        </div>

        {dropdown ? (
          <div
            className="lg:hidden w-full h-[100vh] fixed top-24 bg-white transition ease-in-out duration-100 "
            onClick={showDropdown}
          >
            <div className="w-full h-[320px] flex flex-col items-baseline pt-8 gap-4 text-[#12222E]">
              <ul className="text-center p-0 flex flex-col justify-center w-full gap-y-8">
                <a
                  href="#home"
                  className="font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline"
                >
                  Home
                </a>
                <a
                  href="#about-us"
                  className="font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline"
                >
                  About Us
                </a>
                <a
                  href="#products"
                  className="font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline"
                >
                  Products
                </a>
                <a
                  href="#contact-us"
                  className="font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline"
                >
                  Contact Us
                </a>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

