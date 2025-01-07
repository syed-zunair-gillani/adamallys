import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MegaMenu from './MegaMenu'
import { usePathname } from 'next/navigation'

const HeaderTwo = ({ data }) => {
  const { Secound_Header_Nav, Logo } = data;
  const pathname = usePathname()

  return (
    <header className="py-3 fixed w-full top-0 z-[200] hidden md:block text-theme-main font_calibri bg-white">
      <div className="container mx-auto px-3">
        <div className="flex justify-between items-center gap-4">
          <div className=" md:w-[10%]">
            <figure className={`flex justify-center items-center`}>
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
                    item?.Label?.toLowerCase() === 'who we are' ?
                      <MegaMenu
                        title='who are we'
                        links={[
                          {
                            label: 'Ports',
                            href: '/ports'
                          },
                          {
                            label: 'Who are we',
                            href: '/about'
                          },
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
                        <li key={idx}>
                          <Link
                            href={item?.Link}
                            className={`uppercase ${pathname === item?.Link ? 'font-bold' : ''}`}
                          >{item?.Label}</Link>
                          <div className={`mt-2 w-[18px] h-[2px] ${pathname === item?.Link ? 'bg-theme-main' : ''}`} />
                        </li> :
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