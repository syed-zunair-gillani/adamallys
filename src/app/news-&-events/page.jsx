
import Main from "@/components/news-events/main";
import Card from "@/components/news-events/card";
import { getNewsAndEvents } from "@/services";

export default async function Home() {
  const page = await getNewsAndEvents()

  return (
    <>
      <Main/>
      <Card/>
    </>
  );
}
