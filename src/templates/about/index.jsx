import React from 'react'
import History from './History'
import Expertise from './Expertise'
import PresentDay from './PresentDay'
import AboutHeader from './AboutHeader'
import AboutInfoCard from './AboutInfoCard'
import CorporateInformation from './CorporateInformation'

const AboutTemplate = () => {
  return (
    <main
      className='mt-[6rem]'
      style={{ overflowX: 'hidden' }}
    >
      <div className='px-[24px] md:px[42px] lg:px-[74px] py-[30px] md:py-[60px]'
        style={{
          background: 'linear-gradient(to bottom, #ffffff , #F4F5F7 )'
        }}
      >
        <AboutHeader />
        <AboutInfoCard />
        <CorporateInformation />
      </div>
      <div className="px-[24px] md:px[42px] lg:px-[74px] ">
        <History />
      </div>
      <PresentDay />
      <div className="px-[24px] md:px[42px] lg:px-[74px]  py-[30px] md:py-[60px]">
        <Expertise />
      </div>
    </main>
  )
}

export default AboutTemplate