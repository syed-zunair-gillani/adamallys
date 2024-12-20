import Image from 'next/image'
import React from 'react'

const Cards = ({ dark }) => {
  return (
    <section className='grid grid-cols-2 mt-60'>
      <div>
        <Image src="/images/image.png" alt='' width={720} height={720} className='w-full -mt-52' />
      </div>
      <div>
        <div className={`h-[720px] flex justify-center flex-col items-center  ${dark ? "bg-black text-white" : "bg-[#F5F6F8] text-[#2E368F]"}`} >
          <div className='max-w-[435px] mx-auto'>
            <h3 className='text-[40px] mb-4'>Sustainability</h3>
            <p className='font-light'>At Adamallys LLC, we’re committed to advancing sustainability within the ship supply sector. As the industry moves toward IMO 2050 targets, we’re evolving our offerings, operations, and facilities to minimize our environmental impact and help our clients achieve their green goals. Through eco-friendly products and responsible practices, we’re dedicated to supporting a cleaner, more sustainable future for the maritime industry. Together, we can drive meaningful change at sea.</p>
            <button className={`border flex items-center gap-10 mt-10 py-[14px] px-[18px] ${dark ? "border-white" : "border-[#2E368F]"}`}>
              Read More
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                <mask id="mask0_42_1540" maskUnits="userSpaceOnUse" x="0" y="0" width="17" height="17">
                  <rect width="16.1863" height="16.1863" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_42_1540)">
                  <path d="M5.39553 14.2305L4.82227 13.6572L10.3863 8.09313L4.82227 2.52908L5.39553 1.95581L11.5329 8.09313L5.39553 14.2305Z" fill={`${dark ? "white" : "#2E368F"}`} />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cards