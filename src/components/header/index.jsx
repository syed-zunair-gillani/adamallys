"use client"
import React from 'react'
import HeaderOne from './header-one'
import HeaderTwo from './header-two'
import { usePathname } from 'next/navigation'


const Header = () => {
    const path = usePathname()
    return (
        path === "/" ? <HeaderOne /> : <>
            <HeaderOne />
            <HeaderTwo />
        </>
    )
}

export default Header