import Image from 'next/image'

const ThreeColumnContent = (props) => {
  const { image1, image2, title, caption, points, } = props;
  return (
    <section className={`container mx-auto px-3 grid md:grid-cols-2 lg:grid-cols-3 mb-4 gap-4`}>
      <div className=''>
        <figure className='h-full'>
          <Image src={image1} alt='' className='w-full h-full object-cover' width={700} height={800} />
        </figure>
      </div>
      <div className={`p-8 xl:p-14 ship_supply_content text-white bg-theme-main`}>
        <h2>{title}</h2>
        <p>{caption}</p>
        <ul>
          {points?.map((point, index) =>
            <li key={index}>{point}</li>
          )}
        </ul>
        <button className='mt-6 flex items-center gap-6 bg-white py-[13px] px-[24px] text-[#2E368F] font_calibri rounded-full'>
          <span>View Products</span>
          <Image src={'/svg/arrow_next.svg'} alt='arrow_next' width={16} height={16} />
        </button>
      </div>
      <div className='hidden lg:block'>
        <figure className='h-full'>
          <Image src={image2} alt='' className='w-full h-full object-cover' width={700} height={800} />
        </figure>
      </div>
    </section>
  )
}

export default ThreeColumnContent