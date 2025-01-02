"use client"
import React from "react";
import Logo from "./logo";
import Link from "next/link";
import MegaMenu from "./MegaMenu";
import MobileHeader from "./mobile-header";
import { usePathname } from "next/navigation";

const HeaderOne = () => {
  const path = usePathname()

  return (
    <header className={`z-[300] absolute top-0 w-full ${path !== "/" && "bg-white"}`}>
      <section className="py-5 hidden md:block text-theme-main header-gradient font_calibri">
        <div className="container mx-auto px-3">
          <div className="flex items-center gap-4">
            <ul className="w-[45%] flex gap-8 items-center">
              <MegaMenu />
              <Link href="/distributors-&-stockists">Distributor & Stockists</Link>
              <Link href="#">Standards & Innovation</Link>
            </ul>
            <div className="w-[20%] md:w-[10%]">
              <Logo />
            </div>
            <div className="flex w-[45%] gap-8 justify-end">
              <ul className="flex items-center gap-8">
                <Link href="/about">Who we are</Link>
                <Link href="/news-&-events">News & Events</Link>
                <Link href="/contact">Contact</Link>
              </ul>
              <Link href={'/request-a-quote'} className="text-white hidden xl:block bg-theme-main text-left px-[19px] py-[9px]">
                <p className="text-xs">Request a Quote</p>
                <h6 className="text-[15px]">adamallys@adamallys-llc.com</h6>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <MobileHeader />
    </header>
  );
};

export default HeaderOne;
