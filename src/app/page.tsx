import CertificationsAndMemberships from "@/components/certifications-and-memberships/CertificationsAndMemberships";
import Main from "@/components/hero/main";
import OurCompany from "@/components/our-company/our-company";
import Services from "@/components/Services/Services";
import Milestones from "@/components/milestones/Milestones"
import OurBrands from "@/components/our-brands/our-brands";
import Cards from "@/components/Cards/Cards";

export default function Home() {
  return (
    <>
      <Main/>
      <CertificationsAndMemberships/>
      <OurCompany/>
      <Services/>
      <Milestones/>
      <OurBrands/>
      <Cards/>
    </>
  );
}
