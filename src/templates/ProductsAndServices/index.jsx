'use client'
import React, { useState } from 'react'
import GridBanner from '@/components/hero/grid-banner'

import ShipSupply from './ShipSupply'
import Warehousing from './Warehousing'
import IndustrialEnergy from './IndustrialEnergy'

const tabs = ['Ship Supply', 'Marine Logistics & Warehousing', 'Industrial & Energy Sector Supplies']
const ProductsAndServicesTemplate = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const tabsRender = {
    'Ship Supply': <ShipSupply />,
    'Marine Logistics & Warehousing': <Warehousing />,
    'Industrial & Energy Sector Supplies': <IndustrialEnergy />
  }

  return (
    <>
      <div className="mb-24" />
      <section>
        <div>
          <h1 className="text-center text-2xl pb-8 md:pt-8 sm:text-[40px] font_calibri md:leading-[50px] md:text-[50px] lg:text-[60px] font-bold text-[#2E368F] px-4">
            Products & Services
          </h1>
        </div>
        <GridBanner tabs={tabs} active={activeTab} setActiveTab={setActiveTab} />
      </section>
      {tabsRender[activeTab]}
    </>
  )
}

export default ProductsAndServicesTemplate