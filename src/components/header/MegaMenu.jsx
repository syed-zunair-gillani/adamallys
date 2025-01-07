'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { shipSupplyPaginationData } from '@/consts/shipSupply';

import styles from './style.module.css';

const MegaMenu = ({ title, links }) => {
  const pathname = usePathname();
  const [isShipSupplyHovered, setIsShipSupplyHovered] = useState(false);
  const isShipSupplyPage = pathname === "/products-&-services"
  const isIndustrialPage = pathname === "/industrial-&-energy-sector-supplies"
  const isMarineLogisticsPage = pathname === "/marine-logistics-&-warehousing"

  return (
    <div className="relative">
      <div className="relative product-services">
        <Link href={title ? "" : "/products-&-services"} className={styles.product_services}>{title || 'Product & Services'}</Link>
        <div className={`${styles.mega_menu} w-[125px] h-12 absolute top-1`}>
          <nav
            style={{ zIndex: 999, boxShadow: '0px 2px 12.5px 0px rgba(46, 54, 143, 0.09)' }}
            className={`absolute flex top-[36px] bg-white text-theme-main z-[999]`}
          >
            <ul className="relative min-w-[310px] flex flex-col gap-7 py-[31px] px-[35px]">
              {links?.length ?
                links?.map((linkItem, index) =>
                  <li key={index} className="relative group">
                    <Link
                      href={linkItem?.href}
                      className={`whitespace-nowrap ${pathname === linkItem?.href ? 'font-bold' : ''} hover:font-bold`}
                    >
                      {linkItem?.label}
                    </Link>
                    {pathname === linkItem?.href && <div className='mt-2 w-[18px] h-[2px] bg-theme-main' />}
                  </li>
                ) :
                <>
                  <li
                    onMouseEnter={() => setIsShipSupplyHovered(true)}
                    onMouseLeave={() => setIsShipSupplyHovered(false)}
                    className='top-[31px] w-full h-[25px] absolute' />
                  <li
                    onMouseEnter={() => setIsShipSupplyHovered(true)}
                    onMouseLeave={() => setIsShipSupplyHovered(false)}
                    className="relative"
                  >
                    <div className="flex items-center justify-between">
                      <Link
                        href="/products-&-services"
                        className={`whitespace-nowrap ${(isShipSupplyPage || isShipSupplyHovered) ? 'font-bold' : ''} hover:font-bold`}
                      >
                        Ship Supply
                      </Link>
                      {
                        isShipSupplyHovered &&
                        <Image src={'/svg/arrow_forward_link.svg'} alt='arrow' width={13} height={13} />
                      }
                    </div>
                    {isShipSupplyPage && <div className='mt-2 w-[18px] h-[2px] bg-theme-main' />}
                  </li>

                  <li>
                    <Link
                      href="/marine-logistics-&-warehousing"
                      className={`whitespace-nowrap ${isMarineLogisticsPage ? 'font-bold' : ''} hover:font-bold`}
                    >Marine Logistics & Warehousing</Link>
                    {isMarineLogisticsPage && <div className='mt-2 w-[18px] h-[2px] bg-theme-main' />}
                  </li>

                  <li>
                    <Link
                      href="/industrial-&-energy-sector-supplies"
                      className={`whitespace-nowrap ${isIndustrialPage ? 'font-bold' : ''} hover:font-bold`}
                    >Industrial & Energy Sector Supplies</Link>
                    {isIndustrialPage && <div className='mt-2 w-[18px] h-[2px] bg-theme-main' />}
                  </li>
                </>
              }
            </ul>
            {!title &&
              <div
                onMouseEnter={() => setIsShipSupplyHovered(true)}
                onMouseLeave={() => setIsShipSupplyHovered(false)}
                className={`${isShipSupplyHovered ? 'flex' : 'hidden'}`}
              >
                <div className='w-[2px] bg-[rgba(0,0,0,0.075)]' />
                <div
                  className={`w-full min-w-[505px] flex  w-full bg-white text-theme-main`}>
                  <ul className="grid grid-cols-2 gap-7 py-[31px] px-[35px]">
                    {shipSupplyPaginationData?.map((page) => (
                      <li
                        key={page?.link}
                        className={`font-light ${page?.link === pathname && "!font-bold"}`}
                      >
                        <Link href={page?.link} className="whitespace-nowrap text-theme-main font_calibri">
                          {page?.label}
                        </Link>
                        {page?.link === pathname && <div className="mt-2 w-[18px] h-[2px] bg-theme-main" />}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            }
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;