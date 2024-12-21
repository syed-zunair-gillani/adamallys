import Image from 'next/image'
import React from 'react'

const GridBanner = ({ active }) => {
    return (
        <main className='flex flex-col md:flex-row font_calibri'>
            <div className={`relative ${active === "first" ? "w-full md:w-[40%]" : "w-[30%] hidden md:block"} `}>
                <Image src="/images/container.jpg" alt='' width={600} height={600} className='w-full h-[465px] object-cover' />
                <div className='absolute black_gradient flex flex-col text-white justify-end inset-0'>
                    <h6 className={`px-8 text-xl font-bold pb-10 ${active === "first" ? "max-w-[415px] text-3xl md:text-[40px] leading-[42px]" : ""} `}>
                        Ship Supply
                        {active === "first" && <div className='w-[101px] h-[2px] bg-white mt-3'/>}
                    </h6>
                </div>
            </div>
            <div className={`relative ${active === "center" ? "w-full md:w-[40%]" : "w-[30%] hidden md:block"} `}>
                <Image src="/images/container.jpg" alt='' width={600} height={600} className='w-full h-[465px] object-cover' />
                <div className='absolute black_gradient flex flex-col text-white justify-end inset-0'>
                    <h6 className={`px-8 text-xl font-bold pb-10 ${active === "center" ? "max-w-[415px] text-3xl md:text-[40px] leading-[42px]" : ""} `}>
                        Marine Logistics & Warehousing
                        {active === "center" && <div className='w-[101px] h-[2px] bg-white mt-3'/>}
                    </h6>
                </div>
            </div>
            <div className={`relative ${active === "last" ? "w-full md:w-[40%]" : "w-[30%] hidden md:block"} `}>
                <Image src="/images/container.jpg" alt='' width={600} height={600} className='w-full h-[465px] object-cover' />
                <div className='absolute black_gradient flex flex-col text-white justify-end inset-0'>
                    <h6 className={`px-8 text-xl font-bold pb-10 ${active === "last" ? "max-w-[415px] text-3xl md:text-[40px] leading-[42px]" : ""} `}>
                        Industrial & Energy Sector Supplies
                        {active === "last" && <div className='w-[101px] h-[2px] bg-white mt-3'/>}
                    </h6>
                </div>
                
            </div>
        </main>
    )
}

export default GridBanner