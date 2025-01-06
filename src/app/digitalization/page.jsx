import LeadingPageBanner from "@/components/digitalization/Leadingpage";
import TwoColumnContent from "@/components/two-column-content/two-column-content";
import { getDigitalizationAndTechnologyAtAdamallys } from "@/services";


export default async function Home() {
  const data = await getDigitalizationAndTechnologyAtAdamallys()

  return (
    <>
      <div className="mb-[120px]" />
      <h1 className="text-theme-main text-[60px] leading-[67px] text-center font-bold mb-6 lg:mb-10">
        {data?.title}
      </h1>
      <LeadingPageBanner
        title={data?.Banner_Title}
        content={data?.Banner_Info}
        bgImage={data?.Banner_Image?.data?.attributes?.url}
        style={{ background: 'linear-gradient(to right,rgba(23, 31, 124, 1), rgba(23, 31, 124, 0))' }}
      />
      <div className="my:6 lg:my-[56px] flex flex-col gap-6 lg:gap-10">
        <div className="sticky top-20">
          <TwoColumnContent
            zeroGap
            hideButton
            title={data?.Cards?.[0]?.title}
            caption={data?.Cards?.[0]?.info}
            image={data?.Cards?.[0]?.image?.data?.attributes?.url}
            points={data?.Cards?.[0]?.lists?.map(({ list }) => list)}
          />
        </div>
        <div className="sticky top-20">
          <TwoColumnContent
            invert
            bgGray
            zeroGap
            hideButton
            bgColor="#E0E2FB"
            title={data?.Cards?.[1]?.title}
            caption={data?.Cards?.[1]?.info}
            image={data?.Cards?.[1]?.image?.data?.attributes?.url}
            points={data?.Cards?.[1]?.lists?.map(({ list }) => list)}
          /></div>
        <div className="sticky top-20">
          <TwoColumnContent
            zeroGap
            hideButton
            title={data?.Cards?.[2]?.title}
            caption={data?.Cards?.[2]?.info}
            image={data?.Cards?.[2]?.image?.data?.attributes?.url}
            points={data?.Cards?.[2]?.lists?.map(({ list }) => list)}
          />
        </div>
      </div>
    </>
  );
}
