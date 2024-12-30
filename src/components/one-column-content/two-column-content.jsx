import Image from 'next/image'

const OneColumnContent = (props) => {
  const { leftTitle, title, caption, image, points } = props;

  return (
    <section className={`container mx-auto px-3 grid mb-4`}>
      <div>
        <figure>
          <Image
            src={image}
            width={1700}
            height={588}
            alt='marine-valves'
            className='w-full h-[588px] object-cover'
          />
        </figure>
      </div>
      <div className={`p-8 xl:p-14 leading-10 ship_supply_content ship_supply_content_one_column text-white blue_gradient3 ${leftTitle ? "md:flex gap-8" : "flex-col gap-2"}`}>
        <h2 className={`${leftTitle && "md:max-w-[250px]"}`}>{title}</h2>
        <div>
          <p>{caption}</p>
          <ul className='flex flex-col'>
            {points?.map((point, index) =>
              <li key={index}>{point}</li>
            )}
          </ul>
          <button className={`mt-6 flex items-center gap-6 bg-white text-theme-main py-[13px] px-[24px] font_calibri rounded-full`}>
            <span className='leading-6'>View Products</span>
            <Image src={'/svg/arrow_next.svg'} alt='arrow_next' width={16} height={16} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default OneColumnContent