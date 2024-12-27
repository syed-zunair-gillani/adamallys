"use client"
import React from 'react'
import Image from 'next/image'
import Slider from "react-slick";
import { otherServicesData } from '@/consts/shipSupply';
import { CircularArrowRight } from "../../../public/icons";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  arrows: false,
  slidesToScroll: 1,
};

const OtherServices = () => {
  const slider = React.useRef(null);

  return (
    <section className='certification-gradient py-12 md:py-20 mt-10 md:mt-20'>
      <div className='container mx-auto px-3 flex gap-10 xl:gap-24 items-center'>
        <div className='w-[40%] hidden lg:block'>
          <figure>
            <Image src="/images/ship-on-port.png" alt="" width={530} className='w-full h-full object-cover' height={670} />
          </figure>
        </div>
        <div className='w-full lg:w-[60%]'>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font_calibri text-white font-bold'>Other Services</h2>
          <div className='w-full h-[1px] bg-gray-500 my-10' />
          <div className='flex flex-col md:flex-row gap-8'>
            <div className='w-full md:w-[80%]'>
              <Slider ref={slider} {...settings}>
                {[1, 2, 3]?.map((item) => (
                  <div key={item}>
                    {otherServicesData?.map((item, index) => (
                      <div key={index}>
                        <div className={`max-w-[560px] ${index + 1 === otherServicesData?.length ? "" : "mb-[44px]"}`}>
                          <h3 className='text-2xl md:text-[40px] text-white font_franklin'>{item?.title}</h3>
                          <div className='h-[6px] bg-white w-[50px] md:w-[98px] my-5' />
                          <p className='text-lg font_calibri text-white font-light'>{item?.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </Slider>
            </div>
            <button onClick={() => slider?.current?.slickNext()} className='!w-full flex justify-end md:items-center md:w-[20%]'>
              <CircularArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OtherServices