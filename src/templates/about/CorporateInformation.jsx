import Image from 'next/image'

const CorporateInformation = () => {
  return (
    <div className='container mx-auto px-3'>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-[82px]'>
        <Image className='basis-[50%]' src={'/images/about/ship_image.png'} alt='CorporateInformation' width={569} height={557} />
        <div className='basis-[50%]'>
          <Image className=' absolute right-0' src={'/images/about/ship_white.png'} alt='CorporateInformation' width={569} height={557} />
          <p className='opacity-0'>i</p>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-[82px]'>
        <Image className='basis-[50%]' src={'/images/about/Corporate_information_image.png'} alt='CorporateInformation' width={569} height={557} />
        <div className='basis-[50%]'>
          <p className='font_calibri capitalize text-[59px] leading-[49px] pb-[26px]'>Corporate Information</p>
          <p className='font_calibri capitalize text-base leading-[26px] font-light'>Established in 1972, Adamallys LLC is a leading ship chandler in the UAE and the broader Middle East, specializing in comprehensive technical ship supplies and provisions. With over 50 years of experience, Adamallys is recognized as the largest stockist of marine stores and a trusted distributor of renowned industry brands. Our unwavering commitment to quality and customer satisfaction has made us a preferred partner for ship owners, management companies, and the maritime industry.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CorporateInformation