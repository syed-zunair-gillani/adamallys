import React from 'react'
import Image from 'next/image'
import LabelGroup from '@/components/LabelGroup';

const ProductCard = (props) => {
  const { image, title, skuCode, labels } = props;
  return (
    <div className='bg-[#E5E7F5] basis-[18%] flex-1 rounded'>
      <div className="w-full">
        <Image style={{ width: '100%', objectFit: 'cover', objectPosition: 'center' }} src={image} alt='' width={220} height={184} />
      </div>
      <div className="p-[20px] flex flex-col justify-end">
        <div>
          <span className='font_calibri text-theme-main text-[12px] leading-[18px]'>SKU Code :</span>
          <span className='font_calibri text-theme-main text-[12px] leading-[18px]'>{skuCode}</span>
          <p className='pt-[10px] pb-[14px] font_calibri text-lg font-bold leading-[20px] text-theme-main'>{title}</p>
        </div>
        <LabelGroup labels={labels} />
      </div>
    </div>
  )
}

export default ProductCard