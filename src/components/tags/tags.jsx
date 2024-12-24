import React from 'react'

const Tags = () => {
  return (
    <section className='container mx-auto px-3 py-4'>
        <ul className='flex gap-2 items-center justify-center flex-wrap'>
        {
            [1,2,3,4,5,6,7, 1,2,3,4,5,6,7,1,2,].map((item,idx)=>(
                <li className='uppercase text-sm text-theme-main font_calibri bg-[#E0E2FB] py-[9px] px-[25px] rounded-full' key={idx}>ENGINE STORES</li>
            ))
        }
        </ul>
    </section>
  )
}

export default Tags