import Image from 'next/image'

const IndustrialEnergy = ({ image }) => {
    return (
        <div>
            <Image src={image || '/images/products-&-services/industrial-energy-image.png'} alt='industrial-energy-image' width={1646} height={529} />
            <div className="blue_gradient2 px-[47px] py-[58px]">
                <p className="text-[25px] leading-[35px] text-white">
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly
                </p>
                <div className="w-[77px] h-1 bg-theme-main rounded mt-[46px]"></div>
            </div>
        </div>
    )
}

export default IndustrialEnergy