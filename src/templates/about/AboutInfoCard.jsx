import Image from 'next/image'
import React from 'react'
const cardsData = [
  {
    icon: '/svg/about/calendar_month.svg',
    title: '50+ YEARS',
    caption: 'of experience'
  },
  {
    icon: '/svg/about/directions_boat.svg',
    title: 'LARGEST & MOST COMPREHENSIVE INVENTORY',
    caption: 'of marine stores in the region'
  },
  {
    icon: '/svg/about/local_shipping.svg',
    title: 'Trusted Distributor',
    caption: 'of renowned industry brands'
  }
]
const AboutInfoCard = () => {
  return (
    <div className='flex flex-wrap gap-[8px] pt-[40px] md:pt-[80px]'>
      {
        cardsData.map((card) =>
          <div className='flex-1 min-w-[280px] relative py-[36px] flex-1 flex flex-col items-center gap-[8px]'
            style={{
              overflow: 'hidden',
              background: 'linear-gradient(to right, #B2B6E0, #171F7C )'
            }}
          >
            <Image src={card.icon} alt={card?.title} width={62} height={62} />
            <p style={{ zIndex: 2 }} className='font_calibri capitalize text-[30px] leading-[34px] text-white text-center'>{card?.title}</p>
            <p style={{ zIndex: 2 }} className='font_calibri capitalize text-base leading-[26px] font-light text-white text-center'>{card?.caption}</p>
            <div className='absolute w-full h-full top-0 right-0'
              style={{ top: 0, right: '-42%', zIndex: 0 }}
            >
              <Image style={{
                objectPosition: 'right'
              }} src={'/images/about/half_ship_mask.png'} alt={card?.title} width={422} height={244} />
            </div>
          </div>
        )}
    </div>
  )
}

export default AboutInfoCard