import Image from 'next/image'
import Markdown from 'react-markdown'

const PresentDay = ({data}) => {
    return (
        <div className='flex flex-col lg:flex-row mt-[30px] lg:mt-[60px]'>
            <Image style={{ objectFit: 'cover' }} className='flex-1 basis-[100%] lg:basis-[50%]' src={data?.PresentDayImage?.data?.attributes?.url} alt='present day' width={1200} height={765} />
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
                <p className="z-[2] font_calibri capitalize text-[40px] leading-[45px] text-white">{data?.PresentDayTitle}</p>
                <div className='text-white present_day'>
                    <Markdown>{data?.PresentDayInfo}</Markdown>
                </div>
            </div>
        </div>
    )
}

export default PresentDay