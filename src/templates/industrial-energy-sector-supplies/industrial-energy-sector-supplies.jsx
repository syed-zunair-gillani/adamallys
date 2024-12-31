"use client"
import React, { useState } from 'react'
import GridBanner from "@/components/hero/grid-banner"
import LeftCard from "@/components/Cards/left-card"
import { Minimize, Plus } from '../../../public/icons'
import ChooseAdamallys from "@/components/choose-adamallys/choose-adamallys"
import OtherServices from "@/components/other-services-slider/OtherServices"

const IndustrialEnergySectorSupplies = () => {
  const [faq, setFaq] = useState(null)
  const handleFaq = (id) => {
    if(id === faq){
      return setFaq(null)
    }
    setFaq(id)
  }

  return (
    <>
      <div className="mb-24"/>
      <section>
        <div>
          <h1 className="text-center text-2xl py-12 sm:text-[40px] font_calibri md:leading-[50px] md:text-[50px] lg:text-[60px] font-bold text-[#2E368F] px-4">
            Products & Services
          </h1>
        </div>
        <GridBanner active="last"/>
      </section>

      <section className="mt-14 container mx-auto px-3 flex flex-col sm:flex-row gap-5 md:gap-10">
        <div className='sm:w-[30%]'>
          <LeftCard/>
        </div>
        <div className='sm:w-[70%]'>
          <h2 className='text-3xl md:text-5xl lg:text-6xl font_calibri text-theme-main font-bold'>Industrial & Energy Sector Supplies</h2>
          <p className='text-xl my-5'>At Adamallys, we offer a comprehensive range of high-quality products essential for the industrial, oil, and gas sectors. Our extensive inventory supports efficient and safe operations across offshore and onshore projects, addressing the specific needs of these demanding industries.</p>
          <h3 className='text-2xl md:text-[40px] font_franklin text-theme-main'>Our Key Product Offerings</h3>
          <div className='mt-8 border-t'>
            {
              [1,2,3,4,5]?.map((item,idx)=>(
                <div key={idx} className='border-b '>
                  <button onClick={()=>handleFaq(idx)} className='text-xl font-bold py-6 text-theme-main font_calibri flex justify-between w-full items-center'>
                    Drilling Equipment
                    {
                      faq === idx ? <Minimize/> : <Plus/>
                    }
                  </button>
                  {
                    faq === idx &&  <p className='pb-6'>Our drilling equipment enhances the efficiency and safety of oil and gas extraction. We provide a full selection of tools, including drill bits, mud pumps, and casing accessories, designed to withstand harsh drilling environments.</p>
                  }
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <ChooseAdamallys/>

      <OtherServices/>

    </>
  )
}

export default IndustrialEnergySectorSupplies