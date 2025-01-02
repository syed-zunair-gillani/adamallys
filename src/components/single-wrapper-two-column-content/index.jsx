import Image from 'next/image'

const SingleWrapperTwoColumnContent = (props) => {
  const { isGradientBg = false, images, title, caption, points } = props;

  return (
    <section className={`${isGradientBg ? 'blue_gradient2 px-4 md:px-[70px]' : 'px-3 -mt-14'} container mx-auto flex flex-col md:flex-row mb-4 gap-4`}>
      <div
        className={'md:w-[50%]'}
      >
        {
          images?.map((image, index) =>
            <figure key={index} className={isGradientBg ? '-mt-14' : '-mt-2 sm:-mt-6 md:mt-0'}>
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
        className={`flex-1 flex flex-col justify-between md:w-[50%] p-8 lg:p-14 ship_supply_content ${isGradientBg ? "md:mt-[80px] text-white" : "text-theme-main md:mt-[140px]"}`}>
        <div>
          <h2>{title}</h2>
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
  )
}

export default SingleWrapperTwoColumnContent