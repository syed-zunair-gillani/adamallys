import Image from 'next/image'

const GridBanner = ({ tabs, active, setActiveTab }) => {
  return (
    <main className='flex flex-col md:flex-row font_calibri'>
      <div onClick={() => setActiveTab(tabs[0])} className={`relative cursor-pointer ${active === tabs[0] ? "w-full md:w-[40%]" : "w-[30%] hidden md:block"} `}>
        <Image src="/images/container.jpg" alt='' width={600} height={600} className='w-full h-[465px] object-cover' />
        <div className={`absolute ${active !== tabs[0] && 'black_gradient'} flex flex-col text-white justify-end inset-0`}>
          <h6 className={`px-8 text-xl font-bold pb-10 ${active === tabs[0] ? "max-w-[415px] text-3xl md:text-[40px] leading-[42px]" : ""} `}>
            {tabs[0]}
            {active === tabs[0] && <div className='w-[101px] h-[2px] bg-white mt-3' />}
          </h6>
        </div>
      </div>
      <div onClick={() => setActiveTab(tabs[1])} className={`relative cursor-pointer ${active === tabs[1] ? "w-full md:w-[40%]" : "w-[30%] hidden md:block"} `}>
        <Image src="/images/products-&-services/warehousing-image.png" alt='' width={600} height={600} className='w-full h-[465px] object-cover' />
        <div className={`absolute ${active !== tabs[1] && 'black_gradient'} flex flex-col text-white justify-end inset-0`}>
          <h6 className={`px-8 text-xl font-bold pb-10 ${active === tabs[1] ? "max-w-[415px] text-3xl md:text-[40px] leading-[42px]" : ""} `}>
            {tabs[1]}
            {active === tabs[1] && <div className='w-[101px] h-[2px] bg-white mt-3' />}
          </h6>
        </div>
      </div>
      <div onClick={() => setActiveTab(tabs[2])} className={`relative cursor-pointer ${active === tabs[2] ? "w-full md:w-[40%]" : "w-[30%] hidden md:block"} `}>
        <Image src="/images/products-&-services/industrial-&-energy-image.png" alt='' width={600} height={600} className='w-full h-[465px] object-cover' />
        <div className={`absolute ${active !== tabs[2] && 'black_gradient'} flex flex-col text-white justify-end inset-0`}>
          <h6 className={`px-8 text-xl font-bold pb-10 ${active === tabs[2] ? "max-w-[415px] text-3xl md:text-[40px] leading-[42px]" : ""} `}>
            {tabs[2]}
            {active === tabs[2] && <div className='w-[101px] h-[2px] bg-white mt-3' />}
          </h6>
        </div>

      </div>
    </main>
  )
}

export default GridBanner