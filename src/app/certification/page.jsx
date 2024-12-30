import Logocard from "@/components/certification/Logocard";
import Logocard2 from "@/components/certification/logocard2";
import Banner from "@/components/certification/Title";
import qs from "qs"
import { Axios } from "@/config/Axios";

async function getPageData() {
  const params = qs.stringify({
    populate: [
      'Certifications?.Image', "Memberships.Image"
    ],
  })
  const responce = await Axios.get(`/certifications-and-memberships-page?${params}`);
  return {
    page: responce.data?.data?.attributes
  }
}

export default async function Home() {
  const {page} = await getPageData()
  return (
    <>
      <div className="mb-32" />
      <Banner title="Certification" />
      <Logocard />
      <Banner title="Memberships" />
      <Logocard2 />
    </>
  );
}
