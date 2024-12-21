import Image from 'next/image'
import React from 'react'

const ChooseAdamallys = () => {
  return (
    <section className="mt-10 md:mt-20 container mx-auto px-3 flex flex-col-reverse md:flex-row gap-10">
        <div className='md:w-[60%]'>
          <h2 className='text-3xl md:text-5xl lg:text-6xl font_calibri text-theme-main font-bold mb-6 sm:mb-10'>Why Choose Adamallys</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-7 font_calibri'>
              {
                [1,2,3,4,5,6]?.map((item,idx)=>(
                  <div key={idx}>
                      <h6 className='border-b pb-3 border-dashed text-theme-main font-bold text-[30px] border-theme-main'>0{idx+1}</h6>
                      <div className='mt-5'>
                        <h6 className='text-xl text-theme-main font-bold'>Rigorous Quality Control</h6>
                        <p className='text-lg text-[#3E3E3E]'>Our systematic quality control ensures that every product meets specific specifications and comes with full certification when required.</p>
                      </div>
                  </div>
                ))
              }
          </div>
        </div>
        <div className='md:w-[40%]'>
          <figure>
            <Image src="/images/ship-on-port.png" alt="" width={530} className='w-full h-full object-cover' height={670} />
          </figure>
        </div>
      </section>

      
  )
}

export default ChooseAdamallys