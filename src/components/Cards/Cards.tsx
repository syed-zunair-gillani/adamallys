import Image from 'next/image'
import React from 'react'

const Cards = () => {
  return (
    <section className='grid grid-cols-2'>
        <div>
            <Image src="/images/image.png" alt='' width={720} height={720} className='w-full'/>
        </div>
        <div></div>
    </section>
  )
}

export default Cards