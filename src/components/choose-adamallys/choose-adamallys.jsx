import Image from 'next/image'
import { getWhyChoose } from '@/services'

const ChooseAdamallys = async (props) => {
  const { description, title, image, } = props;
  const data = await getWhyChoose()
  return (
    <section className={`${description ? "items-center" : ""} px-4 xs:px-0 mt-10 md:mt-20 container mx-auto flex flex-col-reverse md:flex-row gap-10`}>
      <div className='md:w-[60%]'>
        <h2 className='text-3xl md:text-5xl lg:text-6xl font_calibri text-theme-main font-bold mb-6 sm:mb-10'>
          {title || data?.title}
        </h2>
        {(data?.description || description) ? <p>{data?.description || description}</p> :
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-7 font_calibri'>
            {data?.WhyChoose?.map((item, idx) => (
              <div key={idx}>
                <h6 className='border-b pb-3 border-dashed text-theme-main font-bold text-[30px] border-theme-main'>0{idx + 1}</h6>
                <div className='mt-5'>
                  <h6 className='text-xl text-theme-main font-bold'>{item?.title}</h6>
                  <p className='text-lg text-[#3E3E3E]'>{item?.info}</p>
                </div>
              </div>
            ))}
          </div>
        }
      </div>
      <div className='md:w-[40%]'>
        <figure className='h-full'>
          <Image
            alt={title || data?.title} width={530}
            src={image || data?.Image?.data?.attributes?.url}
            className='w-full h-full object-cover' height={description ? 360 : 670}
          />
        </figure>
      </div>
    </section>


  )
}

export default ChooseAdamallys