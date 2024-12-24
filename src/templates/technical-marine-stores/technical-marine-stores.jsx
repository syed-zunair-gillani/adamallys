import React from 'react'
import LeadingpageBanner from '@/components/digitalization/Leadingpage'
import PageNavigation from "@/components/page-navigation/PageNavigation"
import Tags from "@/components/tags/tags"
import TwoColumnContent from "@/components/two-column-content/two-column-content"
import ThreeColumnContent from "@/components/three-column-content/three-column-content"
import OneColumnContent from '@/components/one-column-content/two-column-content'
import ChooseAdamallys from '@/components/choose-adamallys/choose-adamallys'
import OtherServices from '@/components/other-services-slider/OtherServices'

const TechnicalMarineStoresTemplate = () => {
    return (
        <>
            <div className="mb-20" />
            <div>
                <h1 className="text-center text-2xl py-8 sm:text-[40px] font_calibri md:leading-[50px] md:text-[50px] lg:text-[60px] font-bold text-[#2E368F] mt-5 px-4">
                    Ship Supply
                </h1>
            </div>
            <PageNavigation />
            <LeadingpageBanner 
                title= "Technical Marine Stores"
                content=""
            />
            <Tags/>
            <TwoColumnContent/>
            <TwoColumnContent invert bgGray/>
            <ThreeColumnContent/>
            <OneColumnContent leftTitle/>
            <TwoColumnContent invert bgGray/>
            <TwoColumnContent bgGray/>
            <ThreeColumnContent/>
            <TwoColumnContent />
            <ThreeColumnContent/>
            <OneColumnContent/>

            <ChooseAdamallys/>
            <OtherServices/>           

        </>
    )
}

export default TechnicalMarineStoresTemplate