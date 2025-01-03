import Link from 'next/link'
import Image from 'next/image'
import GridBanner from '@/components/hero/grid-banner'
import Milestones from '@/components/milestones/Milestones'
import ChooseAdamallys from '@/components/choose-adamallys/choose-adamallys'
import OtherServices from "@/components/other-services-slider/OtherServices"

const renderRichText = (blocks) => {
  return blocks?.map((block, index) => {
    const { children } = block;
    return (
      <p key={index} className="font-light !text-[rgba(62, 62, 62, 1)]">
        {children?.map((child) => child?.text)}
      </p>
    );
  });
};

const ShipSupply = (props) => {
  const { title, content, Product_and_service, milestones } = props;

  const text = renderRichText(content)
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
      <section className="mt-14 container mx-auto px-3 flex flex-col md:flex-row gap-5 md:gap-10 mb-10 md:mb-20">
        <div className='md:w-[30%]'>
          <div className='sticky top-20'>
            <h2 className='text-3xl md:text-5xl lg:text-6xl font_calibri text-theme-main font-bold'>{title}</h2>
            <div className='ship_supply_content font_calibri mt-4'>
              {text}
            </div>
          </div>
        </div>
        <div className='md:w-[70%]'>
          <div className='flex flex-col gap-10'>
            {
              Product_and_service?.map?.((item, idx) => (
                <div key={idx} className='grid grid-cols-2 gap-10'>
                  <figure>
                    <Image src={item?.Image?.data?.attributes?.url} alt={item?.title} className='h-[214px] w-full object-cover' width={400} height={214} />
                  </figure>
                  <div className='flex flex-col justify-between'>
                    <div>
                      <h3 className='text-theme-main text-4xl mb-1 font_franklin'>{item?.title}</h3>
                      <p>{item?.Excerpt}</p>
                    </div>
                    <Link href={item?.link} className='text-theme-main flex gap-[29px]'>
                      Read More
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <mask id="mask0_550_4737" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                          <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_550_4737)">
                          <path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" fill="#2E368F" />
                        </g>
                      </svg>

                    </Link>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <Milestones data={milestones} />
      <ChooseAdamallys />
      <OtherServices />
    </div>
  )
}

export default ShipSupply