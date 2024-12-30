import CertificationsAndMemberships from "@/components/certifications-and-memberships/CertificationsAndMemberships";
import Main from "@/components/hero/main";
import OurCompany from "@/components/our-company/our-company";
import Services from "@/components/Services/Services";
import Milestones from "@/components/milestones/Milestones"
import OurBrands from "@/components/our-brands/our-brands";
import Cards from "@/components/Cards/Cards";
import News from "@/components/news/News"
import { getHomePage, getMilestones } from "@/services"


export default async function Home() {
  const milestones = await getMilestones()
  const page = await getHomePage()
  console.log("🚀 ~ Home ~ page:", page)
  const {
    BrandContent,
    CertificationsMemberships,
    ContentCard,
    Hero,
    Icons,
    Our_Company_Content,
    ServiceCard,
    news_and_events,
  } = page

  return (
    <>
      <Main data={Hero}/>
      <CertificationsAndMemberships data={CertificationsMemberships}/>
      <OurCompany data={Our_Company_Content}/>
      <Services />
      <Milestones data={milestones} />
      <OurBrands />
      <Cards dark />
      <Cards />
      <News />
    </>
  );
}
