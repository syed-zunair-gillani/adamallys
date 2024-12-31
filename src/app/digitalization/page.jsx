import Card2 from "@/components/digitalization/Card2";
import Card3 from "@/components/digitalization/Card3";
import Digital from "@/components/digitalization/Digital";
import LeadingPageBanner from "@/components/digitalization/Leadingpage";
import { getDigitalizationAndTechnologyAtAdamallys } from "@/services";


export default async function Home() {
  const page = await getDigitalizationAndTechnologyAtAdamallys()

  return (
    <>
      <div className="mb-24" />
      <main>
        <LeadingPageBanner
          title={'Leading Marine Supply Through Technology'}
          content={'At Adamallys LLC, we are dedicated to transforming the ship supply industry with cutting-edge digital tools and innovative solutions. Our commitment to digitalization enhances every aspect of our service, ensuring that our clients benefit from seamless, efficient, and transparent processes.'}
          bgImage={"/images/image.svg"}
        />
        <Digital />
        <Card2 />
        <Card3 />
      </main>
    </>
  );
}
