import React from 'react'
import Image from "next/image";

function Card3() {
  return (
    <div className='container mx-auto px-4'>
      <section className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-2 mt-10 mx-auto  items-stretch">
        <div className="max-w-full flex">
          <Image
            width={500}
            height={500}
            src="/images/image copy.svg"
            alt="Digital Advantage Illustration"
            className="w-full max-h-[580px] h-auto object-cover"
          />
        </div>

        <div className="bg-[#2E368F] text-white px-6 py-10 md:px-10 md:py-16 flex items-center h-full">
          <div>
            <h2 className="text-[28px] md:text-[40px] font-[700] font_franklin ">
              A future-focused Approach
            </h2>

            <div className=' font_calibri'>
              <p className="py-4">
                Our ongoing investment in technology ensures that Adamallys remains at the forefront of the ship supply industry. We are committed to leveraging digital solutions to exceed client expectations, strengthen operational efficiency, and drive meaningful, future-focused innovation.
                Discover how our digital solutions can enhance your operations.
              </p>
              <p className="flex gap-4 py-4">
                Contact us to learn more about our digital capabilities and how we can support your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Card3;
