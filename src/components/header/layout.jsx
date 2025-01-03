"use client"
import React from 'react'
import HeaderOne from './header-one'
import HeaderTwo from './header-two'
import { usePathname } from 'next/navigation'

const HeaderLayout = ({data}) => {
    const path = usePathname()
    return (
        path === "/" ? <HeaderOne data={data}/> : <>
            <HeaderOne data={data}/>
            <HeaderTwo data={data}/>
        </>
    )
}

export default HeaderLayout