import LeadingPageBanner from '@/components/digitalization/Leadingpage'
import PageNavigation from "@/components/page-navigation/PageNavigation"
import OtherServices from '@/components/other-services-slider/OtherServices'
import ChooseAdamallys from '@/components/choose-adamallys/choose-adamallys'
import SingleWrapperTwoColumnContent from '@/components/single-wrapper-two-column-content'
import {
  provisionsPoints,
  bondedStoresPoints,
  provisionsAndBondedStoresBannerData,
} from '@/consts/shipSupply';

const ProvisionsAndBondedStoresTemplate = () => {
  return (
    <>
      <div className="mb-20" />
      <div>
        <h1 className="text-center text-2xl py-8 sm:text-[40px] font_calibri md:leading-[50px] md:text-[50px] lg:text-[60px] font-bold text-[#2E368F] mt-5 px-4">
          Ship Supply
        </h1>
      </div>
      <PageNavigation />
      <LeadingPageBanner
        {...provisionsAndBondedStoresBannerData}
      />

      <SingleWrapperTwoColumnContent
        title={"Provisions"}
        points={provisionsPoints}
        images={["/images/ship-supply/province-image.png"]}
        caption={"We supply a complete range of provisions to meet the crew's dietary needs and preferences, ensuring quality and freshness in all categories. Some examples include:"}
      />

      <SingleWrapperTwoColumnContent
        isGradientBg
        title={"Bonded Stores"}
        points={bondedStoresPoints}
        images={["/images/ship-supply/bonded-stores-image.png"]}
        caption={"Bonded stores are essential for crew morale and relaxation, providing non-dutiable goods like alcohol, tobacco, and personal care items. We stock a wide range of bonded goods, including:"}
      />

      <ChooseAdamallys />
      <OtherServices />
    </>
  )
}

export default ProvisionsAndBondedStoresTemplate