import Image from 'next/image'

const SingleWrapperTwoColumnContent = (props) => {
  const { isGradientBg = false, images, title, caption, points } = props;

  return (
    <div className="mx-[18px] md:mx-0">
      <section className={` ${isGradientBg ? 'blue_gradient2 md:px-[70px]' : 'mt-0'} container mx-auto flex flex-col md:flex-row gap-4 sm:pb-10 lg:pb-[170px]`}>
        <div
          className={'p-[18px] md:px-0 md:w-[50%]'}
        >
          {
            images?.map((image, index) =>
              <figure key={index} className={`sticky -top-10 ${isGradientBg ? 'pt-5 md:pt-10' : ''}`}>
                <Image
                  alt={title}
                  src={image}
                  width={1700}
                  height={1800}
                  className=' object-cover'
                />
              </figure>
            )
          }
        </div>
        <div
          className={`flex-1 flex flex-col justify-between md:w-[50%] p-[18px] md:p-8 lg:p-14 ship_supply_content ${isGradientBg ? "md:mt-[80px] text-white" : "text-theme-main md:mt-[60px]"}`}>
          <div>
            <h2 className='text-[25px] lg:text-[40px]'>{title}</h2>
            <p>{caption}</p>
            {points?.map(({ title: pointTitle, info, lists }, index) =>
              <div key={title + index}>
                <h3 className='text-[25px] mb-2'>{pointTitle}</h3>
                <ul className='flex flex-col gap-2 mb-4'>
                  {lists ? lists?.map((point, idx) =>
                    <li key={pointTitle + idx}>{point?.list}</li>
                  ) :
                    <li>{info}</li>
                  }
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default SingleWrapperTwoColumnContent