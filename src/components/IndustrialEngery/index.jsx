import Image from 'next/image'
import VideoPlayer from '../VideoPlayer'

const IndustrialEnergy = ({ image, video, caption }) => {
  return (
    <div className='' style={{ height: '100%' }}>
      {video ?
        <VideoPlayer
          loop
          autoPlay
          src={video}
          width={'100%'}
          height={'529px'}
          controls={false}
        /> :
        <Image src={image || '/images/products-&-services/industrial-energy-image.png'} alt='industrial-energy-image' width={1646} height={529} />
      }
      <div className="blue_gradient2 px-[47px] py-[58px]">
        <p className="font_calibri text-[25px] leading-[35px] text-white">
          {caption}
        </p>
        <div className="w-[77px] h-1 bg-theme-main rounded mt-[46px]"></div>
      </div>
    </div>
  )
}

export default IndustrialEnergy