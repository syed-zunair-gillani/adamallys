import React from "react";
import Logo from "./logo";
import Link from "next/link";
import MegaMenu from "./MegaMenu";
import MobileHeader from "./mobile-header";

const Header = () => {
  return (
    <>
      <header className="py-5 absolute w-full top-0 z-[50] hidden md:block text-theme-main header-gradient font_calibri">
        <div className="container mx-auto px-3">
          <div className="flex items-center gap-4">
            <ul className="w-[45%] flex gap-8 items-center">
              <MegaMenu />
              <Link href="#">Distributor & Stockists</Link>
              <Link href="#">Standards & Innovation</Link>
            </ul>
            <div className="w-[20%] md:w-[10%]">
              <Logo />
            </div>
            <div className="flex w-[45%] gap-8 justify-end">
              <ul className="flex items-center gap-8">
                <Link href="#">Who we are</Link>
                <Link href="#">News & Events</Link>
                <Link href="#">Contact</Link>
              </ul>
              <button className="text-white hidden xl:block bg-theme-main text-left px-[19px] py-[9px]">
                <p className="text-xs">Request a Quote</p>
                <h6 className="text-[15px]">adamallys@adamallys-llc.com</h6>
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileHeader />
    </>
  );
};

export default Header;
