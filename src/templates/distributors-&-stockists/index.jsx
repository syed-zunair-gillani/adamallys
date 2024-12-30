import Image from 'next/image'

const DistributorsAndStockistsTemplate = () => {
  return (
    <main
      className='mt-[8rem] container mx-auto'>
      <section>
        <div className={`relative cursor-pointer`}>
          <Image src="/images/distributors-&-tockists/distributors-image.png" alt='' width={600} height={418} className='w-full h-[465px] object-cover' />
          <div className={`absolute black_gradient flex flex-col text-white justify-center inset-0`}>
            <h1 className="text-white text-[60px] leading-[67px] text-center font-bold">
              Distributors & Stockists
            </h1>
            <p className="mt-[17px] text-[22px] leading-[32px] text-center font-bold">Adamallys LLC stocks products from some of the most renowned brands</p>
          </div>
        </div>
      </section>
      <div className="">
        <div className="border ">
          <div className="pt-[42px] pl-[64px] pr-[57px]">
            <Image src="/images/distributors-&-tockists/distributors-logo-1.png" alt='Distributors-logo' width={198} height={198} />
            <div className="">
              <p className="">BAHCO</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default DistributorsAndStockistsTemplate