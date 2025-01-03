import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeaderTwo = ({ data }) => {
    console.log("🚀 ~ HeaderTwo ~ data:", data)
    const { Secound_Header_Nav, Logo } = data
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
                            {
                                Secound_Header_Nav?.map((item, idx) => (
                                    idx + 1 < Secound_Header_Nav.length ? <Link href={item?.Link} key={idx}>{item?.Label}</Link> :
                                        <Link href={item?.Link} key={idx} className="text-white capitalize hidden xl:block bg-theme-main text-left px-[19px] py-[9px]">
                                            <p className="text-[15px]">{item?.Label}</p>
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