import Accordion from '@/components/Accordion'
import IndustrialEnergyComp from '@/components/IndustrialEngery'
import ChooseAdamallys from '@/components/choose-adamallys/choose-adamallys'
import OtherServices from "@/components/other-services-slider/OtherServices"
import Image from 'next/image'

const data = [
  {
    title: "Oilfield & Government Project Imports",
    content: "A complete Service for management, import, export and supply for projects."
  },
  {
    title: "New Shipbuilding Stores",
    content: "Supply of Initial stores for newly built vessels."
  },
  {
    title: "Supply Contractors",
    content: "Long term fixed rate supply contracts."
  },
  {
    title: "Offshore Supply Support",
    content: "Boarding, supply to rigs, platforms, oil tankers and ships."
  },
  {
    title: "EM Spare parts Supply Service",
    content: "Arrange original equipment spare parts for the owner/ship management."
  },
  {
    title: "Consignments",
    content: "Clearing, warehousing, forwarding ship stores to transit for the owner/ship management."
  },
  {
    title: "Class Certification",
    content: "Arrangement of testing and witness by Class Inspectors for the owner/ship management."
  }
]

const Warehousing = () => {
  return (
    <div>
      <div
        style={{
          paddingBottom: '72px',
          background: 'linear-gradient(to bottom, #ffffff , #F4F5F7 )'
        }}
      >
        <section className="mt-[71px] container mx-auto px-3 flex flex-col lg:flex-row gap-5 lg:gap-10 mb-10 lg:mb-20">
          <div className='lg:w-[30%] min-w-[464px]'>
            <IndustrialEnergyComp image='/images/products-&-services/marine-logistics-image.png' />
          </div>
          <div className='lg:w-[70%]'>
            <h2 className='text-[60px] leading-[67px] font-bold text-theme-main'>Marine Logistics</h2>
            <p className="mt-[13px]  text-[30px] leading-[33px] font-bold text-theme-main">In publishing and graphic design, Lorem ipsum is a placeholder</p>
            <div className='mt-[30px] mb-5 w-full h-[1px] bg-[#B2B6E0]' />
            <Accordion data={data} isOpen hideToggle />
          </div>
        </section>

        <section className="mt-[71px] container mx-auto px-3 flex flex-col lg:flex-row gap-5 lg:gap-10 ">
          <div className='lg:w-[30%] bg-[red]'>
            <Image style={{ objectFit: 'cover', position: 'center', width: '100%', height: '100%' }} src='/images/products-&-services/warehouse-image.png' alt='warehouse-image' width={465} height={517} />
          </div>
          <div className='lg:w-[70%]'>
            <h2 className='text-[60px] leading-[67px] font-bold text-theme-main'>Warehousing</h2>
            <p className="mt-[13px]  text-[30px] leading-[33px] font-bold text-theme-main">
              We have three warehouse locations, which highlight the facility to store our extensive range of stores:
            </p>
            <div className="flex flex-col sm:flex-row space-y-[17px] sm:space-y-[0] sm:space-x-[17px] mt-[42px]">.
              <div className="blue_gradient2 px-[30px] py-[58px] flex-1">
                <p className="text-[55px] leading-[56px] text-white">
                  400,000 sq ft
                </p>
                <p className="mt-4">
                  Total warehouse space
                </p>
              </div>
              <div className="blue_gradient2 px-[35px] py-[58px] flex-1">
                <p className="text-[55px] leading-[56px] text-white">
                  60+
                </p>
                <p className="mt-4">
                  fleet of transport vehicles for the supply of stores to various ports.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ChooseAdamallys />
      <OtherServices />
    </div>
  )
}

export default Warehousing