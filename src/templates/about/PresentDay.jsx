import Image from 'next/image'

const PresentDay = () => {
    return (
        <div className='flex flex-col lg:flex-row mt-[30px] lg:mt-[60px]'>
            <Image style={{ objectFit: 'cover' }} className='flex-1 basis-[100%] lg:basis-[50%]' src='/images/about/present_day_image.png' alt='present day' width={1200} height={765} />
            <div
                className="flex-1 basis-[50%] relative flex flex-col gap-[16px] justify-center p-[30px] md:p-[60px] lg:p-[110px]"
                style={{ backgroundImage: 'url(/images/about/present_day_bg.png)' }}
            >
                <div style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0, left: 0,
                    background: 'rgba(0,0,0,0.5)',
                    zIndex: 0
                }} />
                <p className="z-[2] font_calibri capitalize text-[40px] leading-[45px] text-white">Present Day</p>
                <p className="z-[2] font_calibri text-[20px] leading-[24px] text-white">Innovating Ship Supply with a Focus on Quality and Sustainability</p>
                <p className='z-[2] font_calibri capitalize text-base leading-[26px] font-light text-white'>Established in 1972, Adamallys LLC is Today, Adamallys remains at the forefront of ship supply, continuing long-term partnerships and developing new connections. Adamallys has also evolved beyond being a traditional supplier to become a comprehensive solutions provider, offering a full range of supply, offshore support, and logistics services.
                </p>
                <p className='z-[2] font_calibri capitalize text-base leading-[26px] font-light text-white'>
                    We proudly supply a significant share of all vessels calling UAE ports. Our focus on enhancing value for customers has led us to invest in digital technologies for better systems, traceability, and customer service. We are also committed to sustainability, as demonstrated by our role as a proud IMPA SAVE pledger. Our mission is to reduce our carbon footprint and promote eco-friendly practices, such as using solar energy to power our facilities, offering boxed water and advanced filtration systems, utilizing biodegradable packaging, and implementing energy-efficient lighting.
                </p>
                <p className='z-[2] font_calibri capitalize text-base leading-[26px] font-light text-white'>
                    Join Adamallys on our journey toward a greener, more sustainable future, and experience the exceptional quality and reliability that has made us a leader in ship supply for over five decades.
                </p>
            </div>
        </div>
    )
}

export default PresentDay