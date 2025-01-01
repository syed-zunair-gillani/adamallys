import Card2 from "@/components/digitalization/Card2";
import Card3 from "@/components/digitalization/Card3";
import Digital from "@/components/digitalization/Digital";
import LeadingPageBanner from "@/components/digitalization/Leadingpage";
import TwoColumnContent from "@/components/two-column-content/two-column-content";
import { getDigitalizationAndTechnologyAtAdamallys } from "@/services";


export default async function Home() {
  const data = await getDigitalizationAndTechnologyAtAdamallys()

  return (
    <>
      <div className="mb-24" />
      <main>
        <LeadingPageBanner
          title={data?.title}
          content={data?.Banner_Info}
          bgImage={data?.Banner_Image?.data?.attributes?.url}
        />
        <div className="my-[56px] flex flex-col gap-10">
          <TwoColumnContent
            zeroGap
            title={data?.Cards?.[0]?.title}
            caption={data?.Cards?.[0]?.info}
            image={data?.Cards?.[0]?.image?.data?.attributes?.url}
            points={data?.Cards?.[0]?.lists?.map(({ list }) => list)}
          />
          <TwoColumnContent
            invert
            bgGray
            zeroGap
            bgColor="#E0E2FB"
            title={data?.Cards?.[1]?.title}
            caption={data?.Cards?.[1]?.info}
            image={data?.Cards?.[1]?.image?.data?.attributes?.url}
            points={data?.Cards?.[1]?.lists?.map(({ list }) => list)}
          />
          <TwoColumnContent
            zeroGap
            title={data?.Cards?.[2]?.title}
            caption={data?.Cards?.[2]?.info}
            image={data?.Cards?.[2]?.image?.data?.attributes?.url}
            points={data?.Cards?.[2]?.lists?.map(({ list }) => list)}
          />
        </div>
      </main>
    </>
  );
}
