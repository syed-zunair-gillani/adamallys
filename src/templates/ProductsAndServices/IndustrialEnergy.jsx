import Accordion from '@/components/Accordion'
import GridBanner from '@/components/hero/grid-banner'
import IndustrialEnergyComp from '@/components/IndustrialEngery'
import ChooseAdamallys from '@/components/choose-adamallys/choose-adamallys'
import OtherServices from "@/components/other-services-slider/OtherServices"

const IndustrialEnergy = (props) => {
  const { title, info, video_title, Video, Our_Key_Product_Offerings } = props;
  const data = Our_Key_Product_Offerings?.map?.((offer) => (
    {
      title: offer?.title,
      content: offer?.info
    }
  ))
  return (
    <div>
      <div className="mb-24" />
      <section>
        <div>
          <h1 className="text-center text-2xl pb-8 md:pt-8 sm:text-[40px] font_calibri md:leading-[50px] md:text-[50px] lg:text-[60px] font-bold text-[#2E368F] px-4">
            Products & Services
          </h1>
        </div>
        <GridBanner />
      </section>
      <section className="mt-14 container mx-auto px-3 flex flex-col lg:flex-row gap-5 lg:gap-10 mb-10 lg:mb-20">
        <div className='lg:w-[30%] min-w-[464px]'>
          <IndustrialEnergyComp
            caption={video_title}
            image={Video?.data?.attributes?.url}
          />
        </div>
        <div className='lg:w-[70%]'>
          <h2 className='text-[60px] leading-[67px] font-bold text-theme-main'>{title}</h2>
          <p className="text-lg font-light leading-[26px] py-[17px]">
            {info}
          </p>
          <p className="text-[40px] leading-[45px] text-theme-main">Our Key Product Offerings</p>
          <div className='my-[30px] w-full h-[1px] bg-[#B2B6E0]' />
          <Accordion data={data} isFirstOpen />
        </div>
      </section>
      <ChooseAdamallys />
      <OtherServices />
    </div>
  )
}

export default IndustrialEnergy