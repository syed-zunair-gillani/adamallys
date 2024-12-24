import Card2 from "@/components/digitalization/Card2";
import Card3 from "@/components/digitalization/Card3";
import Digital from "@/components/digitalization/Digital";
import LeadingpageBanner from "@/components/digitalization/Leadingpage";

export default function Home() {
  return (
    <>
    <div className="mb-24"/>
    <main>
      <LeadingpageBanner />
      <Digital />
      <Card2 />
      <Card3 />
    </main>
    </>
  );
}
