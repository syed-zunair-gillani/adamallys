import Image from 'next/image'
import TwoColumnContent from '@/components/two-column-content/two-column-content'

const SustainabilityTemplate = (props) => {
  const { Title, BannerContent, BannerImage, CSR_Image, Cards, Content, fst_content, sec_content, third_content } = props;
  return (
    <>
      <div className="mb-20" />
      <div>
        <h1 className="text-center text-2xl py-12 sm:text-[40px] font_calibri md:leading-[50px] md:text-[50px] lg:text-[60px] font-bold text-theme-main mt-5 px-4">
          {Title}
        </h1>
      </div>
      <div
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${BannerImage?.data?.[0]?.attributes?.url})`,
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
            {BannerContent}
          </p>
        </div>
      </div>
      <div className="sticky top-20">
        <TwoColumnContent
          zeroGap
          hideButton
          title={Cards?.[0]?.title}
          caption={Cards?.[0]?.info}
          image={Cards?.[0]?.image?.data?.attributes?.url}
          points={Cards?.[0]?.lists?.map(({ list }) => list)}
        />
      </div>
      <div className="sticky top-20">
        <TwoColumnContent
          invert
          bgGray
          zeroGap
          hideButton
          title={Cards?.[1]?.title}
          caption={Cards?.[1]?.info}
          image={Cards?.[1]?.image?.data?.attributes?.url}
          points={Cards?.[1]?.lists?.map(({ list }) => list)}
        />
      </div>
      <section className={`relative container mx-auto grid pb-4 z-9 bg-white`}>
        <div>
          <figure>
            <Image
              src={CSR_Image?.data?.attributes?.url}
              width={1700}
              height={588}
              alt='marine-valves'
              className='w-full h-[588px] object-cover'
            />
          </figure>
        </div>
        <div className={`p-8 xl:p-14 leading-10  text-white bg-theme-main flex-col gap-2`}>
          <h2 className={`text-center text-[40px] leading-[49px]`}>Marine Valves & Ship Side Valves</h2>
          <div>
            <div className="flex justify-center">
              <p className='max-w-[800px] text-center text-lg leading-[26px] font-light mt-3'>
                {Content}
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-[45px] mt-[30px]">
              <p className='text-lg leading-[26px] font-light'>
                {fst_content}
              </p>
              <div className='w-full h-[1px] md:h-auto md:w-1 bg-white' />
              <p className='text-lg leading-[26px] font-light'>
                {sec_content}
              </p>
              <div className='w-full h-[1px] md:h-auto md:w-1 bg-white' />
              <p className='text-lg leading-[26px] font-light'>
                {third_content}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SustainabilityTemplate