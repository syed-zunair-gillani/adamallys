import React from 'react'
import Image from 'next/image'
import { getFooter } from '@/services'

const VerticleIcon = async () => {
  const { Side_Sticky_Links } = await getFooter()
  return (
    Side_Sticky_Links.length > 0 &&
    <ul className='fixed right-2 z-[1000] flex flex-col gap-2 top-1/2 -translate-y-1/2'>
      {Side_Sticky_Links?.map((item, idx) => (
        <li key={idx}>
          <a
            target={item?.Caption === 'link' ? '_blank' : '_self'}
            href={
              (item?.Caption === 'phone') ?
                `tel:${item?.link}` :
                (item?.Caption === 'email')
                  ? `mailto:${item?.link}` :
                  item?.link
            }
          >
            <span className='w-12 h-12 bg-white rounded-full flex flex-col border border-[#EDEDED] justify-center items-center'>
              <Image src={item?.Icon?.data?.attributes?.url} alt="" width={20} height={20} />
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default VerticleIcon