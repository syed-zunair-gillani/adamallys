import CertificationsAndMemberships from "@/components/certifications-and-memberships/CertificationsAndMemberships";
import Main from "@/components/hero/main";
import OurCompany from "@/components/our-company/our-company";
import Services from "@/components/Services/Services";
import Milestones from "@/components/milestones/Milestones"
import OurBrands from "@/components/our-brands/our-brands";
import Cards from "@/components/Cards/Cards";
import News from "@/components/news/News"

async function getPageData() {
  
}

export default async function Home() {
  const data = await getPageData()

  return (
    <>
      <Main/>
      <CertificationsAndMemberships/>
      <OurCompany/>
      <Services/>
      <Milestones/>
      <OurBrands/>
      <Cards dark/>
      <Cards/>
      <News/>
    </>
  );
}
