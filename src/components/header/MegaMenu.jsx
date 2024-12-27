'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { shipSupplyPaginationData } from '@/consts/shipSupply';

import styles from './style.module.css';

const MegaMenu = () => {
  const pathname = usePathname();
  const isActive = shipSupplyPaginationData?.find(({ link }) => link === pathname);

  return (
    <div className="relative">
      <div className="relative product-services">
        <Link href="#" className={styles.product_services}>Product & Services</Link>
        <div className={`${styles.mega_menu} w-[125px] h-12 absolute top-1`}>
          <nav
            style={{ boxShadow: '0px 2px 12.5px 0px rgba(46, 54, 143, 0.09)' }}
            className={`absolute flex top-[36px] bg-white text-theme-main`}
          >
            <ul className="min-w-[310px] flex flex-col gap-7 py-[31px] px-[35px]">
              <li className="relative group">
                <div className="flex items-center justify-between">
                  <Link
                    href="#"
                    className={`whitespace-nowrap ${isActive ? 'font-bold' : ''} hover:font-bold`}
                  >
                    Ship Supply
                  </Link>
                  <Image src={'/svg/arrow_forward_link.svg'} alt='arrow' width={13} height={13} />
                </div>
                {isActive && <div className='mt-2 w-[18px] h-[2px] bg-theme-main' />}
              </li>

              <li>
                <a href="#" className="whitespace-nowrap hover:font-bold">Marine Logistics & Warehousing</a>
              </li>

              <li>
                <a href="#" className="whitespace-nowrap hover:font-bold">Industrial & Energy Sector Supplies</a>
              </li>
            </ul>
            <div className='flex product-services-menu'>
              <div className='w-[2px] bg-[rgba(0,0,0,0.075)]' />
              <div
                className="w-full min-w-[505px] flex  w-full bg-white text-theme-main group-hover:flex">
                <ul className="grid grid-cols-2 gap-7 py-[31px] px-[35px]">
                  {shipSupplyPaginationData?.map((page, index) => (
                    <li
                      key={page?.link}
                      className={`font-light ${page?.link?.includes(pathname) && "!font-bold"}`}
                    >
                      <Link href={page?.link} className="whitespace-nowrap text-theme-main font_calibri">
                        {page?.label}
                      </Link>
                      {page?.link?.includes(pathname) && <div className="mt-2 w-[18px] h-[2px] bg-theme-main" />}
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