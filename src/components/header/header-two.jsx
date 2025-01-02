import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeaderTwo = () => {
    return (
        <header className="py-3 fixed w-full top-0 z-[200] hidden md:block text-theme-main font_calibri bg-white">
            <div className="container mx-auto px-3">
                <div className="flex justify-between items-center gap-4">
                    <div className=" md:w-[10%]">
                        <figure className={`flex justify-center items-center`}>
                            <Link href="/" className="">
                                <Image src="/svg/logo.svg" alt="logo" width={126} height={74} className="w-16 md:w-[80px]" />
                            </Link>
                        </figure>
                    </div>
                    <div className="flex gap-8">
                        <ul className="flex items-center gap-8">
                            <Link href="#">Product & Services</Link>
                            <Link href="/distributors-&-stockists">Distributor & Stockists</Link>
                            <Link href="#">Standard & Inovation</Link>
                            <Link href="/news-&-events">News & Events</Link>
                            <Link href="/about">Who we are</Link>
                            <Link href="/contact">Contact</Link>
                        </ul>
                        <Link href={'/request-a-quote'} className="text-white hidden xl:block bg-theme-main text-left px-[19px] py-[9px]">
                            <p className="text-[15px]">Request a Quote</p>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderTwo