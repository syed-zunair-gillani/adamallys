import Accordion from '@/components/Accordion'
import VideoPlayer from '@/components/VideoPlayer'
import GridBanner from '@/components/hero/grid-banner'
import IndustrialEnergyComp from '@/components/IndustrialEngery'
import ChooseAdamallys from '@/components/choose-adamallys/choose-adamallys'
import OtherServices from "@/components/other-services-slider/OtherServices"

const Warehousing = (props) => {
  const { title, sub_title, Cards, Warehousing_info, Warehousing_videos, list, video, video_title, OtherServices: otherServicesData } = props;
  const data = list?.map?.((offer) => (
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
      <div
        style={{
          paddingBottom: '72px',
          background: 'linear-gradient(to bottom, #ffffff , #F4F5F7 )'
        }}
      >
        <section className="mt-[71px] container mx-auto flex flex-col lg:flex-row gap-5 lg:gap-10 mb-10 lg:mb-20">
          <div className='lg:w-[30%] min-w-[464px]'>
            <IndustrialEnergyComp
              video={video?.data?.attributes?.url}
              caption={video_title}
            />
          </div>
          <div className='lg:w-[70%]'>
            <h2 className='text-[60px] leading-[67px] font-bold text-theme-main'>{title}</h2>
            <p className="mt-[13px]  text-[30px] leading-[33px] font-bold text-theme-main">
              {sub_title}
            </p>
            <div className='mt-[30px] mb-5 w-full h-[1px] bg-[#B2B6E0]' />
            <Accordion data={data} isOpen hideToggle />
          </div>
        </section>

        <section className="mt-[71px] container mx-auto flex flex-col lg:flex-row gap-5 lg:gap-10 ">
          <div className='lg:w-[30%] bg-[red]'>
            <VideoPlayer
              loop
              autoPlay
              width={'100%'}
              height={'100%'}
              controls={false}
              src={Warehousing_videos?.data?.attributes?.url}
            />
          </div>
          <div className='lg:w-[70%]'>
            <h2 className='text-[60px] leading-[67px] font-bold text-theme-main'>Warehousing</h2>
            <p className="mt-[13px]  text-[30px] leading-[33px] font-bold text-theme-main">
              {Warehousing_info}
            </p>
            <div className="flex flex-col sm:flex-row space-y-[17px] sm:space-y-[0] sm:space-x-[17px] mt-[42px]">
              {
                Cards?.map(card =>
                  <div key={card?.id} className="blue_gradient2 px-[30px] py-[58px] flex-1">
                    <p className="text-[55px] leading-[56px] text-white">
                      {card?.title}
                    </p>
                    <p className="mt-4 text-white text-[20px] leading-[27px]">
                      {card?.info}
                    </p>
                  </div>
                )
              }
            </div>
          </div>
        </section>
      </div>

      <ChooseAdamallys />
      <OtherServices {...otherServicesData} />
    </div>
  )
}

export default Warehousing