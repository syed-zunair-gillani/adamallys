"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import MegaMenu from "./MegaMenu";
import MobileHeader from "./mobile-header";
import { usePathname } from "next/navigation";

const HeaderOne = ({ data }) => {
  const { Button, NavLinks, Logo } = data
  const path = usePathname()

  return (
    <header className={`z-[300] absolute top-0 w-full ${path !== "/" && "bg-white"}`}>
      <section className="py-5 hidden md:block text-theme-main header-gradient font_calibri">
        <div className="container mx-auto px-3">
          <div className="flex justify-between items-center gap-4">
            <ul className="flex gap-9 items-center">
              <MegaMenu />
              {
                NavLinks?.slice(0, 2).map((item, idx) => (
                  <Link className="uppercase" href={item?.Link} key={idx}>{item?.Label}</Link>
                ))
              }
            </ul>
            <div className="">
              <figure className={`flex justify-center items-center`}>
                <Link href="/" className="">
                  <Image
                    alt="logo"
                    width={126}
                    height={74}
                    className="w-16 md:w-[126px]"
                    src={Logo?.data?.attributes.url ?
                      Logo?.data?.attributes.url :
                      `/svg/logo.svg`}
                  />
                </Link>
              </figure>
            </div>
            <div className="flex gap-[23px] justify-end">
              <ul className="flex items-center gap-[27px]">
                {
                  NavLinks?.slice(2).map((item, idx) => (
                    <Link className="uppercase" href={item?.Link} key={idx}>{item?.Label}</Link>
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
      <MobileHeader NavLinks={NavLinks}/>
    </header>
  );
};

export default HeaderOne;
