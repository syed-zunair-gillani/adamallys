"use client"
import React from "react";
import Link from "next/link";
import MegaMenu from "./MegaMenu";
import MobileHeader from "./mobile-header";
import { usePathname } from "next/navigation";
import Image from "next/image";

const HeaderOne = ({data}) => {
  const {Button, NavLinks, Logo} = data
  const path = usePathname()

  return (
    <header className={`z-[300] absolute top-0 w-full ${path !== "/" && "bg-white"}`}>
      <section className="py-5 hidden md:block text-theme-main header-gradient font_calibri">
        <div className="container mx-auto px-3">
          <div className="flex items-center gap-4">
            <ul className="w-[45%] flex gap-8 items-center">
              {/* <MegaMenu />
              <Link href="/distributors-&-stockists">Distributor & Stockists</Link> */}
              {
                NavLinks?.slice(0,3).map((item,idx)=>(
                  <Link href={item?.Link} key={idx}>{item?.Label}</Link>
                ))
              }
            </ul>
            <div className="w-[20%] md:w-[10%]">
            <figure className={`flex justify-center items-center`}>
              <Link href="/" className="">
                <Image src={Logo?.data?.attributes.url ? Logo?.data?.attributes.url : `/svg/logo.svg`} alt="logo" width={126} height={74} className="w-16 md:w-[126px]"/>
              </Link>
            </figure>
            </div>
            <div className="flex w-[45%] gap-8 justify-end">
              <ul className="flex items-center gap-8">
              {
                NavLinks?.slice(3,6).map((item,idx)=>(
                  <Link href={item?.Link} key={idx}>{item?.Label}</Link>
                ))
              }
              </ul>
              <Link href={Button?.Link || "#"} className="text-white hidden xl:block bg-theme-main text-left px-[19px] py-[9px]">
                <p className="text-xs">Request a Quote</p>
                <h6 className="text-[15px]">{Button?.Email}</h6>
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
