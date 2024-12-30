import dayjs from 'dayjs';
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";

function Card({ title, image, date, slug }: any) {
  return (
    <div
      className="flex flex-col items-center mx-auto w-full max-w-[600px] justify-center duration-300"
    >
      <img src={image} alt={title} className="w-full" />
      <div className="bg-[#F5F6F8] w-full py-8 px-10">
        <p className="text-[#2E368F]">{dayjs(date).format('DD MMMM YYYY')}</p>
        <h3 className="text-[25px] font-[300] text-[#8B8B8B] py-3">{title}</h3>
        <span className="flex items-center gap-4 text-[#2E368F] mt-4">
          <Link href={`/${slug}`}>Read More</Link>
          <IoIosArrowForward />
        </span>
      </div>
    </div>
  );
}

export default Card;
