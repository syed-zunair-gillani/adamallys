import Image from 'next/image'
import LiBold from '../LiBold';

const OneColumnContent = (props) => {
  const { id, leftTitle, title, caption, image, points } = props;

  return (
    <section id={id} className={`container mx-auto grid mb-4 px-[18px] xl:px-0`}>
      <div>
        <figure>
          <Image
            src={image}
            width={1700}
            height={588}
            alt='marine-valves'
            className='w-full md:h-[588px] h-[243px] object-cover'
          />
        </figure>
      </div>
      <div className={`p-8 xl:p-14 leading-10 mt-4 md:mt-0 ship_supply_content ship_supply_content_one_column text-white blue_gradient3 ${leftTitle ? "md:flex gap-8" : "flex-col gap-2"}`}>
        <h2 className={`!text-[25px] md:!text-[40px] !mb-0 md:!mb-6 ${leftTitle && "md:max-w-[250px]"}`}>{title}</h2>
        <div>
          <p className='!text-xs md:!text-lg'>{caption}</p>
          <ul className='flex flex-col gap-3'>
            {points?.map((point, index) =>
              <LiBold isGradientBg className='!text-xs md:!text-lg' key={index}>{point}</LiBold>
            )}
          </ul>
          <button className={`mt-6 flex items-center text-xs justify-between md:text-base gap-6 bg-white text-theme-main py-[13px] px-[24px] font_calibri rounded-full`}>
            <span className='leading-6'>View Products</span>
            <Image src={'/svg/arrow_next.svg'} alt='arrow_next' width={16} height={16} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default OneColumnContent