"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { shipSupplyPaginationData } from '@/consts/shipSupply';

const PageNavigation = () => {
  const pathname = usePathname();

  return (
    <section className='page_navigation_gradient'>
      <div className='container mx-auto px-3'>
        <ul className='flex gap-8 justify-between overflow-auto' >
          {shipSupplyPaginationData?.map((page) =>
            <li key={page?.link} className={`py-4 flex flex-col justify-center items-center text-cener font-light text-nowrap ${page?.link?.includes(pathname) && "!font-bold"}`}>
              {page?.link?.includes(pathname) && <div className='h-[2px] w-[45px] bg-white' />}
              <Link href={page?.link} className='py-2 text-white lg:text-xl font_calibri'>
                {page?.label}
              </Link>
              {page?.link?.includes(pathname) && <div className='h-[2px] w-[45px] bg-white' />}
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}

export default PageNavigation