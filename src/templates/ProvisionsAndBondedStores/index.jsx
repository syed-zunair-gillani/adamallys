import LeadingPageBanner from '@/components/digitalization/Leadingpage'
import PageNavigation from "@/components/page-navigation/PageNavigation"
import OtherServices from '@/components/other-services-slider/OtherServices'
import ChooseAdamallys from '@/components/choose-adamallys/choose-adamallys'
import SingleWrapperTwoColumnContent from '@/components/single-wrapper-two-column-content'

const ProvisionsAndBondedStoresTemplate = (props) => {
  const { banner_background_image, banner_info, banner_title, Cards, } = props;

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
        {...{
          title: banner_title,
          content: banner_info,
          bgImage: banner_background_image?.data?.attributes?.url
        }}
      />

      <SingleWrapperTwoColumnContent
        points={Cards?.[0]?.List}
        title={Cards?.[0]?.title}
        caption={Cards?.[0]?.info}
        images={[Cards?.[0]?.Image?.data?.attributes?.url]}
      />

      <SingleWrapperTwoColumnContent
        isGradientBg
        points={Cards?.[1]?.List}
        title={Cards?.[1]?.title}
        caption={Cards?.[1]?.info}
        images={[Cards?.[1]?.Image?.data?.attributes?.url]}
      />

      <ChooseAdamallys />
      <OtherServices />
    </>
  )
}

export default ProvisionsAndBondedStoresTemplate