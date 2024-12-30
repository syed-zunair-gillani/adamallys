import Image from 'next/image'
import TwoColumnContent from '@/components/two-column-content/two-column-content'
import { commitmentPoints, visionAndGoalsPoints } from '@/consts/sustainability'
import { getSustainabilityAtAdamallys } from '@/services'

const SustainabilityTemplate = async () => {
  const data = await getSustainabilityAtAdamallys()
  console.log('data', data);

  return (
    <>
      <div className="mb-20" />
      <div>
        <h1 className="text-center text-2xl py-8 sm:text-[40px] font_calibri md:leading-[50px] md:text-[50px] lg:text-[60px] font-bold text-theme-main mt-5 px-4">
          Sustainability at Adamallys
        </h1>
      </div>
      <div
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url('/images/sustainability/sustainability-image.png')`,
        }}
        className={`w-full max-w-[100%] relative min-h-[786px] flex flex-col justify-end items-end`}>
        <div
          style={{ background: 'linear-gradient(to bottom, rgba(23, 31, 124, 0), rgba(23, 31, 124, 1))' }}
          className="h-[364px] w-full -mb-5"
        />
        <div
          style={{ background: 'rgba(23, 31, 124, 1)' }}
          className="relative text-white w-full px-6 py-5 sm:px-9 sm:py-8 lg:px-[53px] lg:py-[53px]">
          <p className=" text-[16px] mx-auto max-w-[815px] text-center sm:text-[18px] font_calibri font-light">
            Adamallys, a proud IMPA SAVE pledger, is committed to pioneering sustainability initiatives. At the heart of our mission is the determination to drastically reduce our carbon footprint. We are making waves in green practices by harnessing solar energy to power our facilities, championing the sourcing and supply of boxed water and advanced water filtration systems, integrating biodegradable packaging, and implementing energy-saving lighting across our distribution centers. Join us on our journey towards a brighter, greener future.
          </p>
        </div>
      </div>
      <TwoColumnContent
        zeroGap
        title={"OUR VISION & GOALS"}
        points={visionAndGoalsPoints}
        image={"/images/sustainability/vision-image.png"}
        caption={"Our sustainability vision is simple yet powerful: to lead the marine supply industry into a future where environmental responsibility is a core principle. Our goals include:"}
      />
      <TwoColumnContent
        invert
        bgGray
        zeroGap
        points={commitmentPoints}
        title={"Our Commitment to the Preservation of the Marine Environment"}
        image={"/images/sustainability/commitment-image.png"}
        caption={"The marine environment is essential to global ecosystems and to our business. We’re dedicated to preserving it by:"}
      />
      <section className={`container mx-auto px-3 grid mb-4`}>
        <div>
          <figure>
            <Image
              src={"/images/sustainability/social-responsibility.png"}
              width={1700}
              height={588}
              alt='marine-valves'
              className='w-full h-[588px] object-cover'
            />
          </figure>
        </div>
        <div className={`p-8 xl:p-14 leading-10  text-white bg-theme-main "flex-col gap-2"}`}>
          <h2 className={`text-center text-[40px] leading-[49px]`}>Marine Valves & Ship Side Valves</h2>
          <div>
            <p className='max-w-[720px] text-center text-lg leading-[26px] font-light mt-3'>Adamallys believes in giving back to our community and supporting social and environmental causes that align with our values. Our CSR initiatives include:
            </p>
            <div className="flex flex-col md:flex-row justify-between gap-[45px] mt-[30px]">
              <p className='text-lg leading-[26px] font-light'>
                Employee Engagement in Green Practices: Encouraging our employees to participate in sustainability efforts, both within our facilities and through community programs.
              </p>
              <div className='w-full h-[1px] md:h-auto md:w-1 bg-white' />
              <p className='text-lg leading-[26px] font-light'>
                Local Community Support: Partnering with local charities and initiatives to improve social and environmental outcomes within the regions we operate.
              </p>
              <div className='w-full h-[1px] md:h-auto md:w-1 bg-white' />
              <p className='text-lg leading-[26px] font-light'>
                Global Responsibility: As a part of the global marine industry, we engage with partners and clients to set and uphold high standards in corporate responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SustainabilityTemplate