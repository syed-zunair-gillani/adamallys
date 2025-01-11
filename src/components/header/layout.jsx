"use client"
import React from 'react'
import HeaderOne from './header-one'
import HeaderTwo from './header-two'
import { usePathname } from 'next/navigation'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger);

const HeaderLayout = ({ data }) => {
    const path = usePathname()
    return (
        <div className='pb-4'>
            {
                path === "/" ?
                    <>
                        <HeaderOne data={data} />
                        <HeaderTwo data={data} slideFromTop />
                    </>
                    :
                    <>
                        <HeaderOne data={data} />
                        <HeaderTwo data={data} />
                    </>
            }
        </div>

    )
}

export default HeaderLayout