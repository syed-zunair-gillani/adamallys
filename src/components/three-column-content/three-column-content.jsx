import Image from 'next/image'
import React from 'react'

const ThreeColumnContent = () => {
    return (
        <section className={`container mx-auto px-3 grid md:grid-cols-2 lg:grid-cols-3 mb-4 gap-4`}>
            <div className=''>
                <figure className='h-full'>
                    <Image src="/images/container.jpg" alt='' className='w-full h-full object-cover' width={700} height={800} />
                </figure>
            </div>
            <div className={`p-8 xl:p-14 ship_supply_content text-white bg-theme-main`}>
                <h2>Engine Stores</h2>
                <p>We provide the full range of engine stores, essential for maintaining the mechanical systems of a ship. This includes:</p>
                <ul>
                    <li>Bearings, Gaskets & Seals: A variety of high-quality bearings, gland packing, jointing sheets, and seals for leak-proof connections and secure, durable component assembly.</li>
                    <li>Bearings, Gaskets & Seals: A variety of high-quality bearings, gland packing, jointing sheets, and seals for leak-proof connections and secure, durable component assembly.</li>
                    <li>Bearings, Gaskets & Seals: A variety of high-quality bearings, gland packing, jointing sheets, and seals for leak-proof connections and secure, durable component assembly.</li>
                </ul>
                <button className='flex bg-white py-[13px] px-[24px] text-[#2E368F] font_calibri rounded-full'>
                    View Products
                </button>
            </div>
            <div className='hidden lg:block'>
                <figure className='h-full'>
                    <Image src="/images/container.jpg" alt='' className='w-full h-full object-cover' width={700} height={800} />
                </figure>
            </div>
        </section>
    )
}

export default ThreeColumnContent