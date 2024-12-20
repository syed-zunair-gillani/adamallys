import Logocard from "@/components/certification/Logocard";
import Logocard2 from "@/components/certification/logocard2";
import Banner from "@/components/certification/Title";

export default function Home() {
  return (
    <section className="">
      <Banner title="Certification"/>
      <Logocard />
      <Banner title="Memberships"/>
      <Logocard2 />
    </section>
  );
}
