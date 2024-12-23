import React from 'react'
import ArrowDownIcon from '../../../public/svg/ArrowDownIcon'
import Image from 'next/image'

const AboutHeader = () => {
  return (
    <div
      className='min-h-[400px] flex flex-col lg:flex-row items-end justify-between gap-[30px]'
    >
      <div className='basis-[40%] flex items-center justify-center flex-col'>
        <h2 className='font_calibri capitalize text-[50px] leading-[56px] font-bold text-theme-main'>Leading Ship Chandler & Marine Stores Supply Specialist.</h2>
        <p className='font_calibri text-lg mt-[36px] mb-[47px]'>Established in 1972, Adamallys LLC is a leading ship chandler in the UAE and the broader Middle East, specializing in comprehensive technical ship supplies and provisions. </p>
        <ArrowDownIcon />
      </div>
      <div className='basis-[60%]'>
        <Image src='/images/about/about-header-image.png' alt='about-header-image' width={750} height={450} />
      </div>
    </div>
  )
}

export default AboutHeader