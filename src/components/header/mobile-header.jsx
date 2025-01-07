"use client";
import React, { useState } from "react";
import Logo from "./logo";
import Link from "next/link";
import { MenuIcon, XIcon } from "../../../public/icons";

const MobileHeader = ({NavLinks}) => {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  return (
    <header className="header-gradient md:hidden top-0 absolute w-full z-[50]">
      <div className="flex justify-between">
        <div className="border-b-[1px] pl-[18px] item-center border-[#969cc0] flex justify-between w-full">
          <Logo />
          <div className="!bg-[#2E368F] w-[68px] h-[65px] flex justify-center items-center" onClick={() => setOpenMobileNav(!openMobileNav)}>
            {openMobileNav ? <XIcon /> : <MenuIcon />}
          </div>
        </div>
        <div
          className={`absolute bg-white w-full right-0 transition-all duration-300 left-0 z-[-1] pt-20 pb-5 px-4 ${
            openMobileNav ? "top-0" : "-top-[1000%]"
          }`}
        >
          <ul className="flex flex-col gap-2 text-[#2E368F]">
            {
              NavLinks?.map((item,idx)=>(
                <Link  href={item?.Link} key={idx}>{item?.Label}</Link>
              ))
            }
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
