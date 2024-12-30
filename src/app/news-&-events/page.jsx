
import Main from "@/components/news-events/main";
import Card from "@/components/news-events/card";
import { getNewsAndEvents } from "@/services";

export default async function News() {
  const data = await getNewsAndEvents()
  console.log('data', data);

  return (
    <>
      <Main />
      <Card />
    </>
  );
}
