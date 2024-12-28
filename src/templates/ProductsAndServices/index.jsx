import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import GridBanner from '@/components/hero/grid-banner'
import Milestones from '@/components/milestones/Milestones'
import ChooseAdamallys from '@/components/choose-adamallys/choose-adamallys'
import OtherServices from "@/components/other-services-slider/OtherServices"

const ProductsAndServicesTemplate = () => {
  return (
    <>
      <div className="mb-24" />
      <section>
        <div>
          <h1 className="text-center text-2xl pb-8 md:pt-8 sm:text-[40px] font_calibri md:leading-[50px] md:text-[50px] lg:text-[60px] font-bold text-[#2E368F] px-4">
            Products & Services
          </h1>
        </div>
        <GridBanner active="first" />
      </section>

      <section className="mt-14 container mx-auto px-3 flex flex-col md:flex-row gap-5 md:gap-10 mb-10 md:mb-20">
        <div className='md:w-[30%]'>
          <h2 className='text-3xl md:text-5xl lg:text-6xl font_calibri text-theme-main font-bold'>Ship Supply</h2>
          <div className='ship_supply_content font_calibri mt-4'>
            <p>Adamallys LLC is one of the largest and most trusted ship chandlers in the UAE, with over 50 years of expertise in providing premium marine and industrial supplies. As the leading ship chandler in Dubai, we offer unparalleled access to top-tier brands and a vast inventory, making us the preferred supplier for ship owners and managers throughout the region.</p>
            <p>Our comprehensive ship supply solutions are tailored to meet the demands of all vessel types—from tankers, container ships, LNG carriers to bulk carriers—ensuring fast, reliable service that minimizes downtime and optimizes operational efficiency. Specializing in large-scale contracts and drydock support, we guarantee that essential supplies are delivered quickly and precisely, supporting vessels to operate at their best.</p>
            <p>We uphold the highest global standards of quality, safety, and environmental responsibility, with each item carefully selected to meet rigorous marine-grade standards for onboard safety. With an exceptional price-to-quality ratio, Adamallys LLC provides cost-effective ship supply solutions without compromising on quality, establishing us as the go-to ship chandler in the UAE.</p>
            <p>Choose Adamallys LLC for all your ship supply needs and experience the reliability, quality, and value that make us a leader in the region.</p>
          </div>
        </div>
        <div className='md:w-[70%]'>
          <div className='flex flex-col gap-10'>
            {
              [1, 2, 3, 1, 2, 3]?.map((item, idx) => (
                <div key={idx} className='grid grid-cols-2 gap-10'>
                  <figure>
                    <Image src="/images/container.jpg" alt='' className='h-[214px] w-full object-cover' width={400} height={214} />
                  </figure>
                  <div className='flex flex-col justify-between'>
                    <div>
                      <h3 className='text-theme-main text-4xl mb-1 font_franklin'>Technical marine stores</h3>
                      <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly </p>
                    </div>
                    <Link href="#" className='text-theme-main flex gap-[29px]'>
                      Read More
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <mask id="mask0_550_4737" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                          <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_550_4737)">
                          <path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" fill="#2E368F" />
                        </g>
                      </svg>

                    </Link>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <Milestones />

      <ChooseAdamallys />

      <OtherServices />
    </>
  )
}

export default ProductsAndServicesTemplate