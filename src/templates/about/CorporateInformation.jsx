import Image from 'next/image'

const CorporateInformation = ({data}) => {
  return (
    <div className='container mx-auto px-3'>
      <div className='flex flex-col mt-16 lg:flex-row items-center justify-between gap-[82px]'>
        <Image className='basis-[50%] z-10' src={data?.Images?.data[1]?.attributes?.url} alt='CorporateInformation' width={569} height={557} />
        <div className='basis-[50%]'>
          <Image className=' absolute right-0' src={'/images/about/ship_white.png'} alt='CorporateInformation' width={569} height={557} />
          <p className='opacity-0'>i</p>
        </div>
      </div>
      <div className='flex flex-col z-10 mt-[104px] lg:flex-row items-center justify-between gap-[82px]'>
        <Image className='basis-[50%] z-10' src={data?.Images?.data[0]?.attributes?.url} alt='CorporateInformation' width={569} height={557} />
        <div className='basis-[50%]'>
          <p className='font_calibri capitalize text-[59px] leading-[49px] pb-[26px]'>{data?.ci_title}</p>
          <p className='font_calibri capitalize text-base leading-[26px] font-light'>{data?.ci_info}</p>
        </div>
      </div>
    </div>
  )
}

export default CorporateInformation