"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MegaMenu from './MegaMenu'
import { usePathname } from 'next/navigation'
import useScrollPosition from "@/hooks/useScrollPosition"

const HeaderTwo = ({ data, slideFromTop }) => {
  const { Secound_Header_Nav, Logo } = data;
  const pathname = usePathname()
  const scrollPosition = useScrollPosition()

  return (
    <header className={`py-3 w-full fixed z-[200] hidden md:block transition-all duration-500 ease-linear text-theme-main font_calibri bg-white 
      ${slideFromTop ? (scrollPosition > 100 ? "top-0" : "-top-[200px]") : "top-0"}
    `}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-4">
          <div className=" md:w-[10%]">
            <figure>
              <Link href="/" className="">
                <Image src={Logo?.data?.attributes.url ? Logo?.data?.attributes.url : `/svg/logo.svg`} alt="logo" width={126} height={74} className="w-16 md:w-[80px]" />
              </Link>
            </figure>
          </div>
          <div className="flex gap-8">
            <ul className="flex items-center gap-8">
              <MegaMenu />
              {
                Secound_Header_Nav?.map((item, idx) => (
                  idx + 1 < Secound_Header_Nav.length ?
                    (
                      item?.Label?.toLowerCase() === 'who we are' ?
                        <MegaMenu
                          title='who are we'
                          links={[
                            {
                              label: 'About Us',
                              href: '/about'
                            },
                            {
                              label: 'Ports',
                              href: '/ports'
                            }
                          ]}
                        /> :
                        item?.Label?.toLowerCase() === 'standards & innovation' ?
                          <MegaMenu
                            title='Standards & Innovation'
                            links={[
                              {
                                label: 'Sustainability at Adamallys',
                                href: '/sustainability'
                              },
                              {
                                label: 'Digitalization & Technology at Adamallys',
                                href: '/digitalization'
                              },
                              {
                                label: 'Certification & Membership',
                                href: '/certification'
                              },
                            ]}
                          /> :
                          <li key={idx} className="relative group">
                            <Link
                              href={item?.Link}
                              className={`block uppercase hover:font-bold group ${pathname === item?.Link ? 'font-bold' : ''}`}
                            >
                              {item?.Label}
                            </Link>
                            <div className={`absolute bottom-[-4px] left-0 mt-2 w-[18px] h-[2px] group-hover:bg-theme-main ${pathname === item?.Link ? 'bg-theme-main' : ''}`} />
                          </li>
                    ) :
                    <Link href={item?.Link} key={idx} className="text-white uppercase hidden xl:block bg-theme-main text-left px-[19px] py-[9px]">
                      <p className="text-[15px] uppercase">{item?.Label}</p>
                    </Link>
                ))
              }
            </ul>

          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderTwo