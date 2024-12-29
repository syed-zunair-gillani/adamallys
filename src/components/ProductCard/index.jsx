import React from 'react'
import LabelGroup from '@/components/LabelGroup';

const ProductCard = (props) => {
  const { Image, SKU, Slug, Title, categories } = props;
  const imageURL = `${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_BASE_URL}${props?.Image?.data?.attributes?.url}`
  return (
    <div className='bg-[#E5E7F5] basis-[18%] flex-1 rounded'>
      <div className="w-full">
        <img src={props?.Image?.data?.attributes?.url} alt="" className='h-[184px]' style={{ width: '100%', objectFit: 'cover', objectPosition: 'center' }}/>
      </div>
      <div className="p-[20px] flex flex-col justify-between">
        <div>
          <span className='font_calibri text-theme-main text-[12px] leading-[18px]'>SKU Code :</span>
          <span className='font_calibri text-theme-main text-[12px] leading-[18px]'>{SKU}</span>
          <p className='pt-[10px] pb-[14px] font_calibri text-lg font-bold leading-[20px] text-theme-main'>{Title}</p>
        </div>
        <LabelGroup labels={categories?.data?.slice(0,2)} />
      </div>
    </div>
  )
}

export default ProductCard