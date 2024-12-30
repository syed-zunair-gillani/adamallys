import Image from 'next/image'

const Expertise = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-[20px] container mx-auto px-3'>
      <div className='flex flex-col sm:flex-row xl:flex-col'>
        <div className='flex-1 xl:w-[632px] h-[346px] p-[70px] flex flex-col justify-between'
          style={{
            background: 'linear-gradient(to right, #B2B6E0, #171F7C )'
          }}
        >
          <div>
            <p className='font_calibri capitalize text-[40px] leading-[45px] text-white'>
              Expertise
            </p>
            <div className='w-[76px] h-[2px] bg-white mt-[20px]' />
          </div>
          <div className="flex justify-end items-end">
            <Image src='/svg/about/arrow_circle_right.svg' alt='arrow_circle_right' width={100} height={100} />
          </div>
        </div>
        <Image className='flex-1' src='/images/about/expertise_image.png' alt='expertise_image' width={632} height={346} />
      </div>
      <div className="flex flex-col lg:flex-row flex-wrap gap-[20px]">
        <div className="flex-1 flex flex-col justify-between p-[32px] basis-[45%] bg-[#F1F3F5]">
          <p className='font_calibri capitalize text-base leading-[26px] font-light text-[#3E3E3E]'>Equipping a fleet is a privilege we understand the importance off. Our passion for what we do is reflected in the quality of our service.</p>
          <Image src='/svg/about/arrow_circle_right_filled.svg' alt='arrow_circle_right' width={42} height={42} />
        </div>
        <div className="flex-1 flex flex-col justify-between p-[32px] basis-[45%] bg-[#F1F3F5]">
          <p className='font_calibri capitalize text-base leading-[26px] font-light text-[#3E3E3E]'>As pioneers in the modern ship-chandling era, we have merged our vast technological presence and importing ability to continue to reshape the shipping industry.</p>
          <Image src='/svg/about/arrow_circle_right_filled.svg' alt='arrow_circle_right' width={42} height={42} />
        </div>
        <div className="flex-1 flex flex-col justify-between p-[32px] basis-[100%] bg-[#F1F3F5]">
          <p className='font_calibri capitalize text-base leading-[26px] font-light text-[#3E3E3E]'>With extensive technical product knowledge, experienced staff and global sourcing capabilities, combined with a comprehensive range of products and available ex-stock, Adamallys LLC is ideally placed for the procurement of oilfield supplies, ship repair materials, provisions, container lashings and deck/engine store for oil/chemical/product tankers.</p>
          <Image src='/svg/about/arrow_circle_right_filled.svg' alt='arrow_circle_right' width={42} height={42} />
        </div>
      </div>

    </div>
  )
}

export default Expertise