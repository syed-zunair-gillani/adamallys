"use client";
import React, { useState } from "react";
import Logo from "./logo";
import Link from "next/link";
import { MenuIcon, XIcon } from "../../../public/icons";

const MobileHeader = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  return (
    <header className="header-gradient md:hidden py-4 top-0 absolute w-full z-[50]">
      <div className="px-3 flex justify-between">
        <Logo />
        <button onClick={() => setOpenMobileNav(!openMobileNav)}>
          {openMobileNav ? <XIcon /> : <MenuIcon />}
        </button>
        <div
          className={`absolute bg-white w-full right-0 transition-all duration-300 left-0 z-[-1] pt-20 pb-5 px-4 ${
            openMobileNav ? "top-0" : "-top-[1000%]"
          }`}
        >
          <ul className="flex flex-col gap-2 text-[#2E368F]">
            <Link href="#">Product & Services</Link>
            <Link href="#">Distributor & Stockists</Link>
            <Link href="#">Standards & Innovation</Link>
            <Link href="#">Who we are</Link>
            <Link href="#">News & Events</Link>
            <Link href="#">Contact</Link>
          </ul>
          <button className="text-white mt-3 bg-theme-main text-left px-[19px] py-[9px]">
            <p className="text-xs">Request a Quote</p>
            <h6 className="text-[15px]">adamallys@adamallys-llc.com</h6>
          </button>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
