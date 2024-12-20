import Logocard from "@/components/certification/Logocard";
import Logocard2 from "@/components/certification/logocard2";
import Banner from "@/components/certification/Title";

export default function Home() {
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
