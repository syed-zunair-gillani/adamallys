import LeadingPageBanner from '@/components/digitalization/Leadingpage'
import PageNavigation from "@/components/page-navigation/PageNavigation"
import OtherServices from '@/components/other-services-slider/OtherServices'
import ChooseAdamallys from '@/components/choose-adamallys/choose-adamallys'
import SingleWrapperTwoColumnContent from '@/components/single-wrapper-two-column-content'
import {
  wireRopesPoints,
  mooringRopesPoints,
  marineRopesAndMooringRopesBannerData,
} from '@/consts/shipSupply';

const MarineRopesAndMooringRopesTemplate = () => {
  return (
    <>
      <div className="mb-20" />
      <div>
        <h1 className="text-center text-2xl py-12 sm:text-[40px] font_calibri md:leading-[50px] md:text-[50px] lg:text-[60px] font-bold text-[#2E368F] mt-5 px-4">
          Ship Supply
        </h1>
      </div>
      <PageNavigation />
      <LeadingPageBanner
        bgImage={'/images/ship-supply/marine-ropes-bg.png'}
        {...marineRopesAndMooringRopesBannerData}
      />

      <SingleWrapperTwoColumnContent
        title={"Mooring Ropes"}
        points={mooringRopesPoints}
        images={["/images/ship-supply/mooring-ropes-one.png", "/images/ship-supply/mooring-ropes-two.png"]}
        caption={"Adamallys LLC is a leader in supplying mooring ropes, with a diverse and extensive stock to meet the operational demands of vessels across the globe. Our ropes are rigorously tested and certified, ensuring full compliance with the latest MEG4 (Mooring Equipment Guidelines). This guarantees that every rope provided is reliable, durable, and safe for mooring operations."}
      />

      <SingleWrapperTwoColumnContent
        isGradientBg
        title={"Wire Ropes"}
        points={wireRopesPoints}
        images={["/images/ship-supply/wire-ropes-one.png", "/images/ship-supply/wire-ropes-two.png"]}
        caption={"Adamallys LLC supplies a comprehensive range of wire ropes designed for heavy-duty marine operations, including mooring, towing, and lifting. Our wire ropes are manufactured to the highest standards, ensuring both durability and reliability under the toughest marine conditions."}
      />

      <ChooseAdamallys />
      <OtherServices />
    </>
  )
}

export default MarineRopesAndMooringRopesTemplate