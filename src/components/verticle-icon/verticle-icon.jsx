import { getFooter } from '@/services'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const VerticleIcon = async () => {
  const { Side_Sticky_Links } = await getFooter()
  return (
    Side_Sticky_Links.length > 0 &&
    <ul className='fixed right-2 z-[1000] flex flex-col gap-2 top-1/2 -translate-y-1/2'>
      {
        Side_Sticky_Links?.map((item, idx) => (
          <li key={idx}>
            <Link href={item?.link}>
              <button className='w-12 h-12 bg-white rounded-full flex flex-col border border-[#EDEDED] justify-center items-center'>
                <Image src={item?.Icon?.data?.attributes?.url} alt="" width={20} height={20} />
              </button>
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

export default VerticleIcon