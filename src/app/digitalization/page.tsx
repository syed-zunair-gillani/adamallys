import Card2 from "@/components/digitalization/Card2";
import Card3 from "@/components/digitalization/Card3";
import Digital from "@/components/digitalization/Digital";
import Leadingpage from "@/components/digitalization/Leadingpage";

export default function Home() {
  return (
    <>
    <div className="mb-24"/>
    <main className="font-calibri ">
      <Leadingpage />
      <Digital />
      <Card2 />
      <Card3 />
    </main>
    </>
  );
}
