"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const PageNavigation = () => {
    const [active, setActive] = useState(1)
  return (
    <section className='page_navigation_gradient'>
        <div className='container mx-auto px-3'>
            <ul className='flex gap-8 justify-between overflow-auto' >
                <li className={`py-4 flex flex-col justify-center items-center text-cener font-light text-nowrap ${active === 1 && "!font-bold"}`} onClick={()=>setActive(1)}>
                    {active === 1 && <div className='h-[2px] w-[45px] bg-white'/>}
                    <Link href="#" className='py-2 text-white lg:text-xl font_calibri'> Technical Marine Stores </Link>
                    {active === 1 && <div className='h-[2px] w-[45px] bg-white'/>}
                </li>
                <li className={`py-4 flex flex-col justify-center items-center text-cener font-light text-nowrap ${active === 2 && "!font-bold"}`} onClick={()=>setActive(2)}>
                    {active === 2 && <div className='h-[2px] w-[45px] bg-white'/>}
                    <Link href="#" className='py-2 text-white lg:text-xl font_calibri'> Technical Marine Stores </Link>
                    {active === 2 && <div className='h-[2px] w-[45px] bg-white'/>}
                </li>
                <li className={`py-4 flex flex-col justify-center items-center text-cener font-light text-nowrap ${active === 3 && "!font-bold"}`} onClick={()=>setActive(3)}>
                    {active === 3 && <div className='h-[2px] w-[45px] bg-white'/>}
                    <Link href="#" className='py-2 text-white lg:text-xl font_calibri'> Technical Marine Stores </Link>
                    {active === 3 && <div className='h-[2px] w-[45px] bg-white'/>}
                </li>
                <li className={`py-4 flex flex-col justify-center items-center text-cener font-light text-nowrap ${active === 4 && "!font-bold"}`} onClick={()=>setActive(4)}>
                    {active === 4 && <div className='h-[2px] w-[45px] bg-white'/>}
                    <Link href="#" className='py-2 text-white lg:text-xl font_calibri'> Technical Marine Stores </Link>
                    {active === 4 && <div className='h-[2px] w-[45px] bg-white'/>}
                </li>
                <li className={`py-4 flex flex-col justify-center items-center text-cener font-light text-nowrap ${active === 5 && "!font-bold"}`} onClick={()=>setActive(5)}>
                    {active === 5 && <div className='h-[2px] w-[45px] bg-white'/>}
                    <Link href="#" className='py-2 text-white lg:text-xl font_calibri'> Technical Marine Stores </Link>
                    {active === 5 && <div className='h-[2px] w-[45px] bg-white'/>}
                </li>
            </ul>
        </div>
    </section>
  )
}

export default PageNavigation