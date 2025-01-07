import Image from 'next/image'

const CorporateInformation = ({ data }) => {
  return (
    <section className='bg-[#F4F5F7]'>
      <div className='container grid md:grid-cols-2 gap-4 md:gap-20 mx-auto pl-3 pb-10 md:mb-0'>
        <div className='mt-4 md:mt-16 lg:flex-row items-center justify-between gap-[82px]'>
          <div class="sticky top-20 z-[11]">
            <Image className='basis-[50%] ' src={data?.Images?.data[1]?.attributes?.url} alt='CorporateInformation' width={569} height={557} />
          </div>
          <div class="sticky top-20 mt-[60px] z-[12]">
            <Image className='basis-[50%]' src={data?.Images?.data[0]?.attributes?.url} alt='CorporateInformation' width={569} height={557} />
          </div>
        </div>
        <div className='z-10 md:mt-[104px] !flex flex-col items-center justify-between gap-[82px]'>
          <div className='basis-[50%] hidden md:block'>
            <Image className='absolute opacity-50 md:opacity-100 right-0 z-[1]' src={'/images/about/ship_white.png'} alt='CorporateInformation' width={569} height={557} />
            <p className='opacity-0'>i</p>
          </div>
          <div className='basis-[50%] md:mt-20 flex flex-col justify-center z-[10]'>
            <p className='font_calibri capitalize text-[25px] md:text-left font-bold text-center md:text-[59px] leading-[49px] mb-[7px] md:pb-[26px]'>{data?.ci_title}</p>
            <p className='font_calibri capitalize md:text-base text-center text-xs md:text-left md:leading-[26px] font-light'>{data?.ci_info}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CorporateInformation