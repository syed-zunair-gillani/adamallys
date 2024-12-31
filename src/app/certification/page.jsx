import Logocard from "@/components/certification/Logocard";
import Logocard2 from "@/components/certification/logocard2";
import Banner from "@/components/certification/Title";
import { getCertificationsAndMemberships } from "@/services";

export default async function Home() {
  const page = await getCertificationsAndMemberships();

  return (
    <>
      <div className="mb-32" />
      <Banner title="Certification" />
      <Logocard data={page?.Certifications}/>
      <Banner title="Memberships" />
      <Logocard2 data={page?.Memberships}/>
    </>
  );
}
