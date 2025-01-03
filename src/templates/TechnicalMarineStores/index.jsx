import Tags from "@/components/tags/tags"
import GridContent from '@/components/grid-content'
import LeadingPageBanner from '@/components/digitalization/Leadingpage'
import PageNavigation from "@/components/page-navigation/PageNavigation"
import OtherServices from '@/components/other-services-slider/OtherServices'
import ChooseAdamallys from '@/components/choose-adamallys/choose-adamallys'
import OneColumnContent from '@/components/one-column-content/two-column-content'
import TwoColumnContent from "@/components/two-column-content/two-column-content"
import ThreeColumnContent from "@/components/three-column-content/three-column-content"

const TechnicalMarineStoresTemplate = (props) => {
  const { banner_background_image, banner_info, banner_title, Tags: tags, Card } = props;
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
      <Tags tags={tags?.map(({ list }) => list)} />
      <TwoColumnContent
        title={Card?.[0]?.title}
        caption={Card?.[0]?.info}
        image={Card?.[0]?.image?.data?.attributes?.url}
        points={Card?.[0]?.lists?.map(({ list }) => list)}
      />
      <TwoColumnContent
        invert
        bgGray
        title={Card?.[1]?.title}
        caption={Card?.[1]?.info}
        image={Card?.[1]?.image?.data?.attributes?.url}
        points={Card?.[1]?.lists?.map(({ list }) => list)}
      />
      <ThreeColumnContent
        title={Card?.[2]?.title}
        caption={Card?.[2]?.info}
        image1={Card?.[2]?.image?.data?.attributes?.url}
        points={Card?.[2]?.lists?.map(({ list }) => list)}
        image2={Card?.[2]?.Secound_Image?.data?.attributes?.url || "/images/ship-supply/cabin-stores-two.png"}
      />
      <TwoColumnContent
        bgGray
        isCustomBasis
        bgColor={"#E0E2FB"}
        title={Card?.[3]?.title}
        caption={Card?.[3]?.info}
        image={Card?.[3]?.image?.data?.attributes?.url}
        points={Card?.[3]?.lists?.map(({ list }) => list)}
      />
      <OneColumnContent
        leftTitle
        title={Card?.[4]?.title}
        caption={Card?.[4]?.info}
        image={Card?.[4]?.image?.data?.attributes?.url}
        points={Card?.[4]?.lists?.map(({ list }) => list)}
      />
      <TwoColumnContent
        bgGray
        title={Card?.[5]?.title}
        caption={Card?.[5]?.info}
        image={Card?.[5]?.image?.data?.attributes?.url}
        points={Card?.[5]?.lists?.map(({ list }) => list)}
      />
      <TwoColumnContent
        bgGray
        invert
        title={Card?.[6]?.title}
        caption={Card?.[6]?.info}
        image={Card?.[6]?.image?.data?.attributes?.url}
        points={Card?.[6]?.lists?.map(({ list }) => list)}
      />
      <ThreeColumnContent
        title={Card?.[7]?.title}
        caption={Card?.[7]?.info}
        image1={Card?.[7]?.image?.data?.attributes?.url}
        points={Card?.[7]?.lists?.map(({ list }) => list)}
        image2={Card?.[7]?.Secound_Image?.data?.attributes?.url || "/images/ship-supply/safety-stores-image2.png"}
      />
      <TwoColumnContent
        title={Card?.[8]?.title}
        caption={Card?.[8]?.info}
        image={Card?.[8]?.image?.data?.attributes?.url}
        points={Card?.[8]?.lists?.map(({ list }) => list)}
      />
      <ThreeColumnContent
        title={Card?.[9]?.title}
        caption={Card?.[9]?.info}
        image1={Card?.[9]?.image?.data?.attributes?.url}
        points={Card?.[9]?.lists?.map(({ list }) => list)}
        image2={Card?.[9]?.image2?.data?.attributes?.url || "/images/ship-supply/stationary-two.png"}
      />
      <OneColumnContent
        title={Card?.[10]?.title}
        caption={Card?.[10]?.info}
        image={Card?.[10]?.image?.data?.attributes?.url}
        points={Card?.[10]?.lists?.map(({ list }) => list)}
      />
      <GridContent
        data={[
          {
            bgGray: true,
            title: Card?.[11]?.title,
            caption: Card?.[11]?.info,
            points: Card?.[11]?.lists?.map(({ list }) => list),
          },
          {
            title: Card?.[12]?.title,
            caption: Card?.[12]?.info,
            points: Card?.[12]?.lists?.map(({ list }) => list),
          }
        ]}
        images={[Card?.[11]?.image?.data?.attributes?.url, Card?.[12]?.image?.data?.attributes?.url]}
      />
      <TwoColumnContent
        bgGray
        isCustomBasis
        bgColor={"#E0E2FB"}
        title={Card?.[13]?.title}
        caption={Card?.[13]?.info}
        image={Card?.[13]?.image?.data?.attributes?.url}
        points={Card?.[13]?.lists?.map(({ list }) => list)}
      />
      <ChooseAdamallys />
      <OtherServices />
    </>
  )
}

export default TechnicalMarineStoresTemplate