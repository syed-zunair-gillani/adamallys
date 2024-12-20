import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const VerticleIcon = () => {
    return (
        <ul className='fixed right-2 z-[1000] flex flex-col gap-2 bottom-4'>
            {
                list?.map((item, idx) => (
                    <li key={idx}>
                        <Link href="#">
                            <button className='w-12 h-12 bg-white rounded-full flex flex-col border border-[#EDEDED] justify-center items-center'>
                                <Image src={item?.icons} alt="" width={20} height={20} />
                            </button>
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default VerticleIcon



const list = [
    {
        icons: "/svg/mail.svg",
        link: "#"
    },
    {
        icons: "/svg/call.svg",
        link: "#"
    },
    {
        icons: "/svg/linkedin.svg",
        link: "#"
    },
    {
        icons: "/svg/Isolation_Mode.svg",
        link: "#"
    },
    {
        icons: "/svg/s.svg",
        link: "#"
    },
    {
        icons: "/svg/a.svg",
        link: "#"
    },
]