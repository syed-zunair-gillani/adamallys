import Image from 'next/image'
import React from 'react'

const OneColumnContent = ({leftTitle}) => {
    return (
        <section className={`container mx-auto px-3 grid mb-4`}>
            <div className=''>
                <figure className=''>
                    <Image src="/images/container.jpg" alt='' className='w-full h-[588px] object-cover' width={700} height={588} />
                </figure>
            </div>
            <div className={`p-8 xl:p-14 leading-10 ship_supply_content ship_supply_content_one_column text-white blue_gradient3 ${leftTitle ? "md:flex gap-8" : "flex-col gap-2"}`}>
                <h2 className={`${ leftTitle && "md:max-w-[250px]"}`}>Marine Valves & Ship Side Valves</h2>
                <div>
                    <p>We provide the full range of engine stores, essential for maintaining the mechanical systems of a ship. This includes:</p>
                    <ul>
                        <li>Bearings, Gaskets & Seals: A variety of high-quality bearings, gland packing, jointing sheets, and seals for leak-proof connections and secure, durable component assembly.</li>
                        <li>Bearings, Gaskets & Seals: A variety of high-quality bearings, gland packing, jointing sheets, and seals for leak-proof connections and secure, durable component assembly.</li>
                        <li>Bearings, Gaskets & Seals: A variety of high-quality bearings, gland packing, jointing sheets, and seals for leak-proof connections and secure, durable component assembly.</li>
                    </ul>
                    <button className='flex bg-white py-[5px] mt-3 px-[24px] text-[#2E368F] font_calibri rounded-full'>
                        View Products
                    </button>
                </div>
            </div>
        </section>
    )
}

export default OneColumnContent