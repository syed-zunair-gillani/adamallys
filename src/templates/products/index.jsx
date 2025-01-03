'use client';
import { useState } from 'react';
import Image from 'next/image';
import Pagination from '@/components/Pagination';
import RightDrawer from '@/components/RightDrawer';
import ProductCard from '@/components/ProductCard';

const itemsPerPage = 5;

const ProductsTemplate = ({data, categories, specificCategorries}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState(data)
  const [searchQuery , setSearchQuery] = useState('')

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (!value) {
      setProducts(data);
      return;
    }
    const searchedProducts = data?.data?.filter((item) =>
      item.attributes.Title.toLowerCase().includes(value.toLowerCase())
    );
    setProducts({ ...products, data: searchedProducts });
  };

  return (
    <main className='mt-[6rem] container mx-auto px-3'>
      <div className='py-[30px] md:py-[60px]'>
        <h1 className='font_calibri capitalize text-[60px] leading-[60px] text-center font-bold text-theme-main'>Products</h1>
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-[12px] mt-[42px]">
          <p className='font_calibri capitalize text-lg leading-[26px] text-theme-main mr-[40px]'>
            Please use the search to filter the products. Please be patient as it has over 50,000 products listed.
          </p>
          <div className="relative flex items-center flex-1 lg:flex-auto min-w-[220px]">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e)=>handleSearch(e)}
              className="w-full lg:max-w-[414px] h-[55px] pl-2 pr-10 py-2 border border-theme-main focus:outline-none text-theme-main focus:text-theme-main"
            />

            <Image
              width={24}
              height={24}
              alt='search-icon'
              src='/svg/search.svg'
              className='absolute right-14'
            />

            <button className="h-[55px] right-0 px-4 py-2 bg-[text-theme-main] text-white bg-theme-main">
              ▼
            </button>
          </div>
          <div className="relative flex items-center flex-1 lg:flex-auto min-w-[220px]">
            <input
              type="text"
              placeholder="Provisions"
              className="w-full lg:max-w-[414px] h-[55px] pl-2 pr-10 py-2 border border-theme-main focus:outline-none text-theme-main focus:text-theme-main"
            />

            <button className="absolute w-6 h-[55px] right-0 text-theme-main">
              ▼
            </button>
          </div>
        </div>
        <div className='w-full h-[1px] bg-theme-main mt-[30px]' />
        <div className="flex gap-[20px] items-center justify-between my-[26px]">
          <p className='font_calibri text-theme-main text-bold text-[24px] md:text-[40px] leading-[40px] font-bold capitalize'>Provisions</p>
          <div className="flex items-center gap-[24px]">
            <p className='text-theme-main text-base md:text-lg md:leading-[26px] font_calibri'>Fresh Vegetables 1421 Search result</p>
            <RightDrawer categories={categories} specificCategorries={specificCategorries} setProducts={setProducts}/>
          </div>
        </div>
        <div className='w-full h-[0.5px] bg-theme-main' />
        <div className='flex gap-[9px] flex-wrap mt-[30px]'>
          {products?.data?.map((product, index) =>
            <ProductCard key={index} {...product.attributes} />
          )}
        </div>
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={products.length}
          onPageChange={setCurrentPage}
        />
      </div>
    </main>
  )
}

export default ProductsTemplate