import Image from 'next/image'
import React from 'react'

const TwoColumnContent = ({invert, bgGray}) => {
    return (
        <section className={`container mx-auto px-3 flex flex-col md:flex-row mb-4 gap-4 ${invert && "md:!flex-row-reverse"}`}>
            <div className='md:w-[50%]'>
                <figure className=''>
                    <Image src="/images/container.jpg" alt='' className='w-full object-cover' width={700} height={800} />
                </figure>
            </div>
            <div className={` md:w-[50%] p-8 lg:p-14 ship_supply_content ${bgGray ? "bg-[#F1F3F5] text-theme-main" : "blue_gradient2 text-white"}`}>
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
        </section>
    )
}

export default TwoColumnContent