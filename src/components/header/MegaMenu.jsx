'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { shipSupplyPaginationData } from '@/consts/shipSupply';

import styles from './style.module.css';

const MegaMenu = () => {
  const pathname = usePathname();
  const isShipSupplyPage = pathname === "/products-&-services"
  const isIndustrialPage = pathname === "/industrial-&-energy-sector-supplies"
  const isMarineLogisticsPage = pathname === "/marine-logistics-&-warehousing"

  return (
    <div className="relative">
      <div className="relative product-services">
        <Link href="/products-&-services" className={styles.product_services}>Product & Services</Link>
        <div className={`${styles.mega_menu} w-[125px] h-12 absolute top-1`}>
          <nav
            style={{ boxShadow: '0px 2px 12.5px 0px rgba(46, 54, 143, 0.09)' }}
            className={`absolute flex top-[36px] bg-white text-theme-main`}
          >
            <ul className="min-w-[310px] flex flex-col gap-7 py-[31px] px-[35px]">
              <li className="relative group">
                <div className="flex items-center justify-between">
                  <Link
                    href="/products-&-services"
                    className={`whitespace-nowrap ${isShipSupplyPage ? 'font-bold' : ''} hover:font-bold`}
                  >
                    Ship Supply
                  </Link>
                  <Image src={'/svg/arrow_forward_link.svg'} alt='arrow' width={13} height={13} />
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
            </ul>
            <div className='flex product-services-menu'>
              <div className='w-[2px] bg-[rgba(0,0,0,0.075)]' />
              <div
                className="w-full min-w-[505px] flex  w-full bg-white text-theme-main group-hover:flex">
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
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;